"use client";

import { useState } from "react";
import styles from "./FrequentlyAskedQuestionsSection.module.scss";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqCategory = {
  title: string;
  items: FaqItem[];
};

const categories: FaqCategory[] = [
  {
    title: "General Questions",
    items: [
      {
        question: "What is Qoves?",
        answer:
          "Qoves is a facial aesthetics analysis platform that helps you understand your features in a more structured, evidence-based way. You receive clear guidance on what is helping, what can improve, and what changes are most realistic for your goals.",
      },
      {
        question: "Who is this for?",
        answer:
          "It is for anyone who wants an honest assessment of their facial aesthetics, whether you are simply curious, planning a glow-up, or trying to make more intentional appearance-related decisions.",
      },
      {
        question: "What exactly will I receive?",
        answer:
          "You receive an aesthetics assessment, observations about your facial balance and features, and a prioritized set of recommendations to help you understand what changes would matter most.",
      },
      {
        question: "How does it work?",
        answer:
          "You submit your photos, your facial structure and proportions are reviewed, and the findings are organized into a clear report with practical explanations and next steps.",
      },
      {
        question: "How long will it take for me to receive my results?",
        answer:
          "Turnaround time depends on the specific service you purchase, but results are typically shared after your submission has been fully reviewed and processed.",
      },
      {
        question: "Is this a one-time report or a continuous service?",
        answer:
          "The main analysis is generally delivered as a one-time report, but it can also act as a baseline for future progress checks or follow-up guidance.",
      },
      {
        question: "How often do I need to submit photos?",
        answer:
          "For the initial report, one complete submission is enough. You would only need to submit again if you want an updated analysis later.",
      },
      {
        question: "What makes Qoves different from beauty apps or filters?",
        answer:
          "Filters simulate a look instantly, while Qoves focuses on real-world aesthetics and realistic improvement. The goal is to understand your actual features rather than create a temporary edited version.",
      },
      {
        question: "Can I really get results without surgery?",
        answer:
          "Yes. Many improvements come from styling, grooming, skincare, body composition, and better aesthetic decision-making. Surgical options may be mentioned when relevant, but they are not the only route.",
      },
    ],
  },
  {
    title: "About the Analysis",
    items: [
      {
        question: "What does the analysis focus on?",
        answer:
          "The analysis focuses on harmony, proportions, facial balance, and the specific features that influence your overall appearance most strongly.",
      },
      {
        question: "Is the analysis personalized?",
        answer:
          "Yes. The report is built around your face and your goals rather than generic beauty advice.",
      },
    ],
  },
  {
    title: "About the Protocol",
    items: [
      {
        question: "What is included in the protocol?",
        answer:
          "The protocol outlines the most realistic actions to improve your appearance, including which changes are highest priority and why they matter.",
      },
      {
        question: "Is the protocol practical?",
        answer:
          "Yes. Recommendations are intended to be actionable, understandable, and realistic for different budgets and timelines.",
      },
    ],
  },
  {
    title: "Experience & Use",
    items: [
      {
        question: "Do I need prior knowledge?",
        answer:
          "No. The report is written so you can understand the reasoning behind each recommendation even if you are new to aesthetics terminology.",
      },
      {
        question: "Can I revisit my report later?",
        answer:
          "Yes. Your report is meant to be a useful reference that you can come back to as you apply changes or compare progress.",
      },
    ],
  },
  {
    title: "Pricing & Subscription",
    items: [
      {
        question: "Is this subscription-based?",
        answer:
          "That depends on the service you choose. Some offerings are one-time purchases, while others may include follow-up support or extended access.",
      },
      {
        question: "Will pricing be visible before purchase?",
        answer:
          "Yes. Pricing should be shown clearly before checkout so you know what is included before you commit.",
      },
    ],
  },
  {
    title: "Privacy & Data",
    items: [
      {
        question: "How are my photos handled?",
        answer:
          "Submitted images are used to complete your analysis and treated as personal data. Privacy and secure handling are considered an important part of the service.",
      },
      {
        question: "Will my data be shared publicly?",
        answer:
          "No. Your photos and report are not intended for public sharing without your permission.",
      },
    ],
  },
  {
    title: "Mindset & Philosophy",
    items: [
      {
        question: "What is the philosophy behind the service?",
        answer:
          "The approach is centered on understanding aesthetics honestly and using that knowledge to make better real-world decisions, not chasing unrealistic perfection.",
      },
      {
        question: "Is the goal to change everything about my face?",
        answer:
          "No. The goal is to identify the highest-value improvements and help you work with your natural features more effectively.",
      },
    ],
  },
  {
    title: "Practical Concerns",
    items: [
      {
        question: "What if I am unsure how to take my photos?",
        answer:
          "You will usually receive photo guidance so your submission is usable and consistent. Clear photos help make the analysis more accurate.",
      },
      {
        question: "Can I follow the plan gradually?",
        answer:
          "Yes. Most people apply recommendations over time, starting with the highest-impact and most accessible changes first.",
      },
    ],
  },
  {
    title: "About Support",
    items: [
      {
        question: "How can I contact support?",
        answer:
          "If you need help, you can use the site chat box or contact support using the email address provided on the page.",
      },
      {
        question: "Can I ask follow-up questions?",
        answer:
          "Yes. If something in your report is unclear, support can help point you to the right next step or clarification.",
      },
    ],
  },
];

const defaultCategory = categories[0].title;

export function FrequentlyAskedQuestionsSection() {
  const [openCategory, setOpenCategory] = useState<string | null>(defaultCategory);
  const [openQuestionByCategory, setOpenQuestionByCategory] = useState<
    Record<string, string | null>
  >({
    [defaultCategory]: categories[0].items[0].question,
  });

  const handleCategoryToggle = (title: string) => {
    setOpenCategory((current) => (current === title ? null : title));
    setOpenQuestionByCategory((current) => {
      if (current[title]) {
        return current;
      }

      const category = categories.find((item) => item.title === title);
      if (!category) {
        return current;
      }

      return {
        ...current,
        [title]: category.items[0]?.question ?? null,
      };
    });
  };

  const handleQuestionToggle = (categoryTitle: string, question: string) => {
    setOpenQuestionByCategory((current) => ({
      ...current,
      [categoryTitle]: current[categoryTitle] === question ? null : question,
    }));
  };

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <p className={styles.eyebrow}>YOUR QUESTIONS</p>
        <h2 className={styles.title}>
          Frequently asked <span className={styles.titleAccent}>questions</span>
        </h2>
        <p className={styles.subtitle}>
          If you have any further questions, please use the chat box in the bottom
          right or contact us by email at hello@qoves.com
        </p>

        <div className={styles.categoryList}>
          {categories.map((category, index) => {
            const isCategoryOpen = openCategory === category.title;
            const isPrimary = index === 0;
            const openQuestion = openQuestionByCategory[category.title] ?? null;

            return (
              <div
                key={category.title}
                className={`${styles.categoryBlock} ${
                  isCategoryOpen ? styles.categoryBlockOpen : ""
                } ${isPrimary ? styles.categoryBlockPrimary : ""}`}
              >
                <button
                  type="button"
                  className={`${styles.categoryRow} ${
                    isPrimary ? styles.categoryRowPrimary : styles.categoryRowSecondary
                  }`}
                  aria-expanded={isCategoryOpen ? "true" : "false"}
                  aria-controls={`faq-category-${index}`}
                  onClick={() => handleCategoryToggle(category.title)}
                >
                  <span>{category.title}</span>
                  <span
                    className={`${styles.categoryIcon} ${
                      isPrimary ? styles.categoryIconPrimary : styles.categoryIconSecondary
                    }`}
                    aria-hidden="true"
                  >
                    {isCategoryOpen ? "−" : "+"}
                  </span>
                </button>

                {isCategoryOpen ? (
                  <div
                    id={`faq-category-${index}`}
                    className={`${styles.questionList} ${
                      isPrimary ? styles.questionListPrimary : styles.questionListSecondary
                    }`}
                  >
                    {category.items.map((item) => {
                      const isQuestionOpen = openQuestion === item.question;

                      return (
                        <div key={item.question} className={styles.questionRow}>
                          <button
                            type="button"
                            className={`${styles.questionButton} ${
                              isQuestionOpen ? styles.questionButtonOpen : ""
                            } ${
                              isPrimary
                                ? styles.questionButtonPrimary
                                : styles.questionButtonSecondary
                            }`}
                            aria-expanded={isQuestionOpen ? "true" : "false"}
                            onClick={() =>
                              handleQuestionToggle(category.title, item.question)
                            }
                          >
                            <span>{item.question}</span>
                            <span className={styles.rowIcon} aria-hidden="true">
                              {isQuestionOpen ? "−" : "+"}
                            </span>
                          </button>

                          {isQuestionOpen ? (
                            <div
                              className={`${styles.answerPanel} ${
                                isPrimary
                                  ? styles.answerPanelPrimary
                                  : styles.answerPanelSecondary
                              }`}
                            >
                              <p
                                className={`${styles.answerText} ${
                                  isPrimary
                                    ? styles.answerTextPrimary
                                    : styles.answerTextSecondary
                                }`}
                              >
                                {item.answer}
                              </p>
                            </div>
                          ) : null}
                        </div>
                      );
                    })}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
