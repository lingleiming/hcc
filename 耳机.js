/*******************************
⚠️🛝此捷径仅适用于本地重写⚠️🛝
  🧚🏻‍♂️作者：🍡魔法师🍡
  🎈交流群：993539991
🫧脚本名称:耳机破解
🫧建议配合working copy一起食用
✈️下载地址https://apps.apple.com/app/id896694807✈️
*******************************/
var body=$response.body;
body = body.replace(/#"name\":".*?\"/g,'#"name":"仙帝"');
body = body.replace(/"level\":\d+/g,'"level":20');
body = body.replace(/"nextLevel\":\d+/g,'"nextLevel":20');
body = body.replace(/#"nextLevelName\":".*?\"/g,'#"nextLevelName":"仙帝"');
body = body.replace(/"nextLevelRangeStart\":\d+/g,'"nextLevelRangeStart":0');
body = body.replace(/"points\":\d+/g,'"points":0');
body = body.replace(/"upgrade\":\d+/g,'"upgrade":0');
body = body.replace(/ "coin\":\d+/g,' "coin":9999999999999');
body = body.replace(/"auditionPrice\":\d+/g,'"auditionPrice":0');
body = body.replace(/"downloadPrice\":\d+/g,'"downloadPrice":0');
body = body.replace(/"coin\":\d+/g,'"coin":999999999');
body = body.replace(/"auditionPrice\":\d+/g,'"auditionPrice":0');
body = body.replace(/"downloadPrice\":\d+/g,'"downloadPrice":0');
body = body.replace(/"activityId\":"\d"/g,'"activityId":"0"');
body = body.replace(/"goldCoinNumber\":"\d+"/g,'"goldCoinNumber": "9999999999"');
body = body.replace(/"isOpenFocusUpgradeList\":\d/g,'"isOpenFocusUpgradeList":1');
body = body.replace(/"isOpenFastPairing\":\d/g,'"isOpenFastPairing":1');
body = body.replace(/"isOpenHelpPage\":\d/g,'"isOpenHelpPage":1');
body = body.replace(/"success\":\w+/g,'"success":true');
body = body.replace(/"code\":.*?\/g,'"code":1');
$done(body);