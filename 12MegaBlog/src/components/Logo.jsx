
import PropTypes from 'prop-types';

function Logo() {
  return (
    <div >
    
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="mr-3 h-12 opacity-100"
                            alt="Logo"
                        />
                   </div>
  )
}

Logo.propTypes = {
  width: PropTypes.string,
};

export default Logo;
