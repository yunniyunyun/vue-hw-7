import{_,R as v,r as c,o as u,c as h,b as t,a as e,w as s,l as m,i as k,F as f,e as n}from"./index-59d1b1e8.js";const{VITE_APP_URL:b}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"winter_",BASE_URL:"/vue-hw-7/",MODE:"production",DEV:!1,PROD:!0};document.querySelector("body").style.background="#FFFFFF";const x={data(){return{isLogin:!1,isLoading:!1}},components:{RouterView:v},methods:{logout(){document.cookie=`hexToken=; expires=${new Date};`,this.isLogin=!1,this.$router.push("/login")},checkLogin(){const l=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=l,this.$http.post(`${b}/api/user/check`).then(o=>{this.isLoading=!1,this.isLogin=!0,o.data.success||this.$router.push("/login")}).catch(()=>{this.isLoading=!1,this.$router.push("/login")})}},mounted(){this.isLoading=!0,this.checkLogin()}},L={class:"container"},V={key:0},w={class:"navbar navbar-expand-lg navbar-dark bg-dark"},R={class:"container-fluid"},A=e("a",{class:"navbar-brand",href:"#"},"Navbar",-1),$=e("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},[e("span",{class:"navbar-toggler-icon"})],-1),F={class:"collapse navbar-collapse",id:"navbarNavAltMarkup"},N={class:"navbar-nav"};function P(l,o,T,E,i,d){const p=c("loadingVue"),a=c("RouterLink"),g=c("RouterView");return u(),h(f,null,[t(p,{active:i.isLoading,"onUpdate:active":o[0]||(o[0]=r=>i.isLoading=r)},null,8,["active"]),e("div",L,[i.isLogin?(u(),h("div",V,[e("nav",w,[e("div",R,[A,$,e("div",F,[e("div",N,[t(a,{to:"/admin/products",class:"p-2 me-2 text-decoration-none link-light"},{default:s(()=>[n(" 產品列表")]),_:1}),t(a,{to:"/admin/orders",class:"p-2 me-2 text-decoration-none link-light"},{default:s(()=>[n(" 訂單列表")]),_:1}),t(a,{to:"/admin/coupons",class:"p-2 me-2 text-decoration-none link-light"},{default:s(()=>[n(" 優惠券")]),_:1}),t(a,{to:"/admin/article",class:"p-2 me-2 text-decoration-none link-light"},{default:s(()=>[n(" 文章")]),_:1}),t(a,{to:"/",class:"p-2 me-2 text-decoration-none link-light"},{default:s(()=>[n(" 回前台首頁")]),_:1}),e("a",{href:"#",onClick:o[1]||(o[1]=m((...r)=>d.logout&&d.logout(...r),["prevent"])),class:"p-2 me-2 text-decoration-none link-light"},"登出")])])])]),t(g)])):k("",!0)])],64)}const D=_(x,[["render",P]]);export{D as default};
