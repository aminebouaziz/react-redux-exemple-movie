
//state_exemple state=[{id:'0000',title:'blabla',rating:'2',year:1990}]
//action_exemple : {type:'ADD_MOVIE',movie:{id:'0000',title:'blabla',rating:'2',year:1990}}
//action_exemple : {type:'EDIT_MOVIE', id:12, movie:{id:'0000', title:'blabla',rating:'2',year:1990}}
//action_exemple : {type:'DELETE_MOVIE',id:12}
const movies=(state=[],action)=>{
    if(action.type === 'ADD_MOVIE'){

        return state.concat(action.movie)   
     }
     if(action.type === 'EDIT_MOVIE'){
        return state.map( m =>{
            if(m.id === action.id){
                return action.movie
            }
            return m 
        })
     }
     if(action.type === 'DELET_MOVIE'){
         return state.filter(m=>{
             if((m.id)===action.id){
                 return false
             }
             return true
         })
     }
     return state // 9dima

}
export default movies