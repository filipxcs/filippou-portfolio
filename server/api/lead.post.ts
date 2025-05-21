import OdooClient from "~/server/utils/odooClient.ts";
import { sendDiscordNotification } from "~/server/utils/discordService";

export default defineEventHandler(async (event) => {
  try {
    // Parse the request body
    const body = await readBody(event);

    // Validate the incoming data (optional but recommended)
    if (!body.name || !body.email || !body.message) {
      throw new Error("Missing required fields");
    }

    // Prepare data for Odoo CRM lead
    const leadData = {
      name: body.name, // Contact name
      email_from: body.email, // Email
      description: body.message, // Project description
      expected_revenue: parseFloat(body.budget) || 0 // Ensure it's a float
    };

    // Initialize Odoo client
    const odoo = new OdooClient();

    // Create a CRM lead in Odoo
    const result = await odoo.callModel('crm.lead', 'create', [leadData]);
    // Send message to Discord webhook
    await sendDiscordNotification(leadData);

    // Return success response
    return {
      success: true,
      message: "CRM lead created successfully",
      data: result,
    };
  } catch (error) {
    // Handle errors
    return {
      success: false,
      message: error.message || "Failed to create CRM lead",
    };
  }
});