import axios from 'axios';
import { baseUrl } from '../config/variables';

export default {
    getNetworks() {
        console.log(baseUrl);
        return axios.get(baseUrl + 'wifi-scan')
            .then(response => {
                return response.data.results
                    .filter(network => network.ssid != '')
                    .sort((a,b) => a.ssid.toLowerCase() < b.ssid.toLowerCase() ? -1 : 1);
            })
    }
}