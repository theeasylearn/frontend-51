// import reactdom  
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
var output = (<div className='container'>
  <div className="row">
    <div className="col-12">
      <h2>Applying bootstrap class </h2>
    </div>
  </div>
  <div className="row">
    <div className="col-12">
      <table className='table table-bordered table-striped'>
        <thead>
          <tr>
            <th>Pos</th>
            <th>Team</th>
            <th>Played</th>
            <th>Won</th>
            <th>Lost</th>
            <th>N/R</th>
            <th>Points</th>
            <th>NRR</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Punjab Kings (Q)</td>
            <td>14</td>
            <td>9</td>
            <td>4</td>
            <td>1</td>
            <td>19</td>
            <td>+0.372</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Royal Challengers Bengaluru (Q)</td>
            <td>14</td>
            <td>9</td>
            <td>4</td>
            <td>1</td>
            <td>19</td>
            <td>+0.255</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Gujarat Titans (Q)</td>
            <td>14</td>
            <td>9</td>
            <td>5</td>
            <td>0</td>
            <td>18</td>
            <td>+0.254</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Mumbai Indians (Q)</td>
            <td>14</td>
            <td>8</td>
            <td>6</td>
            <td>0</td>
            <td>16</td>
            <td>+1.142</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Delhi Capitals (E)</td>
            <td>14</td>
            <td>7</td>
            <td>6</td>
            <td>1</td>
            <td>15</td>
            <td>+0.011</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Sunrisers Hyderabad (E)</td>
            <td>14</td>
            <td>6</td>
            <td>7</td>
            <td>1</td>
            <td>13</td>
            <td>+0.022</td>
          </tr>
          <tr>
            <td>7</td>
            <td>Lucknow Super Giants (E)</td>
            <td>14</td>
            <td>6</td>
            <td>8</td>
            <td>0</td>
            <td>12</td>
            <td>-0.337</td>
          </tr>
          <tr>
            <td>8</td>
            <td>Kolkata Knight Riders (E)</td>
            <td>14</td>
            <td>5</td>
            <td>7</td>
            <td>2</td>
            <td>12</td>
            <td>-0.305</td>
          </tr>
          <tr>
            <td>9</td>
            <td>Rajasthan Royals (E)</td>
            <td>14</td>
            <td>4</td>
            <td>10</td>
            <td>0</td>
            <td>8</td>
            <td>-0.549</td>
          </tr>
          <tr>
            <td>10</td>
            <td>Chennai Super Kings (E)</td>
            <td>14</td>
            <td>4</td>
            <td>10</td>
            <td>0</td>
            <td>8</td>
            <td>-0.647</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>)
root.render(output);
