import { useStateValue } from '../stateProvider/StateProvider'

export const useCounterAddImage = () => {
  const [{}, dispatch] = useStateValue()
  const addImages = (images) => {
    dispatch({
      type: 'SET_IMAGE',
      images: images,
    })
  }
  return [addImages]
}
