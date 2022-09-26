import React, { Component } from 'react';
import actionType from './common/Editor/types/actionType';
import MenuItemType from './common/Editor/types/menuItemType';
import ButtonsContainer from './Item/ButtonsContainer';
import ItemList from './ItemList';
import RButton from './ReusableComponents/Button/RButton';
import RIcon from './ReusableComponents/Button/RIcon';
import RModal from './ReusableComponents/Modal/RModal';

let initialState = {
    classToItem: "form-list-item",
    classToSelectedItem: "form-list-item-selected",
    itemList: [],
    selectedID: ""
}
class MenuItemsModal extends Component {
    constructor (props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.actionOnClick = this.actionOnClick.bind(this);
    }


    toggle() {
        let parentToggle = this.props.parentToggle;
        parentToggle();
    }

    actionOnClick(action) {
        console.log("actionOnClick ->" + action)
        // let setAction = this.props.setAction;
        // setAction(action);
        let getMenuItemByID = this.props.getMenuItemByID;
        getMenuItemByID(this.props.selectedID);
        this.toggle();
    }

    render() {

        let CLOSE_BUTTON = {};
        CLOSE_BUTTON.className = "pointer modal-close-button background-hover";
        CLOSE_BUTTON.id = "btnModalClose";
        CLOSE_BUTTON.value = "btnModalClose";
        CLOSE_BUTTON.iconType = "cancel";
        CLOSE_BUTTON.iconSize = "small";
        CLOSE_BUTTON.onClick = this.toggle;

        let MODAL_TITLE = "Listado acciones menú";
        let MODAL_CLASSNAME = "";
        let MODAL_BODY = <ItemList
            itemList={this.props.itemList}
        />;

        let buttonShowText = "";
        switch (this.props.action) {
            case actionType.ADD:
                buttonShowText = "Añadir"
                break;
            case actionType.UPDATE:
                buttonShowText = "Modificar"
                break;
            case actionType.DELETE:
                buttonShowText = "Eliminar"
                break;
            default: break;
        }

        let MODAL_FOOTER = <ButtonsContainer>
            <RIcon
                className="modal-footer-button common-btn-props"
                id="btnCancelar"
                value="defaultValue"
                iconType="cancel"
                iconSize="medium"
                onClick={this.toggle}
            />
            <RButton
                className={this.props.selectedID !== "" ? "button-md button-black rounded" : "button-md button-black disabledIcon rounded"}
                enabled={this.props.selectedID !== "" ? true : false}
                type="button"
                showText={buttonShowText}
                onClick={() => this.actionOnClick(this.props.action)}
            />
        </ButtonsContainer>;

        return (
            <RModal
                isOpen={this.props.modal}
                toggle={this.toggle}
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
}

export default MenuItemsModal;
