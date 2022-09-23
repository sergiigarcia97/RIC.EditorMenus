import React, { Component } from 'react';
import RIcon from '../ReusableComponents/Button/RIcon';
import PrevisualizationMenuItems from './PrevisualizationMenuItems';

class MenuPrevisualization extends Component {

    //TODO: VARIABLE DE ESTADO QUE CONTROLE SI HACEN CLICK A ALGUNA OPCIÓN MUESTRE LOS BOTONES DE MENUTREEOPTIONS
    //SEGUN EL TIPO
    //TODO: VARIABLES DE ESTADO QUE SE PASEN AL MENUTREEOPTIONS
    render() {
        return (
            <div id="previsualizacionMenu" className='d-flex flex-column border-solid-lightgray border-radius-5'>
                <div className='d-flex align-items-center w-100 background-black color-white border-radius-5' style={{ 'height': '3em' }}>
                    <h3 style={{ 'padding-left': '2em' }}>Menú </h3>
                </div>
                <div id="containerPrevisualizationMenu" style={{ 'overflowY': 'auto' }}>
                    {/* TODO: RECIBIR COMO PROP LA LISTA DE MENUTREE */}
                    <PrevisualizationMenuItems />
                </div>
                <div className='d-flex justify-content-evenly container-buttons-prev-items'>.
                    {/* TODO: CREAR COMPONENTE QUE TENGA ESTOS BOTONES Y RECIBA COMO PROPS SI ESTAN DISABLED/VISIBLE + ACCION A REALIZAR */}
                    <div className='d-flex justify-content-evenly'>
                        <RIcon
                            className="modal-footer-button common-btn-props"
                            id="btnCancelar"
                            value="defaultValue"
                            iconType="up-open"
                            iconSize="medium"
                            onClick={this.toggle}
                        />
                        <RIcon
                            className="modal-footer-button common-btn-props"
                            id="btnCancelar"
                            value="defaultValue"
                            iconType="down-open"
                            iconSize="medium"
                            onClick={this.toggle}
                        />
                        <RIcon
                            className="modal-footer-button common-btn-props"
                            id="btnCancelar"
                            value="defaultValue"
                            iconType="level-down"
                            iconSize="medium"
                            onClick={this.toggle}
                        />
                        <RIcon
                            className="modal-footer-button common-btn-props"
                            id="btnCancelar"
                            value="defaultValue"
                            iconType="level-up"
                            iconSize="medium"
                            onClick={this.toggle}
                        />
                    </div>
                    <div className='d-flex justify-content-evenly'>
                        <RIcon
                            className="modal-footer-button common-btn-props"
                            id="btnCancelar"
                            value="defaultValue"
                            iconType="user-o"
                            iconSize="medium"
                            onClick={this.toggle}
                        />
                        <RIcon
                            className="modal-footer-button common-btn-props"
                            id="btnCancelar"
                            value="defaultValue"
                            iconType="lock"
                            iconSize="medium"
                            onClick={this.toggle}
                        />
                        <RIcon
                            className="modal-footer-button common-btn-props"
                            id="btnCancelar"
                            value="defaultValue"
                            iconType="edit"
                            iconSize="medium"
                            onClick={this.toggle}
                        />
                        <RIcon
                            className="modal-footer-button common-btn-props"
                            id="btnCancelar"
                            value="defaultValue"
                            iconType="trash"
                            iconSize="medium"
                            onClick={this.toggle}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default MenuPrevisualization;