"use server"

import { transformFormDataToJSON } from "@/helpers/form-validation"
import { ContactSchema } from "@/helpers/schemas/contact-schema";
import { createContactMessage } from "@/services/contact-service";




export const createContactmessageAction = async (prevState, formData) => {
    
    const fields = transformFormDataToJSON(formData);

    try {
        ContactSchema.validateSync(fields, { abortEarly: false });

        const res = await createContactMessage(fields);
        const data = await res.json();

        console.log(data)



    } catch (err) {
        
    }


}