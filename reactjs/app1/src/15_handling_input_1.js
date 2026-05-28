// import reactdom  
import ReactDOM from 'react-dom/client';
import React from 'react';
class SimpleInterestCalculator extends React.Component {
    constructor(props) {
        super(props);
        //create state object
        this.state = {
            amount: 0,
            rate: 0,
            year: 0,
            interest: 0,
        }
    }
    // arrow function 
    updateAmount = (e) => {
        this.setState({
            amount: e.target.value
        });
    }

    updateRate = (e) => {
        this.setState({
            rate: e.target.value
        });
    }

    updateYear = (e) => {
        this.setState({
            year: e.target.value
        });
    }

    componentDidUpdate(prevProp, prevState) {
        //state variable must be updated conditionally 
        if (this.state.amount != prevState.amount || this.state.rate != prevState.rate || this.state.year != prevState.year) {
            this.setState({
                interest: (this.state.amount * this.state.rate * this.state.year) / 100
            })
        }
    }
    render() {
        return (<div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-lg-5 col-md-7">
                    <div className="text-center mb-4">
                        <h1 className="display-5 fw-bold">💰 Simple Interest</h1>
                        <p className="lead">Calculate your interest easily</p>
                    </div>
                    <div className="card shadow-lg border-0 rounded-4">
                        <div className="card-body p-4">
                            <div className="mb-3">
                                <label className="form-label fw-semibold">Principal Amount (₹)</label>
                                <div className="input-group">
                                    <span className="input-group-text">₹</span>
                                    <input type="number" id="principal" className="form-control" placeholder="Enter amount" min={1} onBlur={this.updateAmount} />
                                </div>
                            </div>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <label className="form-label fw-semibold">Interest Rate (% p.a.)</label>
                                    <div className="input-group">
                                        <input type="number" id="rate" className="form-control" placeholder="e.g. 8.5" step="0.01" onBlur={this.updateRate} />
                                        <span className="input-group-text">%</span>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label fw-semibold">Time Period (Years)</label>
                                    <div className="input-group">
                                        <input type="number" id="time"
                                            onBlur={this.updateYear}
                                            className="form-control" placeholder="e.g. 3" step="0.1" />
                                        <span className="input-group-text">Yr</span>
                                    </div>
                                </div>
                            </div>
                            {/* <button onclick="calculateInterest()" className="btn btn-success btn-lg w-100 mt-4 fw-semibold">
                                CALCULATE INTEREST
                            </button> */}
                            {/* Result Section */}
                            <div id="result" className="mt-4">
                                <div className="card border-0 bg-light rounded-3">
                                    <div className="card-body">
                                        <h5 className="text-center text-primary mb-3">📊 Result</h5>

                                        <hr />
                                        <div className="text-center">
                                            <p className="mb-1">Interest</p>
                                            <h4 id="display-total" className="fw-bold text-primary">₹ {this.state.interest}</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-4">
                        <small className="text-white-50">
                            Formula: <strong>SI = (P × R × T) / 100</strong>
                        </small>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SimpleInterestCalculator />)