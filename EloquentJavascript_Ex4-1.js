//Eloquent Javascript Ex 4-1

function range(start, end, step) {
    var array = [];
    if (start < end) {
        for (var x = start; x <= end; x = x + step) {
            if (step === undefined) {
                step = 1;
            }
            array.push(x);
        }
    }
    else if (end < start) {
        for (var y = start; y >= end; y = y + step) {
            if (step === undefined) {
                step = -1;
            }
            array.push(y);
        }
    }
    else {
        array.push(start);
    }
    return array;
}

function sum(array) {
    var total = 0;
    for (y=0;y<array.length;y++) {
        total += array[y];
    }
    return total;
}

//console.log(sum(range(1,10)));

//console.log(range(1,10,2));

console.log(range(5,2,-1));