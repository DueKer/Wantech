<template>
	<div id="app">
		<!--<transition :name="transitionName">-->
			<router-view ></router-view>
		<!--</transition>-->
	</div>
</template>

<script>
	export default {
		name: 'app',
		data() {
			return {
				/*transitionName: 'slide-left' // 默认动态路由变化为slide-right*/
			}
		}/*,
		//监听路由的路径，可以通过不同的路径去选择不同的切换效果  
		watch: {
			'$route' (to, from) {
				let isBack = this.$router.isBack; //监听路由变化时的状态为前进还是后退
				console.log(this.$router.goback.isBack);
					
				console.log(isBack)　
				if(isBack) {　　　　　　　　
					this.transitionName = 'slide-right'
				} else {　　　　　　
					this.transitionName = 'slide-left'
					console.log(this.transitionName)　

					console.log(11)　　
				}　　　　
			this.$router.isBack = false;

			}
		}*/
	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}
	
	/*.child-view {
		position: absolute;
		width: 100%;
		transition: all 0.3s cubic-bezier(.55, 0, .1, 1);
	}
	
	.slide-left-enter,
	.slide-right-leave-active {
		opacity: 0;
		-webkit-transform: translate(50px, 0);
		transform: translate(50px, 0);
	}
	
	.slide-left-leave-active,
	.slide-right-enter {
		opacity: 0;
		-webkit-transform: translate(-50px, 0);
		transform: translate(-50px, 0);
	}*/
</style>