isEven = (num) => num % 2 === 0;
users = [
  {
    name: "Yazeed",
    age: 25,
  },
  {
    name: "Sam",
    age: 30,
  },
  {
    name: "Bill",
    age: 20,
  },
  {
    name: "Bil",
    age: 20,
  },
];

result = [1, 2, 3, 4].filter(isEven);
console.log(result); // [2, 4]
add = (x) => (y) => x + y;
result = add(10)(20);
console.log(result); // 30
startsWithB = (string) => string.toLowerCase().startsWith("b");
namesStartingWithB = [];
for (let i = 0; i < users.length; i++) {
  if (startsWithB(users[i].name)) {
    namesStartingWithB.push(users[i]);
  }
}
console.log(namesStartingWithB);
// [{ "name": "Bill", "age": 20 }]
