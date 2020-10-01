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
    <div className="banner flex items-center justify-center">
      <div className="banner-content w-10/12 sm:w-8/12">
        <h1 className="font-bold text-center text-white text-xl sm:text-3xl mb-8">Gambar gratis yang menakjubkan</h1>
        <p className="font-light text-center text-white text-md mb-8">Temukan lebih banyak gambar</p>
        <div className="py-1 px-1 bg-white flex w-full rounded shadow-lg">
          <input value={query} onChange={(e)=>setQuery(e.target.value)} type="text" className="py-2 px-2 outline-none w-full" placeholder="Search Image"/>
          <IconButton style={{outline : 0}}>
            <SearchIcon style={{fontSize : '25px'}}/>
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default Banner
