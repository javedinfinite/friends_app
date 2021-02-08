import React from 'react';
import {DebounceInput} from 'react-debounce-input';

class YoutubeSearchBar extends React.PureComponent {//pureComponent is used to do render only when attributes/states are changed of this component
                                            //Otherwise it does not changes when parent of this component is changing 

  constructor(props){
    super(props);
    //Initialy(when search_bar component is rendered) term variable is receiving an object of properties of searchbar component used 
    //initialising the variable 'term'(which is a property of search_bar component used) with initial value,
    // correct way of getting value from place where this component is used. If term property not found in the props object received
    //then term variable will be initialised with 'POGO'
    let { term = ''} = this.props;// Here term variable 
    this.state =  {basic : term};
    // console.log(this.props);
  }
  onInputChange = (event) => {//arrow function does automatic binding the function with input, so I don't need to bind it seperately in the class SearchBar
    this.setState({basic: event.target.value});
    //Whenever input value changes the function onSearchTermChange(defined as props of search_bar component) is getting called with the input value
    this.props.onSearchTermChange(event.target.value);
  }
  render() {
    // console.log(this.state);
    return (
      <div className="search-bar">
      <DebounceInput   className="search-bar-input" debounceTimeout={1000}
        placeholder="Search Youtube , Use Carefully as content may wash your brain (JD Advice)"
        value={this.state.basic}
        // onChange={this.onInputChange}
      />
      </div>
    );
  }
}
export default YoutubeSearchBar;
