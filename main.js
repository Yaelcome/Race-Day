//Early adults receive a race number at or above 1000.
let raceNumber = Math.floor(Math.random() * 1000);

//Boolean indicates whether a runner registered early or not.
const registeredEarly = false;

//A runner is an adult if their age is over 18.
let runnersAge = 18;

//checks whether the runner is an adult or not AND registered early.
if (runnersAge > 18 && registeredEarly) {
  raceNumber += 1000; console.log(raceNumber += 1000); 
}


//
if (runnersAge > 18 && registeredEarly) {
  console.log(`Race Number ${raceNumber}. Your race starts at 9:30 AM.`);
} else if (runnersAge > 18 && !registeredEarly) {
   console.log(`Race Number ${raceNumber}. Late adults race starts at 11:00 AM.`);
} else if (runnersAge < 18) {
  console.log(`Race Number ${raceNumber}. Youth registrants run at 12:30 pm (regardless of registration).`);
} else {
  console.log('Please see registration desk');
}

