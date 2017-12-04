<template>
	<div>
		<div class="recharge-Content">
			<div class="recharge-Content-head">
				选择充值方式
			</div>
			<div class="recharge-middle">
				<div class="recharge-middle-item">
					<div class="cz-left cz_Wx">微信充值</div>
					<span class="span"></span>
				</div>
				<div class="recharge-middle-item marTop">
					<div class="recharge-middle-header">
						<div class="cz-left cz_bank">银行卡充值</div>
						<span class="span active"></span></div>
					<div class="add-bankMask">
						<div class="recharge-bankInfo">
							<div class="bankInfo-detail"><!--中国农业银行储蓄卡（4275）-->添加银行卡</div>
							<i class="select"></i>
						</div>
						<div class="recharge-bankInput">
							<label class="label">充值金额</label>
							<div class="srInput">
								<i class="buck">¥</i>
								<input type="" name="" id="" value="" class="moneyNum" />
							</div>
						</div>
					</div>
				</div>

				<div class="recharge-buttonCont">
					<mt-button>下一步</mt-button>
				</div>
			</div>
			<!--弹层-->
			<div class="bankMask">
				<div class="bankMask-content">
					<div class="bankMask-content-header">
						<p>选择充值银行卡</p>
						<span class="close_X">
							
						</span>
					</div>
					<div class="bankCard-Content">
						<div class="bankCard-item">
							<span class="bankImg">
								
							</span>
							<div class="card-item">招商银行 储蓄卡 (1345)</div>
						</div>
						<div class="bankCard-item">
							<span class="bankImg">
								
							</span>
							<div class="card-item">招商银行 储蓄卡 (1345)</div>
						</div>
						<div class="bankCard-item last-child">
							<div class="card-item">添加银行卡</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style>
	.recharge-Content-head {
		font-size: 15px;
		padding: 10px 15px;
		text-align: left;
	}
	
	.recharge-middle-item {
		border-bottom: 1px solid #E5E5E5;
		background: #FFFFFF;
		position: relative;
	}
	
	.recharge-middle .marTop {
		margin-top: 10px;
	}
	
	.cz-left {
		height: 44px;
		padding-left: 35px;
		text-align: left;
		line-height: 44px;
		margin-left: 15px;
	}
	
	.recharge-middle-item .cz_Wx {
		background: url(/static/img/cz_wx.jpg) no-repeat left center;
		background-size: 24px 25px;
	}
	
	.recharge-middle-item .cz_bank {
		background: url(/static/img/cz_bank.png) no-repeat left center;
		background-size: 25px 16px;
	}
	
	.recharge-middle-header{
		border-bottom: 1px solid #E5E5E5;
	}
	
	.recharge-middle-item .span {
		display: block;
		width: 21px;
		height: 21px;
		background: url(/static/img/cz_span.png) no-repeat;
		background-size: 20px;
		border-radius: 50%;
		position: absolute;
		right: 15px;
		top: 12px;
	}
	
	.recharge-middle-item .active {
		background: url(/static/img/cz_spanActive.png) no-repeat;
		background-size: 20px;
	}
	
	.add-bankMask {
		width: 100%;
		height: 130px;
		background: #FFFFFF;
		
	}
	
	.add-bankMask .recharge-bankInfo {
		padding: 15px;
		position: relative;
		width: 100%;
		font-size: 13px;
		text-align: left;
	}
	
	.add-bankMask .bankInfo-detail {
		margin-left: 30px;
		color: #999999;
	}
	
	.recharge-bankInfo .select {
		display: block;
		width: 17px;
		height: 10px;
		background: url(/static/img/cz_select.png) no-repeat;
		background-size: 17px 10px;
		position: absolute;
		right: 17px;
		top: 20px;
	}
	
	.recharge-bankInput {
		position: relative;
		display: flex;
		margin: 0 15px 0px 40px;
	}
	
	.recharge-bankInput .label {
		width: 130px;
		height: 70px;
		text-align: left;
		font-size: 15px;
		line-height: 70px;
	}
	
	.recharge-bankInput .srInput {
		width: 100%;
		position: relative;
	}
	
	.srInput .moneyNum {
		width: 100%;
		height: 70px;
		line-height: 70px;
		font-size: 30px;
		padding-left: 20px;
		border: none;
	}
	
	.recharge-bankInput .srInput .buck {
		font-size: 30px;
		position: absolute;
		left: 0;
		top: 0;
		font-style: normal;
		line-height: 70px;
	}
	
	.recharge-buttonCont {
		width: 100%;
		margin-top: 30px;
		padding: 0 15px;
	}
	
	.recharge-buttonCont .mint-button--normal {
		width: 100%;
		background: #f19e38;
		color: #FFFFFF;
	}
	
	.bankMask{
		width: 100%;
		height: 100%;
		position: fixed;
		left: 0;
		top: 0;
		background: rgba(0,0,0,.5);
	}
	
	.bankMask-content{
		width: 100%;
		background: #FFFFFF;
		margin: auto;
		position: absolute;
		left: 0;
		bottom: 0;
	}
	
	.bankMask-content-header{
		padding: 17px 15px;
		border-bottom: 1px solid #d5D5D5;
		position: relative;
		font-size: 14px;
	}
	
	.close_X{
		display: block;
		width: 14px;
		height: 14px;
		background: url(/static/img/close.png) no-repeat;
		background-size: 14px;
		position: absolute;
		left: 15px;
		top: 15px;
	}
		.bankCard-Content  {
			padding-bottom: 70px;
		}
	.bankCard-Content  .last-child{
		margin-left: 0;
		padding-left: 30px;
	}
	.bankCard-item{
		padding: 10px 15px;
		border-bottom: 1px solid #D5D5D5;
		text-align: left;
		position: relative;
		margin-left: 15px;
	}
	
	.bankCard-item .bankImg{
		display: block;
		width: 20px;
		height: 20px;
		background: red;
		border-radius: 50%;
		position: absolute;
		left: 15px;
		top: 10px;
	}
	
	.bankCard-item .card-item{
		padding-left: 35px;
		font-size: 15px;
	}
</style>