import{W as x,s as h,j as p,c as g,r as m,F as v,R as w,a as y}from"./vendor.321a3859.js";const I=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))u(i);new MutationObserver(i=>{for(const t of i)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&u(c)}).observe(document,{childList:!0,subtree:!0});function o(i){const t={};return i.integrity&&(t.integrity=i.integrity),i.referrerpolicy&&(t.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?t.credentials="include":i.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function u(i){if(i.ep)return;i.ep=!0;const t=o(i);fetch(i.href,t)}};I();const C=x`
  :root {
    --red: #a31621;
    --lavender: #e5eafa;
    --blue: #087ca7;
    --spaceCadet: #282a3e;
    --pink: #F26DF9;

    --bg-01: var(--spaceCadet);

    --text-title: var(--lavender);
    --text-paragraph: var(--pink);
    
    --bg-input: var(--spaceCadet);
    --input-color: var(--lavender);

    --table-bg: var(--pink);
    --table-color: var(--spaceCadet);

    font-size: 62.5%;
    font-family: 'Roboto Condensed', sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #root {
    width: 100%;
    height: 100%; 
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  body {
    color: var(--lavender);
    background: linear-gradient(180deg, rgba(16,16,25,1) 0%, rgba(24,24,37,1) 50%, rgba(48,48,74,1) 100%);

    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    overflow: auto;
  }

  h1, h2, h3{
    font-weight: 700;
  }
  
  input::placeholder{
    font-weight: 400;
    font-style: italic;
  }

  button {
    cursor: pointer;
  }
  
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    white-space: nowrap;
    border-width: 0;
  }

  @media (orientation: landscape) and (max-height: 650px){
    body {
      height: auto;
      margin: 3rem 0;
    }
  }
`,z=h.form`
  width: 100%;
  max-width: 50rem;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 3rem;
  
  input {
    width: 100%;
    height: 4rem;
    padding: 0 2rem ;

    color: var(--input-color);
    background: var(--bg-input);
    font-size: 1.6rem;
    text-align: center;

    border: 0;
    border-radius: 5px;

    & + input {
      margin-top: 1rem;
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    } 

    &[type=number] {
      -moz-appearance: textfield;
    }
  }

  button {
    width: 100%;
    height: 4rem;
    color: var(--lavender);
    background: var(--blue);
    margin-top: 1.5rem;

    font-size: 1.6rem;
    border: 0;
    border-radius: 5px;

    &:hover{
      filter: brightness(.9) ;
    }
  }

  @media screen and (min-width: 480px){
    input,
    button {
      height: 4.5rem;
      font-size: 1.8rem;
    }
  }
`,e=p.exports.jsx,a=p.exports.jsxs,F=p.exports.Fragment,k=({onTyping:r,onCalculateImc:l})=>a(z,{onSubmit:o=>{l.handleCalculateImc(o)},children:[e("label",{htmlFor:"user-weigth",className:"sr-only",children:"Digite seu peso em kilos. Ex: 60"}),e("label",{htmlFor:"user-height",className:"sr-only",children:"Digite sua altura em metros. Ex: 1,80"}),e("input",{type:"text",id:"user-weigth",placeholder:"Digite o peso em kilos. Ex: 60",maxLength:5,minLength:1,pattern:"\\d\\d[,|\\.]?\\d?\\d?",onChange:o=>r.setUserWeight(Number(o.target.value.replace(",",".")))}),e("input",{type:"text",id:"user-height",placeholder:"Digite a altura em metros. Ex: 1,80",maxLength:20,minLength:1,pattern:"\\d[,|\\.]\\d\\d?",onChange:o=>r.setUserHeight(Number(o.target.value.replace(",",".")))}),e("button",{type:"submit",children:"Calcular"})]}),N=h.div`
  width: 100%;
  
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 2rem 0;

  .result-label {
    font-weight: 700;
    color: var(--text-title);
  }

`,$=({onImcResult:r})=>e(N,{children:e("p",{className:"result-label",children:r})}),O=h.table`
  width: 100%;
  max-width: 50rem;

  border-spacing: 0;

  & th:first-child {
    border-radius: .5rem 0 0 0;
  }
  
  & th:last-child {
    border-radius: 0 .5rem 0 0;
  }

  & tr:last-child td:first-child {
    border-radius: 0 0 0 .5rem ;
  }
  
  & tr:last-child  td:last-child {
    border-radius: 0 0 .5rem 0;
  }
  
  & tr:last-child td {
    border-bottom: 5px solid ${g(.5,"#F26DF9")};
  }
  
  th {
    font-size: 1.6rem;
    color: var(lave);
    background: ${g(.6,"#F26DF9")};
  }
  
  td {
    border-bottom: 1px solid var(--pink);
    font-size: 1.6rem;
    text-align: center;
    padding: .3rem;
  }

  .result-row {
    background: var(--blue);
  }

  @media screen and (min-width: 480px){
    th {
      font-size: 2rem;
    }

    td {
      font-size: 2rem;
    } 
  }
`,j=({onRowResult:r})=>a(O,{children:[e("thead",{children:a("tr",{children:[e("th",{children:"IMC"}),e("th",{children:"Classifica\xE7\xE3o"})]})}),a("tbody",{children:[a("tr",{className:r===1?"result-row":"",children:[e("td",{children:"16 a 16,9"}),e("td",{children:"Muito abaixo do peso"})]}),a("tr",{className:r===2?"result-row":"",children:[e("td",{children:"17 a 18,4"}),e("td",{children:"Abaixo do peso"})]}),a("tr",{className:r===3?"result-row":"",children:[e("td",{children:"18,5 a 24,9"}),e("td",{children:"Peso normal"})]}),a("tr",{className:r===4?"result-row":"",children:[e("td",{children:"25 a 29,9"}),e("td",{children:"Acima do peso"})]}),a("tr",{className:r===5?"result-row":"",children:[e("td",{children:"30 a 34,9 "}),e("td",{children:"Obesidade Grau I"})]}),a("tr",{className:r===6?"result-row":"",children:[e("td",{children:"35 a 40"}),e("td",{children:"Obesidade Grau II"})]}),a("tr",{className:r===7?"result-row":"",children:[e("td",{children:"maior que 40"}),e("td",{children:"Obesidade Grau III"})]})]})]}),D=h.main`
  width: 100%;
  min-width: 28.2rem;
  max-width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
 
  h1 {
    font-size: 3.5rem;
  }
  
  p {
    font-size: 1.8rem;
    color: var(--text-paragraph) ;
  } 
  
  @media screen and (min-width: 480px){
    h1 {
      font-size: 4.5rem;
    }
    
    p {
      font-size: 2rem;
      color: var(--text-paragraph) ;
      margin-bottom: 1rem;
    } 
  }

  

`,L=()=>{const[r,l]=m.exports.useState(0),[o,u]=m.exports.useState(0),[i,t]=m.exports.useState(" "),[c,d]=m.exports.useState(0);function b(f){if(f.preventDefault(),r!==0&&o!==0){const n=r/(o*o),s=`Seu IMC \xE9 ${n.toFixed(2)}`;switch(n>0){case n<=16.9:t(`${s} - Muito abaixo do peso`),d(1);return;case(n>=17&&n<=18.4):t(`${s} - Abaixo do peso`),d(2);return;case(n>=18.5&&n<=24.9):t(`${s} - Peso normal`),d(3);return;case(n>=25&&n<=29.9):t(`${s} - Acima do peso`),d(4);return;case(n>=30&&n<=34.9):t(`${s} - Obesidade Grau I`),d(5);return;case(n>=35&&n<=40):t(`${s} - Obesidade Grau II`),d(6);return;case n>40:t(`${s} - Obesidade Grau III`),d(7);return;default:console.log(n,s),alert("Ops, algo deu errado! Confira os dados e tente novamente.");return}}else alert("Preencha todos os campos corretamente.")}return a(D,{children:[e("h1",{children:"Calcule seu IMC"}),e("p",{children:"\xCDndice de massa corporal"}),e(k,{onTyping:{userWeight:r,setUserWeight:l,userHeight:o,setUserHeight:u},onCalculateImc:{handleCalculateImc:b}}),e($,{onImcResult:i}),e(j,{onRowResult:c})]})},E=h.footer`
  color: var(--text-title);
  margin-top: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
  h3 {
    font-size: 1.6rem;
    color: var(--blue);
  }
  
  em{
    color: var(--text-title);
  }
  
  a {
    margin-left: 1rem;
    font-size: 2rem;
    color: var(--text-paragraph);
    
    &:hover{
      transform: scale(1.1);
    }
  }

`,G=()=>a(E,{children:[a("h3",{children:["Criado por ",e("em",{children:"Thiago Luiz"})]}),e("a",{href:"https://github.com/thiagolp7",target:"_blank",title:"Github",children:e(v,{})})]});function M(){return a(F,{children:[e(L,{}),e(G,{}),e(C,{})]})}w.render(e(y.StrictMode,{children:e(M,{})}),document.getElementById("root"));
