import axios from 'axios'
export default (method, url, data = null) => {
  return new Promise((resolve, reject) => {
    axios.defaults.baseURL = 'http://127.0.0.1:8000/api/v1/';

    axios.defaults.headers.common['Authorization'] = localStorage.getItem('auth._token.local');
    axios({
        method,
        url,
        data
    }).then(res => {
        resolve(res.data);
    }).catch(err => {
        reject(err);
    })
  })
};
