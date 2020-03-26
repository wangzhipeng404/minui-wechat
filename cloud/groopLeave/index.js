// index.js
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()
const _ = db.command
exports.main = async (event, context) => {
  // 这里获取到的 openId、 appId 和 unionId 是可信的，注意 unionId 仅在满足 unionId 获取条件时返回
  const { user_id, groop_id } = event
  const res = await db.collection('groop').doc(groop_id).update({ data: { members: _.pull(user_id) } })
  return res
}
