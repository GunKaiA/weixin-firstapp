<!--
 * @Date: 2020-12-29 22:58:19
 * @writer: mx-d02
 * @LastEditors: mx-d02
 * @LastEditTime: 2020-12-30 01:15:55
 * @租房详情页 根据router跳转携带id查询具体详细信息
-->
<template>
	<div class="details">
		<div>
			<!-- 轮播图 -->
			<carousel :banner="banner"></carousel>
		</div>
		<div class="content-box">
			<!-- 具体信息 -->
			<div class="content-title">标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题</div>
			<div class="content-category">
				<span>2房1厅</span>
				<span>50平方</span>
				<span>12楼/电梯</span>
				<span>压二付一</span>
			</div>
			<div class="tag-box">
				<i-tag
					v-for="(tagItem,idx) in tagData"
					class="i-tags"
					:color="tagColor[idx] ? tagColor[idx] : 'blue'"
					type="border"
				>
					{{tagItem}}
				</i-tag>
			</div>
			<div class="content-introduce-box">
				<p class="content-introduce-title">房屋介绍</p>
				<p class="content-introduce">{{introduce}}</p>
			</div>
			<div class="landlord-box">
				<div>
					<span class="landlord-head">黄</span>
				</div>
				<div class="landlord-name">
					<p>房东：黄xx</p>
					<p>电话：1xxxxxxx</p>
				</div>
			</div>
		</div>
		<div class="bottom-box">
			<!-- 底栏 -->
			<div class="bottom-left-box">
				<span>3300</span>
				<span>元/月</span>
			</div>
			<div class="but-box">
				<i-button
					bind:click="handleClick"
					type="warning"
					class="bottom-but"
					inline
					long
				>

					<span class="but-text">
						<i-icon
							type="editor"
							size="25"
						/>留言
					</span>
				</i-button>
				<i-button
					bind:click="handleClick"
					type="info"
					class="bottom-but"
					inline
					long
				>
					<span class="but-text">
						<i-icon
							type="mobilephone"
							size="25"
						/>电话
					</span>
				</i-button>
			</div>
		</div>
	</div>
</template>

<script>
	import carousel from '../index/components/carousel'
	export default {
		components: { carousel },
		data () {
			return {
				introduce: '1、户型特点：中高层、户型方正、采光视野好，适宜居住。2、室内精装修，拎包入住，客厅宽敞大方，使用;卧室温馨舒适，搭配心怡;厨房设施齐全，让美味来得更加轻松。3、环境优雅，低密度社区，小区绿化，让你每天生活在空气清新的环境下。',
				tagColor: ['green', 'red', 'blue'],
				tagData: ['近地铁', '整租', '有电梯', '精修'],
				banner: [// 轮播图图片
					{
						image_url: 'https://gss0.baidu.com/70cFfyinKgQFm2e88IuM_a/forum/w=580/sign=9848b15f09087bf47dec57e1c2d2575e/f6246b600c3387446e25a1685a0fd9f9d62aa0c6.jpg'
					},
					{
						image_url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fyun.qfangimg.com%2Fgroup2%2F800x600%2FM00%2F1F%2F60%2FCvtcKlmO7MWABEczAAbVW9EqB_M530.jpg&refer=http%3A%2F%2Fyun.qfangimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1611846096&t=d4ec136ab472fd761ef4a8e951bafa13'
					},
					{
						image_url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.ijuzhong.com%2Fzhuangxiu%2Fuploads%2Fallimg%2F20200121%2F1579565946439_3.jpg&refer=http%3A%2F%2Fwww.ijuzhong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1611846096&t=ca5e7319ae163700ef8f3438e753beb1'
					}
				]
			}
		},
		computed: {

		},
		methods: {
			handleClick () { }
		}
	}
</script>
<style lang="scss" scoped>
	.landlord-head {
		display: inline-block;
		height: 0.8rem;
		width: 0.8rem;
		border-radius: 50%;
		background: dodgerblue;
		color: #ffff;
		font-size: 0.4rem;
		line-height: 0.8rem;
		text-align: center;
	}
	.landlord-box {
		border-top: 1px solid #ddd;
		padding: 0.2rem 0;
		display: flex;
		div:nth-child(2) {
			width: 70%;
		}
		div:nth-child(1) {
			width: 30%;
			text-align: center;
		}
	}
	.content-introduce-title {
		font-weight: 900;
		margin: 0.1rem 0;
	}
	.content-introduce {
		width: 100%;
		min-height: 2rem;
		line-height: 0.4rem;
	}
	.content-introduce-box {
		margin: 0.2rem 0;
		padding: 0.2rem 0;
		border-top: 1px solid #ddd;

		width: 100%;
	}

	.tag-box {
		height: 0.5rem;
		padding: 0.2rem 0;
		border-bottom: 1px solid #ddd;
	}
	.i-tags {
		margin: 0 0.1rem;
	}
	.content-category {
		padding: 0.2rem 0;
		display: flex;
		span {
			width: 25%;
			height: 1rem;
			line-height: 1rem;
			text-align: center;
			border-top: 1px solid #ddd;
			border-bottom: 1px solid #ddd;
		}
	}
	.content-title {
		font-weight: 900;
		height: 0.7rem;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	.details {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		font-size: 0.26rem;
		display: flex;
		flex-direction: column;
		.content-box {
			flex: 1;
			overflow: hidden;
			overflow-y: auto;
			padding: 0.2rem;
		}
		.bottom-box {
			height: 1rem;
			border-top: 1px solid #ddd;
			padding-top: 0.15rem;
			overflow: hidden;
			display: flex;
			.bottom-but {
				margin: 0 0.1rem;
			}
			.bottom-but {
				.but-text {
					padding: 0 0.25rem;
				}
			}
		}
		.bottom-left-box {
			width: 35%;
			text-align: center;
			color: red;
			span {
				font-size: 0.3rem;
				line-height: 0.9rem;
				padding: 0 0.1rem;
			}
			span:nth-child(1) {
				font-size: 0.4rem;
			}
		}
	}
</style>
