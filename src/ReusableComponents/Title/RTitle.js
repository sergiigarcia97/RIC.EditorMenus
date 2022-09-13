import { Component } from "react";

/**
 * Componente para mostrar un input html
 * @class RTitle
 * @prop {string} text - Texto a mostrar
 * @prop {string} className - Clase css para el contenedor del título
 * @prop {number} size - Tamaño del título (h1,h2,h3,h4,h5,h6)
 * @prop {string} type - Si este componente esta contenido por un card se le aplica la clase css text-center(bootstrap), si no se aplica la classe css que se le pase como prop a este componente
*/
export default class RTitle extends Component {

    generateTitle(size) {
        switch (size) {
            case 1:
                return <h1 className={this.props.className}>{this.props.text}</h1>;
            case 2:
                return <h2 className={this.props.className}>{this.props.text}</h2>;
            case 3:
                return <h3 className={this.props.className}>{this.props.text}</h3>;
            case 4:
                return <h4 className={this.props.className}>{this.props.text}</h4>;
            case 5:
                return <h5 className={this.props.className}>{this.props.text}</h5>;
            case 6:
                return <h6 className={this.props.className}>{this.props.text}</h6>;
            default: break;
        }
    }

    render() {
        let text = this.props.size ? this.generateTitle(this.props.size) : this.props.text;
        return (
            <div className={this.props.classToDiv}>
                {text}
            </div>
        );
    }
}
