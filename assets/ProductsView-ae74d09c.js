import{_ as m,e as P,r as b,o as s,c as n,a as l,d as e,F as d,f as $,t as f,b as g,w as T}from"./index-98aff215.js";const{VITE_APP_URL:i,VITE_APP_PATH:u}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"winter_",BASE_URL:"/vue-hw-6/",MODE:"production",DEV:!1,PROD:!0},V={data(){return{products:[]}},components:{RouterLink:P},methods:{getProducts(){this.$http.get(`${i}/api/${u}/products/all`).then(t=>{console.log(t),this.products=t.data.products}).catch(t=>{console.dir(t)})},addToCart(t,a=1){const r={product_id:t,qty:a};this.$http.post(`${i}/api/${u}/cart`,{data:r}).then(c=>{console.log("加入購物車",c.data)})}},mounted(){this.getProducts()}},k={class:"table"},E=["src"],A=["onClick"];function L(t,a,r,c,_,p){const h=b("RouterLink");return s(),n(d,null,[l(" 這是產品列表 "),e("table",k,[e("tbody",null,[(s(!0),n(d,null,$(_.products,o=>(s(),n("tr",{key:o.id},[e("td",null,f(o.title),1),e("td",null,[e("img",{src:o.imageUrl,width:"200",alt:""},null,8,E)]),e("td",null,[g(h,{to:`/product/${o.id}`,class:"btn btn-outline-secondary"},{default:T(()=>[l("查看產品")]),_:2},1032,["to"]),e("button",{type:"button",class:"ms-2 btn btn-outline-primary",onClick:R=>p.addToCart(o.id)},"加入購物車",8,A)])]))),128))])])],64)}const x=m(V,[["render",L]]);export{x as default};
