import { useContext } from "react";
import { AuthContext } from "../../Authentication/AuthProvider";


const AdminHome = () => {
    const { user } = useContext(AuthContext)
    return (
        <div >
          <div className="flex justify-evenly"> 
          <div>
           <p className="text-2xl mt-4 ml-4">Welcome our honorable admin <span className="text-black font-bold">{user?.displayName}</span></p>
           </div>
            <div className="avatar mt-4">
                <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={user?.photoURL} />
                </div>
            </div>           
          </div>
            <h1>ad home</h1>
        </div>
    );
};

export default AdminHome;