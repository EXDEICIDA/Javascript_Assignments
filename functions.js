//normal fucntion
function calcAgeI(birthYear) {
  return 2024 - birthYear;
}

ageMe = calcAgeI(2004);
console.log(ageMe);

//ananymouse fucntion
const calcage2 = function (birthYear) {
  return 2024 - birthYear;
};

const age2 = calcage2(2004);
console.log(age2);
