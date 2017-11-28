<template>
	<div>
		<div class="returnOder-Content">
			<div class="returnOder-Content-header">
				退货订单
			</div>
			<div class="returnOder-list">
				<ul>
					<li class="returnOder-list-item">
						<div class="order-message">
							<span class="spImg">
								<!--<img src=""/>-->
							</span>
							<div class="order-message-right">
								<span class="statusQx">已取消</span>
								<p class="headline">我呀便当(深圳学府店)</p>
								<p class="time">下单时间:<span>2017-11-11  17:30</span></p>
								<p class="gross-price">总价:<span>¥30</span></p>
							</div>
						</div>
						
					</li>
					<li class="returnOder-list-item">
						<div class="order-message">
							<span class="spImg">
								<!--<img src=""/>-->
							</span>
							<div class="order-message-right">
								<span class="statusTk">已退款</span>
								<p class="headline">我呀便当(深圳学府店)</p>
								<p class="time">下单时间:<span>2017-11-11  17:30</span></p>
								<p class="gross-price">总价:<span>¥30</span></p>
							</div>
						</div>
						
					</li>
				</ul>
				
			</div>
		</div>
		
	</div>
</template>

<script>
</script>

<style>
	.returnOder-Content-header{
		padding: 13px 15px;
		font-size: 14px;
		text-align: left;
		background: #FFFFFF;
	}
	
		.returnOder-list ul .returnOder-list-item{
		margin-top: 10px;
		border-bottom:1px solid #e5e5e5;
		background: #FFFFFF;
	}
	
	
	.returnOder-list-item .order-message{
		padding: 15px;
		display: flex;
		display: -webkit-flex;
	}
	
	.order-message .spImg{
		width: 30px;
		height: 30px;
		border-radius: 50%;
		background: #CCCCCC;
		margin-right: 10px;
	}
	
	.order-message-right{
		width: 100%;
		position: relative;
	} 
	.order-message-right .statusTk{
		position: absolute;
		right: 0;
		top: 0;
		font-size: 14px;
		color: #555555;
	}
	.order-message-right .statusQx{
		position: absolute;
		right: 0;
		top: 0;
		font-size: 14px;
		color: #555555;
	}
	.order-message .order-message-right p{
		text-align: left;
	}
	
	.order-message-right .headline{
		font-size: 18px;
		color: #333333;
		padding: 0;
	}
	
	.order-message-right .time,
	.order-message-right .gross-price{
		font-size: 14px;
		color: #999999;
	}
	.order-message-right .time span,
	.order-message-right .gross-price span{
		margin-left: 10px;
	}
	
</style>