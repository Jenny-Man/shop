//腾讯云API的代码被存放在了 client/vendor 文件夹中的 js 文件
const qcloud = require('../../vendor/wafer2-client-sdk/index')
const config = require('../../config.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
     // 商品列表
    productList: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getProductList();
  },
  getProductList(){
    //显示加载中信息
    wx.showLoading({
      title: '数据加载中......',
    });
    qcloud.request({
      url: config.service.productList,
      success: res => {
        //隐藏加载中信息
        wx.hideLoading();
        let result = res.data;
        if(!result.code){
          this.setData({
            productList: res.data.data
          });
        }else{
          wx.showToast({
            title: '商品数据加载失败',
          })
        }
      },
      fail: res => {
        console.info('error');
        //隐藏加载中信息
        wx.hideLoading();
        wx.showToast({
          title: '商品数据加载失败',
        });
      }
    });
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