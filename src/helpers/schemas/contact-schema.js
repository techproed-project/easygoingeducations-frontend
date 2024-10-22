import * as Yup from "yup";

export const ContactSchema = Yup.object({
	name: Yup.string().required("Name is required"),
	email: Yup.string().email("Invalid email").required("Email is required"),
	message: Yup.string().required("Message is required"),
	subject: Yup.string().required("Subject is required"),
});
