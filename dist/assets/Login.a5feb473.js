import{a6 as a,E as i,a7 as p,m as t,I as m,a8 as s}from"./index.f7ead98d.js";import{f as u}from"./VTextField.9a6121dd.js";import"./color.9e517a16.js";const l={name:"InputCustom",components:{},data(){return{}},props:{appendicon:String,prependicon:String,type:{type:String,default:"text"},solo:{type:String,default:"solo"}},computed:{},created(){},watch:{},mounted(){},methods:{sendMessage(){this.$emit("goIconMessage")}}},h={class:"custom_input"};function g(d,r,e,_,n,o){return i(),p("div",h,[t(u,{"prepend-inner-icon":e.prependicon,"append-inner-icon":e.appendicon,"onClick:appendInner":o.sendMessage,type:e.type,variant:e.solo},null,8,["prepend-inner-icon","append-inner-icon","onClick:appendInner","type","variant"])])}const f=a(l,[["render",g]]);const y={name:"Login",components:{InputCustom:f},data(){return{show2:!0}},computed:{},created(){},watch:{},mounted(){},methods:{goMessage(){this.show2=!this.show2}}},v={class:"Login"},I=s("div",{class:"home_title"},"Welcome",-1),w=s("div",{class:"home_content"},"Please enter your account here",-1),x={class:"input_class"};function C(d,r,e,_,n,o){const c=m("InputCustom");return i(),p("div",v,[I,w,s("div",x,[t(c,{prependicon:"mdi-account"}),t(c,{type:n.show2?"text":"password",appendicon:n.show2?"mdi-eye":"mdi-eye-off",onGoIconMessage:o.goMessage,prependicon:"mdi-lock"},null,8,["type","appendicon","onGoIconMessage"])])])}const S=a(y,[["render",C]]);export{S as default};
