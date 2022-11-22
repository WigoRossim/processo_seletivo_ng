import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root{
 --gray-0: #d9d9d9;
 --gray-1: #080808;
 --gray-3: #636262;
 --purple: #4600e8;
 --error: #910000;
}


body {
    font-family: 'Inter', sans-serif;
    background-color: var(--gray-1);
    }

    h1,h2,h3{
        font-family: 'Inter', sans-serif;
        font-weight: bold;

    }

    p,span{
        font-family: 'Inter', sans-serif;
    }

    button {
        cursor: pointer;
    }

    .errorMessage{
        color: var(--error);
        font-weight: 500;
        font-size: 14px;
        line-height: 19px;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
    }

    input[type='number']{
        -moz-appearance: textfield;
    }

* {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    }

`;
