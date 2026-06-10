import ReactDOM from 'react-dom/client';
import { styled } from 'styled-components';
function Team() {
    const Ul = styled.ul`
        font-size:20px;
        background-color:#eeeeee;
        list-style-type:none;
    `; 
    const Li = styled.li`
        border-bottom:2px solid black;
        color:green
    `;
    return (<div className='container'>
        <div className='row'>
            <div className='col-lg-4'>
                <div className='card'>
                    <div className="card-body shadow">
                        <div className="h2 border-bottom pb-3">Players</div>
                        <Ul>
                            <Li ><strong>Shreyas Iyer</strong>  Captain / Top-order Batter</Li>
                            <Li ><strong>Tilak Varma</strong>  Vice-Captain / All-rounder</Li>
                            <Li ><strong>Sanju Samson</strong>  Wicketkeeper-Batter</Li>
                            <Li ><strong>Ishan Kishan</strong>  Wicketkeeper-Batter</Li>
                            <Li ><strong>Abhishek Sharma</strong>  All-rounder / Opening Batter</Li>
                            <Li ><strong>Vaibhav Sooryavanshi</strong>  Top-order Batter</Li>
                            <Li ><strong>Nitish Kumar Reddy</strong>  Batting All-rounder</Li>
                            <Li ><strong>Shivam Dube</strong>  Batting All-rounder</Li>
                            <Li ><strong>Axar Patel</strong>  Spin All-rounder</Li>
                            <Li ><strong>Washington Sundar</strong>  Spin All-rounder</Li>
                            <Li ><strong>Ravi Bishnoi</strong>  Leg-spinner</Li>
                            <Li ><strong>Varun Chakravarthy</strong>  Mystery Spinner</Li>
                            <Li ><strong>Jasprit Bumrah</strong>  Fast Bowler</Li>
                            <Li ><strong>Mohammed Siraj</strong>  Fast Bowler</Li>
                            <Li ><strong>Arshdeep Singh</strong>  Fast Bowler</Li>
                            <Li ><strong>Harshit Rana</strong>  Fast Bowler</Li>
                            <Li ><strong>Prince Yadav</strong>  Medium-fast Bowler</Li>
                        </Ul>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Team />)