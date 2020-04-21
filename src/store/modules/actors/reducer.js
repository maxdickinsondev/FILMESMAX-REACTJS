export default function actor(state = [], action) {
    console.log('disparou');
    console.log(action.movie);

    switch (action.type) {
        case '@actor':
            return action.movie;
        default:
            return state;
    }
}