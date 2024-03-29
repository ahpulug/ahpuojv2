import Vue from 'vue'
import Vuex from 'vuex'
import user from '@/web-admin/js/store/modules/user'
import getters from '@/web-admin/js/store/getters'
Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        user,
    },
    getters
});