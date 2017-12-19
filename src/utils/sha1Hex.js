
import crypto from 'crypto'
import {SECRET_KEY} from './mConst'

// args: ["111", "222", "333"......]
export const makeSignature = (args) => {
	
	/*console.log(arr)
	let ts=getTimeStamp();
	let nonce=getNonceStr();
	*/
	
	let arg = args;
	arg.push(SECRET_KEY);
	console.log(arg);
	let keyArr = arg.sort();
	console.log(keyArr);
	let signStr = '';
	
	for (var k = 0;k<keyArr.length; k++) {
		console.log(keyArr[k]);
		signStr += `${arg[k]}`;
	}

	//console.log(signStr)
	
	return crypto.createHash('sha1',SECRET_KEY).update(signStr).digest('hex');
	

}


	
//	console.log(key)
	// sig: 69ddd0ac1409415e735f7a0973d74e584b5eb53c

	
	//String ApiAESKey = "XL1xgx3Y6b43zTrCQNBgcakKDGOE7QIV0TBSsFHMq1A";	// 给api调用的AES对称加密算法密钥
//for:
