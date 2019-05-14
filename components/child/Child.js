// components/child/Child.js
//Page  App  Component({})
Component({
  /**
   * 组件的属性列表
   * porps:{接收父组件的值}
   */
  properties: {
      //接收值
    propParentToChild:{
      type:"String",
      value:"无名氏"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    //数据
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //方法
    parseValueToparent(){
      // this.$emit("myEvent","相传的值")
      let obj = {
        name:"荆轲"
      }
      this.triggerEvent("childEvent", obj)
    }
  }
})
