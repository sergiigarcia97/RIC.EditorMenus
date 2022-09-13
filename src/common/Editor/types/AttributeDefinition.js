/**
 * Definición de un atributo
 * @function AttributeDefinition
 */
export default function AttributeDefinition(type, visible, editable, required, defaultValue, label, helpText, internal, tab) {
    this.type = type;
    this.visible = visible;
    this.editable = editable;
    this.required = required;
    this.defaultValue = defaultValue;
    this.label = label;
    this.helpText = helpText;
    this.internal = internal;
    this.tab = tab;
}