import {WX_APP_ID, WX_APP_STATE} from '../utils/mConst'
import {wxCodeUrl,wxWebUrl} from '../../config/env'
//import StringBuffer from 'src/utils/StringBuffer'

/**
 * 重定向到请求微信授权url
 * params: callback(回调地址)
 * /wxoauth2/getwxcode.html
 * /api/wantech/wxweb/oauth2code
 */
export const doAuthRedirect = callback => {
	callback = wxWebUrl + callback;

/*
	var sb = new StringBuffer();
	sb.append(wxCodeUrl).append("/wxoauth2/getwxcode.html?appid=")
	  .append(WX_APP_ID).append("&state=").append(WX_APP_STATE)
	  .append("&scopy=snsapi_userinfo")
	  .append("&redirect_uri=").append(encodeURIComponent(callback));

	var redirectUri = sb.toString();
*/
	var path = "/api/wantech/wxweb/oauth2code";
	//var path = "/wxoauth2/getwxcode.html";

    var redirectUri = wxCodeUrl + path 
      + "?appid=" + WX_APP_ID + "&state=" + WX_APP_STATE
	  + "&scope=snsapi_userinfo"
	  + "&redirect_uri=" + encodeURIComponent(callback);

	console.log("redirectUri:"+redirectUri)
	location.href = redirectUri;
}
