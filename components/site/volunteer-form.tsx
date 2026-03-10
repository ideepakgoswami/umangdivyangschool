"use client";

import * as React from "react";
import { useFormState, useFormStatus } from "react-dom";
import { Calendar, Mail, Phone, Sparkles, User } from "lucide-react";

import { submitVolunteer } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

function SubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Submitting..." : label}
    </Button>
  );
}

export function VolunteerForm({ className }: { className?: string }) {
  const [state, formAction] = useFormState(submitVolunteer, null);
  const errors = state && !state.ok ? state.fieldErrors ?? {} : {};

  return (
    <form action={formAction} className={cn("grid gap-4", className)} noValidate>
      <div className="grid gap-2">
        <Label htmlFor="name">Name</Label>
        <div className="relative">
          <User className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-muted-foreground" aria-hidden />
          <Input
            id="name"
            name="name"
            placeholder="Your full name"
            className={cn("pl-9", errors.name ? "border-destructive focus-visible:ring-destructive" : "")}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            required
          />
        </div>
        {errors.name ? (
          <p id="name-error" className="text-xs text-destructive">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <div className="relative">
            <Mail className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-muted-foreground" aria-hidden />
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              className={cn("pl-9", errors.email ? "border-destructive focus-visible:ring-destructive" : "")}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              required
            />
          </div>
          {errors.email ? (
            <p id="email-error" className="text-xs text-destructive">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div className="grid gap-2">
          <Label htmlFor="phone">Phone</Label>
          <div className="relative">
            <Phone className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-muted-foreground" aria-hidden />
            <Input
              id="phone"
              name="phone"
              inputMode="tel"
              placeholder="+91 9XXXXXXXXX"
              className={cn("pl-9", errors.phone ? "border-destructive focus-visible:ring-destructive" : "")}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              required
            />
          </div>
          {errors.phone ? (
            <p id="phone-error" className="text-xs text-destructive">
              {errors.phone}
            </p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="skills">Skills</Label>
        <div className="relative">
          <Sparkles className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-muted-foreground" aria-hidden />
          <Input
            id="skills"
            name="skills"
            placeholder="Teaching, therapy, art, events, admin, fundraising…"
            className={cn("pl-9", errors.skills ? "border-destructive focus-visible:ring-destructive" : "")}
            aria-invalid={Boolean(errors.skills)}
            aria-describedby={errors.skills ? "skills-error" : undefined}
            required
          />
        </div>
        {errors.skills ? (
          <p id="skills-error" className="text-xs text-destructive">
            {errors.skills}
          </p>
        ) : null}
      </div>

      <div className="grid gap-2">
        <Label htmlFor="availability">Availability</Label>
        <div className="relative">
          <Calendar className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-muted-foreground" aria-hidden />
          <Input
            id="availability"
            name="availability"
            placeholder="Weekends, 2 hours/week, monthly visits…"
            className={cn("pl-9", errors.availability ? "border-destructive focus-visible:ring-destructive" : "")}
            aria-invalid={Boolean(errors.availability)}
            aria-describedby={errors.availability ? "availability-error" : undefined}
            required
          />
        </div>
        {errors.availability ? (
          <p id="availability-error" className="text-xs text-destructive">
            {errors.availability}
          </p>
        ) : null}
      </div>

      <div className="grid gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us why you’d like to volunteer and how you can help."
          className={cn(errors.message ? "border-destructive focus-visible:ring-destructive" : "")}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          required
        />
        {errors.message ? (
          <p id="message-error" className="text-xs text-destructive">
            {errors.message}
          </p>
        ) : null}
      </div>

      {state ? (
        <p
          className={cn(
            "text-sm",
            state.ok ? "text-foreground" : "text-destructive"
          )}
          role="status"
          aria-live="polite"
        >
          {state.message}
        </p>
      ) : null}

      <div className="flex items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          We’ll contact you within 3–5 working days.
        </p>
        <SubmitButton label="Submit" />
      </div>
    </form>
  );
}

