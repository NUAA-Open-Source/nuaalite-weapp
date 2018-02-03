// pages/forvo/index.js
Page({
  data:{
    voices:[]
  },
  onPlay: function(res){
    var src = "https://audio00.forvo.com/mp3/"+res.currentTarget.dataset.src
    wx.playBackgroundAudio({
      dataUrl: src,
      success:function(){
        wx.showToast({
          title: 'success',
        })
      }
    })
  },
  onblur: function(res){
    var value = res.detail.value
    if(value=="") return
    var that = this
    wx.showNavigationBarLoading();
    wx.request({
      url: 'https://api.rvfu98.com/forvo/'+value,
      success: function(res){
        // console.log(res)
        that.setData({
          voices: res.data
        })
      },
      complete: function(){
        wx.hideNavigationBarLoading();
      }
    })
  }
})