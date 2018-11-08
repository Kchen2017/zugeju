<template>
	<div class="mui-fullscreen">
		<div class="mui-off-canvas-wrap mui-draggable mui-scalable" :class="{'mui-active': sliderflag}">
			<!--侧滑菜单部分-->
			<aside class="mui-off-canvas-left before" :class="{'mui-active': sliderflag,'after': sliderflag}">
				<div id="offCanvasSideScroll" class="mui-scroll-wrapper">
					<div class="mui-scroll">
						<div class="title">侧滑导航</div>
						<div class="content">
							这是可拖动式侧滑菜单示例，你可以在这里放置任何内容；关闭侧滑菜单有多种方式： 1.在手机屏幕任意位置向左拖动(drag)；2.点击本侧滑菜单页之外的任意位置; 3.点击如下红色按钮
							<span class="android-only">；4.Android手机按back键；5.Android手机按menu键
							</span>。
							<p style="margin: 10px 15px;">
								<button id="offCanvasHide" type="button" class="mui-btn mui-btn-danger mui-btn-block" style="padding: 5px 20px;">关闭侧滑菜单</button>
							</p>

						</div>
						<div class="title" style="margin-bottom: 25px;">侧滑列表示例</div>
						<ul class="mui-table-view mui-table-view-chevron mui-table-view-inverted">
							<li class="mui-table-view-cell">
								<a class="mui-navigate-right">
									Item 1
								</a>
							</li>
							<li class="mui-table-view-cell">
								<a class="mui-navigate-right">
									Item 2
								</a>
							</li>
							<li class="mui-table-view-cell">
								<a class="mui-navigate-right">
									Item 3
								</a>
							</li>
							<li class="mui-table-view-cell">
								<a class="mui-navigate-right">
									Item 4
								</a>
							</li>
							<li class="mui-table-view-cell">
								<a class="mui-navigate-right">
									Item 5
								</a>
							</li>
							<li class="mui-table-view-cell">
								<a class="mui-navigate-right">
									Item 6
								</a>
							</li>
						</ul>
					</div>
				</div>
			</aside>
			<div class="mui-inner-wrap beforeInner" :class="{'afterInner': sliderflag}">
				<header class="mui-bar mui-bar-nav">
					<a @click="sliderRight" class="mui-icon mui-action-menu mui-icon-bars mui-pull-left"></a>
					<h1 class="mui-title">组个局</h1>
				</header>
				<router-view></router-view>

				<nav class="mui-bar mui-bar-tab">
					<a class="mui-tab-item mui-active" href="#tabbar">
						<span class="mui-icon mui-icon-home"></span>
						<span class="mui-tab-label">首页</span>
					</a>
					<a class="mui-tab-item" href="#tabbar-with-chat">
						<span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
						<span class="mui-tab-label">消息</span>
					</a>
					<a class="mui-tab-item" href="#tabbar-with-contact">
						<span class="mui-icon mui-icon-contact"></span>
						<span class="mui-tab-label">通讯录</span>
					</a>
					<a class="mui-tab-item" href="#tabbar-with-map">
						<span class="mui-icon mui-icon-gear"></span>
						<span class="mui-tab-label">设置</span>
					</a>
				</nav>
			</div>
		</div>
	</div>
</template>
<script>
	import homeApi from "../../api/homeApi"
	export default {
		data(){
			return {
				resData: "",
				sliderflag: false
			}
		},
		methods: {
			sendHttp(){
				homeApi.sendHomeApi({}).then(res => {
					console.log(res)
					this.resData = res.data.data
				})
			},
			sliderRight(){
				this.sliderflag = !this.sliderflag
			}
		}
	}
</script>
<style>
	.before{
		visibility: visible; 
		z-index: 0; 
		transform-origin: -100% center 0px; 
		opacity: 0.1; 
		transform: translate3d(0px, 0px, 0px) scale(0.8);
	}
	.after {
		visibility: visible; 
		z-index: 0; 
		transform-origin: -100% center 0px; 
		opacity: 1; 
		transform: translate3d(0px, 0px, 0px) scale(1);
	}
	.beforeInner{
		transform: translate3d(0px, 0px, 0px) scale(1); 
		transform-origin: left center 0px;
	}
	.afterInner{
		transform: translate3d(300px, 0px, 0px) scale(0.8); 
		transform-origin: left center 0px;
	}
</style>