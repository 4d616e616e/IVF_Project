// pages/api/general.js

export default async function handler(req, res) {
  const { method, body, query } = req;

  // Only allow POST and PUT methods
  if (!["POST", "PUT"].includes(method)) {
    return res.status(405).json({
      error: "Method not allowed",
      allowedMethods: ["POST", "PUT"],
    });
  }

  try {
    let apiUrl;

    // Determine the external API endpoint based on method
    if (method === "POST") {
      apiUrl = "https://api.homeivf.com/api/form";
    } else if (method === "PUT") {
      // For PUT requests, expect an 'id' in query parameters
      const { id } = query;

      if (!id) {
        return res.status(400).json({
          error: "ID is required for PUT requests",
          message: "Please provide an ID in the query parameters",
        });
      }

      apiUrl = `https://api.homeivf.com/api/form/${id}`;
    }

    // Make request to external API
    const response = await fetch(apiUrl, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        // Add any additional headers if needed
        // 'Authorization': `Bearer ${process.env.API_TOKEN}`,
      },
      body: JSON.stringify(body),
    });

    // Get response data
    const data = await response.json();

    // Forward the status code and response from external API
    return res.status(response.status).json(data);
  } catch (error) {
    console.error("API forwarding error:", error);

    // Handle different types of errors
    if (error.name === "TypeError" && error.message.includes("fetch")) {
      return res.status(503).json({
        error: "External API unavailable",
        message: "Unable to connect to the external service",
      });
    }

    return res.status(500).json({
      error: "Internal server error",
      message: "An unexpected error occurred while processing your request",
    });
  }
}
