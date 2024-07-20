/**
 * Converts NamedNodeMap to a plain object.
 * @param attributes - NamedNodeMap from an element.
 * @returns {Object} - A plain object with attribute key-value pairs.
 */
const attributesToObject = (attributes: NamedNodeMap): { [key: string]: string } => {
    const obj: { [key: string]: string } = {};
    for (let i = 0; i < attributes.length; i++) {
        obj[attributes[i].name] = attributes[i].value;
    }
    return obj;
};

export default attributesToObject ;
