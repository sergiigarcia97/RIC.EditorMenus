import axios from 'axios';
import React, { useState } from 'react';
import actionType from './common/Editor/types/actionType';
import { CORE_BASE_URL, DES_BASE_URL } from './common/Editor/types/constants';
import MenuItemOptionType from './common/Editor/types/menuItemOptionType';
import MenuItemType from './common/Editor/types/menuItemType';
import Box from './ReusableComponents/Box/Box';
import ItemProperties from './Item/ItemProperties';
import MenuPrevisualization from './Menu/MenuPrevisualization';
import MenuItemsModal from './MenuItemsModal';
import menuTreeDefaultState, { menuTreeEmptyState } from './menuTreeDefaultState';

let itemInitialState = {
    title: "",
    menuName: "",
    pageName: "",
    iconId: 99,//99 -> en blanco
    type: MenuItemType.ACTION,
    optionType: MenuItemOptionType.RICFORM,
    menuId: "",
}

function EditorMenus() {
    const [toggleMenuItemsModal, setToggleMenuItemsModal] = useState(false);
    const [action, setAction] = useState(actionType.NEWITEM);
    const [itemList, setItemList] = useState([]);
    const [selectedID, setSelectedID] = useState("");
    const [item, setItem] = useState(itemInitialState);
    const [menuTreeList, setMenuTreeList] = useState(menuTreeDefaultState);

    const onMenuChange = (newMenuState) => {
        setMenuTreeList(newMenuState)
    }

    const handleToggleMenuItemsModal = async () => {
        if (toggleMenuItemsModal === false) {
            await getMenuItemList();
            setSelectedID("");
            setItem(itemInitialState);
        }
        if (toggleMenuItemsModal === true) {
            setItemList([]);
        }
        setToggleMenuItemsModal(!toggleMenuItemsModal);
    }

    const selectItem = (itemID) => {
        setSelectedID(itemID);
    }

    const dblClickItem = async (itemID,actionP) => {
        console.log("dblClickItem itemID ->" + itemID)
        console.log("dblClickItem action state ->" + action)
        console.log("dblClickItem action param ->" + actionP)
        setSelectedID(itemID);
        setAction(actionP);
        handleModalSelectItemOnClick(actionP)
        // setAction(actionP)
        // await handleGetMenuItemByID(itemID);
        // handleToggleMenuItemsModal();
        //setAction(action);
        //handleAction(actionType.NEWITEM);

    }

    const getMenuItemByID = async (selectedID) => {
        //simulación
        let apiResponse = {
            "result": 0,
            "data": {
                "menuId": selectedID,
                "pageName": "form/OHBCcHNTVlRoMjVvaFh3QmVOdG9wMzVDVm9MNTNkZlZhNktYNVpFTXZVV2JEa21JOXN6ZU84TmxTWDdkNXZJVw==",
                "menuName": "Servicios chófer",
                "iconId": 11,
                "system": false,
                "type": 1,
                "optionType": 1,
                "title": "PM - Servicios chófer",
                //TODO: añadir menutreeid
            }
        }
        let item = { ...apiResponse.data };
        Object.entries(MenuItemType).map((type, i) => {
            if (i === item.type) {
                item.type = type[i];
            }
            return null
        });
        Object.entries(MenuItemOptionType).map((optionType, i) => {
            if (i === item.optionType) {
                item.optionType = optionType[i];
            }
            return null
        });

        console.log("item", item)
        setItem(prevItem => ({
            ...item
        }));

        //llamada
        // const token = localStorage.getItem("authToken");
        // if (token !== null && token !== "") {
        //     let url = CORE_BASE_URL + "/GetMenuItembyID/" + selectedID;
        //     const headers = {
        //         "Content-Type": "application/json;charset=utf-8",
        //         "Authorization": "bearer " + token.replace(/"/g, '')
        //     }
        //     console.log("ItemProperties GetMenuItembyID url ->" + url);
        //     axios
        //         .get(url, { headers })
        //         .then(res => {
        //             console.log("respuesta " + url, res);
        //             if (res.data.result === 0) {
        //                 let item = { ...res.data.data };
        //                 Object.entries(MenuItemType).map((type, i) => {
        //                     if (i === item.type) {
        //                         item.type = type[i];
        //                     }
        //                     return null
        //                 })
        //                 Object.entries(MenuItemOptionType).map((optionType, i) => {
        //                     if (i === item.optionType) {
        //                         item.optionType = optionType[i];
        //                     }
        //                     return null
        //                 })
        //                 console.log("ItemProperties getitembyid attrs ->", item);
        //                 this.setState({
        //                     item: {...item}
        //                 })
        //             } else {
        //             }
        //         })
        //         .catch(err => {
        //         });
        // } else {
        //     console.log("no hay sesion activa");
        // }


        if (toggleMenuItemsModal === true) {
            handleToggleMenuItemsModal();
        }
    }

    const handleGetMenuItemByID = async (itemID) => {
        await getMenuItemByID(itemID);
    }

    const handleModalSelectItemOnClick = async (action) => {
        switch (action) {
            case actionType.ADDITEMTREE:
                await handleGetMenuItemByID(selectedID);
                addItemTree(item);
                handleToggleMenuItemsModal();

                break;
            case actionType.UPDATEITEM:
                await handleGetMenuItemByID(selectedID);
                handleToggleMenuItemsModal();
                break;
            case actionType.DELETEITEM:
                await handleGetMenuItemByID(selectedID);
                handleToggleMenuItemsModal();
                break;
            default: break;
        }
    }

    const getMenuItemList = async () => {

        console.log("getFormList");
        //simulación
        let apiResponse = {
            "result": 0,
            "data": [{ "menuId": "2925abad-d588-4901-a97f-0d292bb04ef4", "pageName": "form/OHBCcHNTVlRoMjVvaFh3QmVOdG9wMzVDVm9MNTNkZlZhNktYNVpFTXZVV2JEa21JOXN6ZU84TmxTWDdkNXZJVw==", "menuName": "Servicios chófer", "iconId": 11, "system": false, "type": 1, "optionType": 1 }, { "menuId": "3b8e2ca5-36b9-410e-834d-db954314c931", "pageName": "form/OHBCcHNTVlRoMjVvaFh3QmVOdG9wMzVDVm9MNTNkZlZhNktYNVpFTXZVV2JEa21JOXN6ZU84TmxTWDdkNXZJVw==", "menuName": "Servicios chófer", "iconId": 11, "system": false, "type": 1, "optionType": 1 }, { "menuId": "7470bc5d-1724-41fc-97b7-f9cb70024971", "pageName": "eee", "menuName": "aaa", "iconId": 99, "system": false, "type": 1, "optionType": 1 }, { "menuId": "e5b59d37-3071-4d34-ae52-7c79d3c38896", "pageName": "vczxvzxcv", "menuName": "vcxzvxzc", "iconId": 99, "system": false, "type": 1, "optionType": 1 }]
        }

        apiResponse.data.forEach(item => {
            //item.className = classToItem;
            item.selectItem = selectItem;
            item.selectItemAndGetMenuItem = dblClickItem;
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
        setItemList([...apiResponse.data]);

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
        //                     //item.className = this.state.classToItem;
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

    const addItemTree = (item) => {
        setMenuTreeList([...menuTreeList, { ...item }]);
    }

    const handleAction = (action) => {
        switch (action) {
            case actionType.ADDITEMTREE:
                setAction(action);
                handleToggleMenuItemsModal();
                break;
            case actionType.NEWITEMANDITEMTREE:
                setAction(action);
                setItem(itemInitialState);
                break;
            case actionType.NEWITEM:
                setAction(action);
                setItem(itemInitialState);
                setSelectedID("");
                break;
            case actionType.UPDATEITEM:
                setAction(action);
                handleToggleMenuItemsModal();
                break;
            case actionType.DELETEITEM:
                setAction(action);
                handleToggleMenuItemsModal();
                break;
            // case actionType.UPDATEACTUALITEM:
            // break;
            // case actionType.DELEACTUALTEITEM:
            // break;
            default:
                setAction(action);
                break;
        }
    }

    return (
        <div id="editorMenus" className='container' >
            <div className='row justify-content-evenly'>
                <div className='col-6'>
                    <Box className='d-flex w-100 justify-content-evenly m-2'>
                        <button className='button-black button-md' onClick={() => handleAction(actionType.ADDITEMTREE)}>Añadir</button>
                        <button className='button-red button-md' onClick={() => handleAction(actionType.NEWITEMANDITEMTREE)}>Nuevo y añadir</button>
                    </Box>
                    <MenuPrevisualization
                        menuTreeList={menuTreeList}
                        onMenuChange={onMenuChange}
                    />
                </div>
                <div className='col-5'>
                    <Box className='d-flex w-100 justify-content-evenly m-2'>
                        <button className='button-red button-md' onClick={() => handleAction(actionType.NEWITEM)}>Nuevo</button>
                        <button className='button-black button-md' onClick={() => handleAction(actionType.UPDATEITEM)}>Modificar</button>
                        <button className='button-black button-md' onClick={() => handleAction(actionType.DELETEITEM)}>Eliminar</button>
                        {/* <button className='button-black button-md' onClick={() => handleAction(actionType.DELETEITEM)}>Modificar actual</button> */}
                        {/* <button className='button-black button-md' onClick={() => handleAction(actionType.DELETEITEM)}>Eliminar actual</button> */}
                    </Box>
                    <ItemProperties
                        action={action}
                        modal={toggleMenuItemsModal}
                        item={item}
                    //menuId="prueba"
                    />
                </div>
            </div>
            <MenuItemsModal
                modal={toggleMenuItemsModal}
                parentToggle={handleToggleMenuItemsModal}
                itemList={itemList}
                selectedID={selectedID}
                handleClick={handleModalSelectItemOnClick}
                action={action}
            />
        </div>
    );
}

export default EditorMenus;