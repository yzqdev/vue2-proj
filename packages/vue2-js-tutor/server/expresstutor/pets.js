const pets = [
  {
    type: "dog",
    name: "max",
  },
  { type: "cat", name: "karl" },
  {
    type: "dog",
    name: "tommy",
  },
];
function findDog(name) {
  for (let i = 0; i < pets.length; i++) {
    if (pets[i].type == "dog" && pets[i].name === name) {
      return pets[i];
    }
  }
}
const pet = pets.find((pet) => pet.type === "dog" && "tommy" === pet.name);
console.log(pet);
console.log(Math.floor(342.3));
