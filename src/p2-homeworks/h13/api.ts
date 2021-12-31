import axios, { AxiosResponse } from 'axios';

const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/',
})

export const requestsAPI: RequestsAPIType = {
    getPost(check: boolean) {
        return instance.post<boolean, AxiosResponse>(`auth/test`,{success: check})
    }
}
type RequestsAPIType = {
    getPost: (check: boolean) => Promise<any>
}

