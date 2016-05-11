import React from "react"
import TextField from "material-ui/TextField"
import RaisedButton from "material-ui/RaisedButton"
import Divider from "material-ui/Divider"
import Paper from 'material-ui/Paper';
import RadioButton from "material-ui/RadioButton"
import Badge from "material-ui/Badge"
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';

const bettingStyle = {
  color: "red",
  align: "center"
}

const textFieldStyle = {

  margin: 12,
  fontSize: 16
  // display:"block",
}

const flexStyle = {
  display: 'flex'

}

const buttonStyle = {
  margin: 12,
  display: "block"
}

const divFlex = {
  justifyContent: "space-between"
}

class Betting extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      num: "Loading",
      numType: "Loading"
    }
  };

  handleClick() {

    let print = '';
    const count_nine = 5;
    let stack = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ];
    while (print.length < count_nine) {
      //console.log(stack.splice(parseInt(Math.random() * stack.length), 1)[0]);
      let num = stack.splice(parseInt(Math.random() * stack.length), 1)[0].toString();
      print += num;
    }

    //let randomType = Math.floor((Math.random() * 10) + 1);
    // this.setState({
    //   num:print,
    //   numType: (randomType % 2)
    //     ? "前三"
    //     : "后三"
    // })
    this.setState({num: print, numType: "后一"});
  }

  render() {
    return (
      <div style={bettingStyle}>
        <Paper>
          <TextField id="betting" value={this.state.num} style ={textFieldStyle} underlineShow={false}/>
          <Divider/>
          <TextField id="type" value={this.state.numType} style ={textFieldStyle} underlineShow={false}/>
          <Divider/>
        </Paper>

        <RaisedButton label="生成" onTouchTap={this.handleClick} primary={true} style ={buttonStyle}/>

        <div>
          <Badge badgeContent={"稳定"} primary={true} badgeStyle={{
            top: 12,
            right: 12
          }}>
            <IconButton tooltip="稳定">
              <NotificationsIcon/>
            </IconButton>
          </Badge>
          <Badge badgeContent={"凌晨"} secondary={true} badgeStyle={{
            top: 12,
            right: 12
          }}>
            <IconButton tooltip="凌晨">
              <NotificationsIcon/>
            </IconButton>
          </Badge>
          <Badge badgeContent={"贪婪"} primary={true} badgeStyle={{
            top: 12,
            right: 12
          }}>
            <IconButton tooltip="贪婪">
              <NotificationsIcon/>
            </IconButton>
          </Badge>
          <Badge badgeContent={"重登"} secondary={true} badgeStyle={{
            top: 12,
            right: 12
          }}>
            <IconButton tooltip="重登">
              <NotificationsIcon/>
            </IconButton>
          </Badge>
        </div>
      </div>
    )
  }

}

export default Betting
