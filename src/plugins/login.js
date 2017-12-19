import { loginByCode, loginByToken } from 'src/service/getData'
import { doAuthRedirect } from 'src/service/redirect'

export default async(o, callback) => {
	let _this = o;
	var code = _this.$route.query.code;
	var state = _this.$route.query.state;
	var step = _this.$route.query.step;
	var uid = _this.$route.query.uid;
	var token = _this.$route.query.token;
	var info;

	console.log("code: %s, state: %s, step: %s", code, state, step);
	if(code && state) {
		// 登录, 获取用户信息，包括token与uid
		info = await loginByCode(code, state);
	} else if(_this.userInfo && _this.userInfo.token && _this.userInfo.uid) {
		var token = _this.userInfo.token;
		var uid = _this.userInfo.uid;
		// 登录, 获取用户信息，包括token与uid
		info = await loginByToken(_this.userInfo.token, _this.userInfo.uid);
	} else if(token && uid) {
		info = await loginByToken(token, uid);
	} else {
		if(!step) {
			doAuthRedirect('/member/center?step=1');
		} else {
			alert("参数错误");
		}
		
		return;
	}
	
	console.log(info);
	procLoginResult(_this,info, callback);
	return;	
	
	function procLoginResult(_this,info, callback) {
		
		if(info.result == ApiConst.ERROR_SUCCESS) {
			let userInfo = info.data;
			console.log(userInfo);
			setGlobalToken(userInfo.token);
			_this.RECORD_USERINFO(userInfo);
			
			if (callback) {
				callback(userInfo);	
			}
		} else if(info.result == ApiConst.ERROR_INVALID_TOKEN) {
			// token已过期无效,重新授权登录
			doAuthRedirect('/member/center?step=1');
		} else if(info.result == ApiConst.ERROR_FAIL) {
			MessageBox.alert(info.message,"登录失败");
			console.log(2122)
		}
	}
}