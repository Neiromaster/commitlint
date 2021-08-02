export default (value: any, enums: any[] = []): boolean => {
	if (value === undefined) {
		return false;
	}
	if (!Array.isArray(enums)) {
		return false;
	}
	return enums.some((v) => (v instanceof RegExp ? v.test(value) : v == value));
};
