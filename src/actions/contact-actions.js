"use server";
import {
	response,
	transformFormDataToJSON,
	transformYupErrors,
	YupValidationError,
} from "@/helpers/form-validation";
import { ContactSchema } from "@/helpers/schemas/contact-schema";
import { createContactMessage } from "@/services/contact-service";
import { revalidatePath } from "next/cache";

export const createContactMessageAction = async (prevState, formData) => {
	const fields = transformFormDataToJSON(formData);

	try {
		ContactSchema.validateSync(fields, { abortEarly: false });

		const res = await createContactMessage(fields);
		const data = await res.json();

		if (!res.ok) {
			return response(false, "", data?.validations);
		}

		revalidatePath("/dashboard/contact-message");

		return response(true, "Your message was sent successfully", null);
	} catch (err) {
		if (err instanceof YupValidationError) {
			return transformYupErrors(err.inner);
		}

		throw err;
	}
};
