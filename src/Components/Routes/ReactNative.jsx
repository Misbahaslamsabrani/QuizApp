import React from 'react';
import {Link} from "react-router-dom"
const MyReactNative = () => {
    return (
        <div>
        <br />
        <br />
            <div className="row">
                <div className="col s6 l6 offset-l3">
                    <div className="card teal lighten-4">
                        <div className="card-content">
                            <div className="card-title">
                            <h3 className="teal-text darken-2">React Native</h3>
        </div>
                            <ul>
                                <Link to="/Quiz1"><li className="black-text">Quiz 1</li></Link>
                                <Link to="/Quiz2"><li className="black-text">Quiz 2</li></Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyReactNative;