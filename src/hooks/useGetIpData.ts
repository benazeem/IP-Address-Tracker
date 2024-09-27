import axios from "axios";
const apiKey = import.meta.env.VITE_MAP_API_KEY

export const useGetIpData = async (ip: string)=>{

    try {
        const response = await axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&domain=${ip}`)
        const data = response.data
        console.log(data)
        return data
    } catch (error) {
        console.log(error as Error)
        throw error;
    }
}

