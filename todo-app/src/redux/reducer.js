

const initialState = []

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'action/Add': {
            return [
                ...state,
                {
                    id: action.payload.id,
                    text: action.payload.text
                }
            ]
        }

        case 'action/Delete': {
            return state.filter(todo => todo.id !== action.payload)
        }

        case 'action/Edit': {
            return state
        }

        case 'action/Save': {
            return state
        }
        default:
            return state
    }
}