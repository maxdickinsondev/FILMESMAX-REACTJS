export default function recomendation(state = [], action) {
    switch (action.type) {
        case '@recommendation':
            return action.movie;
        default:
            return state;
    }
}