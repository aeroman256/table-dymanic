import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
// import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
// import Tooltip from '@material-ui/core/Tooltip';
import { lighten } from '@material-ui/core/styles/colorManipulator';
import EnhancedTableHead from './Header'
import SearchTextFields from './Search'

function createData(id, firstName, lastName, email, phone) {
  return { id, firstName, lastName, email, phone};
}

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

const toolbarStyles = theme => ({
  root: {
    paddingRight: theme.spacing.unit,
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  spacer: {
    flex: '1 1 100%',
  },
  actions: {
    color: theme.palette.text.secondary,
  },
  title: {
    flex: '0 0 auto',
  },
});

let EnhancedTableToolbar = props => {
  const { numSelected, classes } = props;

  return (
    <Toolbar
      className={classNames(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      <div className={classes.title}>
        {numSelected > 0 ? (
            <Typography color="inherit" variant="subtitle1">
                {numSelected} selected
            </Typography>
                ) : (
            <Typography variant="h6" id="tableTitle">
               <SearchTextFields />
            </Typography>
       
            
        )}
      </div>
      <div className={classes.spacer} />
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
};

EnhancedTableToolbar = withStyles(toolbarStyles)(EnhancedTableToolbar);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },
  table: {
    minWidth: 1020,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
});

class EnhancedTable extends React.Component {
  state = {
    order: 'asc',
    orderBy: 'calories',
    selected: [],
    data: [
        createData(1, "Ivan", "ivanov", "IvanovI@mail.com", "901-932-23-23"),
        createData(2, "Ivan", "ivanov", "IvanovI@mail.com", "901-932-23-23"),
        createData(3, "Ivan", "ivanov", "IvanovI@mail.com", "901-932-23-23"),
        createData(4, "Ivan", "ivanov", "IvanovI@mail.com", "901-932-23-23"),
        createData(5, "Ivan", "ivanov", "IvanovI@mail.com", "901-932-23-23"),
        createData(6, "Ivan", "ivanov", "IvanovI@mail.com", "901-932-23-23"),
        createData(7, "Ivan", "ivanov", "IvanovI@mail.com", "901-932-23-23"),
        createData(8, "Ivan", "ivanov", "IvanovI@mail.com", "901-932-23-23"),
        createData(1, "Ivan", "ivanov", "IvanovI@mail.com", "901-932-23-23"),
        createData(2, "Ivan", "ivanov", "IvanovI@mail.com", "901-932-23-23"),
        createData(3, "Ivan", "ivanov", "IvanovI@mail.com", "901-932-23-23"),
        createData(4, "Ivan", "ivanov", "IvanovI@mail.com", "901-932-23-23"),
        createData(5, "Ivan", "ivanov", "IvanovI@mail.com", "901-932-23-23"),
        createData(6, "Ivan", "ivanov", "IvanovI@mail.com", "901-932-23-23"),
        createData(7, "Ivan", "ivanov", "IvanovI@mail.com", "901-932-23-23"),
        createData(8, "Ivan", "ivanov", "IvanovI@mail.com", "901-932-23-23"),
        createData(1, "Ivan", "ivanov", "IvanovI@mail.com", "901-932-23-23"),
        createData(2, "Ivan", "ivanov", "IvanovI@mail.com", "901-932-23-23"),
        createData(3, "Ivan", "ivanov", "IvanovI@mail.com", "901-932-23-23"),
        createData(4, "Ivan", "ivanov", "IvanovI@mail.com", "901-932-23-23"),
        createData(5, "Ivan", "ivanov", "IvanovI@mail.com", "901-932-23-23"),
        createData(6, "Ivan", "ivanov", "IvanovI@mail.com", "901-932-23-23"),
        createData(7, "Ivan", "ivanov", "IvanovI@mail.com", "901-932-23-23"),
        createData(8, "Ivan", "ivanov", "IvanovI@mail.com", "901-932-23-23"),
        createData(1, "Ivan", "ivanov", "IvanovI@mail.com", "901-932-23-23"),
        createData(2, "Ivan", "ivanov", "IvanovI@mail.com", "901-932-23-23"),
        createData(3, "Ivan", "ivanov", "IvanovI@mail.com", "901-932-23-23"),
        createData(4, "Ivan", "ivanov", "IvanovI@mail.com", "901-932-23-23"),
        createData(5, "Ivan", "ivanov", "IvanovI@mail.com", "901-932-23-23"),
        createData(6, "Ivan", "ivanov", "IvanovI@mail.com", "901-932-23-23"),
        createData(7, "Ivan", "ivanov", "IvanovI@mail.com", "901-932-23-23"),
        createData(8, "Ivan", "ivanov", "IvanovI@mail.com", "901-932-23-23"),
    ],
    page: 0,
    rowsPerPage: 10,
  };

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = 'desc';

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }

    this.setState({ order, orderBy });
  };

  handleSelectAllClick = event => {
    if (event.target.checked) {
      this.setState(state => ({ selected: state.data.map(n => n.id) }));
      return;
    }
    this.setState({ selected: [] });
  };

  handleClick = (event, id) => {
    const { selected } = this.state;
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    this.setState({ selected: newSelected });
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  isSelected = id => this.state.selected.indexOf(id) !== -1;

  render() {
    const { classes } = this.props;
    const { data, order, orderBy, selected, rowsPerPage, page } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    return (
      <Paper className={classes.root}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <div className={classes.tableWrapper}>
          <Table className={classes.table} aria-labelledby="tableTitle">
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={this.handleSelectAllClick}
              onRequestSort={this.handleRequestSort}
              rowCount={data.length}
            />
            <TableBody>
              {stableSort(data, getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(n => {
                  const isSelected = this.isSelected(n.id);
                  return (
                    <TableRow
                      hover
                      onClick={event => this.handleClick(event, n.id)}
                      role="checkbox"
                      aria-checked={isSelected}
                      tabIndex={-1}
                      key={n.id}
                      selected={isSelected}
                    >
                      <TableCell align="right">{n.id}</TableCell>
                      <TableCell align="right">{n.firstName}</TableCell>
                      <TableCell align="right">{n.lastName}</TableCell>
                      <TableCell align="right">{n.email}</TableCell>
                      <TableCell align="right">{n.phone}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          rowsPerPageOptions={[10, 50]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'Previous Page',
          }}
          nextIconButtonProps={{
            'aria-label': 'Next Page',
          }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </Paper>
    );
  }
}

EnhancedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EnhancedTable);

// createData(1, "Ivan", "ivanov", "IvanovI@mail.com", "901-932-23-23"),
// createData(2, "Ivan", "ivanov", "IvanovI@mail.com", "901-932-23-23"),
// createData(3, "Ivan", "ivanov", "IvanovI@mail.com", "901-932-23-23"),
// createData(4, "Ivan", "ivanov", "IvanovI@mail.com", "901-932-23-23"),
// createData(5, "Ivan", "ivanov", "IvanovI@mail.com", "901-932-23-23"),
// createData(6, "Ivan", "ivanov", "IvanovI@mail.com", "901-932-23-23"),
// createData(7, "Ivan", "ivanov", "IvanovI@mail.com", "901-932-23-23"),
// createData(8, "Ivan", "ivanov", "IvanovI@mail.com", "901-932-23-23"),


// import React from "react"
// import TableRows  from "./TableRows"

// class Table extends React.Component {
//     renderTableHeader() {
//         return(
//             <tr>
//                 <th>Id</th>
//                 <th>Firstname</th>
//                 <th>Lastname</th> 
//                 <th>email</th>
//                 <th>phone</th>     
//             </tr>
//         )
//     }
//     renderTableBody() {
//         return(
//             <TableRows />
//         )
//     }
//     render(){
//         return(
//             <table className="table table-bordered table--white">
//                 <thead>
//                     {this.renderTableHeader()}
//                 </thead>
//                 <tbody>
//                     {this.renderTableBody()}
//                 </tbody>
//             </table>
//         )
//     }
// }

// export default Table