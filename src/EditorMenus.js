import React, { Component } from 'react';
import actionType from './common/Editor/types/actionType';
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
    selectedID: ""
}
class EditorMenus extends Component {
    constructor (props) {
        super(props);
        this.toggleMenuItemsModal = this.toggleMenuItemsModal.bind(this);
        this.selectItem = this.selectItem.bind(this);
        this.setAction = this.setAction.bind(this);
        this.addOnClick = this.addOnClick.bind(this);
        this.updateOnClick = this.updateOnClick.bind(this);
        this.deleteOnClick = this.deleteOnClick.bind(this);
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

    async getFormList() {

        console.log("getFormList");
        //simulación
        let itemList = [
            {
                menuId: "1ec2336b-47ad-40be-9226-fb54bf2020c5",
                menuname: "Servicios chófer",
                type: 1
            }
        ]
        itemList.forEach(item => {
            item.className = this.state.classToItem;
            item.selectItem = this.selectItem;
            Object.entries(MenuItemType).map((type, i) => {
                if (i === item.type) {
                    item.type = type[i];
                }
                return null
            })
        });
        this.setState({
            itemList: [...itemList]
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
        //             if (res.data.Result === 0) {
        //                 this.setState({
        //                     itemList: JSON.parse(res.data.data)
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
                            <button className='button-red button-md'>Nuevo y añadir</button>
                        </ButtonsContainer>
                        <MenuPrevisualization />

                    </div>
                    <div className='col-5'>
                        <ButtonsContainer>
                            <button className='button-red button-md'>Nuevo</button>
                            <button className='button-black button-md' onClick={() => this.updateOnClick(actionType.UPDATE)}>Modificar</button>
                            <button className='button-black button-md' onClick={() => this.deleteOnClick(actionType.DELETE)}>Eliminar</button>
                        </ButtonsContainer>
                        <ItemProperties
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
                />
            </div>
        );
    }
}

export default EditorMenus;