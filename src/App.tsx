import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { increment } from 'features/counter'
import { selectCount } from 'selectors/counter'
import logo from './logo.svg';
import './App.css';


function App() {
  const dispatch = useDispatch()
  const count = useSelector(selectCount)

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(increment())
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>
          Page has been open for <code>{count}</code> seconds.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
