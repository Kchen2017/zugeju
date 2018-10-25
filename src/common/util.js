export function encode_url_params(params) {
    if(!params._t){
        //临时在这加吧。。。
        params._t = +new Date();
    }
    return "?"+Object.keys(params).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`).join('&');
}