/*
 * @Descripttion:
 * @Author: pujianguo
 * @Date: 2021-12-19 18:19:30
 */
/**
 * 是否为移动端
 * @param value
 * @returns {boolean}
 */
export const isMobile = () => {
  return !!navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
}
