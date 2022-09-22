import React, { Component } from 'react';
import PrevisualizationMenuItems from './PrevisualizationMenuItems';

class MenuPrevisualization extends Component {

    //TODO: VARIABLE DE ESTADO QUE CONTROLE SI HACEN CLICK A ALGUNA OPCIÓN MUESTRE LOS BOTONES DE MENUTREEOPTIONS
    //SEGUN EL TIPO
    //TODO: VARIABLES DE ESTADO QUE SE PASEN AL MENUTREEOPTIONS
    render() {
        return (
            <div id="previsualizacionMenu" className='d-flex flex-column'>
                <div className='d-flex justify-content-between'>
                    <h2>Titulo menú</h2>
                </div>
                <div id="containerPrevisualizationMenu">
                    {/* TODO: RECIBIR COMO PROP LA LISTA DE MENUTREE */}
                    <PrevisualizationMenuItems />
                </div>
                <div className='d-flex container-buttons-prev-items'>.
                    {/* TODO: CREAR COMPONENTE QUE TENGA ESTOS BOTONES Y RECIBA COMO PROPS SI ESTAN DISABLED/VISIBLE + ACCION A REALIZAR */}
                    <button className='button-black rounded'>e</button>{/* editar */}
                    <button className='button-black rounded'>e</button>{/* eliminar */}
                    <button className='button-black rounded'>s</button>{/* subir si hay item con menor itemorder */}
                    <button className='button-black rounded'>b</button>{/* bajar si hay item con mayor itemorder */}
                    <button className='button-black rounded'>a</button>{/* anidar si hay item con menor itemorder */}
                    <button className='button-black rounded'>da</button>{/* desanidar si hay item con mayor itemorder */}
                    <button className='button-black rounded'>users</button>{/* usersauth */}
                    <button className='button-black rounded'>roles</button>{/*rolesauth*/}

                </div>
            </div>
        );
    }
}

export default MenuPrevisualization;