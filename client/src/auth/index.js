export const authenticate = token => {
    localStorage.setItem("compare_price_jwt", token)
}

export const getToken = () => {
    return localStorage.getItem("compare_price_jwt") || undefined;
}

export const removeToken = () => {
    localStorage.removeItem("compare_price_jwt")
}