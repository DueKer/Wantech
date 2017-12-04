<template>
	<div>
		<div class="szPassword-content">
			<div class="szPassword-content-header">
				设置支付密码
			</div>
			<div class="szPassword-from">
				<mt-field label="输入密码" placeholder="输入6位数以上密码"></mt-field>
				<mt-field label="确认密码" placeholder="再次输入密码" type=""></mt-field>
				<div class="szPassword-buttonCont">
					<mt-button>确定</mt-button>
				</div>

			</div>
		</div>

	</div>
</template>

<script>
</script>

<style>
	.szPassword-content-header {
		padding: 18px 15px;
		font-size: 19px;
		color: #555555;
	}
	
	.szPassword-from a {
		text-decoration: none;
	}
	
	.szPassword-from .mint-cell-wrapper {
		padding-left: 0;
		font-size: 15px;
	}
	
	.szPassword-from .mint-cell-wrapper .mint-cell-title {
		text-align: left;
		padding-left: 15px;
	}
	
	.szPassword-from .mint-cell-wrapper .mint-cell-value {
		font-size: 13px;
		margin-top: 5px;
	}
	
	.szPassword-buttonCont {
		width: 100%;
		margin-top: 30px;
		padding: 0 15px;
	}
	
	.szPassword-buttonCont .mint-button--normal {
		width: 100%;
		background: #f19e38;
		color: #FFFFFF;
	}
</style>