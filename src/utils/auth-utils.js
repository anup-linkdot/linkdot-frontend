const checkPassword = (password, re_password) => {
    if (password === re_password && password !== '')
        return true
    else return false
}

const validateEmail = (email) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return (true)
    }
    return (false)
}

const setStorage = (data, value) => {
    localStorage.setItem(data, value)
}

const getStorage = (data) => {
    return localStorage.getItem(data)

}

const removeStorage = (data) => {
    localStorage.removeItem(data)
}

const isAuthenticated = () => {
    const userToken = getStorage("token");
    if (userToken) {
        return true;
    }
    return false;
}

export { checkPassword, validateEmail, setStorage, getStorage, isAuthenticated, removeStorage }