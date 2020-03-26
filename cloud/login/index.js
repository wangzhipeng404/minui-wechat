// index.js
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()

exports.main = async (event, context) => {
  // 这里获取到的 openId、 appId 和 unionId 是可信的，注意 unionId 仅在满足 unionId 获取条件时返回
  const { OPENID, APPID, UNIONID } = cloud.getWXContext()
  const getRes = await db.collection('user').where({ openid: OPENID }).get()
  if (getRes.data.length > 0) {
    return getRes.data[0]
  }
  const newUser = {
    nickName: '',
    openid: OPENID,
    friends: [],
    groups: [],
    gender: 1,
    language: 'zh_CN',
    city: '',
    province: '',
    country: '',
    avatarUrl: '',
  }
  const addRes = await db.collection('user').add({ data: newUser })
  newUser._id = addRes._id
  return newUser
}
