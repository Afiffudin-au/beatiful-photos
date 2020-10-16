import React,{useState, useEffect} from 'react'
import './Banner.css'
import SearchIcon from '@material-ui/icons/Search';
import { IconButton } from '@material-ui/core';
import { useStateValue } from '../stateProvider/StateProvider';
function Banner() {
  const [{paramsUrl},dispatch]=  useStateValue()
  const [query,setQuery] = useState('')
  useEffect(()=>{
    dispatch({
      type : 'SET_PARAMS',
      query : query,
      catagory : paramsUrl.catagory,
      pageNumber : 20 //if query typing page number restart by default
    })
  },[query,dispatch])
  return (
   <MemoizedChildComponent query={query} setQuery={setQuery} />
  )
}
function ChildComponent({query,setQuery}){
  return(
    <div className="banner flex items-center justify-center">
    <div className="banner-content w-10/12 sm:w-8/12">
      <h1 className="font-bold text-center text-white text-xl sm:text-3xl mb-8">Amazing free images</h1>
      <p className="font-light text-center text-white text-md mb-8">up to 30.000 image is free</p>
      <div className="py-1 px-1 bg-white flex w-full rounded shadow-lg">
        <input aria-label="input search" value={query} onChange={(e)=>setQuery(e.target.value)} type="text" className="py-2 px-2 outline-none w-full" placeholder="Auto Search"/>
        <IconButton style={{outline : 0}} aria-label="Search">
          <SearchIcon style={{fontSize : '25px'}} aria-label={'Search Icon'}/>
        </IconButton>
      </div>
    </div>
  </div>
  )
}
function compare(prevProps , nextProps){
  return JSON.stringify(prevProps) === JSON.stringify(nextProps)
}
const MemoizedChildComponent = React.memo(ChildComponent,compare)
export default Banner
