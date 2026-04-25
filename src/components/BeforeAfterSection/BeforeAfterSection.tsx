import Image from "next/image";
import styles from "./BeforeAfterSection.module.scss";

type Step = {
  id: number;
  text: string;
  isActive?: boolean;
};

const steps: Step[] = [
  { id: 1, text: "Get your expert facial analysis" },
  { id: 2, text: "Visualise your best looking self", isActive: true },
  { id: 3, text: "Get your personalized glow-up protocol" },
  { id: 4, text: "Track your progress and see dramatic results" },
];

export function BeforeAfterSection() {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <p className={styles.eyebrow}>PERSONALISED ANALYSIS</p>
        <h1 className={styles.title}>
          Get your personalised <span className={styles.titleAccent}>Qoves plan</span>
        </h1>
        <p className={styles.subtitle}>
          Understand your facial features and start your glow-up today with a
          proven action plan, no plastic surgery needed.
        </p>

        <div className={styles.hero}>
          <div className={styles.portraitCard}>
            <Image
              src="/images/before.png"
              alt="Before portrait"
              width={446}
              height={498}
              className={styles.portraitImage}
              priority
            />
          </div>

          <div className={styles.connector} aria-hidden="true">
          <div className={styles.connectorBoxTop} />
          <div className={styles.connectorBoxBottom} />
          </div>

          <div className={styles.portraitCard}>
            <Image
              src="/images/after.png"
              alt="After portrait"
              width={443}
              height={503}
              className={styles.portraitImage}
              priority
            />
          </div>

          <svg
            className={styles.heroFrame}
            viewBox="-1 -1 1002 522"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient
                id="hero-runner-gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="rgba(199, 217, 225, 0.25)" />
                <stop offset="55%" stopColor="rgba(199, 217, 225, 0.75)" />
                <stop offset="100%" stopColor="rgba(199, 217, 225, 1)" />
              </linearGradient>
            </defs>
            <path
              id="hero-frame-path"
              className={styles.heroFrameBase}
              d="M 18 0
                 H 352
                 A 18 18 0 0 1 370 18
                 V 217
                 A 18 18 0 0 0 388 235
                 H 612
                 A 18 18 0 0 0 630 217
                 V 18
                 A 18 18 0 0 1 648 0
                 H 982
                 A 18 18 0 0 1 1000 18
                 V 502
                 A 18 18 0 0 1 982 520
                 H 648
                 A 18 18 0 0 1 630 502
                 V 303
                 A 18 18 0 0 0 612 285
                 H 388
                 A 18 18 0 0 0 370 303
                 V 502
                 A 18 18 0 0 1 352 520
                 H 18
                 A 18 18 0 0 1 0 502
                 V 18
                 A 18 18 0 0 1 18 0
                 Z"
            />
            <rect
              className={styles.heroFrameHead}
              x={-14}
              y={-3}
              width={28}
              height={6}
              rx={3}
              fill="url(#hero-runner-gradient)"
            >
              <animateMotion dur="10s" repeatCount="indefinite" rotate="auto">
                <mpath href="#hero-frame-path" />
              </animateMotion>
            </rect>
          </svg>
        </div>

        <div className={styles.steps}>
          {steps.map((step) => (
            <div
              key={step.id}
              className={`${styles.stepCard} ${
                step.isActive ? styles.stepCardActive : ""
              }`}
            >
              <div className={styles.stepDot}>{step.id}</div>
              <div className={styles.stepText}>{step.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

