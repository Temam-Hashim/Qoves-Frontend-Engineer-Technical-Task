import Image from "next/image";
import styles from "./CompleteFacialAnalysisSection.module.scss";

export function CompleteFacialAnalysisSection() {
  return (
    <section className={styles.section}>
      <div className={styles.hero}>
        <div className={styles.backdrop} aria-hidden="true" />
        <div className={styles.desktopScene} aria-hidden="true">
          <div className={styles.desktopBgLeftWrap}>
            <Image
              src="/images/analysis-bg-left.png"
              alt=""
              fill
              sizes="(min-width: 981px) 50vw, 0px"
              className={styles.desktopBgLeft}
              priority
              quality={100}
              unoptimized
            />
          </div>
          <div className={styles.desktopBgRightWrap}>
            <Image
              src="/images/analysis-bg-right.png"
              alt=""
              fill
              sizes="(min-width: 981px) 50vw, 0px"
              className={styles.desktopBgRight}
              priority
              quality={100}
              unoptimized
            />
          </div>

          <div className={styles.desktopPanelsLayer}>
            <Image
              src="/images/analysis-panels-strip-alpha.png"
              alt=""
              width={1847}
              height={309}
              sizes="(min-width: 981px) 1200px, 0px"
              className={styles.desktopPanelsStripLeft}
              priority
              quality={100}
              unoptimized
            />
            <Image
              src="/images/analysis-panels-strip-alpha.png"
              alt=""
              width={1847}
              height={309}
              sizes="(min-width: 981px) 1200px, 0px"
              className={styles.desktopPanelsStripRight}
              priority
              quality={100}
              unoptimized
            />
            <Image
              src="/images/analysis-dash-strip-alpha.png"
              alt=""
              width={1847}
              height={309}
              sizes="(min-width: 981px) 1200px, 0px"
              className={styles.desktopDashStripLeft}
              priority
              quality={100}
              unoptimized
            />
            <Image
              src="/images/analysis-dash-strip-alpha.png"
              alt=""
              width={1847}
              height={309}
              sizes="(min-width: 981px) 1200px, 0px"
              className={styles.desktopDashStripRight}
              priority
              quality={100}
              unoptimized
            />
          </div>

          <Image
            src="/images/analysis-portrait-cutout.png"
            alt=""
            width={732}
            height={730}
            sizes="(min-width: 981px) 520px, 0px"
            className={styles.desktopPortrait}
            priority
            quality={100}
            unoptimized
          />
        </div>
        <Image
          src="/images/analysis-medium-reference.png"
          alt=""
          width={765}
          height={1024}
          sizes="(max-width: 980px) 100vw, 0px"
          className={styles.tabletImage}
          priority
          quality={100}
          unoptimized
        />
        <Image
          src="/images/analysis-mobile-reference.png"
          alt=""
          width={466}
          height={992}
          sizes="(max-width: 640px) 100vw, 0px"
          className={styles.mobileImage}
          priority
          quality={100}
          unoptimized
        />
        <div className={styles.textMask} aria-hidden="true" />

        <div className={styles.titleBlock}>
          <p className={styles.eyebrow}>PERSONALIZED AESTHETICS</p>
          <h2 className={styles.title}>
            <span className={styles.titlePrimary}>Your complete</span>{" "}
            <span className={styles.titleAccent}>facial</span>{" "}
            <span className={styles.titleAccentBreak}>analysis</span>
          </h2>
          <p className={styles.subtitle}>
            Every face is unique. We assess more than 100 unique facial markers to
            give you a precise understanding of your aesthetics.
          </p>
        </div>
      </div>
      <div className={styles.divider} />
    </section>
  );
}

