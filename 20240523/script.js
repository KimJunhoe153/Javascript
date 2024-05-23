function getName(a, b, c) {
  const name = a;
  const age = b;
  const gender = c;
  const value = name + " " + age + " " + gender;
  return value;
}
const value = getName("Tom", 25, "Man");
console.log(value);
