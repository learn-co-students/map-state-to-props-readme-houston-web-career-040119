import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'

class App extends Component {

  handleOnClick() {
    this.props.increase()
  }

  render() {
    return (
      <div className="App">
        <button onClick={(event) => this.handleOnClick()}>
          Click
        </button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {items: state.items}
}

const mapDispatchToProps = (dispatch) => {
  return{ 
    increase: () => dispatch({type:'INCREASE_COUNT'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
