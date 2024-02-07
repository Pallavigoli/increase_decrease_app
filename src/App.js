import React from "react"
import './App.css'
class App extends React.Component {
  render(){ 
    console.log("this is rendering") 
     return (
      <div>
     <h1 className="head">Counter:{this.state.count}</h1>
     <br/>
     <br/>
    <button id="inc" className="b" onClick={()=>this.increase()}>Increase</button>
    <button id="dec" className="b" onClick={()=>this.decrease()}>Decrease</button>
    </div>
  );}
  constructor()
  {
    super()
    this.state={
      count : 0
    }
  }
  increase(){
    if(this.state.count<10)
      this.setState( { count : this.state.count + 1 } )
    }
  decrease(){ 
    if(this.state.count>0)
      this.setState({count:this.state.count -1})
    }
  componentDidMount()
  {
    console.log("this is mount")
    }
    componentDidUpdate()
    {
      console.log("this is lalaal update")
    }
    componentWillUnmount()
    {
      console.log("this is unmouny")
    }
  }

export default App;
