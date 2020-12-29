<!--
 * @Date: 2020-12-29 00:08:55
 * @writer: mx-d02
 * @LastEditors: mx-d02
 * @LastEditTime: 2020-12-29 22:48:42
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
		props: ['banner'],
		data () {
			return {

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
