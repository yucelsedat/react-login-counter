
const reducer = (state, action) => {
    
    switch ( action.type) {
        case ('COUNT'): 
            return {
                ...state,
                count: action.value
            }
        
        default:
            break;
    }
}

export default reducer