<template>
	<div class="userContent" id="userContent">
		<div class="userContent-header">
			<div class="Avatar">
				<a href=""><img src="../../../../static/img/Avatar.png" /></a>
			</div>
			<div class="Avatar-fn">
				<router-link to="/login" class="login-btn">登录</router-link>
				<router-link to="/register" class="register-btn">注册</router-link>
			</div>
		</div>
		<div class="userContent-center">
			<div class="userContent-center-content">
				<div class="row">
					<div class="col-33">
						<router-link to="/mallOrders" class="" data-type="111">
							<div class="colImg"><img src="../../../../static/img/mall.png" /></div>
							<p>商城订单</p>
						</router-link>
					</div>
					<div class="col-33">
						<router-link to="/filmOrder-all" class="">
							<div class="colImg"><img src="../../../../static/img/movie.png" /></div>
							<p>电影订单</p>
						</router-link>
					</div>
					<div class="col-33">
						<router-link to="/serveOrder" class="">
							<div class="colImg"><img src="../../../../static/img/serve.png" /></div>
							<p>服务订单</p>
						</router-link>
					</div>
				</div>
			</div>
		</div>

		<div class="userContent-footer">
			<router-link to="/member" class="mint-cell">
				<div class="mint-cell-wrapper">
					<div class="mint-cell-title">
						<div><i class="indexicon icon-toast"></i> <span class="name">我的会员</span></div>
					</div>
				</div>
				<div class="mint-cell-right"></div> <i class="mint-cell-allow-right"></i>
			</router-link>
			<router-link to="/wallet" class="mint-cell">
				<div class="mint-cell-wrapper">
					<div class="mint-cell-title">
						<div><i class="indexicon icon-toast"></i> <span class="name">我的钱包</span></div>
					</div>
				</div>
				<div class="mint-cell-right"></div> <i class="mint-cell-allow-right"></i>
			</router-link>
			<router-link to="/coupon" class="mint-cell">
				<div class="mint-cell-wrapper">
					<div class="mint-cell-title">
						<div><i class="indexicon icon-toast"></i> <span class="name">我的优惠券</span></div>
					</div>
				</div>
				<div class="mint-cell-right"></div> <i class="mint-cell-allow-right"></i>
			</router-link>
			<router-link to="/setting" class="mint-cell">
				<div class="mint-cell-wrapper">
					<div class="mint-cell-title">
						<div><i class="indexicon icon-toast"></i> <span class="name">设置</span></div>
					</div>
				</div>
				<div class="mint-cell-right"></div> <i class="mint-cell-allow-right"></i>
			</router-link>
		</div>

	</div>
</template>

<script>
</script>

<style>

</style>