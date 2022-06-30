!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Zesty=t():e.Zesty=t()}(window,(function(){return function(e){var t={};function s(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,s),i.l=!0,i.exports}return s.m=e,s.c=t,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=0)}([function(e,t,s){"use strict";s.r(t),s.d(t,"FetchWrapper",(function(){return n}));class n{constructor(e,t,s={}){this.instanceZUID=e,this.authToken=t,this.accountsAPIEndpoints={instanceAppInstallPOST:"/instances/INSTANCE_ZUID/app-installs",instanceAppInstalls:"/instances/INSTANCE_ZUID/app-installs",instanceAppInstallGET:"/instances/INSTANCE_ZUID/app-installs/APP_ZUID",instanceAppInstallDELETE:"/instances/INSTANCE_ZUID/app-installs/APP_ZUID",instanceGET:"/instances/INSTANCE_ZUID",instanceUsersGET:"/instances/INSTANCE_ZUID/users/roles",userGET:"/users/USER_ZUID",instances:"/instances",apps:"/apps",appsPOST:"/apps",appsGET:"apps/APP_ZUID",appsPUT:"apps/APP_ZUID",appsDELETE:"apps/APP_ZUID"},this.sitesServiceEndpoints={schedulePublishPOST:"/content/items/ITEM_ZUID/publish-schedule",scheduleUnpublishPATCH:"/content/items/ITEM_ZUID/publish-schedule/PUBLISHING_ZUID",itemsDELETE:"/content/sets/MODEL_ZUID/items/ITEM_ZUID"},this.instanceAPIEndpoints={models:"/content/models",fields:"/content/models/MODEL_ZUID/fields",itemsPublishing:"/content/models/MODEL_ZUID/items/ITEM_ZUID/publishings",itemsVersions:"/content/models/MODEL_ZUID/items/ITEM_ZUID/versions",items:"/content/models/MODEL_ZUID/items",views:"/web/views",settings:"/env/settings",settingUpdate:"/env/settings/SETTING_ZUID",stylesheets:"/web/stylesheets",stylesheetsVersions:"/web/stylesheets/STYLESHEET_ZUID/versions",scriptsVersions:"/web/scripts/SCRIPT_ZUID/versions/VERSION_NUMBER",scripts:"/web/scripts",headers:"/web/headers",nav:"/env/nav",headtags:"/web/headtags",audits:"/env/audits"},this.mediaAPIEndpoints={binsGETAll:"/media-manager-service/site/SITE_ID/bins",binsGET:"/media-manager-service/bin/BIN_ID",binsPATCH:"/media-manager-service/bin/BIN_ID",filesPOST:"/media-storage-service/upload/STORAGE_DRIVER/STORAGE_NAME",filesGET:"/media-manager-service/file/FILE_ID",filesGETAll:"/media-manager-service/bin/BIN_ID/files",filesPATCH:"/media-manager-service/file/FILE_ID",filesDELETE:"/media-manager-service/file/FILE_ID",groupsGET:"/media-manager-service/group/GROUP_ID",groupsGETAll:"/media-manager-service/bin/BIN_ID/groups",groupsPOST:"/media-manager-service/group",groupsPATCH:"/media-manager-service/group/GROUP_ID",groupsDELETE:"/media-manager-service/group/GROUP_ID"},this.authAPIEndpoints={verify:"/verify"},this.authAPIURL=s.hasOwnProperty("authAPIURL")?s.authAPIURL:"https://auth.api.zesty.io",this.instancesAPIURL=s.hasOwnProperty("instancesAPIURL")?"https://"+this.instanceZUID+s.instancesAPIURL:"https://"+this.instanceZUID+".api.zesty.io/v1",this.accountsAPIURL=s.hasOwnProperty("accountsAPIURL")?s.accountsAPIURL:"https://accounts.api.zesty.io/v1",this.mediaAPIURL=s.hasOwnProperty("mediaAPIURL")?s.mediaAPIURL:"https://svc.zesty.io",this.sitesServiceURL=s.hasOwnProperty("sitesServiceURL")?s.sitesServiceURL+this.instanceZUID:"https://svc.zesty.io/sites-service/"+this.instanceZUID,this.logErrors=!!s.hasOwnProperty("logErrors")&&s.logErrors,this.logResponses=!!s.hasOwnProperty("logResponses")&&s.logResponses,this.sitesServiceURL=this.makeInstanceZUIDURL(this.sitesServiceURL,e)}makeInstanceZUIDURL(e,t){return this.replaceInURL(e,{INSTANCE_ZUID:t})}getInstanceAPIURL(){return this.instancesAPIURL}setInstanceZUID(e){return this.instanceZUID=e}buildAPIURL(e,t="instances"){switch(t){case"accounts":return`${this.accountsAPIURL}${e}`;case"instances":return`${this.instancesAPIURL}${e}`;case"sites-service":return`${this.sitesServiceURL}${e}`;case"media":return`${this.mediaAPIURL}${e}`;default:return""}}replaceInURL(e,t){for(const s in t)e=e.replace(s,t[s]);return e}async makeRequest(e,t="GET",s="",n={}){"GET"!=t&&(n.body=s),n.method=t,n.headers={"Content-Type":"application/json",Authorization:`Bearer ${this.authToken}`},n.credentials="same-origin";try{const t=await fetch(e,n);return await t.json()}catch(e){return console.error("Error:",e),e}}async verify(){let e=this.authAPIURL+this.authAPIEndpoints.verify;return await this.makeRequest(e)}async getUser(e){let t=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.userGET,{USER_ZUID:e});return await this.makeRequest(t)}async getInstances(){let e=this.accountsAPIURL+this.accountsAPIEndpoints.instances;return await this.makeRequest(e)}async getModels(){let e=this.getInstanceAPIURL()+this.instanceAPIEndpoints.models;return await this.makeRequest(e)}async getViews(){let e=this.getInstanceAPIURL()+this.instanceAPIEndpoints.views;return await this.makeRequest(e)}async getView(e){let t=this.getInstanceAPIURL()+this.instanceAPIEndpoints.views+"/"+e;return await this.makeRequest(t)}async createView(e,t="",s="ajax-json"){let n=JSON.stringify({code:t,fileName:e,type:s}),i=this.getInstanceAPIURL()+this.instanceAPIEndpoints.views;return await this.makeRequest(i,"POST",n)}async updateView(e,t){let s=JSON.stringify({code:t}),n=this.getInstanceAPIURL()+this.instanceAPIEndpoints.views+"/"+e;return await this.makeRequest(n,"PUT",s)}async publishView(e,t){let s=JSON.stringify({code:t}),n=this.getInstanceAPIURL()+this.instanceAPIEndpoints.views+"/"+e+"?action=publish";return await this.makeRequest(n,"PUT",s)}async installApp(e,t){let s=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.instanceAppInstallPOST,{INSTANCE_ZUID:e}),n=JSON.stringify({appZUID:t});return await this.makeRequest(s,"POST",n)}async updateInstalledApp(e,t){let s=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.instanceAppInstallPOST,{INSTANCE_ZUID:e}),n=JSON.stringify({appZUID:t});return await this.makeRequest(s,"PUT",n)}async getAllInstalledApps(e){let t=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.instanceAppInstalls,{INSTANCE_ZUID:e});return await this.makeRequest(t)}async getInstalledApp(e,t){let s=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.instanceAppInstallGET,{INSTANCE_ZUID:e,APP_ZUID:t});return await this.makeRequest(s)}async deleteInstalledApp(e,t){let s=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.instanceAppInstallDELETE,{INSTANCE_ZUID:e,APP_ZUID:t});return await this.makeRequest(s,"DELETE")}async registerApp(e,t,s,n){let i=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.appsPOST),a=JSON.stringify({name:e,label:t,url:s,publisher:n});return await this.makeRequest(i,"POST",a)}async getAllRegisterdApps(){let e=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.apps);return await this.makeRequest(e)}async getRegisteredApp(e){let t=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.appsGET,{APP_ZUID:e});return await this.makeRequest(t)}async updateRegisteredApp(e){let t=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.appsPUT,{APP_ZUID:e}),s=JSON.stringify({appZUID:e});return await this.makeRequest(t,"PUT",s)}async deleteRegisteredApp(e){let t=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.appsDELETE,{APP_ZUID:e});return await this.makeRequest(t,"DELETE")}async getSettings(){let e=this.getInstanceAPIURL()+this.instanceAPIEndpoints.settings;return await this.makeRequest(e)}async updateSetting(e,t){let s=this.getInstanceAPIURL()+this.replaceInURL(this.instanceAPIEndpoints.settingUpdate,{SETTING_ZUID:e}),n=JSON.stringify(t);return await this.makeRequest(s,"PUT",n)}}}])}));