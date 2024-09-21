import React, { useState } from "react";
import axios from "axios";
import IconButton from '@mui/material/IconButton';
import SyncIcon from '@mui/icons-material/Sync';
import Button from '@mui/material/Button';

function CurrencyLister({ currencies }) {

    const [selectedValue, setSelectedValue] = useState('USD')
    const [transferValue, setTransferValue] = useState('USD')
    const [amount, setAmount] = useState()
    const [convertedAmount, setConvertedAmount] = useState(0)

    function getValue(e) {
        setSelectedValue(e.target.value);
    }

    function getTransferValue(e) {
        setTransferValue(e.target.value);
    }

    function settingAmount(e){
        setAmount(e.target.value)
    }

    const swapValues = () => {
        const temp = selectedValue;
        setSelectedValue(transferValue);
        setTransferValue(temp);
    }

    const exchange = async () => {
        const options = {
            method: 'GET',
            url: 'https://currency-converter18.p.rapidapi.com/api/v1/convert',
            params: {
              from: selectedValue,
              to: transferValue,
              amount: amount
            },
            headers: {
              'x-rapidapi-key': 'ee74ada4a0msh09b483965e4a401p1fedcfjsn74e94daa9b65',
              'x-rapidapi-host': 'currency-converter18.p.rapidapi.com'
            }
          };
          
          try {
              const response = await axios.request(options);
              setConvertedAmount(response.data.result.convertedAmount)
          } catch (error) {
              console.error(error);
          }
    }

    return (
        <div className="currencyConverterWrapper">
            <div className="currenciesContainer">
                <div className="currencies">
                    <select onChange={(e) => getValue(e)} value={selectedValue} name="currencies" id="currencies">
                        {currencies && currencies.map((data, key) => (
                            <option key={key} value={data.symbol}>{data.symbol}</option>
                        ))}
                    </select>
                    <input type="text" onChange={(e) => settingAmount(e)} />
                </div>
                <IconButton onClick={swapValues} color="primary" aria-label="change">
                    <SyncIcon />
                </IconButton>
                <div className="currencies">
                    <select onChange={(e) => getTransferValue(e)} value={transferValue} name="transferCurrencies" id="transferCurrencies">
                        {currencies && currencies.map((data, key) => (
                            <option key={key} value={data.symbol}>{data.symbol}</option>
                        ))}
                    </select>
                    <input type="text" value={convertedAmount} />
                </div>
            </div>
            <div className="exchangeContainer">
                <Button onClick={() => exchange()} variant="contained">Exchange</Button>
            </div>
        </div>
    )
}

export default CurrencyLister