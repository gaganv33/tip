import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Feedback from "./components/Feedback";

export default function App(){
  const [bill, setBill] = useState(0);
  const [yourFeedback, setYourFeedback] = useState(0);
  const [friendsFeedback, setFriendsFeedback] = useState(0);

  function calculateTipPercentage(){
    return Math.round((yourFeedback + friendsFeedback) / 2);
  }

  function calculate(){
    const percentage = calculateTipPercentage();
    const totlaBill = bill + Math.round((percentage * bill) / 100);
    return totlaBill;
  }

  function handleReset(){
    setBill(0);
    setYourFeedback(0);
    setFriendsFeedback(0);
  }

  return (
    <div className="app">
      <Form setFunction={setBill} value={bill}>How much was the bill?</Form>
      <Feedback setFunction={setYourFeedback} value={yourFeedback}>How did you like the service?</Feedback>
      <Feedback setFunction={setFriendsFeedback} value={friendsFeedback}>How did your friend like the service?</Feedback>
      {
        bill !== 0 ? (
        <div>
          You pay ${calculate()} (${bill} + ${Math.round((calculateTipPercentage() * bill) / 100)} tip)
        </div>
        ) : null
      }
      <div>
        <button className="button" onClick={() => handleReset()}>Reset</button>
      </div>
    </div>
  )
}