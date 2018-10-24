import request from "../common/request"

export default{
	sendHomeApi(params){
		let url = "/api/home"
		return request.get(url)
	}
}



