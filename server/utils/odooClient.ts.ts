import fetch from "node-fetch";

const ODOO_URL = "https://portal.offload.studio/"; // Change to your Odoo instance
const ODOO_DB = "offload"; // Change to your database name
const ODOO_USERNAME = "filippou@offload.studio"; // Change to your Odoo username
const ODOO_PASSWORD = "petros1020P@"; // Change to your password

export default class OdooClient {
  private uid: number | null = null;

  constructor() {
    this.authenticate();
  }

  async jsonRpcCall(method: string, params: any) {
    const response = await fetch(`${ODOO_URL}/jsonrpc`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        jsonrpc: "2.0",
        method: "call",
        params,
        id: new Date().getTime(),
      }),
    });

    const result = await response.json();
    if (result.error) throw new Error(result.error.data.message);
    return result.result;
  }

  async authenticate() {
    try {
      this.uid = await this.jsonRpcCall("call", {
        service: "common",
        method: "authenticate",
        args: [ODOO_DB, ODOO_USERNAME, ODOO_PASSWORD, {}],
      });

      if (!this.uid) throw new Error("Authentication failed");
      console.log("✅ Authenticated with Odoo API, UID:", this.uid);
    } catch (error) {
      console.error("❌ Odoo Authentication Failed:", error.message);
    }
  }

  async callModel(model: string, method: string, args: any[]) {
    if (!this.uid) await this.authenticate(); // Re-authenticate if needed

    return this.jsonRpcCall("call", {
      service: "object",
      method: "execute_kw",
      args: [ODOO_DB, this.uid, ODOO_PASSWORD, model, method, args],
    });
  }
}