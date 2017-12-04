<template>
	<div>
		<div class="discountList">
			<div class="discountList-item">
				<div class="discountList-item-header notice_1">
					<span class="kaIcon"></span>
					<p class="info">星趴游乐园亲自沙龙</p>
					<p class="info">星趴电影票5折优惠券</p>
				</div>
				<div class="discountList-item-time">
					活动时间：<span>11.10-11.12</span>
				</div>
			</div>
			<div class="discountList-item ">
				<div class="discountList-item-header notice_2">
					<span class="kaIcon"></span>
					<p class="info">星趴游乐园亲自沙龙</p>
					<p class="info">星趴电影票5折优惠券</p>
				</div>
				<div class="discountList-item-time">
					活动时间：<span>11.10-11.12</span>
				</div>
			</div>
			<div class="discountList-item ">
				<div class="discountList-item-header notice_3">
					<span class="kaIcon"></span>
					<p class="info">星趴游乐园亲自沙龙</p>
					<p class="info">星趴电影票5折优惠券</p>
				</div>
				<div class="discountList-item-time">
					活动时间：<span>11.10-11.12</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style>
	
	.discountList-item{
		width: 100%;
		padding: 0 15px;
		margin-top: 10px;
		border-radius: 5px;
	}
	
	.discountList-item-header{
		width: 100%;
		height: 111px;
		padding: 10px;
		position: relative;
	}
	.discountList-item .notice_1{
		background: #FFFFFF url(/static/img/notice_1.png) no-repeat;
		background-size: 100% 111px;
	}
	.discountList-item .notice_2{
		background: #FFFFFF url(/static/img/notice_2.png) no-repeat;
		background-size: 100% 111px;
	}
	.discountList-item .notice_3{
		background: #FFFFFF url(/static/img/notice_3.png) no-repeat;
		background-size: 100% 111px;
	}
	.kaIcon{
		display: block;
		width: 50px;
		height: 50px;
		border-radius: 50%;
		background: #FFFFFF;
		position: absolute;
		left: 10px;
		top:10px;
	}
	
	.discountList-item-header .info{
		color: #222222;
		font-size: 16px;
		text-align: center;
		font-weight: bold;
	}
	
	.discountList-item-time{
		height: 45px;
		line-height: 45px;
		background: #FFFFFF;
		text-align: center;
		font-size: 14px;
		border-radius: 0 0 5px 5px;
	}
	
</style>