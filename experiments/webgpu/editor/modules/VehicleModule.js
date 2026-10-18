// Vehicle definition access for the editor (data lives in data/).
import {VEHICLE_DEFS, getVehicleDef, DEFAULT_VEHICLE} from '../../data/chillDriveVehicleDefinitions.js';

export function createVehicleModule() {
  return {
    defs: VEHICLE_DEFS,
    defaultId: DEFAULT_VEHICLE,
    getDef: getVehicleDef,
  };
}
