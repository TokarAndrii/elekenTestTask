import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import {connect} from 'react-redux'
import 'react-datepicker/dist/react-datepicker-cssmodules.css'
import './App.css';


class App extends Component {
  state = {
    startDate: moment(),
  };

  handleChange = date => {
    this.setState({startDate: date});
  };


  render() {
    console.log(this.props);

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
          dateFormat="DD/MM/YYYY"
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({val: state.val});

const mapDispatchToProps = (dispatch,) => ({
  add: () => dispatch({
    type: 'SOME',
    payload: 1
  })
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
