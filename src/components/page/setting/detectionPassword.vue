<template>
	<div>
		<div class="register-content">
			<div class="register-content-header">
				请输入支付密码，以验证身份
			</div>
			<div class="register-from">
				<mt-field label="密码" placeholder="请输入密码" type="password" v-model="yz_Passwoed"></mt-field>
				<div class="register-buttonCont">
					<mt-button @click="yzBtn">确定</mt-button>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	import { MessageBox } from 'mint-ui';
	import { mapState, mapMutations } from 'vuex';
	import { ckeckPassword } from 'src/service/getData';
	import { ApiConst } from 'src/utils/mConst';
	import { getGlobalToken } from 'src/utils/mGlobal';
	import { getTimeStamp, getNonceStr } from 'src/utils/mUtils';
	import login from 'src/plugins/login';
	import crypto from 'crypto';
	export default {
		data() {
			return {
				yz_Passwoed: ""
			}
		},
		created() {
			this.initUserInf();
		},
		mounted() {
			console.log(this.iflogin)
			if(this.iflogin == true) {
				console.log("成功")
				//this.discountData();
			} else {
				login(this);
				console.log("失败哎")
			}

		},
		computed: {
			...mapState([
				'userInfo', 'iflogin'
			]),
		},
		methods: {
			...mapMutations([
				'RECORD_USERINFO', 'GET_USERINFO'
			]),
			initUserInf() {
				// 从缓存中读取用户信息，包括token与uid
				this.GET_USERINFO();
				if(this.userInfo && this.userInfo.token && this.userInfo.uid) {
					var token = this.userInfo.token;
					var uid = this.userInfo.uid;
					//TODO: 初始化页面中的用户数据
				}
			},
			async checkData() {
				let _self=this;
				let password = crypto.createHash('md5',_self.yz_Passwoed).digest('hex');
				let checkPassword = await ckeckPassword(password);
				if(checkPassword.result == ApiConst.ERROR_SUCCESS) {
					
					this.$router.push('/member/bankCation');
				} else {
					MessageBox({
						message: '验证身份出错',
						showCancelButton: true
					});
				}
				console.log(checkPassword, "11111111111111");
			},
			yzBtn() {
				this.checkData();

			}
		}
	}
</script>

<style>
	@import "/static/css/page/register.css";
</style>