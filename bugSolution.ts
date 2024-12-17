function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];
//console.log(greeter(user)); // Error!

console.log(greeter(user[0])); // Correct: Accesses the first element of the array

//Alternative solution: modify the function signature
function greeterArray(person: string[]): string {
    return "Hello, " + person.join(" ");
}
console.log(greeterArray(user));