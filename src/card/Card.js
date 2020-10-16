import React from 'react'
import { saveAs } from 'file-saver';
import LazyLoad from 'react-lazyload';
function Card({image}) {
  const view = ()=>{
    window.open(image.largeImageURL,'_blank');
  }
  const donwload = ()=>{
    saveAs(image.largeImageURL,'image')
  }
  return (
      <MemoizedChildComponent image={image} view={view} donwload={donwload}/>
  )
}
function ChildComponent({image,view,donwload}){
  return(
    <div className="card max-w-xs rounded shadow-2xl p-5 mx-2 my-2 bg-gray-300">
        <LazyLoad 
          width={150}
          height={200}
          debounce={false}
          >
          <img className="rounded -mt-10" src={image.webformatURL} alt=""/>
         </LazyLoad>
        <div className="flex flex-wrap mt-3 p-2">
          <span className="py-1 px-2 bg-indigo-400 rounded mr-2 mb-2 text-gray-200">Likes : 533</span>
          <span className="py-1 px-2 bg-indigo-400 rounded mr-2 mb-2 text-gray-200">Download : 232</span>
          <span className="py-1 px-2 bg-indigo-400 rounded mr-2 mb-2 text-gray-200">Views : 232</span>
        </div>
        <div className="p-2">
          <button onClick={view} target="_blank" className="text-sm py-2 px-3 rounded bg-blue-500 hover:bg-blue-600 outline-none shadow-lg mr-2 mb-2 text-gray-200 uppercase" rel="noopener noreferrer">View</button>
          <button onClick={donwload} className="text-sm py-2 px-3 rounded bg-blue-500 hover:bg-blue-600 outline-none shadow-lg mr-2 mb-2 text-gray-200 uppercase">Download</button>
        </div>
      </div>
  )
}
function compare(prevProps , nextProps){
  return JSON.stringify(prevProps) === JSON.stringify(nextProps)
}
const MemoizedChildComponent = React.memo(ChildComponent,compare)
export default Card