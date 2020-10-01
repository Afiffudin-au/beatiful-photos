import React,{useEffect,useRef,useCallback,useState} from 'react'
import  Card  from '../card/Card'
import UseSearch from '../useSearch/UseSearch'
import { useStateValue } from '../stateProvider/StateProvider'

function Main() {
  const [{images,paramsUrl},dispatch] = useStateValue()
  const [pageNumber,setPageNumber] = useState(paramsUrl?.pageNumber)
  const {error,loading,hasMore} = UseSearch()
  const observer = useRef()
  const lastImageElement = useCallback(node => {
    if(loading) return 
    if(observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries=>{
      if(entries[0].isIntersecting && hasMore){
       setPageNumber(pageNumber => pageNumber + 10)
      }
    })
    if(node) observer.current.observe(node)
  },[loading,hasMore])
  useEffect(()=>{
    dispatch({
      type : 'SET_PARAMS',
      query : paramsUrl.query,
      catagory : paramsUrl.catagory,
      pageNumber : pageNumber
    })
  },[pageNumber,dispatch])

  useEffect(()=>{
    setPageNumber(paramsUrl.pageNumber)
  },[paramsUrl.pageNumber])
  console.log(paramsUrl.pageNumber,+' '+pageNumber)
  return (
    <div className="mt-12">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {
          images.map((image,index)=>{
            if(images.length === index + 1){
             return <div className="mx-auto mb-10" ref={lastImageElement} key={image.id}>
               <Card  image={image}/> 
             </div>
            }else{
              return <div className="mx-auto mb-10" key={image.id}>
               <Card  image={image}/> 
              </div>
            }
          })
        }
      </div>
      {
         !loading && images.length === 0 && <p className="max-w-2xl text-lg font-semibold mx-auto my-2 py-2 px-2 bg-blue-400 text-center rounded">No image result query...</p>
      }
      {
        error && <p className="max-w-2xl text-lg font-semibold mx-auto my-2 py-2 px-2 bg-red-700 text-center rounded">No Image Result...</p>
      }
      {
        loading && <p className="max-w-2xl text-lg font-semibold mx-auto my-2 py-2 px-2 bg-blue-400 text-center rounded">Loading...</p>
      }
    </div>
  )
}

export default Main
