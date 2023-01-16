import { getUsers } from "./apiSimulationSolution.js";

console.log(getUsers(10, 0).then((data) => console.log(data)));
