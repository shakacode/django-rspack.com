import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

import styles from './examples.module.css';

const resources = [
  {
    title: 'shakacode/django-rspack',
    description:
      'Main django-rspack repository with source code, changelog, and issue tracking.',
    href: 'https://github.com/shakacode/django-rspack',
  },
  {
    title: 'Getting Started',
    description:
      'Install the package, scaffold configuration, and get your first Rspack entrypoint running in Django.',
    href: '/docs/getting-started',
  },
  {
    title: 'Configuration Guide',
    description:
      'Reference the RSPACK settings, YAML config, environment variables, and runtime helpers.',
    href: '/docs/configuration',
  },
  {
    title: 'Deployment Guide',
    description:
      'Prepare compiled assets, collect static files, and move from local development to production deploys.',
    href: '/docs/deployment',
  },
];

export default function ExamplesPage(): ReactNode {
  return (
    <Layout title="Resources" description="django-rspack repositories, guides, and reference material">
      <main className={styles.main}>
        <section className="container">
          <h1>Resources</h1>
          <p>
            Use these references when setting up, integrating, and operating django-rspack in
            Django applications.
          </p>
          <div className={styles.grid}>
            {resources.map((resource) => (
              <article className={styles.card} key={resource.title}>
                <h2>{resource.title}</h2>
                <p>{resource.description}</p>
                <p>
                  <Link to={resource.href}>Open resource</Link>
                </p>
              </article>
            ))}
          </div>
          <aside className={styles.conversionBanner}>
            <div>
              <h2>Need help applying this in production?</h2>
              <p>
                Book a complimentary 30-minute assessment with ShakaCode to review your Django
                asset pipeline, deployment flow, or react-on-django integration plan.
              </p>
            </div>
            <div className={styles.conversionActions}>
              <Link
                className="button button--primary button--lg"
                href="https://meetings.hubspot.com/justingordon/30-minute-consultation">
                Book assessment
              </Link>
              <Link
                className="button button--secondary button--lg"
                href="https://www.shakacode.com/contact/">
                Contact ShakaCode
              </Link>
            </div>
          </aside>
        </section>
      </main>
    </Layout>
  );
}
