import React, { Component} from 'react';
import PropTypes from 'prop-types';

class UpdateBooksModal extends Component {
  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }

    
    return (
        <div className="Backdrop">
            <div className="Modal">
              {this.props.children} 
            </div>
        </div>
    );
  }
}

UpdateBooksModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default UpdateBooksModal;