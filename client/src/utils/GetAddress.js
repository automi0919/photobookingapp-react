import axios from "axios";

export default {

    getAddress: function (property) {

        const options = {
            method: 'GET',
            url: 'https://mashvisor-api.p.rapidapi.com/property',
            params: {
                state: property.state,
                zip_code: property.zip,
                address: property.street,
                city: property.city
            },
            headers: {
                'x-rapidapi-key': 'a28485e035mshea53364c530bf58p1f6a19jsn9a5ad2a4ac17',
                'x-rapidapi-host': 'mashvisor-api.p.rapidapi.com'
            }
        };

        return axios.request(options);
    },

}