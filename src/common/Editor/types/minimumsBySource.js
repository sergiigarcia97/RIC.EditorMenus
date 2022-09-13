
/**
 * mínimo de opciones/filas/columnas/atributos para posibles orígenes o destinos de transformación de JSON / carga de componentes
 * @object {} minimumsBySource
 */
const minimumsBySource = {
    "FORMS": {
        minimumRows: 1,
        minimumColumns: 1,
        minimumRadios: 1,
        minimumChecks: 1,
        minimumDropdown: 1,
        minimumAttributes: 0
    },
    "VID": {
        minimumRows: 1,
        minimumColumns: 1,
        minimumRadios: 1,
        minimumChecks: 1,
        minimumDropdown: 1,
        minimumAttributes: 0
    },
    "CORE": {
        minimumRows: 1,
        minimumColumns: 1,
        minimumRadios: 1,
        minimumChecks: 1,
        minimumDropdown: 1,
        minimumAttributes: 0
    }
}
export default minimumsBySource;