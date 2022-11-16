import axios from "axios"

export const GetApi = async () => {
  return await axios.get(`https://express-server-saydaleivs.vercel.app/get`)
}
