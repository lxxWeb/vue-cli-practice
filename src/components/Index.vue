<template>
	<div id="index">

		<ul class="index_tab cl">
			<li class="fl" v-for = "(item,index) in indextab" :class='{"active":current==index}' @click="loadList(index,1)" >{{item}}</li>
		</ul>
		<ul class="list_content">
			<li class="list_item cl" v-for = "(list,index) in listS">
				<img :src="list.author.avatar_url" alt="" class="fl owner">
				<span class="comment fl">
					{{list.reply_count}}/<i class="viewed">{{list.visit_count}}</i>
				</span>
				<span  class="fl item_type Top" v-if="list.top==true">置顶</span>
				<span class="fl item_type" v-else-if="list.tab=='share' && current==0">分享</span>
				<span class="fl item_type" v-else-if="list.tab=='ask' && current==0">问答</span>
				<span class="fl item_type" v-else-if="list.tab=='job' && current==0">招聘</span>
				<span class="fl item_type Top" v-else-if="current ==1">精华</span>
				<span class="fl item_title">{{list.title}}</span>
				<span class="fr closest "><img src="https://avatars3.githubusercontent.com/u/327019?v=4&s=120" class="closest_avator fl"><i class="fl closest_time">1小时前</i></span>
			</li>
		</ul>
		<Page-template :count="listcount" :currenttab="current" ref="pagemodal" ></Page-template>
	</div>
</template>
<script>

import PageTemplate from '@/components/PageTemplate' //引用分页组件

export default {
  name: 'Index',
	data:function () {
		return {
            listS:[],
			indextab : ['全部','精华','分享','问答','招聘'],
			indexTab : ['all','good','share','ask','job'],
			current: 0,
			listcount:'93',
		}
	},
	created:function () {

	},
	mounted:function(){

		var $this = this;
		//请求index数据
		$this.loadList(this.current,1)

	},
	components:{
		PageTemplate
	},
	methods:{
		//请求index数据
		loadList:function(eq,page){
		this.$parent.topics.page = page
		if(page==1){
			 this.$refs.pagemodal.resetNow() // 页码设置成第1页

		}

		this.$parent.topics.tab = this.indexTab[eq]
		this.$http.get('https://cnodejs.org/api/v1/topics',{params:this.$parent.topics}).then(function(response){
			  if(response.status == 200){
					this.current = eq
				  	this.listS = response.body.data
				
				
			  }
		},function(response){
			console.log(response)
		})

		}

	}
}
</script>

<style lang="scss" scoped>
#index{
	border-radius:4px;
	.index_tab{
		background:#f6f6f6;
		padding:10px;
		color:#80bd01;
		li{
			font-size:14px;
			padding:0 1rem;
			cursor:pointer;	
		}
		.active{
			color:#f40;
		}
	}
	.list_content{
		.list_item{
			height:2rem;line-height: 2rem;padding:0.4rem;
			border-bottom: 1px solid #f0f0f0;
			span{margin-left:0.4rem;
				height:1.2rem;line-height:1.2rem;}
			.owner{width:1.2rem;height:1.2rem;border: 1px solid #ccc;}
			.comment{
				width:70px;text-align: center;
				color:#9e78c0;font-size:0.54rem;
				.viewed{color:#b4b4b4;font-size:0.48rem;}
			}
			.item_type{
				background:#e5e5e5;
				font-size:0.48rem;
				padding:0 0.1rem;border-radius:3px;
				height:0.72rem;line-height:0.72rem;margin-top:0.2rem;
			}
			.Top{background:#80bd01;color:#fff;}
			.item_title{
				width: 65%;
				font-size:0.64rem;
				white-space: nowrap;
				text-overflow:ellipsis;
				overflow:hidden;
				cursor:pointer;
			}
			.item_title:hover{
				text-decoration:underline;
			}
			.closest{
				cursor:pointer;
				.closest_avator{
					vertical-align: middle;
					width:18px;
					margin-right:0.4rem;
					margin-top:0.3rem;
				}
				.closest_time{
					height:1.2rem;line-height: 1.2rem;
					font-size:0.44rem;
					color:#778087;
				}
			}
		}
		.list_item:hover{
			background:#f6f6f6;
		}
	}
}
</style>