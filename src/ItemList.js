import React, { Component } from 'react';

export default function ItemList(props) {

    let body;

    //en este approach hay que encontrar la manera de que salte el onclick en el tr(salta en el td)

    body = <table className='w-100'>
        <thead>
            <tr>
                <th className=''></th>
                <th className=''>Texto</th>
                <th className=''>Tipo</th>
                {/* <th className=''>Acciones</th> */}
                <th className=''></th>
            </tr>
        </thead>
        <tbody>
            {props.itemList.map((item, i) => {
                return <tr id={"item-" + item.menuId} key={"item-" + item.menuId} onClick={(e) => item.selectItem(item.menuId)} className={props.selectedID !== item.menuId ? "form-list-item" : "form-list-item-selected"}>
                    <td onDoubleClick={() => item.selectItemAndGetMenuItem(item.menuId, props.action)} onClick={() => item.selectItem(item.menuId)} className='text-align-center '>{i + 1}</td>
                    <td onDoubleClick={() => item.selectItemAndGetMenuItem(item.menuId, props.action)} onClick={() => item.selectItem(item.menuId)} className=' '>{item.menuName}</td>
                    <td onDoubleClick={() => item.selectItemAndGetMenuItem(item.menuId, props.action)} onClick={() => item.selectItem(item.menuId)} className=' '>{item.type}</td>

                </tr>
            })}
        </tbody>
    </table>

    return (
        <div>
            {body}
        </div>
    );
}
