import React,{Component} from "react"
class Welcome extends Component{
    render(){
        // console.log(props.name)
        return <h1>Welcome {this.props.name}</h1>
    }
}
export default Welcome;