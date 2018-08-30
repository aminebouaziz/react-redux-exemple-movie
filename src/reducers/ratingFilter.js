
//action-exemple :{type:'SET_RATING_FILTER',rating:5}
//state-exemple : 5
const ratingFilter =(state=0,action) =>{
    if(action.type==='SET_RATING_FILTER'){
        
       return  action.rating
    }
    return state
}
export default ratingFilter