// pages/login/login.js
Page({
  cannotlogin: function () {
    wx.showModal({
      title: '系统提示',
      content: '请发邮件至rvfu98@gmail.com或通过其他方式与开发者联系'
    })
  }
})