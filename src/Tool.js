import { Component } from "react";
import "./toolStyle.css"
class Tool extends Component{
render(){
    const {showToolTip,position} = this.props.state;
    const {handleShowTooltip} = this.props;
    return(
        <>
        <div>
        <div className="toolbtn" >
            <div className="btn-info"> Hover Over Me!!</div>
        </div>

        {showToolTip?<div className="Tooltip">I'm The Tooltip!!</div>:null}
        </div>
        </>
    );
}
}
export default Tool;