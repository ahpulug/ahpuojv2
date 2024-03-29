import { getUser } from '@/web-common/api'
import Cookies from 'js-cookie'

const user = {
  state: {
    id: 0,
    username: '',
    nick: '',
    role: '',
    avatar: '',
    submit: 0,
    solved: 0,
    defunct: 0,
    isGeneratedRoutes: false,
    token: Cookies.get('access-token')
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_USER: (state, user) => {
      state.id = user.id
      state.username = user.username
      state.nick = user.nick
      state.role = user.role
      state.avatar = user.avatar
      state.submit = user.submit
      state.solved = user.solved
      state.defunct = user.defunct
    },
    SET_AVATAR: (state, path) => {
      state.avatar = path
    },
    SET_ROLE: (state, role) => {
      state.role = role
    },
    GENERATE_ROUTES: state => {
      state.isGeneratedRoutes = true
    }
  },
  actions: {
    // 刷新token
    RefreshToken({ commit }, token) {
      commit('SET_TOKEN', token)
    },
    // 获取用户姓名权限头像信息
    GetUserInfo({ commit, state }) {
      return new Promise(async (resolve, reject) => {
        try {
          const res = await getUser()
          const user = res.data.user
          commit('SET_USER', user)
          resolve(res)
        } catch (err) {
          reject(err)
        }
      })
    },
    // 更新用户的路由表
    GENERATEROUTES({ commit }) {
      commit('GENERATE_ROUTES')
    },
    // 登出
    Logout({ commit, state }) {
      commit('SET_TOKEN', '')
      commit('SET_USER', {
        username: '',
        nick: '',
        role: '',
        avatar: '',
        submit: 0,
        solved: 0,
        defunct: 0
      })
      Cookies.remove('access-token')
    }
  }
}

export default user
