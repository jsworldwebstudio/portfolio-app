import React from "react";
import ReactDOM from "react-dom";
import App from './Components/App';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
//import * as colors from '@material-ui/core/colors';
import { orange, red, white } from '@material-ui/core/colors'

import "./styles.css";

const rootElement = document.getElementById("root");
const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: red,
    secondary: white
  }
})

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>, rootElement);
