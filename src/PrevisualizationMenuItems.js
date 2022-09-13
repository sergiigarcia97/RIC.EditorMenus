import React, { Component } from 'react';
import PrevisualizationMenuItem from './PrevisualizationMenuItem';

class PrevisualizationMenuItems extends Component {
    render() {
        return (
            <div id='previsualizationMenuItems'>
                {
                    //array.forEach(element => {
                }
                <PrevisualizationMenuItem />
                <PrevisualizationMenuItem />
                <PrevisualizationMenuItem />
                {
                    //})
                }
            </div>
        );
    }
}

export default PrevisualizationMenuItems;