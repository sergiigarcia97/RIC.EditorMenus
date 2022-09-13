import React, { Component } from 'react';
import PrevisualizationMenuItems from './PrevisualizationMenuItems';

class MenuPrevisualization extends Component {
    render() {
        return (
            <div id="previsualizacionMenu" className='d-flex flex-column'>
                <div className='d-flex justify-content-between'>
                    <h2>Titulo menú</h2>
                    <button className='button-black rounded'>Cargar</button>
                </div>
                <div id="containerPrevisualizationMenu">
                    <PrevisualizationMenuItems />
                </div>
            </div>
        );
    }
}

export default MenuPrevisualization;