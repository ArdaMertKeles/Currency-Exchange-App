import React from "react";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { green, red } from '@mui/material/colors';

export default function CurrenciesCarousel(){

    return(
        <div className="carousel">
            <ul>
                <li>USD:33.06<ArrowDropUpIcon sx={{ fontSize: 26, color: green[600], marginLeft: '-2px', marginTop: '-5px' }} /></li>
                <li>EUR:35.92<ArrowDropUpIcon sx={{ fontSize: 26, color: green[600], marginLeft: '-2px', marginTop: '-5px' }} /></li>
                <li>GBP:42.60<ArrowDropUpIcon sx={{ fontSize: 26, color: green[600], marginLeft: '-2px', marginTop: '-5px' }} /></li>
                <li>PKR:0.118<ArrowDropDownIcon sx={{ fontSize: 26, color: red[600], marginLeft: '-2px', marginTop: '-5px' }} /></li>
                <li>INR:0.394<ArrowDropDownIcon sx={{ fontSize: 26, color: red[600], marginLeft: '-2px', marginTop: '-5px' }} /></li>
                <li>CAD:23.92<ArrowDropUpIcon sx={{ fontSize: 26, color: green[600], marginLeft: '-2px', marginTop: '-5px' }} /></li>
                <li>AED:8.995<ArrowDropUpIcon sx={{ fontSize: 26, color: green[600], marginLeft: '-2px', marginTop: '-5px' }} /></li>
                <li>RUB:0.399<ArrowDropDownIcon sx={{ fontSize: 26, color: red[600], marginLeft: '-2px', marginTop: '-5px' }} /></li>
                <li>SEK:0.326<ArrowDropDownIcon sx={{ fontSize: 26, color: red[600], marginLeft: '-2px', marginTop: '-5px' }} /></li>
                <li>ALL:2.794<ArrowDropUpIcon sx={{ fontSize: 26, color: green[600], marginLeft: '-2px', marginTop: '-5px' }} /></li>
                <li>NZD:0.051<ArrowDropUpIcon sx={{ fontSize: 26, color: green[600], marginLeft: '-2px', marginTop: '-5px' }} /></li>
                <li>VEZ:1.105<ArrowDropDownIcon sx={{ fontSize: 26, color: red[600], marginLeft: '-2px', marginTop: '-5px' }} /></li>
                <li>ILS:0.110<ArrowDropDownIcon sx={{ fontSize: 26, color: red[600], marginLeft: '-2px', marginTop: '-5px' }} /></li>
                <li>JPY:4.657<ArrowDropUpIcon sx={{ fontSize: 26, color: green[600], marginLeft: '-2px', marginTop: '-5px' }} /></li>
                <li>ARS:28.11<ArrowDropUpIcon sx={{ fontSize: 26, color: green[600], marginLeft: '-2px', marginTop: '-5px' }} /></li>
            </ul>
        </div>
    )
}