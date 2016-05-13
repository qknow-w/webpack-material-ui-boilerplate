
import '../css/main.css';


import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
//import Main from './Main'; // Our custom react component
import Home from './Home'
import {addLocaleData, IntlProvider} from 'react-intl';

import en from 'react-intl/locale-data/en';
import fr from 'react-intl/locale-data/fr';
import es from 'react-intl/locale-data/es';
import zh from 'react-intl/locale-data/zh';
//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

addLocaleData([...en, ...fr, ...es,...zh]);

// addLocaleData({
//     locale: 'en-UPPER',
//     parentLocale: 'zh',
//     name: "test"
// });

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
// ReactDOM.render(<Main />, document.getElementById('app'));





ReactDOM.render(
  <IntlProvider locale="en" messages={{"test1": "中文", "test2": "外国"}} >
        <Home importantDate={new Date(1459913574887)}  />
    </IntlProvider>, document.getElementById('app'));
