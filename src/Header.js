import React, { Component } from 'react';
import RTitle from './ReusableComponents/Title/RTitle';

class Header extends Component {
    render() {
        return (
            <div className='d-flex mt-3 mb-3 justify-content-evenly'>
                <RTitle
                    size={1}
                    text={"Editor Menús"}
                />
                <div className='EM_container-buttons-header'>
                    <button className='button-black rounded'>Listado</button>
                    <button className='button-black rounded'>Nuevo</button>
                    <button className='button-black rounded'>Guardar</button>
                </div>
            </div>
        );
    }
}

export default Header;