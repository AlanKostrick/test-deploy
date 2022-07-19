

export const upperCaseFirstLetter = value => {
    if (value.length > 0) {
        return value.substring(0, 1).toUpperCase() + value.substring(1);
    } else {
        return '';
    }
};