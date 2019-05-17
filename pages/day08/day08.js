// pages/day08/day08.js
import wxRequest from '../../utils/wxRequest.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    public: [],
    major: [],
    flag: false,
    selectArr1: [],
    selectArr2: []
  },

  changeTab(event) {
    let {
      index
    } = event.target.dataset;
    if (index === "0") {
      this.setData({
        flag: false
      })
    } else {
      this.setData({
        flag: true
      })
    }
  },

  changeChecked1(event) {
    //1:下标
    //2:index -->public
    let selectArr1 = [];
    event.detail.value.forEach((item) => {
      selectArr1.push(this.data.public[parseInt(item)])
    })
    this.setData({
      selectArr1
    })
  },
  changeChecked2(event) {
    //1:下标
    //2:index -->major
    let selectArr2 = [];
    event.detail.value.forEach((item) => {
      selectArr2.push(this.data.major[parseInt(item)])
    })
    this.setData({
      selectArr2
    })
  },
  save() {
    let {
      selectArr1,
      selectArr2
    } = this.data

    let newArr = selectArr1.concat(selectArr2);
    wx.setStorage({
      key: 'selectArr',
      data: newArr,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let obj = {
      url: "http://www.edu-edu.com/exam-admin/real/public/subjects/json"
    }
    wxRequest(obj, (res) => {
      console.log(res)
      this.setData({
        public: res.subjectMap.public,
        major: res.subjectMap.major,
      })
    }, this, 1)
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