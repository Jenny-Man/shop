//引入了 /utils/db.js 中的代码，名为 DB
const DB = require('../utils/db.js')
//export 部分的代码打包导出，供外界调用
module.exports = {
  list: async ctx => {
    //Ctx 是小程序的中间件，我们将获取的数据「暂存」到这个 data 变量中，以便服务器稍后返回给用户。 
    console.info('product');
    ctx.state.data = await DB.query("SELECT * FROM product;")
  },
  detail : async ctx =>{
    //这个 + 号将 id 这个字符变量，转化为了一个整型变量
    let productId = + ctx.params.id;
    //判断id是否为数字
    if (!isNaN(productId)){
      ctx.state.data = (await DB.query("SELECT * FROM product where id =?;", [productId]))[0];
    }else{
      ctx.state.data ={};
    }
   
  }
}