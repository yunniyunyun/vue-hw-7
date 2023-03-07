import{c as u}from"./cartStore-7064f438.js";import{_ as p,m,j as g,r as v,o as a,c as d,b,a as t,F as c,k as _,f,t as n,e as i,p as x,v as y}from"./index-eaab571c.js";import"./sweetalert2.all-0dbf6f17.js";const C={data(){return{isLoading:!1,products:[],cart:{},loadingItem:""}},computed:{...m(u,["cartList"])},methods:{...g(u,["removeCartItem","setCartQty"])}},k=t("div",{class:"header",style:{"background-image":"url(./src/images/home/carts2.avif)","background-position":"50% 23%","background-size":"cover",height:"30vh"}},null,-1),L={class:"container"},V=t("h2",{class:"mt-5 text-light text-center"},"購物車",-1),I=t("div",{class:"text-end"},null,-1),N={class:"table align-middle text-light"},S=t("thead",null,[t("tr",null,[t("th"),t("th",null,"品名"),t("th",null,"單價"),t("th",{style:{width:"150px"}},"數量/單位"),t("th")])],-1),U=["disabled","onClick"],q=t("i",{class:"fas fa-spinner fa-pulse"},null,-1),w=["src","alt"],B={class:"input-group input-group-sm"},j=["onUpdate:modelValue","disabled","onChange"],D=["value"],F={class:"text-end"},Q=t("small",{class:"text-success"},"小計：",-1),$=t("td",null,null,-1),z=t("td",{colspan:"3",class:"text-end"},"總計",-1),A={class:"text-end"},E=t("td",null,null,-1),M=t("td",{colspan:"3",class:"text-end text-success"},"折扣價",-1),T={class:"text-end text-success"};function G(o,r,H,J,l,K){const h=v("loadingVue");return a(),d(c,null,[b(h,{active:l.isLoading,"onUpdate:active":r[0]||(r[0]=e=>l.isLoading=e)},null,8,["active"]),k,t("div",L,[V,I,t("table",N,[S,t("tbody",null,[o.cartList.carts?(a(!0),d(c,{key:0},_(o.cartList.carts,e=>(a(),d("tr",{key:e.id},[t("td",null,[t("button",{type:"button",class:"btn btn-outline-danger btn-sm",disabled:e.id===l.loadingItem,onClick:s=>o.removeCartItem(e.id)},[q,i(" x ")],8,U)]),t("td",null,[t("img",{src:e.product.imageUrl,class:"table-image me-3",alt:e.product.title,style:{height:"100px","object-fit":"contain",width:"150px"}},null,8,w),i(" "+n(e.product.title),1)]),t("td",null,n(e.product.price),1),t("td",null,[t("div",B,[x(t("select",{name:"",id:"",class:"form-select","onUpdate:modelValue":s=>e.qty=s,disabled:e.id===l.loadingItem,onChange:s=>o.setCartQty(e.id,s.target.value)},[(a(),d(c,null,_(10,s=>t("option",{value:s,key:`${s}qty`},n(s),9,D)),64))],40,j),[[y,e.qty]])])]),t("td",F,[Q,i(" "+n(e.subtotal),1)])]))),128)):f("",!0)]),t("tfoot",null,[t("tr",null,[$,z,t("td",A,n(o.cartList.total),1)]),t("tr",null,[E,M,t("td",T,n(o.cartList.total),1)])])])])],64)}const W=p(C,[["render",G]]);export{W as default};
