import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const common = [
  {
    title: '人权原则',
    desc: '我们对用户基本权利的承诺与保障原则',
    to: '/public-policy/intro',
    items: ['言论自由', '隐私保护', '平等尊重'],
  },
  {
    title: '隐私权政策',
    desc: '数据收集、使用、存储与保护的总体框架',
    to: '/public-policy/privacy-rights',
    items: ['信息收集', '用户权利', '删除与注销'],
  },
];

const platforms = [
  {
    title: '官网',
    domain: 'www.caellab.com',
    links: [
      {label: '隐私政策', to: '/www/privacy'},
      {label: '第三方信息共享', to: '/www/third-party-sharing'},
    ],
  },
  {
    title: '小论坛',
    domain: 'f.caellab.com',
    links: [
      {label: '隐私政策', to: '/forum/privacy'},
      {label: '服务协议', to: '/forum/terms'},
      {label: '社区守则', to: '/forum/community-guidelines'},
    ],
  },
  {
    title: '轻之舟百科',
    domain: 'wiki.130.pub',
    links: [
      {label: '隐私政策', to: 'https://wiki.130.pub/wiki/轻之舟百科:隐私政策'},
      {label: '著作权', to: 'https://wiki.130.pub/wiki/轻之舟百科:著作权'},
    ],
  },
  {
    title: 'CaelLabID',
    domain: 'id.caellab.com',
    links: [
      {label: '隐私政策', to: '/id/privacy'},
      {label: '服务协议', to: '/id/terms'},
      {label: '开发者守则', to: '/id/developer-guidelines'},
    ],
  },
];

function CommonCard({title, desc, to, items}) {
  return (
    <div className={styles.card}>
      <Heading as="h3">
        <Link to={to} className={styles.cardTitle}>{title}</Link>
      </Heading>
      <p className={styles.cardDesc}>{desc}</p>
      <div className={styles.tags}>
        {items.map((t) => (
          <span key={t} className={styles.tag}>{t}</span>
        ))}
      </div>
    </div>
  );
}

function PlatformCard({title, domain, links}) {
  return (
    <div className={styles.card}>
      <div className={styles.platformHead}>
        <Heading as="h4" className={styles.platformTitle}>{title}</Heading>
        <span className={styles.domain}>{domain}</span>
      </div>
      <ul className={styles.linkList}>
        {links.map((l) => (
          <li key={l.label}>
            <Link to={l.to} className={styles.link}>{l.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Home() {
  return (
    <Layout
      title="政策中心"
      description="虚舟实验室（CaelLab）各平台隐私政策、服务协议、社区守则与权利保障的统一入口">
      <main className={styles.main}>
        <section className={styles.hero}>
          <Heading as="h1" className={styles.heroTitle}>
            虚舟实验室 <span className={styles.heroAccent}>政策中心</span>
          </Heading>
          <p className={styles.heroSub}>
            隐私政策、服务协议、社区守则与用户权利保障的统一入口——透明、清晰、可检索。
          </p>
        </section>

        <section className={styles.section}>
          <Heading as="h2" className={styles.sectionTitle}>公共策略</Heading>
          <div className={styles.grid}>
            {common.map((c) => <CommonCard key={c.title} {...c} />)}
          </div>
        </section>

        <section className={styles.section}>
          <Heading as="h2" className={styles.sectionTitle}>各平台政策</Heading>
          <div className={styles.grid}>
            {platforms.map((p) => <PlatformCard key={p.title} {...p} />)}
          </div>
        </section>
      </main>
    </Layout>
  );
}
