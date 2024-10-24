"use server";

import { signIn } from "@/auth";
import {
	response,
	transformFormDataToJSON,
	transformYupErrors,
	YupValidationError,
} from "@/helpers/form-validation";
import { AuthSchema } from "@/helpers/schemas/auth-schema";
import { AuthError } from "next-auth";

export const loginAction = async (prevState, formData) => {
	const fields = transformFormDataToJSON(formData);

	try {
		AuthSchema.validateSync(fields, { abortEarly: false });

		await signIn("credentials", fields);
	} catch (err) {
		if (err instanceof YupValidationError) {
			return transformYupErrors(err.inner);
		} else if (err instanceof AuthError) {
			return response(false, "Invalid username or password", null);
		}

		throw err;
	}
};
