module.exports = function dobobLoader(content) {
  console.log('---- 도밥 로더 동작 ----');

  return content.replace('console.log(', 'alert(');
};
