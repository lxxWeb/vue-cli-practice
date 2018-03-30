
<template>	
	<div id="Pagebox" class="cl" >
		<span class="fl prePage" @click="toFirstPage()"><<</span>
		<ul class="fl">
			<li class="fl" v-if="leftDian">...</li>
			<li class="fl"  v-for="item in pageArr" :class="{'active':  now == item}" @click="changePage(item)" >{{item}}</li>

			<li class="fl" v-if="rightDian">...</li>
		</ul>
		<span class="fl nextPage" @click="toLastPage()">>></span>
	</div>
</template>
<script>
	export default{
		name:"PageTemplate",
		props:{
			count:[String, Number],
			currenttab:[String, Number],
		},
		data:function(){
			
			return {
				now:1,
				pageArr:[],
				leftDian:false,
				rightDian:false,
				nextPage:false,
			}
		},
		watch:{
			now:function(newval,oldval){
				this.pageArr = [];
				var arr = [this.now-4,this.now-3,this.now-2,this.now-1,this.now,this.now+1,this.now+2,this.now+3,this.now+4]

		
				for(var i=0;i<arr.length;i++){

					if(this.pageArr.length<5){

						if(arr[i] > 0 && arr[i] <= this.count){
							if(arr[i] > 0 && this.now <= 2){
								this.pageArr.push(arr[i])
							}else if (this.now - arr[i] <= 2 && this.now - arr[i] >= -2 && this.count - this.now >= 2) {
								this.pageArr.push(arr[i]);
							} else if (this.count - this.now < 2 && this.count - arr[i] <= 4) {
								this.pageArr.push(arr[i]);
							}
						}
					}
				}
				if(this.now > 3 && this.count > 5){
					this.leftDian = true
				}else{
					this.leftDian = false
				}
				if(this.count - this.now > 2 ){
					this.rightDian = true
				}else{
					this.rightDian = false
				}
			}
		},
		created:function(){
		},
		mounted:function(){
			var $this = this
			var Timer = setInterval(function(){
				if($this.count!=''){
					$this.initPage()
					clearInterval(Timer)
				}
			},300)
		},
		methods:{
			resetNow:function(){
				this.now = 1;
			},
			initPage:function(){

				var $this = this
				$this.pageArr = [];
				var arr = [$this.now-4,$this.now-3,$this.now-2,$this.now-1,$this.now,$this.now+1,$this.now+2,$this.now+3,$this.now+4]
				for(var i=0;i<arr.length;i++){
					if($this.pageArr.length<5){
						if(arr[i]>0 && arr[i] <= $this.count){
							$this.pageArr.push(arr[i])
						}
					}
				}
				if($this.count>5){
					$this.rightDian=true;
				}
			},
			changePage:function(page){
				this.now = page 
				this.$parent.loadList(this.currenttab,page)
			},
			toFirstPage:function(){
				this.now = 1 
				this.$parent.loadList(this.currenttab,1)
			},
			toLastPage:function(){
				this.now = this.count
				this.$parent.loadList(this.currenttab,this.now)
			}
		}
	}
</script>
<style lang="scss" scoped>
	/*page_tep css*/
#Pagebox{
	margin:10px 0 0 10px;
	span{
		cursor:pointer;
		width: 30px;
		height: 30px;
		line-height:28px;
		text-align: center;
		color:#778087;
		border: 1px solid #ddd;
		letter-spacing:-3px;
	}
	li{
		cursor:pointer;
		width: 30px;
		height: 30px;
		line-height:28px;
		text-align: center;
		color:#778087;
		border: 1px solid #ddd;
		border-left: none;
	}
	li.active{
		color:#80bd01;
	}
}
</style>