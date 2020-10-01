import React,{useEffect,useState} from 'react'
import { useStateValue } from '../stateProvider/StateProvider'
function InputSearch() {
  const [query,setQuery] = useState('')
  const [{paramsUrl},dispatch] = useStateValue()
  useEffect(()=>{
    dispatch({
      type : 'SET_PARAMS',
      query : query,
      catagory : paramsUrl.catagory,
      pageNumber : 20 //if query typing page number restart by default
    })
  },[query,dispatch])
  return (
    <input value={query} onChange={(e)=>setQuery(e.target.value)} className="px-2 py-2 outline-none shadow-lg mr-1 w-full rounded" type="text" placeholder="Auto Search"/>
  )
}

export default InputSearch
