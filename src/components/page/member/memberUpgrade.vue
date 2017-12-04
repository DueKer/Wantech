<template>
	<div>
		<div class="memberUpdate-content">
			<div class="memberUpdate-header">
				<div class="gradeCont">
					会员等级：<span>一级会员</span>
				</div>
				<div class="progressCont">
					<div class="progress-length">
						<span class="progress-inner">
							<i class="czNum">100</i>
						</span>
					</div>
					<div class="progress-zt">
						<span>6000</span>
					</div>
				</div>
			</div>
			<div class="memberUpdate-middle">
				<div class="headBt">
					升级任务
				</div>
				<div class="memberUpdate-menu">
					<div class="memberUpdate-menu-item">
						<div class="leftInfo">
							<p class="conmmon-head"><span>注册</span></p>
							<p class="info">即日起注册即获得10元星趴电影代金券</p>
						</div>
						<button class="forbid">已注册</button>
					</div>
					<div class="memberUpdate-menu-item">
						<div class="leftInfo">
							<p class="conmmon-head"><span>实名认证</span></p>
							<p class="info">实名认证后，会员升级为。。。。。</p>
						</div>
						<button class="active">升级</button>
					</div>
					<div class="memberUpdate-menu-item">
						<div class="leftInfo">
							<p class="conmmon-head"><span>邮箱绑定</span></p>
							<p class="info">邮箱绑定后，会员升级为。。。。。</p>
						</div>
						<button class="active">升级</button>
					</div>
					<div class="memberUpdate-menu-item">
						<div class="leftInfo">
							<p class="conmmon-head"><span>银行卡绑定</span></p>
							<p class="info">银行卡绑定后，会员升级为。。。。。</p>
						</div>
						<button class="active">升级</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style>

.memberUpdate-header{
	padding: 10px 15px;
}

.gradeCont {
	font-size: 17px;
	text-align: center;
	font-weight: bold;
}


.progressCont{
	width: 100%;
	margin-top: 15px;
}

.progress-length{
	width: 100%;
	height: 6px;
	border-radius: 3px;
	border: 1px solid #CCCCCC;
	background: #FFFFFF;
}

.progress-inner{
	display: block;
	position: relative;
	width: 18%;
	height: 4px;
	border-radius: 3px;
	background: #dd3e3e;
}
.progress-inner:before{
	content: "";
	display: block;
	width: 2px;
	height: 12px;
	position: absolute;
	background: #dd3e3e;
	top: 0;
	right: 0;
	
}
.progress-inner .czNum{
	font-style: normal;
	position: absolute;
	top: 10px;
	right: -20%;
	font-size: 12px;
}
.progress-zt{
	width: 100%;
	padding: 5px;
	text-align: right;
	font-size: 12px;
}

.headBt{
	font-size: 14px;
	padding: 15px;
	text-align: left;
	background: #FFFFFF;
	border-bottom: 1px solid #e5e5e5;
}
.memberUpdate-menu{
	margin-top: 10px;
}

.memberUpdate-menu-item{
	padding: 16px  15px;
	overflow: hidden;
	width: 100%;
	border-bottom: 1px solid #e5e5e5;
	background: #FFFFFF;
	
}
.leftInfo{
	width: 60%;
	margin-right: 40px;
	float: left;
}
.leftInfo p{
	text-align: left;
}

.conmmon-head span{
	display: block;
	height: 15px;
	line-height: 15px;
	font-size: 15px;
	border-left: 2px solid #f49316;
	padding-left: 10px;
}

.memberUpdate-menu-item .forbid{
	float: right;
	width: 60px;
	height: 27px;
	line-height: 27px;
	font-size: 14px;
	background: #c3c3c3;
	border: none;
	color: #FFFFFF;
}

.memberUpdate-menu-item .active{
	float: right;
	width: 60px;
	height: 27px;
	line-height: 27px;
	font-size: 14px;
	background: #dd3e3e;
	border: none;
	color: #FFFFFF;
}

.leftInfo .info{
	font-size: 12px;
	margin-top: 10px;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
}
</style>