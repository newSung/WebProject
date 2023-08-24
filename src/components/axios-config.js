import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://port-0-servertest-619z9h2lllkaic66.sel3.cloudtype.app'
});

export default axiosInstance;