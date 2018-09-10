/**
 * Created by Administrator on 2018/8/2.
 */
import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'

// 设置Vue.prototype.$http为axios的别名
Vue.prototype.$http = axios

// 设置axios的默认请求地址
// 参见axios文档： https://www.kancloud.cn/yunye/axios/234845
axios.defaults.baseURL = 'http://data.toutiaojk.com/extend/list/'

const ajaxURL = {
    // 主页
    classID: 'appclassid.php',          // 栏目
    Class: 'appclass.php',              // 栏目列表
    Stick: 'appistop.php',              // 栏目置顶
    // 详情页
    Artilce: 'apparticle.php',          // 文章
    Recommend: 'apptuijian.php',        // 文章推荐
    // 搜索页
    Search: 'search.php'                // 搜索
}

export var request = async (type = 'POST', url = '', data = {}) => {
      var result
      type = type.toUpperCase()
      url = ajaxURL[url]

      if (type === "GET") {
        await axios.get(url, { params: data }).then(function (res) {
          result = res.data
        })
      } else if (type === "POST") {
        await axios.post(url, qs.stringify(data)).then(function (res) {
          result = res.data
        })
      }

      return result
}
