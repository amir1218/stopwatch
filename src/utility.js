export function padNumberZeroes(numberToPad, numberOfDigits = 6){
    return String(numberToPad).padStart(numberOfDigits, '0');
}
