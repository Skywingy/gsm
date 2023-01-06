import React, { useState } from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: '№',
    dataIndex: 'paymentNumber',
    key: 'paymentNumber',
  },
  {
    title: 'Төлбөр хийх өдөр',
    dataIndex: 'paymentDate',
    key: 'paymentDate',
  },
  {
    title: 'Зээлийн хэмжээ',
    dataIndex: 'paymentAmount',
    key: 'paymentAmount',
  },
  {
    title: 'Ү/З -н төлөх хэмжээ',
    dataIndex: 'principalPaid',
    key: 'principalPaid',
  },
  {
    title: 'Хүү-н төлөх хэмжээ',
    dataIndex: 'interestPaid',
    key: 'interestPaid',
  },
  {
    title: 'Нийт төлөх хэмжээ',
    dataIndex: 'totalPayThis',
    key: 'totalPayThis',
  },
  {
    title: 'Онолын үлдэгдэл',
    dataIndex: 'formattedBalance',
    key: 'formattedBalance',
  },
];






function example() {
  const value = 'hello';
  return value;
}

function generateRepaymentPlan(startDate, endDate, paymentAmount, interestRate, paymentDay1, paymentDay2, totalPayThis) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffTime = Math.abs(end - start);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const numPayments = diffDays / 30;
  const interestRatePerPayment = interestRate / 12 / 100;
  totalPayThis = 0;

  let balance = paymentAmount - totalPayThis;
  let paymentNumber = 1;
  let paymentDate = start;
  const payments = [];
  let formattedBalance = 0;
  

  while (balance > 0) {
    const interestPaid = parseFloat(paymentAmount / 100 * interestRate).toFixed(2);
    console.log("2", interestPaid);
    const principalPaid = parseFloat(paymentAmount / numPayments).toFixed(2);
    console.log("1", principalPaid);
    balance -= principalPaid;
    formattedBalance = balance.toFixed(2);
    totalPayThis = parseInt(interestPaid) + parseInt(principalPaid);
    console.log("3", totalPayThis);
    

    if (paymentNumber % 2 === 1) {
      paymentDate.setDate(paymentDay1);
    } else {
      paymentDate.setDate(paymentDay2);
    }

    

    payments.push({
      key: paymentNumber,
      paymentNumber,
      paymentAmount,
      totalPayThis,
      paymentDate: paymentDate.toDateString(),
      principalPaid,
      interestPaid,
      formattedBalance,

    });

    paymentNumber++;
    paymentDate = new Date(paymentDate.getTime());
    
  }
  console.log("payments", payments);
  return payments;
  
}




function Six() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [paymentAmount, setPaymentAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [paymentDay1, setPaymentDay1] = useState(0);
  const [paymentDay2, setPaymentDay2] = useState(0);
  const [data, setData] = useState([]);
  
  const returnedValue = example();
  console.log("///////-----//////", returnedValue);

  function handleStartDateChange(event) {
    setStartDate(event.target.value);
    console.log("startDate",startDate);
  }

  function handleEndDateChange(event) {
    setEndDate(event.target.value);
    console.log("endDate", endDate);
  }

  function handleInterestRateChange(event) {
    setInterestRate(event.target.value);
    console.log("interestRate", interestRate)
  }

  function handlePaymentAmountChange(event) {
    setPaymentAmount(event.target.value);
    console.log("paymentAmount", paymentAmount);
  }

  function handleGenerateClick() {
    const repaymentPlan = generateRepaymentPlan(startDate, endDate, paymentAmount, interestRate, paymentDay1, paymentDay2);
    console.log("repaymentPlan1", repaymentPlan);
    setData(repaymentPlan);
    return data;
    console.log("repaymentPlan2", repaymentPlan);
    console.log("data", data);
  }

  console.log("----------------", data);
  

  function handlePaymentDay1Change(event) {
    setPaymentDay1(event.target.value);
    console.log("handlePaymentDay1Change", paymentDay1);
  }

  function handlePaymentDay2Change(event) {
    setPaymentDay2(event.target.value);
    console.log("handlePaymentDay2Change", paymentDay2);
  }

  

  return (
        <div className='content1'>
            <h1 className='title'>Даалгавар 6:</h1>
            <h4>Зээлийн эргэн төлөлтийн хуваарь</h4>
            <div className='topp'>
            <label htmlFor="start-date">Зээл эхэлсэн огноо:</label>
            <input type="date" id="start-date" value={startDate} onChange={handleStartDateChange} />
            <br />
            <label htmlFor="end-date">Зээл дуусах огноо:</label>
            <input type="date" id="end-date" value={endDate} onChange={handleEndDateChange} />
            <br />
            <label htmlFor="payment-amount">Зээлийн дүн:</label>
            <input
              type="number"
              id="payment-amount"
              value={paymentAmount}
              onChange={handlePaymentAmountChange}
            />
            <br />
            <label htmlFor="interest-rate">Хүүгийн хэмжээ:</label>
            <input
              type="number"
              id="interest-rate"
              value={interestRate}
              onChange={handleInterestRateChange}
            />
            <br />
            <label htmlFor="payment-day-1">Тухайн сарын эхний төлөлтийн огноо:</label>
            <input
              type="number"
              id="payment-day-1"
              value={paymentDay1}
              onChange={handlePaymentDay1Change}
            />
            <br />
            <label htmlFor="payment-day-2">Тухайн сарын хоёр дахь төлөлтийн огноо:</label>
            <input
              type="number"
              id="payment-day-2"
              value={paymentDay2}
              onChange={handlePaymentDay2Change}
            />
            <br />
            </div>
            <button onClick={handleGenerateClick}>Хуваарь үүсгэх</button>
            <br />
            <div>
            <Table columns={columns} dataSource={data} />
            </div>
            

        </div>
  );
}

export default Six;