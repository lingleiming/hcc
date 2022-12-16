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
^http[s]?:\/\/gateway.kugou.com.+$ url script-response-body https://raw.githubusercontent.com/lingleiming/hcc/main/kugou.js
[mitm] 
hostname = *.gateway.*
*******************************/
var obj = JSON.parse($response.body);
    obj.user_type= 1;
obj.user_y_type= 1;
obj.is_vip= 1;
obj.vip_type= 1;
obj.vip_type= 1;
obj.svip_score= 1;
obj.svip_level= 1;
obj.annual_fee_begin_time= 09";
obj.annual_fee_end_time= 09";
obj.su_vip_end_time= 09";
obj.vip_end_time= 09";
obj.roam_type= 1;
obj.roam_end_time= 36";
obj.m_y_endtime= 36";
obj.vip_y_endtime= 36";
obj.m_type= 1;
obj.m_is_old= 1;
obj.su_vip_y_endtime= 36";
obj.roam_begin_time= 36";
obj.y_type= 1;
obj.signed_svip_before= 1;
obj.end_time= 36";
obj.duration= 873616277659;
obj.p_grade= 20;
obj.p_current_point= 873616277659;
obj.p_next_grade= 20;
obj.timestamp= 9971212802;
    $done({body: JSON.stringify(obj)});
