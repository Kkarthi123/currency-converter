import React from 'react'

function InputBox({
    label,
    defaultAmount,
    onAmountChange,
    currencyList = [],
    onCurrencyChange,
    defaultCurrency = "inr",
    amountDisabled = false
}) {
  return (
    <div className='cc-input-wrap'>
        <div className='cc-amount-input'>
            <label htmlFor='CC-from'>{label}</label>
            <input type="text" id="CC-from" value={defaultAmount} onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))} disabled={amountDisabled}/>
        </div>
        <div className='cc-currency-input'>
            <span className='cc-curency-title'>Currency Type</span>
            <select value={defaultCurrency} onChange={(e)=> onCurrencyChange(e.target.value)}>
                {
                    currencyList.map((item)=>(
                        <option  key={item} value={item}>{item.toLocaleUpperCase()}</option>
                    ))
                }
            </select>
        </div>
    </div>
  )
}

export default InputBox