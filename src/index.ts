import { augmentedFetch } from "./core/augmented-fetch.js"
import * as Authentication from "./endpoints/authentication.js"
import * as Connect from "./endpoints/connect.js"
import type { Scopes } from "./enum.js"

export * from "./definitions.js"
export * from "./enum.js"

export interface ClientConfig {
	bearerToken: string
	clientId: string
	clientSecret: string
	redirectUri: string
	refreshToken: string
	scope: Scopes[]
}

export class UltimakerClient {
	protected _accountUrl = "https://account.ultimaker.com"
	protected _connectUrl = "https://api.ultimaker.com/connect/v1"
	protected _bearerToken: string = ""
	protected _clientId: string = ""
	protected _clientSecret: string = ""
	protected _redirectUri: string = ""
	protected _refreshToken: string = ""
	protected _scope: Scopes[] = []

	constructor(config: ClientConfig) {
		this._bearerToken = config.bearerToken
		this._clientId = config.clientId
		this._clientSecret = config.clientSecret
		this._redirectUri = config.redirectUri
		this._scope = config.scope
		this._refreshToken = config.refreshToken
	}

	protected _fetch = augmentedFetch

	public ping = () => "pong"

	// Authentication endpoints
	public jwks = Authentication.jwks
	public openIdConfiguration = Authentication.openIdConfiguration
	public applicationList = Authentication.applicationList
	public bulkAccountDetails = Authentication.bulkAccountDetails
	public bulkAccountImport = Authentication.bulkAccountImport
	public confirmUserCreationFromBulkAccountImport =
		Authentication.confirmUserCreationFromBulkAccountImport
	public checkToken = Authentication.checkToken
	public sendEmailToUser = Authentication.sendEmailToUser
	public newSpatialLicense = Authentication.newSpatialLicense
	public newOrganization = Authentication.newOrganization
	public currentOrganization = Authentication.currentOrganization
	public updateOrganization = Authentication.updateOrganization
	public inviteUserToOrganization = Authentication.inviteUserToOrganization
	public deleteInvitationToOrganization =
		Authentication.deleteInvitationToOrganization
	public currentOrganizationMembers = Authentication.currentOrganizationMembers
	public updateOrganizationMemberData =
		Authentication.updateOrganizationMemberData
	public removeMemberFromOgranization =
		Authentication.removeMemberFromOgranization
	public organizationInvitiation = Authentication.organizationInvitiation
	public updateInvitationStatus = Authentication.updateInvitationStatus
	public publicKey = Authentication.publicKey
	public scopes = Authentication.scopes
	public spec = Authentication.spec
	public accountServiceStatus = Authentication.accountServiceStatus
	public subscriptions = Authentication.subscriptions
	public addSubscription = Authentication.addSubscription
	public updateSubscription = Authentication.updateSubscription
	public teams = Authentication.teams
	public createTeam = Authentication.createTeam
	public team = Authentication.team
	public updateTeamMembers = Authentication.updateTeamMembers
	public updateTeamName = Authentication.updateTeamName
	public deleteTeam = Authentication.deleteTeam
	public uploadTeamImage = Authentication.uploadTeamImage
	public deleteTeamImage = Authentication.deleteTeamImage
	public inviteNewTeamMembers = Authentication.inviteNewTeamMembers
	public getTeamMembers = Authentication.getTeamMembers
	public removeTeamMember = Authentication.removeTeamMember
	public postToken = Authentication.postToken
	public deleteToken = Authentication.deleteToken
	public users = Authentication.users
	public currentUsers = Authentication.currentUsers
	public userPermissions = Authentication.userPermissions
	public userRoles = Authentication.userRoles

	// Connect
	public connectServiceStatus = Connect.connectServiceStatus
	public clusterTeamCounts = Connect.clusterTeamCounts
	public cluster = Connect.cluster
	public removeCluster = Connect.removeCluster
	public addClusterNote = Connect.addClusterNote
	public clusterPrintJob = Connect.clusterPrintJob
	public updateClusterPrintJob = Connect.updateClusterPrintJob
	public submitPrinterAction = Connect.submitPrinterAction
	public reprint = Connect.reprint
	public clusterSharingSettings = Connect.clusterSharingSettings
	public clusters = Connect.clusters
	public clusterActionStatus = Connect.clusterActionStatus
	public addClusterMaintenanceTask = Connect.addClusterMaintenanceTask
	public completedMaintenanceTasks = Connect.completedMaintenanceTasks
	public pendingMaintenanceTasks = Connect.pendingMaintenanceTasks
	public clusterPrint = Connect.clusterPrint
	public sendPrinterAction = Connect.sendPrinterAction
	public clusterStatus = Connect.clusterStatus
	public confirmRegistrationPin = Connect.confirmRegistrationPin
	public confirmRegistration = Connect.confirmRegistration
	public listJobFilter = Connect.listJobFilter
	public materialsUpload = Connect.materialsUpload
	public printJobReports = Connect.printJobReports
	public settings = Connect.settings
	public updateSettings = Connect.updateSettings
	public teapot = Connect.teapot
}
