export const filterUsersList = searchedPhrase => user => {
    const value = searchedPhrase.toLocaleLowerCase()
    return user.firstname.toLowerCase().includes(value) || user.lastname.toLowerCase().includes(value)
}

export const findUser = userId => user => user.id === userId