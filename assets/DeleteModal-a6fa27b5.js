import{_ as l,o as n,c as i,a as t,t as o,e as a}from"./index-d7f509c9.js";const c={props:["item","deleteItem"]},_={id:"delModal",ref:"delModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delModalLabel","aria-hidden":"true"},r={class:"modal-dialog"},b={class:"modal-content border-0"},m={class:"modal-header bg-danger text-white"},h={id:"delModalLabel",class:"modal-title"},u=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),f={class:"modal-body"},g={class:"text-danger fw-bold"},p={class:"modal-footer"},x=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function y(v,s,e,M,k,B){return n(),i("div",_,[t("div",r,[t("div",b,[t("div",m,[t("h5",h,[t("span",null,"刪除 "+o(e.item.title),1)]),u]),t("div",f,[a(" 是否刪除 "),t("strong",g,o(e.item.title),1),a(" (刪除後將無法恢復)。 ")]),t("div",p,[x,t("button",{type:"button",class:"btn btn-danger",onClick:s[0]||(s[0]=(...d)=>e.deleteItem&&e.deleteItem(...d))}," 確認刪除 ")])])])],512)}const I=l(c,[["render",y]]);export{I as D};