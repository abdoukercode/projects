import * as types from "../constants/ActionTypes";

export default function mapDispatchToProps(dispatch) {
    return {
        Increment: () => {
            const action = {type : types.ADD_ONE};
            dispatch(action)
        },

        Decrement: () => {
            const action = {type : types.SUBTRACT_ONE};
            dispatch(action)
        },

        doubleValue: () => {
          
            const action = {type : types.DOUBLE_VALUE};
            dispatch(action)
        }
    }
}
