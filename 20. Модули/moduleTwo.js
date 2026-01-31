/*
//Название переменных могут не совпадать
import printMyName from "./moduleOne.js";

printMyName();
*/

import { one as oneRenamed, two } from "./moduleOne.js";

console.log(oneRenamed);
console.log(two);
