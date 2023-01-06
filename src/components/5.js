import React, { useState } from 'react';

function getDateDifference(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();
  let days = end.getDate() - start.getDate();
  if (days < 0) {
    months--;
    end.setMonth(end.getMonth() - 1);
    days += end.getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }
  return { years, months, days };
}

function Five() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [difference, setDifference] = useState({});

  function handleStartDateChange(event) {
    setStartDate(event.target.value);
  }

  function handleEndDateChange(event) {
    setEndDate(event.target.value);
  }

  function handleCalculateClick() {
    const diff = getDateDifference(startDate, endDate);
    setDifference(diff);
  }

  return (
        <div>
            <h1>Даалгавар 5:</h1>
            <p>Гараас оруулсан огнооны зөрүүг жил сар өдрөөр хэвлэх:</p>
            <label htmlFor="start-date">Бага жилийг нь оруулна уу:</label>
            <br />
            <input type="date" id="start-date" value={startDate} onChange={handleStartDateChange} />
            <br />
            <label htmlFor="end-date">Сүүлийн жилийг нь оруулна уу:</label>
            <br />
            <input type="date" id="end-date" value={endDate} onChange={handleEndDateChange} />
            <br />
            <button onClick={handleCalculateClick}>Calculate</button>
            <br />
            <p>
              {difference.years} жил, {difference.months} сар, {difference.days} өдөр - н зөрүүтэй байна.
            </p>
        </div>
  );
}

export default Five;