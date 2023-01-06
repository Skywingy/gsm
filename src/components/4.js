import React, { useState } from 'react';

function isLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true;
      }
      return false;
    }
    return true;
  }
  return false;
}


function Four() {
  const [inputYear, setInputYear] = useState(0);
  const [outputString, setOutputString] = useState('');
  const [warningMessage, setWarningMessage] = useState('');

  function handleInputChange(event) {
    setInputYear(event.target.value);
  }

  function handleCheckClick() {
    if (inputYear.toString().length > 4) {
      setWarningMessage('Таны оруулсан жил нь 4 - с дээшгүй оронтой байх ёстой.');
      alert(warningMessage);
    } else {
      setWarningMessage('');
      if (isLeapYear(inputYear)) {
        setOutputString(`${inputYear} өндөр жил МӨН байна.`);
      } else {
        setOutputString(`${inputYear} өндөр жил БИШ байна.`);
      }
    }
  }
  return (
        <div className='content'>
            <h1 className='title'>Даалгавар 4:</h1>
            <h4>Оруулсан жил өндөр жил эсэх:</h4>
            <label className='top' htmlFor="input">Өндөр жил эсэх шалгах:</label>
            <input type="number" id="input" value={inputYear} onChange={handleInputChange} maxLength="4"/>
            <button onClick={handleCheckClick}>Шалгах</button>
            <br />
            <p className='card'>{outputString}</p>
        </div>
  );
}

export default Four;