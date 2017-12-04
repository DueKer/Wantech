<template>
	<div>
		<div class="emailCation-content">
			<div class="emailCation-content-header">
				邮箱绑定
			</div>
			<div class="emailCation-from">
				<div class="emailCation-from-item">
					<mt-field placeholder="请输入邮箱地址"></mt-field>
				</div>
				<div class="emailCation-buttonCont">
					<p class="status">请登录邮箱查收邮件并验证</p>
					<mt-button>发送验证邮件</mt-button>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
</script>

<style>
	.emailCation-content-header {
		padding: 18px 15px;
		font-size: 19px;
		color: #555555;
	}
	
	.emailCation-from a {
		text-decoration: none;
	}
	
	.emailCation-from .mint-cell-wrapper {
		padding-left: 0;
		font-size: 15px;
	}
	
	.emailCation-from .mint-cell-wrapper .mint-cell-title {
		text-align: left;
		padding-left: 15px;
	}
	
	.emailCation-from .mint-cell-wrapper .mint-cell-value {
		font-size: 13px;
		margin-top: 5px;
	}
	
	.emailCation-from .mint-cell-wrapper .mint-cell-value .mint-field-core {
		background: #FFFFFF;
		padding-left: 15px;
	}
	
	.emailCation-buttonCont {
		width: 100%;
		margin-top: 30px;
		padding: 0 15px;
	}
	
	.emailCation-from-item {
		margin-bottom: 10px;
	}
	
	.emailCation-buttonCont .mint-button--normal {
		width: 100%;
		background: #f19e38;
		color: #FFFFFF;
	}
	
.emailCation-buttonCont .status{
	display: none;
	text-align: left;
	font-size: 15px;
	color: #dd3e3e;
	margin-bottom: 5px;
}
</style>