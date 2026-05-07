// import reactdom  
import ReactDOM from 'react-dom/client';
import './my_style.css';

import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
var output = (<div>
  <h2>Applying style</h2>
  <ul className='state-list-container'>
    <li className='state-item'>Andhra Pradesh (TDP)</li>
    <li className='state-item party-bjp'>Arunachal Pradesh (BJP)</li>
    <li className='state-item party-bjp'>Assam (BJP)</li>
    <li className='state-item party-bjp'>Bihar (JD-U + BJP)</li>
    <li className='state-item party-bjp'>Chhattisgarh (BJP)</li>
    <li className='state-item party-bjp'>Goa (BJP)</li>
    <li className='state-item party-bjp'>Gujarat (BJP)</li>
    <li className='state-item party-bjp'>Haryana (BJP)</li>
    <li className='state-item party-inc'>Himachal Pradesh (INC)</li>
    <li className='state-item'>Jharkhand (JMM)</li>
    <li className='state-item party-inc'>Karnataka (INC)</li>
    <li className='state-item'>Kerala (CPI-M)</li>
    <li className='state-item party-bjp'>Madhya Pradesh (BJP)</li>
    <li className='state-item party-bjp'>Maharashtra (SHS + BJP + NCP)</li>
    <li className='state-item party-bjp'>Manipur (BJP)</li>
    <li className='state-item'>Meghalaya (NPP)</li>
    <li className='state-item'>Mizoram (ZPM)</li>
    <li className='state-item'>Nagaland (NDPP)</li>
    <li className='state-item party-bjp'>Odisha (BJP)</li>
    <li className='state-item'>Punjab (AAP)</li>
    <li className='state-item'>Rajasthan (BJP)</li>
    <li className='state-item'>Sikkim (SKM)</li>
    <li className='state-item'>Tamil Nadu (DMK)</li>
    <li className='state-item'>Telangana (INC)</li>
    <li className='state-item'>Tripura (BJP)</li>
    <li className='state-item'>Uttar Pradesh (BJP)</li>
    <li className='state-item'>Uttarakhand (BJP)</li>
    <li className='state-item'>West Bengal (AITC)</li>
  </ul>
</div>)
root.render(output);
