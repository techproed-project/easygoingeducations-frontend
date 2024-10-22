import { CONTACT_CREATE_API } from "@/helpers/api-routes";

export const createContactMessage = (payload) => {
	return fetch(CONTACT_CREATE_API, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
        body: JSON.stringify(payload),
	});
};
