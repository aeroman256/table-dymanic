import React, { Component } from 'react';
// import Header from "./components/Header"
// import Filter from "./components/Filter"
import CustomPaginationActionsTable from "./components/Table"
// import UserInfo from "./components/UserInfo"
// import Pagination from "./components/TablePagination"

class App extends Component {
  render() {
    return (
      <div className="App">
          <CustomPaginationActionsTable />
      </div>
    );
  }
}

export default App;
