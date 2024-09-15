import { useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo';
import InputBox from './components/InputBox';

function App() {
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [fromCy ,setfromCY] = useState("inr");
  const [toCy ,setoTCY] = useState("usd");

  const ccInfo = useCurrencyInfo(fromCy)
  let currencyList = Object.keys(ccInfo);


  //convert currency
  const convert = ()=>{
    setConvertedAmount(amount * ccInfo[toCy])
  }

  //swap currency
  const swap = ()=>{
    setfromCY(toCy)
    setoTCY(fromCy)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }


  return (
    <div className='cc-main-cont'>
     <div className='cc-main-wrap'>
        <div className='cc-main-title'>
          <h1>💲Currency Converter💸</h1>
        </div>
        <div className='cc-option-input-container'>
          <InputBox  
            label="From" 
            defaultAmount={amount}
            defaultCurrency={fromCy} 
            onAmountChange={(amount)=> setAmount(amount)} 
            onCurrencyChange={(val)=> setfromCY(val)} 
            currencyList={currencyList}
          />
          <div className='cc-swapper' title='Swap' onClick={swap}>
            <i className="fa-solid fa-retweet"></i>
          </div>
          <InputBox  
            label="To" 
            defaultCurrency={toCy} 
            defaultAmount={convertedAmount} 
            onCurrencyChange={(val)=> setoTCY(val)} 
            currencyList={currencyList}
            amountDisabled = {true}
          />
          <div className='convert-btn'>
            <button onClick={convert}>Convert {fromCy.toLocaleUpperCase()} to {toCy.toLocaleUpperCase()}</button>
          </div>
        </div>
     </div>
    </div>
  )
}

export default App
