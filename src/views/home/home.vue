<template>
	<div id="box">
		<header-nav></header-nav>
		<div class="list" ref='list'>
			<div class="nav">
				<div class="title">
					<div class="top-title">
						<h3>热门专题</h3>
						<span>换一批</span>
					</div>
					<ul class='title-list'>
						<li class='tag'>摄影</li>
						<li class='tag'>读书</li>
						<li class='tag'>旅行·在路上</li>
						<li class='tag'>简书电影</li>
						<li class='tag'>手绘</li>
						<li class='tag'>故事</li>
						<li class='tag'>自然科普</li>
					</ul>
				</div>
				<hr />
				<ul class="content">
					<li v-for='item,index of home' :key='index'>
						<div class="itemCon">
							<h6>{{item.object.data.title}}</h6>
							<p class="txt">{{item.object.data.public_abbr}}</p>
							<div class="meta">
								<i class="icon-zuanshi"></i>
								<span>{{item.object.data.total_fp_amount}}</span>
								<span class="name">{{item.object.data.user.nickname}}</span>
								<span><i class="icon-xinxi"></i>{{item.object.data.public_comments_count}}</span>
								<span><i class='icon-favorite'></i>{{item.object.data.likes_count}}</span>
							</div>
						</div>
						<div class="img">
							<img :src="item.object.data.list_image_url" alt="url" v-show='item.object.data.list_image_url'/>
						</div>
					</li>
				</ul>
				<div class="bg-img">
					<a href="javascript:;" class='button'>下载简书，创作你的创作</a>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import HeaderNav from '@/components/header/header'
	import Bscroll from 'better-scroll'
	export default {
		name:'home',
		data(){
			return {
				home:[]
			}
		},
		components:{
			HeaderNav
		},
		created(){
			this.$http.get('/apis/dataList').then(res => {
				this.home = res.data;
				console.log(this.home);
			})
		},
		mounted(){
			setTimeout(() => {
				this.init();
			},500)
		},
		methods:{
			init(){
				let bs = new Bscroll(this.$refs.list,{
					scrollY: true
				})
			}
		}
	}
</script>
<style lang='stylus' scoped>
	#box
		.list
			position: absolute
			left: 0
			top: 49px
			height: 670px
			overflow: hidden
			z-index: 2
			.nav
				background: #f5f5f5
				box-sizing: border-box
				.title
					padding: 0 18px 10px
					background: #fff
					box-sizing: border-box
					.top-title
						display: flex
						justify-content: space-between
						padding: 10px 18px
						margin: 0 -18px
						font-size: 14px
						font-weight: 700
						color: #545454 
						box-sizing: border-box
					.title-list
						padding-bottom: 5px
						box-sizing: border-box
						.tag
							display: inline-block
							padding: 2px 10px
						    margin-right: 12px
						    font-size: 14px
						    color: #ea6f5a
						    border: 1px solid #ea6f5a
						    box-sizing: border-box
				hr
					border: 0
					height: 10px
					margin: 0
					background: #f5f5f5
				.content
					padding-top: 10px
					margin-bottom: 10px
					background: #fff
					li
						display: flex
						justify-content: center
						align-items: center
						padding: 15px 18px
						border-bottom: 1px solid #f0f0f0
						box-sizing: border-box
						&:nth-last-of-type
							border: 0
						.itemCon
							display: flex
							flex-direction: column
							padding-right: 20px
							box-sizing: border-box
							h6
								font-size: 18px
							    font-weight: 700
							    color: #333
								/*display: -webkit-box    
							    text-overflow: ellipsis
							    overflow : hidden
							    -webkit-line-clamp: 2
							    -webkit-box-orient: vertical*/
							.txt
								margin-top: 6px
							    font-size: 13px
							    font-weight: 400
							    color: #999
							    /*overflow: hidden
							    display: -webkit-box
							    -webkit-line-clamp: 2
							    text-overflow: ellipsis
							    overflow: hidden*/
							.meta
								margin-top: 8px
								span
									font-size: 12px
									font-weight: 400
									color: #b1b1b1 
									margin-right: 12px
									i
										margin-right: 4px
						.img
							img
								width: 80px
								height: 80px
								border-radius: 3px
				.bg-img
					position: relative
					left: 0
					bottom: 0
					height: 230px
					/*background-image: url('../../assets/img/bg.png')*/
					.button
						display: block
					    position: absolute
					    bottom: 0
					    left: 50%
					    margin-left: -120px
					    width: 240px
					    height: 45px
					    padding: 10px 30px
					    font-size: 16px
					    color: #fff
					    background-color: #ea6f5a
					    border-radius: 4px
					    text-align: center
					    box-sizing: border-box
					
							
							
							
							
							
							
</style>