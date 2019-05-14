// pages/day05/day05.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"小魔仙",
    age:20,
    obj:{
      title:"京剧",
      address:"中国戏剧学院"
    }
  },

  /**
   * 生命周期函数--监听页面加载
   * 传参
   * 请求数据
   */
  onLoad: function (options) {
    console.log("page-onLoad")
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   * 数据渲染
   * loading 消失
   * 加载成功
   */
  onReady: function () {
    console.log("page-onReady")
  },

  /**
   * 生命周期函数--监听页面显示
   * 显示 数据没有渲染
   * 渲染之前: loading 进度条
   */
  onShow: function () {
    console.log("page-onShow")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("page-onHide")
    // 保存页面数据
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("page-onUnload")
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

  },

  tiao(){
    let objString = JSON.stringify(this.data.obj);
    wx.navigateTo({
      url: "/pages/day05_02/day05_02?name=" + this.data.name + "&age=" + this.data.age + "&obj=" + objString
    })
  }
})