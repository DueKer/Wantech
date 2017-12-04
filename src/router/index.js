import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

Router.prototype.goback = function (isBack) {
　　 this.isBack = true;
　　window.history.go(-1);

	return isBack;
}

export default new Router({
	hashbang: false,
	history: true,
	routes: [{
			path: '/',
			redirect: '/member/center'
		},
		/*会员模块*/
		//个人中心
		{
			path: '/member/center',
			component: resolve => require(['../components/page/member/myCenter.vue'], resolve)
		},
		//我的优惠券
		{
			path: '/member/coupon',
			component: resolve => require(['../components/page/member/coupon.vue'], resolve)
		},
		//优惠券信息
		{
			path: '/member/couponInfo',
			component: resolve => require(['../components/page/member/couponInfo.vue'], resolve)
		},
		//折扣优惠
		{
			path: '/member/discount',
			component: resolve => require(['../components/page/member/discount.vue'], resolve)
		},
		//折扣公告
		{
			path: '/member/discountNotice',
			component: resolve => require(['../components/page/member/discountNotice.vue'], resolve)
		},
		//折扣公告内容
		{
			path: '/member/discountMatter',
			component: resolve => require(['../components/page/member/discountMatter.vue'], resolve)
		},
		//生日礼包
		{
			path: '/member/discountsKac',
			component: resolve => require(['../components/page/member/discountsKac.vue'], resolve)
		},
		//会员制度
		{
			path: '/member/memberSystem',
			component: resolve => require(['../components/page/member/memberSystem.vue'], resolve)
		},
		//会员升级
		{
			path: '/member/memberUpgrade',
			component: resolve => require(['../components/page/member/memberUpgrade.vue'], resolve)
		},
		//实名认证
		{
			path: '/member/certifiCation',
			component: resolve => require(['../components/page/member/certifiCation.vue'], resolve)
		},
		//邮箱认证
		{
			path: '/member/emailCation',
			component: resolve => require(['../components/page/member/emailCation.vue'], resolve)
		},
		//银行卡认证
		{
			path: '/member/bankCation',
			component: resolve => require(['../components/page/member/bankCation.vue'], resolve)
		},
		//银行信息
		{
			path: '/member/bankInfo',
			component: resolve => require(['../components/page/member/bankInfo.vue'], resolve)
		},
		//会员卡
		{
			path: '/member/clubCard',
			component: resolve => require(['../components/page/member/clubCard.vue'], resolve)
		},
		//手机授权
		{
			path: '/member/register',
			component: resolve => require(['../components/page/member/register.vue'], resolve)
		},
		/*支付模块*/
		//账户余额
		{
			path: '/pay/balance',
			component: resolve => require(['../components/page/pay/balance.vue'], resolve)
		},
		//充值方式
		{
			path: '/pay/recharge',
			component: resolve => require(['../components/page/pay/recharge.vue'], resolve)
		},
		//提现
		{
			path: '/pay/withdraw',
			component: resolve => require(['../components/page/pay/withdraw.vue'], resolve)
		},

		//设置支付密码
		{
			path: '/pay/szPassword',
			component: resolve => require(['../components/page/pay/szPassword.vue'], resolve)
		},
		
		
		//我的积分
		{
			path: '/score/myscore',
			component: resolve => require(['../components/page/score/myscore.vue'], resolve)
		},

		//兑换公告
		{
			path: '/score/scoreConvert',
			component: resolve => require(['../components/page/score/secoreConvert.vue'], resolve)
		},
		//退货订单
		{
			path: '/order/returnedGoods',
			component: resolve => require(['../components/page/order/returnedGoods.vue'], resolve)
		},
		//我的订单
		{
			path: '/order/myOrder',
			component: resolve => require(['../components/page/order/myOrder.vue'], resolve)
		},

		//设置密码
		{
			path: '/setting/revisePassword',
			component: resolve => require(['../components/page/setting/revisePassword.vue'], resolve)
		},

		{
			path: '/list',
			component: resolve => require(['../components/page/list.vue'], resolve)
		}
	]
})