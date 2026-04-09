import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

import styles from './index.module.css';

const quickStartSteps = [
  {
    title: 'Install Package',
    command: 'pip install django-rspack',
    docsPath: '/docs/getting-started',
  },
  {
    title: 'Scaffold Files',
    command: 'python manage.py rspack_install',
    docsPath: '/docs/getting-started',
  },
  {
    title: 'Run Dev Server',
    command: 'python manage.py rspack_dev_server',
    docsPath: '/docs/configuration',
  },
];

const highlights = [
  {
    quote:
      'Documentation is synced directly from the django-rspack repository so the published site stays aligned with the package source.',
    author: 'Docs from source',
    role: 'Always aligned with current releases',
  },
  {
    quote:
      'The Python package stays intentionally thin and reuses the shared Shakapacker npm tooling for Rspack config, manifests, and the dev server.',
    author: 'Shared tooling',
    role: 'One JavaScript pipeline across Rails and Django',
  },
];

const rspackBenefits = [
  {
    title: 'Manifest-backed asset resolution',
    description:
      'Resolve bundles and assets from Django templates or Python code using the same manifest-driven workflow in development, test, and production.',
  },
  {
    title: 'Django-native commands and middleware',
    description:
      'Use rspack_install, rspack_dev_server, rspack_compile, and the dev-server proxy middleware without inventing a custom integration layer.',
  },
  {
    title: 'Shared Shakapacker npm compatibility',
    description:
      'Keep the JavaScript side aligned with the existing Shakapacker ecosystem while exposing a Python API that higher-level Django packages can build on.',
  },
];

function HeroSection() {
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className="container">
        <p className={styles.kicker}>Rspack for Django</p>
        <h1 className={styles.title}>django-rspack</h1>
        <p className={styles.subtitle}>
          Official docs for installing, configuring, and deploying django-rspack in Django
          applications that want a fast, shared Rspack workflow.
        </p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/docs">
            Browse Docs
          </Link>
          <Link className="button button--secondary button--lg" to="/examples">
            Resources
          </Link>
          <Link className="button button--secondary button--lg" to="/pro">
            Support
          </Link>
        </div>
      </div>
    </header>
  );
}

function QuickStartSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2>Quick Start</h2>
        <div className={styles.stepGrid}>
          {quickStartSteps.map((step) => (
            <article className={styles.stepCard} key={step.title}>
              <h3>{step.title}</h3>
              <code className={styles.inlineCode}>{step.command}</code>
              <p>
                <Link to={step.docsPath}>Open guide</Link>
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HighlightsSection() {
  return (
    <section className={styles.sectionAlt}>
      <div className="container">
        <h2>Why Teams Use It</h2>
        <div className={styles.quoteGrid}>
          {highlights.map((entry) => (
            <blockquote className={styles.quoteCard} key={entry.author}>
              <p>{entry.quote}</p>
              <footer>
                <strong>{entry.author}</strong>
                <span>{entry.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function RspackSection() {
  return (
    <section className={styles.sectionAlt}>
      <div className="container">
        <div className={styles.rspackHeader}>
          <a href="https://rspack.rs/" target="_blank" rel="noopener noreferrer">
            <img className={styles.rspackLogo} src="/img/rspack-logo.svg" alt="Rspack logo" />
          </a>
          <div>
            <p className={styles.rspackKicker}>django-rspack + Rspack</p>
            <h2>Django integration without inventing a second bundler stack</h2>
          </div>
        </div>
        <p className={styles.rspackIntro}>
          django-rspack builds on{' '}
          <a href="https://rspack.rs/" target="_blank" rel="noopener noreferrer">
            Rspack
          </a>{' '}
          and the shared Shakapacker npm package so Django teams can use a modern Rust-powered
          bundler without writing and maintaining a parallel asset pipeline.
        </p>
        <div className={styles.benefitGrid}>
          {rspackBenefits.map((benefit) => (
            <article className={styles.benefitCard} key={benefit.title}>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </article>
          ))}
        </div>
        <div className={styles.testimonialCard}>
          <div className={styles.testimonialHeader}>
            <span className={styles.testimonialBrand}>Included surface area</span>
            <span className={styles.testimonialLabel}>Alpha scope</span>
          </div>
          <blockquote className={styles.testimonialQuote}>
            <p>
              Template tags, Python helpers, management commands, manifest resolution, and a
              development proxy layer designed to feel native inside Django projects.
            </p>
          </blockquote>
          <div className={styles.testimonialStats}>
            <div className={styles.testimonialStat}>
              <span className={styles.statValue}>3</span>
              <span className={styles.statLabel}>core docs guides</span>
            </div>
            <div className={styles.testimonialStat}>
              <span className={styles.statValue}>1</span>
              <span className={styles.statLabel}>shared npm pipeline</span>
            </div>
            <div className={styles.testimonialStat}>
              <span className={styles.statValue}>0</span>
              <span className={styles.statLabel}>custom bundler forks</span>
            </div>
          </div>
          <p className={styles.testimonialAttribution}>
            Designed for teams that want Rspack in Django without drifting away from the existing
            ShakaCode ecosystem.
          </p>
        </div>
      </div>
    </section>
  );
}

function ArchitectureSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2>Docs Architecture</h2>
        <p>
          Canonical markdown stays in <code>django-rspack/docs</code>. This site syncs that content
          at build time, so package docs stay co-located with the code while deployment remains
          independent.
        </p>
      </div>
    </section>
  );
}

function ExpertHelpSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.expertHelpBanner}>
          <div className={styles.expertHelpContent}>
            <p className={styles.expertHelpKicker}>Expert Help</p>
            <h2>Get direct guidance from the team building Django and Rspack integrations</h2>
            <p>
              Need help wiring django-rspack into an existing Django stack or pairing it with
              higher-level libraries like react-on-django? Book a complimentary 30-minute
              assessment with ShakaCode.
            </p>
          </div>
          <div className={styles.expertHelpActions}>
            <Link
              className="button button--primary button--lg"
              href="https://meetings.hubspot.com/justingordon/30-minute-consultation">
              Book a free assessment
            </Link>
            <Link
              className="button button--secondary button--lg"
              href="https://www.shakacode.com/contact/">
              Contact ShakaCode
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="django-rspack"
      description="Official django-rspack documentation, guides, and support resources.">
      <HeroSection />
      <main>
        <QuickStartSection />
        <RspackSection />
        <HighlightsSection />
        <ArchitectureSection />
        <ExpertHelpSection />
      </main>
    </Layout>
  );
}
