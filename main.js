
import { sleep } from './sleep.js';
import { getRandomNumber } from './random.js';
import { Person } from './person.js';

async function main() {
  const randomTime = getRandomNumber(100, 999);
  console.log(`Wait for ${randomTime} milliseconds...`);
  
  await sleep(randomTime);

  const person = new Person("Ali Karimov", 1995);
  console.log(person.getInfo()); 
}

main();
