import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class submitButton extends Component {

    render() {
        
        const { submitBook, id } = this.props;
        return(
            <Fragment>
                <label className="send-books__label"></label>
                <input type="submit" className="Send-books__button" onClick={submitBook} value={id}/>
            </Fragment>
        );
    }
}

submitButton.propTypes = {
    submitBook: PropTypes.func
}

export default submitButton;



