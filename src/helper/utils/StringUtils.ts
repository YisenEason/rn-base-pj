
/**
 * 判断字符串是否为空(undefined || '')
 * @param content 字符串
 * @returns boolean
 */
function isEmpty(content: string) {
  if (!content || content === '') {
    return true;
  }
  return false;
}

export {
  isEmpty
}