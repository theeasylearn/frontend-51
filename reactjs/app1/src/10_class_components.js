// import reactdom  
import ReactDOM from 'react-dom/client';
import React from 'react';
const root = ReactDOM.createRoot(document.getElementById('root'));
//create class Components using ES6 standard
class Website extends React.Component {
  // render function will execute automatically & return JSX when we use class components 
  render() {
    return (<div className='container'>
      <div className="row">
        <div className="col-12">
          <h1>Welcome to site</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolor tempore qui magnam nostrum eos laudantium, voluptatum culpa quidem pariatur a iure ducimus est sequi, architecto ut modi? Vitae, quos?</p>
        </div>
      </div>
    </div>)
  }
}
root.render(<Website />);
