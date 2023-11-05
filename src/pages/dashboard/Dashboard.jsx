import React from 'react'
import "./Dashboard.css"
import Pchart from '../../components/DashComp/Pchart';
import Graph from "../../components/DashComp/Graph";
import TestTable from '../../components/test/test';
const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="box box1">table1</div>
      <div className="box box1">table2</div>
      <div className="box box1">table3</div>
      <div className="box box1">table</div>
      <div className="box box1">table5</div>
      <div className="box graph"><Graph/></div>
      <div className="box piechart"><Pchart/></div>
      <TestTable/>
    </div>
  )
}

export default Dashboard