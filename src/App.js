import React, { useEffect, useState } from 'react';
import './style.css';
import axios from 'axios';
import CurrencyLister from './components/CurrencyLister';
import CurrenciesCarousel from './components/CurrenciesCarousel';
import PopularCurrencies from './components/PopularCurrencies';
import News from './components/News';

function App() {

  const [currencies, setCurrencies] = useState()


  useEffect(() => {
    const axiosCurrencies = async () => {
      const options = {
        method: 'GET',
        url: 'https://currency-converter18.p.rapidapi.com/api/v1/supportedCurrencies',
        headers: {
          'x-rapidapi-key': 'ee74ada4a0msh09b483965e4a401p1fedcfjsn74e94daa9b65',
          'x-rapidapi-host': 'currency-converter18.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        setCurrencies(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    axiosCurrencies()
  }, [])

  return (
    <div className="wrapper">
      <div className='wrapperContainer'>
        <h1>Currency Site</h1>
          <CurrenciesCarousel />
        <div className='mainContainer'>
          <div className='main'>
              <CurrencyLister currencies={currencies} />
            <div className='popularCurrencies'>
              <PopularCurrencies />
            </div>
          </div>
          <div className='aside'>
            <News />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
