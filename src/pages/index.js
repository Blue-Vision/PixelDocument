import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div style={{ position:'absolute', 
        display:'flex', zIndex:0,  
        width:'100%', height:'100%', 
        top: '0', left: '0', 
        backgroundImage:`url(${require('@site/static/images/common/m2.jpg').default})`, 
        backgroundPosition:'50% 50%', 
        backgroundSize:'cover' }} />
      <div className="container" style={{ position:'relative', zIndex:1 }}>
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Tài liệu hướng dẫn - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
