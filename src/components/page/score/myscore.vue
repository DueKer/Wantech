<template>
	<div>
		<div class="scoreContent">
			<div class="scoreHead">
				<p class="headline">我的积分</p>
				<div class="scoreBack">
					<p class="Jnumber">890</p>
				</div>
			</div>
			
			<div class="scoreList">
				<ul>
					<li class="scoreList-item">
						<div class="order-message">
							<span class="spImg">
								<!--<img src=""/>-->
							</span>
							<div class="order-message-right">
								<p class="headline">我呀便当(深圳学府店)</p>
								<p class="time">下单时间:<span>2017-11-11  17:30</span></p>
								<p class="gross-price">总价:<span>¥30</span></p>
							</div>
						</div>
						<div class="grade-bottom">
							<span class="img">
								
							</span>
							<span class="gradeDeta">获得积分:<i>90</i></span>
						</div>
					</li>
					<li class="scoreList-item">
						<div class="order-message">
							<span class="spImg">
								<!--<img src=""/>-->
							</span>
							<div class="order-message-right">
								<p class="headline">我呀便当(深圳学府店)</p>
								<p class="time">下单时间:<span>2017-11-11  17:30</span></p>
								<p class="gross-price">总价:<span>¥30</span></p>
							</div>
						</div>
						<div class="grade-bottom">
							<span class="img">
								
							</span>
							<span class="gradeDeta">获得积分:<i>90</i></span>
						</div>
					</li>
				</ul>
				
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
	.scoreHead{
		padding: 20px 15px;
		background: #FFFFFF;
	}
	
	.scoreHead .headline{
		font-size: 18px;
		font-weight: bold;
	}
	
	.scoreBack{
		width: 128px;
		height: 128px;
		background: url(/static/img/jifen_bg.png) no-repeat;
		background-size: 100%;
		margin:10px auto;
		line-height: 128px;
	}
	
	.scoreBack .Jnumber{
		text-align: center;
		font-size: 24px;
	}
	.scoreList{
		padding-bottom: 20px;
	}
	
	.scoreList ul .scoreList-item{
		margin-top: 10px;
		border-bottom:1px solid #e5e5e5;
		background: #FFFFFF;
	}
	
	
	.scoreList-item .order-message{
		border-bottom:1px solid #e5e5e5;
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
	.order-message .order-message-right p{
		text-align: left;
	}
	
	.order-message-right .headline{
		font-size: 18px;
		color: #333333;
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
	
	.grade-bottom{
		padding: 10px 15px;
		text-align: right;
	}
	.grade-bottom .img{
		display: inline-block;
		width: 19px;
		height: 20px;
		background: url(/static/img/grade_num.png) no-repeat;
		background-size: 19px 20px;
		margin-right: 10px;
		margin-top: 2px;
	}
	.grade-bottom .gradeNum{
		font-size: 15px;
	}
	.grade-bottom .gradeDeta i {
		font-style: normal;
		font-weight: bold;
	}
</style>