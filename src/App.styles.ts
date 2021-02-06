import styled, {createGlobalStyle} from 'styled-components';
import BGimage from './images/background.jpg'


export const GlobalStyle = createGlobalStyle`
    htm {
        height: 100%;
    }
    
    body {
        background-image: url(${BGimage});
        background-size: cover;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    }
    
    * {
        box-sizing: border-box;
        font-family: 'Catamaran', sans-serif;
    }
`


export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    > p {
        color: #fff;
    }
    
    .score {
        color: #fff;
        font-size: 2rem;
        margin: 0;
    }
    
    h1 {
        font-family: Fascinate Inline, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
         background: rgb(255,255,255);
        background: -moz-linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(135,241,255,1) 100%);
        background: -webkit-linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(135,241,255,1) 100%);
        background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(135,241,255,1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="#87f1ff",GradientType=1);
         background-size: 100%;
         background-clip: text;
         -webkit-background-clip: text;
         -webkit-text-fill-color: transparent;
         -moz-background-clip: text;
         -moz-text-fill-color: transparent;
         filter: drop-shadow(2px 2px #0085a3);
         font-size: 70px;
         font-weight: 400;
         text-align: center;
         margin: 20px;
    }
    
    .start, .next {
        cursor: pointer;
        background: rgb(255,255,255);
        background: -moz-linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,204,145,1) 100%);
        background: -webkit-linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,204,145,1) 100%);
        background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,204,145,1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="#ffcc91",GradientType=1)
        border: 2px solid #d38558;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        height: 40px;
        margin: 20px 0;
        padding 0 40px;
    }
    
    .start {
        max-width: 200px;
        
    }
   
`
