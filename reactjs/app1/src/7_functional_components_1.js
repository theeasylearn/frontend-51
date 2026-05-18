// import reactdom  
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
//create functional Components 1st letter must be capital
function Website()
{
    return (<div className='container'>
      <div className="row">
        <div className="col-12">
            <h1>Welcome to site</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolor tempore qui magnam nostrum eos laudantium, voluptatum culpa quidem pariatur a iure ducimus est sequi, architecto ut modi? Vitae, quos?</p>
        </div>
      </div>
    </div>)
}
root.render(<Website />);
