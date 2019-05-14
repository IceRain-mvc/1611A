// pages/day05_04/day05_04.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: 0,
    cityList: [
      "北京", "伦敦", "纽约", "巴黎", "东京"
    ]
  },

  clickCity(event) {
    let {
      item
    } = event.target.dataset;

    let current = getCurrentPages()

    console.log(current[current.length-2])

    let page3 = current[current.length - 2];

    page3.setData({
      city:item
    })

    //回传值
    wx.navigateBack({
      delta:1
    })
  },

  input(event) {
    this.setData({
      num: event.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(getCurrentPages())
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