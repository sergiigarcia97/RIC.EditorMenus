import React, { Component } from 'react';
import ItemProperties from './ItemProperties';
import MenuPrevisualization from './MenuPrevisualization';
import RLabelInput from './ReusableComponents/Input/RLabelInput';

class EditorMenus extends Component {
    render() {
        return (
            <div id="editorMenus" className='container'>
                <div className='row justify-content-evenly'>
                    <div className='col-4'>
                        <ItemProperties />
                    </div>
                    <div className='col-6'>
                        <MenuPrevisualization />
                    </div>
                </div>

            </div>
        );
    }
}

export default EditorMenus;