import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img from '/public/banner2.jpg'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <Carousel autoPlay={true}>
                <div>
                 
                         <img src={img}  />
                         
                        <Link to='/employee'> <button className='btn btn-outline btn-secondary '>Join as Employee</button></Link>
                </div>
                
                <div>
                    <img src={img}/>
                  <Link to='/admin'>  <button className='btn btn-outline btn-secondary '>Join as HR/admin</button></Link>
                </div>
               
              
            </Carousel>
        </div>
    );
};

export default Banner;