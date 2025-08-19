import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'9f83b11f8eb2422a94ee46ccbc3efea2'
    }
})