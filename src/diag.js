// Bảng chẩn đoán góc phải (mọi map; 🩺 / phím 1; chỉ đo khi đang hiện): từng bước lúc vào map + ms,
// fps / khung chậm nhất theo từng phần của frame(), các khung > 150 ms, và lỗi JS (lỗi trong frame() làm dừng vòng vẽ => "đơ").
const LAST = 'chilldrive.diag.last';
export class Diag {
  constructor() {
    const el = this.el = document.createElement('div');
    // góc phải dưới cụm tốc độ (bảng Setting ở góc trái); nút 🩺 / phím 1 ẩn hiện (nhớ trong localStorage)
    el.style.cssText = 'position:fixed;right:6px;top:118px;z-index:99999;max-width:46vw;max-height:calc(100vh - 260px);overflow:hidden;'
      + 'font:10px/1.25 ui-monospace,Menlo,monospace;color:#ff0;background:rgba(0,0,0,.55);padding:3px 5px;border-radius:4px;pointer-events:none;white-space:pre-wrap;display:none';
    const btn = this.btn = document.createElement('button');
    btn.textContent = '🩺'; btn.title = 'Ẩn / hiện bảng chẩn đoán (phím 1)';
    btn.style.cssText = 'position:fixed;right:6px;top:88px;z-index:99999;width:28px;height:26px;padding:0;border-radius:6px;border:1px solid rgba(255,255,255,.3);'
      + 'background:rgba(0,0,0,.45);color:#fff;font-size:14px;line-height:1;cursor:pointer;display:none';
    btn.onclick = (e) => { e.stopPropagation(); this.toggle(); };
    // hàng nút thử nhanh: bật / tắt từng phần để đo fps (không lưu, vào lại map là bật hết)
    const bar = this.bar = document.createElement('div');
    bar.style.cssText = 'position:fixed;right:40px;top:88px;z-index:99999;max-width:60vw;display:none;flex-wrap:wrap;gap:3px;justify-content:flex-end';
    this.t = {};
    document.body.append(el, btn, bar);
    this.active = false;
    try { this.shown = localStorage.getItem('chilldrive.diag.shown') !== '0'; } catch { this.shown = true; }
    this.steps = []; this.slow = []; this.errors = []; this.title = '';
    try { const l = localStorage.getItem(LAST); if (l) { this.steps.push('LẦN TRƯỚC KẸT Ở: ' + l); localStorage.removeItem(LAST); } } catch { /* chế độ riêng tư */ }
    this.sec = new Map(); this._t = 0; this._fr = 0; this._fmax = 0; this._acc = 0; this._shown = 0;
    const err = (m) => { this.errors.push(m); if (this.errors.length > 4) this.errors.shift(); this._render(); };
    window.addEventListener('error', (e) => err('LỖI ' + (e.message || e.error) + ' @' + (e.filename || '').split('/').pop() + ':' + e.lineno));
    window.addEventListener('unhandledrejection', (e) => err('LỖI promise ' + (e.reason?.message || e.reason)));
  }
  set on(v) { this.active = !!v; this.btn.style.display = v ? 'block' : 'none'; this._show(); }
  // thêm 1 nút thử: id => this.t[id] (true = đang bật), onChange(bật?) khi bấm
  addTest(id, label, onChange) {
    const b = document.createElement('button');
    this.t[id] = true;
    const paint = () => { b.textContent = (this.t[id] ? '✓ ' : '✗ ') + label; b.style.background = this.t[id] ? 'rgba(0,90,0,.7)' : 'rgba(140,0,0,.75)'; };
    b.style.cssText = 'height:24px;padding:0 6px;border-radius:5px;border:1px solid rgba(255,255,255,.3);color:#fff;font:11px system-ui,sans-serif;cursor:pointer';
    b.onclick = (e) => { e.stopPropagation(); this.t[id] = !this.t[id]; paint(); onChange?.(this.t[id]); this.sec.clear(); this.slow.length = 0; };
    paint(); this.bar.append(b);
    (this._tests || (this._tests = [])).push({ id, paint, onChange });
  }
  // bật lại hết (vào lại map)
  resetTests() { for (const T of this._tests || []) if (!this.t[T.id]) { this.t[T.id] = true; T.paint(); T.onChange?.(true); } }
  toggle() { this.shown = !this.shown; try { localStorage.setItem('chilldrive.diag.shown', this.shown ? '1' : '0'); } catch { /* chế độ riêng tư */ } this._show(); }
  _show() { this.el.style.display = this.active && this.shown ? 'block' : 'none'; this.bar.style.display = this.active && this.shown ? 'flex' : 'none'; if (this.active) this._render(); }
  get on() { return this.active; }
  // một bước lúc tải (giữ 14 bước gần nhất)
  step(name, ms) {
    this.steps.push(name + ' ' + (ms == null ? '' : ms.toFixed(0) + ' ms'));
    if (this.steps.length > 14) this.steps.shift();
    if (this.active) this._render();
  }
  // chạy fn và ghi ms; trước khi chạy lưu tên bước vào localStorage => nếu đơ hẳn (tải lại trang) dòng đầu báo bước kẹt lần trước
  time(name, fn) {
    try { localStorage.setItem(LAST, name); } catch { /* chế độ riêng tư */ }
    const t = performance.now();
    try { return fn(); } finally { this.step(name, performance.now() - t); try { localStorage.removeItem(LAST); } catch { /* chế độ riêng tư */ } }
  }
  // đánh dấu xong 1 đoạn (đo từ mốc trước); lưu 'sau: tên' => đơ hẳn ở đoạn kế tiếp thì lần sau biết
  mark(name, ms) { this.step(name, ms); try { localStorage.setItem(LAST, 'sau bước: ' + name); } catch { /* chế độ riêng tư */ } }
  clearLast() { try { localStorage.removeItem(LAST); } catch { /* chế độ riêng tư */ } }
  // đo các phần trong frame(): begin() đầu khung, lap(tên) sau mỗi phần, end() cuối khung
  begin() { this._meas = this.active && this.shown; if (this._meas) this._t = this._t0 = performance.now(); }
  lap(name) {
    if (!this._meas) return;
    const t = performance.now(), d = t - this._t; this._t = t;
    this._cur = this._cur || {}; this._cur[name] = d;
    const s = this.sec.get(name) || 0; if (d > s) this.sec.set(name, d);
  }
  end() {
    if (!this._meas) return;
    const t = performance.now(), ms = t - this._t0;
    this._fr++; this._acc += ms; if (ms > this._fmax) this._fmax = ms;
    if (ms > 150 && this._cur) {
      const top = Object.entries(this._cur).sort((a, b) => b[1] - a[1]).slice(0, 3).map(([k, v]) => k + ' ' + v.toFixed(0)).join(', ');
      this.slow.push(`khung ${ms.toFixed(0)} ms: ${top}`); if (this.slow.length > 5) this.slow.shift();
    }
    this._cur = null;
    if (t - this._shown > 500) this._render();
  }
  _render() {
    const t = performance.now(), span = (t - (this._shown || t)) / 1000 || 1;
    const fps = this._fr / span, avg = this._fr ? this._acc / this._fr : 0;
    const sec = [...this.sec.entries()].sort((a, b) => b[1] - a[1]).slice(0, 5).map(([k, v]) => k + ' ' + v.toFixed(0)).join(' · ');
    this.el.textContent = ['Chẩn đoán · ' + this.title, ...this.steps,
      `fps ${fps.toFixed(0)} · CPU khung TB ${avg.toFixed(0)} / max ${this._fmax.toFixed(0)} ms`, sec ? 'max phần: ' + sec : '', this.info ? this.info() : '',
      ...this.slow, ...this.errors].filter(Boolean).join('\n');
    this._shown = t; this._fr = 0; this._acc = 0; this._fmax = 0; this.sec.clear();
  }
}
