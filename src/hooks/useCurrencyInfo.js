import React, { useEffect, useState } from 'react'
import axios from 'axios';

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(()=>{
    async function getData(){
        let data = await axios.get(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        setData(data.data[currency])
    }
    getData()
  
  }, [currency])


  return data;
}

export default useCurrencyInfo