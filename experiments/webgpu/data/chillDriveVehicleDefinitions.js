// Curated vehicle definitions for the drive slice (Chill Drive parity, M1/M3).
// Plain data only: forward axis, six vehicle cameras (pose + lens) and speed tiers.
const CAMS = {
  chase:   {distance: 8.5, height: 3.2,  lateral: 0,  lookAhead: 3, lookHeight: 1.3,  smooth: 5, fov: 55},
  low:     {distance: 4.5, height: 1.0,  lateral: 0,  lookAhead: 4, lookHeight: 0.9,  smooth: 6, fov: 50},
  side:    {distance: 0,   height: 1.6,  lateral: 5,  lookAhead: 0, lookHeight: 1.2,  smooth: 5, fov: 50},
  cockpit: {distance: 0,   height: 1.25, lateral: 0,  lookAhead: 8, lookHeight: 1.25, smooth: 12, fov: 62},
  orbit:   {distance: 12,  height: 6,    lateral: 0,  lookAhead: 0, lookHeight: 1.2,  smooth: 3, fov: 45},
  drone:   {distance: 6,   height: 14,   lateral: 0,  lookAhead: 8, lookHeight: 0.5,  smooth: 3, fov: 50},
};

export const VEHICLE_DEFS = {
  mustang: {
    id: 'mustang', name: 'Mustang',
    yawOffset: Math.PI,           // model forward axis correction
    dims: {length: 4.8, width: 2.0, height: 1.4},
    cameras: CAMS,
    speedTiers: [6, 12, 20, 30, 42], // metres / second
    tint: '#c0392b',
  },
  mazda: {
    id: 'mazda', name: 'Mazda',
    yawOffset: Math.PI,
    dims: {length: 4.3, width: 1.9, height: 1.3},
    cameras: CAMS,
    speedTiers: [5, 10, 17, 26, 36],
    tint: '#2c3e50',
  },
};
export const DEFAULT_VEHICLE = 'mustang';
export const CAMERA_MODES = ['chase', 'low', 'side', 'cockpit', 'orbit', 'drone'];
export function getVehicleDef(id) { return VEHICLE_DEFS[id] || VEHICLE_DEFS[DEFAULT_VEHICLE]; }
