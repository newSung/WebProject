import axios from 'axios';

//로컬
// const axiosInstance = axios.create({
//     baseURL: 'http://localhost:3000'
// });

//배포
const axiosInstance = axios.create({
    baseURL: 'https://port-0-servertest-619z9h2lllkaic66.sel3.cloudtype.app',
    withCredentials: true,
});

export default axiosInstance;   