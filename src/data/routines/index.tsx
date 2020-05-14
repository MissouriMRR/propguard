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

const droneConstMove = (
  droneData: DroneDataInterface,
  droneSpeed: number
): DroneDataInterface => {
  const newDroneData = droneData;

  newDroneData.armed = true;
  newDroneData.velocity = droneSpeed;
  newDroneData.pitch = 30;

  return newDroneData;
};

// TODO: Add comments
const performDroneRoutine = (
  droneData: DroneDataInterface,
  task: string
): DroneDataInterface => {
  let newDroneData = droneData;

  if (task.includes("droneLiftOff")) {
    // Use regex to grab altitude parameters in the task string
    const altitude = task.search(/[0-9]+/);
    newDroneData = droneLiftOff(newDroneData, altitude);
  } else if (task.includes("droneLand")) {
    newDroneData = droneLand();
  } else if (task.includes("droneConstMove")) {
    const velocity = task.search(/[0-9]+/);
    newDroneData = droneConstMove(newDroneData, velocity);
  }

  return newDroneData;
};

export { performDroneRoutine };
