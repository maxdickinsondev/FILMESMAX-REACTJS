export default function title(state = '', action) {
    console.log('chegou o dispatch do searchTitle');
    
    switch(action.type) {
        case '@title_movie':
            return action.title;
        default:
            return state;
    }
}