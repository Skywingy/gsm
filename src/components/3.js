import React from 'react';
import { useState } from 'react';

const units = ['', 'нэг', 'хоёр', 'гурав', 'дөрөв', 'тав', 'зургаа', 'долоо', 'найм', 'ес'];
const tens = ['', 'арав', 'хорь', 'гуч', 'дөч', 'тавь', 'жар', 'дал', 'ная', 'ер'];

function convertNumberToWords(input) {
  let output = '';
  let inputString = input.toString();
  if (inputString.length === 1) {
    output = units[input];
  } else if (inputString.length === 2) {
    if (input[0] === '1') {
      output = tens[1] + ' ' + units[input[1]];
    } else {
      output = tens[input[0]] + ' ' + units[input[1]];
    }
  } else if (inputString.length === 3) {
    output = units[input[0]] + ' зуу ' + convertNumberToWords(input.slice(1));
  } else if (inputString.length === 4) {
    output = units[input[0]] + ' мянга ' + convertNumberToWords(input.slice(1));
    console.log("////", convertNumberToWords(input.slice(1)));
  } else if (inputString.length === 5) {
    output = convertNumberToWords(input.slice(0, 2)) + ' мянга ' + convertNumberToWords(input.slice(2));
  } else if (inputString.length === 6) {
    output = convertNumberToWords(input.slice(0, 3)) + ' мянга ' + convertNumberToWords(input.slice(3));
  } else if (inputString.length === 7) {
    output = convertNumberToWords(input.slice(0, 1)) + ' сая ' + convertNumberToWords(input.slice(1));
  } else if (inputString.length === 8) {
    output = convertNumberToWords(input.slice(0, 2)) + ' сая ' + convertNumberToWords(input.slice(2));
  } else if (inputString.length === 9) {
    output = convertNumberToWords(input.slice(0, 3)) + ' сая ' + convertNumberToWords(input.slice(3));
  } else if (inputString.length === 10) {
    output = convertNumberToWords(input.slice(0, 1)) + ' тэрбум ' + convertNumberToWords(input.slice(1));
    console.log("////////", output);
  } else if (inputString.length === 11) {
    output = convertNumberToWords(input.slice(0, 2)) + ' тэрбум ' + convertNumberToWords(input.slice(2));
    console.log("////////", output);
  } else if (inputString.length === 12) {
    output = convertNumberToWords(input.slice(0, 3)) + ' тэрбум ' + convertNumberToWords(input.slice(3));
    console.log("////////", output);
  } 
  return output;
}


function Three() {
  let [inputNumber, setInputNumber] = useState(0);
  let [outputString, setOutputString] = useState('');

  function handleInputChange(event) {
    setInputNumber(event.target.value);
    console.log("----/-------", inputNumber);
  }

  function handleConvertClick() {
    let output = convertNumberToWords(inputNumber);
    setOutputString(output);
  }
  return (
        <div className='content'>
            <h1 className='title'>Даалгавар 3:</h1>
            <h4>Өгөгдсөн тоог үсгээр хэвлэх</h4>
            <label className='top' htmlFor="input">Хөрвүүлэх тоогоо оруулна уу:</label>
            <input type="number" id="input" value={inputNumber} onChange={handleInputChange} maxLength="20"/>
            <button onClick={handleConvertClick}>Хөрвүүлэх</button>
            <br />
            <p className='card'>{outputString}</p>
            <br />
            <br />
            <br />
            <br />
            <ul>
                Сайжруулах зүйлс:
              <li>Бутархайн орныг хөрвүүлэх</li>
              <li>Зарим хөрвүүлэлтийг хаана орсон байрлалаас шалтгаалан хэл зүйн зөв хэмжээнд болгох</li>
              <li>Их наядын орнууд нэмэх</li>
            </ul>

        </div>
  );
}

export default Three;