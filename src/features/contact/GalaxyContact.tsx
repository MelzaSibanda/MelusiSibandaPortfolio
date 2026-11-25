import { useState, type FormEvent } from 'react';
import {
  ContentPanel,
  HolographicTitle,
  PanelSubheading,
} from '../../components/ContentPanel';

const email = 'melzasibanda@gmail.com';
const fields = [
  { name: 'name', label: 'Name', min: 2, max: 100 },
  { name: 'email', label: 'Email', min: 3, max: 254 },
  { name: 'message', label: 'Message', min: 10, max: 1200 },
] as const;
type Field = (typeof fields)[number]['name'];

export function GalaxyContact() {
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [draft, setDraft] = useState('');

  function prepareMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    if (data.get('website')) return;

    const values = {
      name: String(data.get('name') ?? '').trim(),
      email: String(data.get('email') ?? '').trim(),
      message: String(data.get('message') ?? '').trim(),
    };
    const nextErrors: typeof errors = {};
    for (const { name, label, min, max } of fields) {
      if (values[name].length < min || values[name].length > max) {
        nextErrors[name] =
          `${label} must be between ${min} and ${max} characters.`;
      }
    }
    if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = 'Enter a valid email address.';
    }
    setErrors(nextErrors);
    const firstError = fields.find(({ name }) => nextErrors[name]);
    if (firstError) {
      setDraft('');
      (form.elements.namedItem(firstError.name) as HTMLElement | null)?.focus();
      return;
    }

    const body = `From: ${values.name} <${values.email}>\n\n${values.message}`;
    setDraft(
      `mailto:${email}?subject=Portfolio%20enquiry&body=${encodeURIComponent(body.toWellFormed())}`,
    );
  }

  return (
    <ContentPanel>
      <HolographicTitle>CONTACT</HolographicTitle>
      <div className="contact-grid">
        <div>
          <p>
            Let's connect and explore opportunities in the digital universe
            together.
          </p>
          <ul className="contact-links">
            <li>
              <a href={`mailto:${email}`}>{email}</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/melusi-sibanda-1a7288191">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/MelzaSibanda">GitHub</a>
            </li>
            <li>South Africa</li>
            <li>
              <a href="/assets/Melusi_Sibanda_CV.pdf?v=8a209a8ea015" download>
                Download CV (PDF)
              </a>
            </li>
          </ul>
        </div>
        <div>
          <PanelSubheading className="text-lg font-bold">
            Send a message
          </PanelSubheading>
          <form
            action={`mailto:${email}`}
            method="post"
            encType="text/plain"
            noValidate
            onSubmit={prepareMessage}
            onChange={() => setDraft('')}
          >
            {fields.map(({ name, label, max }) => {
              const attributes = {
                id: `contact-${name}`,
                name,
                maxLength: max,
                required: true,
                'aria-invalid': errors[name] ? true : undefined,
                'aria-describedby': errors[name]
                  ? `contact-${name}-error`
                  : undefined,
              };
              return (
                <div className="contact-field" key={name}>
                  <label htmlFor={attributes.id}>{label}</label>
                  {name === 'message' ? (
                    <textarea {...attributes} rows={5} />
                  ) : (
                    <input
                      {...attributes}
                      type={name === 'email' ? 'email' : 'text'}
                      autoComplete={name}
                    />
                  )}
                  {errors[name] && (
                    <p id={`contact-${name}-error`} role="alert">
                      {errors[name]}
                    </p>
                  )}
                </div>
              );
            })}
            <div hidden>
              <label>
                Website
                <input name="website" autoComplete="off" />
              </label>
            </div>
            <button className="portfolio-button" type="submit">
              Prepare email
            </button>
            <div aria-live="polite">
              {draft && (
                <a className="portfolio-button" href={draft}>
                  Open email draft
                </a>
              )}
            </div>
          </form>
        </div>
      </div>
    </ContentPanel>
  );
}
