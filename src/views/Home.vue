<template>
	<div class="home">
		<div class='bg' :style='{backgroundImage: "url(" + pageConfig.img + ")"}'></div>
	</div>
</template>

<script lang="ts">
	import {
		Component,
		Vue,
		Watch
	} from 'vue-property-decorator';
	import activityAPI from '@/axios/api/activityAPI';

	@Component({

	})
	export default class Home extends Vue {
		private pageConfig = {
			img: '',
			title: ''
		}

		private async created(){
			const data = await activityAPI.boot();
			console.log(data);
			const pageConfig = JSON.parse(data.data.pageConfig);
			console.log(pageConfig);
			this.pageConfig.img = pageConfig.url;
			document.title = pageConfig.title;

			window.addEventListener('message', (e)=>{
				console.log('接收到了', e.data)
				if(e.data?.data?.from == 'workbench'){
					this.pageConfig.img = e.data.data.url;
				}
			})
		}
	}
</script>

<style lang="less">
	.home {
		position: relative;
		.bg{
			width: 100vw;
			height: 100vh;
			background-size: 100% auto;
			background-repeat: no-repeat;
			position: absolute;
			left: 0;
			top: 0;
			z-index: 1;
		}
	}
</style>