import React, {Component} from 'react'
import InputField from "./inputField";

export default class AddPassword extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            login: "",
            password: ""
        }

        this.addNewPassword = this.addNewPassword.bind(this)
    }

    addNewPassword(event) {
        {/* ADD NEW PASSWORD TO THE SERVER */}
    }

    render() {
        return (
            <div className="add_password_popup">

                <form className="input_form">
                    <h1>Add new password</h1>

                    <InputField name="title" type="text" placeholder="Title" onChange={e => {
                        this.setState({email: e.target.value})
                    }}/>

                    <InputField name="login" type="text" placeholder="Login" onChange={e => {
                        this.setState({email: e.target.value})
                    }}/>

                    <InputField name="Password" type="password" placeholder="Password" onChange={e => {
                        this.setState({password: e.target.value})
                    }}/>
                    <div className="btn">
                        <button onClick={this.addNewPassword}>Add</button>
                    </div>
                    <div className="close_button">
                        <button onClick={this.props.onClose}><i className="fas fa-times-circle"/></button>
                    </div>
                </form>

            </div>)
    }
}