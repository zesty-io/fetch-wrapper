export interface OPTIONS {
   sitesServiceURL: string
   instancesAPIURL: string
   authAPIURL: string
   accountsAPIURL: string
   mediaAPIURL: string
   logErrors: boolean
   logResponses: boolean
}

export interface IsiteServicesEndpoints {
   schedulePublishPOST: string
   scheduleUnpublishPATCH: string
   itemsDELETE: string
}

export interface IinstanceAPIEndpoints {
   models: string
   fields: string
   itemsPublishing: string
   itemsVersions: string
   items: string
   views: string
   settings: string
   settingUpdate: string
   stylesheets: string
   stylesheetsVersions: string
   scriptsVersions: string
   scripts: string
   headers: string
   nav: string
   headtags: string
   audits: string
   searchItemsGET: string
}

export interface IaccountsAPIEndpoints {
   instanceAppInstallPOST: string
   instanceAppInstalls: string
   instanceAppInstallGET: string
   instanceAppInstallDELETE: string
   apps: string
   appsPOST: string
   appsGET: string
   appsPUT: string
   appsDELETE: string
   // Instances api
   intanceDnsPOST: string
   instanceGET: string
   instances: string
   instancesInvitedGET: string
   instanceUserGET: string
   instanceUsersRolesGET: string
   instancesPendingUsersGET: string
   instancesCompaniesGET: string
   instancePUT: string
   instanceBluprintPUT: string
   instanceDELETE: string
   // Instance/Domains api
   domainPOST: string
   domainPUT: string
   domainGET: string
   domainDELETE: string
   domains: string
   // Users
   userGET: string
   userInstancesGET: string
   usersPOST: string
   userPUT: string
   userDELETE: string
   // User Emails
   usersEmailPOST: string
   usersEmailDELETE: string
   userEmailsGET: string
   userEmailVerifyGET: string
   userEmailVerifyPOST: string
   userForgotPassword: string

   // Companies
   companyGET: string
   companies: string
   companiesPOST: string
   companyDELETE: string
   // Invites
   inviteGET: string
   invites: string
   invitesPOST: string
   invitePUT: string
   inviteDELETE: string
   //  Blueprints
   blueprintGET: string
   blueprints: string
   blueprintsPOST: string
   blueprintPUT: string
   blueprintDELETE: string
   blueprintInstanceGET: string
   // Teams
   teamGET: string
   teamPOST: string
   teamPUT: string
   teamDELETE: string
   teams: string
   // Teams Instances
   teamInstancesPOST: string
   instancesTeamsGET: string
   teamInstancesGET: string
   teamInstanceDELETE: string
   // Team Invite
   teamInviteGET: string
   teamInvites: string
   teamInvitesPOST: string
   teamInvitePUT: string
   teamInviteDELETE: string
   // Team Members
   teamMembersGET: string
   teamMembersPUT: string
   teamMembersDELETE: string
   teamMembersPendingGET: string
   // Roles
   roleGET: string
   roleDELETE: string
   rolesPOST: string
   roles: string
   instancesRoles: string
   instancesRolesPOST: string
   instancesRolesGET: string
   userRolesGET: string
   userRolesPOST: string
   userRolesDELETE: string
   userRolesPUT: string
   // Roles Granular
   rolesGranularGET: string
   rolesGranularDELETE: string
   rolesGranular: string
   rolesGranularPUT: string
   rolesGranularPOST: string
   // Ecosystem
   ecosystemPOST: string
   ecosystemGET: string
   ecosystems: string
   ecosystemPUT: string
   ecosystemDELETE: string
   // Webhooks
   webhooks: string
   webhooksPOST: string
   webhookGET: string
   instanceWebhookGET: string
   webhookDELETE: string
   // Tokens
   tokensPOST: string
   tokensGET: string
   instanceTokenGET: string
   tokensPUT: string
   tokensDELETE: string
}

export interface ImediaAPIEndpoints {
   binsGETAll: string
   binsGET: string
   binsPATCH: string
   filesPOST: string
   filesGET: string
   filesGETAll: string
   filesPATCH: string
   filesDELETE: string
   groupsGET: string
   groupsGETAll: string
   groupsPOST: string
   groupsPATCH: string
   groupsDELETE: string
}
export interface IauthAPIEndpoints {
   verify: string
   login: string
   verify2fa: string
   logout: string
}
export interface IParams {
   headers: any
   method: string
   mode: RequestMode
   referrerPolicy: ReferrerPolicy
   credentials: RequestCredentials
   body: any
}

export interface ICreateTeam {
   name: string
   description: string
}

export interface IUpdateTeam {
   name: string
   description: string
}
export interface ICreateTeamInvite {
   teamZUID: string
   admin: boolean
   inviteeEmail: string
}

export interface ICreateWebhook {
   scopedResource: string
   parentResourceZUID?: string
   resource: string
   eventAction: number
   method: string
   URL: string
   contentType?: string
   authorization?: string
   text: string
}
