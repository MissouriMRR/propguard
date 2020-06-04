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

// Takes an array of chars which each char representing a digit of a number
// and returns the integer of the number
const numArrayReducer = (stringArr: string[]): number => {
  const result = stringArr.reduce((prev, current) => prev + current);
  return parseFloat(result);
};

// Takes a string of the function that the drone should run
// and uses regex parsing to get the arguments for that function
// The string comes from the tutorial files specifying what function
// to run if the user successfully finishes the solution
const performDroneRoutine = (
  droneData: DroneDataInterface,
  task: string
): DroneDataInterface => {
  // This regex pattern supports whole numbers, decimals, and negatives
  const numRegex = /([0-9]+\.[0-9])|([0-9]\.[0-9]+)|(\.[0-9]+)|([-]{0,1}[0-9]+)/g;
  let regexMatch = [];
  let newDroneData = droneData;

  if (task.includes("droneLiftOff")) {
    // Use regex to grab altitude parameters in the task string
    regexMatch = task.match(numRegex) || [];

    if (regexMatch.length !== 0)
      newDroneData = droneLiftOff(newDroneData, numArrayReducer(regexMatch));
  } else if (task.includes("droneLand")) {
    newDroneData = droneLand();
  } else if (task.includes("droneConstMove")) {
    regexMatch = task.match(numRegex) || [];

    if (regexMatch.length !== 0)
      newDroneData = droneConstMove(newDroneData, numArrayReducer(regexMatch));
  }

  return newDroneData;
};

export { performDroneRoutine };
