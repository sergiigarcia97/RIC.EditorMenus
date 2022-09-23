import React, { Component } from 'react';
import MenuItemType from '../common/Editor/types/menuItemType';
import PrevisualizationMenuItem from './PrevisualizationMenuItem';

class PrevisualizationMenuItems extends Component {
    render() {
        return (
            <div id='previsualizationMenuItems' className='m-3 p-3 d-flex flex-column align-items-center height-25em'>
                {
                    //array.forEach(element => { 
                }
                <PrevisualizationMenuItem 
                    type={MenuItemType.FOLDER}
                    title={"Menú principal"}
                />
                <PrevisualizationMenuItem 
                type={MenuItemType.ACTION}
                title={"Area usuario"}
                />
                <PrevisualizationMenuItem 
                type={MenuItemType.ACTION}
                title={"Perfil"}
                />
                <PrevisualizationMenuItem 
                type={MenuItemType.ACTION}
                title={"Dirección"}
                />
                <PrevisualizationMenuItem 
                type={MenuItemType.ACTION}
                title={"Dirección"}
                />
                <PrevisualizationMenuItem 
                type={MenuItemType.ACTION}
                title={"Dirección"}
                />
                <PrevisualizationMenuItem 
                type={MenuItemType.ACTION}
                title={"Dirección"}
                />
                <PrevisualizationMenuItem 
                type={MenuItemType.ACTION}
                title={"Dirección"}
                />
                <PrevisualizationMenuItem 
                type={MenuItemType.ACTION}
                title={"Dirección"}
                />
                <PrevisualizationMenuItem 
                type={MenuItemType.ACTION}
                title={"Dirección"}
                />
                <PrevisualizationMenuItem 
                type={MenuItemType.ACTION}
                title={"Dirección"}
                />
                <PrevisualizationMenuItem 
                type={MenuItemType.ACTION}
                title={"Dirección"}
                />
                <PrevisualizationMenuItem 
                type={MenuItemType.ACTION}
                title={"Dirección"}
                />
                <PrevisualizationMenuItem 
                type={MenuItemType.ACTION}
                title={"Dirección"}
                />
                <PrevisualizationMenuItem 
                type={MenuItemType.ACTION}
                title={"Dirección"}
                />
                <PrevisualizationMenuItem 
                type={MenuItemType.ACTION}
                title={"Dirección"}
                />
            </div>
        );
    }
}

export default PrevisualizationMenuItems;