// import reactdom  
import ReactDOM from 'react-dom/client';
// import index css from src folder

import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
// put whatever you want to display inside render method
var num1 = 99
var num2 = 9
var output = (<div>
  <h2>Expressions</h2>
  <ul>
    <li><b>num1 = {num1} num2 = {num2}</b></li>
    <li>Addition : {num1 + num2}</li>
    <li>Subtraction {num1 - num2}</li>
    <li>Multiplication {num1 * num2}</li>
    <li>Division {num1/num2}</li>
  </ul>
</div>)
root.render(output);
