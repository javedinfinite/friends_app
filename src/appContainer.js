import React from 'react';
import {Loader, Responsive} from 'semantic-ui-react';
import Header from './components/header'
import MobileHeader from './components/header_for_mobile'
import Home from './components/Home'
import FriendsChat from './components/FriendsChat'
import ApjAcademy from './components/ApjAcademy'
import MyArticles from './components/MyArticles'
import HeapOverflow from './components/HeapOverflow'
import AgeCal from './components/AgeCal'
import TimeCal from './components/TimeCal'
import Notes from './components/Notes'

import About from './components/About'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
 

class AppContainer extends React.Component {
  
 
  render() {

    const { error, isLoading} = this.props;

    if (error) {
        return <div> Error: {error} </div>;
    } else if (isLoading) {
        return <Loader size="large" indeterminate active />
      }
    else {
      return (
        <Router>
          <div>
            <Responsive {...Responsive.onlyMobile}>
               <MobileHeader />
            </Responsive>
            <Responsive minWidth={Responsive.onlyTablet.minWidth}>
              <Header/>
             </Responsive>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/friends_chat" component={FriendsChat} />
              <Route path="/apj_academy" component={ApjAcademy} />
              <Route path="/my_articles" component={MyArticles} />
              <Route path="/heap_overflow" component={HeapOverflow} />
              <Route path="/age_cal" component={AgeCal} />
              <Route path="/time_cal" component={TimeCal} />
              <Route path="/notes" component={Notes} />
              <Route path="/about" component={About} />
              <Route path="/logout" component={Home} />
            </Switch>
          </div>
        </Router>
        );
    }
 
  }

}

export default AppContainer