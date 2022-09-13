/**
 * Tipos de validaciones posibles a realizar sobre el valor de un atributo
 * @enum {String} validationType
 */
const validationType = {
    REQUIRED: "required",
    CONDITIONED: "conditioned",
    NUMERIC: "numeric",
    MINVALUE: "minValue",
    MAXVALUE: "maxValue",
    DISTINCTKEYS: "distinctKeys",
    DISTINCTVALUES: "distinctValues"
}

export default validationType;