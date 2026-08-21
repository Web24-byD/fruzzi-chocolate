import { useState, type FormEvent } from "react";
import { useI18n } from "@/i18n";

type Errors = Partial<Record<"name" | "email" | "phone", string>>;

export function EnquiryForm({ subject }: { subject?: string }) {
  const { t, language } = useI18n();

  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const date = String(data.get("date") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const next: Errors = {};

    if (!name) {
      next.name = t.form.errors.name;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = t.form.errors.email;
    }

    if (!phone) {
      next.phone = t.form.errors.phone;
    }

    setErrors(next);

    if (Object.keys(next).length) {
      return;
    }

    setStatus("sending");

    /*
     * Create the WhatsApp message according to the
     * currently selected language.
     */
    const whatsappMessage =
      language === "ru"
        ? [
            "Здравствуйте, FRUZZI!",
            "",
            `Хотел(а) бы узнать подробнее о ${
              subject === "masterclass"
                ? "мастер-классе"
                : "ваших услугах"
            }.`,
            "",
            `Имя: ${name}`,
            `Email: ${email}`,
            `Телефон / WhatsApp: ${phone}`,
            date ? `Желаемая дата: ${date}` : "",
            message ? `Сообщение: ${message}` : "",
          ]
            .filter(Boolean)
            .join("\n")
        : [
            "Hello FRUZZI,",
            "",
            `I would like to enquire about a ${
              subject === "masterclass" ? "Masterclass" : "service"
            }.`,
            "",
            `Name: ${name}`,
            `Email: ${email}`,
            `Phone / WhatsApp: ${phone}`,
            date ? `Preferred Date: ${date}` : "",
            message ? `Message: ${message}` : "",
          ]
            .filter(Boolean)
            .join("\n");

    /*
     * Your FRUZZI WhatsApp number.
     * Change this number only if your business WhatsApp number
     * is different.
     */
    const whatsappNumber = "77015285601";

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage,
    )}`;

    /*
     * Small delay so the button shows "Sending..."
     * before WhatsApp opens.
     */
    window.setTimeout(() => {
      setStatus("sent");

      window.open(
        whatsappUrl,
        "_blank",
        "noopener,noreferrer",
      );
    }, 700);
  }

  const fields = [
    {
      name: "name",
      label: t.form.name,
      type: "text",
      autoComplete: "name",
      required: true,
    },
    {
      name: "email",
      label: t.form.email,
      type: "email",
      autoComplete: "email",
      required: true,
    },
    {
      name: "phone",
      label: t.form.phone,
      type: "tel",
      autoComplete: "tel",
      required: true,
    },
    {
      name: "date",
      label: t.form.date,
      type: "date",
      autoComplete: "off",
      required: false,
    },
  ] as const;

  if (status === "sent") {
    return (
      <div role="status" className="border border-border p-8">
        <p className="micro text-champagne">
          {t.form.title}
        </p>

        <p className="mt-5 font-display text-2xl leading-snug font-light">
          {t.form.success}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="grid gap-8"
      aria-label={t.form.title}
    >
      <div className="grid gap-8 sm:grid-cols-2">
        {fields.map((f) => {
          const error =
            errors[f.name as keyof Errors];

          return (
            <div key={f.name}>
              <label
                htmlFor={`enq-${f.name}`}
                className="micro text-muted-foreground"
              >
                {f.label}

                {!f.required ? (
                  <span className="ml-2 normal-case opacity-60">
                    ({t.form.optional})
                  </span>
                ) : null}
              </label>

              <input
                id={`enq-${f.name}`}
                name={f.name}
                type={f.type}
                autoComplete={f.autoComplete}
                aria-invalid={Boolean(error) || undefined}
                aria-describedby={
                  error
                    ? `enq-${f.name}-error`
                    : undefined
                }
                className="field mt-2"
              />

              {error ? (
                <p
                  id={`enq-${f.name}-error`}
                  className="mt-2 text-xs text-destructive"
                >
                  {error}
                </p>
              ) : null}
            </div>
          );
        })}
      </div>

      <div>
        <label
          htmlFor="enq-message"
          className="micro text-muted-foreground"
        >
          {t.form.message}
        </label>

        <textarea
          id="enq-message"
          name="message"
          rows={4}
          className="field mt-2 resize-none"
        />
      </div>

      {subject ? (
        <input
          type="hidden"
          name="subject"
          value={subject}
        />
      ) : null}

      <div>
        <button
          type="submit"
          className="btn-solid"
          disabled={status === "sending"}
        >
          {status === "sending"
            ? t.form.sending
            : t.form.submit}
        </button>
      </div>
    </form>
  );
}