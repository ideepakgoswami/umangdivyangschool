"use server";

import { z } from "zod";

type ActionState =
  | { ok: true; message: string }
  | { ok: false; message: string; fieldErrors?: Record<string, string> };

function toFieldErrors(issues: z.ZodIssue[]) {
  const out: Record<string, string> = {};
  for (const i of issues) {
    const key = i.path.join(".") || "form";
    if (!out[key]) out[key] = i.message;
  }
  return out;
}

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email."),
  phone: z.string().min(7, "Please enter a valid phone number.").optional().or(z.literal("")),
  message: z.string().min(10, "Please tell us a bit more (at least 10 characters)."),
});

export async function submitContact(
  _prev: ActionState | null,
  formData: FormData
): Promise<ActionState> {
  const raw = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    message: String(formData.get("message") ?? ""),
  };

  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) {
    return {
      ok: false,
      message: "Please fix the highlighted fields.",
      fieldErrors: toFieldErrors(parsed.error.issues),
    };
  }

  // Replace with email/CRM integration (e.g., Resend, Postmark, Google Sheets) before launch.
  console.log("Contact form submission:", parsed.data);

  return {
    ok: true,
    message: "Thanks — we received your message and will get back to you soon.",
  };
}

const volunteerSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email."),
  phone: z.string().min(7, "Please enter a valid phone number."),
  skills: z.string().min(2, "Tell us at least one relevant skill."),
  availability: z.string().min(2, "Share your availability (e.g., weekends)."),
  message: z.string().min(10, "Please add a short message (at least 10 characters)."),
});

export async function submitVolunteer(
  _prev: ActionState | null,
  formData: FormData
): Promise<ActionState> {
  const raw = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    skills: String(formData.get("skills") ?? ""),
    availability: String(formData.get("availability") ?? ""),
    message: String(formData.get("message") ?? ""),
  };

  const parsed = volunteerSchema.safeParse(raw);
  if (!parsed.success) {
    return {
      ok: false,
      message: "Please fix the highlighted fields.",
      fieldErrors: toFieldErrors(parsed.error.issues),
    };
  }

  console.log("Volunteer form submission:", parsed.data);

  return {
    ok: true,
    message:
      "Thank you for volunteering — we’ll contact you soon with next steps.",
  };
}

