import ReactDOM from 'react-dom/client';
function Team() {
    // create object to store inline style
    const ulStyle = {fontSize:'20px',backgroundColor:'#eeeeee'}
    const liStyle = {borderBottom:'2px solid black',marginBottom:'7px',color:'green'}
    return (<div className='container'>
        <div className='row'>

            <div className='col-lg-4'>

                <div className='card'>
                    <div className="card-body shadow">
                        <div className="h2 border-bottom pb-3">Players</div>
                        <ul style={ulStyle}>
                            <li style={liStyle}><strong>Shreyas Iyer</strong>  Captain / Top-order Batter</li>
                            <li style={liStyle}><strong>Tilak Varma</strong>  Vice-Captain / All-rounder</li>
                            <li style={liStyle}><strong>Sanju Samson</strong>  Wicketkeeper-Batter</li>
                            <li style={liStyle}><strong>Ishan Kishan</strong>  Wicketkeeper-Batter</li>
                            <li style={liStyle}><strong>Abhishek Sharma</strong>  All-rounder / Opening Batter</li>
                            <li style={liStyle}><strong>Vaibhav Sooryavanshi</strong>  Top-order Batter</li>
                            <li style={liStyle}><strong>Nitish Kumar Reddy</strong>  Batting All-rounder</li>
                            <li style={liStyle}><strong>Shivam Dube</strong>  Batting All-rounder</li>
                            <li style={liStyle}><strong>Axar Patel</strong>  Spin All-rounder</li>
                            <li style={liStyle}><strong>Washington Sundar</strong>  Spin All-rounder</li>
                            <li style={liStyle}><strong>Ravi Bishnoi</strong>  Leg-spinner</li>
                            <li style={liStyle}><strong>Varun Chakravarthy</strong>  Mystery Spinner</li>
                            <li style={liStyle}><strong>Jasprit Bumrah</strong>  Fast Bowler</li>
                            <li style={liStyle}><strong>Mohammed Siraj</strong>  Fast Bowler</li>
                            <li style={liStyle}><strong>Arshdeep Singh</strong>  Fast Bowler</li>
                            <li style={liStyle}><strong>Harshit Rana</strong>  Fast Bowler</li>
                            <li style={liStyle}><strong>Prince Yadav</strong>  Medium-fast Bowler</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Team />)