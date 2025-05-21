import OdooClient from "~/server/utils/odooClient.ts";

export default defineEventHandler(async (event) => {
  try {
    // Parse the request body
    const body = await readBody(event);

    // Validate email
    if (!body.email) {
      throw new Error("Email is required");
    }

    // Prepare data for Odoo mailing contact
    const contactData = {
      name:body.email,
      email: body.email,
      list_ids: [[6, 0, [2]]], // Replace 1 with your actual mailing list ID
    };

    // Initialize Odoo client
    const odoo = new OdooClient();

    // Create a mailing contact in Odoo
    const result = await odoo.callModel('mailing.contact', 'create', [contactData]);

    // Return success response
    return {
      success: true,
      message: "Successfully subscribed to newsletter",
      data: result,
    };
  } catch (error) {
    // Handle errors
    return {
      success: false,
      message: error instanceof Error ? error.message : "Failed to subscribe to newsletter",
    };
  }
}); 