// import reactdom  
import ReactDOM from 'react-dom/client';
import React from 'react';
const root = ReactDOM.createRoot(document.getElementById('root'));
//create class Components using ES6 standard
class DinningTable extends React.Component {
  constructor(props) {
    super(props); //required 
    //create property variable
    this.tableno = props.tableno;
    this.name = props.name;
  }
  render() {
    return (<div className="col-lg-3">
      <div className='card shadow'>
        <div className="card-header text-bg-danger d-flex justify-content-between">
          <div>{this.tableno} - </div>
          <div>{this.name} </div>
        </div>
        <div className="card-body">
          <button type='button' className='btn btn-primary w-100'>Thali</button>
          <div className="row mt-3">
            <div className="col">
              <button type='button' className='btn btn-warning w-100'>Ras</button>
            </div>
            <div className="col">
              <button type='button' className='btn btn-secondary w-100'>Roti</button>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <button type='button' className='btn btn-info w-100'>Papad</button>
            </div>
            <div className="col">
              <button type='button' className='btn btn-success w-100'>Chas</button>
            </div>
          </div>
        </div>
      </div>
    </div>)
  }
}
class Restaurant extends React.Component {
  render() {
    return (<div className='container'>
      <div className="row">
        {/* single table code */}
        <DinningTable tableno='1' name='Ankit Patel' />
        <DinningTable tableno='2' name='Diya Patel' />
        <DinningTable tableno='3' name='Jiya Patel' />
        <DinningTable tableno='4' name='Ghanshyam' />


      </div>
    </div>);
  }
}
root.render(<Restaurant />);
