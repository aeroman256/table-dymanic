import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class SearchTextFields extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      query: props.query
    }
  }
  state = {
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  };

  // handleChange = name => event => {
  //   this.setState({
  //     [name]: event.target.value,
  //   });
  // };

  handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      this.handleSearch()
    }
  };

  handleSearch = () => {
    this.props.onQueryChange(this.state.query);
  };

  handleInputChange = (e) => {
    this.setState({
      query: e.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="outlined-search"
          label="Search user"
          type="search"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          onKeyDown={this.handleKeyDown}
          onChange={this.handleInputChange}
          value={this.state.query}
        />
        <Button 
          variant="outlined" 
          className={classes.button}
          //onClick={this.handleSearch}
          onKeyDown={this.handleKeyDown}
          >
            <span><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>								</span>
        </Button>
      </form>
    );
  }
}

SearchTextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchTextFields);