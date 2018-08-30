import React from 'react'
import  './MovieApp.css'
import {connect} from 'react-redux'

const NameFilter= ({value,onChange=()=>{}})=>(
    <div className="name-filter">
        <input
         className="name-filter-text" 
         type="text" 
         value={value}
         onChange={(e)=>{
             onChange(e.target.value)
         }} />
      </div>

)

const mapStateToProps=state=>{
    return{
        values: state.titleFilter
    }
}
const mapDispatchToProps= dispatch =>{
    return{
        onChange:(newNameFilter)=>{
            dispatch({
                type:'SET_TITLE_FILTER',
                title: newNameFilter
            })
        }
    }
}

const NameFilterContainer = 
connect(mapStateToProps,mapDispatchToProps)(NameFilter)
export default NameFilterContainer