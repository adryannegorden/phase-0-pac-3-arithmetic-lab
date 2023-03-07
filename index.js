function add(a, b) {
    return a + b; 
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
function increment(n = 5) {
    return n += 1;
}
function decrement(n = 5) {
    return n -= 1;
}
function makeInt(string) {
    return parseInt(string, 10)
}  
  function preserveDecimal(string) {
    return parseFloat(string)
}