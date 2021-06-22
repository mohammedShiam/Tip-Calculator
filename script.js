 document.querySelector('form').onchange = function calc(){
    //Selection 
    let inputAmount = Number(document.querySelector('#amount').value);
    let inputRange = document.querySelector('#range').value;

    let vatOutput = document.querySelector('#vatOutput');
    let totalBill = document.querySelector('#totalOutput');
    let rangeOutput = document.querySelector('#rangeOutput');
    let down = document.querySelector('.down');

    // Calculation
    let range = inputRange/100;
    let vatAmount = inputAmount*range;
    let totalAmount = vatAmount + inputAmount;

    // Output Showig
    rangeOutput.value = `${inputRange} %`;
    vatOutput.value = vatAmount.toFixed(3);
    totalBill.value = totalAmount.toFixed(3);

    down.style.display = 'block';
}