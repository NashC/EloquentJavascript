//EloquentJavascript Ex 4-3

var testArr = [10,20,30];

function arrayToList(array) {
	var list = null;
	for (x=array.length-1; x>=0; x--) {
		list = {value: array[x], rest: list}
	}
	return list;
}

console.log(arrayToList(testArr));

function listToArray(list) {
  var array = [];
  for (var node = list; node; node = node.rest)
    array.push(node.value);
  return array;
}

console.log(listToArray(arrayToList(testArr)));