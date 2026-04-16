import sql from "@/app/api/utils/sql";

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      full_name,
      email,
      whatsapp_number,
      affiliation,
      country,
      background,
      area_of_interest,
      purpose_of_joining,
      preferred_format,
      message,
    } = body;

    if (!full_name || !email || !whatsapp_number) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const result = await sql`
      INSERT INTO conference_leads (
        full_name,
        email,
        whatsapp_number,
        affiliation,
        country,
        background,
        area_of_interest,
        purpose_of_joining,
        preferred_format,
        message
      ) VALUES (
        ${full_name},
        ${email},
        ${whatsapp_number},
        ${affiliation},
        ${country},
        ${background},
        ${area_of_interest},
        ${purpose_of_joining},
        ${preferred_format},
        ${message}
      )
      RETURNING id
    `;

    return Response.json({ success: true, id: result[0].id });
  } catch (error) {
    console.error("Error saving lead:", error);
    return Response.json(
      { error: "Failed to save lead information" },
      { status: 500 },
    );
  }
}
