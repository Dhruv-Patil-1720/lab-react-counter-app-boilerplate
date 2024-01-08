//class components
import React,{Component} from "react";

export default class Class extends React.Component{

    constructor(){
        super()
        this.state= {count:0}
    }
handelClick=(val)=>{
    this.setState({count:this.state.count+val})

}
    render(){

    return(
        <>
        <h1>Counter</h1>
        <p>{this.state.count}</p>
        <button onClick={()=>{
            this.handelClick(1)
        }}>+</button>
        <button onClick={()=>{
            this.handelClick(-1)
        }}>-</button>
        <button onClick={()=>{
            this.handelClick(-this.state.count)
        }}>RESET</button>


        </>
    )
        
    
    }




}