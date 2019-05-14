// pages/zhoukao1/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabList: [{
        id: 0,
        iconPath: "../../images/jian.png",
        text: "满减特权",
        children: {
          content: "内容11111111111111",
          tags: "vip1"
        }
      },
      {
        id: 1,
        iconPath: "../../images/te.png",
        text: "会员特价",
        children: {
          content: "内容222222222222222",
          tags: "vip2"
        }
      },
      {
        id: 2,
        iconPath: "../../images/fan.png",
        text: "积分翻倍",
        children: {
          content: "内容3333333333333333",
          tags: "vip3"
        }
      },
      {
        id: 3,
        iconPath: "../../images/jian.png",
        text: "满减特权",
        children: {
          content: "内容11111111111111",
          tags: "vip1"
        }
      },
      {
        id: 4,
        iconPath: "../../images/te.png",
        text: "会员特价",
        children: {
          content: "内容222222222222222",
          tags: "vip2"
        }
      },
      {
        id: 5,
        iconPath: "../../images/fan.png",
        text: "积分翻倍",
        children: {
          content: "内容3333333333333333",
          tags: "vip3"
        }
      },
      {
        id: 6,
        iconPath: "../../images/jian.png",
        text: "满减特权",
        children: {
          content: "内容11111111111111",
          tags: "vip1"
        }
      },
      {
        id: 7,
        iconPath: "../../images/te.png",
        text: "会员特价",
        children: {
          content: "内容222222222222222",
          tags: "vip2"
        }
      },
      {
        id: 8,
        iconPath: "../../images/fan.png",
        text: "积分翻倍",
        children: {
          content: "内容3333333333333333",
          tags: "vip3"
        }
      },
      {
        id: 9,
        iconPath: "../../images/jian.png",
        text: "满减特权",
        children: {
          content: "内容11111111111111",
          tags: "vip1"
        }
      },
      {
        id: 10,
        iconPath: "../../images/te.png",
        text: "会员特价",
        children: {
          content: "内容222222222222222",
          tags: "vip2"
        }
      },
      {
        id: 11,
        iconPath: "../../images/fan.png",
        text: "积分翻倍",
        children: {
          content: "内容3333333333333333",
          tags: "vip3"
        }
      }
    ],
    obj:{},
    selectIndex:0
  },

  clickItem(event){
    let {index} = event.target.dataset;
    console.log(index)
    this.setData({
      obj: this.data.tabList[index].children,
      selectIndex: index
    })
  },
  swiperChange(event){
    let { current } = event.detail;
    this.setData({
      obj: this.data.tabList[current].children,
      selectIndex: current
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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