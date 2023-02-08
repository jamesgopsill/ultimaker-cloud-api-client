import type {
	ApiStatus,
	ApplicationList,
	BulkAccountDetails,
	DecodedAccessToken,
	Jwks,
	OpenIdConfiguration,
	Organization,
	ScopeDetails,
	Subscription,
	Team,
	TokenResponse,
	UltimakerClient,
	User,
} from "../index.js"

export async function refreshToken(this: UltimakerClient) {
	const url = `${this._accountUrl}/token`

	const urlArgs = {
		clientId: this._clientId,
		clientSecret: this._clientSecret,
		redirectUri: this._redirectUri,
		scope: this._scope.join("&"),
		refreshToken: this._refreshToken,
		grantType: "refresh_token",
	}

	return this._fetch<TokenResponse>("POST", url, urlArgs)
}

export async function jwks(this: UltimakerClient) {
	const url = `${this._accountUrl}/.well-known/jwks`
	return this._fetch<Jwks>("GET", url)
}

export async function openIdConfiguration(this: UltimakerClient) {
	const url = `${this._accountUrl}/.well-known/openid-configuration`
	return this._fetch<OpenIdConfiguration>("GET", url)
}

export async function applicationList(this: UltimakerClient) {
	const url = `${this._accountUrl}/application-list`
	return this._fetch<ApplicationList>("GET", url)
}

export async function bulkAccountImport() {
	return "Not Implemented Yet"
}

export async function bulkAccountDetails(
	this: UltimakerClient,
	bulkAccountId: string
) {
	const url = `${this._accountUrl}/bulk/accounts/${bulkAccountId}`
	return this._fetch<BulkAccountDetails>("GET", url)
}

export async function confirmUserCreationFromBulkAccountImport() {
	return "Not Implemented Yet"
}

export async function checkToken(this: UltimakerClient) {
	const url = `${this._accountUrl}/check-token`
	return this._fetch<DecodedAccessToken>("GET", url)
}

export async function sendEmailToUser(this: UltimakerClient) {
	return "Not Implemented Yet"
}

export async function newSpatialLicense(this: UltimakerClient) {
	return "Not Implemented Yet"
}

export async function newOrganization(
	this: UltimakerClient,
	name: string,
	summary: string,
	description: string
) {
	const url = `${this._accountUrl}/organizations`
	const data = {
		summary,
		description,
		value: {
			organizationName: name,
		},
	}
	return this._fetch<Organization>("PUT", url, {}, data)
}

export async function currentOrganization(this: UltimakerClient) {
	const url = `${this._accountUrl}/organizations/current`
	return this._fetch<Organization>("GET", url)
}

export async function updateOrganization(
	this: UltimakerClient,
	name: string,
	summary: string,
	description: string
) {
	const url = `${this._accountUrl}/organizations/current`
	const data = {
		summary,
		description,
		value: {
			organizationName: name,
		},
	}
	return this._fetch<Organization>("POST", url, {}, data)
}

export async function inviteUserToOrganization(
	this: UltimakerClient,
	emails: string[],
	redirectUri: string,
	roles: [],
	summary: string,
	description: string
) {
	const data = {
		summary,
		description,
		value: {
			emails,
			redirectUri: redirectUri,
			roles,
		},
	}
	const url = `${this._accountUrl}/organizations/current/invitations`
	return this._fetch<undefined>("POST", url, {}, data)
}

export async function deleteInvitationToOrganization(
	this: UltimakerClient,
	id: string
) {
	const url = `${this._accountUrl}/organizations/current/invitations/${id}`
	return this._fetch<undefined>("DELETE", url)
}

export async function currentOrganizationMembers(this: UltimakerClient) {
	const url = `${this._accountUrl}/organizations/current/members`
	return this._fetch<User[]>("GET", url)
}

export async function updateOrganizationMemberData(this: UltimakerClient) {
	return "Not Implemented Yet"
}

export async function removeMemberFromOgranization(
	this: UltimakerClient,
	id: string
) {
	const url = `${this._accountUrl}/organizations/current/members/${id}`
	return this._fetch<undefined>("DELETE", url)
}

export async function organizationInvitiation(
	this: UltimakerClient,
	organizationId: string,
	invitationId: string
) {
	const url = `${this._accountUrl}/organizations/${organizationId}/invitations/${invitationId}`
	return this._fetch<{
		email: string
		invitationId: string
		organizationName: string
	}>("GET", url)
}

export async function updateInvitationStatus(
	this: UltimakerClient
	//organizationId: string,
	//invitationId: string
	//status: string
) {
	//const url = `${this._accountUrl}/organizations/${organizationId}/invitations/${invitationId}`
	return "Not Implemented Yet"
}

export async function publicKey(this: UltimakerClient) {
	const url = `${this._accountUrl}/public-key`
	return this._fetch<string>("GET", url)
}

export async function scopes(this: UltimakerClient) {
	const url = `${this._accountUrl}/scopes`
	return this._fetch<ScopeDetails[]>("GET", url)
}

export async function spec(this: UltimakerClient) {
	return "Not Implemented Yet"
}

export async function accountServiceStatus(this: UltimakerClient) {
	const url = `${this._accountUrl}/status`
	return this._fetch<ApiStatus>("GET", url)
}

export async function subscriptions(this: UltimakerClient) {
	const url = `${this._accountUrl}/subscriptions`
	return this._fetch<Subscription[]>("GET", url)
}

export async function addSubscription(
	this: UltimakerClient
	//typeId: string,
	//planId: string
	//expiresAt: string
) {
	//const url = `${this._accountUrl}/organizations/${organizationId}/invitations/${invitationId}`
	return "Not Implemented Yet"
}

export async function updateSubscription(
	this: UltimakerClient,
	id: string,
	expiresAt: string
) {
	const url = `${this._accountUrl}/subscriptions/${id}`
	const data = {
		summary: "",
		description: "",
		values: {
			expiresAt,
		},
	}
	return this._fetch<any>("POST", url, {}, data)
}

export async function teams(this: UltimakerClient) {
	const url = `${this._accountUrl}/teams`
	return this._fetch<Team[]>("POST", url)
}

export async function createTeam(this: UltimakerClient, name: string) {
	const data = {
		summary: "",
		description: "",
		values: {
			name,
		},
	}
	const url = `${this._accountUrl}/teams`
	return this._fetch<any>("PUT", url, {}, data)
}

export async function team(this: UltimakerClient, id: string) {
	const url = `${this._accountUrl}/teams/${id}`
	return this._fetch<Team>("GET", url)
}

export async function updateTeamMembers(
	this: UltimakerClient,
	teamId: string,
	userIds: string[]
) {
	const url = `${this._accountUrl}/teams/${teamId}`
	const data = {
		summary: "",
		description: "",
		values: {
			userIds,
		},
	}
	return this._fetch<Team>("PUT", url, {}, data)
}

export async function updateTeamName(
	this: UltimakerClient,
	id: string,
	name: string
) {
	const url = `${this._accountUrl}/teams/${id}`
	const data = {
		summary: "",
		description: "",
		values: {
			name,
		},
	}
	return this._fetch<Team>("POST", url, {}, data)
}

export async function deleteTeam(this: UltimakerClient, id: string) {
	const url = `${this._accountUrl}/teams/${id}`
	return this._fetch<undefined>("DELETE", url)
}

export async function uploadTeamImage(this: UltimakerClient) {
	return "Not Implemented Yet"
}

export async function deleteTeamImage(this: UltimakerClient, id: string) {
	const url = `${this._accountUrl}/teams/${id}/image`
	return this._fetch<undefined>("DELETE", url)
}

export async function inviteNewTeamMembers(
	this: UltimakerClient,
	id: string,
	emails: string[]
) {
	const url = `${this._accountUrl}/teams/${id}/invitations`
	const data = {
		summary: "",
		description: "",
		values: {
			emails,
		},
	}
	return this._fetch<undefined>("PUT", url, {}, data)
}

export async function getTeamMembers(this: UltimakerClient, id: string) {
	const url = `${this._accountUrl}/teams/${id}/members`
	return this._fetch<User[]>("GET", url)
}

export async function removeTeamMember(
	this: UltimakerClient,
	teamId: string,
	userId: string
) {
	const url = `${this._accountUrl}/teams/${teamId}/members/${userId}`
	return this._fetch<undefined>("DELETE", url)
}

export async function postToken(this: UltimakerClient) {
	return "Not Implemented Yet"
}

export async function deleteToken(this: UltimakerClient) {
	const url = `${this._accountUrl}/token`
	return this._fetch<undefined>("DELETE", url)
}

export async function users(this: UltimakerClient) {
	return "Not Implemented Yet"
}

export async function currentUsers(this: UltimakerClient) {
	return "Not Implemented Yet"
}

export async function userPermissions(this: UltimakerClient) {
	return "Not Implemented Yet"
}

export async function userRoles(this: UltimakerClient) {
	return "Not Implemented Yet"
}
