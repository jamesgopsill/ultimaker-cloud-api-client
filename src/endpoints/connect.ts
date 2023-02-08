import type {
	ApiStatus,
	Cluster,
	ClusterPrint,
	CompletedMaintenanceTask,
	PendingMaintenanceTask,
	PrintJobDetails,
	TeamCounts,
	UltimakerClient,
} from "../index.js"

export async function connectServiceStatus(this: UltimakerClient) {
	const url = `${this._connectUrl}/`
	return this._fetch<ApiStatus>("GET", url)
}

export async function clusterTeamCounts(this: UltimakerClient) {
	const url = `${this._connectUrl}/clusters/team_count`
	return this._fetch<TeamCounts>("GET", url)
}

export async function cluster(this: UltimakerClient, id: string) {
	const url = `${this._connectUrl}/clusters/${id}`
	return this._fetch<Cluster>("GET", url)
}

export async function removeCluster(this: UltimakerClient, id: string) {
	const url = `${this._connectUrl}/clusters/${id}`
	return this._fetch("DELETE", url)
}

export async function addClusterNote(
	this: UltimakerClient,
	id: string,
	note: string,
	summary: string = "",
	description: string = ""
) {
	const url = `${this._connectUrl}/clusters/${id}`
	const data = {
		summary,
		description,
		value: {
			note: {
				note,
			},
		},
	}
	return this._fetch("DELETE", url, {}, data)
}

export async function clusterPrintJob(
	this: UltimakerClient,
	clusterId: string,
	jobId: string
) {
	const url = `${this._connectUrl}/clusters/${clusterId}/print_jobs/${jobId}`
	return this._fetch<PrintJobDetails>("GET", url)
}

export async function updateClusterPrintJob(this: UltimakerClient) {
	return "Not Implemented Yet"
}

export async function submitPrinterAction(this: UltimakerClient) {
	return "Not Implemented Yet"
}

export async function reprint(this: UltimakerClient) {
	return "Not Implemented Yet"
}

export async function clusterSharingSettings(this: UltimakerClient) {
	return "Not Implemented Yet"
}

export async function clusters(this: UltimakerClient) {
	const url = `${this._connectUrl}/clusters`
	return this._fetch<Cluster[]>("GET", url)
}

export async function clusterActionStatus(
	this: UltimakerClient,
	clusterId: string,
	actionId: string
) {
	const url = `${this._connectUrl}/clusters/${clusterId}/action_status/${actionId}`
	return this._fetch<{
		actionId: string
		status: string
	}>("GET", url)
}

export async function addClusterMaintenanceTask(
	this: UltimakerClient,
	clusterId: string,
	taskCodes: string[],
	summary: string = "",
	description: string = ""
) {
	const url = `${this._connectUrl}/clusters/${clusterId}/maintenance`
	const data = {
		summary,
		description,
		value: {
			taskCodes,
		},
	}
	return this._fetch("PUT", url, {}, data)
}

export async function completedMaintenanceTasks(this: UltimakerClient) {
	const url = `${this._connectUrl}/clusters/maintenance/completed`
	return this._fetch<CompletedMaintenanceTask[]>("GET", url)
}

export async function pendingMaintenanceTasks(this: UltimakerClient) {
	const url = `${this._connectUrl}/clusters/maintenance/pending`
	return this._fetch<PendingMaintenanceTask[]>("GET", url)
}

export async function clusterPrint(
	this: UltimakerClient,
	clusterId: string,
	jobId: string
) {
	const url = `${this._connectUrl}/clusters/${clusterId}/print/${jobId}`
	return this._fetch<ClusterPrint>("POST", url)
}

export async function sendPrinterAction(this: UltimakerClient) {
	return "Not Implemented Yet"
}

export async function clusterStatus(this: UltimakerClient, clusterId: string) {
	const url = `${this._connectUrl}/clusters/${clusterId}/status`
	return this._fetch<any>("GET", url)
}

export async function confirmRegistrationPin(
	this: UltimakerClient,
	pinCode: string
) {
	const url = `${this._connectUrl}/confirm-registration-pin/${pinCode}`
	return this._fetch<any>("POST", url)
}

export async function confirmRegistration(
	this: UltimakerClient,
	connectionId: string
) {
	const url = `${this._connectUrl}/confirm-registration/${connectionId}`
	return this._fetch<{
		clusterId: string
		hostName: string
	}>("POST", url)
}

export async function listJobFilter(this: UltimakerClient) {
	const url = `${this._connectUrl}/filters/print_jobs`
	return this._fetch<
		[
			{
				displayName: string
				key: string
				type: string
			}
		]
	>("POST", url)
}

export async function materialsUpload(this: UltimakerClient) {
	return "Not Implemented Yet"
}

export async function printJobs(this: UltimakerClient) {
	const url = `${this._connectUrl}/print_jobs`
	return this._fetch<any>("GET", url)
}

export async function printJobReports(this: UltimakerClient) {
	const url = `${this._connectUrl}/print_jobs/reports`
	return this._fetch<any>("GET", url)
}

export async function settings(this: UltimakerClient) {
	const url = `${this._connectUrl}/print_jobs/reports`
	return this._fetch<any>("GET", url)
}

export async function updateSettings(this: UltimakerClient) {
	const url = `${this._connectUrl}/print_jobs/reports`
	return this._fetch<any>("GET", url)
}

export async function teapot(this: UltimakerClient) {
	const url = `${this._connectUrl}/teapot`
	return this._fetch("GET", url)
}
