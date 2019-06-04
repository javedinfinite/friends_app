import React from 'react';
import {Loader,Grid} from 'semantic-ui-react';
import Header from './components/Header'
import Home from './components/Home'
import FriendsChat from './components/FriendsChat'
import ApjAcademy from './components/ApjAcademy'
import MyArticles from './components/MyArticles'
import HeapOverflow from './components/HeapOverflow'
import AgeCal from './components/AgeCal'
import TimeCal from './components/TimeCal'
import Notes from './components/Notes'

import About from './components/About'
import { Link, Switch, Route, BrowserRouter as Router } from 'react-router-dom';
 

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
            <Header/>
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

{/* <Grid >
              <Grid.Row>
                <Header/>
              </Grid.Row>
          
              <Grid.Row>
                <Grid.Column width={5} style={{ height : '80vh'}} color={"blue"}>
                </Grid.Column> 
                <Grid.Column width={11}>
                </Grid.Column>
              </Grid.Row> 
            </Grid> */}