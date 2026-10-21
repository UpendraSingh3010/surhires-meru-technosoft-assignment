"use client";

import { CircleCheck, LoaderCircle } from "lucide-react";
import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { cardClasses } from "@/components/ui/Card";
import { describedBy, Field } from "@/components/ui/Field";
import { Input, Textarea } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { jobTypes } from "@/lib/data/jobs";

type FormValues = {
  companyName: string;
  name: string;
  email: string;
  jobTitle: string;
  location: string;
  jobType: string;
  salary: string;
  description: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

type Status = "idle" | "submitting" | "success";

const initialValues: FormValues = {
  companyName: "",
  name: "",
  email: "",
  jobTitle: "",
  location: "",
  jobType: "",
  salary: "",
  description: "",
};

const DESCRIPTION_MIN_LENGTH = 80;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (!values.companyName.trim()) errors.companyName = "Enter your company name.";
  if (!values.name.trim()) errors.name = "Enter your full name.";

  if (!values.email.trim()) {
    errors.email = "Enter your work email.";
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "Enter an email address like priya@company.com.";
  }

  if (values.jobTitle.trim().length < 3) errors.jobTitle = "Enter a job title of at least 3 characters.";
  if (!values.location.trim()) errors.location = "Enter a city, or “Remote”.";
  if (!values.jobType) errors.jobType = "Choose a job type.";
  if (!values.salary.trim()) errors.salary = "Enter a salary range. Every Surhires listing shows one.";

  if (values.description.trim().length < DESCRIPTION_MIN_LENGTH) {
    errors.description = `Write at least ${DESCRIPTION_MIN_LENGTH} characters so candidates understand the role.`;
  }

  return errors;
}

export function PostJobForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  // Errors only appear after the first submit attempt, then update as the user types.
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLHeadingElement>(null);

  // Move focus to the confirmation so screen reader and keyboard users notice it.
  useEffect(() => {
    if (status === "success") successRef.current?.focus();
  }, [status]);

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) {
    const nextValues = { ...values, [event.target.name]: event.target.value };
    setValues(nextValues);
    if (hasSubmitted) setErrors(validate(nextValues));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    setHasSubmitted(true);

    const firstInvalid = Object.keys(nextErrors)[0];
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    // No backend: simulate a short network request.
    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setStatus("success");
  }

  function handleReset() {
    setValues(initialValues);
    setErrors({});
    setHasSubmitted(false);
    setStatus("idle");
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-teal-700/30 bg-teal-50 p-8 text-center md:p-12">
        <CircleCheck aria-hidden="true" className="mx-auto size-12 text-teal-700" />
        <h3 ref={successRef} tabIndex={-1} className="mt-4 text-h2 font-bold focus:outline-none">
          Your job post is in review
        </h3>
        <p className="mx-auto mt-3 max-w-md text-muted">
          Thanks, {values.name.trim().split(" ")[0]}. We will check your{" "}
          <strong className="text-ink">{values.jobTitle.trim()}</strong> listing and email{" "}
          <strong className="text-ink">{values.email.trim()}</strong> within two working hours,
          as soon as it goes live.
        </p>
        <Button variant="secondary" size="lg" onClick={handleReset} className="mt-8">
          Post another job
        </Button>
      </div>
    );
  }

  const isSubmitting = status === "submitting";

  // Props shared by every control: value, change handler, error state and descriptions.
  function fieldProps(name: keyof FormValues, hint?: string) {
    return {
      id: name,
      name,
      value: values[name],
      onChange: handleChange,
      disabled: isSubmitting,
      // Every field is required; noValidate turns off the browser's own messages.
      "aria-required": true,
      "aria-invalid": errors[name] ? true : undefined,
      "aria-describedby": describedBy(name, hint, errors[name]),
    };
  }

  const salaryHint = "Annual CTC, e.g. ₹12L – ₹18L per year.";
  const descriptionHint = `Responsibilities, must-have skills and team. Minimum ${DESCRIPTION_MIN_LENGTH} characters.`;

  return (
    <form
      ref={formRef}
      noValidate
      onSubmit={handleSubmit}
      aria-label="Post a job"
      className={`${cardClasses} p-6 md:p-8`}
    >
      <div className="grid gap-6 md:grid-cols-2">
        <Field id="companyName" label="Company name" error={errors.companyName} required>
          <Input {...fieldProps("companyName")} autoComplete="organization" />
        </Field>
        <Field id="name" label="Your name" error={errors.name} required>
          <Input {...fieldProps("name")} autoComplete="name" />
        </Field>
        <Field id="email" label="Work email" error={errors.email} required>
          <Input {...fieldProps("email")} type="email" autoComplete="email" />
        </Field>
        <Field id="jobTitle" label="Job title" error={errors.jobTitle} required>
          <Input {...fieldProps("jobTitle")} />
        </Field>
        <Field id="location" label="Location" error={errors.location} required>
          <Input {...fieldProps("location")} placeholder="e.g. Pune or Remote" />
        </Field>
        <Field id="jobType" label="Job type" error={errors.jobType} required>
          <Select {...fieldProps("jobType")}>
            <option value="">Select a job type</option>
            {jobTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </Select>
        </Field>
        <div className="md:col-span-2">
          <Field id="salary" label="Salary range" hint={salaryHint} error={errors.salary} required>
            <Input {...fieldProps("salary", salaryHint)} />
          </Field>
        </div>
        <div className="md:col-span-2">
          <Field
            id="description"
            label="Job description"
            hint={descriptionHint}
            error={errors.description}
            required
          >
            <Textarea {...fieldProps("description", descriptionHint)} rows={6} />
          </Field>
          <p className="mt-1.5 text-right text-small text-muted">
            {values.description.trim().length} / {DESCRIPTION_MIN_LENGTH} characters minimum
          </p>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-small text-muted">
          <span className="text-danger" aria-hidden="true">
            *
          </span>{" "}
          Required field
        </p>
        <Button type="submit" size="lg" disabled={isSubmitting}>
          {isSubmitting && <LoaderCircle aria-hidden="true" className="size-5 motion-safe:animate-spin" />}
          {isSubmitting ? "Submitting…" : "Submit job post"}
        </Button>
      </div>
    </form>
  );
}
