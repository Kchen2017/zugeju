import Axios from "axios"

export default {
	get(url){
		return Axios.get(url)
	}
}