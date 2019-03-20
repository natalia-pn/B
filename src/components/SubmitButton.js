import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class submitButton extends Component {

    render() {
        
        const { submitBook } = this.props;
        return(
            <Fragment>
                <label className="send-books__label"></label>
                <input type="submit" className="Send-books__button" onClick={submitBook}/>
            </Fragment>
        );
    }
}

submitButton.propTypes = {
    submitBook: PropTypes.func
}

export default submitButton;



