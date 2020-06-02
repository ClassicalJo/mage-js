import React from 'react';
import Game from "./game";
import ViewBox from "./assets/svg/ViewBox"
import { withCookies } from "react-cookie"
import './assets/css/App.css';

function App(props) {
  return (
    <div className="App">
      <ViewBox>
        <Game cookies={props.cookies} />
      </ViewBox>
    </div>
  );
}


export default withCookies(App)


