export const inititalState = {
    count: 0,
    bool: false,
    text: "salom"
}

export const reducer = (state, action) => {
    switch (action.type) {
        case "INC":
            return { ...state, count: state.count + action.payload }
        case "DEC":
            return { ...state, count: state.count - 1 }
        case "TOGGLE":
            return { ...state, bool: !state.bool }
        default:
            return state
    }
}