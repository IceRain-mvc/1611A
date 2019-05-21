// pages/day11/index.js
import wxRequest from '../../utils/wxRequest.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lists:[
      {id:0,"style":"background:red"},
      {id:1,"style":"background:green"},
      {id:2,"style":"background:pink"},
      {id:3,"style":"background:yellow"},
      {id:4,"style":"background:blue"},
      {id:5,"style":"background:orange"},
    ],
    cards:[],
    selectIndex:-1,
    card_index:-1
  },

  clickTop(event){
    console.log(event.target.dataset.index);
    this.setData({
      selectIndex: event.target.dataset.index
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let obj = {
      url:"http://localhost:3000/json"
    }
    wxRequest(obj,(res)=>{
      this.setData({
        cards:res
      })
    },this,1)
  },

  add(event){
    // new的数组
    // 新的数组的下标
    // 改变 新的数组 count
    // 赋值回去
    
    // let newCards= this.data.cards;

    // newCards[event.target.dataset.index].count++

    // var count = this.data.cards[event.target.dataset.index].count
    var count = 'cards[' + event.target.dataset.index +']count'

    //card_index: event.target.dataset.index
    //cards: newCards
    this.setData({
      [count]: ++this.data.cards[event.target.dataset.index].count
    })
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