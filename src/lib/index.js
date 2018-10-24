import ToastComponent from './vue-toast.vue'

let Toast = {}

Toast.install = function(Vue, options) {
	const opt = {
		duration: 3000
	}
	if (options) {
		for (const key in options) {
			opt[key] = options[key]
		}
	}

	Vue.prototype.$toast = function(message, option) {
		const toClass = Object.prototype.toString
		if (toClass.call(option) === '[object Object]') {
			for (const key in option) {
				opt[key] = option[key]
			}
		}

		const ToastController = Vue.extend(ToastComponent)
		const instance = new ToastController().$mount(document.createElement('div'))
		document.body.appendChild(instance.$el)

		instance.message = message
		instance.visible = true

		setTimeout(() => {
			instance.visible = false
			document.body.removeChild(instance.$el)
			if (toClass.call(option) === '[object Function]') {
				option()
			}
		}, opt.duration)
	}

	Vue.prototype.$toast['show'] = function(message, option) {
		Vue.prototype.$toast(message, option)
	}
	Vue.prototype.$toast['success'] = function(message, option) {
		Vue.prototype.$toast(message, option)
	}
	Vue.prototype.$toast['info'] = function(message, option) {
		Vue.prototype.$toast(message, option)
	}
	Vue.prototype.$toast['error'] = function(message, option) {
		Vue.prototype.$toast(message, option)
	}
}

if (Vue) {
	Vue.use(Toast)
}

export default Toast
