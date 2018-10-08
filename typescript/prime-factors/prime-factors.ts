export default function calculatePrimeFactors(n: number): number[] {
    const primeFactors: number[] = []
    while (n > 1) {
        const smallestPrimeDivisor = findSmallestPrimeDivisor(n)
        primeFactors.push(smallestPrimeDivisor)
        n = Math.floor(n / smallestPrimeDivisor)
    }
    return primeFactors
}

function isPrime(n: number): boolean {
    if (n === 0 || n === 1) {
        return false
    }
    for (let i = 2; i < Math.ceil(Math.sqrt(n)); i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true
}

function isDivisor(divisor: number, n: number): boolean {
    return n % divisor === 0
}

function findSmallestPrimeDivisor(n: number): number {
    for (let i = 2; i < n; i++) {
        if (isDivisor(i, n) && isPrime(i)) {
            return i
        }
    }
    // If n itself is prime and has no other smaller divisors,
    // it is the smallest prime divisor
    return n
}
