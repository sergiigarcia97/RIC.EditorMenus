import axios from 'axios';
import React, { Component } from 'react';
import actionType from './common/Editor/types/actionType';
import { CORE_BASE_URL, DES_BASE_URL } from './common/Editor/types/constants';
import MenuItemOptionType from './common/Editor/types/menuItemOptionType';
import MenuItemType from './common/Editor/types/menuItemType';
import ButtonsContainer from './Item/ButtonsContainer';
import ItemProperties from './Item/ItemProperties';
import MenuPrevisualization from './Menu/MenuPrevisualization';
import MenuItemsModal from './MenuItemsModal';
let initialState = {
    toggleMenuItemsModal: false,
    action: "",
    classToItem: "form-list-item",
    classToSelectedItem: "form-list-item-selected",
    itemList: [],
    selectedID: "",
    item: null
}
class EditorMenus extends Component {
    constructor (props) {
        super(props);
        this.toggleMenuItemsModal = this.toggleMenuItemsModal.bind(this);
        this.selectItem = this.selectItem.bind(this);
        this.setAction = this.setAction.bind(this);
        this.newOnClick = this.newOnClick.bind(this);
        this.addOnClick = this.addOnClick.bind(this);
        this.updateOnClick = this.updateOnClick.bind(this);
        this.deleteOnClick = this.deleteOnClick.bind(this);
        this.getMenuItemByID = this.getMenuItemByID.bind(this);
        this.state = initialState
    }

    async toggleMenuItemsModal() {
        if (this.state.toggleMenuItemsModal === false) {
            await this.getFormList();
            this.setState({
                selectedID: ""
            });
        }
        // } else {
        //     let newState = {...initialState};
        //     newState.toggleMenuItemsModal = true;
        //     this.setState({
        //         ...newState
        //     })
        // }
        this.setState(prevState => ({
            toggleMenuItemsModal: !prevState.toggleMenuItemsModal,
        }))
    }

    selectItem(itemID) {
        let itemList = this.state.itemList.map(item => {
            if (item.menuId === itemID) {
                item.className = this.state.classToSelectedItem;
            } else {
                item.className = this.state.classToItem;
            }
            return item
        });
        this.setState({
            itemList: [...itemList],
            selectedID: itemID,
        })
    }

    getMenuItemByID(selectedID) {
        const token = localStorage.getItem("authToken");
        if (token !== null && token !== "") {
            let url = CORE_BASE_URL + "/GetMenuItembyID/" + selectedID;
            const headers = {
                "Content-Type": "application/json;charset=utf-8",
                "Authorization": "bearer " + token.replace(/"/g, '')
            }
            console.log("ItemProperties GetMenuItembyID url ->" + url);
            axios
                .get(url, { headers })
                .then(res => {
                    console.log("respuesta " + url, res);
                    if (res.data.result === 0) {
                        let item = { ...res.data.data };
                        Object.entries(MenuItemType).map((type, i) => {
                            if (i === item.type) {
                                item.type = type[i];
                            }
                            return null
                        })
                        Object.entries(MenuItemOptionType).map((optionType, i) => {
                            if (i === item.optionType) {
                                item.optionType = optionType[i];
                            }
                            return null
                        })
                        console.log("ItemProperties getitembyid attrs ->", item);
                        this.setState({
                            ...item 
                        })
                    } else {
                    }
                })
                .catch(err => {
                });
        } else {
            console.log("no hay sesion activa");
        }
    }

    async getFormList() {

        console.log("getFormList");
        //simulación
        let apiResponse = {
            "result": 0,
            "data": [{ "menuId": "2925abad-d588-4901-a97f-0d292bb04ef4", "pageName": "form/OHBCcHNTVlRoMjVvaFh3QmVOdG9wMzVDVm9MNTNkZlZhNktYNVpFTXZVV2JEa21JOXN6ZU84TmxTWDdkNXZJVw==", "menuName": "Servicios chófer", "iconId": 11, "system": false, "type": 1, "optionType": 1 }, { "menuId": "3b8e2ca5-36b9-410e-834d-db954314c931", "pageName": "form/OHBCcHNTVlRoMjVvaFh3QmVOdG9wMzVDVm9MNTNkZlZhNktYNVpFTXZVV2JEa21JOXN6ZU84TmxTWDdkNXZJVw==", "menuName": "Servicios chófer", "iconId": 11, "system": false, "type": 1, "optionType": 1 }, { "menuId": "7470bc5d-1724-41fc-97b7-f9cb70024971", "pageName": "eee", "menuName": "aaa", "iconId": 99, "system": false, "type": 1, "optionType": 1 }, { "menuId": "e5b59d37-3071-4d34-ae52-7c79d3c38896", "pageName": "vczxvzxcv", "menuName": "vcxzvxzc", "iconId": 99, "system": false, "type": 1, "optionType": 1 }]
        }

        apiResponse.data.forEach(item => {
            item.className = this.state.classToItem;
            item.selectItem = this.selectItem;
            item.getMenuItemByID = this.getMenuItemByID;
            Object.entries(MenuItemType).map((type, i) => {
                if (i === item.type) {
                    item.type = type[i];
                }
                return null
            })
            Object.entries(MenuItemOptionType).map((optionType, i) => {
                if (i === item.optionType) {
                    item.optionType = optionType[i];
                }
                return null
            })
        });
        this.setState({
            itemList: [...apiResponse.data]
        })
        //llamada
        // const token = localStorage.getItem("authToken");
        // if (token !== null && token !== "") {
        //     let url = CORE_BASE_URL + "/GetMenuItemListNew";
        //     const headers = {
        //         "Content-Type": "application/json;charset=utf-8",
        //         "Authorization": "bearer " + token.replace(/"/g, '')
        //     }
        //     console.log("MenuItemsModal getFormList url ->" + url);
        //     axios
        //         .get(url, { headers })
        //         .then(res => {
        //             console.log("respuesta "+url,res);
        //             if (res.data.result === 0) {
        //                 res.data.data.forEach(item => {
        //                     item.className = this.state.classToItem;
        //                     item.selectItem = this.selectItem;
        //                     Object.entries(MenuItemType).map((type, i) => {
        //                         if (i === item.type) {
        //                             item.type = type[i];
        //                         }
        //                         return null
        //                     })
        //                     Object.entries(MenuItemOptionType).map((optionType, i) => {
        //                         if (i === item.optionType) {
        //                             item.optionType = optionType[i];
        //                         }
        //                         return null
        //                     })
        //                 });
        //                 this.setState({
        //                     itemList: [...res.data.data]
        //                 })
        //             } else {
        //             }
        //         })
        //         .catch(err => {
        //         });
        // } else {
        //     console.log("no hay sesion activa");
        // }
    }

    newOnClick(action) {
        this.setState({
            action: action
        })
        //this.toggleMenuItemsModal();
    }

    addOnClick(action) {
        this.setState({
            action: action
        })
        this.toggleMenuItemsModal();
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

    setAction(action) {
        console.log("setAction ->" + action);
        this.setState({
            action: action
        });
    }

    render() {
        return (
            <div id="editorMenus" className='container'>
                <div className='row justify-content-evenly'>
                    <div className='col-6'>
                        <ButtonsContainer>
                            <button className='button-black button-md' onClick={() => this.addOnClick(actionType.ADD)}>Añadir</button>
                            <button className='button-red button-md' onClick={() => this.newOnClick(actionType.NEW)}>Nuevo y añadir</button>
                        </ButtonsContainer>
                        <MenuPrevisualization />

                    </div>
                    <div className='col-5'>
                        <ButtonsContainer>
                            <button className='button-red button-md' onClick={() => this.newOnClick(actionType.NEW)}>Nuevo</button>
                            <button className='button-black button-md' onClick={() => this.updateOnClick(actionType.UPDATE)}>Modificar</button>
                            <button className='button-black button-md' onClick={() => this.deleteOnClick(actionType.DELETE)}>Eliminar</button>
                        </ButtonsContainer>
                        <ItemProperties
                            action={this.state.action}
                            modal={this.state.toggleMenuItemsModal}
                            item={this.state.item}
                        //menuId="prueba"
                        />

                    </div>
                </div>
                <MenuItemsModal
                    modal={this.state.toggleMenuItemsModal}
                    parentToggle={() => this.toggleMenuItemsModal()}
                    itemList={this.state.itemList}
                    selectedID={this.state.selectedID}
                    action={this.state.action}
                    setAction={this.setAction}
                    getMenuItemByID={this.getMenuItemByID}
                />
            </div>
        );
    }
}

export default EditorMenus;