<template>
	<div>
		<div class="couponInfo-Content">
			<div class="couponInfo-handle">
				<i class="couponInfo-fk"></i> 扫条形码立减优惠
			</div>
			<div class="couponInfo-ietm">

			</div>
			<div class="couponInfo-status">
				<p class="handline">优惠信息说明：</p>
				<p class="conpon-referral">星趴电影10元优惠抵用券星趴电影10元优惠抵用券星趴电 影10元优惠抵用券影10元优惠抵用券
				</p>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style>
	.couponInfo-Content {
		padding: 40px 15px;
	}
	
	.couponInfo-fk {
		display: block;
		width: 10px;
		height: 10px;
		background: #f19e38;
		position: absolute;
		left: 0;
		top: 7px;
	}
	
	.couponInfo-handle {
		text-align: left;
		position: relative;
		padding-left: 15px;
	}
	
	.couponInfo-ietm {
		border: 1px solid #D5D5D5;
		border-radius: 5px;
		height: 130px;
		margin-top: 10px;
	}
	
	.couponInfo-status{
		margin-top: 10px;
	}
	.couponInfo-status .handline{
		font-size: 15px;
		text-align: left;
	}
	
	.couponInfo-status .conpon-referral{
		font-size: 12px;
		color: #999999;
		margin-top: 10px;
		text-align: left;
	}
</style>