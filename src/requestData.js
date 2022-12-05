import axios from 'axios'

const BASE_URL = process.env.REACT_APP_URL_SERVER
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOGIxZWZlYjNjNmZhNjVmY2M1ODdiZiIsImlhdCI6MTY3MDE0NTQ4NSwiZXhwIjoxNjcxODczNDg1fQ.m02LqitNxtZQSwe-EQtp278efB79rFR129JUIuHiJQ8'
export const publicRequest =  axios.create({
    baseURL : BASE_URL,
    withCredentials : false,
    headers: {
        "Access-Control-Allow-Origin":
          "https://wordle-react-project.netlify.app/",
        "Access-Control-Allow-Methods": [
          "POST",
          "GET",
          "OPTIONS",
          "DELETE",
          "PUT",
        ],
        "Access-Control-Allow-Headers": [
          "append",
          "delete",
          "entries",
          "foreach",
          "get",
          "has",
          "keys",
          "set",
          "values",
          "Authorization",
        ],
      },
})

export const userRequest = axios.create({
    baseURL : BASE_URL,
    withCredentials:false,
    
    headers: {
        token : `Bearer ${TOKEN}`,
        "Access-Control-Allow-Origin":
          "https://wordle-react-project.netlify.app/",
        "Access-Control-Allow-Methods": [
          "POST",
          "GET",
          "OPTIONS",
          "DELETE",
          "PUT",
        ],
        "Access-Control-Allow-Headers": [
          "append",
          "delete",
          "entries",
          "foreach",
          "get",
          "has",
          "keys",
          "set",
          "values",
          "Authorization",
        ],
      },
})