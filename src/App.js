

import React from 'react';


class App extends React.Component{
  constructor(){
    super();
    this.state={
      count:0
    }
    this.changeCount=this.changeCount.bind(this)
  }
  changeCount(){
    let newCount=this.state.count+1
    this.setState({count:newCount})
  }
    
  render(){
    return(
    <div>
      <span>{this.state.count}</span>
          <button onClick={this.changeCount}>
            count
          </button>
    </div>
  );}
  
    
  
}



export default App;


