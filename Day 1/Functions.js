
main(3);

function main(n) {
    console.log(factorial(n));
}

function factorial(n) {
    var m = n
    for (var i = 1; n > i; i++) {
        m *= i
    }
    return m
}