import React from "react";
import "./SendMoneyForm.css";
import { useState } from "react";
const axios = require("axios");



function SendMoneyForm(props) {
  const [amountSent, setAmountSent] = useState("");
  const [convertedFrom, setConvertedFrom] = useState("");
  const [convertedTo, setConvertedTo] = useState("");
  const receiverId = props.match.params.id;
  let rate = null;
  let convertedAmount = null;

  const convertCurrency = (e, id) => {
    const options = {
      method: "GET",
      url: "https://currency-converter5.p.rapidapi.com/currency/convert",
      params: {
        format: "json",
        from: convertedFrom,
        to: convertedTo,
        amount: amountSent,
      },
      headers: {
        "X-RapidAPI-Host": "currency-converter5.p.rapidapi.com",
        "X-RapidAPI-Key": process.env.API_KEY,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        console.log(
          response.data.rates[Object.keys(response.data.rates)[0]]
            .rate_for_amount
        );

        rate = response.data.rates[Object.keys(response.data.rates)[0]].rate;
        convertedAmount =
          response.data.rates[Object.keys(response.data.rates)[0]]
            .rate_for_amount;

        document.getElementById("rate").innerHTML = "Rate Equals = " + rate;
        document.getElementById("convertedAmount").innerHTML =
          "Total Converted Amount = " + convertedAmount;
      })
      .catch(function (error) {
        console.error(error);
        alert(error.message);
      });

    e.preventDefault();
    console.log(convertedFrom, "from");
    console.log("reaching this line converter");
    fetch(`/currency-converter/${id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        convertedFrom,
        convertedTo,
        amountSent,
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res, "res"))
      .catch((err) => console.log(err));
  };

  const handleExchange = (e) => {
    e.preventDefault();
    console.log("reaching this line");
    fetch("/api/exchange", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amountSent,
        convertedFrom,
        convertedTo,
        receiverId,
        convertedAmount,
      }),
    })
      .then((response) => {
        props.history.push("/transfer-history");
        console.log(response);
      })
      .catch((error) => {
        // handle the error
      });
  };
  console.log(props);

  console.log(props.match.params.id);

  return (
    <div className="form-create">
      <h2> Send Money to </h2>
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
        <button onClick={(e) => convertCurrency(e, props.match.params.id)}>
          Convert Amount
        </button>

        <h3 id="rate"></h3>
        <h3 id="convertedAmount"></h3>

        <button onClick={(e) => handleExchange(e)}> Send Money </button>
      </form>
    </div>
  );
}

export default SendMoneyForm;
