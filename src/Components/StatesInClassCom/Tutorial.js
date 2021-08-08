 import React from 'react';
 
 
 export default class Tutorial extends React.Component
{

    
    constructor()
    {
        super();
        this.state={
            data:"Class Shofiya",
            age:18
            
        }
    }

    clicked()
    {
        this.setState({data:"Shinchan",age:7},()=>console.log(this.state.data));
        
    }
    render(){
       
        return(
            <div>
                <h1>States in Class Component</h1>
                <p>Name: {this.state.data} Age:{this.state.age}</p>
                <button onClick={()=>this.clicked()}>Click Me</button>
            </div>
        )
    }
   
}