/**
 * Zesty.io Rest API Fetch Wrapper
 * Used to simply remote authenticated requests to the Zesty Auth, Accounts, and Instances API
 *
 * More info at https://github.com/zesty-io/websites/fetch-api-wrapper/
 */

export default class FetchWrapper {
   constructor(instanceZUID, authToken, options = {}) {
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
      }

      this.authAPIURL = options.hasOwnProperty("authAPIURL")
         ? options.authAPIURL
         : "https://auth.api.zesty.io"
      this.instancesAPIURL = options.hasOwnProperty("instancesAPIURL")
         ? "https://" + this.instanceZUID + options.instancesAPIURL
         : "https://" + this.instanceZUID + ".api.zesty.io/v1"
      this.accountsAPIURL = options.hasOwnProperty("accountsAPIURL")
         ? options.accountsAPIURL
         : "https://accounts.api.zesty.io/v1"
      this.mediaAPIURL = options.hasOwnProperty("mediaAPIURL")
         ? options.mediaAPIURL
         : "https://svc.zesty.io"
      this.sitesServiceURL = options.hasOwnProperty("sitesServiceURL")
         ? options.sitesServiceURL + this.instanceZUID
         : "https://svc.zesty.io/sites-service/" + this.instanceZUID
      this.logErrors = options.hasOwnProperty("logErrors") ? options.logErrors : false
      this.logResponses = options.hasOwnProperty("logResponses")
         ? options.logResponses
         : false

      this.sitesServiceURL = this.makeInstanceZUIDURL(this.sitesServiceURL, instanceZUID)
   }
   makeInstanceZUIDURL(url, zuid) {
      return this.replaceInURL(url, { INSTANCE_ZUID: zuid })
   }
   getInstanceAPIURL() {
      return this.instancesAPIURL
   }
   setInstanceZUID(zuid) {
      return (this.instanceZUID = zuid)
   }

   buildAPIURL(uri, api = "instances") {
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

   replaceInURL(url, replacementObject) {
      for (const key in replacementObject) {
         url = url.replace(key, replacementObject[key])
      }

      return url
   }

   async makeRequest(url, method = "GET", body = "", options = {}) {
      if (method != "GET") options.body = body

      options.method = method
      options.headers = {
         "Content-Type": "application/json",
         Authorization: `Bearer ${this.authToken}`,
      }
      options.credentials = "same-origin"

      try {
         const res = await fetch(url, options)
         const json = await res.json()
         return json
      } catch (err) {
         console.error("Error:", err)
         return err
      }
   }

   async verify() {
      let url = this.authAPIURL + this.authAPIEndpoints.verify
      return await this.makeRequest(url)
   }

   async getModels() {
      let url = this.getInstanceAPIURL() + this.instanceAPIEndpoints.models
      return await this.makeRequest(url)
   }

   async getViews() {
      let url = this.getInstanceAPIURL() + this.instanceAPIEndpoints.views
      return await this.makeRequest(url)
   }

   async getView(zuid) {
      let url = this.getInstanceAPIURL() + this.instanceAPIEndpoints.views + "/" + zuid
      return await this.makeRequest(url)
   }

   async createView(fileName, code = "", type = "ajax-json") {
      let payload = JSON.stringify({
         code: code,
         fileName: fileName,
         type: type,
      })
      let url = this.getInstanceAPIURL() + this.instanceAPIEndpoints.views
      return await this.makeRequest(url, "POST", payload)
   }

   async updateView(viewZUID, code) {
      let payload = JSON.stringify({
         code: code,
      })
      let url =
         this.getInstanceAPIURL() + this.instanceAPIEndpoints.views + "/" + viewZUID
      return await this.makeRequest(url, "PUT", payload)
   }

   async publishView(viewZUID, code) {
      let payload = JSON.stringify({
         code: code,
      })
      let url =
         this.getInstanceAPIURL() +
         this.instanceAPIEndpoints.views +
         "/" +
         viewZUID +
         "?action=publish"
      return await this.makeRequest(url, "PUT", payload)
   }

   // APP installations Section
   async installApp(instanceZUID, appZUID) {
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
   async updateInstalledApp(instanceZUID, appZUID) {
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
   async getAllInstalledApps(instanceZUID) {
      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.instanceAppInstalls, {
            INSTANCE_ZUID: instanceZUID,
         })
      return await this.makeRequest(url)
   }
   async getInstalledApp(instanceZUID, appZUID) {
      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.instanceAppInstallGET, {
            INSTANCE_ZUID: instanceZUID,
            APP_ZUID: appZUID,
         })
      return await this.makeRequest(url)
   }
   async deleteInstalledApp(instanceZUID, appZUID) {
      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.instanceAppInstallDELETE, {
            INSTANCE_ZUID: instanceZUID,
            APP_ZUID: appZUID,
         })
      return await this.makeRequest(url, "DELETE")
   }

   // App Registration Section
   async registerApp(name, label, uri, publisher) {
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
   async getRegisteredApp(appZUID) {
      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.appsGET, {
            APP_ZUID: appZUID,
         })
      return await this.makeRequest(url)
   }
   async updateRegisteredApp(appZUID) {
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
   async deleteRegisteredApp(appZUID) {
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
   async updateSetting(settingZUID, body) {
      let url =
         this.getInstanceAPIURL() +
         this.replaceInURL(this.instanceAPIEndpoints.settingUpdate, {
            SETTING_ZUID: settingZUID,
         })

      let payload = JSON.stringify(body)

      return await this.makeRequest(url, "PUT", payload)
   }

   async getFields(appZUID) {
      let url =
         this.getInstanceAPIURL() +
         this.replaceInURL(this.instanceAPIEndpoints.fields, {
            MODEL_ZUID: appZUID,
         })
      return await this.makeRequest(url)
   }

   // INSTANCES Functions

   async createInstance(name, ecoZUID) {
      let payload = JSON.stringify({
         name,
         ecoZUID,
      })
      let url = this.accountsAPIURL + this.accountsAPIEndpoints.instances
      return await this.makeRequest(url, "POST", payload)
   }

   async verifyDns(domain, aRecord, cName) {
      let payload = JSON.stringify({
         domain,
         aRecord,
         cName,
      })
      let url = this.accountsAPIURL + this.accountsAPIEndpoints.intanceDnsPOST
      return await this.makeRequest(url, "POST", payload)
   }

   async getInstance(instanceZUID) {
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
      let url = this.accountsAPIURL + this.accountsAPIEndpoints.instancesInvited
      return await this.makeRequest(url)
   }

   async getInstanceUsers(instanceZUID) {
      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.instanceUserGET, {
            INSTANCE_ZUID: instanceZUID,
         })
      return await this.makeRequest(url)
   }
   async getInstanceUsersWithRoles(instanceZUID) {
      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.instanceUsersRolesGET, {
            INSTANCE_ZUID: instanceZUID,
         })
      return await this.makeRequest(url)
   }
   async getInstancePendingUsers(instanceZUID) {
      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.instancesPendingUsersGET, {
            INSTANCE_ZUID: instanceZUID,
         })
      return await this.makeRequest(url)
   }
   async getInstanceCompanies(instanceZUID) {
      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.instancesCompaniesGET, {
            INSTANCE_ZUID: instanceZUID,
         })
      return await this.makeRequest(url)
   }

   async updateInstance(instanceZUID, params) {
      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.instancePUT, {
            INSTANCE_ZUID: instanceZUID,
         }) +
         `?action=${params}`

      return await this.makeRequest(url, "PUT")
   }
   async updateInstanceBlueprint(instanceZUID, zuid) {
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

   async deleteInstance(instanceZUID) {
      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.instanceDELETE, {
            INSTANCE_ZUID: instanceZUID,
         })
      return await this.makeRequest(url, "DELETE")
   }
   // Domains
   async createDomain(instanceZUID, domain) {
      let payload = JSON.stringify({
         domain,
      })
      let url = this.accountsAPIURL + this.accountsAPIEndpoints.domainPOST
      return await this.makeRequest(url, "POST", payload)
   }
   async updateDomain(instanceZUID, domainZUID, domain) {
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
   async getDomain(instanceZUID, domainZUID) {
      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.domainGET, {
            INSTANCE_ZUID: instanceZUID,
            DOMAIN_ZUID: domainZUID,
         })
      return await this.makeRequest(url)
   }
   async deleteDomain(instanceZUID, domainZUID) {
      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.domainDELETE, {
            INSTANCE_ZUID: instanceZUID,
            DOMAIN_ZUID: domainZUID,
         })
      return await this.makeRequest(url, "DELETE")
   }
   async getDomain(instanceZUID) {
      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.domains, {
            INSTANCE_ZUID: instanceZUID,
         })
      return await this.makeRequest(url)
   }

   // User Functions
   async getUser(userZUID) {
      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.userGET, {
            USER_ZUID: userZUID,
         })
      return await this.makeRequest(url)
   }
   async getUserInstances(userZUID) {
      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.userInstancesGET, {
            USER_ZUID: userZUID,
         })
      return await this.makeRequest(url)
   }
   async createUser(firstName, lastName, email, password) {
      let payload = JSON.stringify({
         firstName,
         lastName,
         email,
         password,
      })
      let url = this.accountsAPIURL + this.accountsAPIEndpoints.usersPOST
      return await this.makeRequest(url, "POST", payload)
   }
   async updateUser(userZUID) {
      let payload = JSON.stringify({})

      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.userPUT, {
            USER_ZUID: userZUID,
         }) +
         "?action=updatePassword"

      return await this.makeRequest(url, "PUT", payload)
   }
   async deleteUser(userZUID) {
      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.userDELETE, {
            USER_ZUID: userZUID,
         })
      return await this.makeRequest(url, "DELETE")
   }

   // user/emails functions

   async addUnverifiedEmail(name, address) {
      let payload = JSON.stringify({
         name,
         address,
      })
      let url = this.accountsAPIURL + this.accountsAPIEndpoints.usersEmailPOST
      return await this.makeRequest(url, "POST", payload)
   }
   async deleteUserEmail(email) {
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
   async verifyEmailAddress(address, verificationCode) {
      let url =
         this.accountsAPIURL +
         this.accountsAPIEndpoints.userEmailVerifyGET +
         `?address=${address}&verificationCode${verificationCode}`
      return await this.makeRequest(url)
   }
   async resendEmailVerification(address) {
      let payload = JSON.stringify({})
      let url =
         this.accountsAPIURL +
         this.accountsAPIEndpoints.userEmailVerifyPOST +
         `?address=${address}`
      return await this.makeRequest(url, "POST", payload)
   }
   // Companies functions

   async getCompany(companyZUID) {
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
   async createCompany(name, description) {
      let payload = JSON.stringify({ name, description })
      let url = this.accountsAPIURL + this.accountsAPIEndpoints.companiesPOST
      return await this.makeRequest(url, "POST", payload)
   }
   async deleteCompany(companyZUID, firstName, lastName, email) {
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
   async getInvite(inviteZUID) {
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
   async createInvite(inviteeName, inviteeEmail, entityZUID, accessLevel) {
      let payload = JSON.stringify({
         inviteeName,
         inviteeEmail,
         entityZUID,
         accessLevel,
      })
      let url = this.accountsAPIURL + this.accountsAPIEndpoints.invitesPOST
      return await this.makeRequest(url, "POST", payload)
   }
   async respondToInvite(inviteZUID, action) {
      let payload = JSON.stringify({})

      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.invitePUT, {
            INVITE_ZUID: inviteZUID,
         }) +
         `?action=${action}`

      return await this.makeRequest(url, "PUT", payload)
   }
   async deleteInvite(inviteZUID) {
      let payload = JSON.stringify({})
      let url =
         this.accountsAPIURL +
         this.replaceInURL(this.accountsAPIEndpoints.inviteDELETE, {
            INVITE_ZUID: inviteZUID,
         })
      return await this.makeRequest(url, "DELETE", payload)
   }
}
