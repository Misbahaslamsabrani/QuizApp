import React, { Component } from 'react';
import Input from '../UIComponents/Input';
import Button from '../UIComponents/Button';
class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {};
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
                                <form onSubmit={() => { }}>
                                    <Input v="" oc={() => { }} n="" l="Email" t="text" id="email" id="email" />
                                    <Input v="" oc={() => { }} n="" l="Password" t="password" id="pass" f="pass" />
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

export default SignIn;