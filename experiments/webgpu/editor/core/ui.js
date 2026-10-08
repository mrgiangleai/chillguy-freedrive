// Reusable, presentational editor UI layer.
// Contains ONLY display helpers and the compact design tokens/stylesheet.
// No feature logic, no runtime/rendering access.
import {ICONS} from './icons.js';

export const TOKENS = {gap: 6, radius: 8, radiusSm: 6, accent: '#ff9a3c', btn: 28, rail: 44, font: 12};

/** Inline line icon as SVG markup. Unknown names render nothing (safe no-op). */
export function icon(name, size = 18) {
  const path = ICONS[name];
  if (!path) return '';
  return '<svg class="ico" width="' + size + '" height="' + size + '" viewBox="0 0 24 24" aria-hidden="true">' + path + '</svg>';
}

const STYLE_ID = 'editor-ui-tokens';

/**
 * Inject the compact editor stylesheet once. Tokens are CSS variables; every
 * class name used by main.js / LandscapeModule / LightingModule is preserved.
 */
export function installEditorStyles() {
  if (document.getElementById(STYLE_ID)) return;
  const css = document.createElement('style');
  css.id = STYLE_ID;
  css.textContent = `
:root{
  --ui-gap:6px;--ui-radius:8px;--ui-radius-sm:6px;
  --ui-bg-rgb:17 17 17;--ui-panel-rgb:17 17 17;--ui-panel-a:.93;--ui-bar-a:.9;--ui-line:#ffffff33;--ui-line-hi:#ffffff5c;
  --ui-fg:#e8eaec;--ui-fg-dim:#aab3ba;--ui-accent:#ff9a3c;
  --ui-btn:28px;--ui-rail:44px;--ui-font:12px system-ui;
}
#customize{position:fixed;left:50%;bottom:14px;transform:translateX(-50%);z-index:7;display:flex;flex-direction:row;align-items:center;gap:6px;padding:6px;width:max-content;max-width:calc(100vw - 24px);background:rgb(var(--ui-bg-rgb) / var(--ui-bar-a));border:1px solid var(--ui-line);border-radius:14px;font:var(--ui-font);color:var(--ui-fg);backdrop-filter:blur(8px)}
.toolrail{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;gap:4px}
.tooltab{min-width:62px;height:48px;padding:2px 10px;border:1px solid var(--ui-line);border-radius:10px;background:#ffffff0d;color:#dae0e4;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;transition:.15s}
.tooltab span{font-size:10px;line-height:1;letter-spacing:.2px;opacity:1;white-space:nowrap}
.tooltab:hover{background:#ffffff14;color:#fff}
.tooltab.on{background:#666a;border-color:var(--ui-accent);color:#fff;box-shadow:0 0 0 1px #ff9a3c55}
.ico{display:inline-block;vertical-align:-3px;flex:none;stroke:currentColor;fill:none;stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round}
.tooltab .ico{width:20px;height:20px}
#afBox{position:fixed;z-index:8;width:34px;height:24px;pointer-events:none;transform:translate(-50%,-50%);opacity:0;transition:opacity .12s}
#afBox:before,#afBox:after{content:'';position:absolute;inset:0;border-left:2px solid #bfffc8;border-right:2px solid #bfffc8}
#afBox:before{clip-path:polygon(0 0,35% 0,35% 2px,0 2px,0 100%,35% 100%,35% calc(100% - 2px),0 calc(100% - 2px))}
#afBox:after{clip-path:polygon(65% 0,100% 0,100% 100%,65% 100%,65% calc(100% - 2px),98% calc(100% - 2px),98% 2px,65% 2px)}
button{cursor:pointer;font:inherit;color:inherit}
button:focus-visible,input:focus-visible,select:focus-visible{outline:2px solid var(--ui-accent);outline-offset:1px}
input[type=range]{accent-color:var(--ui-accent)}
#editBtn{background:#111e;color:#fff;border:1px solid var(--ui-line-hi);padding:8px 12px;border-radius:var(--ui-radius)}
#editor{position:fixed;left:0;right:0;top:10px;bottom:76px;display:flex;justify-content:space-between;align-items:flex-start;gap:10px;padding:0 12px;pointer-events:none;overflow:visible;color:var(--ui-fg);font:var(--ui-font)}
#editor[hidden]{display:none!important}
#editor .library,#editor .inspector{position:fixed;pointer-events:auto;width:300px;max-height:calc(100vh - 96px);overflow:auto;background:rgb(var(--ui-panel-rgb) / var(--ui-panel-a));padding:10px;border-radius:var(--ui-radius);backdrop-filter:blur(8px);box-shadow:0 8px 24px #0007}
#editor .library:empty,#editor .inspector:empty{display:none}
.panelHead{margin-bottom:6px;padding-bottom:5px;border-bottom:1px solid var(--ui-line);cursor:move;user-select:none;-webkit-user-select:none}
.panelHead small{display:block;color:var(--ui-fg-dim);margin-top:2px}
.hint{color:var(--ui-fg-dim);display:block;padding:4px 0}
.libsearchRow{margin:6px 0}
.libsearch{width:100%;height:28px;padding:0 8px;border:1px solid var(--ui-line);border-radius:6px;background:#ffffff0d;color:var(--ui-fg);font:11px system-ui;box-sizing:border-box}
.libsearch::placeholder{color:var(--ui-fg-dim);opacity:1}
.libgrid{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:6px 0}
.libtile{position:relative;border:1px solid var(--ui-line);border-radius:10px;background:#ffffff0a;padding:6px;overflow:hidden}
.libtile.sel{border-color:var(--ui-accent);box-shadow:0 0 0 1px #ff9a3c55}
.libtile.off{opacity:.62}
.libtile:hover{background:#ffffff12}
.libclick{position:absolute;inset:0;cursor:pointer;z-index:1}
.libthumb{height:56px;border-radius:7px;display:grid;place-items:center;background:#00000040;color:#cfd8de}
.libtile.sel .libthumb{color:#fff}
.libthumb.c-vehicle{background:linear-gradient(160deg,#2a3550,#111823)}
.libthumb.c-character{background:linear-gradient(160deg,#4a3a2a,#1a1410)}
.libthumb.c-landscape{background:linear-gradient(160deg,#2c4526,#101810)}
.libname{font-size:11px;font-weight:600;margin-top:5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.libmeta{font-size:10.5px;color:var(--ui-fg-dim);margin:2px 0 4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.libbtns{position:relative;z-index:2;display:flex;gap:4px;flex-wrap:wrap}
.libbtns button{height:22px;padding:0 7px;font-size:10.5px;border:1px solid var(--ui-line);border-radius:5px;background:#ffffff12;color:var(--ui-fg)}
.libbtns button:hover{background:#ffffff22}
.fxstack{display:flex;flex-direction:column;gap:8px;margin:6px 0}
.fxcard{border:1px solid var(--ui-line);border-radius:10px;background:#ffffff0a;padding:8px}
.fxcard.off{opacity:.58}
.fxhead{display:flex;align-items:center;justify-content:space-between;gap:6px;margin-bottom:4px}
.fxname{font-size:12px;font-weight:600;display:inline-flex;align-items:center;gap:5px}
.fxbtns{display:flex;gap:3px}
.fxbtns button{height:22px;min-width:22px;padding:0 6px;font-size:10.5px;border:1px solid var(--ui-line);border-radius:5px;background:#ffffff12;color:var(--ui-fg);display:inline-flex;align-items:center;justify-content:center}
.fxbtns .ico{width:13px;height:13px}
.fxbtns button:hover{background:#ffffff22}
.placebar button.on{background:#666a;border-color:var(--ui-accent);color:#fff}
.layers{display:flex;flex-direction:column;gap:3px;margin:6px 0}
.layerRow{display:flex;align-items:center;gap:6px;padding:3px 5px;border-radius:6px;background:#ffffff0d}
.layerRow.off{opacity:.58}
.layerRow .lname{flex:1;font-size:11px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.layerRow button{width:24px;height:22px;padding:0;display:grid;place-items:center;border:1px solid var(--ui-line);border-radius:5px;background:#ffffff12;color:var(--ui-fg)}
.layerRow button:hover{background:#ffffff22}
.inspector select,.library select{width:100%;height:26px;border:1px solid var(--ui-line);border-radius:6px;background:#ffffff0d;color:var(--ui-fg);font:11px system-ui;box-sizing:border-box}
body.theatre #customize,body.theatre #editor{display:none!important}
body.theatre #driveHud{display:none!important}
#driveHud{position:fixed;left:50%;top:54px;transform:translateX(-50%);z-index:11;display:inline-flex;align-items:center;gap:6px;padding:6px 14px;background:rgb(var(--ui-bg-rgb) / var(--ui-bar-a));border:1px solid var(--ui-line);border-radius:999px;font:var(--ui-font);color:var(--ui-fg);backdrop-filter:blur(8px);white-space:nowrap}
#driveHud[hidden]{display:none!important}
#driveHud .ico{width:16px;height:16px;color:var(--ui-accent)}
.tabs,.actions{display:flex;flex-wrap:wrap;gap:5px;margin:8px 0}
.actions{align-items:center}
.tabs button,.actions button{height:var(--ui-btn);padding:0 8px;border:1px solid var(--ui-line);border-radius:var(--ui-radius-sm);background:#ffffff0d;color:var(--ui-fg);display:inline-flex;align-items:center;gap:4px;line-height:1;white-space:nowrap;transition:.12s}
.tabs button:hover,.actions button:hover{background:#ffffff1c}
.actions button.on{border-color:var(--ui-accent);background:#666a;color:#fff}
.actions button:disabled,.tabs button:disabled{opacity:.45;cursor:default}
.actions button .ico{width:15px;height:15px}
.tab.on{outline:2px solid #9cf}
.card{display:grid;grid-template-columns:1fr auto;gap:8px;align-items:center;padding:6px;background:#ffffff0d;border-radius:var(--ui-radius-sm);margin:5px 0}
.modelinfo{cursor:pointer;min-width:0}
.modelinfo b{display:block;font-size:12px}
.modelinfo small{display:block;line-height:1.35;margin-top:2px;color:var(--ui-fg-dim)}
.stack{display:flex;flex-direction:column;gap:3px}
.stack button{min-width:54px;height:22px;padding:0 6px;border:1px solid var(--ui-line);border-radius:var(--ui-radius-sm);background:#ffffff0d;color:var(--ui-fg);font-size:11px}
.stack button:hover{background:#ffffff1c}
.row{display:grid;grid-template-columns:104px 1fr;gap:8px;align-items:center;margin:6px 0}
.row input{width:100%}
.row input[type=range]{accent-color:var(--ui-accent)}
.sel{color:#9ef;font-weight:700;margin-bottom:2px}
.drop{border:1px dashed #9cf;padding:8px;border-radius:var(--ui-radius-sm);text-align:center;margin:8px 0;display:flex;align-items:center;justify-content:center;gap:6px;color:#cfe6f5}
.drop .ico{width:16px;height:16px}
.materials{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:8px 0}
.materialTile{border:1px solid var(--ui-line);border-radius:var(--ui-radius-sm);padding:5px;background:#ffffff0a;color:#eee;text-align:left}
.materialTile.on{border-color:var(--ui-accent);background:#7776}
.materialSwatch{height:44px;border-radius:5px;margin-bottom:4px}
.materialTile small{display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.inspectWrap{display:grid;grid-template-columns:36px 1fr;gap:8px;margin-top:8px}
.inspectNav{display:flex;flex-direction:column;gap:6px}
.inspectNav button{width:36px;height:36px;padding:0;border:1px solid var(--ui-line);border-radius:9px;background:#ffffff0d;color:#dae0e4;display:grid;place-items:center}
.inspectNav button:hover{background:#ffffff1c;color:#fff}
.inspectNav button.on{border-color:var(--ui-accent);background:#666a;color:#fff}
.inspectNav button .ico{width:18px;height:18px}
.inspectBody{min-width:0}
.lightcard{cursor:pointer}
.lightcard:hover{background:#ffffff1a}
.lightcard.on{border-color:var(--ui-accent);background:#666a}
.langSwitch{position:fixed;right:18px;bottom:18px;z-index:10;display:flex;background:rgb(var(--ui-bg-rgb) / var(--ui-bar-a));border:1px solid var(--ui-line);border-radius:999px;padding:3px;backdrop-filter:blur(8px)}
#uicfg{position:fixed;left:12px;bottom:80px;z-index:9;width:230px;background:rgb(var(--ui-panel-rgb) / var(--ui-panel-a));border:1px solid var(--ui-line);border-radius:10px;padding:10px;color:var(--ui-fg);font:var(--ui-font);backdrop-filter:blur(8px);box-shadow:0 8px 24px #0007}
#uicfg[hidden]{display:none!important}
.langSwitch button{border:0;background:transparent;color:#c6ccd1;padding:5px 9px;border-radius:999px;font:700 11px system-ui}
.langSwitch button.on{background:#fff;color:#111}
#toast{position:fixed;left:50%;bottom:24px;transform:translateX(-50%);background:#000d;color:#fff;padding:8px 12px;border-radius:var(--ui-radius-sm);z-index:9}
.section{margin:8px 0;border-top:1px solid var(--ui-line);padding-top:6px}
.sec-h{display:flex;align-items:center;gap:6px;font-weight:700;font-size:12px;margin-bottom:4px}
.chip{height:24px;padding:0 9px;border:1px solid var(--ui-line);border-radius:999px;background:#ffffff0d;color:var(--ui-fg);font-size:11px;display:inline-flex;align-items:center;gap:4px}
.chip.on{border-color:var(--ui-accent);background:#666a;color:#fff}
`;
  document.head.appendChild(css);
}
