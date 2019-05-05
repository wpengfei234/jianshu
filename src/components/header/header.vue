<template>
	<header>
		<div class="logo"><img src="../../assets/img/nav-logo.png" alt="logo" /><span>创作你的创作</span></div>
		<div class="download">免费下载<i class="icon-keyboard_arrow_right"></i></div>
	</header>
</template>
<script>
	
</script>
<style lang='stylus' scoped>
	header
		position: fixed
		top: 0
		left: 0
		padding: 0 18px
		width: 100%
		height: 48px
		background: #fff
		box-shadow: 0 2px 4px rgba(0,0,0,.1)
		box-sizing: border-box
		z-index: 111
		.logo
			float: left
			height: 100%
			img
				display: inline-block
				width: 54px
				height: 100%
				margin-right: 12px
				vertical-align: middle
			span
				display: inline-block
				line-height: 20px
			    font-size: 16px
			    color: #333
		.download
			float: right
			padding: 12px 0
			font-size: 16px
			color: #ea6f5a
			box-sizing: border-box 
			i
				font-size: 16px
</style>