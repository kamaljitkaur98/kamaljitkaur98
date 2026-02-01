import styles from './project.module.css';
import { Icon } from '@iconify/react';

export default function Project() {
  const projects = require('./projects.json');

  return (
    <div className={`container ${styles.projectcontainer}`} id="projects">
      <h2 className={styles.projectheading}>What I've Built</h2>
      <div className={styles.grid}>
        {Object.keys(projects).map((item) => {
          const p = projects[item];
          return (
            <article key={item} className={styles.card}>
              <div className={styles.cardImageWrap}>
                <img
                  className={styles.cardImage}
                  src={p.image}
                  alt={p.title}
                />
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.projectTitle}>{p.title}</h3>
                <p className={styles.tagline}>{p.tagline}</p>
                <div className={styles.techRow}>
                  {Array.from(p.technologies).map((icon, index) => (
                    <div key={index} className={styles.iconCircle}>
                      <Icon
                        icon={icon}
                        style={{
                          color: 'var(--main-theme-color)',
                          width: '24px',
                          height: '24px',
                        }}
                      />
                    </div>
                  ))}
                </div>
                <div className={styles.cardLinks}>
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.linkButton}
                      aria-label="View code on GitHub"
                    >
                      <Icon icon="simple-icons:github" />
                      <span>Code</span>
                    </a>
                  )}
                  {p.url && (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.linkButton}
                      aria-label="View live project"
                    >
                      <Icon icon="mdi:web" />
                      <span>Live</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
