import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class submitButton extends Component {

    render() {
        
        const { action, id } = this.props;
        return(
            <Fragment>
                <label className="send-books__label"></label>
                <input type="submit" className="Send-books__button" onClick={action} id={id}/>
            </Fragment>
        );
    }
}

submitButton.propTypes = {
    action: PropTypes.func
}

export default submitButton;



