/*
* @desc 生成随机验证码
* @param 无
* @return { String }
* */
export function generateVerificationCode() {
  // 定义验证码的基本数字
  const baseNum = 'ABCSDEGHIGKLMNOPQRSTUVWXYZabceefghijklmnopqrstuvwxyz0123456789'
  // 定义验证码的长度
  const length = 6
  // 使用数组迭代生成随机数
  let code = ''
  for (let i = 0; i < length; i++) {
    // 从基本数字中随机选择一个字符
    code += baseNum.charAt(Math.floor(Math.random() * baseNum.length))
  }
  // 返回生成的验证码
  return code
}
