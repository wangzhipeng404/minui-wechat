// index.js
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()

exports.main = async (event, context) => {
  // 这里获取到的 openId、 appId 和 unionId 是可信的，注意 unionId 仅在满足 unionId 获取条件时返回
  const { OPENID } = cloud.getWXContext()
  const { data } = event
  await db.collection('user').where({ openid: OPENID }).update({ data })
  const getRes = await db.collection('user').where({ openid: OPENID }).get()
  return getRes.data[0]
}
