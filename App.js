import React from 'react';
import './New.css';
import Resultant from './Result';
import Buttons from './Buttons';

export default class App extends React.Component {
  constructor(){
    super();
    this.state={
      result:"",
    }
  } 

  onClick = button => {

    if(button ==="="){
        this.calculate()
    }

    else if(button =="C"){
        this.reset()
    }
    else if(button == "CE"){
        this.backspace()
    }

    else {
        this.setState({
            result: this.state.result + button
        })
    } 
};
 backspace(){
   this.setState({
     result: this.state.result.slice(0,-1)
   })
 };
  
  reset(){
    this.setState({
        result:""
    })
};
  
  calculate(){
    var checkResult = ''
    if(this.state.result.includes('--')){
        checkResult = this.state.result.replace('--','+')
    }

    else {
        checkResult = this.state.result
    }

    try {
        this.setState({
            result: (eval(checkResult) || "" ) + ""
        })
    } catch (e) {
        this.setState({
            result: "error"
        })

    }
  };

  render() {
    return (
     <div><h1>Simple Calculator</h1>
   
     <div><Resultant result={this.state.result}/></div>
     <div><Buttons onClick={this.onClick}/></div>
               
     </div>
  
      
    );
  }
}
