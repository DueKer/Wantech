/**
 * 配置编译环境和线上环境之间的切换
 *
 * apiUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 * wxCodeUrl: 微信授权登录地址
 * wxWebUrl: 本项目前端地址
 */

let apiUrl = '';
let wxWebUrl = window.location.protocol+"//"+window.location.host;
let routerMode = 'history';
let imgBaseUrl = 'http://imgs.szwantech.com';
let wxCodeUrl = 'https://wx.hengyangphz.com';

console.log("env: " + process.env.NODE_ENV)

if (process.env.NODE_ENV == 'development') {
    //apiUrl = 'http://192.168.1.194:8086/javashop';
    apiUrl = 'https://jsapi-sandbox.hengyangphz.com';
    wxWebUrl = "https://wxweb.hengyangphz.com"
} else if (process.env.NODE_ENV == 'test') {
	apiUrl = 'https://jsapi-sandbox.hengyangphz.com';
} else if (process.env.NODE_ENV == 'production') {
	apiUrl = 'https://jsapi.szwantech.com';
	//wxWebUrl = 'https://wxweb.szwantech.com';
}

export {
	apiUrl,
	routerMode,
	imgBaseUrl,
	wxCodeUrl,
	wxWebUrl,
}
