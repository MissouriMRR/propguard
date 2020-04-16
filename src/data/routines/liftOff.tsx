interface DroneDataInterface {
  armed: boolean;
  altitude: number;
  velocity: number;
  yaw: number;
  pitch: number;
  roll: number;
}

const droneLiftOff = (droneData: DroneDataInterface, altitude: number): any => {
  const newDroneData = droneData;

  newDroneData.armed = true;
  newDroneData.altitude = altitude;
  // TODO: Simulate velocity
  newDroneData.velocity = 0;
  newDroneData.yaw = 0;
  newDroneData.pitch = 0;
  newDroneData.roll = 0;

  return newDroneData;
};

export { droneLiftOff };
