import React, {Component} from 'react';
import {intlShape, injectIntl, defineMessages, FormattedDate,FormattedMessage,MessageDescriptor} from 'react-intl';








// class Home  extends Component {
//   // render() {
//   //     const {formatMessage} = this.props.intl;
//   //
//   //     return (
//   //         <menu>
//   //             <li>
//   //                 <a
//   //                     href="/?locale=en-US"
//   //                     title={formatMessage(messages.enUSDescription)}
//   //                 >
//   //                     en-US
//   //                 </a>
//   //             </li>
//   //
//   //             <li>
//   //                 <a
//   //                     href="/?locale=en-UPPER"
//   //                     title={formatMessage(messages.enUPPERDescription)}
//   //                 >
//   //                     en-UPPER
//   //                 </a>
//   //             </li>
//   //         </menu>
//   //     );
//   // }
//
//
//   render(){
//     return
//   }
// }

const messages = defineMessages({
    greeting: {
        id: 'app.greeting',
        defaultMessage: 'Hello, {name}!',
        description: 'Greeting to welcome the user to the app',
    },
});


class Home extends Component {
  constructor(props){
      super(props);
  }


  render(){
    return (
      <div>
          <FormattedDate value={this.props.importantDate} year='numeric' month='long' day='numeric' weekday='long'/>
          <FormattedMessage id="test2"/>
      </div>
    )
  }
}

export default injectIntl(Home)
