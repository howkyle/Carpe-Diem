import react from 'react';


export const handleResponse = async response => {
    console.log("handle response", response.data)
    return response.data;
}
export const handleError = async error => {
    console.log("this is an error", error)
}