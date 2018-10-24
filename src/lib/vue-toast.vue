<template>
	<section class="toast-container">
		<div class="toast" :class="[visible ? 'fade-in' : 'fade-out']">
			{{ message }}
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			message: '',
			visible: true
		}
	}
}
</script>

<style lang="scss">
.toast-container {
	position: absolute;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	z-index: 2000;
	display: flex;
	justify-content: center;
	align-items: center;
	.toast {
		width: 180px;
		height: 60px;
		line-height: 60px;
		text-align: center;
		background-color: rgba(0, 0, 0, 0.61);
		border-radius: 10px;
		color: #fff;
		opacity: 0;
		transform: scale(0.7);
	}
	.fade-in {
		animation: fade-in 0.3s both;
	}
	@keyframes fade-in {
		from {
			opacity: 0;
			transform: scale(0.7);
		}
		to {
			opacity: 1;
			transform: scale(1);
		}
	}
	.fade-out {
		animation: fade-out 0.3s both;
	}
	@keyframes fade-out {
		from {
			opacity: 1;
			transform: scale(1);
		}
		to {
			opacity: 0;
			transform: scale(0.7);
		}
	}
}
</style>
