
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  ArrowUpRight,
  Heart,
  Flower2,
  Baby,
  Dna,
  CalendarDays,
  ShieldCheck,
  Activity,
  BookOpen,
  HeartPulse,
  Sparkles,
} from "lucide-react";

import SEO from "../components/SEO";
import { getWhatsAppLink } from "../components/WhatsAppButton";

import "./ReproductiveHealth.css";

/* Dedicated images for the Reproductive Health page.
   These are different from the Women's Health page collection. */

const images = {
  hero: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=2000&q=85",
  introduction:
    "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?auto=format&fit=crop&w=1100&q=85",
  cycle:
    "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=900&q=85",
  fertility:
    "https://images.unsplash.com/photo-1491013516836-7db643ee125a?auto=format&fit=crop&w=900&q=85",
  pregnancy:
    "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=900&q=85",
  hormones:
    "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=900&q=85",
  prevention:
    "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=900&q=85",
  feature:
    "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1200&q=85",
};

const content = {
  en: {
    eyebrow: "REPRODUCTIVE HEALTH EDUCATION",
    heroTitle: "Understand your body.",
    heroAccent: "Know your choices.",
    heroText:
      "Explore reproductive health information designed to encourage awareness, informed conversations and a better understanding of your reproductive wellbeing.",
    heroButton: "Explore the topics",
    heroSecondary: "Make a general enquiry",

    introEyebrow: "KNOWLEDGE & AWARENESS",
    introTitle: "Your reproductive health is part of your overall wellbeing.",
    introText:
      "Reproductive health involves more than one aspect of the body. It includes the reproductive system, menstrual health, fertility awareness, hormonal changes and the different experiences women may have throughout life.",
    introTextTwo:
      "Understanding these subjects can help you ask informed questions, recognise when something changes and know when to seek advice from an appropriately qualified healthcare professional.",
    introButton: "Explore patient resources",

    topicsEyebrow: "UNDERSTANDING REPRODUCTIVE HEALTH",
    topicsTitle: "Important topics. Clearer understanding.",
    topicsText:
      "Explore general educational information across different areas of reproductive health.",

    topics: [
      {
        number: "01",
        title: "Menstrual & Cycle Awareness",
        description:
          "Understand the menstrual cycle, common patterns, cycle changes and when to seek professional advice.",
        image: images.cycle,
        alt: "A peaceful personal wellbeing setting",
        icon: CalendarDays,
      },
      {
        number: "02",
        title: "Fertility Awareness",
        description:
          "Learn general information about fertility, reproductive timing and factors that may influence reproductive health.",
        image: images.fertility,
        alt: "A woman enjoying a quiet moment",
        icon: Flower2,
      },
      {
        number: "03",
        title: "Pregnancy Education",
        description:
          "Explore general pregnancy information, wellbeing awareness and the importance of appropriate antenatal guidance.",
        image: images.pregnancy,
        alt: "Family spending a meaningful moment together",
        icon: Baby,
      },
      {
        number: "04",
        title: "Hormonal Health",
        description:
          "Discover how hormones contribute to reproductive health and why changes may differ between individuals.",
        image: images.hormones,
        alt: "Woman in a natural outdoor setting",
        icon: Dna,
      },
      {
        number: "05",
        title: "Reproductive Health Awareness",
        description:
          "Understand the importance of health awareness, prevention and conversations with qualified professionals.",
        image: images.prevention,
        alt: "Woman reflecting on personal wellbeing",
        icon: ShieldCheck,
      },
      {
        number: "06",
        title: "Reproductive Life Stages",
        description:
          "Explore how reproductive health and information needs can change at different stages of life.",
        image: images.introduction,
        alt: "Woman enjoying a peaceful lifestyle moment",
        icon: HeartPulse,
      },
    ],

    featureEyebrow: "INFORMED HEALTH DECISIONS",
    featureTitle: "Good information helps you ask better questions.",
    featureText:
      "Reproductive health can involve personal questions and experiences. Reliable educational information can help you prepare for conversations with healthcare professionals and better understand the subjects that matter to you.",
    featurePoints: [
      "Learn the basics of reproductive anatomy and health.",
      "Understand common menstrual and hormonal changes.",
      "Know when a concern deserves professional attention.",
      "Seek information from reliable sources and qualified professionals.",
    ],
    featureButton: "Browse health resources",

    noteEyebrow: "A NOTE ON YOUR WELLBEING",
    noteTitle: "Every woman's experience is different.",
    noteText:
      "Reproductive health is personal. Symptoms, cycles, experiences and health needs can vary from one individual to another. Avoid comparing your experience with someone else's or relying on online information to make a diagnosis.",

    ctaEyebrow: "LET'S KEEP THE CONVERSATION INFORMED",
    ctaTitle: "Looking for more information?",
    ctaText:
      "You can contact us with general questions about the educational information available on this website. Please avoid sharing private medical records, intimate photographs or sensitive health details through WhatsApp.",
    ctaButton: "Make a general enquiry",
    ctaSecondary: "Explore women's health",

    disclaimerTitle: "Important medical information",
    disclaimer:
      "This page provides general educational information only. It does not provide medical advice, diagnosis or treatment and should not replace consultation with a qualified healthcare professional. Any healthcare services, where offered, are subject to applicable local laws and professional authorisation. For urgent medical concerns, contact your local emergency service or seek urgent medical care.",
  },

  ar: {
    eyebrow: "التثقيف حول الصحة الإنجابية",
    heroTitle: "افهمي جسمكِ.",
    heroAccent: "وتعرّفي على خياراتكِ.",
    heroText:
      "استكشفي معلومات حول الصحة الإنجابية تهدف إلى تعزيز الوعي وتشجيع الحوار الصحي وفهم عافيتكِ الإنجابية بصورة أفضل.",
    heroButton: "استكشفي الموضوعات",
    heroSecondary: "إرسال استفسار عام",

    introEyebrow: "المعرفة والوعي",
    introTitle: "صحتكِ الإنجابية جزء أساسي من صحتكِ العامة.",
    introText:
      "تشمل الصحة الإنجابية جوانب متعددة من الجسم، مثل الجهاز التناسلي وصحة الدورة الشهرية والوعي بالخصوبة والتغيرات الهرمونية والتجارب المختلفة التي قد تمر بها المرأة خلال حياتها.",
    introTextTwo:
      "يساعد فهم هذه الموضوعات على طرح أسئلة أكثر وعياً وملاحظة التغيرات ومعرفة الوقت المناسب لطلب المشورة من مختص صحي مؤهل.",
    introButton: "استكشفي موارد المريضات",

    topicsEyebrow: "فهم الصحة الإنجابية",
    topicsTitle: "موضوعات مهمة لفهم أوضح.",
    topicsText:
      "استكشفي معلومات تثقيفية عامة في مجالات مختلفة من الصحة الإنجابية.",

    topics: [
      {
        number: "01",
        title: "الدورة الشهرية والوعي بها",
        description:
          "تعرّفي على الدورة الشهرية وأنماطها الشائعة والتغيرات التي قد تحدث ومتى تطلبين المشورة الطبية.",
        image: images.cycle,
        alt: "أجواء هادئة للاهتمام بالعافية الشخصية",
        icon: CalendarDays,
      },
      {
        number: "02",
        title: "الوعي بالخصوبة",
        description:
          "معلومات عامة عن الخصوبة والتوقيت الإنجابي والعوامل التي قد تؤثر في الصحة الإنجابية.",
        image: images.fertility,
        alt: "امرأة تستمتع بلحظة هادئة",
        icon: Flower2,
      },
      {
        number: "03",
        title: "التثقيف حول الحمل",
        description:
          "استكشفي معلومات عامة عن الحمل والوعي بالعافية وأهمية المتابعة المناسبة خلال الحمل.",
        image: images.pregnancy,
        alt: "عائلة تقضي لحظة مميزة معاً",
        icon: Baby,
      },
      {
        number: "04",
        title: "الصحة الهرمونية",
        description:
          "تعرّفي على دور الهرمونات في الصحة الإنجابية ولماذا تختلف التغيرات من امرأة إلى أخرى.",
        image: images.hormones,
        alt: "امرأة في أجواء طبيعية هادئة",
        icon: Dna,
      },
      {
        number: "05",
        title: "الوعي بالصحة الإنجابية",
        description:
          "افهمي أهمية الوعي الصحي والوقاية والحوار مع المختصين الصحيين المؤهلين.",
        image: images.prevention,
        alt: "امرأة تفكر في عافيتها الشخصية",
        icon: ShieldCheck,
      },
      {
        number: "06",
        title: "مراحل الحياة الإنجابية",
        description:
          "استكشفي كيف يمكن أن تتغير الصحة الإنجابية والاحتياجات المعرفية في مراحل الحياة المختلفة.",
        image: images.introduction,
        alt: "امرأة تستمتع بلحظة هادئة",
        icon: HeartPulse,
      },
    ],

    featureEyebrow: "قرارات صحية مبنية على المعرفة",
    featureTitle: "المعلومات الجيدة تساعدكِ على طرح الأسئلة المناسبة.",
    featureText:
      "قد تتضمن الصحة الإنجابية أسئلة وتجارب شخصية. ويمكن للمعلومات التثقيفية الموثوقة أن تساعدكِ على الاستعداد للحوار مع المختصين الصحيين وفهم الموضوعات المهمة بالنسبة لكِ.",
    featurePoints: [
      "تعرّفي على أساسيات تشريح الجهاز التناسلي وصحته.",
      "افهمي التغيرات الشائعة في الدورة الشهرية والهرمونات.",
      "اعرفي متى تستدعي المخاوف استشارة مختص صحي.",
      "ابحثي عن المعلومات من مصادر موثوقة ومختصين مؤهلين.",
    ],
    featureButton: "استكشفي الموارد الصحية",

    noteEyebrow: "ملاحظة حول عافيتكِ",
    noteTitle: "تجربة كل امرأة مختلفة عن الأخرى.",
    noteText:
      "الصحة الإنجابية موضوع شخصي. فقد تختلف الأعراض والدورات والتجارب والاحتياجات الصحية من امرأة إلى أخرى. تجنبي مقارنة تجربتكِ بتجربة الآخرين أو الاعتماد على المعلومات عبر الإنترنت لتشخيص حالتكِ.",

    ctaEyebrow: "لنجعل الحوار قائماً على المعرفة",
    ctaTitle: "هل تبحثين عن مزيد من المعلومات؟",
    ctaText:
      "يمكنكِ التواصل معنا لطرح أسئلة عامة حول المعلومات التثقيفية المتاحة على هذا الموقع. يرجى تجنب مشاركة السجلات الطبية الخاصة أو الصور الشخصية أو التفاصيل الصحية الحساسة عبر واتساب.",
    ctaButton: "إرسال استفسار عام",
    ctaSecondary: "استكشفي صحة المرأة",

    disclaimerTitle: "معلومات طبية مهمة",
    disclaimer:
      "تُقدَّم هذه الصفحة لأغراض التثقيف الصحي العام فقط، ولا تُعد نصيحة طبية أو تشخيصاً أو علاجاً، ولا تغني عن استشارة مختص صحي مؤهل. وتخضع أي خدمات صحية، عند تقديمها، للقوانين المحلية المعمول بها والتراخيص المهنية اللازمة. في الحالات الطبية العاجلة، يرجى التواصل مع خدمات الطوارئ المحلية أو طلب الرعاية الطبية العاجلة.",
  },
};

function ReproductiveHealth() {
  const { i18n } = useTranslation();
  const isArabic = i18n.language?.startsWith("ar");
  const lang = isArabic ? "ar" : "en";
  const page = content[lang];

  return (
    <div
      className={`swc-reproductive-page ${isArabic ? "rtl" : "ltr"}`}
      dir={isArabic ? "rtl" : "ltr"}
    >
      <SEO
        title={
          isArabic
            ? "الصحة الإنجابية | Sarah's Women's Clinic"
            : "Reproductive Health Education | Sarah's Women's Clinic"
        }
        description={
          isArabic
            ? "استكشفي معلومات تثقيفية عامة حول الدورة الشهرية والخصوبة والحمل والصحة الهرمونية."
            : "Explore reproductive health education covering menstrual awareness, fertility, pregnancy education and hormonal health."
        }
        noindex={true}
      />

      {/* HERO */}
      <section className="swc-rh-hero">
        <div className="swc-rh-hero-image">
          <img src={images.hero} alt="Mother and child sharing a peaceful moment" />
        </div>

        <div className="swc-rh-hero-overlay" />

        <div className="swc-rh-container swc-rh-hero-content">
          <span className="swc-rh-eyebrow swc-rh-eyebrow-light">
            <span />
            {page.eyebrow}
          </span>

          <h1>
            {page.heroTitle}
            <br />
            <em>{page.heroAccent}</em>
          </h1>

          <p>{page.heroText}</p>

          <div className="swc-rh-hero-actions">
            <a href="#rh-topics" className="swc-rh-button swc-rh-button-light">
              {page.heroButton}
              <ArrowUpRight size={18} />
            </a>

            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noreferrer"
              className="swc-rh-text-link"
            >
              {page.heroSecondary}
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>

        <div className="swc-rh-hero-caption">
          <Heart size={15} />
          <span>Knowledge supports informed choices</span>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="swc-rh-intro" id="rh-intro">
        <div className="swc-rh-container swc-rh-intro-grid">
          <div className="swc-rh-intro-copy">
            <span className="swc-rh-eyebrow">{page.introEyebrow}</span>
            <h2>{page.introTitle}</h2>
            <p>{page.introText}</p>
            <p>{page.introTextTwo}</p>

            <Link to="/patient-resources" className="swc-rh-inline-link">
              {page.introButton}
              <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="swc-rh-intro-visual">
            <div className="swc-rh-intro-image">
              <img
                src={images.introduction}
                alt="Woman enjoying a quiet moment"
              />
            </div>

            <div className="swc-rh-intro-label">
              <span>
                <HeartPulse size={22} />
              </span>
              <div>
                <strong>Reproductive wellbeing</strong>
                <small>Understanding matters</small>
              </div>
            </div>

            <div className="swc-rh-intro-frame" />
          </div>
        </div>
      </section>

      {/* TOPICS */}
      <section className="swc-rh-topics" id="rh-topics">
        <div className="swc-rh-container">
          <div className="swc-rh-heading">
            <div>
              <span className="swc-rh-eyebrow">{page.topicsEyebrow}</span>
              <h2>{page.topicsTitle}</h2>
            </div>
            <p>{page.topicsText}</p>
          </div>

          <div className="swc-rh-topic-grid">
            {page.topics.map((topic) => {
              const TopicIcon = topic.icon;

              return (
                <article className="swc-rh-card" key={topic.number}>
                  <Link
                    to="/patient-resources"
                    className="swc-rh-card-image"
                    aria-label={topic.title}
                  >
                    <img
                      src={topic.image}
                      alt={topic.alt}
                      loading="lazy"
                    />
                    <span className="swc-rh-card-number">{topic.number}</span>
                    <span className="swc-rh-card-arrow">
                      <ArrowUpRight size={19} />
                    </span>
                  </Link>

                  <div className="swc-rh-card-content">
                    <span className="swc-rh-card-icon">
                      <TopicIcon size={21} />
                    </span>

                    <h3>{topic.title}</h3>
                    <p>{topic.description}</p>

                    <Link to="/patient-resources" className="swc-rh-card-link">
                      {page.introButton}
                      <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURE */}
      <section className="swc-rh-feature">
        <div className="swc-rh-container swc-rh-feature-grid">
          <div className="swc-rh-feature-visual">
            <img
              src={images.feature}
              alt="A peaceful setting for reflection and wellbeing"
              loading="lazy"
            />
            <div className="swc-rh-feature-badge">
              <Sparkles size={22} />
              <span>Be informed</span>
              <small>Feel empowered</small>
            </div>
          </div>

          <div className="swc-rh-feature-copy">
            <span className="swc-rh-eyebrow swc-rh-eyebrow-light">
              {page.featureEyebrow}
            </span>

            <h2>{page.featureTitle}</h2>
            <p>{page.featureText}</p>

            <ul>
              {page.featurePoints.map((point) => (
                <li key={point}>
                  <span>
                    <ShieldCheck size={17} />
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            <Link to="/patient-resources" className="swc-rh-button swc-rh-button-light">
              {page.featureButton}
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* PERSONAL NOTE */}
      <section className="swc-rh-note">
        <div className="swc-rh-container swc-rh-note-inner">
          <div className="swc-rh-note-icon">
            <Flower2 size={28} />
          </div>

          <div>
            <span className="swc-rh-eyebrow">{page.noteEyebrow}</span>
            <h2>{page.noteTitle}</h2>
            <p>{page.noteText}</p>
          </div>
        </div>
      </section>

      {/* RESOURCES */}
      <section className="swc-rh-resources">
        <div className="swc-rh-container swc-rh-resources-inner">
          <div className="swc-rh-resources-icon">
            <BookOpen size={27} />
          </div>

          <div className="swc-rh-resources-copy">
            <span className="swc-rh-eyebrow">
              {isArabic ? "المعرفة الصحية" : "CONTINUE LEARNING"}
            </span>
            <h2>
              {isArabic
                ? "المعرفة خطوة نحو فهم أفضل لصحتكِ."
                : "Keep exploring. Keep learning about your health."}
            </h2>
          </div>

          <Link to="/patient-resources" className="swc-rh-button swc-rh-button-dark">
            {page.featureButton}
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="swc-rh-cta">
        <div className="swc-rh-container swc-rh-cta-inner">
          <div className="swc-rh-cta-icon">
            <Activity size={25} />
          </div>

          <span className="swc-rh-eyebrow">{page.ctaEyebrow}</span>
          <h2>{page.ctaTitle}</h2>
          <p>{page.ctaText}</p>

          <div className="swc-rh-cta-actions">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noreferrer"
              className="swc-rh-button swc-rh-button-dark"
            >
              {page.ctaButton}
              <ArrowUpRight size={18} />
            </a>

            <Link to="/womens-health" className="swc-rh-inline-link">
              {page.ctaSecondary}
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="swc-rh-disclaimer">
        <div className="swc-rh-container swc-rh-disclaimer-inner">
          <div className="swc-rh-disclaimer-icon">
            <ShieldCheck size={22} />
          </div>

          <div>
            <h2>{page.disclaimerTitle}</h2>
            <p>{page.disclaimer}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ReproductiveHealth;
