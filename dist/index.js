!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Zesty=e():t.Zesty=e()}(window,(function(){return function(t){var e={};function s(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,s),a.l=!0,a.exports}return s.m=t,s.c=e,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=0)}([function(t,e,s){"use strict";s.r(e),s.d(e,"FetchWrapper",(function(){return n}));class n{constructor(t,e,s={}){this.instanceZUID=t,this.authToken=e,this.accountsAPIEndpoints={instanceAppInstallPOST:"/instances/INSTANCE_ZUID/app-installs",instanceAppInstalls:"/instances/INSTANCE_ZUID/app-installs",instanceAppInstallGET:"/instances/INSTANCE_ZUID/app-installs/APP_ZUID",instanceAppInstallDELETE:"/instances/INSTANCE_ZUID/app-installs/APP_ZUID",apps:"/apps",appsPOST:"/apps",appsGET:"apps/APP_ZUID",appsPUT:"apps/APP_ZUID",appsDELETE:"apps/APP_ZUID",intanceDnsPOST:"/instances/dns",instanceGET:"/instances/INSTANCE_ZUID",instances:"/instances",instancesInvitedGET:"/instances/invites",instanceUserGET:"/instances/INSTANCE_ZUID/users",instanceUsersRolesGET:"/instances/INSTANCE_ZUID/users/roles",instancesPendingUsersGET:"/instances/INSTANCE_ZUID/users/pending",instancesCompaniesGET:"/instances/INSTANCE_ZUID/companies",instancePUT:"/instances/INSTANCE_ZUID",instanceBluprintPUT:"/instances/INSTANCE_ZUID/blueprints",instanceDELETE:"/instances/INSTANCE_ZUID",domainPOST:"/instances/INSTANCE_ZUID/domains",domainPUT:"/instances/INSTANCE_ZUID/domains/DOMAIN_ZUID",domainGET:"/instances/INSTANCE_ZUID/domains/DOMAIN_ZUID",domainDELETE:"/instances/INSTANCE_ZUID/domains/DOMAIN_ZUID",domains:"/instances/INSTANCE_ZUID/domains",userGET:"/users/USER_ZUID",userInstancesGET:"/users/USER_ZUID/instances",usersPOST:"/users",userPUT:"/users/USER_ZUID",userDELETE:"/users/USER_ZUID",usersEmailPOST:"/users/emails",usersEmailDELETE:"/users/emails",userEmailsGET:"/users/emails",userEmailVerifyGET:"/users/emails/verifications",userEmailVerifyPOST:"/users/emails/verifications",companyGET:"/companies/COMPANY_ZUID",companies:"/companies",companiesPOST:"/companies",companyDELETE:"/companies/COMPANY_ZUID",inviteGET:"/invites/INVITE_ZUID",invites:"/invites",invitesPOST:"/invites",invitePUT:"/invites/INVITE_ZUID",inviteDELETE:"/invites/INVITE_ZUID",blueprintGET:"/blueprints/1",blueprints:"/blueprints",blueprintsPOST:"/blueprints",blueprintPUT:"/blueprints/1",blueprintDELETE:"/blueprints/1",blueprintInstanceGET:"/instances/INSTANCE_ZUID/blueprints",teamGET:"/teams/TEAM_ZUID",teamPOST:"/teams",teamPUT:"/teams/TEAM_ZUID",teamDELETE:"/teams/TEAM_ZUID",teams:"/teams",teamInstancesPOST:"/instances/INSTANCE_ZUID/teams",instancesTeamsGET:"/instances/INSTANCE_ZUID/teams",teamInstancesGET:"/teams/TEAM_ZUID/instances",teamInstanceDELETE:"/instances/INSTANCE_ZUID/teams/TEAM_ZUID",teamInviteGET:"/teams/invites/TEAM_INVITE_ZUID",teamInvites:"/teams/invites",teamInvitesPOST:"/teams/invites",teamInvitePUT:"/teams/invites/TEAM_INVITE_ZUID",teamInviteDELETE:"/teams/invites/TEAM_INVITE_ZUID",teamMembersGET:"/teams/TEAM_ZUID/users",teamMembersPUT:"/teams/TEAM_ZUID/users/USER_ZUID",teamMembersDELETE:"/teams/TEAM_ZUID/users/USER_ZUID",teamMembersPendingGET:"/teams/TEAM_ZUID/users/pending",roleGET:"/roles/ROLE_ZUID",roleDELETE:"/roles/ROLE_ZUID",rolesPOST:"/roles",roles:"/roles",instancesRoles:"/instances/INSTANCE_ZUID/roles",instancesRolesPOST:"/instances/INSTANCE_ZUID/roles",instancesRolesGET:"/instances/INSTANCE_ZUID/roles/ROLE_ZUID",userRolesGET:"/users/USER_ZUID/roles",userRolesPOST:"/users/USER_ZUID/roles/ROLE_ZUID",userRolesDELETE:"/users/USER_ZUID/roles/ROLE_ZUID",userRolesPUT:"/users/USER_ZUID/roles/ROLE_ZUID",rolesGranularGET:"/roles/ROLE_ZUID/granulars/RESOURCE_ZUID",rolesGranularDELETE:"/roles/ROLE_ZUID/granulars/RESOURCE_ZUID",rolesGranular:"/roles/ROLE_ZUID/granulars",rolesGranularPUT:"/roles/ROLE_ZUID/granulars",rolesGranularPOST:"/roles/ROLE_ZUID/granulars"},this.sitesServiceEndpoints={schedulePublishPOST:"/content/items/ITEM_ZUID/publish-schedule",scheduleUnpublishPATCH:"/content/items/ITEM_ZUID/publish-schedule/PUBLISHING_ZUID",itemsDELETE:"/content/sets/MODEL_ZUID/items/ITEM_ZUID"},this.instanceAPIEndpoints={models:"/content/models",fields:"/content/models/MODEL_ZUID/fields",itemsPublishing:"/content/models/MODEL_ZUID/items/ITEM_ZUID/publishings",itemsVersions:"/content/models/MODEL_ZUID/items/ITEM_ZUID/versions",items:"/content/models/MODEL_ZUID/items",views:"/web/views",settings:"/env/settings",settingUpdate:"/env/settings/SETTING_ZUID",stylesheets:"/web/stylesheets",stylesheetsVersions:"/web/stylesheets/STYLESHEET_ZUID/versions",scriptsVersions:"/web/scripts/SCRIPT_ZUID/versions/VERSION_NUMBER",scripts:"/web/scripts",headers:"/web/headers",nav:"/env/nav",headtags:"/web/headtags",audits:"/env/audits"},this.mediaAPIEndpoints={binsGETAll:"/media-manager-service/site/SITE_ID/bins",binsGET:"/media-manager-service/bin/BIN_ID",binsPATCH:"/media-manager-service/bin/BIN_ID",filesPOST:"/media-storage-service/upload/STORAGE_DRIVER/STORAGE_NAME",filesGET:"/media-manager-service/file/FILE_ID",filesGETAll:"/media-manager-service/bin/BIN_ID/files",filesPATCH:"/media-manager-service/file/FILE_ID",filesDELETE:"/media-manager-service/file/FILE_ID",groupsGET:"/media-manager-service/group/GROUP_ID",groupsGETAll:"/media-manager-service/bin/BIN_ID/groups",groupsPOST:"/media-manager-service/group",groupsPATCH:"/media-manager-service/group/GROUP_ID",groupsDELETE:"/media-manager-service/group/GROUP_ID"},this.authAPIEndpoints={verify:"/verify"},this.authAPIURL=s.hasOwnProperty("authAPIURL")?s.authAPIURL:"https://auth.api.zesty.io",this.instancesAPIURL=s.hasOwnProperty("instancesAPIURL")?"https://"+this.instanceZUID+s.instancesAPIURL:"https://"+this.instanceZUID+".api.zesty.io/v1",this.accountsAPIURL=s.hasOwnProperty("accountsAPIURL")?s.accountsAPIURL:"https://accounts.api.zesty.io/v1",this.mediaAPIURL=s.hasOwnProperty("mediaAPIURL")?s.mediaAPIURL:"https://svc.zesty.io",this.sitesServiceURL=s.hasOwnProperty("sitesServiceURL")?s.sitesServiceURL+this.instanceZUID:"https://svc.zesty.io/sites-service/"+this.instanceZUID,this.logErrors=!!s.hasOwnProperty("logErrors")&&s.logErrors,this.logResponses=!!s.hasOwnProperty("logResponses")&&s.logResponses,this.sitesServiceURL=this.makeInstanceZUIDURL(this.sitesServiceURL,t)}makeInstanceZUIDURL(t,e){return this.replaceInURL(t,{INSTANCE_ZUID:e})}getInstanceAPIURL(){return this.instancesAPIURL}setInstanceZUID(t){return this.instanceZUID=t}buildAPIURL(t,e="instances"){switch(e){case"accounts":return`${this.accountsAPIURL}${t}`;case"instances":return`${this.instancesAPIURL}${t}`;case"sites-service":return`${this.sitesServiceURL}${t}`;case"media":return`${this.mediaAPIURL}${t}`;default:return""}}replaceInURL(t,e){for(const s in e)t=t.replace(s,e[s]);return t}async makeRequest(t,e="GET",s="",n={}){"GET"!=e&&(n.body=s),n.method=e,n.headers={"Content-Type":"application/json",Authorization:`Bearer ${this.authToken}`},n.credentials="same-origin";try{const e=await fetch(t,n);return await e.json()}catch(t){return console.error("Error:",t),t}}async verify(){let t=this.authAPIURL+this.authAPIEndpoints.verify;return await this.makeRequest(t)}async getModels(){let t=this.getInstanceAPIURL()+this.instanceAPIEndpoints.models;return await this.makeRequest(t)}async getViews(){let t=this.getInstanceAPIURL()+this.instanceAPIEndpoints.views;return await this.makeRequest(t)}async getView(t){let e=this.getInstanceAPIURL()+this.instanceAPIEndpoints.views+"/"+t;return await this.makeRequest(e)}async createView(t,e="",s="ajax-json"){let n=JSON.stringify({code:e,fileName:t,type:s}),a=this.getInstanceAPIURL()+this.instanceAPIEndpoints.views;return await this.makeRequest(a,"POST",n)}async updateView(t,e){let s=JSON.stringify({code:e}),n=this.getInstanceAPIURL()+this.instanceAPIEndpoints.views+"/"+t;return await this.makeRequest(n,"PUT",s)}async publishView(t,e){let s=JSON.stringify({code:e}),n=this.getInstanceAPIURL()+this.instanceAPIEndpoints.views+"/"+t+"?action=publish";return await this.makeRequest(n,"PUT",s)}async installApp(t,e){let s=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.instanceAppInstallPOST,{INSTANCE_ZUID:t}),n=JSON.stringify({appZUID:e});return await this.makeRequest(s,"POST",n)}async updateInstalledApp(t,e){let s=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.instanceAppInstallPOST,{INSTANCE_ZUID:t}),n=JSON.stringify({appZUID:e});return await this.makeRequest(s,"PUT",n)}async getAllInstalledApps(t){let e=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.instanceAppInstalls,{INSTANCE_ZUID:t});return await this.makeRequest(e)}async getInstalledApp(t,e){let s=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.instanceAppInstallGET,{INSTANCE_ZUID:t,APP_ZUID:e});return await this.makeRequest(s)}async deleteInstalledApp(t,e){let s=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.instanceAppInstallDELETE,{INSTANCE_ZUID:t,APP_ZUID:e});return await this.makeRequest(s,"DELETE")}async registerApp(t,e,s,n){let a=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.appsPOST),i=JSON.stringify({name:t,label:e,url:s,publisher:n});return await this.makeRequest(a,"POST",i)}async getAllRegisterdApps(){let t=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.apps);return await this.makeRequest(t)}async getRegisteredApp(t){let e=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.appsGET,{APP_ZUID:t});return await this.makeRequest(e)}async updateRegisteredApp(t){let e=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.appsPUT,{APP_ZUID:t}),s=JSON.stringify({appZUID:t});return await this.makeRequest(e,"PUT",s)}async deleteRegisteredApp(t){let e=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.appsDELETE,{APP_ZUID:t});return await this.makeRequest(e,"DELETE")}async getSettings(){let t=this.getInstanceAPIURL()+this.instanceAPIEndpoints.settings;return await this.makeRequest(t)}async updateSetting(t,e){let s=this.getInstanceAPIURL()+this.replaceInURL(this.instanceAPIEndpoints.settingUpdate,{SETTING_ZUID:t}),n=JSON.stringify(e);return await this.makeRequest(s,"PUT",n)}async getFields(t){let e=this.getInstanceAPIURL()+this.replaceInURL(this.instanceAPIEndpoints.fields,{MODEL_ZUID:t});return await this.makeRequest(e)}async createInstance(t,e){let s=JSON.stringify({name:t,ecoZUID:e}),n=this.accountsAPIURL+this.accountsAPIEndpoints.instances;return await this.makeRequest(n,"POST",s)}async verifyDns(t,e,s){let n=JSON.stringify({domain:t,aRecord:e,cName:s}),a=this.accountsAPIURL+this.accountsAPIEndpoints.intanceDnsPOST;return await this.makeRequest(a,"POST",n)}async getInstance(t){let e=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.instanceGET,{INSTANCE_ZUID:t});return await this.makeRequest(e)}async getInstances(){let t=this.accountsAPIURL+this.accountsAPIEndpoints.instances;return await this.makeRequest(t)}async getAllInvitedInstances(){let t=this.accountsAPIURL+this.accountsAPIEndpoints.instancesInvited;return await this.makeRequest(t)}async getInstanceUsers(t){let e=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.instanceUserGET,{INSTANCE_ZUID:t});return await this.makeRequest(e)}async getInstanceUsersWithRoles(t){let e=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.instanceUsersRolesGET,{INSTANCE_ZUID:t});return await this.makeRequest(e)}async getInstancePendingUsers(t){let e=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.instancesPendingUsersGET,{INSTANCE_ZUID:t});return await this.makeRequest(e)}async getInstanceCompanies(t){let e=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.instancesCompaniesGET,{INSTANCE_ZUID:t});return await this.makeRequest(e)}async updateInstance(t,e){let s=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.instancePUT,{INSTANCE_ZUID:t})+`?action=${e}`;return await this.makeRequest(s,"PUT")}async updateInstanceBlueprint(t,e){let s=JSON.stringify({zuid:e}),n=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.instanceBluprintPUT,{INSTANCE_ZUID:t});return await this.makeRequest(n,"PUT",s)}async deleteInstance(t){let e=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.instanceDELETE,{INSTANCE_ZUID:t});return await this.makeRequest(e,"DELETE")}async createDomain(t,e){let s=JSON.stringify({domain:e}),n=this.accountsAPIURL+this.accountsAPIEndpoints.domainPOST;return await this.makeRequest(n,"POST",s)}async updateDomain(t,e,s){let n=JSON.stringify({domain:s}),a=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.domainPUT,{INSTANCE_ZUID:t,DOMAIN_ZUID:e});return await this.makeRequest(a,"PUT",n)}async getDomain(t,e){let s=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.domainGET,{INSTANCE_ZUID:t,DOMAIN_ZUID:e});return await this.makeRequest(s)}async deleteDomain(t,e){let s=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.domainDELETE,{INSTANCE_ZUID:t,DOMAIN_ZUID:e});return await this.makeRequest(s,"DELETE")}async getDomain(t){let e=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.domains,{INSTANCE_ZUID:t});return await this.makeRequest(e)}async getUser(t){let e=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.userGET,{USER_ZUID:t});return await this.makeRequest(e)}async getUserInstances(t){let e=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.userInstancesGET,{USER_ZUID:t});return await this.makeRequest(e)}async createUser(t,e,s,n){let a=JSON.stringify({firstName:t,lastName:e,email:s,password:n}),i=this.accountsAPIURL+this.accountsAPIEndpoints.usersPOST;return await this.makeRequest(i,"POST",a)}async updateUser(t){let e=JSON.stringify({}),s=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.userPUT,{USER_ZUID:t})+"?action=updatePassword";return await this.makeRequest(s,"PUT",e)}async deleteUser(t){let e=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.userDELETE,{USER_ZUID:t});return await this.makeRequest(e,"DELETE")}async addUnverifiedEmail(t,e){let s=JSON.stringify({name:t,address:e}),n=this.accountsAPIURL+this.accountsAPIEndpoints.usersEmailPOST;return await this.makeRequest(n,"POST",s)}async deleteUserEmail(t){let e=this.accountsAPIURL+this.accountsAPIEndpoints.usersEmailDELETE+`?address=${t}`;return await this.makeRequest(e,"DELETE")}async getUserEmails(){let t=this.accountsAPIURL+this.accountsAPIEndpoints.userEmailsGET;return await this.makeRequest(t)}async verifyEmailAddress(t,e){let s=this.accountsAPIURL+this.accountsAPIEndpoints.userEmailVerifyGET+`?address=${t}&verificationCode${e}`;return await this.makeRequest(s)}async resendEmailVerification(t){let e=JSON.stringify({}),s=this.accountsAPIURL+this.accountsAPIEndpoints.userEmailVerifyPOST+`?address=${t}`;return await this.makeRequest(s,"POST",e)}async getCompany(t){let e=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.companyGET,{COMPANY_ZUID:t});return await this.makeRequest(e)}async getAllCompanies(){let t=this.accountsAPIURL+this.accountsAPIEndpoints.companies;return await this.makeRequest(t)}async createCompany(t,e){let s=JSON.stringify({name:t,description:e}),n=this.accountsAPIURL+this.accountsAPIEndpoints.companiesPOST;return await this.makeRequest(n,"POST",s)}async deleteCompany(t,e,s,n){let a=JSON.stringify({firstName:e,lastName:s,email:n}),i=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.companyDELETE,{COMPANY_ZUID:t});return await this.makeRequest(i,"DELETE",a)}async getInvite(t){let e=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.inviteGET,{INVITE_ZUID:t});return await this.makeRequest(e)}async getAllInvites(){let t=this.accountsAPIURL+this.accountsAPIEndpoints.invites;return await this.makeRequest(t)}async createInvite(t,e,s,n){let a=JSON.stringify({inviteeName:t,inviteeEmail:e,entityZUID:s,accessLevel:n}),i=this.accountsAPIURL+this.accountsAPIEndpoints.invitesPOST;return await this.makeRequest(i,"POST",a)}async respondToInvite(t,e){let s=JSON.stringify({}),n=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.invitePUT,{INVITE_ZUID:t})+`?action=${e}`;return await this.makeRequest(n,"PUT",s)}async deleteInvite(t){let e=JSON.stringify({}),s=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.inviteDELETE,{INVITE_ZUID:t});return await this.makeRequest(s,"DELETE",e)}async getBlueprint(){let t=this.accountsAPIURL+this.accountsAPIEndpoints.blueprintGET;return await this.makeRequest(t)}async getAllBlueprints(){let t=this.accountsAPIURL+this.accountsAPIEndpoints.blueprints;return await this.makeRequest(t)}async createBlueprint(t){let e=JSON.stringify({name:t}),s=this.accountsAPIURL+this.accountsAPIEndpoints.blueprintsPOST;return await this.makeRequest(s,"POST",e)}async updateBlueprint(t){let e=JSON.stringify({name:t}),s=this.accountsAPIURL+this.accountsAPIEndpoints.blueprintPUT;return await this.makeRequest(s,"PUT",e)}async deleteBlueprint(){let t=JSON.stringify({}),e=this.accountsAPIURL+this.accountsAPIEndpoints.blueprintDELETE;return await this.makeRequest(e,"DELETE",t)}async getInstanceBlueprint(t){let e=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.blueprintInstanceGET,{INSTANCE_ZUID:t});return await this.makeRequest(e)}async getTeam(t){let e=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.teamGET,{TEAM_ZUID:t});return await this.makeRequest(e)}async createTeam(t){let e=JSON.stringify({Name:t}),s=this.accountsAPIURL+this.accountsAPIEndpoints.teamPOST;return await this.makeRequest(s,"POST",e)}async updateTeam(t,e){let s=JSON.stringify({name:t}),n=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.teamPUT,{TEAM_ZUID:e});return await this.makeRequest(n,"PUT",s)}async deleteTeam(t){let e=JSON.stringify({}),s=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.teamDELETE,{TEAM_ZUID:t});return await this.makeRequest(s,"DELETE",e)}async getAllTeams(){let t=this.accountsAPIURL+this.accountsAPIEndpoints.teams;return await this.makeRequest(t)}async addTeamToInstance(t,e,s){let n=JSON.stringify({teamZUID:e,roleZUID:s}),a=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.teamInstancesPOST,{INSTANCE_ZUID:t});return await this.makeRequest(a,"POST",n)}async getAllInstancesTeams(t){let e=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.instancesTeamsGET,{INSTANCE_ZUID:t});return await this.makeRequest(e)}async getAllTeamsInstances(t){let e=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.teamInstancesGET,{TEAM_ZUID:t});return await this.makeRequest(e)}async removeTeamFromInstance(t,e){let s=JSON.stringify({}),n=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.teamInstanceDELETE,{TEAM_ZUID:e,INSTANCE_ZUID:t});return await this.makeRequest(n,"DELETE",s)}async getTeamInvite(t){let e=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.teamInviteGET,{TEAM_INVITE_ZUID:t});return await this.makeRequest(e)}async getAllTeamInvites(){let t=this.accountsAPIURL+this.accountsAPIEndpoints.teamInvites;return await this.makeRequest(t)}async createTeamInvite(t,e,s){let n=JSON.stringify({teamZUID:t,inviteeName:e,inviteeEmail:s}),a=this.accountsAPIURL+this.accountsAPIEndpoints.teamInvitesPOST;return await this.makeRequest(a,"POST",n)}async respondToTeamInvite(t,e){let s=JSON.stringify({}),n=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.teamInvitePUT,{TEAM_INVITE_ZUID:t})+`?action=${e}`;return await this.makeRequest(n,"PUT",s)}async deleteTeamInvite(t){let e=JSON.stringify({}),s=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.teamInviteDELETE,{TEAM_INVITE_ZUID:t});return await this.makeRequest(s,"DELETE",e)}async getTeamMembers(t){let e=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.teamMembersGET,{TEAM_ZUID:t});return await this.makeRequest(e)}async updateTeamMembers(t,e,s=!1){let n=JSON.stringify({admin:s}),a=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.teamMembersPUT,{TEAM_ZUID:t,USER_ZUID:e});return await this.makeRequest(a,"PUT",n)}async deleteTeamMember(t,e){let s=JSON.stringify({}),n=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.teamMembersDELETE,{TEAM_ZUID:t,USER_ZUID:e});return await this.makeRequest(n,"DELETE",s)}async getTeamMembersPending(t){let e=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.teamMembersPendingGET,{TEAM_ZUID:t});return await this.makeRequest(e)}async getInstanceRoles(t){let e=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.instancesRoles,{INSTANCE_ZUID:t});return await this.makeRequest(e)}async createInstanceRoles(t){let e=JSON.stringify({}),s=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.instancesRolesPOST,{INSTANCE_ZUID:t});return await this.makeRequest(s,"POST",e)}async getInstanceRole(t,e){let s=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.instancesRolesGET,{INSTANCE_ZUID:t,ROLE_ZUID:e});return await this.makeRequest(s)}async getRole(t){let e=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.roleGET,{ROLE_ZUID:t});return await this.makeRequest(e)}async deleteRole(t){let e=JSON.stringify({}),s=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.roleDELETE,{ROLE_ZUID:t});return await this.makeRequest(s,"DELETE",e)}async createRole(t,e,s){let n=JSON.stringify({name:t,entityZUID:e,systemRoleZUID:s}),a=this.accountsAPIURL+this.accountsAPIEndpoints.rolesPOST;return await this.makeRequest(a,"POST",n)}async getRoles(){let t=this.accountsAPIURL+this.accountsAPIEndpoints.roles;return await this.makeRequest(t)}async getUserRoles(t){let e=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.userRolesGET,{USER_ZUID:t});return await this.makeRequest(e)}async assignUserRole(t,e){let s=JSON.stringify({}),n=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.userRolesPOST,{USER_ZUID:t,ROLE_ZUID:e});return await this.makeRequest(n,"POST",s)}async deleteUserRole(t,e){let s=JSON.stringify({}),n=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.userRolesDELETE,{USER_ZUID:t,ROLE_ZUID:e});return await this.makeRequest(n,"DELETE",s)}async updateUserRole(t,e){let s=JSON.stringify({roleZUID:e}),n=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.userRolesPUT,{USER_ZUID:t,ROLE_ZUID:e});return await this.makeRequest(n,"PUT",s)}async getGranularRole(t,e){let s=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.rolesGranularGET,{ROLE_ZUID:t,RESOURCE_ZUID:e});return await this.makeRequest(s)}async deleteGranularRole(t,e){let s=JSON.stringify({}),n=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.rolesGranularDELETE,{ROLE_ZUID:t,RESOURCE_ZUID:e});return await this.makeRequest(n,"DELETE",s)}async getAllGranularRoles(t){let e=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.rolesGranular,{ROLE_ZUID:t});return await this.makeRequest(e)}async updateGranularRoles(t,e,s="",n=!0,a=!0,i=!0,c=!1){let r=JSON.stringify({resourceZUID:e,name:s,create:n,read:a,update:i,delete:c}),I=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.rolesGranularPUT,{ROLE_ZUID:t});return await this.makeRequest(I,"PUT",r)}async createGranularRole(t,e,s=!0){let n=JSON.stringify({resourceZUID:e,create:s}),a=this.accountsAPIURL+this.replaceInURL(this.accountsAPIEndpoints.rolesGranularPOST,{ROLE_ZUID:t});return await this.makeRequest(a,"POST",n)}}}])}));