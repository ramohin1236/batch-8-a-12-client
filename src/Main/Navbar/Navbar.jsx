import { NavLink } from "react-router-dom";
import Container from "../../SharredClass/Container";
import { useContext } from "react";
import { AuthContext } from "../../Authentication/AuthProvider";


const Navbar = () => {
    const { logOut,user}= useContext(AuthContext)

   
    const handleLogout=()=>{
        logOut()
        .then(() => { })
        .catch(error => console.log(error));
    }




    const navOptions = <>

        <NavLink   to="/"
  className={({ isActive}) =>
     isActive ? "text-blue-400 font-extrabold text-lg " : "text-black"
  }
>
           <button className="p-4 mr-2 font-semibold"> Home</button>

        </NavLink >
        <NavLink to='/authentication/employee' className={({ isActive}) =>
     isActive ? "text-blue-400 font-bold text-lg" : "text-black"
  }>
        <button className=" mr-2 p-4 font-semibold"> Join as Employee</button>

        </NavLink>
        <NavLink to='/authentication/admin' className={({ isActive}) =>
     isActive ? "text-blue-400 font-bold text-lg" : "text-black"
  }>
        <button className=" mr-2 p-4 font-semibold"> Join as HR/Admin</button>

        </NavLink>
     {
        user? <button 
        onClick={handleLogout}
        className="btn btn-sm mt-3 mr-2 font-semibold">Log out</button>
       :
       <NavLink to='/authentication/login' className={({ isActive}) =>
       isActive ? "text-blue-400 font-bold text-lg" : "text-black"
    }>
          <button
     
          className="mr-2 p-4 font-semibold">Login</button>
  
          </NavLink>
    }

    </>

    return (
        <div className="bg-pink-100">
            <Container>
                <div className="navbar  z-10">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                               {navOptions}

                            </ul>
                        </div>
                        <a className="btn btn-ghost text-xl">daisyUI</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                           {navOptions}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <a className="btn">Button</a>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Navbar;