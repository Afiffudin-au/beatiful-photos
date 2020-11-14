import React,{useState,useEffect} from 'react';
import {useStylesModal} from '../useStyles/useStyles'
import { IconButton} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {Link, NavLink} from 'react-router-dom'
import { useStateValue } from '../stateProvider/StateProvider';
import InputSearch from './InputSearch';
import { auth } from '../firebase,';
import {blue} from '@material-ui/core/colors';
function Header() {
  const [{user,paramsUrl},dispatch] = useStateValue()
  const classes = useStylesModal()
  const [catagory,setCatagory] = useState('all')
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const handleCatagory = (e) =>{
    setCatagory(e.target.getAttribute('name'))
    const check = e.target.getAttribute('name')
    if(check){
      window.scrollTo(0,500)
    }
  }
  useEffect(()=>{
    dispatch({
      type : 'SET_PARAMS',
      query : paramsUrl.query,
      catagory : catagory,
      pageNumber : 20 //if catagory change, pageNumber reset by default
    })
  },[catagory,dispatch])

  const handleAuth = ()=>{
    if(user){
      auth.signOut()
    }
  }

  return (
    <MemoizedComponent 
    handleCatagory={handleCatagory}
    handleOpen={handleOpen}
    open={open}
    classes={classes}
    handleAuth={handleAuth}
    user={user}
    />
  )
}
function Component({handleCatagory,handleOpen,open,classes,handleAuth,user}){
  const body = (
    <div className={classes.paper}>
      <div className="flex flex-col gap-5" onClick={handleCatagory}>
      <NavLink to="/photos" name="photo"  className="mr-8 font-light text-gray-100 hover:text-gray-500 cursor-pointer" activeStyle={{
            fontWeight: "bold",
            color: blue[500]
          }}>
          photos
        </NavLink>
        <NavLink to="/llustrations" name="illustration"  className="mr-8 font-light text-gray-100 hover:text-gray-500 cursor-pointer" activeStyle={{
            fontWeight: "bold",
            color: blue[500]
          }}>
          llustrations
        </NavLink>
        <NavLink to="/vectors" name="vector"  className="mr-8 font-light text-gray-100 hover:text-gray-500 cursor-pointer" activeStyle={{
            fontWeight: "bold",
            color: blue[500]
          }}>
          vectors
        </NavLink>
      {
        user ? (
          <button onClick={handleAuth} className="mr-8 w-24 font-medium bg-blue-500 hover:bg-blue-600 shadow-lg py-2 px-3 outline-none rounded text-white">Log Out</button>
        ):(
        <Link to="/login">
          <button className="mr-8 w-32 font-medium bg-blue-500 hover:bg-blue-600 shadow-lg py-2 px-3 outline-none rounded text-white">Login</button>
        </Link>
        )
      }
      </div>
    </div>
  );
  return(
    <>
    <nav className="flex items-center justify-between bg-blue-100 p-2 z-10 sticky top-0">
      <div className="flex items-center w-full">
        <img className="w-16 ml-2 lg:mr-8 rounded" src="https://cdn.pixabay.com/photo/2020/09/23/09/12/orange-flower-5595483_960_720.jpg" alt=""/>
        <div className="p-2 lg:mr-8 flex w-full">
          <InputSearch/>
          <button className="bg-blue-500 px-2 lg:block hidden py-2 outline-none rounded shadow-lg text-white border-none hover:bg-blue-600">Search</button>
        </div>
      </div>
      <div className="hidden items-center lg:flex">
        <div className="flex text-right items-center" onClick={handleCatagory}>
        <NavLink to="/photos" name="photo" className="mr-8 font-light text-gray-900 hover:text-gray-600 cursor-pointer" activeStyle={{
            fontWeight: "bold",
            color:  blue[500]
          }}>
          photos
        </NavLink>
        <NavLink to="/llustrations" name="illustration" className="mr-8 font-light text-gray-900 hover:text-gray-600 cursor-pointer" activeStyle={{
            fontWeight: "bold",
            color:  blue[500]
          }}>
          llustrations
        </NavLink>
        <NavLink to="/vectors" name="vector" className="mr-8 font-light text-gray-900 hover:text-gray-600 cursor-pointer" activeStyle={{
            fontWeight: "bold",
            color:  blue[500]
          }}>
          vectors
        </NavLink>
          {
            user ? (
              <button onClick={handleAuth} className="w-24 mr-8 font-medium bg-blue-500 hover:bg-blue-600 shadow-lg py-2 px-3 rounded text-white">Log Out</button>
            ):(
              <Link to="/login">
                <button className="mr-8 font-medium bg-blue-500 hover:bg-blue-600 shadow-lg py-2 px-3 rounded text-white">Login</button>
              </Link>
            )
          }
        </div>
      </div>
      <div  className="lg:hidden block">
        <IconButton onClick={handleOpen} style={{outline : 0}}>
          <MenuIcon style={{ fontSize: 35 }}/>
        </IconButton>
      </div>
    </nav>
    <div className="lg:hidden block fixed w-full z-10">
      {open && body}
    </div>
    </>
  )
}
function compare(prevProps , nextProps){
  return JSON.stringify(prevProps) === JSON.stringify(nextProps)
}

const MemoizedComponent = React.memo(Component,compare)
export default Header
