<!--
 * @Date: 2020-05-19 15:21:59
 * @writer: mx-d02
 * @LastEditors: mx-d02
 * @LastEditTime: 2020-12-30 00:09:08
 -->
<template>
	<div style="height:100vh">
		<div>
			<!-- 轮播图组件 -->
			<carousel :banner="banner"></carousel>
		</div>
		<div class="gridRow">
			<!-- 租房信息 -->
			<div
				class="gridItem"
				v-for="(item,index) in list"
				:key="index"
				@click="routePage(item)"
			>
				<img
					:src="item.imgs"
					alt=""
				>
				<div class="itemContent">
					<p>{{item.title}}</p>
					<p>{{item.region}}</p>
					<p>
						<i-tag
							v-for="(tagItem,idx) in item.type"
							class="i-tags"
							:color="tagColor[idx]"
							type="border"
						>
							{{tagItem}}
						</i-tag>
					</p>
					<p class="itemContent_bottom">
						<span>{{item.price}}</span>
						<span>{{item.houseType}}</span>
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import carousel from './components/carousel'
	export default {
		data () {
			return {
				banner: [
					{
						image_url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.ibaotu.com%2Fspiders%2F3229-59a61fcc93760.jpg&refer=http%3A%2F%2Fpic.ibaotu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1611767550&t=29ab2211a15c2a71d74ca992ab1205e6'
					},
					{
						image_url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20190719%2Fd1981566744e46f6b5d8e178f61dfe4f.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1611767670&t=1a99c07e07d1b236f2c29b21664b3d57'
					}
				],
				tagColor: ['green', 'red', 'blue'],
				list: [
					{
						title: '白云区 富力半岛花园整租2房一厅',
						imgs: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3747962233,2049873509&fm=26&gp=0.jpg',
						region: '白云区 富力半岛花园',
						type: ['精选', '整租', '近地铁'],
						price: '3000/月',
						houseType: '2室1厅'
					},
					{
						title: '天河区 员村花园整租2房一厅',
						imgs: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fs7.sinaimg.cn%2Fmw690%2Fa1504964gd9fde5790236%26690&refer=http%3A%2F%2Fs7.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1611773066&t=62809769117f06a753338a097ba0d974',
						region: '天河区 员村',
						type: ['精选', '整租', '近地铁'],
						price: '3000/月',
						houseType: '2室1厅'
					},
					{
						title: '天河区 珠江御景整租2房一厅',
						imgs: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.to8to.com%2Fcase%2F1806%2F21%2F20180621_8195eb83136c4a8c20d4o6ux507dqass_750.jpg&refer=http%3A%2F%2Fpic.to8to.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1611770397&t=83951cd0c4a91d07b49693d6e5ef61ab',
						region: '天河区 珠江御景',
						type: ['精选', '整租', '近地铁'],
						price: '4000/月',
						houseType: '2室1厅'
					},
					{
						title: '天河区 珠江御景整租2房一厅',
						imgs: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.to8to.com%2Fcase%2F1806%2F21%2F20180621_8195eb83136c4a8c20d4o6ux507dqass_750.jpg&refer=http%3A%2F%2Fpic.to8to.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1611770397&t=83951cd0c4a91d07b49693d6e5ef61ab',
						region: '天河区 珠江御景',
						type: ['精选', '整租', '近地铁'],
						price: '4000/月',
						houseType: '2室1厅'
					}

				]
			}
		},
		components: {
			carousel
		},
		mounted () {

		},
		methods: {
			handleClick () {
				console.log(123)
			},
			routePage (data) {
				console.log(33, data, this.$router)
				this.$router.push('/pages/details/main')
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

<style lang="scss" scoped>
	.gridRow {
		margin: 0.2rem 0;
		width: 100%;
		font-size: 0.26rem;
		display: flex;
		flex-wrap: wrap;
		flex-direction: column;
	}
	.gridItem {
		display: flex;
		border-bottom: 1px solid #ddd;
		padding: 0.1rem 0;
		img {
			height: 1.6rem;
			width: 2.5rem;
			padding: 0.1rem;
		}
		.itemContent {
			flex: 1;
			p {
				padding: 0.05rem 0;
			}
			p:nth-child(1) {
				width: 100%;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 1;
				-webkit-box-orient: vertical;
			}
			.i-tags {
				margin: 0 0.1rem;
			}
		}
		.itemContent_bottom {
			span {
				margin: 0 0.1rem;
			}
			span:nth-child(1) {
				color: red;
				font-size: 0.28rem;
			}
		}
	}
</style>
