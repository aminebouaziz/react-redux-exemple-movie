import {createStore,combineReducers} from 'redux'
import moviesReducer from './reducers/movies'   
import ratingFilterReducer from './reducers/ratingFilter'   
import titleFilterReducer from './reducers/titleFilter'   



const store =createStore(combineReducers({
        movies  :moviesReducer,
        minRatingFilter:ratingFilterReducer,
        titleFilter:titleFilterReducer
    }))



    /**   testinnng */
    console.log(store.getState())


 


    const inception ={
        id:'inception',
        title: 'Inception',
        rating: 5,
        image: 'https://www.warnerbros.com/sites/default/files/styles/key_art_270x400/public/inception_keyart.jpg?itok=7jXiglyb',
        year:2010
    }
    const kingkong ={
        id:'kingkong',
        title: 'KingKong',
        rating: 4,
       year :2006
    }
    const titanic ={
        id:'titanic',
        title: 'Titanic',
        rating: 2,
       year :1992
    }
    store.dispatch({
        type:'ADD_MOVIE',
        movie:inception
    })
    store.dispatch({
        type:'ADD_MOVIE',
        movie:kingkong
    })
    store.dispatch({
        type:'ADD_MOVIE',
        movie:titanic
    })
    store.dispatch({
        type:'ADD_MOVIE',
        movie:{
            id:'0000',
            title:'blabla',
            rating:'2',
            year:1990
        }
    })

    store.dispatch({
        type:'SET_RATING_FILTER',
        rating:0
    })




    export default store