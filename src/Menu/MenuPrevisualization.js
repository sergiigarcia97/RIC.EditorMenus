import React, { Component, useState } from 'react';
import RIcon from '../ReusableComponents/Button/RIcon';
import PrevisualizationMenuItems from './PrevisualizationMenuItems';
import { DndProvider, useDrag } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Menu from "./Menu.jsx";
import menuTreeDefaultState from '../menuTreeDefaultState';
import Tree from './Tree';
let initialState = {
    menuTreeList: menuTreeDefaultState,
}

function MenuPrevisualization(props) {

    const [menu, setMenu] = useState([...menuTreeDefaultState]);

    const onChangeEvent = (newMenuState) => {
        setMenu(newMenuState);
    };
    //TODO: VARIABLE DE ESTADO QUE CONTROLE SI HACEN CLICK A ALGUNA OPCIÓN MUESTRE LOS BOTONES DE MENUTREEOPTIONS
    //SEGUN EL TIPO
    //TODO: VARIABLES DE ESTADO QUE SE PASEN AL MENUTREEOPTIONS

    return (
        <div>
            <div id="previsualizacionMenu" className='d-flex flex-column border-solid-lightgray border-radius-5'>
                <div className='d-flex align-items-center w-100 background-black color-white border-radius-5' style={{ 'height': '3em' }}>
                    <h3 style={{ 'paddingLeft': '2em' }}>Menú </h3>
                </div>
                <div id="containerPrevisualizationMenu" style={{ 'overflowY': 'auto' }}>
                    <Tree menu={menu} changeEvent={onChangeEvent} />
                    {/* <PrevisualizationMenuItems
                            menuTreeList={this.props.menuTreeList}
                        /> */}
                </div>
            </div>
            <div className='d-flex justify-content-evenly container-buttons-prev-items height-3em mt-3 border-solid-lightgray rounded'>
                {/* TODO: CREAR COMPONENTE QUE TENGA ESTOS BOTONES Y RECIBA COMO PROPS SI ESTAN DISABLED/VISIBLE + ACCION A REALIZAR */}
                <div className='d-flex justify-content-evenly align-items-center'>
                    <RIcon
                        className="button-black m-1 rounded"
                        id="btnSubir"
                        value="defaultValue"
                        iconType="up-open"
                        iconSize="md"
                       // onClick={this.toggle}
                    />
                    <RIcon
                        className="button-black m-1 rounded"
                        id="btnBajar"
                        value="defaultValue"
                        iconType="down-open"
                        iconSize="md"
                       // onClick={this.toggle}
                    />
                    <RIcon
                        className="button-black m-1 rounded"
                        id="btnDesanidar"
                        value="defaultValue"
                        iconType="level-down"
                        iconSize="md"
                       // onClick={this.toggle}
                    />
                    <RIcon
                        className="button-black m-1 rounded"
                        id="btnAnidar"
                        value="defaultValue"
                        iconType="level-up"
                        iconSize="md"
                       // onClick={this.toggle}
                    />
                </div>
                <div className='d-flex justify-content-evenly align-items-center'>
                    <RIcon
                        className="button-grey m-1 rounded"
                        id="btnUsuarios"
                        value="defaultValue"
                        iconType="user-o"
                        iconSize="md"
                       // onClick={this.toggle}
                        tooltipText="Usuarios"
                    />
                    <RIcon
                        className="button-grey m-1 rounded"
                        id="btnRoles"
                        value="defaultValue"
                        iconType="lock"
                        iconSize="md"
                       // onClick={this.toggle}
                        tooltipText="Roles"
                    />
                    {/* <RIcon
                            className="button-grey m-1 rounded"
                            id="btnEditar"
                            value="defaultValue"
                            iconType="edit"
                            iconSize="md"
                           // onClick={this.toggle}
                            tooltipText="Editar"
                        /> */}
                    <RIcon
                        className="button-red m-1 rounded"
                        id="btnEliminar"
                        value="defaultValue"
                        iconType="trash"
                        iconSize="md"
                       // onClick={this.toggle}
                        tooltipText="Eliminar"
                    />
                </div>
            </div>
        </div>
    );
}

export default MenuPrevisualization;