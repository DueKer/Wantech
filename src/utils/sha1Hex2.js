/*
import crypto from 'crypto'
import {SECRET_KEY} from './mConst'

// args: ["111", "222", "333"......]
export const makeSignature = (args) => {

	console.log(args);
	let constObj = {
		//key:SECRET_KEY
//		nonce:getNonceStr(),
//		ts:getTimesTamp()

		nonce:'-2049485243',
		ts:'1511515740'
	}
	
	/*let arg = Object.assign(args,constObj)
	console.log(arg,'++++');
	let keyArr = Object.keys(arg).sort();
	console.log(keyArr)*/
	//let key = ["token", "uid", "ts", "nonce"].sort();
/*	let arg = args;
	arg.push(SECRET_KEY);
	
	let keyArr = arg.sort();
	

	let signStr = ''
	
	for (var k = 0;k<keyArr.length; k++) {
		signStr += `${arg[k]}`;
	}*/

	
	//signStr = signStr.trim().slice(0, signStr.length - 1);
	//console.log(signStr);
	//return crypto.createHmac('sha1',SECRET_KEY).update(signStr).digest('hex');


	//console.log(signStr)
	

	/*return crypto.createHash('sha1',SECRET_KEY).update(signStr).digest('hex');
	
	
	function getTimeStamp() {
		//现在这样是 时间戳  /1000 是毫秒
	    return parseInt(new Date().getTime()) + '';
	}
	
	function getNonceStr() {
	    return Math.random().toString(36).substr(2, 15);
	}
}
*/
//	console.log(key)
	// sig: 69ddd0ac1409415e735f7a0973d74e584b5eb53c
	//token: 1480a7efd1c357a85c1eca91c974fd77
    //uid: 51
    //ts: 1511515740
    //nonce: -2049485243
    //sig: 69ddd0ac1409415e735f7a0973d74e584b5eb53c

	
	//String ApiAESKey = "XL1xgx3Y6b43zTrCQNBgcakKDGOE7QIV0TBSsFHMq1A";	// 给api调用的AES对称加密算法密钥
//for:



import crypto from 'crypto'
import {SECRET_KEY} from './mConst'

// args: ["111", "222", "333"......]
export const makeSignature = (args) => {
	let arg = args;
	arg.push(SECRET_KEY);
	
	let keyArr = arg.sort();
	
	let signStr = ''
	
	for (var k = 0;k<keyArr.length; k++) {
		signStr += `${arg[k]}`
	}

	console.log(signStr)
	
	return crypto.createHash('sha1',SECRET_KEY).update(signStr).digest('hex');
	
	/*
	function getTimeStamp() {
		//现在这样是 时间戳  /1000 是毫秒
	    return parseInt(new Date().getTime()) + '';
	}
	
	function getNonceStr() {
	    return Math.random().toString(36).substr(2, 15);
	}//*/
}

//	console.log(key)
	// sig: 69ddd0ac1409415e735f7a0973d74e584b5eb53c

	
	//String ApiAESKey = "XL1xgx3Y6b43zTrCQNBgcakKDGOE7QIV0TBSsFHMq1A";	// 给api调用的AES对称加密算法密钥
//for: