export const chainValuesToString = (values) => values.join(' ')

export const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1)

export const generateRandomNumber = () => new Date().valueOf()