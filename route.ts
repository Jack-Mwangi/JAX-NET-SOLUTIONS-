import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();

  // In a real implementation, you would use a service like SendGrid, Nodemailer, etc.
  // to send the email to mwangijackson140@gmail.com
  console.log("Form submission received:", data);

  // Simple validation
  if (!data.name || !data.email || !data.websiteType) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  // For demonstration purposes, we're just returning a success response
  // In production, integrate with an email sending service
  return NextResponse.json(
    { message: "Form submitted successfully" },
    { status: 200 }
  );
}
