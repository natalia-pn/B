import React, { Component, Fragment } from 'react';

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

export default submitButton;



