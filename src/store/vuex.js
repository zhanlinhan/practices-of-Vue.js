import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// 创建store实例
export default new Vuex.Store({
  // 存储状态值
  state: {
    projects: {
      date: {
        year: [2016,2015,2014,2013,2012,2011,2010],
        month: [12,11,10,9,8,7,6,5],
        day: [31,30,29,28,8,6]
      },
      projectInfor: {
        principal: ['用户1','用户2','用户3','用户4','用户5'],
        projectName: ['项目1','项目2','项目3','项目4','项目5'],
        projectProgress: ['过程1','过程2','过程3','过程4','过程5'],
        projectDescribe: ['描述1','描述2','描述3','描述4','描述5'],
        releaseTime: ['17:30','12:30','11:30','10:30','18:30']
      }
    }, //分页
    page: {
      pageNum: 1,
      pageSize: 3,
      total: 2,
      totalPage: 5
    }
  },
  getters: {
    getProjects: state => {
      return state.projects
    },
    getYear: state => {
      return state.projects.date.year.slice((state.page.pageSize*(state.page.pageNum-1)))
    },
    getMonth: state => {
      return state.projects.date.month.slice((state.page.pageSize*(state.page.pageNum-1)))
    },
    getDay: state => {
      return state.projects.date.day.slice((state.page.pageSize*(state.page.pageNum-1)))
    },
    getUser: state => {
      return state.projects.projectInfor.principal.slice((state.page.pageSize*(state.page.pageNum-1)))
    },
    getProjectName: state => {
      return state.projects.projectInfor.projectName.slice((state.page.pageSize*(state.page.pageNum-1)))
    },
    getProjectProgress: state => {
      return state.projects.projectInfor.projectProgress.slice((state.page.pageSize*(state.page.pageNum-1)))
    },
    getProjectDescribe: state => {
      return state.projects.projectInfor.projectDescribe.slice((state.page.pageSize*(state.page.pageNum-1)))
    },
    getProjectReleaseTime: state => {
      return state.projects.projectInfor.releaseTime.slice((state.page.pageSize*(state.page.pageNum-1)))
    },
    getPagination: state => {
      return state.page
    },

  },
  mutations: {
    changePage: (state, nowPage) => {
      state.page.pageNum = nowPage
    }
  }
})
// const counter = {
//   template: `<div>{{ count }}</div>`,
//   computed: {
//     count () {
//       return store.state.count
//     }
//   }
// }
// store.commit('increment')

// console.log(store.state.count) // -> 1


// 视频练习
// const state = {
//   count: 100,
//   counttwo: 200
// }
// export default new Vuex.Store({
//   state
// })
