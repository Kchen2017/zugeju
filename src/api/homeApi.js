import request from "../common/request"
import { encode_url_params } from '../common/util.js'

export default{
	sendHomeApi(params){
		let url = "/api/home" + encode_url_params(params)
		return request.get(url)
	}
}



