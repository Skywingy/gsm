import React from 'react';
import { useState } from 'react';

function calculateTotal(input) {
  let total = 0;
  for (let i = 0; i < input.length; i++) {
    total += parseInt(input[i]);
  }
  return total;
}

function Two() {
  const [inputNumber, setInputNumber] = useState('');
  const [outputNumber, setOutputNumber] = useState(0);

  function handleInputChange(event) {
    setInputNumber(event.target.value);
    console.log("_________----______", inputNumber);
  }

  function handleCalculateClick() {
    if (inputNumber.length > 0 && inputNumber.length <= 1000) {
      const total = calculateTotal(inputNumber);
      setOutputNumber(total);
    }
  }
  return (
    
        <div>
            <h1>Даалгавар 2:</h1>
            <p>Өгсөн тооны цифрүүдийн нийлбэрийг олох</p>
            <label htmlFor="input">Дурын тоогоо оруулна уу:</label>
            <br />
            <input type="number" id="input" value={inputNumber} onChange={handleInputChange}/>
            <br />
            <button onClick={handleCalculateClick}>Тооцоолох</button>
            <br />
            <p>Оруулсан тооны цифрүүдийн нийлбэр = {outputNumber}</p>
        </div>
  );
}

export default Two;