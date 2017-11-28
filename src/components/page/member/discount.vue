<template>
	<div>

		<div class="discount-content">
			<p>电子优惠券是金融危机之下被各大媒体炒热的一种消费服务领域的概念。电子优惠券是优惠券的电子形式 。指以各种电子媒体（包括互联网、彩信、微扑wepull、短信、二维码、图片等）制作、传播和使用的促销凭证。
			</p>
			<p>1、星趴电影院5折优惠券</p>
			<p>2、星趴乐园8折优惠券</p>
			<p>3、星趴电影院5折优惠券电子促销权券指由各商家发 放，以各种电子媒介形式制作、传播和使用的促销优 惠凭证。</p>
			<p>
				<router-link to="/member/discountNotice">参与优惠</router-link>
			</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'hello',
		data() {
			return {

			}
		}
	}
</script>

<style>
	.discount-content {
		margin: 10px 15px;
		padding: 100px 15px 0 15px;
		background: #FFFFFF url(../../../../static/img/zhekou.png) no-repeat top;
		background-size: 100px;
		min-height: 100px;
		background-size: 100%;
	}
	
	.discount-content p{
		text-align: left;
	}
</style>