// Path-following drive controller: keeps a vehicle on the road at a chosen speed tier.
export const SPEED_TIERS = [6, 12, 20, 30, 42]; // metres / second

export function createDriveController() {
  let s = 0, lat = 0, speed = 0, tier = 1;

  function reset(s0 = 0, lat0 = 0, t0 = 1) { s = s0; lat = lat0; tier = t0; speed = 0; }

  function update(dt, path, input) {
    const target = SPEED_TIERS[tier];
    const rate = target >= speed ? 5 : 9;
    speed += Math.sign(target - speed) * Math.min(Math.abs(target - speed), rate * dt);

    const steer = (input.left ? 1 : 0) - (input.right ? 1 : 0);
    lat += steer * 7 * dt * (0.5 + speed / 25);
    if (!steer) lat *= Math.max(0, 1 - 1.5 * dt);
    const lim = Math.max(1, (path.halfWidth || 4.6) - 1.3);
    lat = Math.max(-lim, Math.min(lim, lat));

    s += speed * dt; if (s < 0) s = 0;

    const p = path.at(s), th = p.th, rx = Math.cos(th), rz = -Math.sin(th);
    return {x: p.x + rx * lat, y: p.y, z: p.z + rz * lat, th, speed, s, lat};
  }

  return {
    reset, update,
    get speed() { return speed }, get s() { return s }, get tier() { return tier },
    tierUp() { tier = Math.min(SPEED_TIERS.length - 1, tier + 1); return tier },
    tierDown() { tier = Math.max(0, tier - 1); return tier },
  };
}
