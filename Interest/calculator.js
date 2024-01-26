function calculate() {
  const yearsInput = document.getElementById('years');
  const years = parseInt(yearsInput.value);
  if (isNaN(years) || years <= 0) {
    alert('Please enter a valid number of years.');
    return;
  }
  let deposit = 1000;
  const interestRate = 0.05;
  let result = '';
  for (let i = 1; i <= years; i++) {
    deposit = deposit * (1 + interestRate);
    result += `Year ${i}: Rs ${deposit.toFixed(2)}<br>`;
  }
  document.getElementById('output').innerHTML = result;
}