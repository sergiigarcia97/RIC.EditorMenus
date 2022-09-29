import React from 'react';
import actionType from './common/Editor/types/actionType';
import ItemList from './ItemList';
import Box from './ReusableComponents/Box/Box';
import RButton from './ReusableComponents/Button/RButton';
import RIcon from './ReusableComponents/Button/RIcon';
import RModal from './ReusableComponents/Modal/RModal';

function MenuItemsModal(props) {

    const toggle = () => {
        let parentToggle = props.parentToggle;
        parentToggle();
    }

    const actionOnClick = (action) => {
        let handleClick = props.handleClick;
        handleClick(action);
    }


    let CLOSE_BUTTON = {};
    CLOSE_BUTTON.className = "pointer modal-close-button background-hover";
    CLOSE_BUTTON.id = "btnModalClose";
    CLOSE_BUTTON.value = "btnModalClose";
    CLOSE_BUTTON.iconType = "cancel";
    CLOSE_BUTTON.iconSize = "small";
    CLOSE_BUTTON.onClick = toggle;

    let MODAL_TITLE = "Listado acciones menú";
    let MODAL_CLASSNAME = "";
    let MODAL_BODY = <ItemList
        itemList={props.itemList}
        selectedID={props.selectedID}
        action={props.action}
    />;

    let buttonShowText = "Seleccionar";
    // switch (this.props.action) {
    //     case actionType.ADD:
    //         buttonShowText = "Añadir"
    //         break;
    //     case actionType.UPDATE:
    //         buttonShowText = "Modificar"
    //         break;
    //     case actionType.DELETE:
    //         buttonShowText = "Eliminar"
    //         break;
    //     default: break;
    // }

    let MODAL_FOOTER = <Box className="d-flex w-100 align-items-center justify-content-end m-2">
        <RIcon
            className="modal-footer-button common-btn-props"
            id="btnCancelar"
            value="defaultValue"
            iconType="cancel"
            iconSize="medium"
            onClick={toggle}
        />
        <RButton
            className={props.selectedID !== "" ? "button-md button-black rounded" : "button-md button-black disabledIcon rounded"}
            enabled={props.selectedID !== "" ? true : false}
            type="button"
            showText={buttonShowText}
            onClick={() => actionOnClick(props.action)}
        />
    </Box>;

    return (
        <RModal
            isOpen={props.modal}
            toggle={toggle}
            modalClass={MODAL_CLASSNAME}
            //unmountOnClose={true}
            scrollable={true}
            closeButton={
                <RIcon
                    className={CLOSE_BUTTON.className}
                    id={CLOSE_BUTTON.id}
                    value={CLOSE_BUTTON.value}
                    iconType={CLOSE_BUTTON.iconType}
                    iconSize={CLOSE_BUTTON.iconSize}
                    onClick={CLOSE_BUTTON.onClick}
                />
            }
            modalTitle={MODAL_TITLE}
            modalBody={MODAL_BODY}
            modalFooter={MODAL_FOOTER}
        />
    );

}

export default MenuItemsModal;
