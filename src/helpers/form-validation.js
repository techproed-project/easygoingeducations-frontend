export { ValidationError as YupValidationError } from "yup"

export const transformFormDataToJSON = (formData) =>
	Object.fromEntries(formData.entries());

export const response = (ok, message, errors) => {
	return {
		ok,
		message,
		errors,
	};
};

export const initialResponse = response(false, "", null);

export const transformYupErrors = (errors) => {
	const errObject = {};
	errors.forEach((error) => (errObject[error.path] = error.message));

	return response(false, "", errObject);
};
