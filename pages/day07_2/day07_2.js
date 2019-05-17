// pages/day07_2/day07_2.js

import wxRequest from '../../utils/wxRequest.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    offset:0,
    limit:20,
    content:[]
  },

  //1:关键字  2:offset  3:limit
  requestData(q, offset, limit){
    // wx.request({
    //   url: 'https://www.xiachufang.com/juno/weapp/v2/search/universal_search.json?q=' + q,
    //   data: {
    //     offset: offset,
    //     limit: limit
    //   },
    //   success: (res) => {
    //     this.setData({
    //       content: res.data.content.content
    //     })
    //   }
    // })

    let obj = {
      url: "https://www.xiachufang.com/juno/weapp/v2/search/universal_search.json?q=" + q,
      data:{
        offset, limit
      },
    }
    wxRequest(obj,function(res){
      this.setData({
        content:res.content.content
      })
    },this,1)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.requestData("牛肉",this.data.offset,this.data.limit);
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
    //1:limit
    this.setData({
      limit:20,
      offset:this.data.offset+1
    })
    //2:offset+1
    //3:content

    //请求一次
    this.requestData("牛肉", this.data.offset, this.data.limit);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("我是有底线的")
    this.setData({
      limit: this.data.limit + 10
    })
    //请求一次
    this.requestData("牛肉", this.data.offset, this.data.limit);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log("转发")
  }
})