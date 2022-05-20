import axios from 'axios';

const baseURL = 'http://localhost:3000/users';

const handleError = (fn) => (...params) => 
    fn(...params).catch((error) => {
        console.log(error);
    });

export const api = {
    err: '',
    getUsers: handleError(async () => {
        const res = await axios.get(baseURL);
        return res.data;
    }),
    createUser: handleError(async (payload) => {
        const res = await axios.post(baseURL, payload).catch( (error) => {
            if (error.message){     
               console.log(error.message)
            }
        });
        return res.data;
    })
};