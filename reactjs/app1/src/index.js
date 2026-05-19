// import reactdom  
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
function Student(props) {
  return (<tr>
    <td>{props.name}</td>
    <td width='20%'>{props.maths}</td>
    <td width='20%'>{props.science}</td>
    <td width='20%'>{props.english}</td>
  </tr>)
}
function Division() {
  return (<div className='container'>
    <div className="row">
      <div className="col-12">
        <h2>A Division Result </h2>
      </div>
      <div className="col-12">
        <table className='table table-bordered table-striped'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Maths</th>
              <th>Science</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            <Student name='Jiya' maths='100' science='100' english='99' />
            <Student name='Diya' maths='99' science='100' english='100' />
            <Student name='Ghanshyam' maths='98' science='97' english='99' />
            
          </tbody>
        </table>
      </div>
    </div>
  </div>)
}
root.render(<Division />);
