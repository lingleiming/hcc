/*******************************
  公众号:木木IOS分享
关注了解更多新科技！！！
酷狗
脚本名称:酷狗
使用声明：️此脚本仅供学习与交流，
        请勿转载与贩卖！️️️
群1077223830
*******************************
[rewrite_local]
^http[s]?:\/\/gateway.kugou.com.+$ url script-response-body https://raw.githubusercontent.com/lingleiming/hcc/main/kg.js
[mitm] 
hostname = *.gateway.*
*******************************/
var body=$response.body;
body = body.replace(/"user_type\":\d/g,'"user_type":1');
body = body.replace(/"user_y_type\":\d/g,'"user_y_type":1');
body = body.replace(/"is_vip\":\d/g,'"is_vip":1');
body = body.replace(/"vip_type\":\d/g,'"vip_type":1');
body = body.replace(/"vip_type\":\d/g,'"vip_type":1');
body = body.replace(/"svip_score\":\d/g,'"svip_score":1');
body = body.replace(/"svip_level\":\d/g,'"svip_level":1');
body = body.replace(/"annual_fee_begin_time\":".*?\"/g,'"annual_fee_begin_time":"2022-12-08 15:51:09"');
body = body.replace(/"annual_fee_end_time\":".*?\"/g,'"annual_fee_end_time":"9999-12-08 15:51:09"');
body = body.replace(/"su_vip_end_time\":".*?\"/g,'"su_vip_end_time":"2022-12-03 15:51:09"');
body = body.replace(/"vip_end_time\":".*?\"/g,'"vip_end_time":"9999-12-08 15:51:09"');
body = body.replace(/"roam_type\":\d/g,'"roam_type":1');
body = body.replace(/"roam_end_time\":".*?\"/g,'"roam_end_time":"2099-02-21 21:54:36"');
body = body.replace(/"m_y_endtime\":".*?\"/g,'"m_y_endtime":"2030-02-21 21:54:36"');
body = body.replace(/"vip_y_endtime\":".*?\"/g,'"vip_y_endtime":"2030-02-21 21:54:36"');
body = body.replace(/"m_type\":\d/g,'"m_type":1');
body = body.replace(/"m_is_old\":\d/g,'"m_is_old":1');
body = body.replace(/"su_vip_y_endtime\":".*?\"/g,'"su_vip_y_endtime":"2030-02-21 21:54:36"');
body = body.replace(/"roam_begin_time\":".*?\"/g,'"roam_begin_time":"2022-02-21 21:54:36"');
body = body.replace(/"y_type\":\d/g,'"y_type":1');
body = body.replace(/"signed_svip_before\":\d/g,'"signed_svip_before":1');
body = body.replace(/"end_time\":".*?\"/g,'"end_time":"2099-02-21 21:54:36"');
body = body.replace(/"duration\":\d+/g,'"duration":873616277659');
body = body.replace(/"p_grade\":\d+/g,'"p_grade":20');
body = body.replace(/"p_current_point\":\d+/g,'"p_current_point":873616277659');
body = body.replace(/"p_next_grade\":\d+/g,'"p_next_grade":20');
$done(body);
