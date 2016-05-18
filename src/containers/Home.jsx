import React from "react"
import {connect} from 'react-redux'
import RadioButton from "material-ui/RadioButton"
import {add} from "../actions/index"

const Home = ({getCounter,onTodoClick}) => (

  <div>
    {getCounter}
    <button onClick= {onTodoClick}>++</button>
  </div>
)

const mapStateToProps = (state) => {
  console.log("mapStateToProps",state.counter);
  return {
    getCounter:  state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick : ()=>{
      dispatch(add());
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
