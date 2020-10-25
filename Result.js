import React, {Component} from 'react';

class Resultant extends React.Component{
   
render(){
    var {result}=this.props;
    return(
<div className="result">
    <h3>{result}</h3>
</div>
    );
}
}

export default Resultant;