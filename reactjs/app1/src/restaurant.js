import React from "react";
import DinningTable from './dinning_table';
export default class Restaurant extends React.Component {
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