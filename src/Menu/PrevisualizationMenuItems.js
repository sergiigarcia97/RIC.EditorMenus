import React, { Component } from 'react';
import MenuItemType from '../common/Editor/types/menuItemType';
import PrevisualizationMenuItem from './PrevisualizationMenuItem';

class PrevisualizationMenuItems extends Component {
    render() {
        return (
            <div id='previsualizationMenuItems' className='m-3 p-3 d-flex flex-column align-items-center height-25em'>
                {
                    this.props.menuTreeList.map((item, i) => {
                        return <PrevisualizationMenuItem
                            key={i}
                            type={item.type}
                            title={item.title}
                        />
                    })
                }


            </div>
        );
    }
}

export default PrevisualizationMenuItems;