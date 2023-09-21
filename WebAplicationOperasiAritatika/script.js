function calculateFibonacci() {
    const n = parseInt(document.getElementById('fibonacciInput').value);
    let fibonacciSequence = [0, 1];
  
    for (let i = 2; i < n; i++) {
      fibonacciSequence.push(fibonacciSequence[i - 1] + fibonacciSequence[i - 2]);
    }
  
    // Tampilkan hasil ke layar
    document.getElementById('result').innerHTML = `Deret Fibonacci: ${fibonacciSequence.join(', ')}`;
  }
  