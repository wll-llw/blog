let requests =  require('requests')
let fs = require('fs')
let path = require('path')
const cheerio = require('cheerio')




requests('https://ncov.dxy.cn/ncovh5/view/pneumonia?from=timeline&isappinstalled=0')
.on('data', function (chunk) {
  let window = {}
  const $ = cheerio.load(chunk)
  eval($("#getListByCountryTypeService2true").html())
  

  fs.writeFile(path.resolve(__dirname, 'data.json'),
  JSON.stringify(window.getListByCountryTypeService2true), () => {
    console.log("保存成功")
  })
})