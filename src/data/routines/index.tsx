interface DroneDataInterface {
  armed: boolean;
  altitude: number;
  velocity: number;
  yaw: number;
  pitch: number;
  roll: number;
}

// Arms drone and changes drone altitude
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

// Stop and land the drone, then disarm.
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

// Make the drone move in a constant velocity
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

// Takes a string of the function that the drone should run
// and uses regex parsing to get the arguments for that function
// The string comes from the tutorial files specifying what function
// to run if the user successfully finishes the solution
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
