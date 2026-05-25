import React from "react";

export default class DinningTable extends React.Component {

  // Constants (These are real constants)
  static THALI_PRICE = 150;
  static RAS_PRICE = 29;
  static ROTI_PRICE = 8.25;
  static PAPAD_PRICE = 11.44;
  static CHAS_PRICE = 19.77;

  constructor(props) {
    super(props);
    console.log('constructor called');
    // Constants (These are real constants)


    this.tableno = props.tableno;
    this.name = props.name;
    this.state = {
      thali: 0,
      ras: 0,
      roti: 0,
      chas: 0,
      papad: 0,
      total: 0
    }
  
  }
  componentWillMount()
  {
    console.log('component will mount method called');
  }
  componentDidMount()
  {
     console.log('component did mount method called');
  }
  updateThali = () => {
    this.setState({
      thali: this.state.thali + 1,

    }, () => {
      //anonyms call back function which execute only after that state variable updated
      this.setState({
        total: (this.state.thali * DinningTable.THALI_PRICE) + (this.state.roti * DinningTable.ROTI_PRICE) + (this.state.papad * DinningTable.PAPAD_PRICE) + (this.state.chas * DinningTable.CHAS_PRICE) + (this.state.ras * DinningTable.RAS_PRICE)
      })
    });
  }

  updateRas = () => {
    this.setState({
      ras: this.state.ras + 1
    }, () => {
      //anonyms call back function which execute only after that state variable updated
       this.setState({
        total: (this.state.thali * DinningTable.THALI_PRICE) + (this.state.roti * DinningTable.ROTI_PRICE) + (this.state.papad * DinningTable.PAPAD_PRICE) + (this.state.chas * DinningTable.CHAS_PRICE) + (this.state.ras * DinningTable.RAS_PRICE)
      })
    });
  }

  // Added logic as requested
  updateRoti = () => {
    this.setState({
      roti: this.state.roti + 1
    }, () => {
      //anonyms call back function which execute only after that state variable updated
       this.setState({
        total: (this.state.thali * DinningTable.THALI_PRICE) + (this.state.roti * DinningTable.ROTI_PRICE) + (this.state.papad * DinningTable.PAPAD_PRICE) + (this.state.chas * DinningTable.CHAS_PRICE) + (this.state.ras * DinningTable.RAS_PRICE)
      })
    });
  }

  updatePapad = () => {
    this.setState({
      papad: this.state.papad + 1
    }, () => {
      //anonyms call back function which execute only after that state variable updated
       this.setState({
        total: (this.state.thali * DinningTable.THALI_PRICE) + (this.state.roti * DinningTable.ROTI_PRICE) + (this.state.papad * DinningTable.PAPAD_PRICE) + (this.state.chas * DinningTable.CHAS_PRICE) + (this.state.ras * DinningTable.RAS_PRICE)
      })
    });
  }

  updateChas = () => {
    this.setState({
      chas: this.state.chas + 1
    }, () => {
      //anonyms call back function which execute only after that state variable updated
       this.setState({
        total: (this.state.thali * DinningTable.THALI_PRICE) + (this.state.roti * DinningTable.ROTI_PRICE) + (this.state.papad * DinningTable.PAPAD_PRICE) + (this.state.chas * DinningTable.CHAS_PRICE) + (this.state.ras * DinningTable.RAS_PRICE)
      })
    });
  }

  render() {
    console.log('render method is called.');
    return (
      <div className="col-lg-3">
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
                <button onClick={this.updateRoti} type='button' className='btn btn-secondary w-100'>Roti
                  <span className='ms-2 badge bg-info'>{this.state.roti}</span>
                </button>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col">
                <button onClick={this.updatePapad} type='button' className='btn btn-info w-100'>Papad
                  <span className='ms-2 badge bg-dark'>{this.state.papad}</span>
                </button>
              </div>
              <div className="col">
                <button onClick={this.updateChas} type='button' className='btn btn-success w-100'>Chas
                  <span className='ms-2 badge bg-danger'>{this.state.chas}</span>
                </button>
              </div>
            </div>
          </div>
          <div className="card-footer d-flex justify-content-between">
            <span>Total</span>
            <span>{this.state.total}</span>
          </div>
        </div>
      </div>
    )
  }
}