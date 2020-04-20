export default function actor(state = [], action) {
    switch (action.type) {
        case '@actor':
            return action.movie;
        default:
            return state;
    }
}