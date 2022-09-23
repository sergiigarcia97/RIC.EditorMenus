import axios from 'axios';
import React, { Component } from 'react';
import { CORE_BASE_URL, DES_BASE_URL } from '../common/Editor/types/constants';
import MenuItemOptionType from '../common/Editor/types/menuItemOptionType';
import MenuItemType from '../common/Editor/types/menuItemType';
import RDropdownList from '../ReusableComponents/Dropdown/RDropdownList';
import RInputLabel from '../ReusableComponents/Input/RInputLabel';
import ButtonsContainer from './ButtonsContainer';
import ItemOptions from './ItemOptions';
let emptyIntialState = {
    menuname: "",
    pagename: "",
    iconId: 99,//99 -> en blanco
    type: MenuItemType.ACTION,
    optionType: MenuItemOptionType.RICFORM,
    menuId: "",
}
let fullInitialState = {
    menuname: "menuname simulado",
    pagename: "pagename",
    iconId: 99,//99 -> en blanco
    type: MenuItemType.ACTION,
    optionType: MenuItemOptionType.RICFORM,
    menuId: "6dba91e3-19c7-4712-b225-8a4bf87ecfb0"
}

class ItemProperties extends Component {

    constructor (props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.addItem = this.addItem.bind(this);
        this.updateItem = this.updateItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.state = emptyIntialState
    }

    componentDidMount() {
        let foundMenuID = false;
        if (this.props.menuId !== undefined) {
            if (this.props.menuId !== null) {
                foundMenuID = true;
                let fullState = { ...fullInitialState };
                fullState.menuId = this.props.menuId;
                this.setState({
                    ...fullState
                })
            }
        }
        if (!foundMenuID) {
            this.setState({
                ...emptyIntialState
            })
        }
        //console.log("ItemProperties componentDidMount state",this.state)
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        switch (name) {
            case "type":
                if (value === MenuItemType.FOLDER) {
                    this.setState({
                        [name]: value,
                        optionType: MenuItemOptionType.FOLDER
                    });
                } else {
                    this.setState({
                        [name]: value
                    });
                }

                break;
            case "optionType":
                if (value === MenuItemOptionType.FOLDER) {
                    this.setState({
                        [name]: value,
                        type: MenuItemType.FOLDER
                    });
                } else {
                    this.setState({
                        [name]: value
                    });
                }
                break;
            default:
                this.setState({
                    [name]: value
                });
                break;
        }

    }

    addItem() {

        console.log("addItem");

        const token = localStorage.getItem("authToken");
        if (token !== null && token !== "") {
            //let url = CORE_BASE_URL + "/CreateMenuItem";
            let url = CORE_BASE_URL + "/CreateMenuItem";
            const headers = {
                "Content-Type": "application/json;charset=utf-8",
                "Authorization": "bearer " + token.replace(/"/g, '')
            }
            let body = { ...this.state };
            console.log("ItemProperties addItem url ->" + url, body);
            axios
                .post(url, JSON.stringify(body), { headers })
                .then(res => {
                    if (res.data.Result === 0) {
                    } else {
                    }
                })
                .catch(err => {
                });
        } else {
            console.log("no hay sesion activa");
        }
    }

    updateItem() {
        console.log("updateItem");
        const token = localStorage.getItem("authToken");
        if (token !== null && token !== "") {
            //let url = CORE_BASE_URL + "/CreateMenuItem";
            let url = CORE_BASE_URL + "/UpdateMenuItem";
            const headers = {
                "Content-Type": "application/json;charset=utf-8",
                "Authorization": "bearer " + token.replace(/"/g, '')
            }
            let body = { ...this.state };
            console.log("ItemProperties addItem url ->" + url, body);
            axios
                .put(url, JSON.stringify(body), { headers })
                .then(res => {
                    if (res.data.Result === 0) {
                    } else {
                    }
                })
                .catch(err => {
                });
        } else {
            console.log("no hay sesion activa");
        }
    }

    deleteItem() {
        console.log("deleteItem");
        const token = localStorage.getItem("authToken");
        if (token !== null && token !== "") {
            //let url = CORE_BASE_URL + "/CreateMenuItem";
            let url = CORE_BASE_URL + "/DeleteMenuItem/" + this.state.menuId;
            const headers = {
                "Content-Type": "application/json;charset=utf-8",
                "Authorization": "bearer " + token.replace(/"/g, '')
            }
            let body = { ...this.state };
            console.log("ItemProperties addItem url ->" + url, body);
            axios
                .delete(url, { headers })
                .then(res => {
                    if (res.data.Result === 0) {
                    } else {
                    }
                })
                .catch(err => {
                });
        } else {
            console.log("no hay sesion activa");
        }
    }

    render() {
        let pagename;
        pagename = this.state.type === MenuItemType.ACTION ?
            //TODO: mostrar dropdown con páginas (como en el portal o el listado formularios)
            <RInputLabel
                //initialValue={this.state.pagename}
                type="text"
                id="item-pagename"
                name="pagename"
                classToDiv="mb-3 form-floating width-80"
                enabled={true}
                labelClassName="form-label"
                labelText="Página :"
                helpText="Página "
                className="form-control"
                placeholder="Texto"
                required={true}
                onChange={e => this.handleChange(e)}
            /> : null;

        let menuItemTypes = Object.entries(MenuItemType).map(([key, value]) => {
            return {
                key: key,
                value: value
            }
        })

        let menuItemOptionTypes = Object.entries(MenuItemOptionType).map(([key, value]) => {
            return {
                key: key,
                value: value
            }
        })

        return (
            <div id="propiedadesItem" className=' border-solid-lightgray border-radius-5'>
                <div className='d-flex align-items-center w-100 background-red color-white border-radius-5' style={{ 'height': '3em' }}>
                    <h3 style={{ 'padding-left': '2em' }}>Editor </h3>
                </div>
                <div className='EM_container-fields-itemmenu height-25em d-flex flex-column align-items-center justify-content-center'>
                    <RInputLabel
                        type="text"
                        id="item-menuname"
                        name="menuname"
                        //initialValue={this.state.menuname}
                        classToDiv="mb-3 form-floating width-80"
                        enabled={true}
                        labelClassName="form-label"
                        labelText="Texto entrada:"
                        helpText="Texto del punto de menú"
                        className="form-control "
                        placeholder="Texto"
                        required={true}
                        onChange={e => this.handleChange(e)}
                    />

                    {/* type */}
                    <RDropdownList
                        initialValue={this.state.type}
                        itemList={menuItemTypes}
                        originKey={"type"}
                        label={"Tipo :"}
                        onChange={e => this.handleChange(e)}
                        classToDiv="mb-3 form-floating width-80"
                        className="form-select"
                    />

                    {/* optiontype */}
                    <RDropdownList
                        initialValue={this.state.optionType}
                        itemList={menuItemOptionTypes}
                        originKey={"optionType"}
                        label={"Tipo opción:"}
                        onChange={e => this.handleChange(e)}
                        classToDiv="mb-3 form-floating width-80"
                        className="form-select"
                    />

                    {/* pagename */}
                    {pagename}


                    {/* iconid -> mostrar iconos + seleccionar dblclick (guardar iconid) */}
                    <button className='button-black rounded'>icono</button>
                    <div className='mt-5 w-100'>
                        <ItemOptions
                            menuId={this.state.menuId}
                            addItem={() => this.addItem()}
                            updateItem={() => this.updateItem()}
                            deleteItem={() => this.deleteItem()}
                        />
                    </div>
                </div>

            </div >
        );
    }
}

export default ItemProperties;