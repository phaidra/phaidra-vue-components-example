import Vue from 'vue'
import './plugins/vuetify'
import Vuetify from 'vuetify'
import VueI18n from 'vue-i18n'
import eng from 'phaidra-vue-components/src/i18n/eng'
import deu from 'phaidra-vue-components/src/i18n/deu'
import ita from 'phaidra-vue-components/src/i18n/ita'
import store from './store'
import PhaidraVueComponents from 'phaidra-vue-components'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(Vuetify)
Vue.use(VueI18n)
Vue.use(PhaidraVueComponents)

const messages = { eng, deu, ita }
const i18n = new VueI18n({
  locale: 'deu',
  messages: messages
})

new Vue({
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')