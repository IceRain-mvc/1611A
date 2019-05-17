//方法 (obj (res)=>{},this)

export default function wxRequest(obj, cb, page, type) {
  //网络请求 返回结果
  //GET  POST
  var methodGetPost = function() {
    wx.request({
      url: obj.url,
      data: obj.data || {},
      method: obj.method || "GET",
      header: obj.header || {},
      success: function(res) {
        cb && cb.call(page,res.data)
        // page.setData({
        // })
      },
      fail: function() {
        console.log("请求失败了")
        // page.setData({
        //   isNet:false
        // })
      }
    })
  }

  //断网之类的
  var duanWang = function() {

  }

  return type === 1 ? methodGetPost() : duanWang()

}