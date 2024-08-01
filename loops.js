const Id = {
  firstName: "Jesolu",
  lastName: "Madrid",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Elo", "Ramos"],
  hasDriversLicense: true,

  calcAge: function () {
    return 2037 - this.birthYear;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.birthYear} year old ${this.job} and he has a ${this.hasDriversLicense}`;
  },
};

//exercise
//Jesolu has 3 friends and his best friednis called Ramos

console.log(
  Id.firstName +
    " has " +
    Id.friends.length +
    " friends and his best friend is called " +
    Id.friends[2]
);

//console.log(Id["calcAge"](1991));

//exercise for example string emthod:
console.log(Id.getSummary());

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weigths repetition ${rep}`);
}
