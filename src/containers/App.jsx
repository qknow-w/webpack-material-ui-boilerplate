import React from "react"
import {Link} from "react-router"
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {deepOrange500} from 'material-ui/styles/colors';
import RaisedButton from "material-ui/FlatButton"

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500
  }
});

const App = ({children}) => {

  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <div>
        <header>
          
          <Link to="/">
            <RaisedButton  label="首页" primary={true} />
          </Link>
          <Link to="/betting">
            <RaisedButton label="投注" primary={true}/>
          </Link>
          <Link to="/history">
            <RaisedButton label="历史" primary={true}/>
          </Link>
        </header>

        <div>
          {children}
        </div>

      </div>
    </MuiThemeProvider>
  )
}

export default App
