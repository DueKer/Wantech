import fetch from '../utils/fetch'
import {getStore} from '../utils/mUtils'

/**
 * 登录, by: code and state
 */
export const loginByCode = (code,state) => fetch('/api/wantech/wxweb/login', {
	code: code,
	state: state,
}, 'GET');

/**
 * 登录, by: token and uid
 */
export const loginByToken = (token,uid) => fetch('/api/wantech/wxweb/login', {
	token: token,
	uid: uid,
	timestamp: 0,
	nonce: '',
	signature: '',
}, 'GET');

// /**
//  * 获取短信验证码
//  */
//
// export const mobileCode = phone => fetch('/anonym/verify_code/send', {
// 	mobile: phone,
// 	scene: 'login',
// 	type: 'sms'
// }, 'POST');
//
// /**
//  * 获取图片验证码
//  */
//
// export const getcaptchas = () => fetch('/anonym/captchas/get', {},'POST');
//
// /**
//  * 获取服务中心信息
//  */
//
// export const getService = () => fetch('/anonym/profile/explain');
//
// /**
//  * 获取用户信息
//  */
//
// export const getUser = () => fetch('/user/info', {user_id: getStore('user_id')});
//
// /**
//  * export const shopList = (latitude, longitude, offset, restaurant_category_id = '', restaurant_category_ids = '', order_by = '', delivery_mode = '', support_ids = [])
//  */
