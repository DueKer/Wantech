<template>
	<div>
		<div class="register-content">
			<div class="register-content-header">
				授权登录
			</div>
			<div class="register-from">
				
				<mt-field label="手机号" placeholder="请输入手机号" type="email">
				</mt-field>
				<mt-field label="验证码" placeholder="请输入验证码" type="email">
					<span class="yzm">获取验证码</span>
				</mt-field>
				<div class="register-buttonCont">
					<mt-button>确认授权</mt-button>
					<p class="status">登录即为同意<span>《万天互娱用户协议》</span></p>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
</script>

<style>
	.register-content-header {
		padding: 18px 15px;
		font-size: 19px;
		color: #555555;
	}
	
	.register-from a {
		text-decoration: none;
	}
	
	.register-from .mint-cell-wrapper {
		padding-left: 0;
		font-size: 15px;
	}
	
	.register-from .mint-cell-wrapper .mint-cell-title {
		text-align: left;
		padding-left: 15px;
	}
	
	.register-from .mint-cell-wrapper .mint-cell-value {
		font-size: 13px;
		margin-top: 5px;
	}
	
	.register-from .mint-cell-wrapper .mint-cell-value .mint-field-core {
		background: #FFFFFF;
	}
	
	.register-buttonCont {
		width: 100%;
		margin-top: 30px;
		padding: 0 15px;
	}
	
	.register-from-item {
		margin-bottom: 10px;
	}
	
	.register-buttonCont .mint-button--normal {
		width: 100%;
		background: #f19e38;
		color: #FFFFFF;
	}
	
	.register-from .yzm {
		display: block;
		width: 100px;
		height: 30px;
		line-height: 30px;
		background: #f19e38;
		color: #FFFFFF;
		border-radius: 3px;
		margin-top: -5px;
	}
	
	.register-buttonCont .status{
		text-align: left;
		font-size: 12px;
		margin-top: 5px;
	}
	.register-buttonCont .status span{
		color: #f19e38;
	}
</style>