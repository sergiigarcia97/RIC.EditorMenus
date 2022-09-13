import React, { Component } from 'react';

class PrevisualizationMenuItem extends Component {
    render() {
        return (
            <div className='d-flex justify-content-between'>
                <button className='button-black rounded'>+-</button>{/* toggle colapse si es parent y con anidados */}
                <div>iconMenu</div>
                <div>texto</div>
                <div className='d-flex container-buttons-prev-items'>
                    <button className='button-black rounded'>e</button>{/* editar */}
                    <button className='button-black rounded'>e</button>{/* eliminar */}
                    <button className='button-black rounded'>s</button>{/* subir si hay item con menor itemorder */}
                    <button className='button-black rounded'>b</button>{/* bajar si hay item con mayor itemorder */}
                    <button className='button-black rounded'>a</button>{/* anidar si hay item con menor itemorder */}
                    <button className='button-black rounded'>da</button>{/* desanidar si hay item con mayor itemorder */}
                </div>
            </div>
        );
    }
}

export default PrevisualizationMenuItem;