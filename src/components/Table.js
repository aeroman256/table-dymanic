import React from "react"
import TableRows  from "./TableRows"

class Table extends React.Component {
    renderTableHeader() {
        return(
            <tr>
                <th>Id</th>
                <th>Firstname</th>
                <th>Lastname</th> 
                <th>email</th>
                <th>phone</th>     
            </tr>
        )
    }
    renderTableBody() {
        return(
            <TableRows />
        )
    }
    render(){
        return(
            <table className="table table-bordered table--white">
                <thead>
                    {this.renderTableHeader()}
                </thead>
                <tbody>
                    {this.renderTableBody()}
                </tbody>
            </table>
        )
    }
}

export default Table