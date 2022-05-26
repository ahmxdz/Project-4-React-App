import React from 'react'
import './SendMoneyForm.css'
import {useState} from 'react'


function SendMoneyForm(props) {

  const [amountSent, setAmountSent] = useState('')
  const [convertedFrom, setConvertedFrom] = useState('')
  const [convertedTo, setConvertedTo] = useState('') 


  const convertCurrency = (e, id, convertFrom, convertTo, amountSent) => {
    e.preventDefault()
    console.log(convertedFrom,'from')
    console.log('reaching this line- converter')
    fetch(`/currency-converter/${id}`,{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        convertFrom, convertTo, amountSent
      })

    })
    .then(res => res.json())
    .then(res => console.log(res, 'res'))
    .catch(err => console.log(err))
  }

  const handleExchange = (e) => {
    e.preventDefault()
    console.log('reaching this line')
    fetch('/api/exchange', {  
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          amountSent, convertedFrom, convertedTo 
        }),
    })
      .then(response => {
        props.history.push('/transfer-history')
        console.log(response);
      })
      .catch(error => {
        // handle the error
      });
  };
    console.log(props)

  console.log(props.match.params.id)
  return (

<div className='form-create'>
  
    <h2> Send Money to  </h2> 
    <form>
      <label>Amount to be sent: </label>
      <input
      type="number"
      required
      value={amountSent}
      onChange={(e) => setAmountSent(e.target.value)}
      />
      <label>Converted From: </label>
      <input
      type="text"
      required
      value={convertedFrom}
      onChange={(e) => setConvertedFrom(e.target.value)}
      />
      <label>Converted To: </label>
      <input
      type="text"
      required
      value={convertedTo}
      onChange={(e) => setConvertedTo(e.target.value)}
      />
      <button onClick={(e) => convertCurrency(e ,props.match.params.id)}>Convert Amount</button>



      {/* <h2> {convertedAmount} </h2> */}

      <button onClick={(e) => handleExchange(e)}> Send Money </button>

      

    </form>

</div>
)}



export default SendMoneyForm


