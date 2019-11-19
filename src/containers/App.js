import React from 'react';
import CardList from '../components/Cardlist';
import Scroll from '../components/Scroll';
import Searchbox from '../components/Searchbox.js';
import ErrorBoundary from '../components/ErrorBoundary.js';



class App extends React.Component {
    constructor(){
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=>response.json())
        .then(users=> this.setState({robots: users}));        
    }
    
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})  
    }

    render(){
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        });
        if(this.state.robots.length === 0){ //loading screen if it takes a while to grab the data
            return <h1>Loading</h1>
        }
        else{
            return(
                <div className="tc">
                    <h1>RoboFriends</h1>
                    <Searchbox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundary>
                    </Scroll>
                </div>
            )
        }
    }
    
}

export default App;