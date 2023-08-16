import React ,{Component}from "react"
class Message extends Component{
    constructor(){
        super()
        this.state={
            message:"Welcome visitor"
        }
    }
    changeMessage(){
        this.setState({
            message:"thankyou for subscribing"
        })
    }
render(){
    return(
        <>
        <h1>{this.state.message}</h1>
        <button onClick={()=>this.changeMessage()}>subscribe</button>
        </>
    )
}
}
export default Message