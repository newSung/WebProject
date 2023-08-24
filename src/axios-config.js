import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://port-0-servertest2-619z9h2lllkpq5cz.sel3.cloudtype.app'
});

export default axiosInstance;