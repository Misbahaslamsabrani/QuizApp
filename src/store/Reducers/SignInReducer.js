import Type from "../Types"
const initialState = {
    name: false,
    pass: false,
    email: false,
    errorMess: "",
    isUser: false,
    userName: ""
}
const SignInReducer = (state = initialState, action) => {
    switch (action.type) {
        case Type.Error:
            return {
                ...state,
                name: false,
                pass: false,
                email: false,
                errorMess: "",
                isUser: false,
                userName: ""
            }
        case Type.SN:
            return {
                ...state,
                name: true,
                email: false,
                pass: false,
                errorMess: action.errorMess,
                userName: "",
                isUser: false,
            }
        case Type.SE:
            return {
                ...state,
                name: false,
                email: true,
                pass: false,
                errorMess: action.errorMess,
                userName: "",
                isUser: false,
            }
        case Type.SP:
            return {
                ...state,
                name: false,
                email: false,
                pass: true,
                errorMess: action.errorMess,
                userName: "",
                isUser: false,
            }
        case Type.SS:
            return {
                ...state,
                name: false,
                email: false,
                pass: false,
                errorMess: '',
                userName: action.UserName,
                isUser: true,
            }
        default:
            return state;
    }

}
export default SignInReducer;