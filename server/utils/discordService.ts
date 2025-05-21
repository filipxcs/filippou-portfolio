import fetch from "node-fetch";

// Function to send message to Discord webhook
export async function sendDiscordNotification(leadData: { name: string; email_from: string; description: string; expected_revenue: number; }) {
  const webhookUrl = 'https://discord.com/api/webhooks/1354590357748322409/emgZ8GvXoctzeIG0E1K3aU0uj7Rr-MQ2juNG4qJPhI1F4sAzCQi7riRKL2c1I3oT1oCE'; // Replace with your Discord webhook URL

  const message = {
    username: "Offload Lead Bot",
    avatar_url: "https://cal.com/api/avatar/73e14d16-1231-4b06-8fff-3a049b478a11.png", // Replace with your desired avatar URL
    embeds: [
      {
        title: "New Lead Created",
        description: "A new lead has been created with the following details:",
        color: 5814783, // You can change the color code
        fields: [
          {
            name: "Name",
            value: leadData.name,
            inline: true
          },
          {
            name: "Email",
            value: leadData.email_from,
            inline: true
          },
          {
            name: "Message",
            value: leadData.description,
            inline: false
          },
          {
            name: "Expected Revenue",
            value: `$${leadData.expected_revenue}`,
            inline: true
          }
        ],
        timestamp: new Date().toISOString(),
        footer: {
          text: "Lead Bot",
          icon_url: "https://cal.com/api/avatar/73e14d16-1231-4b06-8fff-3a049b478a11.png" // Replace with your desired footer icon URL
        }
      }
    ]
  };
  await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  });
} 