import React, { Component } from 'react';
import Type from '../../store/Types';
import { connect } from "react-redux";
class Quiz1 extends Component {
    constructor() {
        super()
        this.state = {
            show: true,
            key: "",
            ques0: "",
            ques1: "",
            ques2: "",
            ques3: "",
            ques4: "",
            Quiz: [
                {
                    question: "React merges the object you provide into the current state using __________?",
                    correctAnswer: "setState()",
                    isMultiple: false,
                    allOptions: ["setState()", "State()", "set()"],
                },
                {
                    question: "React considers everything as _______.",
                    correctAnswer: "components",
                    isMultiple: false,
                    allOptions: ["User interface", "elements", "components", "Objects"],
                },
                {
                    question: "What is the smallest building block of ReactJS?",
                    correctAnswer: "elements",
                    isMultiple: false,
                    allOptions: ["none of the options", "props", "elements", "components"],
                },
                {
                    question: "If our elements are dynamic, react can keep track of the changes using keys.",
                    correctAnswer: "True",
                    isMultiple: false,
                    allOptions: ["True", "False"],
                },
                {
                    question: "In JSX most of the errors can be caught during _________.",
                    correctAnswer: "Compilation",
                    isMultiple: false,
                    allOptions: ["Interpretation", "Execution", "Compilation", "Build"],
                }]
        }
    }
    submitKey = () => {
        if(this.state.key === "123"){
            this.setState({show: false, key: ""})
        }
    }
    whenEmpty = () => {
        return this.state.key === '';
    }
    whenChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }
    whenSubmit = (event) => {
        const { ques0, ques1, ques2, ques3, ques4, Quiz } = this.state;
        const temArr = [ques0, ques1, ques2, ques3, ques4];
        const totalQuestions = 5;
        let score = 0;
        for (let index in temArr) {
            if (temArr[index] === Quiz[index].correctAnswer) {
                score++;
            }
        }
        const percentage = score / totalQuestions * 100;
        const success = percentage >= 60 ? (true) : (false)
        this.props.result(score, totalQuestions, percentage, success)
        this.setState({show: true})
    }
    render() {
        return (
            <div>
                <div className="container">
                    {this.state.show ? (<div>
                        <div>
                            <h3 className="teal-text">Welcome to React</h3> <br />
                            <div className="flow-text">
                              
                                    Quiz Title : React Quiz 1 <br />
                                    Passing Score : 60 <br />
                                    No. of Attempts Allowed : 1 <br />
                                
                            </div>
                        </div>
                        <div>
                            {this.props.quizgiven ? (<div>
                                {this.props.quizsuccess ? (<div>
                                    <br/>
                                    <br/>
                                    <div className="teal-text"><h5>CONGRATULATIONS!</h5></div>
                                    Out Of <b>{this.props.quiztq} </b> Answered <b>{this.props.quizs}</b> Correctly.
                    <br />
                                    Your Percentage: <b>{this.props.quizper}% </b></div>) : (
                                        <div>
                                            <div className="red-text"><h4>Failed!.</h4></div>
                                            <br />
                                            Out Of <b> {this.props.quiztq} </b> Answered <b>{this.props.quizs}</b> Correctly.
                <br />
                                            Your Percentage: <b>{this.props.quizper}% </b></div>
                                    )
                                }
                            </div>) : (<div className="row">
                                        <div className="col s6 l5">
                                        <br/>
                                        <br/>
                                        <input type="password" placeholder="Enter Key" name="key" onChange={this.whenChange}/>
                                        <span className="btn-small right teal" disabled={this.whenEmpty()} onClick={this.submitKey}>Continue</span>
                                        </div>
                            </div>)}
                        </div>
                    </div>) : (<div>
                        <div><h5>React Quiz 1</h5></div>
                        <ol>
                            {this.state.Quiz.map((v, i) => <li key={i}><h6 className="teal-text">{v.question}</h6>
                                {v.allOptions.map((vv, ii) => {
                                    return <p key={ii}>
                                        <label><input onChange={this.whenChange} value={vv} name={"ques" + i} type="radio" />
                                            <span>{vv}</span></label>
                                    </p>
                                })}
                                <br />
                            </li>
                            )}
                        </ol>
                        <button className="btn" onClick={this.whenSubmit}>Submit</button>
                    </div>
                        )}
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        quizgiven: state.quiz.reactQuiz1Given,
        quizs: state.quiz.reactquiz1[0],
        quiztq: state.quiz.reactquiz1[1],
        quizper: state.quiz.reactquiz1[2],
        quizsuccess: state.quiz.reactquiz1Success,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        result: (score, tq, per, success) => dispatch({ type: Type.REACTQ1, reactQ1S: score, reactQ1TQ: tq, reactQ1P: per, reactQ1SS: success })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Quiz1);