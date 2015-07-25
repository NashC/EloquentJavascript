//EloquentJavascript Ex 4-2

var testArr = ["a", "b", "c"];
var testArr2 = [1,2,3,4,5,6];

function reverseArray(array) {
	var newArray = [];
	for (x=0;x<array.length;x++) {
		newArray.unshift(array[x]);
	}
	return newArray;
}

//console.log(reverseArray(testArr));

function reverseArrayInPlace(array) {
    for (y = 0; y < Math.floor(array.length/2); y++) {
        var a = null;
        a = array[y];
        array[y] = array[array.length-1-y];
        array[array.length-1-y] = a;
    }
    return array;
}

reverseArrayInPlace(testArr2);
console.log(testArr2);