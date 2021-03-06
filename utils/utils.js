export const chainValuesToString = (values) => values.join(' ')

export const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1)

export const generateRandomNumber = () => new Date().valueOf()

export const checkAuthUserData = (users, loginData, key) => {
    return users.some((user) => {
        const searchedValue = loginData.find(data => data.label.toLowerCase() === key).value
        return user[key] === searchedValue
    })
}