import React, { useReducer } from 'react';
import reducer, { initialState } from '../reducers/index';
import { 
  applyNumber, 
  changeOperation, 
  clearDisplay, 
  addMemory, 
  applyMemory,
  clearMemory 
} from '../actions/index';

import './App.css';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';

function App() {
  const [ state, dispatch ] = useReducer(reducer, initialState);

  const handleNumClick = (number) => {
    dispatch(applyNumber(number));
  }

  const handleOperator = (operator) => {
    dispatch(changeOperation(operator));
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={() => dispatch(addMemory())}/>
              <CalcButton value={"MR"} onClick={() => dispatch(applyMemory())}/>
              <CalcButton value={"MC"} onClick={() => dispatch(clearMemory())}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => handleNumClick(1)}/>
              <CalcButton value={2} onClick={() => handleNumClick(2)}/>
              <CalcButton value={3} onClick={() => handleNumClick(3)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => handleNumClick(4)}/>
              <CalcButton value={5} onClick={() => handleNumClick(5)}/>
              <CalcButton value={6} onClick={() => handleNumClick(6)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => handleNumClick(7)}/>
              <CalcButton value={8} onClick={() => handleNumClick(8)}/>
              <CalcButton value={9} onClick={() => handleNumClick(9)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => handleOperator("+")}/>
              <CalcButton value={"*"} onClick={() => handleOperator("*")}/>
              <CalcButton value={"-"} onClick={() => handleOperator("-")}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={() => dispatch(clearDisplay())}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
