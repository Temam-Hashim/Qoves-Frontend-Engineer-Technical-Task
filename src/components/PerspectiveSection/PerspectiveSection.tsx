import Image from "next/image";
import styles from "./PerspectiveSection.module.scss";

const topCards = [
  {
    title: "Lifestyle factors",
    description: "Considers diet, climate, stress, sleep, and habits.",
    imageSrc: "/images/perspective-thumb-lifestyle.png",
    imageAlt: "Lifestyle factors preview",
    width: 390,
    height: 82,
  },
  {
    title: "Cultural beauty standards",
    description: "Adapts to regional and societal ideals.",
    imageSrc: "/images/perspective-thumb-cultural.png",
    imageAlt: "Cultural beauty standards preview",
    width: 120,
    height: 82,
  },
  {
    title: "Genetic factors",
    description:
      "Takes into account genetic factors and how they might impact your facial aesthetics.",
    imageSrc: "/images/perspective-thumb-genetic.png",
    imageAlt: "Genetic factors preview",
    width: 120,
    height: 82,
  },
];

const leftPoints = [
  "First impressions matter",
  "It has a considerable impact on interpersonal interactions",
  "Small improvements can drastically impact quality of life",
];

const rightPoints = [
  "Not chasing unrealistic standards",
  "Not trying to look like someone else",
  "Not seeking perfection",
  "Aiming only for a better version of yourself",
];

export function PerspectiveSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <video
          className={styles.backgroundVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/images/video.mp4" type="video/mp4" />
        </video>
        <div className={styles.globalShade} aria-hidden="true" />
        <div className={styles.eyebrowWrap}>
          <p className={styles.eyebrow}>YOUR QUESTIONS</p>
        </div>

        <div className={styles.upperPanel}>
          <div className={styles.upperShade} aria-hidden="true" />
          <div className={styles.upperGrid}>
            <div className={styles.upperText}>
              <h2 className={styles.upperTitle}>
                Will analyzing my face
                <br />only 
                <span className={styles.upperTitleMuted}>Make me insecure?</span>
              </h2>
              <p className={styles.upperDescription}>
                Most insecurity comes from uncertainty, not knowing if your concerns
                are real or imagined. When you&apos;re guessing about your
                appearance, your mind often makes things seem worse than they are.
              </p>
            </div>

            <div className={styles.topCards}>
              {topCards.map((card) => (
                <article key={card.title} className={styles.topCard}>
                  <div className={styles.topCardThumb}>
                    <Image
                      src={card.imageSrc}
                      alt={card.imageAlt}
                      width={card.width}
                      height={card.height}
                      className={styles.topCardImage}
                      quality={100}
                      unoptimized
                    />
                  </div>
                  <h3 className={styles.topCardTitle}>{card.title}</h3>
                  <p className={styles.topCardDescription}>{card.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.lowerPanel}>
          <div className={styles.lowerShade} aria-hidden="true" />
          <div className={styles.lowerBlur} aria-hidden="true" />

          <div className={styles.lowerGrid}>
            <aside className={styles.sideCard}>
              <h3 className={styles.sideCardTitle}>Consider this...</h3>
              <div className={styles.sideList}>
                {leftPoints.map((point) => (
                  <div key={point} className={styles.sideListItem}>
                    {point}
                  </div>
                ))}
              </div>
            </aside>

            <div className={styles.centerCopy}>
              <h2 className={styles.centerTitle}>
                Is it vain to care
                <br />
                <span className={styles.centerTitleAccent}>
                  about your appearance?
                </span>
              </h2>
              <p className={styles.centerDescription}>
                Many feel guilty about wanting to improve their looks, fearing it
                means they&apos;re insecure. But there&apos;s what research tells us,
                caring about appearance is natural, finances, and education. It&apos;s
                just another form of self-improvement.
              </p>
            </div>

            <aside className={styles.sideCard}>
              <h3 className={styles.sideCardTitle}>
                The key is approaching
                <br />
                it intelligently
              </h3>
              <div className={styles.sideList}>
                {rightPoints.map((point) => (
                  <div key={point} className={styles.sideListItem}>
                    {point}
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
