import React from 'react';
import { useState } from 'react';


function convertCyrillicToLatin(input) {
  const cyrillicToLatinMap = {
    'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'ye', 'ё': 'yo', 'ж': 'j',
    'з': 'z', 'и': 'i', 'й': 'i', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o','ө': 'o',
    'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ү': 'u', 'ф': 'f', 'х': 'h', 'ц': 'ts',
    'ч': 'ch', 'ш': 'sh', 'щ': 'sh', 'ъ': '', 'ы': 'i', 'ь': 'i', 'э': 'e', 'ю': 'yu', 'я': 'ya',
    'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'G', 'Д': 'D', 'Е': 'Ye', 'Ё': 'Yo', 'Ж': 'J',
    'З': 'Z', 'И': 'I', 'Й': 'i', 'К': 'K', 'Л': 'L', 'М': 'M', 'Н': 'N', 'О': 'O','Ө': 'O',
    'П': 'P', 'Р': 'R', 'С': 'S', 'Т': 'T', 'У': 'U', 'Ү': 'U', 'Ф': 'F', 'Х': 'H', 'Ц': 'Ts',
    'Ч': 'Ch', 'Ш': 'Sh', ',Щ': 'Sh', 'Ъ': '', 'Ы': 'i', 'ь': 'i', 'Э': 'E', 'Ю': 'Yu', 'Я': 'Ya'
  };
  let output = '';
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    output += cyrillicToLatinMap[char] || char;
  }
  return output;
}

function One(input) {
  const [inputString, setInputString] = useState('');
  const [outputString, setOutputString] = useState('');

  function handleInputChange(event) {
    setInputString(event.target.value);
  }

  function handleConvertClick() {
    const output = convertCyrillicToLatin(inputString);
    setOutputString(output);
  }
  return (
        <div>
            <h1>Даалгавар 1:</h1>
            <p>Монголоор бичсэн текстийг латинаар хөрвүүлэх</p>

            <label htmlFor="input">Хөрвүүлэх текстээ оруулна уу:</label>
            <br />
            <input type="text" id="input" value={inputString} onChange={handleInputChange} />
            <br />
            <button onClick={handleConvertClick}>Хөрвүүлэх</button>
            <br />
            <p>Хөрвүүлсэн текст: {outputString}</p>
        </div>
        
  );
}

export default One;