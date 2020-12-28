<!--
 * @Date: 2020-12-29 00:08:55
 * @writer: mx-d02
 * @LastEditors: mx-d02
 * @LastEditTime: 2020-12-29 01:44:46
 * @轮播图-组件
-->
<template>
	<div class="swiper">
		<swiper
			class="swiper-container"
			indicator-dots="true"
			autoplay="true"
			interval="3000"
			circular="true"
			duration="500"
		>
			<block
				v-for="(item, index) in banner"
				:key="index"
			>
				<swiper-item class="swiper-item">
					<image
						class="slide-image"
						:src="item.image_url"
					/>
				</swiper-item>

			</block>
		</swiper>
	</div>
</template>
<script>
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
				]
			}
		}
	}
</script>
<style lang="scss" scopd>
	.swiper {
		width: 100%;
		height: 4rem;
    overflow: hidden;
		// margin-top: 80rpx;
		// 继承，完整写法：swiper-container
		&-container {
			width: 100%;
			height: 100%;

			.swiper-item {
				width: 100%;
				height: 100%;
				.slide-image {
					width: 100%;
					height: 100%;
				}
			}
		}
	}
</style>
