import axios from "axios";

const userApi = {
// gets all users 

getUsers: function(){
return axios.get("https://randomuser.me/api/?results=200@nat=us");

}

};


export default userApi