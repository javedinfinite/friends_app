import React from 'react'
import {  Grid, Table, Item, Divider, Label, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';

 

var randomImages = [
    require('../images/image1.jpg'),
    require('../images/image2.jpg'),
    require('../images/image3.jpg'),
    require('../images/image4.jpg'),
    require('../images/image5.jpg'),
    require('../images/image6.jpg')
  ];

class EmployeeInDetail extends React.Component {

    render () {
        const data = this.props.selectedEmployee;
        return (
            <Grid celled='internally'>
                <Grid.Row>
                    <Item.Group>
                        <Item>
                            <Item.Image size='medium' src={randomImages[0]} circular/>
                            <Item.Content>
                                <Item.Header as='a'>Employee Name : {data.first_name} {data.last_name}</Item.Header>
                                <Item.Meta>Description</Item.Meta>
                                <Item.Description>
                                  A proud Datagrokrian who Loves Coding, Coding is FUN. 
                                  A Datagrokrian who has a solid work ethic and is self-sufficient. 
                                  He/She will not keep asking you for things to do. He/She take
                                   the initiative to find out what needs to be done and then do it.
                                   He/She is a programmer who is ridiculously hungry for knowledge.
                                   He/She  will always tell you about something new or interesting.
                                   He/She tend to read a ton (whether online or offline) and  tend to love to try things out
                                    and learn from experiences as well. He/She  is not afraid of trying out new languages
                                     or new platforms.
                                </Item.Description>
                                <Item.Extra>Additional Details
                                    <Grid.Row>
                                        <Grid.Column>
                                            <Header as='h3'>
                                                Employee Id : <Label>{data.id}</Label>
                                                Email Id :  <Label>{data.email}</Label>
                                            </Header>
                                            <Header as='h3'>
                                                Gender :  <Label>{data.gender}</Label>
                                                Date of Joining :  <Label>10 Dec 2018</Label>
                                            </Header>
                                        </Grid.Column>
                                        
                                    </Grid.Row>
                                </Item.Extra>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Grid.Row>
               <Divider/>
                <Grid.Row>
                <Table size='small'>
                        <Table.Header  >
                            <Table.Row>
                                <Table.HeaderCell>Team Name</Table.HeaderCell>
                                <Table.HeaderCell>System IP</Table.HeaderCell>
                                <Table.HeaderCell>Employee Role</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>Data Scraping</Table.Cell>
                                <Table.Cell>{data.ip_address}</Table.Cell>
                                <Table.Cell>Developer</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                     <Table size='small'>
                        <Table.Header  >
                            <Table.Row>
                                <Table.HeaderCell>Reporting Manager</Table.HeaderCell>
                                <Table.HeaderCell>Bank Details</Table.HeaderCell>
                                <Table.HeaderCell>Address</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>Deepak Sah</Table.Cell>
                                <Table.Cell>Kotak Bank, Salaray Acc. No. : {data.ip_address}</Table.Cell>
                                <Table.Cell>Universe, Earth, India, Bengaluru</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
 
                </Grid.Row>
                <Divider/>
                <Grid.Row>
                    <Grid.Column  >
                    <a class="ui red tag label">Disclaimer : Data shown of employees are not 100% correct,
                                    Most of the data are dummy. We are working on it....till then... Happy Coding!!!
                    </a>
                    </Grid.Column>
                </Grid.Row>
        </Grid>
        )
    }
}
const mapStateToProps = (state, props) => {
    return {
      employeeList: state.employeeReducer.employeeList,
      error:  state.employeeReducer.error,
      isLoading: state.employeeReducer.isLoading,
      selectedEmployee: state.employeeReducer.selectedEmployee
    };
  };
  
  export default connect(mapStateToProps)(EmployeeInDetail);
 