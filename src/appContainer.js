import React from 'react';
import {Loader,Grid} from 'semantic-ui-react';
import Header from './components/header'
 
import './App.css'

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
          <Grid  >

            <Grid.Row>
              <Header/>
            </Grid.Row>
{/*         
            <Grid.Row>
              <Grid.Column width={5} style={{ height : '90vh'}}>
              </Grid.Column> 
              <Grid.Column width={11}>
              </Grid.Column>
            </Grid.Row> */}

          </Grid>
        );
    }
 
  }

}

export default AppContainer