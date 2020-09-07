const projects = [{
  name: 'Dolly Blogs',
  introByChinese: '一款Vuepress开发的Blog主题',
  introByEnglish: 'A blog theme developed by Vuepress',
  url: require('../images/dolly-blogs.jpg'),
  filtered: false,
  show: true
}, {
  name: 'Dolly Music',
  introByChinese: '一款功能全面的移动端音乐Web App',
  introByEnglish: 'A full-featured music Web App for mobile',
  url: require('../images/dolly-music.jpg'),
  filtered: false,
  show: true
}, {
  name: 'Dolly Take Away',
  introByChinese: '一款移动端外卖App商家展示页面',
  introByEnglish: 'A takeaway App merchant display page',
  url: require('../images/dolly-take-away.jpg'),
  filtered: false,
  show: true
}, {
  name: 'Dolly Axios',
  introByChinese: '用TypeScript重写的axios库',
  introByEnglish: 'Axios rewritten in TypeScript',
  url: require('../images/dolly-axios.jpg'),
  filtered: false,
  show: true
}, {
  name: 'Free Drag',
  introByChinese: '一款轻量级PC、移动端皆可使用的拖拽库',
  introByEnglish: 'A lightweight drag and drop library suitable for both PC and mobile',
  url: require('../images/free-drag.gif'),
  filtered: true,
  show: true
}, {
  name: 'What\'s next ?',
  introByChinese: 'What\'s next project ?',
  introByEnglish: 'What\'s next project ?',
  url: require('../images/continue.jpg'),
  filtered: false,
  show: true
}]

const leng = projects.length
projects[leng - 1].show = leng % 2 === 0

export default projects
