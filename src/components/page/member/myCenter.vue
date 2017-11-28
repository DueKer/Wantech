<template>
	<div>
		
		<div class="center-header">
			<div class="center-info">
				<span class="center-info-img">
								<img src="/static/img/Avatar.png"/>
							</span>
				<div class="info-right">
					<p class="account">账号:<span>123456</span></p>
					<p class="grade">账户等级：<span>1</span></p>
				</div>
			</div>
			<div class="center-score">
				<div class="center-scoreLeft">
					账户：<span>¥288.00</span>
				</div>
				<div class="center-scoreRight">
					<router-link to="/pay/balance">充值提现</router-link>
				</div>
			</div>
			<div class="myScore">
				<div class="myScore-left">
					<router-link to="/score/myscore" class="myScore-link">
						<p class="Bimg"><img src="/static/img/jifen.png" /></p>
						<p class="font">我的积分</p>
					</router-link>
				</div>
				<div class="myScore-right">
					<router-link to="/member/coupon" class="myScore-link">
						<p class="Bimg"><img src="/static/img/youhuijuan.png" /></p>
						<p class="font">我的优惠券</p>
					</router-link>
				</div>
			</div>
		</div>
		<div class="center-middle">
			<div class="headline">
				<h1>会员权益</h1></div>
			<div class="center-menu">
				<div class="center-menu-ietm">
					
					<router-link to="/member/discount" class="mint-cell">
						<div class="mint-cell-wrapper">
							<div class="mint-cell-title">
								<div><i class="indexicon icon-toast"></i> <span class="name">折扣优惠</span></div>
							</div>
						</div>
						<div class="mint-cell-right"></div> <i class="mint-cell-allow-right"></i>
					</router-link>
					<router-link to="/wallet" class="mint-cell">
						<div class="mint-cell-wrapper">
							<div class="mint-cell-title">
								<div><i class="indexicon icon-toast"></i> <span class="name">生日礼包</span></div>
							</div>
						</div>
						<div class="mint-cell-right"></div> <i class="mint-cell-allow-right"></i>
					</router-link>
					<router-link to="/score/scoreConvert" class="mint-cell">
						<div class="mint-cell-wrapper">
							<div class="mint-cell-title">
								<div><i class="indexicon icon-toast"></i> <span class="name">积分兑换</span></div>
							</div>
						</div>
						<div class="mint-cell-right"></div> <i class="mint-cell-allow-right"></i>
					</router-link>
				</div>
				<div class="center-menu-ietm second">
					<router-link to="/order/returnedGoods" class="mint-cell">
						<div class="mint-cell-wrapper">
							<div class="mint-cell-title">
								<div><i class="indexicon icon-toast"></i> <span class="name">退货订单</span></div>
							</div>
						</div>
						<div class="mint-cell-right"></div> <i class="mint-cell-allow-right"></i>
					</router-link>
					<router-link to="/order/myOrder" class="mint-cell">
						<div class="mint-cell-wrapper">
							<div class="mint-cell-title">
								<div><i class="indexicon icon-toast"></i> <span class="name">我的订单</span></div>
							</div>
						</div>
						<div class="mint-cell-right"></div> <i class="mint-cell-allow-right"></i>
					</router-link>
					<router-link to="/member/memberSystem" class="mint-cell">
						<div class="mint-cell-wrapper">
							<div class="mint-cell-title">
								<div><i class="indexicon icon-toast"></i> <span class="name">会员制度</span></div>
							</div>
						</div>
						<div class="mint-cell-right"></div> <i class="mint-cell-allow-right"></i>
					</router-link>
					<router-link to="/member/memberUpgrade" class="mint-cell">
						<div class="mint-cell-wrapper">
							<div class="mint-cell-title">
								<div><i class="indexicon icon-toast"></i> <span class="name">会员升级</span></div>
							</div>
						</div>
						<div class="mint-cell-right"></div> <i class="mint-cell-allow-right"></i>
					</router-link>
					<router-link to="/setting/revisePassword" class="mint-cell">
						<div class="mint-cell-wrapper">
							<div class="mint-cell-title">
								<div><i class="indexicon icon-toast"></i> <span class="name">修改支付密码</span></div>
							</div>
						</div>
						<div class="mint-cell-right"></div> <i class="mint-cell-allow-right"></i>
					</router-link>
				</div>
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
	.center-info {
		display: -webkit-flex;
		display: flex;
		background: #dd3e3e;
		padding: 20px 15px;
	}
	
	.center-info-img {
		width: 75px;
		height: 75px;
		border-radius: 50%;
	}
	
	.center-info-img img {
		width: 75px;
		height: 75px;
		border-radius: 50%;
	}
	
	.info-right {
		margin-left: 22px;
		color: #FFFFFF;
		text-align: left;
		padding-top: 18px;
	}
	
	.info-right p {
		margin: 0;
	}
	
	.info-right .account {
		font-size: 18px;
	}
	
	.info-right .grade {
		font-size: 14px;
	}
	
	.center-score {
		display: -webkit-flex;
		display: flex;
		padding: 0 15px;
		height: 45px;
		line-height: 45px;
		background: #d23939;
		color: #FFFFFF;
		font-size: 14px;
	}
	
	.center-scoreLeft {
		border-right: 1px solid #e28080;
	}
	
	.center-scoreLeft span {
		font-size: 18px;
	}
	
	.center-scoreLeft,
	.center-scoreRight {
		width: 50%;
	}
	
	.center-scoreRight a {
		display: block;
		color: #FFFFFF;
	}
	
	.myScore {
		display: -webkit-flex;
		display: flex;
		padding: 15px;
		font-size: 18px;
		background: #FFFFFF;
	}
	
	.myScore .myScore-left,
	.myScore .myScore-right {
		display: block;
		width: 50%;
		text-align: center;
	}
	
	.myScore .myScore-left .myScore-link {
		display: block;
	}
	
	.myScore-link .Bimg img {
		width: 40px;
		height: 40px;
		text-align: center;
	}
	
	.headline {
		padding: 10px 15px;
	}
	
	.headline h1 {
		font-size: 14px;
		text-align: left;
		color: #333333;
		font-weight: 100;
	}
.center-menu .second{
	margin-top: 10px;
}
	.mint-cell .mint-cell-title {
		text-align: left;
	}
	
	.mint-cell .mint-cell-wrapper {
		padding: 0;
	}
	
	.mint-cell .mint-cell-wrapper .name {
		margin-left: 15px;
	}
	
	

</style>