import React, { useReducer } from 'react';
import reducer from '../reducers';
import { initialState } from '../reducers';
import './App.css';
import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';

import { 
  addOne, 
  applyNumber, 
  changeOperation, 
  clearDisplay, 
  memoryPlus 
} from '../actions';

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  const addOneHandler = () => {
    dispatch(addOne())
  }

  const applyNumberHandler = (num) => {
    dispatch(applyNumber(num))
  }

  const changeOperationHandler = (operation) => {
    dispatch(changeOperation(operation))
  }

  const clearDisplayHandler = () => {
    dispatch(clearDisplay())
  }

  const memoryPlusHandler = (num) => {
    dispatch(memoryPlus(num))
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
              <span id="operation"><b>Operation:</b>{state.operation}</span>
              <span id="memory"><b>Memory:</b>{state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={() => {memoryPlusHandler(state.total)}}/>
              <CalcButton value={"MR"}/>
              <CalcButton value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => {applyNumberHandler(1)}} />
              <CalcButton value={2} onClick={() => {applyNumberHandler(2)}} />
              <CalcButton value={3} onClick={() => {applyNumberHandler(3)}} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => {applyNumberHandler(4)}} />
              <CalcButton value={5} onClick={() => {applyNumberHandler(5)}} />
              <CalcButton value={6} onClick={() => {applyNumberHandler(6)}} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => {applyNumberHandler(7)}} />
              <CalcButton value={8} onClick={() => {applyNumberHandler(8)}} />
              <CalcButton value={9} onClick={() => {applyNumberHandler(9)}} />
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => {changeOperationHandler('+')}} />
              <CalcButton value={"*"} onClick={() => {changeOperationHandler('*')}} />
              <CalcButton value={"-"} onClick={() => {changeOperationHandler('-')}} />
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={() => {clearDisplayHandler()}}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
