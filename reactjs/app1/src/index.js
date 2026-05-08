// import reactdom  
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
function GetDayName(day)
{
    if(day === 0)
      return "sunday ";
    else if(day === 1)
      return "Monday ";
    else if(day === 2)
      return " Tuesday";
    else if(day === 3)
      return " Wednesday";
    else if(day === 4)
      return " Thursday";
    else if(day === 5)
      return "Friday";
    else if(day === 6)
      return "Saturday ";
    
}
function DisplayDateTime()
{
    
    let now = new Date();
    return (<div className='container'>
      <div className='row'>
          <div className='col-12'>
                <h1>Current Date</h1>
                Today is : {GetDayName(now.getDay())} {now.getDate()} / {now.getMonth()+1} / {now.getFullYear()}
                {/* here display time */}
          </div>
      </div>
    </div>)
}
root.render(DisplayDateTime());
