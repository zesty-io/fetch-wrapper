/**
 * Zesty.io Rest API Fetch Wrapper
 * Used to simply remote authenticated requests to the Zesty Auth, Accounts, and Instances API
 *
 * More info at https://github.com/zesty-io/websites/fetch-api-wrapper/
 */

import {
   IaccountsAPIEndpoints,
   IauthAPIEndpoints,
   ICreateTeam,
   ICreateTeamInvite,
   ICreateWebhook,
   IinstanceAPIEndpoints,
   ImediaAPIEndpoints,
   IsiteServicesEndpoints,
   IUpdateTeam,
   OPTIONS,
   GranularRole,
} from "types"

import FormData from "form-data"
import { customParams, date7DaysAgo, dateToday } from "./utils/index"

export default class FetchWrapper {
   private instanceZUID: string
   private authToken: string
   private accountsAPIEndpoints: IaccountsAPIEndpoints
   private sitesServiceEndpoints: IsiteServicesEndpoints
   private instanceAPIEndpoints: IinstanceAPIEndpoints
   private mediaAPIEndpoints: ImediaAPIEndpoints
   private authAPIEndpoints: IauthAPIEndpoints
   private authAPIURL: string
   private instancesAPIURL: string
   private accountsAPIURL: string
   private mediaAPIURL: string
   private sitesServiceURL: string
   private logErrors: boolean
   private logResponses: boolean

   constructor(instanceZUID: string, authToken: string, options?: OPTIONS) {
      this.instanceZUID = instanceZUID
      this.authToken = authToken

      this.accountsAPIEndpoints = {
         instanceAppInstallPOST: "/instances/INSTANCE_ZUID/app-installs",
         instanceAppInstalls: "/instances/INSTANCE_ZUID/app-installs",
         instanceAppInstallGET: "/instances/INSTANCE_ZUID/app-installs/APP_ZUID",
         instanceAppInstallDELETE: "/instances/INSTANCE_ZUID/app-installs/APP_ZUID",
         apps: "/apps",
         appsPOST: "/apps",
         appsGET: "apps/APP_ZUID",
         appsPUT: "apps/APP_ZUID",
         appsDELETE: "apps/APP_ZUID",
         // Instances api
         intanceDnsPOST: "/instances/dns",
         instanceGET: "/instances/INSTANCE_ZUID",
         instances: "/instances",
         instancesInvitedGET: "/instances/invites",
         instanceUserGET: "/instances/INSTANCE_ZUID/users",
         instanceUsersRolesGET: "/instances/INSTANCE_ZUID/users/roles",
         instancesPendingUsersGET: "/instances/INSTANCE_ZUID/users/pending",
         instancesCompaniesGET: "/instances/INSTANCE_ZUID/companies",
         instancePUT: "/instances/INSTANCE_ZUID",
         instanceBluprintPUT: "/instances/INSTANCE_ZUID/blueprints",
         instanceDELETE: "/instances/INSTANCE_ZUID",
         // Instance/Domains api
         domainPOST: "/instances/INSTANCE_ZUID/domains",
         domainPUT: "/instances/INSTANCE_ZUID/domains/DOMAIN_ZUID",
         domainGET: "/instances/INSTANCE_ZUID/domains/DOMAIN_ZUID",
         domainDELETE: "/instances/INSTANCE_ZUID/domains/DOMAIN_ZUID",
         domains: "/instances/INSTANCE_ZUID/domains",
         // Users
         userGET: "/users/USER_ZUID",
         userInstancesGET: "/users/USER_ZUID/instances",
         usersPOST: "/users",
         userPUT: "/users/USER_ZUID",
         userDELETE: "/users/USER_ZUID",
         // User Emails
         usersEmailPOST: "/users/emails",
         usersEmailDELETE: "/users/emails",
         userEmailsGET: "/users/emails",
         userEmailVerifyGET: "/users/emails/verifications",
         userEmailVerifyPOST: "/users/emails/verifications",
         userForgotPassword: "/users/passwords/resets",
         userResetPasswordConfirm: "/password-reset",
         // Companies
         companyGET: "/companies/COMPANY_ZUID",
         companies: "/companies",
         companiesPOST: "/companies",
         companyDELETE: "/companies/COMPANY_ZUID",
         // Invites
         inviteGET: "/invites/INVITE_ZUID",
         invites: "/invites",
         invitesPOST: "/invites",
         invitePUT: "/invites/INVITE_ZUID",
         inviteDELETE: "/invites/INVITE_ZUID",
         //  Blueprints
         blueprintGET: "/blueprints/1",
         blueprints: "/blueprints",
         blueprintsPOST: "/blueprints",
         blueprintPUT: "/blueprints/1",
         blueprintDELETE: "/blueprints/1",
         blueprintInstanceGET: "/instances/INSTANCE_ZUID/blueprints",
         // Teams
         teamGET: "/teams/TEAM_ZUID",
         teamPOST: "/teams",
         teamPUT: "/teams/TEAM_ZUID",
         teamDELETE: "/teams/TEAM_ZUID",
         teams: "/teams",
         // Teams Instances
         teamInstancesPOST: "/instances/INSTANCE_ZUID/teams",
         instancesTeamsGET: "/instances/INSTANCE_ZUID/teams",
         teamInstancesGET: "/teams/TEAM_ZUID/instances",
         teamInstanceDELETE: "/instances/INSTANCE_ZUID/teams/TEAM_ZUID",
         // Team Invite
         teamInviteGET: "/teams/invites/TEAM_INVITE_ZUID",
         teamInvites: "/teams/invites",
         teamInvitesPOST: "/teams/invites",
         teamInvitePUT: "/teams/invites/TEAM_INVITE_ZUID",
         teamInviteDELETE: "/teams/invites/TEAM_INVITE_ZUID",
         // Team Members
         teamMembersGET: "/teams/TEAM_ZUID/users",
         teamMembersPUT: "/teams/TEAM_ZUID/users/USER_ZUID",
         teamMembersDELETE: "/teams/TEAM_ZUID/users/USER_ZUID",
         teamMembersPendingGET: "/teams/TEAM_ZUID/users/pending",
         // Roles
         roleGET: "/roles/ROLE_ZUID",
         roleDELETE: "/roles/ROLE_ZUID",
         rolePUT: "/roles/ROLE_ZUID",
         rolesPOST: "/roles",
         roles: "/roles",
         instancesRoles: "/instances/INSTANCE_ZUID/roles",
         instancesRolesPOST: "/instances/INSTANCE_ZUID/roles",
         instancesRolesGET: "/instances/INSTANCE_ZUID/roles/ROLE_ZUID",
         userRolesGET: "/users/USER_ZUID/roles",
         userRolesPOST: "/users/USER_ZUID/roles/ROLE_ZUID",
         userRolesDELETE: "/users/USER_ZUID/roles/ROLE_ZUID",
         userRolesPUT: "/users/USER_ZUID/roles/ROLE_ZUID",
         bulkReassignUserRolesPUT: "/users/roles/ROLE_ZUID",
         // Roles Granular
         rolesGranularGET: "/roles/ROLE_ZUID/granulars/RESOURCE_ZUID",
         rolesGranularDELETE: "/roles/ROLE_ZUID/granulars/RESOURCE_ZUID",
         rolesGranular: "/roles/ROLE_ZUID/granulars",
         rolesGranularPUT: "/roles/ROLE_ZUID/granulars",
         rolesGranularPOST: "/roles/ROLE_ZUID/granulars",
         // Ecosystem
         ecosystemPOST: "/ecosystems",
         ecosystemGET: "/ecosystems/ECOSYSTEM_ZUID",
         ecosystems: "/ecosystems",
         ecosystemPUT: "/ecosystems/ECOSYSTEM_ZUID",
         ecosystemDELETE: "/ecosystems/ECOSYSTEM_ZUID",
         // Webhooks
         webhooks: "/webhooks",
         webhooksPOST: "/webhooks",
         webhookGET: "/webhooks/WEBHOOK_ZUID",
         instanceWebhookGET: "/instances/INSTANCE_ZUID/webhooks",
         webhookDELETE: "/webhooks/WEBHOOK_ZUID",
         // Tokens
         tokensPOST: "/tokens",
         tokensGET: "/tokens/TOKEN_ZUID",
         instanceTokenGET: "/instances/INSTANCE_ZUID/tokens",
         tokensPUT: "/tokens/TOKEN_ZUID",
         tokensDELETE: "/tokens/TOKEN_ZUID",
      }

      this.sitesServiceEndpoints = {
         schedulePublishPOST: "/content/items/ITEM_ZUID/publish-schedule",
         scheduleUnpublishPATCH:
            "/content/items/ITEM_ZUID/publish-schedule/PUBLISHING_ZUID",
         itemsDELETE: "/content/sets/MODEL_ZUID/items/ITEM_ZUID",
      }

      this.instanceAPIEndpoints = {
         models: "/content/models",
         fields: "/content/models/MODEL_ZUID/fields",
         itemsPublishing: "/content/models/MODEL_ZUID/items/ITEM_ZUID/publishings",
         itemsVersions: "/content/models/MODEL_ZUID/items/ITEM_ZUID/versions",
         items: "/content/models/MODEL_ZUID/items",
         views: "/web/views", // ?action=publish&purge_cache=true
         settings: "/env/settings",
         settingUpdate: "/env/settings/SETTING_ZUID",
         stylesheets: "/web/stylesheets", // ?action=publish&purge_cache=true
         stylesheetsVersions: "/web/stylesheets/STYLESHEET_ZUID/versions",
         scriptsVersions: "/web/scripts/SCRIPT_ZUID/versions/VERSION_NUMBER",
         scripts: "/web/scripts", // publish by adding: ?action=publish&purge_cache=true",
         headers: "/web/headers",
         nav: "/env/nav",
         headtags: "/web/headtags",
         audits: "/env/audits",
         // Seach Items
         searchItemsGET: "/search/items",
      }

      this.mediaAPIEndpoints = {
         binsGETAll: "/media-manager-service/site/SITE_ID/bins",
         binsGET: "/media-manager-service/bin/BIN_ID",
         binsPATCH: "/media-manager-service/bin/BIN_ID",
         filesPOST: "/media-storage-service/upload/STORAGE_DRIVER/STORAGE_NAME",
         filesGET: "/media-manager-service/file/FILE_ID",
         filesGETAll: "/media-manager-service/bin/BIN_ID/files",
         filesPATCH: "/media-manager-service/file/FILE_ID",
         filesDELETE: "/media-manager-service/file/FILE_ID",
         groupsGET: "/media-manager-service/group/GROUP_ID",
         groupsGETAll: "/media-manager-service/bin/BIN_ID/groups",
         groupsPOST: "/media-manager-service/group",
         groupsPATCH: "/media-manager-service/group/GROUP_ID",
         groupsDELETE: "/media-manager-service/group/GROUP_ID",
      }

      this.authAPIEndpoints = {
         verify: "/verify",
         login: "/login",
         verify2fa: "/verify-2fa",
         logout: "/logout",
      }

      this.authAPIURL = options?.hasOwnProperty("authAPIURL")
         ? options.authAPIURL
         : "https://auth.api.zesty.io"
      this.instancesAPIURL = options?.hasOwnProperty("instancesAPIURL")
         ? "https://" + this.instanceZUID + options.instancesAPIURL
         : "https://" + this.instanceZUID + ".api.zesty.io/v1"
      this.accountsAPIURL = options?.hasOwnProperty("accountsAPIURL")
         ? options.accountsAPIURL
         : "https://accounts.api.zesty.io/v1"
      this.mediaAPIURL = options?.hasOwnProperty("mediaAPIURL")
         ? options.mediaAPIURL
         : "https://svc.zesty.io"
      this.sitesServiceURL = options?.hasOwnProperty("sitesServiceURL")
         ? options.sitesServiceURL + this.instanceZUID
         : "https://svc.zesty.io/sites-service/" + this.instanceZUID
      this.logErrors = options?.hasOwnProperty("logErrors") ? options.logErrors : false
      this.logResponses = options?.hasOwnProperty("logResponses")
         ? options.logResponses
         : false

      this.sitesServiceURL = this.makeInstanceZUIDURL(this.sitesServiceURL, instanceZUID)
   }
   makeInstanceZUIDURL(url: string, zuid: string) {
      return this.replaceInURL(url, { INSTANCE_ZUID: zuid })
   }
   getInstanceAPIURL() {
      return this.instancesAPIURL
   }
   setInstanceZUID(zuid: string) {
      return (this.instanceZUID = zuid)
   }
   setToken(authToken: string) {
      return (this.authToken = authToken)
   }

   buildAPIURL(uri: string, api = "instances") {
      switch (api) {
         case "accounts":
            return `${this.accountsAPIURL}${uri}`
         case "instances":
            return `${this.instancesAPIURL}${uri}`
         case "sites-service":
            return `${this.sitesServiceURL}${uri}`
         case "media":
            return `${this.mediaAPIURL}${uri}`
         default:
            return ""
      }
   }

   replaceInURL(url: string, replacementObject: any = {}) {
      for (const key in replacementObject) {
         url = url.replace(key, replacementObject[key])
      }

      return url
   }

   async makeRequest(
      url: string,
      method = "GET",
      body = "",
      options: any = {},
      token = "",
   ) {
      if (method != "GET") options.body = body

      options.method = method
      options.headers = {
         "Content-Type": "application/json",
         Authorization: `Bearer ${token !== "" ? token : this.authToken}`,
      }
      options.credentials = "same-origin"

      try {
         const res = await fetch(url, options)
         const status = res.status
         const json = await res.json()
         return { ...json, status }
      } catch (err) {
         console.error("Error:", err)
         return err
      }
   }

   // Auth functions
   async verify() {
      let url = this.authAPIURL + this.authAPIEndpoints.verify
      return await this.makeRequest(url)
   }

   async login(email: string, password: string) {
      let url = this.authAPIURL + this.authAPIEndpoints.login
      const body: any = new FormData()
      body.append("email", email)
      body.append("password", password)

      const params = customParams(body, "POST")
      try {
         const res = await fetch(url, params)
         return await res.json()
      } catch (error) {
         console.log(error)
         return error
      }
   }

   async verify2FA(mfaToken: string) {
      let url = this.authAPIURL + this.authAPIEndpoints.verify2fa
      const body: any = new FormData()
      body.append("token", mfaToken)

      const params = customParams(body, "POST", this.authToken)
      try {
         const res = await fetch(url, params)
         return await res.json()
      } catch (error) {
         console.log(error)
         return error
      }
   }

   async verify2FAAuto() {
      let url = this.authAPIURL + this.authAPIEndpoints.verify2fa
      try {
         return await this.makeRequest(url, "GET", this.authToken)
      } catch (error) {
         console.log(error)
         return error
      }
   }

   async logout() {
      let url = this.authAPIURL + this.authAPIEndpoints.logout
      try {
         return await this.makeRequest(url, "GET", this.authToken)
      } catch (error) {
         console.log(error)
         return error
      }
   }

   async getModels(zuid = "") {
      let url = ""
      if (zuid) {
         url = `https://${zuid}.api.zesty.io/v1/content/models/`
      } else {
         url = this.getInstanceAPIURL() + this.instanceAPIEndpoints.models
      }
      return await this.makeRequest(url)
   }

   async getInstanceAudit(limit = "100") {
      let url =
         this.getInstanceAPIURL() + this.instanceAPIEndpoints.audits + `?limit=${limit}`
      return await this.makeRequest(url)
   }

   // setting initially the zuid to avoid issues of not getting properly the data
   async getInstanceAuditInitZUID(limit: number = 20, zuid: string, url = "") {
      if (url) {
         return await this.makeRequest(url)
      }

      if (this.getInstanceAPIURL().includes("undefined")) {
         url = this.getInstanceAPIURL().replace("undefined", zuid)
      } else {
         const getZuidInURL = this.getInstanceAPIURL().substring(
            8,
            this.getInstanceAPIURL().indexOf(".api"),
         )
         url = this.getInstanceAPIURL().replace(getZuidInURL, zuid)
      }

      url = url + this.instanceAPIEndpoints.audits + `?limit=${limit}`
      return await this.makeRequest(url)
   }

   async getModelItems(zuid: string) {
      let url =
         this.getInstanceAPIURL() +
         this.instanceAPIEndpoints.items.replace("MODEL_ZUID", zuid)
      return await this.makeRequest(url)
   }

   async getViews() {
      let url = this.getInstanceAPIURL() + this.instanceAPIEndpoints.views
      return await this.makeRequest(url)
   }

   async getView(zuid: string) {
      let url = this.getInstanceAPIURL() + this.instanceAPIEndpoints.views + "/" + zuid
      return await this.makeRequest(url)
   }

   async createView(fileName: string, code = "", type = "ajax-json") {
      let payload = JSON.stringify({
         code: code,
         fileName: fileName,
         type: type,
      })
      let url = this.getInstanceAPIURL() + this.instanceAPIEndpoints.views
      return await this.makeRequest(url, "POST", payload)
   }

   async updateView(viewZUID: string, code: string) {
      let payload = JSON.stringify({
         code: code,
      })
      let url =
         this.getInstanceAPIURL() + this.instanceAPIEndpoints.views + "/" + viewZUID
      return await this.makeRequest(url, "PUT", payload)
   }

   async publishView(viewZUID: string, code: string) {
      let payload = JSON.stringify({
         code: code,
      })
      let url =
         this.getInstanceAPIURL() +
         this.instanceAPIEndpoints.views +
         `/${viewZUID}?action=publish`

      return await this.makeRequest(url, "POST", payload)
   }

   // APP installations Section
   async installApp(instanceZUID: string, appZUID: string) {
      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.instanceAppInstallPOST, {
            INSTANCE_ZUID: instanceZUID,
         })
      let payload = JSON.stringify({
         appZUID: appZUID,
      })
      return await this.makeRequest(url, "POST", payload)
   }
   async updateInstalledApp(instanceZUID: string, appZUID: string) {
      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.instanceAppInstallPOST, {
            INSTANCE_ZUID: instanceZUID,
         })
      let payload = JSON.stringify({
         appZUID: appZUID,
      })
      return await this.makeRequest(url, "PUT", payload)
   }
   async getAllInstalledApps(instanceZUID: string) {
      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.instanceAppInstalls, {
            INSTANCE_ZUID: instanceZUID,
         })
      return await this.makeRequest(url)
   }
   async getInstalledApp(instanceZUID: string, appZUID: string) {
      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.instanceAppInstallGET, {
            INSTANCE_ZUID: instanceZUID,
            APP_ZUID: appZUID,
         })
      return await this.makeRequest(url)
   }
   async deleteInstalledApp(instanceZUID: string, appZUID: string) {
      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.instanceAppInstallDELETE, {
            INSTANCE_ZUID: instanceZUID,
            APP_ZUID: appZUID,
         })
      return await this.makeRequest(url, "DELETE")
   }

   // App Registration Section
   async registerApp(name: string, label: string, uri: string, publisher: string) {
      let url =
         this.accountsAPIURL + this.replaceInURL(this.accountsAPIEndpoints.appsPOST)
      let payload = JSON.stringify({
         name,
         label,
         url: uri,
         publisher,
      })
      return await this.makeRequest(url, "POST", payload)
   }
   async getAllRegisterdApps() {
      let url = this.accountsAPIURL + this.replaceInURL(this.accountsAPIEndpoints.apps)
      return await this.makeRequest(url)
   }
   async getRegisteredApp(appZUID: string) {
      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.appsGET, {
            APP_ZUID: appZUID,
         })
      return await this.makeRequest(url)
   }
   async updateRegisteredApp(appZUID: string) {
      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.appsPUT, {
            APP_ZUID: appZUID,
         })
      let payload = JSON.stringify({
         appZUID: appZUID,
      })
      return await this.makeRequest(url, "PUT", payload)
   }
   async deleteRegisteredApp(appZUID: string) {
      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.appsDELETE, {
            APP_ZUID: appZUID,
         })
      return await this.makeRequest(url, "DELETE")
   }
   async getSettings() {
      let url = this.getInstanceAPIURL() + this.instanceAPIEndpoints.settings
      return await this.makeRequest(url)
   }
   async updateSetting(settingZUID: string, body: any) {
      let url =
         this.getInstanceAPIURL() +
         this.replaceInURL(this.instanceAPIEndpoints.settingUpdate, {
            SETTING_ZUID: settingZUID,
         })

      let payload = JSON.stringify(body)

      return await this.makeRequest(url, "PUT", payload)
   }

   async getFields(appZUID: string) {
      let url =
         this.getInstanceAPIURL() +
         this.replaceInURL(this.instanceAPIEndpoints.fields, {
            MODEL_ZUID: appZUID,
         })
      return await this.makeRequest(url)
   }

   // INSTANCES Functions

   async createInstance(name: string, ecoZUID: string, token: string) {
      let payload = JSON.stringify({
         name,
         ecoZUID,
      })
      let url = this.accountsAPIURL + this.accountsAPIEndpoints.instances
      return await this.makeRequest(url, "POST", payload, {}, token)
   }

   async verifyDns(domain: string, aRecord: string, cName: string) {
      let payload = JSON.stringify({
         domain,
         aRecord,
         cName,
      })
      let url = this.accountsAPIURL + this.accountsAPIEndpoints.intanceDnsPOST
      return await this.makeRequest(url, "POST", payload)
   }

   async getInstance(instanceZUID: string) {
      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.instanceGET, {
            INSTANCE_ZUID: instanceZUID,
         })
      return await this.makeRequest(url)
   }
   async getInstances() {
      let url = this.accountsAPIURL + this.accountsAPIEndpoints.instances
      return await this.makeRequest(url)
   }
   async getAllInvitedInstances() {
      let url = this.accountsAPIURL + this.accountsAPIEndpoints.instancesInvitedGET
      return await this.makeRequest(url)
   }

   async getInstanceUsers(instanceZUID: string) {
      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.instanceUserGET, {
            INSTANCE_ZUID: instanceZUID,
         })
      return await this.makeRequest(url)
   }
   async getInstanceUsersWithRoles(instanceZUID: string) {
      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.instanceUsersRolesGET, {
            INSTANCE_ZUID: instanceZUID,
         })
      return await this.makeRequest(url)
   }
   async getInstancePendingUsers(instanceZUID: string) {
      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.instancesPendingUsersGET, {
            INSTANCE_ZUID: instanceZUID,
         })
      return await this.makeRequest(url)
   }
   async getInstanceCompanies(instanceZUID: string) {
      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.instancesCompaniesGET, {
            INSTANCE_ZUID: instanceZUID,
         })
      return await this.makeRequest(url)
   }

   async updateInstance(instanceZUID: string, params: string) {
      let payload = JSON.stringify(params)
      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.instancePUT, {
            INSTANCE_ZUID: instanceZUID,
         })

      return await this.makeRequest(url, "PUT", payload)
   }
   async updateInstanceBlueprint(instanceZUID: string, zuid: string) {
      let payload = JSON.stringify({
         zuid,
      })
      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.instanceBluprintPUT, {
            INSTANCE_ZUID: instanceZUID,
         })

      return await this.makeRequest(url, "PUT", payload)
   }

   async deleteInstance(instanceZUID: string) {
      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.instanceDELETE, {
            INSTANCE_ZUID: instanceZUID,
         })
      return await this.makeRequest(url, "DELETE")
   }
   // Domains
   async createDomain(instanceZUID: string, domain: string, branch: string) {
      let payload = JSON.stringify({
         domain,
         branch,
      })
      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.domainPOST, {
            INSTANCE_ZUID: instanceZUID,
         })
      return await this.makeRequest(url, "POST", payload)
   }
   async updateDomain(instanceZUID: string, domainZUID: string, domain: string) {
      let payload = JSON.stringify({
         domain,
      })

      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.domainPUT, {
            INSTANCE_ZUID: instanceZUID,
            DOMAIN_ZUID: domainZUID,
         })

      return await this.makeRequest(url, "PUT", payload)
   }
   async getDomain(instanceZUID: string, domainZUID: string) {
      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.domainGET, {
            INSTANCE_ZUID: instanceZUID,
            DOMAIN_ZUID: domainZUID,
         })
      return await this.makeRequest(url)
   }
   async deleteDomain(instanceZUID: string, domainZUID: string) {
      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.domainDELETE, {
            INSTANCE_ZUID: instanceZUID,
            DOMAIN_ZUID: domainZUID,
         })
      return await this.makeRequest(url, "DELETE")
   }
   async getAllDomain(instanceZUID: string) {
      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.domains, {
            INSTANCE_ZUID: instanceZUID,
         })
      return await this.makeRequest(url)
   }

   // User Functions
   async getUser(userZUID: string) {
      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.userGET, {
            USER_ZUID: userZUID,
         })
      return await this.makeRequest(url)
   }
   async getUserInstances(userZUID: string) {
      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.userInstancesGET, {
            USER_ZUID: userZUID,
         })
      return await this.makeRequest(url)
   }
   async createUser(
      firstName: string,
      lastName: string,
      email: string,
      password: string,
   ) {
      let payload = JSON.stringify({
         firstName,
         lastName,
         email,
         password,
      })
      let url = this.accountsAPIURL + this.accountsAPIEndpoints.usersPOST
      return await this.makeRequest(url, "POST", payload)
   }
   async updateUser(userZUID: string, body: any, params: string = "") {
      let payload = JSON.stringify(body)

      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.userPUT, {
            USER_ZUID: userZUID,
         }) +
         params

      return await this.makeRequest(url, "PUT", payload)
   }
   async deleteUser(userZUID: string) {
      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.userDELETE, {
            USER_ZUID: userZUID,
         })
      return await this.makeRequest(url, "DELETE")
   }

   // user/emails functions

   async addUnverifiedEmail(name: string, address: string) {
      let payload = JSON.stringify({
         name,
         address,
      })
      let url = this.accountsAPIURL + this.accountsAPIEndpoints.usersEmailPOST
      return await this.makeRequest(url, "POST", payload)
   }
   async deleteUserEmail(email: string) {
      let url =
         this.accountsAPIURL +
         this.accountsAPIEndpoints.usersEmailDELETE +
         `?address=${email}`
      return await this.makeRequest(url, "DELETE")
   }
   async getUserEmails() {
      let url = this.accountsAPIURL + this.accountsAPIEndpoints.userEmailsGET
      return await this.makeRequest(url)
   }
   async verifyEmailAddress(address: string, verificationCode: string) {
      let url =
         this.accountsAPIURL +
         this.accountsAPIEndpoints.userEmailVerifyGET +
         `?address=${address}&verificationCode${verificationCode}`
      return await this.makeRequest(url)
   }
   async resendEmailVerification(address: string) {
      let payload = JSON.stringify({})
      let url =
         this.accountsAPIURL +
         this.accountsAPIEndpoints.userEmailVerifyPOST +
         `?address=${address}`
      return await this.makeRequest(url, "POST", payload)
   }

   async userForgotPassword(address: string) {
      let payload = JSON.stringify({ address })
      let url = this.accountsAPIURL + this.accountsAPIEndpoints.userForgotPassword
      return await this.makeRequest(url, "POST", payload)
   }

   async userResetPasswordConfirm(address: string, password: string, token: string) {
      let payload = JSON.stringify({ code: token, email: address, password })
      let url = this.authAPIURL + this.accountsAPIEndpoints.userResetPasswordConfirm
      return await this.makeRequest(url, "POST", payload)
   }
   // Companies functions

   async getCompany(companyZUID: string) {
      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.companyGET, {
            COMPANY_ZUID: companyZUID,
         })
      return await this.makeRequest(url)
   }
   async getAllCompanies() {
      let url = this.accountsAPIURL + this.accountsAPIEndpoints.companies
      return await this.makeRequest(url)
   }
   async createCompany(name: string, description: string) {
      let payload = JSON.stringify({ name, description })
      let url = this.accountsAPIURL + this.accountsAPIEndpoints.companiesPOST
      return await this.makeRequest(url, "POST", payload)
   }
   async deleteCompany(
      companyZUID: string,
      firstName: string,
      lastName: string,
      email: string,
   ) {
      let payload = JSON.stringify({
         firstName,
         lastName,
         email,
      })
      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.companyDELETE, {
            COMPANY_ZUID: companyZUID,
         })
      return await this.makeRequest(url, "DELETE", payload)
   }
   // Invites Functions
   async getInvite(inviteZUID: string) {
      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.inviteGET, {
            INVITE_ZUID: inviteZUID,
         })
      return await this.makeRequest(url)
   }
   async getAllInvites() {
      let url = this.accountsAPIURL + this.accountsAPIEndpoints.invites
      return await this.makeRequest(url)
   }
   async createInvite(
      inviteeName: string,
      inviteeEmail: string,
      entityZUID: string,
      accessLevel: string,
   ) {
      let payload = JSON.stringify({
         inviteeName,
         inviteeEmail,
         entityZUID,
         accessLevel,
      })
      let url = this.accountsAPIURL + this.accountsAPIEndpoints.invitesPOST
      return await this.makeRequest(url, "POST", payload)
   }
   async respondToInvite(inviteZUID: string, action: string) {
      let payload = JSON.stringify({})

      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.invitePUT, {
            INVITE_ZUID: inviteZUID,
         }) +
         `?action=${action}`

      return await this.makeRequest(url, "PUT", payload)
   }
   async deleteInvite(inviteZUID: string) {
      let payload = JSON.stringify({})
      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.inviteDELETE, {
            INVITE_ZUID: inviteZUID,
         })
      return await this.makeRequest(url, "DELETE", payload)
   }
   // Blueprints Functions
   async getBlueprint() {
      let url = this.accountsAPIURL + this.accountsAPIEndpoints.blueprintGET
      return await this.makeRequest(url)
   }
   async getAllBlueprints() {
      let url = this.accountsAPIURL + this.accountsAPIEndpoints.blueprints
      return await this.makeRequest(url)
   }
   async createBlueprint(name: string) {
      let payload = JSON.stringify({
         name,
      })
      let url = this.accountsAPIURL + this.accountsAPIEndpoints.blueprintsPOST
      return await this.makeRequest(url, "POST", payload)
   }
   async updateBlueprint(name: string) {
      let payload = JSON.stringify({ name })

      let url = this.accountsAPIURL + this.accountsAPIEndpoints.blueprintPUT

      return await this.makeRequest(url, "PUT", payload)
   }
   async deleteBlueprint() {
      let payload = JSON.stringify({})
      let url = this.accountsAPIURL + this.accountsAPIEndpoints.blueprintDELETE
      return await this.makeRequest(url, "DELETE", payload)
   }
   async getInstanceBlueprint(instanceZUID: string) {
      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.blueprintInstanceGET, {
            INSTANCE_ZUID: instanceZUID,
         })
      return await this.makeRequest(url)
   }
   // Teams functions
   async getTeam(teamZUID: string) {
      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.teamGET, {
            TEAM_ZUID: teamZUID,
         })
      return await this.makeRequest(url)
   }
   async createTeam(data: ICreateTeam) {
      const { name, description } = data
      let payload = JSON.stringify({
         name,
         description,
      })
      let url = this.accountsAPIURL + this.accountsAPIEndpoints.teamPOST
      return await this.makeRequest(url, "POST", payload)
   }
   async updateTeam(data: IUpdateTeam, teamZUID: string) {
      let payload = JSON.stringify(data)

      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.teamPUT, {
            TEAM_ZUID: teamZUID,
         })

      return await this.makeRequest(url, "PUT", payload)
   }
   async deleteTeam(teamZUID: string) {
      let payload = JSON.stringify({})
      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.teamDELETE, {
            TEAM_ZUID: teamZUID,
         })
      return await this.makeRequest(url, "DELETE", payload)
   }
   async getAllTeams() {
      let url = this.accountsAPIURL + this.accountsAPIEndpoints.teams
      return await this.makeRequest(url)
   }
   // Teams Instances Functins

   async addTeamToInstance(instanceZUID: string, teamZUID: string, roleZUID: string) {
      let payload = JSON.stringify({
         teamZUID,
         roleZUID,
      })
      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.teamInstancesPOST, {
            INSTANCE_ZUID: instanceZUID,
         })
      return await this.makeRequest(url, "POST", payload)
   }
   async getAllInstancesTeams(instanceZUID: string) {
      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.instancesTeamsGET, {
            INSTANCE_ZUID: instanceZUID,
         })
      return await this.makeRequest(url)
   }
   async getAllTeamsInstances(teamZUID: string) {
      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.teamInstancesGET, {
            TEAM_ZUID: teamZUID,
         })
      return await this.makeRequest(url)
   }
   async removeTeamFromInstance(instanceZUID: string, teamZUID: string) {
      let payload = JSON.stringify({})
      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.teamInstanceDELETE, {
            TEAM_ZUID: teamZUID,
            INSTANCE_ZUID: instanceZUID,
         })
      return await this.makeRequest(url, "DELETE", payload)
   }
   // Team invites functions
   async getTeamInvite(teamInviteZUID: string) {
      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.teamInviteGET, {
            TEAM_INVITE_ZUID: teamInviteZUID,
         })
      return await this.makeRequest(url)
   }
   async getAllTeamInvites() {
      let url = this.accountsAPIURL + this.accountsAPIEndpoints.teamInvites
      return await this.makeRequest(url)
   }
   async createTeamInvite(data: ICreateTeamInvite) {
      let payload = JSON.stringify(data)
      let url = this.accountsAPIURL + this.accountsAPIEndpoints.teamInvitesPOST
      return await this.makeRequest(url, "POST", payload)
   }
   async respondToTeamInvite(teamInviteZUID: string, action: string) {
      let payload = JSON.stringify({ action })

      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.teamInvitePUT, {
            TEAM_INVITE_ZUID: teamInviteZUID,
         }) +
         `?action=${action}`

      return await this.makeRequest(url, "PUT", payload)
   }
   async deleteTeamInvite(teamInviteZUID: string) {
      let payload = JSON.stringify({})
      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.teamInviteDELETE, {
            TEAM_INVITE_ZUID: teamInviteZUID,
         })
      return await this.makeRequest(url, "DELETE", payload)
   }
   // Team Members
   async getTeamMembers(teamZUID: string) {
      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.teamMembersGET, {
            TEAM_ZUID: teamZUID,
         })
      return await this.makeRequest(url)
   }
   async updateTeamMembers(teamZUID: string, userZUID: string, admin: boolean = false) {
      let payload = JSON.stringify({ admin })

      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.teamMembersPUT, {
            TEAM_ZUID: teamZUID,
            USER_ZUID: userZUID,
         })

      return await this.makeRequest(url, "PUT", payload)
   }
   async deleteTeamMember(teamZUID: string, userZUID: string) {
      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.teamMembersDELETE, {
            TEAM_ZUID: teamZUID,
            USER_ZUID: userZUID,
         })
      return await this.makeRequest(url, "DELETE")
   }
   async getTeamMembersPending(teamZUID: string) {
      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.teamMembersPendingGET, {
            TEAM_ZUID: teamZUID,
         })
      return await this.makeRequest(url)
   }

   // Roles

   async getInstanceRoles(instanceZUID: string) {
      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.instancesRoles, {
            INSTANCE_ZUID: instanceZUID,
         })
      return await this.makeRequest(url)
   }
   async createInstanceRoles(instanceZUID: string) {
      let payload = JSON.stringify({})
      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.instancesRolesPOST, {
            INSTANCE_ZUID: instanceZUID,
         })
      return await this.makeRequest(url, "POST", payload)
   }
   async getInstanceRole(instanceZUID: string, roleZUID: string) {
      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.instancesRolesGET, {
            INSTANCE_ZUID: instanceZUID,
            ROLE_ZUID: roleZUID,
         })
      return await this.makeRequest(url)
   }

   async getRole(roleZUID: string) {
      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.roleGET, {
            ROLE_ZUID: roleZUID,
         })
      return await this.makeRequest(url)
   }
   async deleteRole(roleZUID: string) {
      let payload = JSON.stringify({})
      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.roleDELETE, {
            ROLE_ZUID: roleZUID,
         })
      return await this.makeRequest(url, "DELETE", payload)
   }
   async createRole(
      name: string,
      entityZUID: string,
      systemRoleZUID: string,
      description = "",
   ) {
      let payload = JSON.stringify({
         name,
         entityZUID,
         systemRoleZUID,
         description,
      })
      let url = this.accountsAPIURL + this.accountsAPIEndpoints.rolesPOST
      return await this.makeRequest(url, "POST", payload)
   }
   async updateRole(
      roleZUID: string,
      data: { name: string; description: string; systemRoleZUID: string },
   ) {
      const payload = JSON.stringify(data)
      const url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.rolePUT, {
            ROLE_ZUID: roleZUID,
         })

      return await this.makeRequest(url, "PUT", payload)
   }
   async getRoles() {
      let url = this.accountsAPIURL + this.accountsAPIEndpoints.roles
      return await this.makeRequest(url)
   }
   async getUserRoles(userZUID: string) {
      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.userRolesGET, {
            USER_ZUID: userZUID,
         })
      return await this.makeRequest(url)
   }
   async assignUserRole(userZUID: string, roleZUID: string) {
      let payload = JSON.stringify({})
      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.userRolesPOST, {
            USER_ZUID: userZUID,
            ROLE_ZUID: roleZUID,
         })
      return await this.makeRequest(url, "POST", payload)
   }
   async bulkReassignUsersRole({
      oldRoleZUID,
      newRoleZUID,
   }: {
      oldRoleZUID: string
      newRoleZUID: string
   }) {
      const payload = JSON.stringify({ roleZUID: newRoleZUID })
      const url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.bulkReassignUserRolesPUT, {
            ROLE_ZUID: oldRoleZUID,
         })

      return await this.makeRequest(url, "PUT", payload)
   }
   async deleteUserRole(userZUID: string, roleZUID: string) {
      let payload = JSON.stringify({})
      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.userRolesDELETE, {
            USER_ZUID: userZUID,
            ROLE_ZUID: roleZUID,
         })
      return await this.makeRequest(url, "DELETE", payload)
   }
   async updateUserRole(userZUID: string, oldRoleZUID: string, newRoleZUID: string) {
      let payload = JSON.stringify({ roleZUID: newRoleZUID })
      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.userRolesPUT, {
            USER_ZUID: userZUID,
            ROLE_ZUID: oldRoleZUID,
         })
      return await this.makeRequest(url, "PUT", payload)
   }
   // Roles Granular

   async getGranularRole(roleZUID: string, resourceZUID: string) {
      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.rolesGranularGET, {
            ROLE_ZUID: roleZUID,
            RESOURCE_ZUID: resourceZUID,
         })
      return await this.makeRequest(url)
   }
   async deleteGranularRole(roleZUID: string, resourceZUID: string) {
      let payload = JSON.stringify({})
      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.rolesGranularDELETE, {
            ROLE_ZUID: roleZUID,
            RESOURCE_ZUID: resourceZUID,
         })
      return await this.makeRequest(url, "DELETE", payload)
   }

   async getAllGranularRoles(roleZUID: string) {
      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.rolesGranular, {
            ROLE_ZUID: roleZUID,
         })
      return await this.makeRequest(url)
   }
   async updateGranularRoles(
      roleZUID: string,
      resourceZUID: string,
      name = "",
      create = true,
      read = true,
      update = true,
      remove = false,
   ) {
      let payload = JSON.stringify({
         resourceZUID,
         name,
         create,
         read,
         update,
         delete: remove,
      })
      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.rolesGranularPUT, {
            ROLE_ZUID: roleZUID,
         })
      return await this.makeRequest(url, "PUT", payload)
   }
   async batchUpdateGranularRoles(roleZUID: string, granularRoles: GranularRole[]) {
      let payload = JSON.stringify(granularRoles)
      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.rolesGranularPUT, {
            ROLE_ZUID: roleZUID,
         })

      return await this.makeRequest(url, "PUT", payload)
   }
   async createGranularRole(
      roleZUID: string,
      resourceZUID: string,
      create = true,
      read = false,
      update = false,
      remove = false,
      publish = false,
   ) {
      let payload = JSON.stringify({
         resourceZUID,
         create,
         read,
         update,
         delete: remove,
         publish,
      })
      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.rolesGranularPOST, {
            ROLE_ZUID: roleZUID,
         })
      return await this.makeRequest(url, "POST", payload)
   }
   // Ecosystems functions
   async createEcosystem(name: string, description: string) {
      let payload = JSON.stringify({ name, description })
      let url = this.accountsAPIURL + this.accountsAPIEndpoints.ecosystemPOST
      return await this.makeRequest(url, "POST", payload)
   }
   async getEcosystem(ecosystemZUID: string) {
      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.ecosystemGET, {
            ECOSYSTEM_ZUID: ecosystemZUID,
         })
      return await this.makeRequest(url)
   }
   async getALLEcosystems() {
      let url = this.accountsAPIURL + this.accountsAPIEndpoints.ecosystems
      return await this.makeRequest(url)
   }
   async updateEcosystem(ecosystemZUID: string, name: string, description: string) {
      let payload = JSON.stringify({ name, description })
      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.ecosystemPUT, {
            ECOSYSTEM_ZUID: ecosystemZUID,
         })
      return await this.makeRequest(url, "PUT", payload)
   }
   async updateEcosystemDBDefaults(
      ecosystemZUID: string,
      defaultDatabaseHost = "1.1.1.1",
      defaultDatabaseUser = "root",
      defaultDatabasePassword = "pass",
   ) {
      let payload = JSON.stringify({
         defaultDatabaseHost,
         defaultDatabaseUser,
         defaultDatabasePassword,
      })
      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.ecosystemPUT, {
            ECOSYSTEM_ZUID: ecosystemZUID,
         }) +
         `?action=updateDatabaseDefaults`
      return await this.makeRequest(url, "PUT", payload)
   }
   async updateEcosystemCDNDefaults(
      ecosystemZUID: string,
      defaultCDNType = "AKAMAI",
      defaultCDNPurgeURL = "https://location-of-cloud-purge-function.com",
      defaultCDNPurgeAuth = "Secret Key",
   ) {
      let payload = JSON.stringify({
         defaultCDNType,
         defaultCDNPurgeURL,
         defaultCDNPurgeAuth,
      })
      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.ecosystemPUT, {
            ECOSYSTEM_ZUID: ecosystemZUID,
         }) +
         `?action=updateCDNDefaults`
      return await this.makeRequest(url, "PUT", payload)
   }
   async deleteEcosystem(ecosystemZUID: string) {
      let payload = JSON.stringify({})
      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.ecosystemDELETE, {
            ECOSYSTEM_ZUID: ecosystemZUID,
         })
      return await this.makeRequest(url, "DELETE", payload)
   }
   // Webhook functions
   async createWebhook({
      scopedResource,
      parentResourceZUID,
      resource = "items",
      eventAction = 1,
      method = "GET",
      URL,
      contentType = "application/json",
      authorization = "",
      text = "",
   }: ICreateWebhook) {
      let payload = JSON.stringify({
         scopedResource,
         parentResourceZUID,
         resource,
         eventAction,
         method,
         URL,
         contentType,
         authorization,
         body: {
            text,
         },
      })
      let url = this.accountsAPIURL + this.accountsAPIEndpoints.webhooksPOST
      return await this.makeRequest(url, "POST", payload)
   }
   async retrieveWebhook(webhookZUID: string) {
      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.webhookGET, {
            WEBHOOK_ZUID: webhookZUID,
         })
      return await this.makeRequest(url)
   }
   async retrieveWebhookForInstance(instanceZUID: string) {
      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.instanceWebhookGET, {
            INSTANCE_ZUID: instanceZUID,
         })
      return await this.makeRequest(url)
   }
   async deleteWebhook(webhookZUID: string) {
      let payload = JSON.stringify({})
      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.webhookDELETE, {
            WEBHOOK_ZUID: webhookZUID,
         })
      return await this.makeRequest(url, "DELETE", payload)
   }

   // Tokens Functions
   async createToken(roleZUID: string, name: string) {
      let payload = JSON.stringify({
         roleZUID,
         name,
      })
      let url = this.accountsAPIURL + this.accountsAPIEndpoints.tokensPOST
      return await this.makeRequest(url, "POST", payload)
   }
   async getToken(tokenZUID: string) {
      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.tokensGET, {
            TOKEN_ZUID: tokenZUID,
         })
      return await this.makeRequest(url)
   }
   async getInstanceToken(instanceZUID: string) {
      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.instanceTokenGET, {
            INSTANCE_ZUID: instanceZUID,
         })
      return await this.makeRequest(url)
   }
   async updateToken(tokenZUID: string, action: string) {
      let payload = JSON.stringify({})
      const params = action ? `?action=${action}` : ""
      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.tokensPUT, {
            TOKEN_ZUID: tokenZUID,
         }) +
         params
      return await this.makeRequest(url, "PUT", payload)
   }
   async deleteToken(tokenZUID: string) {
      let payload = JSON.stringify({})
      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.tokensDELETE, {
            TOKEN_ZUID: tokenZUID,
         })
      return await this.makeRequest(url, "DELETE", payload)
   }

   // Search Items Function
   async searchItems(params: Record<string, string> = {}) {
      const searchParams = new URLSearchParams(params)?.toString()
      let url = this.instancesAPIURL + this.instanceAPIEndpoints.searchItemsGET

      return await this.makeRequest(`${url}?${searchParams}`)
   }

   // Locales functionality

   async getAllLocales() {
      let url = `${this.instancesAPIURL}/env/langs/all`
      return await this.makeRequest(url)
   }

   async getLocales(type: string = "all") {
      let url = `${this.instancesAPIURL}/env/langs?type=${type}`
      return await this.makeRequest(url)
   }

   async addLocale(locale: string) {
      let url = `${this.instancesAPIURL}/env/langs`
      return await this.makeRequest(
         url,
         "POST",
         JSON.stringify({
            code: locale,
         }),
      )
   }

   async deleteLocale(locale: string, isSoftDelete = true) {
      let url = `${this.instancesAPIURL}/env/langs/${locale}?softDelete=${isSoftDelete}`
      return await this.makeRequest(url, "DELETE")
   }

   async updateLocale(locale: string, action: string) {
      let url = `${this.instancesAPIURL}/env/langs/${locale}?action=${action}`
      return await this.makeRequest(url, "PUT")
   }

   async getUsage(
      instanceZUID: string,
      dateStart = date7DaysAgo,
      dateEnd = dateToday,
      isProd = true,
   ) {
      const url = `https://metrics.api${
         !isProd ? ".dev" : ""
      }.zesty.io/accounts/${instanceZUID}/usage?dateStart=${dateStart}&dateEnd=${dateEnd}`
      return await this.makeRequest(url, "GET")
   }

   async customInstancesGet(uri: string, instanceZUID: string) {
      let url = `https://${instanceZUID}.api.zesty.io${uri}`
      // if (instanceZUID) {
      //    if (this.getInstanceAPIURL().includes("undefined")) {
      //       url = this.getInstanceAPIURL().replace("undefined", instanceZUID)
      //    } else {
      //       const getZuidInURL = this.getInstanceAPIURL().substring(
      //          8,
      //          this.getInstanceAPIURL().indexOf(".api"),
      //       )
      //       url = this.getInstanceAPIURL().replace(getZuidInURL, instanceZUID)
      //    }

      //    url = url.replace("/v1", "") + uri
      // } else {
      //    url = this.getInstanceAPIURL().replace("/v1", "") + uri
      // }

      return await this.makeRequest(url)
   }

   async getHeadTags() {
      let url = this.getInstanceAPIURL() + this.instanceAPIEndpoints.headtags
      return await this.makeRequest(url)
   }
}
