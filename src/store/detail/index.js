/**
 * Created by Administrator on 2018/9/14.
 */
import cache from '@/utils/cache'
import request from '@/utils/request'
export default {
    namespaced: true,
    state: {
        historyArticle: {}, // 存储历史文章
        location: 0  // 存储浏览文章滚动条的位置
    },
    getter: {

    },
    mutations: {
        set_historyArticle (val) {
            state.historyArticle = val;
            cache.setSession('historyArticle', val);
        },
        set_location (val) {
            state.location = val;
            cache.setSession('location', val)
        }
    },
    actions: {
        async get_article_Data ({state, commit, mutations}, {id, datafrom}) {
            let res
            let cacheArticle = JSON.parse(cache.getSession('historyArticle'));
            // 如果本地缓存有文章数据，取缓存
            if (cacheArticle && cacheArticle[id]) {
                res = cacheArticle
            } else {
                let params = {
                  'id': id,
                  'datafrom': datafrom
                }
                await request('POST', 'Artilce', params)
                //commit('set_historyArticle', res)
            }
            return await res
        }

    }
}
