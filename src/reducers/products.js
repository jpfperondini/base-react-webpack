export default (state, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text
                }
            ]
        default:
            return []
    }
}