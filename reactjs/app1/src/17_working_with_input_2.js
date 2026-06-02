// import reactdom  
import ReactDOM from 'react-dom/client';
import React from 'react';
class MathsCalculator extends React.Component {
    constructor(props) {
        super(props);
        //create state object
        this.state = {
            result: 0
        }
    }
    //single function to store any input into state variable 
    updateState = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    doCalculation = (event) => {
        event.preventDefault();
        console.log(this.state);
        var temp;
        if (this.state.operation === '1') {
            temp = parseInt(this.state.num1) + parseInt(this.state.num2);
        }
        //task do subtraction, multiplication, division using if else if ladder 
        // uncheck radio button
        this.setState({
            result: temp,
            num1:'',
            num2:'',

        });
    }
    render() {
        return (<div className="container">
            <div className="calculator-card card">
                <div className="card-header bg-primary text-white text-center py-3">
                    <h3>Simple Calculator</h3>
                </div>
                <div className="card-body p-4">
                    <form action="post" onSubmit={this.doCalculation} >
                        {/* Number Inputs */}
                        <div className="mb-3">
                            <label className="form-label fw-bold">First Number</label>
                            <input type="number" id="num1" name='num1' className="form-control 
                        form-control-lg"
                                value={this.state.num1} onChange={this.updateState}
                                placeholder="Enter first number" step="any" />
                        </div>
                        <div className="mb-4">
                            <label className="form-label fw-bold">Second Number</label>
                            <input type="number" id="num2" name='num2' className="form-control form-control-lg"
                                value={this.state.num2} onChange={this.updateState}
                                placeholder="Enter second number" step="any" />
                        </div>
                        {/* Operation Selection */}
                        <div className="mb-4">
                            <label className="form-label fw-bold">Select Operation</label>
                            <div className="row g-3">
                                <div className="col-6 col-sm-3">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="operation" id="add" value={1} onChange={this.updateState}
                                        />
                                        <label className="form-check-label" htmlFor="add">Addition (+)</label>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-3">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio"
                                            value={2} onChange={this.updateState}
                                            name="operation" id="sub" defaultValue="sub" />
                                        <label className="form-check-label" htmlFor="sub">Subtraction (-)</label>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-3">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio"
                                            value={3} onChange={this.updateState}
                                            name="operation" id="mul" defaultValue="mul" />
                                        <label className="form-check-label" htmlFor="mul">Multiplication (×)</label>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-3">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio"
                                            value={4} onChange={this.updateState}
                                            name="operation" id="div" defaultValue="div" />
                                        <label className="form-check-label" htmlFor="div">Division (÷)</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Calculate Button */}
                        <button onclick="calculate()" className="btn btn-primary btn-lg w-100 mb-4">
                            Calculate
                        </button>
                        {/* Result */}
                        <div id="result" className="alert alert-info text-center fs-5 fw-bold">
                            {this.state.result}
                        </div>
                    </form>
                </div>

            </div>
        </div>
        )
    }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MathsCalculator />)