import { 
    ADD_ONE, 
    APPLY_NUMBER, 
    CHANGE_OPERATION, 
    CLEAR_DISPLAY,
    MEMORY_STORE,
    MEMORY_ADD,
    MEMORY_CLEAR
} from './../actions';

export const initialState = {
    total: 0,
    operation: "+",
    memory: 0
}

const calculateResult = (num1, num2, operation) => {
    switch(operation) {
        case("+"):
            return num1 + num2;
        case("*"):
            return num1 * num2;
        case("-"):
            return num1 - num2;
    }
}

const reducer = (state, action) => {
    switch(action.type) {
        case(ADD_ONE):
            return({
                ...state,
                total: state.total + 1
            });

        case(APPLY_NUMBER):
            return ({ 
                ...state, 
                total: calculateResult(state.total, action.payload, state.operation)
            });
        
        case(CHANGE_OPERATION):
            return ({
                ...state,
                operation: action.payload
            });

        case(CLEAR_DISPLAY):
            return ({
                ...state,
                total: initialState.total
            })

        case(MEMORY_STORE):
            return ({
                ...state,
                memory: state.memory = state.total
            })

        case(MEMORY_ADD):
            return ({
                ...state,
                total: calculateResult(state.total, action.payload, state.operation)
            })
        
        case(MEMORY_CLEAR):
            return ({
                ...state,
                memory: initialState.memory
            })
            
        default:
            return state;
    }
}

export default reducer;