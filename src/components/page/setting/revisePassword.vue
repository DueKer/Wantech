<template>
	<div>
		<div class="revamp-content">
			<div class="revamp-content-header">
				修改支付密码
			</div>
			<div class="revamp-from">
				<mt-field label="输入密码" placeholder="输入6位数以上密码"></mt-field>
				<mt-field label="确认密码" placeholder="再次输入密码" type=""></mt-field>
				<div class="revamp-buttonCont">
					<mt-button>确定</mt-button>
				</div>

			</div>
		</div>

	</div>
</template>

<script>
</script>

<style>
	.revamp-content-header {
		padding: 18px 15px;
		font-size: 19px;
		color: #555555;
	}
	
	.revamp-from a {
		text-decoration: none;
	}
	
	.revamp-from .mint-cell-wrapper {
		padding-left: 0;
		font-size: 15px;
	}
	
	.revamp-from .mint-cell-wrapper .mint-cell-title {
		text-align: left;
		padding-left: 15px;
	}
	
	.revamp-from .mint-cell-wrapper .mint-cell-value {
		font-size: 13px;
		margin-top: 5px;
	}
	
	.revamp-buttonCont {
		width: 100%;
		margin-top: 30px;
		padding: 0 15px;
	}
	
	.revamp-buttonCont .mint-button--normal {
		width: 100%;
		background: #f19e38;
		color: #FFFFFF;
	}
	
</style>