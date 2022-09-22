import React, { Component } from 'react';

class ButtonsContainer extends Component {
    render() {
        return (
            <div className='d-flex w-100 justify-content-evenly m-2'>
                {this.props.children}
            </div>
        );
    }
}

export default ButtonsContainer;