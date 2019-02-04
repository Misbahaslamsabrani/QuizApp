import React, { Component } from 'react';
import Input from '../UIComponents/Input';
import Button from '../UIComponents/Button';
import { connect } from "react-redux";
import Type from "../store/Types";

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            pass: ""
        };
    }
    whenChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
        this.props.error();
    }
    whenSubmit = (event) => {
        event.preventDefault();
        const { name, email, pass } = this.state;
        if (!name) {
            this.props.SN("Please enter your name!")
        }
        else if (!email) {
            this.props.SE("Please enter valid email address!")
        }
        else if (!pass) {
            this.props.SP("Please enter password!")
        }
        else if (email !== "user@gmail.com") {
            this.props.SE("Please enter your valid email address!")
        }
        else if (pass !== "user12") {
            this.props.SP("Wrong password!")
        }
        else {
            this.props.SS(name);
        }
    }
    render() {
        return (
            <div className="container">
                <nav className="teal">
                    <div className="brand-logo center black-text">Quiz App</div>
                </nav>
                <br /><br />
                <div className="row">
                    <div className="col s6 l6 offset-l3">
                        <div className="card teal lighten-5">
                            <div className="card-content">
                                <div className="card-title">
                                    SignIn
                                </div>
                                <form onSubmit={this.whenSubmit}>
                                    <Input v={this.state.name} oc={this.whenChange} n="name" l="Name" t="text" id="name" f="name" />
                                    {this.props.name ? (<div className="red-text">{this.props.errorMess}</div>) : (null)}
                                    <Input v={this.state.email} oc={this.whenChange} n="email" l="Email" t="text" id="email" f="email" />
                                    {this.props.email ? (<div className="red-text">{this.props.errorMess}</div>) : (null)}
                                    <Input v={this.state.pass} oc={this.whenChange} n="pass" l="Password" t="password" id="pass" f="pass" />
                                    {this.props.pass ? (<div className="red-text">{this.props.errorMess}</div>) : (null)}
                                    <Button text="SignIn" oc={() => { }} />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        name: state.signIn.name,
        email: state.signIn.email,
        pass: state.signIn.pass,
        errorMess: state.signIn.errorMess,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        SN: (mess) => dispatch({type: Type.SN, errorMess: mess}),
        SE: (mess) => dispatch({type: Type.SE, errorMess: mess}),
        SP: (mess) => dispatch({type: Type.SP, errorMess: mess}),
        SS: (name) => dispatch({type: Type.SS, UserName: name}),
        error: () => dispatch({type: Type.Error})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);