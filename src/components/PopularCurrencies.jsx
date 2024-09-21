import React from "react";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { green, red } from '@mui/material/colors';

export default function PopularCurrencies() {

    return (
        <div className="popularCurrenciesWrapper">
            <div className="popularCurrenciesContainer">
                <p className="symbol">$</p>
                <div className="column">
                    <div className="row">
                        <p>33.06</p>
                        <ArrowDropUpIcon sx={{ fontSize: 40, color: green[600], marginLeft: '-10px' }} />
                    </div>
                    <p>USD</p>
                </div>
            </div>
            <div className="popularCurrenciesContainer">
                <p className="symbol">€</p>
                <div className="column">
                    <div className="row">
                        <p>35.92</p>
                        <ArrowDropUpIcon sx={{ fontSize: 40, color: green[600], marginLeft: '-10px' }} />
                    </div>
                    <p>EURO</p>
                </div>
            </div>
            <div className="popularCurrenciesContainer">
                <p className="symbol">₽ </p>
                <div className="column">
                    <div className="row">
                        <p>0.39</p>
                        <ArrowDropDownIcon sx={{ fontSize: 40, color: red[600], marginLeft: '-10px' }} />
                    </div>
                    <p>RUB</p>
                </div>
            </div>
            <div className="popularCurrenciesContainer">
                <p className="symbol">£</p>
                <div className="column">
                    <div className="row">
                        <p>42.60</p>
                        <ArrowDropUpIcon sx={{ fontSize: 40, color: green[600], marginLeft: '-10px' }} />
                    </div>
                    <p>GBP</p>
                </div>
            </div>
        </div>
    )
}