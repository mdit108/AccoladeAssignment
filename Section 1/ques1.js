import React, { Component } from 'react'; 

//Implementation of Stateful Component

class Counter extends Component { 
   constructor(props) { 
     super(props); 
     this.state = { count: 0 }; 
   } 
   handleClick = () => { 
        this.setState({ count: this.state.count + 1 }); 
   } 
   render() { 
      return ( <div> <p>You clicked {this.state.count} times</p>            
      <button onClick={this.handleClick}>Click me</button> </div> );       
   } 
}

//Implementation of Stateless Component

function Greeting(props) { 
    return <h1>Hello, {props.name}!</h1>; 
}

