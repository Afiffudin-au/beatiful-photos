export const initialState = {
  images : [],
  user : null,
  userName : '',
  paramsUrl : {
    query : 'all',
    catagory : 'photos',
    pageNumber : 20
  }
}
const reducer = (state,action)=>{
  switch(action.type){
    case 'SET_USER' :
      let afterSplit
      if(action.user){
        afterSplit = action.user.email.split('@',1)
      }
      return{
        ...state,
        user : action.user,
        userName : afterSplit
      }
    case 'SET_IMAGE':
    return{
      ...state,
      images: action.images
    }
    case 'SET_PARAMS' : 
    return {
      ...state,
      paramsUrl : {
        query : action?.query,
        catagory : action?.catagory,
        pageNumber : action?.pageNumber
      }
    }
    default : 
    return state
  }
}
export default reducer