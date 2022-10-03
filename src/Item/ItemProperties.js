import axios from 'axios';
import React, { Component, useEffect, useState } from 'react';
import actionType from '../common/Editor/types/actionType';
import { CORE_BASE_URL, DES_BASE_URL } from '../common/Editor/types/constants';
import MenuItemOptionType from '../common/Editor/types/menuItemOptionType';
import MenuItemType from '../common/Editor/types/menuItemType';
import RDropdownList from '../ReusableComponents/Dropdown/RDropdownList';
import RInputLabel from '../ReusableComponents/Input/RInputLabel';

import ItemOptions from './ItemOptions';
let emptyIntialState = {
    title: "",
    menuName: "",
    pageName: "",
    iconId: 99,//99 -> en blanco
    type: MenuItemType.ACTION,
    optionType: MenuItemOptionType.RICFORM,
    menuId: "",
}
let fullInitialState = {
    title: "menuName cambiado",
    menuName: "menuName simulado",
    pageName: "pageName",
    iconId: 99,//99 -> en blanco
    type: MenuItemType.ACTION,
    optionType: MenuItemOptionType.RICFORM,
    menuId: "6dba91e3-19c7-4712-b225-8a4bf87ecfb0"
}

function ItemProperties(props) {

    const [item, setItem] = useState({...props.item});
    useEffect(() => {
        setItem(props.item);
    }, [props.item])

    const handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        switch (name) {
            case "type":
                if (value === MenuItemType.FOLDER) {
                    let newItem = { [name]: value, optionType: MenuItemOptionType.FOLDER };
                    setItem(prevItem => ({
                        ...prevItem, ...newItem
                    }))
                } else {
                    let newItem = { [name]: value };
                    setItem(prevItem => ({
                        ...prevItem, ...newItem
                    }))
                }
                break;
            case "optionType":
                if (value === MenuItemOptionType.FOLDER) {
                    let newItem = { [name]: value, optionType: MenuItemOptionType.FOLDER };
                    setItem(prevItem => ({
                        ...prevItem, ...newItem
                    }))
                } else {
                    let newItem = { [name]: value };
                    setItem(prevItem => ({
                        ...prevItem, ...newItem
                    }))
                }
                break;
            default:
                this.setState({
                    [name]: value
                });
                break;
        }
    }

    const addItem = () => {
        console.log("addItem");
        const token = localStorage.getItem("authToken");
        if (token !== null && token !== "") {
            //let url = CORE_BASE_URL + "/CreateMenuItem";
            let url = CORE_BASE_URL + "/CreateMenuItem";
            const headers = {
                "Content-Type": "application/json;charset=utf-8",
                "Authorization": "bearer " + token.replace(/"/g, '')
            }
            let body = { ...item };
            body.type = Object.values(MenuItemType).indexOf(item.type);
            body.optionType = Object.values(MenuItemOptionType).indexOf(item.optionType);
            console.log("ItemProperties addItem url ->" + url, body);
            axios
                .post(url, JSON.stringify(body), { headers })
                .then(res => {
                    if (res.data.result === 0) {
                    } else {
                    }
                })
                .catch(err => {
                });
        } else {
            console.log("no hay sesion activa");
        }
    }

    const updateItem = () => {
        console.log("updateItem");
        const token = localStorage.getItem("authToken");
        if (token !== null && token !== "") {
            let url = CORE_BASE_URL + "/UpdateMenuItem";
            const headers = {
                "Content-Type": "application/json;charset=utf-8",
                "Authorization": "bearer " + token.replace(/"/g, '')
            }
            let body = { ...item };
            body.type = Object.values(MenuItemType).indexOf(item.type);
            body.optionType = Object.values(MenuItemOptionType).indexOf(item.optionType);
            console.log("ItemProperties addItem url ->" + url, body);
            axios
                .put(url, JSON.stringify(body), { headers })
                .then(res => {
                    if (res.data.result === 0) {
                    } else {
                    }
                })
                .catch(err => {
                });
        } else {
            console.log("no hay sesion activa");
        }
    }

    const deleteItem = () => {
        console.log("deleteItem");
        const token = localStorage.getItem("authToken");
        if (token !== null && token !== "") {
            let url = CORE_BASE_URL + "/DeleteMenuItem/" + item.menuId;
            const headers = {
                "Content-Type": "application/json;charset=utf-8",
                "Authorization": "bearer " + token.replace(/"/g, '')
            }
            let body = { ...item };
            body.type = Object.values(MenuItemType).indexOf(item.type);
            body.optionType = Object.values(MenuItemOptionType).indexOf(item.optionType);
            console.log("ItemProperties addItem url ->" + url, body);
            axios
                .delete(url, { headers })
                .then(res => {
                    if (res.data.result === 0) {
                    } else {
                    }
                })
                .catch(err => {
                });
        } else {
            console.log("no hay sesion activa");
        }
    }

    let inputsEnabled = props.action !== actionType.ADDITEMTREE ? true : false;

    let pageName;
    pageName = item.type === MenuItemType.ACTION ?
        //TODO: mostrar dropdown con páginas (como en el portal o el listado formularios)
        <RInputLabel
            initialValue={item.pageName}
            type="text"
            id="item-pageName"
            name="pageName"
            classToDiv="m-2 form-floating width-80"
            enabled={inputsEnabled}
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
                <h3 style={{ 'paddingLeft': '2em' }}>Editor </h3>
            </div>
            <div className='EM_container-fields-itemmenu d-flex flex-column align-items-center justify-content-center'>
                <div className='mb-3'></div>
                {/* <RInputLabel
                        type="text"
                        id="item-title"
                        name="title"
                        initialValue={this.state.title}
                        classToDiv="m-2 form-floating width-80"
                        enabled={inputsEnabled}
                        labelClassName="form-label"
                        labelText="Texto entrada:"
                        helpText="Texto del punto de menú"
                        className="form-control "
                        placeholder="Texto"
                        required={true}
                        onChange={e => handleChange(e)}
                    /> */}
                <RInputLabel
                    type="text"
                    id="item-menuName"
                    name="menuName"
                    initialValue={item.menuName}
                    classToDiv="m-2 form-floating width-80"
                    enabled={inputsEnabled}
                    labelClassName="form-label"
                    labelText="Título:"
                    helpText="Título del punto de menú"
                    className="form-control "
                    placeholder="Texto"
                    required={true}
                    onChange={e => handleChange(e)}
                />
                {/* type */}
                <RDropdownList
                    initialValue={item.type}
                    itemList={menuItemTypes}
                    originKey={"type"}
                    label={"Tipo :"}
                    onChange={e => handleChange(e)}
                    classToDiv="m-2 form-floating width-80"
                    className={inputsEnabled === true ? "form-select" : "form-select disabledIcon"}
                />
                {/* optionType */}
                <RDropdownList
                    initialValue={item.optionType}
                    itemList={menuItemOptionTypes}
                    originKey={"optionType"}
                    label={"Tipo opción:"}
                    onChange={e => handleChange(e)}
                    classToDiv="m-2 form-floating width-80"
                    className={inputsEnabled === true ? "form-select" : "form-select disabledIcon"}
                />
                {/* pageName */}
                {pageName}
                {/* iconid -> mostrar iconos + seleccionar dblclick (guardar iconid) */}
                <button className='button-black rounded'>icono</button>
                <div className='mt-5 w-100'>
                    <ItemOptions
                        action={props.action}
                        menuId={item.menuId}
                        item={item}
                        addItem={() => addItem()}
                        updateItem={() => updateItem()}
                        deleteItem={() => deleteItem()}
                    />
                </div>
            </div>
        </div >
    );
}

export default ItemProperties;