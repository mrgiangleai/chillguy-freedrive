// Curated vehicle definitions for the drive slice (Chill Drive parity, M1).
// Plain data only: forward axis, chase-camera profile and speed tiers.
export const VEHICLE_DEFS = {
  mustang: {
    id: 'mustang', name: 'Mustang',
    yawOffset: Math.PI,           // model forward axis correction
    dims: {length: 4.8, width: 2.0, height: 1.4},
    chase: {distance: 8.5, height: 3.2, lookAhead: 3, lookHeight: 1.3, smooth: 5},
    speedTiers: [6, 12, 20, 30, 42], // metres / second
    tint: '#c0392b',
  },
  mazda: {
    id: 'mazda', name: 'Mazda',
    yawOffset: Math.PI,
    dims: {length: 4.3, width: 1.9, height: 1.3},
    chase: {distance: 8.0, height: 3.0, lookAhead: 3, lookHeight: 1.2, smooth: 5.5},
    speedTiers: [5, 10, 17, 26, 36],
    tint: '#2c3e50',
  },
};
export const DEFAULT_VEHICLE = 'mustang';
export function getVehicleDef(id) { return VEHICLE_DEFS[id] || VEHICLE_DEFS[DEFAULT_VEHICLE]; }
