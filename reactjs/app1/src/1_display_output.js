// import reactdom  
import ReactDOM from 'react-dom/client';
// import index css from src folder

import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
// put whatever you want to display inside render method
var output = <div>
  <h2>we have started learning reactjs @ THE EASYLEARN</h2>
  <h1 align='center'>Happy Coding</h1>
</div>
root.render(output);
