export type HttpResponse<T> =
	| ({
			ok: true
			status: 200
			data: {
				data: T
			}
			meta?: {
				limitReached: boolean
				page: {
					totalCount: number
					totalPages: number
				}
			}
			links?: {
				first: string
				prev: string
				last: string
				next: string
			}
	  } & Response)
	| ({
			ok: true
			status: 204
			data: null
	  } & Response)
	| ({
			ok: false
			data: null | {
				errors: any[]
			}
	  } & Response)

export interface TokenResponse {
	tokenType: string
	accessToken: string
	refreshToken: string
	expiresIn: number
}

export interface Jwks {
	keys: JwksKeys[]
}

export interface OpenIdConfiguration {
	authorizationEndpoint: string
	claimsSupported: string[]
	grantTypesSupported: string[]
	idTokenSigningAlgValuesSupported: string[]
	issuer: string
	jwksUri: string
	responseTypesSupported: string[]
	scopesSupported: string[]
	subjectTypesSupported: string[]
	tokenEndpoint: string
}

export interface ApplicationList {
	applications: Application
}

export interface Application {
	applicationType: string
	name: string
	url: string
}

export interface JwksKeys {
	alg: string
	e: string
	kid: string
	kty: string
	n: string
}

export interface BulkAccountDetails {
	accountsToBeCreated: number
	bulkAccountId: string
	errors: any[]
	status: string
	uploadUrl: string
	uploadedAt: string
}

export interface DecodedAccessToken {
	clientId: string
	exp: number
	iss: string
	organization: {
		organizationId: string
		organizationName: string
	}
	profileImageUrl: string
	roles: string[]
	scopes: string
	subscriptions: [
		{
			level: number
			planId: string
			typeId: string
		}
	]
	teams: [
		{
			name: string
			teamId: string
		}
	]
	userId: string
	username: string
}

export interface Subscription {
	expiresAt: string
	level: number
	planId: string
	planName: string
	status: string
	typeId: string
	typeName: string
}

export interface Organization {
	invitations: [
		{
			email: string
			invitationId: string
			invitationUrl: string
		}
	]
	members: [
		{
			profileImageUrl: string
			roles: []
			userId: string
			username: string
		}
	]
	organizationId: string
	organizationName: string
}

export interface Team {
	invitations: [
		{
			email: string
			invitationId: string
			invitationUrl: string
		}
	]
	members: [
		{
			profileImageUrl: string
			roles: []
			userId: string
			username: string
		}
	]
	name: string
	teamId: string
}

export interface User {
	email: string
	name: string
	organization: {
		organizationId: string
		organizationName: string
	}
	organizationId: string
	profileImageUrl: string
	roles: string[]
	userId: string
	username: string
}

export interface connectStatus {
	ok: boolean
	time: string
	uptime: number
	version: string
}

export interface ScopeDetails {
	description: string
	isReserved: boolean
	maxAccessTokenValidity: number
	maxRefreshTokenValidity: number
	scopeId: string
	validationMethod: string
}

export interface ApiStatus {
	ok: boolean
	time: string
	uptime: number
	version: string
}

export interface TeamCounts {
	counts: {
		[key: string]: number
	}
}

export interface Cluster {
	capabilities: string[]
	clusterId: string
	friendlyName: string
	hostGuid: string
	hostInternalIp: string
	hostName: string
	hostVersion: string
	isOnline: boolean
	organizationShared: boolean
	printerCount: number
	printerType: string
	status: string
	teamIds: string[]
	userId: string
}

export interface PrintJobDetails {
	assignedTo: string
	buildPlate: {
		type: string
	}
	cloudJobId: string
	clusterId: string
	compatibleMachineFamilies: string[]
	configuration: any[]
	configurationChangesRequired: any[]
	constraints: {
		[k: string]: string
	}
	createdAt: string
	force: boolean
	impedimentsToPrinting: any[]
	isOnline: boolean
	lastSeen: number
	machineVariant: string
	name: string
	networkErrorCount: number
	owner: string
	previewUrl: string
	printedOnUuid: string
	printerName: string
	printerUuid: string
	sentFrom: string
	source: {
		contentType: string
		downloadUrl: string
		fileSize: number
		jobId: string
		jobName: string
		libraryProjectId: string
		parsingStatus: string
		status: string
		statusDescription: string
		uploadUrl: string
		uploadedAt: string
		userId: string
		username: string
	}
	started: boolean
	state: string
	status: string
	timeElapsed: number
	timeTotal: number
	uuid: string
}

export interface CompletedMaintenanceTask {
	completedAt: string
	taskCodes: string[]
	userId: string
	username: string
}

export interface PendingMaintenanceTask {
	isDue: boolean
	taskRule: {
		code: string
		taskDetails: {
			type: string
			value: {
				interval: number
			}
		}
	}
}

export interface ClusterPrint {
	jobId: string
	jobInstanceUuid: string
	status: string
}
