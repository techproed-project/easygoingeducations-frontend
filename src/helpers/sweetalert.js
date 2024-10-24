import Swal from "sweetalert2";

export const swAlert = (title, icon = "info", text = "") => {
	// icon: success | error | info | warning | question

	Swal.fire({
		title,
		text,
		icon,
	});
};
