import Axios from "axios"
import { DOMAIN_JIRA } from "../util/constants/settingSystem"

export const jiraService = {
    signinJira: (userLogin) =>{
        return Axios({
            url:`${DOMAIN_JIRA}/users/signin`,
            method:'POST',
            data: userLogin
        }) 
    }
}