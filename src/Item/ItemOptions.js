import React, { Component } from 'react';
import RButton from '../ReusableComponents/Button/RButton';
import ButtonsContainer from './ButtonsContainer';
let initialState = {
    addEnabled: true,
    updateEnabled: true,
    deleteEnabled: true
}
class ItemOptions extends Component {
    constructor (props) {
        super(props);
        this.state = initialState
    }

    componentDidMount() {
        if (this.props.menuId !== undefined) {
            if (this.props.menuId !== "") {
                this.setState({
                    addEnabled: false
                })
            } else {
                this.setState({
                    updateEnabled: false,
                    deleteEnabled: false
                })
            }

        }
    }

    add() {
        console.log("add")
        var addItem = this.props.addItem;
        addItem()
    }

    update() {
        console.log("update")
        var updateItem = this.props.updateItem;
        updateItem();
    }

    delete() {
        console.log("delete")
        var deleteItem = this.props.deleteItem;
        deleteItem();
    }

    render() {

        let addBtnClassname = this.state.addEnabled === true ? 'button-red button-md' : 'button-disabled button-md';
        let updateBtnClassname = this.state.updateEnabled === true ? 'button-black button-md' : 'button-disabled button-md';
        let deleteBtnClassname = this.state.deleteEnabled === true ? 'button-black button-md' : 'button-disabled button-md';

        return (
            <ButtonsContainer>
                <RButton
                    id='btn-delete'
                    name='btn-delete'
                    className={deleteBtnClassname}
                    type='button'
                    enabled={this.state.deleteEnabled}
                    showText='Eliminar'
                    onClick={() => this.delete()}
                />
                <RButton
                    id='btn-update'
                    name='btn-update'
                    className={updateBtnClassname}
                    type='button'
                    enabled={this.state.updateEnabled}
                    showText='Actualizar'
                    onClick={() => this.update()}
                />
                <RButton
                    id='btn-add'
                    name='btn-add'
                    className={addBtnClassname}
                    type='button'
                    enabled={this.state.addEnabled}
                    showText='Añadir'
                    onClick={() => this.add()}
                />
            </ButtonsContainer>
        );
    }
}

export default ItemOptions;