<!--
 * @Date: 2020-05-19 15:21:59
 * @writer: 黄道长
 * @LastEditors: hlq
 * @LastEditTime: 2020-12-20 21:47:41
 -->
<template>
	<div style="height:100vh">
		<div class="homeImg"></div>
		<i-row>
			<!-- <i-card title="7月目标：96斤"
							extra="苏苏"
							thumb="https://img3.doubanio.com/view/photo/m/5DpfCqw-7yK1_4YSpTVm3Q/219397741/x2614100162.jpg"
							i-class="susu">
				<view slot="content">
					<p>惩罚机制：全家三天小萝卜</p>
					<p>奖励机制：奶茶一杯</p>
				</view>
				<view slot="footer"
							style="color:blue"
							@click="handleClick">编辑</view>
			</i-card> -->
		</i-row>
		<ff-canvas id="column"
							 canvas-id="column"
							 :opts="opts" />

	</div>
</template>

<script>
	import F2 from '../../../static/f2-canvas/lib/f2'
	let chart = null
	function initChart (canvas, width, height) {
		// F2 对数据源格式的要求，仅仅是 JSON 数组，数组的每个元素是一个标准 JSON 对象。
		const data = [
			{ genre: 'Sports', sold: 275 },
			{ genre: 'Strategy', sold: 115 },
			{ genre: 'Action', sold: 120 },
			{ genre: 'Shooter', sold: 350 },
			{ genre: 'Other', sold: 150 }
		]
		console.log(122, canvas, width, height)
		chart = new F2.Chart({
			el: canvas,
			width,
			height
		})
		// Step 2: 载入数据源
		chart.source(data)
		// Step 3：创建图形语法，绘制柱状图，由 genre 和 sold 两个属性决定图形位置，genre 映射至 x 轴，sold 映射至 y 轴
		chart.interval()
			.position('genre*sold')
			.color('genre')

		// Step 4: 渲染图表
		chart.render()
		return chart
	}
	export default {
		data () {
			return {}
		},
		components: {},
		mounted () {
			// 在 onLoad 内部通过id找到该组件, 然后调用该组件的初始化方法
			this.$mp.page.selectComponent('#column').init(initChart)
		},
		methods: {
			handleClick () {
				console.log(123)
			}
		},
		onPullDownRefresh () {
			console.log('我正在下拉刷新') // 用于测试下拉刷新
			wx.stopPullDownRefresh() // 调用微信停止下拉刷新的函数
		},
		created () {
			// let app = getApp()
		}
	}
</script>

<style>
	.canvasStyle {
		width: 100%;
		height: 100%;
	}
	.i-card-body {
		background-image: url('https://img9.doubanio.com/view/photo/l/9CBT9Tmo9D4X88qr6bwv-Q/219397741/x2614105265.jpg');
    background-repeat:no-repeat;
    background-size:60%
	}
	.susu image {
		width: 30px;
		height: 30px;
	}
	.homeImg {
		width: 100%;
		height: 35vh;
		background: url("https://img3.doubanio.com/view/photo/m/-csgjLsUB0ErFKhsVi36dw/219397741/x2614100160.jpg");
		background-repeat: no-repeat;
		background-size: cover;
		background-position-x: 0;
		background-position-y: 48%;
		border-radius: 0 0 80% 80%;
		margin-bottom: 5%;
	}
</style>
