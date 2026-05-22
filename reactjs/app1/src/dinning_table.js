import React from "react";
//create class Components using ES6 standard
export default class DinningTable extends React.Component {
  constructor(props) {
    super(props); //required 
    //create property variable
    this.tableno = props.tableno;
    this.name = props.name;
    //create state object
    this.state = {
      thali: 0,
      ras: 0,
      roti: 0,
      chas: 0,
      papad: 0
    }
  }

  //create arrow function 
  updateThali = () => {
    // this.state.thali = this.state.thali + 1
    this.setState({
        thali: this.state.thali + 1
    });

  }
  updateRas = () => {
    this.setState({
      ras : this.state.ras + 1
    });
  }
  render() {
    return (<div className="col-lg-3">
      <div className='card shadow'>
        <div className="card-header text-bg-danger d-flex justify-content-between">
          <div>{this.tableno} - </div>
          <div>{this.name} </div>
        </div>
        <div className="card-body">
          <button type='button' onClick={this.updateThali} className='btn btn-primary w-100'>Thali
            <span className='ms-2 badge bg-warning'>{this.state.thali}</span>
          </button>
          <div className="row mt-3">
            <div className="col">
              <button onClick={this.updateRas} type='button' className='btn btn-warning w-100'>Ras
                <span className='ms-2 badge bg-dark'>{this.state.ras}</span>
              </button>
            </div>
            <div className="col">
              <button   type='button' className='btn btn-secondary w-100'>Roti
                <span className='ms-2 badge bg-info'>{this.state.roti}</span>
              </button>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <button type='button' className='btn btn-info w-100'>Papad
                <span className='ms-2 badge bg-dark'>{this.state.papad}</span>
              </button>
            </div>
            <div className="col">
              <button type='button' className='btn btn-success w-100'>Chas
                <span className='ms-2 badge bg-danger'>{this.state.chas}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>)
  }
}