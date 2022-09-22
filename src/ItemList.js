import React, { Component } from 'react';

export default class ItemList extends Component {

    constructor (props) {
        super(props);
        this.state = {
            classToItem: "form-list-item",
            classToSelectedItem: "form-list-item-selected",
            itemList: []
        }

    }


    componentDidMount() {
        if (!this.props.itemList) {
            //console.log("Hay que pasarle itemList al componente itemList para que renderize")
        } else {

            //ESTO ESTÁ EN EL PARENT (itemListMODAL), POR LO QUE AQUI NO HACE FALTA ESTA PARTE
            let itemList = [...this.props.itemList];
            // itemList.forEach(form => form.className = this.state.classToItem)
            this.setState({
                itemList: itemList
            })

        }
    }

    componentDidUpdate(prevProps) {
        //console.log("actualizo itemListmodal")
        if (prevProps.itemList !== this.props.itemList) {
            //console.log("actualizo lista")
            let itemList = [...this.props.itemList];
            this.setState({
                itemList: [...itemList]
            })
        }
    }

    render() {
        let classToItem = "form-list-item"
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
                {this.state.itemList.map((item, i) => {
                    return <tr id={"item-" + item.menuId} key={"item-" + item.menuId} onClick={(e) => item.selectItem(item.menuId)} className={item.className}>
                        <td onDoubleClick={() => item.openForm(item.menuId)} onClick={() => item.selectItem(item.menuId)} className='text-align-center '>{i + 1}</td>
                        <td onDoubleClick={() => item.openForm(item.menuId)} onClick={() => item.selectItem(item.menuId)} className=' '>{item.menuname}</td>
                        <td onDoubleClick={() => item.openForm(item.menuId)} onClick={() => item.selectItem(item.menuId)} className=' '>{item.type}</td>
                        
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
}
