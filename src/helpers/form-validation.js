export const transformFormDataToJSON = (formData) =>
	Object.fromEntries(formData.entries());
