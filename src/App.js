import React from 'react';
import Game from "./game"
import { withCookies } from "react-cookie"
import './assets/css/App.css';

function App(props) {
  return (
    <div className="App">
      <Game cookies={props.cookies} />
    </div>
  );
}


export default withCookies(App)


