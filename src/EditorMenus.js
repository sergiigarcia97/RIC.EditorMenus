import React, { Component } from 'react';
import actionType from './common/Editor/types/actionType';
import ButtonsContainer from './Item/ButtonsContainer';
import ItemProperties from './Item/ItemProperties';
import MenuPrevisualization from './Menu/MenuPrevisualization';
import MenuItemsModal from './MenuItemsModal';
let initialState = {
    toggleMenuItemsModal: false,
    action: "",
    
}
class EditorMenus extends Component {
    constructor (props) {
        super(props);
        this.toggleMenuItemsModal = this.toggleMenuItemsModal.bind(this);
        this.updateOnClick = this.updateOnClick.bind(this);
        this.deleteOnClick = this.deleteOnClick.bind(this);
        this.state = initialState
    }

    toggleMenuItemsModal() {
        this.setState(prevState => ({
            toggleMenuItemsModal: !prevState.toggleMenuItemsModal,
        }))
    }

    updateOnClick(action) {
        this.setState({
            action: action
        })
        this.toggleMenuItemsModal();
    }

    deleteOnClick(action) {
        this.setState({
            action: action
        })
        this.toggleMenuItemsModal();
    }

    render() {
        return (
            <div id="editorMenus" className='container'>
                <div className='row justify-content-evenly'>
                    <div className='col-6'>
                        <ButtonsContainer>
                            <button className='button-black rounded'>Añadir</button>
                            <button className='button-black rounded'>Nuevo y añadir</button>
                        </ButtonsContainer>
                        <div className='border-solid-lightgray'>
                            <MenuPrevisualization />
                        </div>
                    </div>
                    <div className='col-5'>
                        <ButtonsContainer>
                            <button className='button-black rounded'>Nuevo</button>
                            <button className='button-black rounded' onClick={() => this.updateOnClick(actionType.UPDATE)}>Modificar</button>
                            <button className='button-black rounded' onClick={() => this.deleteOnClick(actionType.DELETE)}>Eliminar</button>
                        </ButtonsContainer>
                        <ItemProperties
                        //menuId="prueba"
                        />
                    </div>
                </div>
                <MenuItemsModal
                    modal={this.state.toggleMenuItemsModal}
                    parentToggle={() => this.toggleMenuItemsModal()}

                />
            </div>
        );
    }
}

export default EditorMenus;