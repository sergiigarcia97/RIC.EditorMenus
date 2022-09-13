/**
 * Tipos de elemento HTML
 * @enum {String} contentType
 */
const contentType = {
    TITLE: "title",
    TEXT: "text",//no tiene el icono correcto, para FORMS es INPUT // GABI no le hagas caso
    INPUT: "input",
    RADIO: "radio",
    RADIO_LIST: "radiobuttonlist",
    RADIO_BUTTON: "radiobutton",
    CHECKBOX_LIST: "checkboxlist",
    CHECKBOX: "checkbox",
    LABEL: "label",
    IMAGE: "image",
    BUTTON: "button",
    DROPDOWN: "dropdownlist",
    TEXTAREA: "textarea",
    HYPERLINK: "hyperlink",
    WEBSERVICES: "webservices",
    UPLOAD: "upload",
    LITERALCONTROL: "literalcontrol",
    SECTION: "section",
    SEARCH: "search",
    TABLE: "table",
    NUMBER: "number",
    OPEN_SECTION: "open_section",
    CLOSE_SECTION: "close_section",
    IMPORTED_SECTION: "imported_section",
    DATE: "date",
    HOUR: "hour",
    EMAIL: "email",
    PREV_DOCUMENT: "prev_document",
    SIGN: "firma",
    PREV_DOCUMENT_SIGN: "prev_document_sign",
    BUTTON_NAVIGATION: "buttonNavigation"
}
export default contentType;