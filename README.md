# orderVeg-v3-elPlus Demo

Demo 技术栈：Vue3 + Typescript + element-plus（element-ui 对应的 vue3 升级版）。

1. vue3 Demo，命令行执行 npm run dev，启动以后：
   首页：http://localhost:5173
   vue3 组件基础：http://localhost:5173/vue3main，功能点包括：属性传值 Typescript Props、简单状态管理、Pinia 状态管理、Vue tsx 渲染、计算属性、Vue 指令。
   vue3 + pinia 状态管理：http://localhost:5173/pinia，功能点包括：用户登录、添加购物车、清除购物车、提交购买，展示 svg 图片：Pinia 和 Github logo。
   组合式函数：http://localhost:5173/compositive，功能点包括：useMouse、VueUse 库、useFetch 函数展示 Movie 列表和详情、element-plus loading 效果。
2. vue SSR Demo，命令行执行 npm run ssr，启动以后：
   首页：http://localhost:3000，点击 Counter 按钮可交互，因为在浏览器页面已激活 vue。
   列表详情页面：http://localhost:3000/star-wars，server 端获取列表数据，传递到 vue 组件渲染至列表 ssr 页面。
   可点击列表，访问详情页面：http://localhost:3000/star-wars/:id，参数 id 传递至 server 端，获取详情数据，传递到 vue 组件渲染至详情 ssr 页面。
3. vue3 + element-plus Demo，由 vue2 + element-ui 迁移过来，命令行执行 npm run dev，启动以后：
   请访问：http://localhost:5173/elplus。打开页面后，滚动条到页面最下方，点击「各区统计」或「核对账单」。
   页面功能介绍：微信群接龙订素餐统计，页面之前用 vue2 + element-ui，现在使用 vue3 + element-plus 改写。试用步骤：
   功能一：左侧 textarea 输入框自动填充了示例接龙，点击左下角按钮「各区统计」，右侧即可查看统计结果，包括#接龙分区、#各区金额、#送餐消息。
   功能二：左侧 textarea 输入框自动填充了示例接龙，然后选择账单文件（账单文件：此项目中的文件“微信支付账单-20210602.csv”），点击左下角按钮「核对账单」，右侧即显式接龙用户和付款用户自动匹配的结果，包括#用户应付和#已付账单（表格），如果有接龙名字和付款名字不一致，店家还可以点击该表格 checkbox 手动匹配左侧用户，当自动和手动匹配完成，程序即提示出未支付用户；点击【返回接龙】可以返回 /elplus 页面；点击【跳选下一条】可以跳过下一条接龙，然后可点击右侧表格 checkbox，可继续匹配左侧接龙。
   技术难度说明：1. 点击【各区统计】时，用户接龙数据分析时，接龙分区统计份数和金额涉及大量的正则匹配；复合条件需要整合统计；取消不计数等等。2. 点击【核对账单】时，自动匹配和手动匹配功能的设计和实现，匹配功能涉及到数据集的状态管理和展示。之前 index.html 还做过【每日结算】的功能，用户反馈不好用，才最终改成了自动匹配和手动匹配功能。

   此外该 demo 对应的小程序和网上程序入口：

   ##小程序入口

   - 打开微信搜索小程序，请输入 liuzhantest 搜索小程序名称。进入到该小程序后，找到此项目中的文件“jielong6.2.txt”，打开文件并全选复制中内容（示例接龙数据），粘贴到小程序的输入框，点击「各区统计」或「送餐消息」即可展示相关结果，「核对账单」功能暂未移植到小程序。

   ##网上程序入口

   - 功能介绍：为素餐群店方提供了以下功能：各区统计（接龙分区、各区份数、各区金额、送餐路线），单区统计，核对账单（接龙、账单手动或自动匹配）。
   - 功能预览: https://codepen.io/messfairy/full/qBOKzqW
     主功能试用步骤：
     拷贝微信接龙、点击各区统计，即可统计分区、各区金额、送餐路线；
     拷贝微信接龙、选取当日微信账单、点击核对账单，即可统计接龙费用和收款账单，支持“用户接龙-账单”自动匹配和手动匹配。
   - 线上源码:
     Github: https://github.com/lifesrc/order-veg-meal（提示登录则输入用户名/密码，公共账号: lifesrc/lifesrc123)
     CODING 开放平台：https://messfairy-01.coding.net/p/order-veg-meal/d/order-veg-meal/git
     (核心代码文件: el-index.html el-index.js chn2number style.css)
