
export const handleResponse = async response => {
    return response.data;
}
export const handleError = async error => {
    console.log("this is an error", error)
}