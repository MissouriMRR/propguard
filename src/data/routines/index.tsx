interface DroneDataInterface {
  armed: boolean;
  altitude: number;
  velocity: number;
  yaw: number;
  pitch: number;
  roll: number;
}

const droneLiftOff = (
  droneData: DroneDataInterface,
  altitude: number
): DroneDataInterface => {
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

const droneLand = (): DroneDataInterface => {
  const newDroneData = {
    armed: false,
    altitude: 0,
    velocity: 0,
    yaw: 0,
    pitch: 0,
    roll: 0
  };

  return newDroneData;
};

export { droneLiftOff, droneLand };
