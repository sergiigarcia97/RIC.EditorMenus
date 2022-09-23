import React, { Component } from 'react';
import MenuItemType from '../common/Editor/types/menuItemType';

class PrevisualizationMenuItem extends Component {
    render() {
        return (
            <div className='EM_previsualization-menutreeitem m-2 d-flex justify-content-around align-items-center height-3em width-80'>
                <div>{this.props.title}</div>
                {/* toggle colapse si es parent y con anidados */}
                {this.props.type === MenuItemType.FOLDER ?
                    <button className='button-black rounded'>^</button>
                    : null
                }



            </div>
        );
    }
}

export default PrevisualizationMenuItem;