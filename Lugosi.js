/*******************************
[rewrite_local]
^http[s]?:\/\/gateway.kugou.com.+$ url script-response-body kugou.js
[mitm] 
hostname = *.kugou.*
*******************************/
var obj = JSON.parse($response.body);
    obj.data.user_type= 1;
obj.data.user_y_type= 1;
obj.data.is_vip= 1;
obj.data.vip_type= 1;
obj.data.vip_type= 1;
obj.data.svip_score= 1;
obj.data.svip_level= 1;
obj.data.annual_fee_begin_time= "2022-02-21 21:54:36";
obj.data.annual_fee_end_time= "2022-02-21 21:54:36";
obj.data.su_vip_end_time= "2099-02-21 21:54:36";
obj.data.vip_end_time= "2022-12-08 15:51:09";
obj.data.roam_type= 1;
obj.data.roam_end_time= "2099-02-21 21:54:36";
obj.data.m_y_endtime= "2030-02-21 21:54:36";
obj.data.vip_y_endtime= "2030-02-21 21:54:36";
obj.data.m_type= 1;
obj.data.m_is_old= 1;
obj.data.su_vip_y_endtime= "2030-02-21 21:54:36";
obj.data.roam_begin_time= "2022-02-21 21:54:36";
obj.data.y_type= 1;
obj.data.signed_svip_before= 1;
obj.data.end_time= "2099-02-21 21:54:36";
obj.data.duration= 873616277659;
obj.data.p_grade= 20;
obj.data.p_current_point= 873616277659;
obj.data.p_next_grade= 20;
    $done({body: JSON.stringify(obj)});
