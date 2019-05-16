// pages/day07/day07.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    first_img_obj: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.request({
      url: 'https://auth_services.teambition.com/captcha/setup?num=5&lang=zh',
      success: (res) => {
        this.setData({
          first_img_obj: res.data
        })
      }
    })
  },

  clickItem(event) { //
    let {
      index
    } = event.target.dataset;
    wx.request({
        url: 'https://auth_services.teambition.com/captcha/valid?num=5&uid=' + this.data.first_img_obj.uid + '&value=' + this.data.first_img_obj.values[index] + '&lang=zh',
        success: (res) => {
          console.log(res.data)
          if (res.data.valid){
            wx.showModal({
              title: '验证结果',
              content: '正确',
            })
          }else{
            wx.showModal({
              title: '验证结果',
              content: '失败',
            })
          }
         
        }
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})