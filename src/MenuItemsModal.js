import React, { Component } from 'react';
import MenuItemType from './common/Editor/types/menuItemType';
import ButtonsContainer from './Item/ButtonsContainer';
import ItemList from './ItemList';
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
        this.selectItem = this.selectItem.bind(this);
        this.state = initialState
    }

    componentDidMount() {

        if (this.props.modal === true) {
            this.getFormList();
        }

    }

    componentDidUpdate(prevProps) {
        // console.log("actualizo formlistmodal")
        if (prevProps.modal !== this.props.modal && this.props.modal === true) {
            this.getFormList();
        }
    }

    getFormList() {

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

    toggle() {
        let parentToggle = this.props.parentToggle;
        parentToggle();
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
            itemList={this.state.itemList}
        />;
        let MODAL_FOOTER = <ButtonsContainer>
            <RIcon
                className="modal-footer-button common-btn-props"
                id="btnCancelar"
                value="defaultValue"
                iconType="cancel"
                iconSize="medium"
                onClick={this.toggle}
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
