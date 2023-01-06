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
    
        <div className = "content1">
            <h1 className='title'>Даалгавар 2:</h1>
            <h4>Өгсөн тооны цифрүүдийн нийлбэрийг олох</h4>
            <label htmlFor="input" className='top'>Дурын тоогоо оруулна уу:</label>
            <br />
            <input type="number" id="input" value={inputNumber} onChange={handleInputChange}/>
            <br />
            <button onClick={handleCalculateClick}>Тооцоолох</button>
            <br />
            <p className='card'>Оруулсан тооны цифрүүдийн нийлбэр : {outputNumber}</p>
        </div>
  );
}

export default Two;