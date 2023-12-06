import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateDisplay, clearDisplay } from './actions';

class App extends React.Component {
  render() {
    return (
      <div id="calculator">
        <div id="display">{this.props.displayValue}</div>
        <div id="buttons">
          <div className="row">
            <button id="seven" onClick={() => this.props.updateDisplay('7')}>7</button>
            <button id="eight" onClick={() => this.props.updateDisplay('8')}>8</button>
            <button id="nine" onClick={() => this.props.updateDisplay('9')}>9</button>
            <button id="divide" onClick={() => this.props.updateDisplay('/')}>/</button>
          </div>
          <div className="row">
            <button id="four" onClick={() => this.props.updateDisplay('4')}>44</button>
            <button id="five" onClick={() => this.props.updateDisplay('5')}>55</button>
            <button id="six" onClick={() => this.props.updateDisplay('6')}>66</button>
            <button id="multiply" onClick={() => this.props.updateDisplay('*')}>*</button>
          </div>
          <div className="row">
            <button id="one" onClick={() => this.props.updateDisplay('1')}>1</button>
            <button id="two" onClick={() => this.props.updateDisplay('2')}>2</button>
            <button id="three" onClick={() => this.props.updateDisplay('3')}>3</button>
            <button id="subtract" onClick={() => this.props.updateDisplay('-')}>-</button>
          </div>
          <div className="row">
            <button id="zero" onClick={() => this.props.updateDisplay('0')}>0</button>
            <button id="decimal" onClick={() => this.props.updateDisplay('.')}>.</button>
            <button id="equals" onClick={() => this.props.updateDisplay('=')}>=</button>
            <button id="add" onClick={() => this.props.updateDisplay('+')}>+</button>
            <button>Seno</button>
            <button>Conseno</button>
            <button>Tangente</button>
          </div>
        </div>
        <button id="clear" onClick={() => this.props.clearDisplay()}>Clear</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  displayValue: state.displayValue
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  updateDisplay,
  clearDisplay
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);