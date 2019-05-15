// components/life/life.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  lifetimes:{
    created(){
      console.log("created")
    },
    
    ready(){
      console.log("ready")
    },

    detached(){
      console.log("detached")
    }

  }

})
