//EloquentJavascript_Ex5-3

/*
Historical Life Expectancy
When we looked up all the people in our data set that lived more than 90 years, only the latest generation in the data came out. Let’s take a closer look at that phenomenon.

Compute and output the average age of the people in the ancestry data set per century. A person is assigned to a century by taking their year of death, dividing it by 100, and rounding it up, as in Math.ceil(person.died / 100).

For bonus points, write a function groupBy that abstracts the grouping operation. It should accept as arguments an array and a function that computes the group for an element in the array and returns an object that maps group names to arrays of group members.
*/

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

function century(p) {return Math.ceil(p.died/100)};
function age(p) {return p.died - p.born}
var centAges = {};

function groupBy(arr) {
 // var centAges = {};
  for(var i = 0; i < arr.length; i++) {
    if (centAges[century(arr[i])] != undefined) {
    	centAges[century(arr[i])].push(age(arr[i]));
    }
    else {
    	centAges[century(arr[i])] = [age(arr[i])];
    }
  }
  return centAges;
}

groupBy(ancestry);
for(var cent in centAges) {
  console.log(cent + ": " + average(centAges[cent])); 
}