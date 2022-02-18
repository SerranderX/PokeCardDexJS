
const toUpperCaseIndex = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const transformString = (text) => {
    return text.replace(/(\r\n|\n|\r|\f)/gm, " ");
}

export {toUpperCaseIndex, transformString};