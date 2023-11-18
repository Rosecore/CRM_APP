import axios from 'axios'
import { resultType } from '../../types/infoType'


export const adressSearching = async(query:string) =>{
    const options = {
         url : "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address",
         token : "c39bd16667164063714aeba9ce6045f81f686873",
    }
    try {
        const response = await axios.post<resultType>(options.url, JSON.stringify({query:query}), {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Token " + options.token
            }
          })
          if (!response){
            throw new Error()
          }
          return response.data
    }
    catch(e){
        throw new Error()
    }
    
}
