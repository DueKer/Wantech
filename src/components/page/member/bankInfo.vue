<template>
	<div>
		<div class="bankInfo-content">
			<div class="bankInfo-content-header">
				请选择银行卡类型
			</div>
			<div class="bankInfo-from">
				<div class="bankInfo-from-item">
					<mt-field label="卡类型" placeholder="建行" disabled="disabled"></mt-field>
				</div>
				<mt-field label="手机号" placeholder="请输入手机号" type="email">
				</mt-field>
				<mt-field label="手机验证码" placeholder="请输入验证码" type="email">
					<span class="yzm">获取验证码</span>
				</mt-field>
				<div class="bankInfo-buttonCont">
					<mt-button>下一步</mt-button>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
</script>

<style>
	.bankInfo-content-header {
		padding: 18px 15px;
		font-size: 19px;
		color: #555555;
	}
	
	.bankInfo-from a {
		text-decoration: none;
	}
	
	.bankInfo-from .mint-cell-wrapper {
		padding-left: 0;
		font-size: 15px;
	}
	
	.bankInfo-from .mint-cell-wrapper .mint-cell-title {
		text-align: left;
		padding-left: 15px;
	}
	
	.bankInfo-from .mint-cell-wrapper .mint-cell-value {
		font-size: 13px;
		margin-top: 5px;
	}
	
	.bankInfo-from .mint-cell-wrapper .mint-cell-value .mint-field-core {
		background: #FFFFFF;
	}
	
	.bankInfo-buttonCont {
		width: 100%;
		margin-top: 30px;
		padding: 0 15px;
	}
	
	.bankInfo-from-item {
		margin-bottom: 10px;
	}
	
	.bankInfo-buttonCont .mint-button--normal {
		width: 100%;
		background: #f19e38;
		color: #FFFFFF;
	}
	
	.bankInfo-from .yzm {
		display: block;
		width: 100px;
		height: 30px;
		line-height: 30px;
		background: #f19e38;
		color: #FFFFFF;
		border-radius: 3px;
		margin-top: -5px;
	}
</style>