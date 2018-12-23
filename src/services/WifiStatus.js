import axios from 'axios';
import { baseUrl } from '../config/variables';

export default {
    getStatus() {
        console.log(baseUrl);
        return axios.get(baseUrl + 'wifi-status')
            .then(response => {
                return response.data;
            })
    }
}