function checkPrime(n) {
    for (i = 2; i < n; i++) {
        // console.log(i, num % i);
        if (n % i == 0) {
            return 'Not Prime';
        }
    }
    return 'It is Prime';
}

var result = checkPrime(15);
console.log(result);