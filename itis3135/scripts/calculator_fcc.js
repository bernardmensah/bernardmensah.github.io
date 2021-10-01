window.onload = function() {
    const calculator = document.querySelector(".calculator");
    const keys = calculator.querySelector(".calculator-all-buttons");
    const display = document.querySelector(".calculator-textbox");

    keys.addEventListener("click", e => {
     if (e.target.matches("button")) {
       // Do something
       const key = e.target;
       const action = key.dataset.action;
       const keyContent = key.textContent
       const displayedNum = display.textContent;
       const previousKeyType = calculator.dataset.previousKeyType;

       Array.from(key.parentNode.children)
       .forEach(k => k.classList.remove('is-depressed'))
       if (!action) {
        if (displayedNum === "0" || previousKeyType === 'operator') {
            display.textContent = keyContent;
          }else {
            display.textContent = displayedNum + keyContent;
          }
      }
      if (
        action === 'add' ||
        action === 'subtract' ||
        action === 'multiply' ||
        action === 'divide'
      ) {
        const firstValue = calculator.dataset.firstValue
        const operator = calculator.dataset.operator
        const secondValue = displayedNum
    
        if (firstValue && operator) {
          display.textContent = calculate(firstValue, operator, secondValue)
        }
        key.classList.add('is-depressed');
        calculator.dataset.previousKeyType = 'operator';
        calculator.dataset.firstValue = displayedNum;
        calculator.dataset.operator = action;
      }
      if (action === 'decimal') {
        if (!displayedNum.includes('.')) {
            display.textContent = displayedNum + '.'
          } else if (previousKeyType === 'operator') {
            display.textContent = '0.';
          }
          
        calculator.dataset.previousKeyType = 'decimal';
      }
      
      if (action === 'clear') {
        console.log('clear key!');
        display.textContent = '';
      }
      
      if (action === 'calculate') {
        console.log('equal key!');
        const firstValue = calculator.dataset.firstValue;
        const operator = calculator.dataset.operator;
        const secondValue = displayedNum;
        
        display.textContent = calculate(firstValue, operator, secondValue);
      }
      
     }
     
    })

    const calculate = (n1, operator, n2) => {
        let result = ''
        
        if (operator === 'add') {
          result = parseFloat(n1) + parseFloat(n2);
        } else if (operator === 'subtract') {
          result = parseFloat(n1) - parseFloat(n2);
        } else if (operator === 'multiply') {
          result = parseFloat(n1) * parseFloat(n2);
        } else if (operator === 'divide') {
          result = parseFloat(n1) / parseFloat(n2);
        }
        
        return result;
      }
               }
