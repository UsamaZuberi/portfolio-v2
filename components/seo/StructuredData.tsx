import React from 'react';
import { portfolioData } from '@/data';

const StructuredData: React.FC = () => {
  const { hero, contact, skills, experience, education, projects } = portfolioData;

  // Person/ProfilePage Schema
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://usamazuberi.vercel.app/#person',
    name: hero.name,
    url: 'https://usamazuberi.vercel.app',
    image: `https://usamazuberi.vercel.app${hero.profileImage}`,
    jobTitle: hero.designation,
    description: hero.summary,
    email: contact.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Karachi',
      addressCountry: 'Pakistan',
    },
    alumniOf: education.map((edu) => ({
      '@type': 'EducationalOrganization',
      name: edu.institutionName,
      address: {
        '@type': 'PostalAddress',
        addressLocality: edu.location,
      },
    })),
    knowsAbout: [...hero.technicalSkills, ...skills.categories.flatMap((cat) => cat.skills)],
    sameAs: contact.socialLinks.map((link) => link.url),
    worksFor: experience
      .filter((exp) => exp.currentlyWorking)
      .map((exp) => ({
        '@type': 'Organization',
        name: exp.company,
        address: {
          '@type': 'PostalAddress',
          addressLocality: exp.location,
        },
      })),
  };

  // Website Schema
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://usamazuberi.vercel.app/#website',
    url: 'https://usamazuberi.vercel.app',
    name: 'Muhammad Usama Zuberi Portfolio',
    description:
      'Professional portfolio showcasing web development projects, skills, and experience in React, Next.js, and Web3 technologies.',
    publisher: {
      '@id': 'https://usamazuberi.vercel.app/#person',
    },
    inLanguage: 'en-US',
  };

  // ProfilePage Schema
  const profilePageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': 'https://usamazuberi.vercel.app/#webpage',
    url: 'https://usamazuberi.vercel.app',
    name: 'Muhammad Usama Zuberi - Senior Front-end Web Developer',
    description: hero.summary,
    image: `https://usamazuberi.vercel.app${hero.profileImage}`,
    inLanguage: 'en-US',
    isPartOf: {
      '@id': 'https://usamazuberi.vercel.app/#website',
    },
    about: {
      '@id': 'https://usamazuberi.vercel.app/#person',
    },
    mainEntity: {
      '@id': 'https://usamazuberi.vercel.app/#person',
    },
  };

  // ItemList Schema for Projects
  const portfolioSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Portfolio Projects',
    description: 'Featured web development projects and applications',
    itemListElement: projects.slice(0, 10).map((project, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'CreativeWork',
        name: project.title,
        description: project.description,
        url: project.link,
        author: {
          '@id': 'https://usamazuberi.vercel.app/#person',
        },
        keywords: project.usedSkills.join(', '),
      },
    })),
  };

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://usamazuberi.vercel.app',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Portfolio',
        item: 'https://usamazuberi.vercel.app/#portfolio',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Contact',
        item: 'https://usamazuberi.vercel.app/#contact',
      },
    ],
  };

  const schemas = [
    personSchema,
    websiteSchema,
    profilePageSchema,
    portfolioSchema,
    breadcrumbSchema,
  ];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
};

export default StructuredData;
