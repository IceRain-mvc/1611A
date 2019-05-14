// pages/day02/day02.js

let app = getApp()
console.log(app.globalData.food)

Page({

  /**
   * 页面的初始数据
   */
  data: {
    className:"box",
    interval:5000,
    duration:200,
    imgUrls:["http://staticlive.qietv.douyucdn.cn/upload/cms/gong/201609021748271098.jpg","http://www.sinaimg.cn/dy/slidenews/2_img/2016_11/792_1737199_165293.jpg","http://n.sinaimg.cn/sports/2_img/sipaphoto/cf0d0fdd/20170824/zW5r-fykiufe6424718.jpg"]
  },
  aaa:function(){},
  bbb:function(){},
  scrolllistener:function(event){
    console.log(event.detail.scrollTop)

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})