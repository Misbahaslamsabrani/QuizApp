import Type from "../Types";

const initState = {
    reactQuiz1Given: false,
    reactQuiz2Given: false,
    reactquiz1:[],
    reactquiz2: [],
    reactquiz1Success: null,
    reactquiz2Success: null
}
const QuizReducer = (state = initState, action) => {
    switch(action.type){
        case Type.REACTQ1:
        return {
            ...state,
            reactQuiz1Given: true,
            reactquiz1: [action.reactQ1S, action.reactQ1TQ, action.reactQ1P],
            reactquiz1Success: action.reactQ1SS,
        }
        default: 
        return state;
    }
}
export default QuizReducer;