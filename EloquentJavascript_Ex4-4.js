//EloquentJavascript_Ex4-4

function deepEqual (x,y) {
	if (typeof x == typeof y) {
        var countX = 0;
        var countY = 0;
    
        for (var event in x) {
            countX++;
        }
            
        for (var prop in y) {
            countY++;
        }
            
        if (countX != countY) {
            return false;
        }
        else {
            for (var key in x) {
                if (x[key] != y[key]) {
                    return false;
                }
                else {
                    deepEqual(x.key,y.key);
                }
            }
        }
    }
    else {
        return false;
    }
    return true;
}

var obj1 = {here: {is: "an"}, object: 2};
var obj2 = {a: 1, b: 2, c: 3};

//console.log(obj.size);

console.log (deepEqual(obj1,obj1));
//console.log (deepEqual(obj1,obj2));
console.log (deepEqual(obj, {here: 1, object:2}));
console.log (deepEqual(obj, {here: {is: "an"}, object: 2}));

/*
function objCount (map) {
    var count = 0;
    for (var event in map) {
        count++;
    }
    return count;
}

console.log(objCount(obj));
*/