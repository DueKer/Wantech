<template>
	<div>
		<div class="bankCation-content">
			<div class="bankCation-content-header">
				请绑定持卡人本人的银行卡
			</div>
			<div class="bankCation-from">
				<mt-field label="持卡人" placeholder="请输入用户名"></mt-field>
				<mt-field label="卡号" placeholder="请输入身份证号码" type="email">
				</mt-field>
				<div class="bankCation-buttonCont">
					<mt-button >下一步</mt-button>
				</div>

			</div>
		</div>

	</div>
</template>

<script>
</script>

<style>
	.bankCation-content-header {
		padding: 18px 15px;
		font-size: 19px;
		color: #555555;
		
	}
	
	.bankCation-from a {
		text-decoration: none;
	}
	
	.bankCation-from .mint-cell-wrapper {
		padding-left: 0;
		font-size: 15px;
	}
	
	.bankCation-from .mint-cell-wrapper .mint-cell-title {
		text-align: left;
		padding-left: 15px;
	}
	
	.bankCation-from .mint-cell-wrapper .mint-cell-value {
		font-size: 13px;
		margin-top: 5px;
	}
	
	.bankCation-buttonCont {
		width: 100%;
		margin-top: 30px;
		padding: 0 15px;
	}
	
	.bankCation-buttonCont .mint-button--normal {
		width: 100%;
		background: #f19e38;
		color: #FFFFFF;
	}
</style>