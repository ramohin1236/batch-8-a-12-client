import { Outlet } from "react-router-dom";
import loginimg from '/public/authentication.gif'

const AuthOutlet = () => {
    return (
        <div className="flex">
            <div className="flex-1 hidden lg:block">
                <img src={loginimg} alt="" />
            </div>
            <div className="flex-1">
                 <Outlet/>
           </div>

        </div>
    );
};

export default AuthOutlet;