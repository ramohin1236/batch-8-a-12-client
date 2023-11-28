import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner";
import SharredHeader from "../../SharredComp/SharredHeader";
import Container from "../../SharredClass/Container";


const Home = () => {
    return (
        <div>

            <Helmet>
                <title>asset || Home</title>
            </Helmet>
            <div >
                <div className="relative">
                    <Banner />
                </div>
                {/* about section */}
                <div >
                    <SharredHeader heading={"About"} subHeading={"This is why we provide "} />

                    <Container>   <p className="mt-6"> Oversee real estate functions to profitably secure, maintain and grow leased and owned properties. Supervise 1-2 employees. Monitor, track, and analyze operational data, conduct strategic  data analysis, and develop lease and purchase strategies.
                        •
                        Negotiated agreements with landowners resulting in a 10% increase in leased properties.
                        •
                        Developed and executed lease and purchase strategies resulting in a 5% increase in profitability.
                        •
                        Maintained an accurate record of state and local zoning ordinances and monitored proposed zoning applications or changes.</p></Container>
                </div>
            </div>
            <div className="mt-16 text-center">
                <SharredHeader heading={"Our Package"} subHeading={"Enjoy your business"}></SharredHeader>
                <Container>
                <div className="text-center mt-12 mb-16 ">
                    <div className="md:flex md:justify-around gap-6 ">

                        <div className="stat bg-blue-200 rounded-2xl w-64 mb-6">
                            <div className="stat-figure text-secondary">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </div>
                            <div className="stat-title">Maximum 5 Employess</div>
                            <div className="stat-value">5$</div>

                        </div>

                        <div className="stat bg-blue-200 rounded-2xl w-64 mb-6">
                            <div className="stat-figure text-secondary">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                            </div>
                            <div className="stat-title">Maximum 10 Employess</div>
                            <div className="stat-value">8$</div>

                        </div>

                        <div className="stat bg-blue-200 rounded-2xl w-64 mb-6">
                            <div className="stat-figure text-secondary">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                            </div>
                            <div className="stat-title">Maximum 20 Employess</div>
                            <div className="stat-value">15$</div>
                        </div>

                    </div>
                </div>
                </Container>
            </div>
        </div>
    );
};

export default Home;