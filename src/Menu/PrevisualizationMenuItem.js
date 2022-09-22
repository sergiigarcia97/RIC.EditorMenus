import React, { Component } from 'react';

class PrevisualizationMenuItem extends Component {
    render() {
        return (
            <div className='d-flex justify-content-between'>
                <button className='button-black rounded'>+-</button>{/* toggle colapse si es parent y con anidados */}
                <div>iconMenu</div>
                <div>texto</div>
                
            </div>
        );
    }
}

export default PrevisualizationMenuItem;