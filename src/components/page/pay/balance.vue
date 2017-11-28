<template>
	<div>
		<div class="accountCont">
			<p class="titleImg"><span><img src="/static/img/balance.png"/></span></p>
			<p class="titleHed"><span>账户余额</span></p>
			<p class="zh-number">¥<span>2888.00</span></p>

			<div class="accountCont-button">
				<div class="recharge">
					<router-link to="/pay/recharge">充值</router-link>
				</div>
				<div class="withdraw">
					<router-link to="/pay/withdraw">提现</router-link>
				</div>
			</div>

		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		}
	}
</script>

<style>
	.accountCont {
		padding: 20px 15px;
	}
	
	.accountCont .titleImg {
		text-align: center;
	}
	
	.accountCont .titleImg span {
		display: block;
		width: 60px;
		height: 61px;
		margin: auto;
	}
	
	.accountCont .titleImg span img {
		width: 100%;
		height: 100%;
	}
	
	.accountCont .titleHed {
		text-align: center;
		margin-top: 16px;
		font-size: 15px;
		color: #222222;
	}
	
	.accountCont .zh-number {
		font-size: 24px;
		text-align: center;
	}
	
	.accountCont-button {
		margin-top: 30px;
	}
	
	.recharge a ,
	.withdraw a{
		display: block;
		border-radius: 4px;
		border: 0;
		background: #f19e38;
		box-sizing: border-box;
		color: #FFFFFF;
		font-size: 18px;
		height: 41px;
		line-height: 41px;
		outline: 0;
		overflow: hidden;
		position: relative;
		text-align: center;
		text-decoration: none;
	}
	.accountCont-button .withdraw {
		margin-top: 20px;
	}
	.accountCont-button .withdraw  a{
		background: #FFFFFF;
		color: #f19e38;
		border: 1px solid #f19e38;
	}
	
</style>