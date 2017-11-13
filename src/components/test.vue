<template>
	<div>
				
		
		
		<div class="page-tabbar">
			<mt-tabbar v-model="selected" fixed>
				<mt-tab-item id="外卖">
					<img slot="icon" src="../assets/logo.png"> 外卖
				</mt-tab-item>
				<mt-tab-item id="订单">
					<img slot="icon" src="../assets/logo.png"> 订单
				</mt-tab-item>
				<mt-tab-item id="发现">
					<img slot="icon" src="../assets/logo.png"> 发现
				</mt-tab-item>
				<mt-tab-item id="我的">
					<img slot="icon" src="../assets/logo.png"> 我的
				</mt-tab-item>
			</mt-tabbar>
		
		</div>
		
	</div>
</template>

<script>

	import { Field } from 'mint-ui';
	import { Tabbar, TabItem } from 'mint-ui';
	export default {
		
		data() {
			return {
				selected: '外卖'
			};
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
	
	.page-wrap {
		overflow: auto;
		height: 100%;
		padding-bottom: 100px;
	}
</style>