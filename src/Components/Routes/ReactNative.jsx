import React from 'react';
import {Link} from "react-router-dom"
const MyReactNative = () => {
    return (
        <div className="container">
        <br />
        <br />
            <div className="row">
                <div className="col s6 l6 offset-l3">
                    <div className="card">
                        <div className="card-content">
                            <div className="card-title">
                                <h4>React Native</h4>
        </div>
                            <ul>
                                <Link to="Quiz1"><li>Quiz 1</li></Link>
                                <Link to="Quiz2"><li>Quiz 2</li></Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyReactNative;