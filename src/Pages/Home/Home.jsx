import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner";
import SharredHeader from "../../SharredComp/SharredHeader";


const Home = () => {
    return (
        <div>

            <Helmet>
                <title>asset || Home</title>
            </Helmet>
            <div >
            <div className="relative">
            <Banner/>
            </div>
            {/* about section */}
               <div>
                    <SharredHeader heading={"Real State about"} subHeading={"this is why we provide "}/> 
               </div>
            </div>
        </div>
    );
};

export default Home;