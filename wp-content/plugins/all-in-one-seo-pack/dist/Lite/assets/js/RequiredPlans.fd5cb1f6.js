import{d as i}from"./links.6d4c0bdb.js";import{a as n}from"./addons.34d5dad4.js";import{l as u}from"./license.188ce8ae.js";import{C as l}from"./index.0eabb636.js";import{r as c,o as d,b as p,w as h,g as f,t as s,a as _,f as g}from"./vue.runtime.esm-bundler.b39e1078.js";import{_ as m}from"./_plugin-vue_export-helper.b97bdf23.js";const F={setup(){return{licenseStore:i()}},components:{CoreAlert:l},props:{addon:String,coreFeature:{type:Array,default(){return[]}},addonFeature:{type:Array,default(){return[]}}},data(){return{strings:{thisFeatureRequires:this.$t.__("This feature requires one of the following plans:",this.$td),thisFeatureRequiresSingular:this.$t.__("This feature requires the following plan:",this.$td)}}},computed:{requiredPlansString(){return 1<this.requiredPlans.length?this.strings.thisFeatureRequires:this.strings.thisFeatureRequiresSingular},getRequiredPlans(){return this.requiredPlans.join(", ")},showAlert(){return n.requiresUpgrade(this.addon)&&this.requiredPlans.length},requiredPlans(){if(this.coreFeature.length||this.addonFeature.length){const r=this.coreFeature[0]||this.addonFeature[0],t=this.coreFeature.length?typeof this.coreFeature[1]<"u"?this.coreFeature[1]:"":typeof this.addonFeature[1]<"u"?this.addonFeature[1]:"";return u.getPlansForFeature(r,t)}return n.currentPlans(this.addon)||[]}}};function q(r,t,y,a,P,e){const o=c("core-alert");return a.licenseStore.isUnlicensed||e.showAlert?(d(),p(o,{key:0,type:"red"},{default:h(()=>[f(s(e.requiredPlansString)+" ",1),_("strong",null,s(e.getRequiredPlans),1)]),_:1})):g("",!0)}const $=m(F,[["render",q]]);export{$ as R};
