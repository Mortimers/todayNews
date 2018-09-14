/**
 * Created by Administrator on 2018/8/2.
 */
import {request} from '@/utils/request'
import cache from '@/utils/cache'

export default {
    // 需要添加namespaced，使其成为带命名空间的模块
    namespaced: true,
    state: {
        //indexActive: 'news_recommend', //当前页面
        indexPage: "news_recommend",  // 当前页面的关键字
        indexId: "0",       // 当前页面的ID
        indexAllData: {},   // 包含导航栏所有的请求数据
        currentContent: [],  // 当前导航栏请求回来的数据
        navColumnData: [{
          classname: '推荐',
          classid: 0,
          classpath: 'news_recommend'
        }]
    },
    mutations: {
        set_indexPage (state, val) {
            state.indexPage = val
            cache.setSession("index_page", val)
        },
        set_indexId (state, val) {
            state.indexId = val
        },
        set_navColumn_data (state, arr) {
            state.navColumnData = arr
        },
        set_currentContent_data (state, val) {
            state.currentContent = val
        },
        set_indexAllData (state, val) {
            state.indexAllData = val
        }
    },
    actions: {
        async get_navColumn_data ({commit, state}) {
            let res
            let json = await request('post', 'classID');
            res = [...state.navColumnData, ...json];
            commit('set_navColumn_data', res);
            console.log(res);
            return res
        },
        async get_indexPageDetail_data ({commit, state}, platform) {
            let params = {
              'classid': platform.classid,
              'page': platform.classid
            },
                obj = state.indexAllData;
            let res = await request('post', 'Class', params)
            // 将请求回来的数据放到当前点击的导航按钮数据中
            commit("set_currentContent_data", res)
            // 存放数据
            obj[platform.classpath] = res
            commit("set_indexAllData", obj)

        }

    }

}
