// applying filters on this array
let people = [
    { name: "Alice", age: 25, city: "New York", profession: "Engineer" , salary: 95000}, //annual salary
    { name: "Bob", age: 30, city: "San Francisco", profession: "Designer" , salary: 75000},
    { name: "Charlie", age: 35, city: "Los Angeles", profession: "Teacher" , salary:80000},
    { name: "David", age: 28, city: "Chicago", profession: "Developer" , salary: 75000},
    { name: "Eve", age: 22, city: "New York", profession: "Developer" , salary: 75000},
    { name: "Frank", age: 40, city: "Miami", profession: "Manager" , salary: 115000},
    { name: "Grace", age: 27, city: "New York", profession: "Engineer" , salary: 95000},
    { name: "Hank", age: 32, city: "Seattle", profession: "Engineer" , salary: 95000},
    { name: "Ivy", age: 29, city: "Chicago", profession: "Designer" , salary: 75000},
    { name: "Jack", age: 33, city: "San Francisco", profession: "Teacher" , salary: 80000}
  ];
let data = people.filter( (people) => people.city ==='New York' && people.profession === 'Engineer' );
//we will get data about only Engineers in NewYork.
console.log(data);

let techTeam = people.filter((people) => people.profession !== 'teacher' );
// A tech team may have developers,designers,managers,engineers but not teachers
console.log(techTeam);

let age = people.filter((people) => {
    return people.age < 28;
})
//Only the people under 28 years will appread in console.
console.log(age);
//maps in javaScript
//The map method is crucial for data transformation tasks in JavaScript. It allows developers to manipulate arrays in a functional programming style, making code more readable and easier to maintain. By transforming data into the desired format without mutating the original data, map helps in writing cleaner and more predictable code.
//Names of developer
let names = people.filter((people) => people.profession === 'Developer').map(people => people.name)
console.log(names);
//i apply filter on the array to get developers and apply map to get their names
//Reduce in JavaScript
// The reduce method in JavaScript is used to combine all the elements in an array into a single value. It does this by applying a function to each element in the array (from left to right) and accumulating the result.


//reduce method use two argument one is accumulator and other is current value which i give person and initial value of accummulator i give 0 and as a result it return total sum of salaries as a one value.
let budget = people.reduce((acc , person) => {
  console.log(`acc: ${acc} , person: ${person}`);
  return acc + person.salary;
  
   
} ,0);
console.log(budget);
