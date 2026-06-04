import ReactDOM from 'react-dom/client';
import ScoreBoard from './scoreboard.css';
// import hook named useState 
import { useState } from 'react';
function MyScoreBoard() {
    //create state variable and method to update state variable
    let [four,setFour] = useState(0);  
    let [ball,setBall] = useState(0);
    let [score,setScore] = useState(0);

    //create function inside function 
    let updateRun = function(runs) {
        // alert(runs);
        setFour(four + 1); // update state variable four store value of four variable + runs
        setBall(ball + 1); 
        setScore(score + runs);
        // task write code to update scoreboard when user click on other button
    }

    return (<div className="container py-4">
        {/* Header */}
        <div className="header text-center py-4 mb-4 rounded-3 shadow-sm">
            <h1 className="display-5 fw-bold mb-0 text-primary">
                <i className="fas fa-cricket-ball" /> Cricket Scorer
            </h1>
        </div>
        <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8">
                {/* Main Score Display */}
                <div className="score-card p-5 mb-4 text-center">
                    <div className="row align-items-center">
                        <div className="col-md-4 text-start">
                            <h5 className="text-muted mb-1">Batsman</h5>
                            <input type="text" id="batsmanName" className="form-control form-control-lg border-0 bg-light" defaultValue="Virat Kohli" style={{ "font-size": "1.3rem" }} />
                        </div>
                        <div className="col-md-4">
                            <small className="text-muted fw-bold">TOTAL RUNS</small>
                            <div id="totalRuns" className="score-number">{score}</div>
                            <div className="d-flex justify-content-center gap-4 mt-3">
                                <div className="stat-box text-center flex-fill">
                                    <small className="text-muted">BALLS</small>
                                    <h3 id="ballsFaced" className="mb-0 fw-bold">{ball}</h3>
                                </div>
                                <div className="stat-box text-center flex-fill">
                                    <small className="text-muted">STRIKE RATE</small>
                                    <h3 id="strikeRate" className="mb-0 fw-bold">{score/ball}</h3>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                </div>
                {/* Scoring Buttons */}
                <div className="card bg-white border-0 shadow-sm mb-4">
                    <div className="card-body">
                        <h5 className="text-center mb-4 text-primary">TAP TO SCORE</h5>
                        <div className="row g-3 justify-content-center">
                            <div className="col-6 col-sm-4 col-md-2">
                                <button onclick="addRuns(6)" id="btn6" className="btn btn-score btn-6">
                                    <span>6</span>
                                    <span className="shot-count" id="count6">(0)</span>
                                </button>
                            </div>
                            <div className="col-6 col-sm-4 col-md-2">
                                <button type='button' onClick={(e) => updateRun(4)} id="btn4" className="btn btn-score btn-4">
                                    <span>4</span>
                                    <span className="shot-count" id="count4">({four})</span>
                                </button>
                            </div>
                            <div className="col-6 col-sm-4 col-md-2">
                                <button onclick="addRuns(3)" id="btn3" className="btn btn-score btn-3">
                                    <span>3</span>
                                    <span className="shot-count" id="count3">(0)</span>
                                </button>
                            </div>
                            <div className="col-6 col-sm-4 col-md-2">
                                <button onclick="addRuns(2)" id="btn2" className="btn btn-score btn-2">
                                    <span>2</span>
                                    <span className="shot-count" id="count2">(0)</span>
                                </button>
                            </div>
                            <div className="col-6 col-sm-4 col-md-2">
                                <button onclick="addRuns(1)" id="btn1" className="btn btn-score btn-1">
                                    <span>1</span>
                                    <span className="shot-count" id="count1">(0)</span>
                                </button>
                            </div>
                            <div className="col-6 col-sm-4 col-md-2">
                                <button onclick="addRuns(0)" id="btn0" className="btn btn-score btn-0">
                                    <span>0</span>
                                    <span className="shot-count" id="count0">(0)</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
              
            </div>
        </div>
    </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyScoreBoard />)