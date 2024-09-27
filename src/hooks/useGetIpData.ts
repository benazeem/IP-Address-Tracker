import axios from "axios";

export const useGetIpData = async (ip: string)=>{
    try {
        const response = await axios.get(`http://ip-api.com/json/${ip}`)
        const data = response.data
        return data
    } catch (error) {
        console.log(error as Error)
        throw error;
    }
}

