export const arrayUrlEncode = (array: {}) => {
	let s = ""
	for (const [k, v] of Object.entries(array)) {
		s += `${k}=${v}&`
	}
	s = s.substring(0, s.length - 1)
	return encodeURI(s)
}
