import React, { Component } from 'react';
// import Header from "./components/Header"
// import Filter from "./components/Filter"
import Table from "./components/Table"
// import UserInfo from "./components/UserInfo"
// import Pagination from "./components/TablePagination"

class App extends Component {
  render() {
    return (
      <div className="App">
          <Table />
          {/* <Header />
          <Filter />
          <Table />
          <UserInfo />
          <Pagination /> */}
      </div>
    );
  }
}
//header
      //FilterableUsersTable -> filter
      //                  L  -> table -> tableRows -> tableRowsInfo
      //                  L  -> pagination
export default App;
