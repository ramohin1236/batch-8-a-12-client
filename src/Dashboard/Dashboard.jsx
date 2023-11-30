import { NavLink, Outlet } from "react-router-dom";
import { FaAccessibleIcon, FaAddressCard, FaArrowRight, FaEdit, FaHome, FaList, FaUser,  FaUserAlt,  FaUsers } from "react-icons/fa";
import useAdmin from "../hooks/useAdmin";
import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider";

const Dashboard = () => {
    const {logOut}=useContext(AuthContext)
    const [isAdmin] = useAdmin();
   const handleLogOut =()=>{
    logOut()
   }

    return (
        <div >

            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content   ">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary btn-sm drawer-button lg:hidden">Open youtr navigation bar</label>
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>

                       

                  
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">

                    {
                        isAdmin? 
                       ( <>
                        <li className="py-4"><NavLink className={({ isActive }) =>
                        isActive ? "text-black-400 font-extrabold text-lg " : "text-black"
                    } to='/dashboard/home'><FaHome/>Home</NavLink></li>
                    {/* 2no */}
                    <li className="py-4"><NavLink className={({ isActive }) =>
                        isActive ? "text-black-400 font-extrabold text-lg " : "text-black"
                    } to='/dashboard/list'><FaUsers />Employee List</NavLink></li>
                    {/* 3no */}
                    <li className="py-4"><NavLink className={({ isActive }) =>
                        isActive ? "text-black-400 font-extrabold text-lg " : "text-black"
                    } to='/dashboard/addEmployee'><FaUser />Add Employee</NavLink></li>
                    {/* 4no */}
                    <li className="py-4"><NavLink className={({ isActive }) =>
                        isActive ? "text-black-400 font-extrabold text-lg " : "text-black"
                    } to='/dashboard/assetlist'><FaList />Asset List</NavLink></li>
                    {/* 5no */}
                    <li className="py-4"><NavLink className={({ isActive }) =>
                        isActive ? "text-black-400 font-extrabold text-lg " : "text-black"
                    } to='/dashboard/addasset'><FaAddressCard />Add Asset</NavLink></li>
                    {/* 6no */}
                    <li className="py-4"><NavLink className={({ isActive }) =>
                        isActive ? "text-black-400 font-extrabold text-lg " : "text-black"
                    } to='/dashboard/allr'><FaAccessibleIcon />All requests</NavLink></li>
                    {/* 7no */}
                    <li className="py-4"><NavLink className={({ isActive }) =>
                        isActive ? "text-black-400 font-extrabold text-lg " : "text-black"
                    } to='/dashboard/admincustom'><FaEdit />
                    Custom requests</NavLink></li>
                    {/* 8no */}
                    <li className="py-4"><NavLink className={({ isActive }) =>
                        isActive ? "text-black-400 font-extrabold text-lg " : "text-black"
                    } to='/dashboard/payment'><FaEdit />
                   Payment History</NavLink></li>
                   <button
                   onClick={handleLogOut}
                   className="btn btn-sm ">Log Out</button>
                    </>)
                       
                    

                    :
                 
                    (<>


                    {/* for employee */}
                       {/* <li className="py-4"><NavLink className={({ isActive }) =>
                           isActive ? "text-black-400 font-extrabold text-lg " : "text-black"
                       } to='/dashboard/employeehome'><FaHome/>Home</NavLink></li> */}
                      
                       <li className="py-4"><NavLink className={({ isActive }) =>
                           isActive ? "text-black-400 font-extrabold text-lg " : "text-black"
                       } to='/dashboard/myteam'><FaUsers/>My Team</NavLink></li>
                       
                       <li className="py-4"><NavLink className={({ isActive }) =>
                           isActive ? "text-black-400 font-extrabold text-lg " : "text-black"
                       } to='/dashboard/easset'><FaList />My Asset</NavLink></li>
                    
                       <li className="py-4"><NavLink className={({ isActive }) =>
                           isActive ? "text-black-400 font-extrabold text-lg " : "text-black"
                       } to='/dashboard/eRqAsset'><FaArrowRight />Request For Assets</NavLink></li>
                      
                       <li className="py-4"><NavLink className={({ isActive }) =>
                           isActive ? "text-black-400 font-extrabold text-lg " : "text-black"
                       } to='/dashboard/makeCRequest'><FaEdit />Make Custome Request</NavLink></li>
                      
                       <li className="py-4"><NavLink className={({ isActive }) =>
                           isActive ? "text-black-400 font-extrabold text-lg " : "text-black"
                       } to='/dashboard/profile'><FaUserAlt/>My Profile</NavLink></li>
                        <button
                   onClick={handleLogOut}
                   className="btn btn-sm ">Log Out</button>
                     </>)
                  
                      
                      
                    }

                   
                        

                        
                    </ul>
                  
              
                   

                </div>
            </div>

        </div>
    );
};

export default Dashboard;