import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {getExchangeAsync} from './Components/redux/actions/getExchangerateActions';
import Main from './Components/Main/Main';

class App extends Component {

  componentDidMount() {

      this.props.getExchangeAsync();
  }

  render() {
    return (
      <div className="wrapper">
          <div className="content">
              <Main/>
          </div>

      </div>
    );
  }
}


function MSTP(store) {
    return {

    }
}

function MDTP(dispatch) {
    return {
        getExchangeAsync: function () {
            dispatch(getExchangeAsync())
        }
    }
}

export default connect(MSTP, MDTP)(App);
