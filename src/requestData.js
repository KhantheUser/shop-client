import axios from 'axios'

const BASE_URL = process.env.REACT_APP_URL_SERVER
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOGIxZWZlYjNjNmZhNjVmY2M1ODdiZiIsImlhdCI6MTY3MDE0NTQ4NSwiZXhwIjoxNjcxODczNDg1fQ.m02LqitNxtZQSwe-EQtp278efB79rFR129JUIuHiJQ8'
export const publicRequest =  axios.create({
    baseURL : BASE_URL,
    withCredentials : false
})

export const userRequest = axios.create({
    baseURL : BASE_URL,
    withCredentials:false,
    headers : {
        token : `Bearer ${TOKEN}`
    }
})