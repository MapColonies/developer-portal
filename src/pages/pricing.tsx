import React, {useState} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import Layout from '@theme/Layout';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import {usePricingTelemetry} from '@site/src/components/Pricing/telemetry';

import styles from './pricing.module.css';

const ANNUAL_DISCOUNT = 0.2;

type Tier = {
  name: string;
  monthly: number | null;
  tagline: string;
  cta: string;
  features: string[];
  popular?: boolean;
};

const tiers: Tier[] = [
  {
    name: 'Free',
    monthly: 0,
    tagline: 'Kick the tires. No credit card.',
    cta: 'Start for free',
    features: ['All four domains', 'Up to 20 requests/sec', 'Community support'],
  },
  {
    name: 'Basic',
    monthly: 99,
    tagline: 'For your first production app.',
    cta: 'Start building',
    features: ['Everything in Free', 'Up to 200 requests/sec', '99.0% uptime SLA', 'Email support'],
  },
  {
    name: 'Pro',
    monthly: 499,
    tagline: 'Scale without thinking about limits.',
    cta: 'Go Pro',
    features: ['Everything in Basic', 'Up to 2,000 requests/sec', '99.9% uptime SLA', 'Priority support'],
    popular: true,
  },
  {
    name: 'Enterprise',
    monthly: null,
    tagline: 'Custom limits for mission-critical maps.',
    cta: 'Talk to us',
    features: ['Everything in Pro', 'Custom rate limits', '99.99% uptime SLA', 'Dedicated contact'],
  },
];

// Each row holds one value per tier, in the same order as `tiers`.
const domains = [
  {
    id: 'raster',
    label: 'Raster',
    rows: [
      ['Requests per second', '10', '100', '1,000', 'Custom'],
      ['Burst limit (requests)', '20', '200', '2,000', 'Custom'],
      ['Monthly requests', '50K', '5M', '50M', 'Unlimited'],
      ['Max export size', '1 GB', '10 GB', '100 GB', 'Custom'],
    ],
  },
  {
    id: 'vector',
    label: 'Vector',
    rows: [
      ['Requests per second', '20', '200', '2,000', 'Custom'],
      ['Burst limit (requests)', '40', '400', '4,000', 'Custom'],
      ['Monthly requests', '100K', '10M', '100M', 'Unlimited'],
      ['Max export size', '500 MB', '5 GB', '50 GB', 'Custom'],
    ],
  },
  {
    id: '3d',
    label: '3D',
    rows: [
      ['Requests per second', '5', '50', '500', 'Custom'],
      ['Burst limit (requests)', '10', '100', '1,000', 'Custom'],
      ['Monthly requests', '20K', '2M', '20M', 'Unlimited'],
      ['Max export size', '2 GB', '20 GB', '200 GB', 'Custom'],
    ],
  },
  {
    id: 'dem',
    label: 'DEM',
    rows: [
      ['Requests per second', '10', '100', '1,000', 'Custom'],
      ['Burst limit (requests)', '20', '200', '2,000', 'Custom'],
      ['Monthly requests', '50K', '5M', '50M', 'Unlimited'],
      ['Max export size', '1 GB', '10 GB', '100 GB', 'Custom'],
    ],
  },
];

const sharedRows = [
  ['SLA uptime', 'None', '99.0%', '99.9%', '99.99%'],
  ['Support', 'Community', 'Email', 'Priority email', 'Dedicated contact'],
];

const faqs = [
  {
    q: 'Are limits shared across domains?',
    a: 'No. Each domain (Raster, Vector, 3D, DEM) has its own limits, so heavy raster traffic never eats into your vector quota.',
  },
  {
    q: 'What happens if I go over my limit?',
    a: 'Requests above your per-second or burst limit get HTTP 429 and can be retried. Nothing is billed for overage.',
  },
  {
    q: 'Can I change tiers later?',
    a: 'Yes, upgrade or downgrade any time. Changes apply from the next billing cycle.',
  },
];

function price(tier: Tier, annual: boolean) {
  if (tier.monthly === null) return 'Custom';
  const value = annual ? Math.round(tier.monthly * (1 - ANNUAL_DISCOUNT)) : tier.monthly;
  return `$${value}`;
}

function LimitsTable({rows}: {rows: string[][]}) {
  return (
    <div className={styles.tableWrap}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th scope="col">Limit</th>
            {tiers.map((t) => (
              <th scope="col" key={t.name} className={clsx(t.popular && styles.popularCol)}>
                {t.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[...rows, ...sharedRows].map(([metric, ...values]) => (
            <tr key={metric}>
              <th scope="row">{metric}</th>
              {values.map((v, i) => (
                <td key={tiers[i].name} className={clsx(tiers[i].popular && styles.popularCol)}>
                  {v}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function Pricing(): JSX.Element {
  const [annual, setAnnual] = useState(false);
  const track = usePricingTelemetry();
  const billing = annual ? 'annual' : 'monthly';

  return (
    <Layout title="Pricing" description="MapColonies service tiers, prices and limits per domain">
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <header className={styles.hero}>
        <div className="container">
          <span className={styles.eyebrow}>Pricing</span>
          <h1 className={styles.heroTitle}>Maps at any scale. Start free.</h1>
          <p className={styles.heroSubtitle}>
            Raster, Vector, 3D and DEM in one plan. Upgrade when your traffic does.
          </p>

          <div className={styles.toggle} role="group" aria-label="Billing period">
            <button
              type="button"
              className={clsx(styles.toggleOption, !annual && styles.toggleActive)}
              aria-pressed={!annual}
              onClick={() => setAnnual(false)}>
              Monthly
            </button>
            <button
              type="button"
              className={clsx(styles.toggleOption, annual && styles.toggleActive)}
              aria-pressed={annual}
              onClick={() => setAnnual(true)}>
              Annual <span className={styles.save}>Save {ANNUAL_DISCOUNT * 100}%</span>
            </button>
          </div>
        </div>
      </header>

      <main className="container">
        <div className={styles.cards}>
          {tiers.map((t) => (
            <div key={t.name} className={clsx(styles.card, t.popular && styles.popular)}>
              {t.popular && <span className={styles.badge}>Most popular</span>}
              <h2 className={styles.tierName}>{t.name}</h2>
              <p className={styles.tagline}>{t.tagline}</p>
              <p className={styles.price}>
                {price(t, annual)}
                {t.monthly !== null && <span className={styles.period}>/month</span>}
              </p>
              <p className={styles.billing}>
                {t.monthly === null || t.monthly === 0 ? ' ' : annual ? 'billed annually' : 'billed monthly'}
              </p>
              <Link
                to={t.monthly === 0 ? '/' : `/pricing/contact?tier=${t.name}&billing=${billing}`}
                onClick={() => track('pricing.cta_click', {'pricing.tier': t.name, 'pricing.cta': t.cta, 'pricing.billing': billing})}
                className={clsx('button button--block', t.popular ? 'button--primary' : 'button--outline button--primary')}>
                {t.cta}
              </Link>
              <ul className={styles.features}>
                {t.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Compare limits per domain</h2>
          <Tabs groupId="pricing-domain">
            {domains.map((d) => (
              <TabItem key={d.id} value={d.id} label={d.label}>
                <LimitsTable rows={d.rows} />
              </TabItem>
            ))}
          </Tabs>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Questions</h2>
          {faqs.map((f) => (
            <details key={f.q} className={styles.faq}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </section>
      </main>
    </Layout>
  );
}
