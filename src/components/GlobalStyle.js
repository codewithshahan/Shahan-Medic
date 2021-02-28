import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box
}

html{
    @media (max-width: 1700px){
        font-size: 75%;
    }
    
}

body{
    background: #58CC02;
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
}
button{
    font-weight: bold;
    font-size: 1.1.rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #ffff;
    background: transparent;
    border-radius: 5px;
    color: white;
    transition: all 0.5s ease;
    font-family: 'Inter', sans-serif;
    &:hover{
        background-color: #FFD83B;
        color: white;
    }
}
    h2{
        font-weight: lighter;
        font-size: 4rem;
    }
    h3{
        color: white;
    }
    h4{
        font-weight: bold;
        font-size: 2rem;
       
    }
    a{
        font-size: 1.1rem;
    }
    span{
        font-weight: bold;
        color:#585858;
    }
    p{
        padding: 3rem 0rem;
        color: white;
        font-size: 1.4rem;
        line-height: 150%;
    }
    .btn{
        box-shadow: 0px 10px 14px -7px #0e302f;
        background:linear-gradient(to bottom, #FFDB1D 5%, #8AD900 100%);
        background-color:#01c5c5;
        border-radius:8px;
        display:inline-block;
        cursor:pointer;
        color: #585858 ;
      font-family: 'Montserrat', sans-serif;
        font-size:30px;
        font-weight:bold;
        padding:13px 32px;
        text-decoration:none;
        text-shadow:0px 1px 0px #287070;
    }
    .btn:hover {
        background:linear-gradient(to bottom, #619e9e 5%, #01c5c5 100%);
        background-color:#1FB650;
    }
    .btn:active {
        position:relative;
        top:1px;
    }

`;

export default GlobalStyle;
