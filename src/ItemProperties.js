import React, { Component } from 'react';
import RLabelInput from './ReusableComponents/Input/RLabelInput';

class ItemProperties extends Component {
    render() {
        return (
            <div id="propiedadesItem">
                <div className='container-item-fields'>
                    <RLabelInput
                        type="text"
                        id="item-menuname"
                        classToDiv="mb-3"
                        enabled={true}
                        labelClassName="form-label"
                        labelText="Texto :"
                        helpText="Texto del punto de menú"
                        className="form-control"
                        placeholder="Texto"
                        required={true}
                    />


                    {/* type */}
                    <RLabelInput
                        type="text"
                        id="item-type"
                        classToDiv="mb-3"
                        enabled={true}
                        labelClassName="form-label"
                        labelText="Tipo :"
                        helpText="Carpeta / Punto / ..."
                        className="form-control"
                        placeholder="Tipo"
                        required={true}
                    />
                    {/* optiontype */}
                    <RLabelInput
                        type="text"
                        id="item-optionType"
                        classToDiv="mb-3"
                        enabled={true}
                        labelClassName="form-label"
                        labelText="Tipo opción:"
                        helpText=""
                        className="form-control"
                        placeholder="Tipo opción"
                        required={true}
                    />
                    {/* parentmenu -> este atributo se guardará segun el render*/}

                    {/* pagename */}
                    <RLabelInput
                        type="text"
                        id="item-pageName"
                        classToDiv="mb-3"
                        enabled={true}
                        labelClassName="form-label"
                        labelText="Nombre página:"
                        className="form-control"
                        placeholder="Nombre página"
                        required={true}
                    />
                    {/* iconid -> mostrar iconos + seleccionar dblclick (guardar iconid) */}
                    <button className='button-black rounded'>icono</button>

                    {/* isopened */}
                    <RLabelInput
                        type="switch"
                        id="item-isOpened"
                        classToDiv="mb-3"
                        enabled={true}
                        labelClassName="form-label"
                        labelText="Abierto por defecto:"
                        className="form-control"
                        required={true}
                    />

                    {/* rolesauth */}

                    {/* usersauth */}

                    {/* system */}
                </div>
                <div className='container-item-buttons'>
                    <button className='button-black rounded'>Actualizar</button>
                    <button className='button-black rounded'>Añadir</button>
                </div>

            </div>
        );
    }
}

export default ItemProperties;