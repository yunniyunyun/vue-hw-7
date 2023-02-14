import{_ as b,o as d,c,a as r,d as t,F as i,f as p,g as x,t as n,h as f,v as C}from"./index-98aff215.js";const{VITE_APP_URL:u,VITE_APP_PATH:h}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"winter_",BASE_URL:"/vue-hw-6/",MODE:"production",DEV:!1,PROD:!0},m={data(){return{products:[],productId:"",cart:{},loadingItem:""}},methods:{getCarts(){this.$http.get(`${u}/api/${h}/cart`).then(e=>{console.log("取得購物車",e.data),this.cart=e.data.data,console.log("取得購物車 this",this.cart)})},updateCart(e){const l={product_id:e.product.id,qty:e.qty};this.loadingItem=e.id,this.$http.put(`${u}/api/${h}/cart/${e.id}`,{data:l}).then(g=>{this.getCarts(),this.loadingItem=""})},deleteCart(e){this.loadingItem=e.id,this.$http.delete(`${u}/api/${h}/cart/${e.id}`).then(l=>{console.log("刪除購物車",l.data),this.getCarts(),this.loadingItem=""})}},mounted(){this.getCarts()}},v=t("div",{class:"text-end"},[t("button",{class:"btn btn-outline-danger",type:"button"},"清空購物車")],-1),y={class:"table align-middle"},I=t("thead",null,[t("tr",null,[t("th"),t("th",null,"品名"),t("th",{style:{width:"150px"}},"數量/單位"),t("th",null,"單價")])],-1),P=["disabled","onClick"],V=t("i",{class:"fas fa-spinner fa-pulse"},null,-1),$={class:"input-group input-group-sm"},E=["onUpdate:modelValue","disabled","onChange"],k=["value"],A={class:"text-end"},T=t("small",{class:"text-success"},"折扣價：",-1),w=t("td",{colspan:"3",class:"text-end"},"總計",-1),D={class:"text-end"},U=t("td",{colspan:"3",class:"text-end text-success"},"折扣價",-1),q={class:"text-end text-success"};function B(e,l,g,L,a,_){return d(),c(i,null,[r(" 這是購物車 "),v,t("table",y,[I,t("tbody",null,[a.cart.carts?(d(!0),c(i,{key:0},p(a.cart.carts,s=>(d(),c("tr",{key:s.id},[t("td",null,[t("button",{type:"button",class:"btn btn-outline-danger btn-sm",disabled:s.id===a.loadingItem,onClick:o=>_.deleteCart(s)},[V,r(" x ")],8,P)]),t("td",null,n(s.product.title)+" ",1),t("td",null,[t("div",$,[f(t("select",{name:"",id:"",class:"form-control","onUpdate:modelValue":o=>s.qty=o,disabled:s.id===a.loadingItem,onChange:o=>_.updateCart(s)},[(d(),c(i,null,p(10,o=>t("option",{value:o,key:`${o}111`},n(o),9,k)),64))],40,E),[[C,s.qty]])])]),t("td",A,[T,r(" "+n(s.total),1)])]))),128)):x("",!0)]),t("tfoot",null,[t("tr",null,[w,t("td",D,n(a.cart.total),1)]),t("tr",null,[U,t("td",q,n(a.cart.final_total),1)])])])],64)}const N=b(m,[["render",B]]);export{N as default};