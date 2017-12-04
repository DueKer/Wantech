<template>
	<div>
		<div class="certif-content">
			<div class="certif-content-header">
				实名认证
			</div>
			<div class="certif-from">
				<form :model="ruleForm">
					<mt-field label="用户名" placeholder="请输入用户名" v-model="ruleForm.username"></mt-field>
					<mt-field label="身份证号码" placeholder="请输入身份证号码" type="email" v-model="ruleForm.emial"></mt-field>
					<div class="certif-buttonCont">
						<mt-button @click="submitForm(formName)">认证</mt-button>
					</div>
				</form>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		data:function() {
			return {
				ruleForm: {
					username: '',
					userpwd: ''
				}
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.certif-content-header {
		padding: 18px 15px;
		font-size: 19px;
		color: #555555;
	}
	
	.certif-from a {
		text-decoration: none;
	}
	
	.certif-from .mint-cell-wrapper {
		padding-left: 0;
		font-size: 15px;
	}
	
	.certif-from .mint-cell-wrapper .mint-cell-title {
		text-align: left;
		padding-left: 15px;
	}
	
	.certif-from .mint-cell-wrapper .mint-cell-value {
		font-size: 13px;
		margin-top: 5px;
	}
	
	.certif-buttonCont {
		width: 100%;
		margin-top: 30px;
		padding: 0 15px;
	}
	
	.certif-buttonCont .mint-button--normal {
		width: 100%;
		background: #f19e38;
		color: #FFFFFF;
	}
</style>
<!--<template>
	<div class="moma">
		<form>
			<mt-field label="用户名" placeholder="请输入用户名" v-model="ruleForm.username"></mt-field>
			
			<div class="login-btn">
				<mt-button type="danger" @click="submitForm('ruleForm')" >注册</mt-button>
			</div>
		</form>
	</div>

</template>

<script>
	import { Field } from 'mint-ui';
	import { Checklist } from 'mint-ui';

	export default {
		name: "moma",
		data: function() {
			return {
				ruleForm: {
					username: '',
					
				}
			}
		},
		methods: {
			submitForm(formName) {
				const self = this;
				/*var params = new URLSearchParams();
				params.append('redirect_uri', self.ruleForm.username);*/
				self.$axios.get('https://wx.hengyangphz.com/api/wantech/wxweb/oauth2code?redirect_uri=1').then(function(res) {})

			}

		}
	}
</script>

<style>
	.mid-check {
		width: 100%;
		min-height: 30px;
		overflow: hidden;
		border-top: 1px solid #d9d9d9;
		border-bottom: 1px solid #d9d9d9;
	}
	.mint-checklist-label .mint-checkbox-label {
		display: none;
		text-align: left;
	}
	
	.mint-checklist .mint-checklist-title{
		display: none;
	}
	.mid-check {
		position: relative;
	}
	
	.mid-check .mint-cell-wrapper {
		border: none;
		background: none;
	}
	.mid-check .mint-cell-wrapper .mint-checklist-label{
		text-align: left;
	}
	.mid-check .mint-checklist{
		float: left;
	}
	.ms-content{
		display: block;
		text-align: left;
		margin-top: 12px;
	}
	.mid-check .mint-checklist .mint-cell{
		background: none;
		width: 50px;
	}
</style>-->
