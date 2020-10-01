import { useStateValue } from "../stateProvider/StateProvider"

export const useCounterAddImage = ()=>{
  const [{},dispatch] = useStateValue()
  const handleAddImages = (images)=>{
  dispatch({
      type : 'SET_IMAGE',
      images : images
    })
  }
  const addImages = (images)=>{
    handleAddImages(images)
  }
  return[
    addImages
  ]
}