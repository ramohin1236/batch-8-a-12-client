import PropTypes from 'prop-types';

const SharredHeader = ({heading, subHeading}) => {
    return (
   
            <div className="md:mx-auto text-center w-4/12 ">
            <p className="text-[#151515] uppercase text-4xl border-y-4 p-2">{heading}</p>
            <p className="text-pink-500 mb-2 text-xl uppercase">{subHeading}</p>
        </div>
        
    );
};







SharredHeader.propTypes = {
    heading: PropTypes.object,
    subHeading: PropTypes.object,
}



export default SharredHeader;