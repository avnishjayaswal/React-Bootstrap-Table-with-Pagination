import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { MDBDataTable } from "mdbreact";

const TableData = {
  columns: [
    {
      label: "Name",
      field: "name",
      sort: "asc",
      width: 150,
    },
    {
      label: "Position",
      field: "position",
      sort: "asc",
      width: 270,
    },
    {
      label: "Office",
      field: "office",
      sort: "asc",
      width: 200,
    },
    {
      label: "Age",
      field: "age",
      sort: "asc",
      width: 100,
    },
    {
      label: "Start date",
      field: "date",
      sort: "asc",
      width: 150,
    },
    {
      label: "Salary",
      field: "salary",
      sort: "asc",
      width: 100,
    },
  ],
  rows: [
    {
      name: "Nix",
      position: "Architect",
      office: "New City",
      age: "34",
      date: "2011/04/25",
      salary: "$220",
    },
    {
      name: "Wix",
      position: "Accountant",
      office: "Tokyo",
      age: "63",
      date: "2011/07/25",
      salary: "$170",
    },
    {
      name: "Cox",
      position: "Junior Technical Author",
      office: "San Francisco",
      age: "66",
      date: "2009/01/12",
      salary: "$86",
    },
    {
      name: "Kelly",
      position: "Developer",
      office: "Edinburgh",
      age: "22",
      date: "2012/03/29",
      salary: "$433",
    },
    {
      name: "Airi Satou",
      position: "Accountant",
      office: "Tokyo",
      age: "33",
      date: "2008/11/28",
      salary: "$162",
    },
    {
      name: "Brielle Williamson",
      position: "Integration Specialist",
      office: "New York",
      age: "61",
      date: "2012/12/02",
      salary: "$372",
    },
    {
      name: "Nix Wix",
      position: "Architect",
      office: "New City",
      age: "34",
      date: "2011/04/25",
      salary: "$220",
    },
    {
      name: "Wix Cox",
      position: "Accountant",
      office: "Tokyo",
      age: "63",
      date: "2011/07/25",
      salary: "$170",
    },
    {
      name: "Cox Wix",
      position: "Junior Technical Author",
      office: "San Francisco",
      age: "66",
      date: "2009/01/12",
      salary: "$86",
    },
    {
      name: "Pop wills",
      position: "Developer",
      office: "Edinburgh",
      age: "22",
      date: "2012/03/29",
      salary: "$433",
    },
    {
      name: "Cox Wix1",
      position: "Junior Technical Author",
      office: "San Francisco",
      age: "66",
      date: "2009/01/12",
      salary: "$86",
    },
    {
      name: "Pop wills2",
      position: "Developer",
      office: "Edinburgh",
      age: "22",
      date: "2012/03/29",
      salary: "$433",
    },
  ],
};

function App() {
  return (
    <div className="App col-sm-8">
      <MDBDataTable striped bordered small data={TableData} />
    </div>
  );
}

export default App;
