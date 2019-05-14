// pages/day03/day03.js
Page({
  /**
   * 页面的初始数据
   * http://www/?
   */
  data: {
    num:20,
    items:[
      {value:"海绵宝宝",name:"海绵宝宝"},
      {value:"数码宝贝",name:"数码宝贝"},
      {value:"裸婚时代",name:"裸婚时代"},
      {value:"回家的诱惑",name:"回家的诱惑"},
      {value:"咱们结婚吧",name:"咱们结婚吧"},
      {value:"都挺好",name:"都挺好"}
    ],
    arr:[]
  },
  sub:function(){
    this.setData({
      num: --this.data.num
    })
  },
  add:function(){
    this.setData({
      num: ++this.data.num
    })
  },

  changeBox:function(event){
    console.log(event)
    this.setData({
      arr:event.detail.value
    })
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