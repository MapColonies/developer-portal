import React, {FormEvent, useEffect, useState} from 'react';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import {useLocation} from '@docusaurus/router';
import Layout from '@theme/Layout';

import {useTelemetry} from '@site/src/components/Telemetry/telemetry';

import styles from './contact.module.css';

const TIERS = ['Basic', 'Pro', 'Enterprise'];
const DOMAINS = ['Raster', 'Vector', '3D', 'DEM'];
const VOLUMES = ['Under 1M', '1M – 10M', '10M – 100M', 'Over 100M', 'Not sure yet'];
const COMPANY_SIZES = ['1 – 10', '11 – 50', '51 – 200', '201 – 1,000', '1,000+'];
const CONTACT_METHODS = ['Email', 'Phone call', 'WhatsApp'];
const CONTACT_TIMES = ['Morning (08:00 – 12:00)', 'Afternoon (12:00 – 17:00)', 'Evening (17:00 – 20:00)', 'Any time'];

const nextSteps = [
  'A solutions engineer reviews your request within one business day.',
  'We set up a 30-minute call to understand your traffic and data needs.',
  'You get a tailored quote and a trial key with your tier limits.',
];

export default function Contact(): JSX.Element {
  const track = useTelemetry();
  const params = new URLSearchParams(useLocation().search);
  const requestedTier = TIERS.find((t) => t === params.get('tier')) ?? 'Pro';
  const billing = params.get('billing') === 'annual' ? 'annual' : 'monthly';
  const [sentTo, setSentTo] = useState<string | null>(null);

  useEffect(() => {
    track('pricing.contact_view', {'pricing.tier': requestedTier, 'pricing.billing': billing});
    // Count one view per page load, not per re-render.
  }, []);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const field = (name: string) => String(data.get(name) ?? '').trim();
    track('pricing.contact_submit', {
      'contact.name': field('name'),
      'contact.email': field('email'),
      'contact.phone': field('phone'),
      'contact.company': field('company'),
      'contact.job_title': field('jobTitle'),
      'contact.company_size': field('companySize'),
      'contact.method': field('contactMethod'),
      'contact.best_time': field('contactTime'),
      'pricing.tier': field('tier'),
      'pricing.billing': field('billing'),
      'pricing.domains': data.getAll('domains').join(','),
      'pricing.monthly_volume': field('volume'),
      'contact.message': field('message'),
    });
    setSentTo(field('name').split(' ')[0]);
  }

  return (
    <Layout title="Talk to sales" description="Get in touch about a MapColonies plan">
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <main className="container">
        <div className={styles.layout}>
          <section>
            <Link to="/pricing" className={styles.back}>
              ← Back to pricing
            </Link>
            <h1 className={styles.title}>Let's get you on {requestedTier}.</h1>
            <p className={styles.subtitle}>
              Tell us a bit about your team and traffic. We'll come back with a plan that fits, usually within a day.
            </p>
            <h2 className={styles.stepsTitle}>What happens next</h2>
            <ol className={styles.steps}>
              {nextSteps.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>
          </section>

          <section className={styles.card}>
            {sentTo !== null ? (
              <div className={styles.success} role="status">
                <h2>Thanks{sentTo ? `, ${sentTo}` : ''}! 🎉</h2>
                <p>Your request is in. Someone from our team will reach out within one business day.</p>
                <Link to="/" className="button button--primary">
                  Back to the portal
                </Link>
              </div>
            ) : (
              <form onSubmit={onSubmit} className={styles.form}>
                <div className={styles.row}>
                  <label>
                    Full name *
                    <input name="name" required autoComplete="name" />
                  </label>
                  <label>
                    Job title
                    <input name="jobTitle" autoComplete="organization-title" />
                  </label>
                </div>
                <div className={styles.row}>
                  <label>
                    Work email *
                    <input name="email" type="email" required autoComplete="email" />
                  </label>
                  <label>
                    Phone number *
                    <input name="phone" type="tel" required autoComplete="tel" />
                  </label>
                </div>
                <div className={styles.row}>
                  <label>
                    Company *
                    <input name="company" required autoComplete="organization" />
                  </label>
                  <label>
                    Company size
                    <select name="companySize" defaultValue="">
                      <option value="" disabled>
                        Select…
                      </option>
                      {COMPANY_SIZES.map((s) => (
                        <option key={s}>{s}</option>
                      ))}
                    </select>
                  </label>
                </div>
                <div className={styles.row}>
                  <label>
                    Plan *
                    <select name="tier" defaultValue={requestedTier} required>
                      {TIERS.map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </label>
                  <label>
                    Billing
                    <select name="billing" defaultValue={billing}>
                      <option value="monthly">Monthly</option>
                      <option value="annual">Annual (save 20%)</option>
                    </select>
                  </label>
                </div>
                <fieldset className={styles.domains}>
                  <legend>Domains you need</legend>
                  {DOMAINS.map((d) => (
                    <label key={d} className={styles.check}>
                      <input type="checkbox" name="domains" value={d} /> {d}
                    </label>
                  ))}
                </fieldset>
                <label>
                  Expected requests per month
                  <select name="volume" defaultValue="">
                    <option value="" disabled>
                      Select…
                    </option>
                    {VOLUMES.map((v) => (
                      <option key={v}>{v}</option>
                    ))}
                  </select>
                </label>
                <div className={styles.row}>
                  <label>
                    How should we reach you? *
                    <select name="contactMethod" defaultValue="Email" required>
                      {CONTACT_METHODS.map((m) => (
                        <option key={m}>{m}</option>
                      ))}
                    </select>
                  </label>
                  <label>
                    Best time to reach you
                    <select name="contactTime" defaultValue="Any time">
                      {CONTACT_TIMES.map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </label>
                </div>
                <label>
                  Anything else we should know?
                  <textarea name="message" rows={4} />
                </label>
                <button type="submit" className="button button--primary button--lg button--block">
                  Request a call
                </button>
              </form>
            )}
          </section>
        </div>
      </main>
    </Layout>
  );
}
