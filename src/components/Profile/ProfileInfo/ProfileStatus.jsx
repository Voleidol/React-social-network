import React from "react";
import s from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {

    state ={
        editMode: false
    }

    activateEditVode = () => {  
        
        console.log("this:", this) 
        this.setState({
            editMode: true
        });  
    }

    deactivateEditVode = () => {   
        this.setState({
            editMode: false
        });  
    }

    render() {
        return (
            <div>
                {!this.state.editMode && 
                    <div>
                        <span onDoubleClick={ this.activateEditVode}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&  
                    <div>
                        <input autoFocus={true} onBlur={this.deactivateEditVode.bind(this)} value={this.props.status} />
                    </div>
                }
            </div>               
          );
    }
};

export default ProfileStatus;
