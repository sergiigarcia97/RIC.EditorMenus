import React, { useEffect, useState } from 'react';
import actionType from '../common/Editor/types/actionType';
import Box from '../ReusableComponents/Box/Box';
import RButton from '../ReusableComponents/Button/RButton';
let initialState = {
    addEnabled: false,
    updateEnabled: false,
    deleteEnabled: false
}
function ItemOptions(props) {
    const [addEnabled, setAddEnabled] = useState(false);
    const [updateEnabled, setUpdateEnabled] = useState(false);
    const [deleteEnabled, setDeleteEnabled] = useState(false);


    useEffect(() => {
        const changeButtonsEnabledState = () => {
            switch (props.action) {
                case actionType.NEWITEM:
                case actionType.NEWITEMANDITEMTREE:
                    setAddEnabled(true);
                    setUpdateEnabled(false);
                    setDeleteEnabled(false);
                    break;
                case actionType.UPDATEITEM:
                    if (props.item.menuId === "") {
                        setAddEnabled(false);
                        setUpdateEnabled(false);
                        setDeleteEnabled(false);

                    } else {
                        setAddEnabled(false);
                        setUpdateEnabled(true);
                        setDeleteEnabled(false);
                    }

                    break;
                case actionType.DELETEITEM:
                    if (props.item.menuId === "") {
                        setAddEnabled(false);
                        setUpdateEnabled(false);
                        setDeleteEnabled(false);
                    } else {
                        setAddEnabled(false);
                        setUpdateEnabled(false);
                        setDeleteEnabled(true);
                    }
                    break;
                default:
                    setAddEnabled(false);
                    setUpdateEnabled(false);
                    setDeleteEnabled(false);
                    break;
            }
        }
        changeButtonsEnabledState();
    }, [props.item.menuId,props.action])
    const addOnClick = () => {
        console.log("add")
        var addItem = props.addItem;
        addItem()
    }

    const updateOnClick = () => {
        console.log("update")
        var updateItem = props.updateItem;
        updateItem();
    }

    const deleteOnClick = () => {
        console.log("delete")
        var deleteItem = props.deleteItem;
        deleteItem();
    }

    return (
        <Box className='d-flex w-100 justify-content-evenly m-2'>
            <RButton
                id='btn-add'
                name='btn-add'
                className={addEnabled === true ? 'button-red button-md' : 'button-disabled button-md'}
                type='button'
                enabled={addEnabled}
                showText='Añadir'
                onClick={() => addOnClick()}
            />
            <RButton
                id='btn-update'
                name='btn-update'
                className={updateEnabled === true ? 'button-black button-md' : 'button-disabled button-md'}
                type='button'
                enabled={updateEnabled}
                showText='Actualizar'
                onClick={() => updateOnClick()}
            />
            <RButton
                id='btn-delete'
                name='btn-delete'
                className={deleteEnabled === true ? 'button-black button-md' : 'button-disabled button-md'}
                type='button'
                enabled={deleteEnabled}
                showText='Eliminar'
                onClick={() => deleteOnClick()}
            />
        </Box>
    );

}

export default ItemOptions;