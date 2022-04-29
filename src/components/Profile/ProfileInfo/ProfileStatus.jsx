import React from "react";
import s from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {
    state ={
        editMode: false,
        status: this.props.status
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
         this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })       
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
        console.log("componentDidUpdate")
    }

    render() {
        return (
            <div>
                {!this.state.editMode && 
                    <div>
                        <span onDoubleClick={ this.activateEditVode}>{this.props.status || "-----" }</span>
                    </div>
                }
                {this.state.editMode &&  
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditVode} value={this.state.status} />
                    </div>
                }
            </div>               
          );
    }
};

export default ProfileStatus;
