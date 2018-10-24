import ToastComponent from './src/toast.vue'

let Toast = {}
Toast.install = function(Vue, options) {
	const opt = {
		duration: 3000
	}
	for (const key in options) {
		opt[key] = options[key]
	}

	Vue.prototype.$toast = function (message, option) {
		if (typeof option === 'object') {
			for (const key in option) {
				opt[key] = option[key]
			}
		}
		const ToastController = Vue.extend(ToastComponent)
		const instance = new ToastController().$mounted(document.createElement('div'))
		instance.message = message
		instance.visible = true

		setTimeout(() => {
			instance.visible = fasle
			document.body.removeChild(instance.$el)
		}, duration);
	}
	Vue.prototype.$toast['show'] = function (message, options) {
		Vue.prototype.$toast(message, options)
	}

	Vue.prototype.$toast['success'] = function (message, options) {
		Vue.prototype.$toast(message, options)
	}

	Vue.prototype.$toast['info'] = function (message, options) {
		Vue.prototype.$toast(message, options)
	}

	Vue.prototype.$toast['error'] = function (message, options) {
		Vue.prototype.$toast(message, options)
	}
}

export default Toast