
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  ArrowUpRight,
  Heart,
  HeartPulse,
  Flower2,
  Brain,
  ShieldCheck,
  Leaf,
  Activity,
  Sparkles,
  BookOpen,
  CalendarDays,
  ChevronRight,
} from "lucide-react";

import SEO from "../components/SEO";
import { getWhatsAppLink } from "../components/WhatsAppButton";

import "./WomensHealth.css";

const images = {
  hero: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=2000&q=85",
  introduction:
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1100&q=85",
  menstrual:
    "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=85",
  emotional:
    "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=85",
  lifestyle:
    "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=900&q=85",
  prevention:
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=85",
  lifeStages:
    "https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=900&q=85",
  wellness:
    "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=1200&q=85",
};

const content = {
  en: {
    eyebrow: "WOMEN'S HEALTH & WELLBEING",
    heroTitle: "Your health deserves",
    heroAccent: "your attention.",
    heroText:
      "A welcoming space to explore women's health, understand your body and make more informed decisions about your wellbeing.",
    heroButton: "Explore health topics",
    heroSecondary: "Make a general enquiry",

    introEyebrow: "A MORE INFORMED YOU",
    introTitle: "Understanding your health is a powerful place to start.",
    introText:
      "Women's health changes throughout life. Having access to clear, thoughtful and reliable health information can help you understand your body, recognise changes and know when to seek guidance from a qualified healthcare professional.",
    introTextTwo:
      "We bring together educational information designed to support awareness, encourage healthy conversations and help you take an active interest in your wellbeing.",
    introButton: "Explore our resources",

    topicsEyebrow: "EXPLORE THE TOPICS",
    topicsTitle: "Knowledge for every stage of womanhood.",
    topicsText:
      "Explore general educational topics that can help you become more informed about your body and overall wellbeing.",

    topics: [
      {
        number: "01",
        title: "Understanding Your Body",
        description:
          "Learn about the body, common changes and the importance of paying attention to your health.",
        image: images.introduction,
        alt: "Woman enjoying a calm moment outdoors",
        icon: HeartPulse,
      },
      {
        number: "02",
        title: "Menstrual Health",
        description:
          "Explore menstrual cycles, common experiences and when a change may deserve professional attention.",
        image: images.menstrual,
        alt: "Woman practising a healthy movement routine",
        icon: CalendarDays,
      },
      {
        number: "03",
        title: "Emotional Wellbeing",
        description:
          "Discover the importance of emotional wellbeing, stress awareness, rest and supportive relationships.",
        image: images.emotional,
        alt: "Woman meditating in a peaceful setting",
        icon: Brain,
      },
      {
        number: "04",
        title: "Healthy Lifestyle",
        description:
          "Explore everyday habits around movement, nutrition, sleep and looking after your overall health.",
        image: images.lifestyle,
        alt: "Woman practising yoga and mindful movement",
        icon: Leaf,
      },
      {
        number: "05",
        title: "Preventive Health Awareness",
        description:
          "Understand why routine health awareness and conversations with qualified professionals matter.",
        image: images.prevention,
        alt: "Healthcare professional reviewing medical information",
        icon: ShieldCheck,
      },
      {
        number: "06",
        title: "Life Stages & Wellbeing",
        description:
          "Learn about the different stages of life and how health information needs may change over time.",
        image: images.lifeStages,
        alt: "Women spending time together",
        icon: Flower2,
      },
    ],

    featureEyebrow: "YOUR WELLBEING MATTERS",
    featureTitle: "Small steps. Better awareness. More informed choices.",
    featureText:
      "Looking after your health does not have to begin with big changes. It can start with asking questions, understanding your body and seeking reliable information.",
    featurePoints: [
      "Make time to understand changes in your body.",
      "Build healthy routines that work for your life.",
      "Seek advice from appropriately qualified healthcare professionals when needed.",
      "Give your emotional wellbeing the same attention as your physical health.",
    ],
    featureButton: "Visit patient resources",

    quote:
      "Being informed is not about having every answer. It is about knowing where to find trustworthy information and when to ask for help.",
    quoteLabel: "A reminder for every woman",

    ctaEyebrow: "WE ARE HERE TO HELP YOU EXPLORE",
    ctaTitle: "Have a general question?",
    ctaText:
      "You are welcome to contact us with general enquiries about the information available on this website. Please do not send private medical records or sensitive health details through WhatsApp.",
    ctaButton: "Send a general enquiry",
    ctaSecondary: "Explore reproductive health",

    disclaimerTitle: "An important health information note",
    disclaimer:
      "The content on this page is provided for general educational and awareness purposes only. It is not medical advice, diagnosis or treatment, and it does not replace a consultation with a qualified healthcare professional. Healthcare services, where offered, are subject to applicable local laws and professional authorisation. If you have an urgent medical concern, contact your local emergency service or seek urgent medical care.",
  },

  ar: {
    eyebrow: "صحة المرأة والعافية",
    heroTitle: "صحتكِ تستحق",
    heroAccent: "اهتمامكِ.",
    heroText:
      "مساحة ترحيبية للتعرّف على صحة المرأة وفهم جسمكِ واتخاذ قرارات أكثر وعياً بشأن عافيتكِ.",
    heroButton: "استكشفي الموضوعات الصحية",
    heroSecondary: "إرسال استفسار عام",

    introEyebrow: "معرفة أوسع بصحتكِ",
    introTitle: "فهم صحتكِ خطوة مهمة نحو عناية أفضل بنفسكِ.",
    introText:
      "تتغير صحة المرأة خلال مراحل الحياة المختلفة. ويساعد الوصول إلى معلومات صحية واضحة وموثوقة على فهم الجسم وملاحظة التغيرات ومعرفة الوقت المناسب لطلب إرشاد من مختص صحي مؤهل.",
    introTextTwo:
      "نجمع هنا معلومات تثقيفية تهدف إلى تعزيز الوعي وتشجيع الحوار الصحي ومساعدتكِ على الاهتمام بعافيتكِ.",
    introButton: "استكشفي مواردنا",

    topicsEyebrow: "استكشفي الموضوعات",
    topicsTitle: "معرفة تدعمكِ في مختلف مراحل حياتكِ.",
    topicsText:
      "تعرّفي على موضوعات تثقيفية عامة تساعدكِ على فهم جسمكِ والاهتمام بصحتكِ وعافيتكِ.",

    topics: [
      {
        number: "01",
        title: "فهم جسم المرأة",
        description:
          "تعرّفي على الجسم والتغيرات الشائعة وأهمية الانتباه إلى صحتكِ.",
        image: images.introduction,
        alt: "امرأة تستمتع بلحظة هادئة في الهواء الطلق",
        icon: HeartPulse,
      },
      {
        number: "02",
        title: "صحة الدورة الشهرية",
        description:
          "معلومات عن الدورة الشهرية والتجارب الشائعة ومتى تستدعي التغيرات استشارة مختص.",
        image: images.menstrual,
        alt: "امرأة تمارس نشاطاً حركياً صحياً",
        icon: CalendarDays,
      },
      {
        number: "03",
        title: "الصحة النفسية والعاطفية",
        description:
          "اكتشفي أهمية الراحة والوعي بالتوتر والعلاقات الداعمة والعافية العاطفية.",
        image: images.emotional,
        alt: "امرأة تتأمل في مكان هادئ",
        icon: Brain,
      },
      {
        number: "04",
        title: "نمط الحياة الصحي",
        description:
          "تعرّفي على العادات اليومية المتعلقة بالحركة والتغذية والنوم والصحة العامة.",
        image: images.lifestyle,
        alt: "امرأة تمارس اليوغا والحركة الواعية",
        icon: Leaf,
      },
      {
        number: "05",
        title: "الوعي الصحي الوقائي",
        description:
          "افهمي أهمية الوعي الصحي المنتظم والتحدث مع المختصين المؤهلين.",
        image: images.prevention,
        alt: "مختص صحي يراجع معلومات طبية",
        icon: ShieldCheck,
      },
      {
        number: "06",
        title: "مراحل الحياة والعافية",
        description:
          "معلومات عن مراحل الحياة المختلفة وكيف يمكن أن تتغير الاحتياجات الصحية بمرور الوقت.",
        image: images.lifeStages,
        alt: "مجموعة من النساء يقضين وقتاً معاً",
        icon: Flower2,
      },
    ],

    featureEyebrow: "عافيتكِ تهمنا",
    featureTitle: "خطوات بسيطة. وعي أفضل. خيارات أكثر معرفة.",
    featureText:
      "لا يتطلب الاهتمام بصحتكِ دائماً تغييرات كبيرة. فقد يبدأ بطرح الأسئلة وفهم جسمكِ والبحث عن معلومات موثوقة.",
    featurePoints: [
      "خصصي وقتاً لفهم التغيرات التي تطرأ على جسمكِ.",
      "اتبعي عادات صحية تناسب حياتكِ اليومية.",
      "اطلبي المشورة من مختصين صحيين مؤهلين عند الحاجة.",
      "امنحي صحتكِ النفسية الاهتمام نفسه الذي تمنحينه لصحتكِ الجسدية.",
    ],
    featureButton: "زيارة موارد المريضات",

    quote:
      "الوعي الصحي لا يعني امتلاك جميع الإجابات، بل معرفة أين تجدين المعلومات الموثوقة ومتى تطلبين المساعدة.",
    quoteLabel: "تذكير لكل امرأة",

    ctaEyebrow: "نسعد بمساعدتكِ على استكشاف المعلومات",
    ctaTitle: "هل لديكِ استفسار عام؟",
    ctaText:
      "يمكنكِ التواصل معنا للاستفسار بشكل عام عن المعلومات المتاحة على هذا الموقع. يرجى عدم إرسال السجلات الطبية الخاصة أو التفاصيل الصحية الحساسة عبر واتساب.",
    ctaButton: "إرسال استفسار عام",
    ctaSecondary: "استكشفي الصحة الإنجابية",

    disclaimerTitle: "ملاحظة مهمة حول المعلومات الصحية",
    disclaimer:
      "يُقدَّم المحتوى الموجود في هذه الصفحة لأغراض التثقيف والتوعية العامة فقط. ولا يُعد نصيحة طبية أو تشخيصاً أو علاجاً، كما أنه لا يغني عن استشارة مختص صحي مؤهل. وتخضع الخدمات الصحية، عند تقديمها، للقوانين المحلية المعمول بها والتراخيص المهنية اللازمة. في الحالات الطبية العاجلة، يرجى التواصل مع خدمات الطوارئ المحلية أو طلب الرعاية الطبية العاجلة.",
  },
};

function WomensHealth() {
  const { i18n } = useTranslation();
  const isArabic = i18n.language?.startsWith("ar");
  const lang = isArabic ? "ar" : "en";
  const page = content[lang];

  return (
    <div
      className={`swc-womens-page ${isArabic ? "rtl" : "ltr"}`}
      dir={isArabic ? "rtl" : "ltr"}
    >
      <SEO
        title={
          isArabic
            ? "صحة المرأة والعافية | Sarah's Women's Clinic"
            : "Women's Health & Wellbeing | Sarah's Women's Clinic"
        }
        description={
          isArabic
            ? "استكشفي معلومات تثقيفية عامة حول صحة المرأة والعافية ومراحل الحياة المختلفة."
            : "Explore general women's health information covering wellbeing, menstrual health, healthy living and different stages of life."
        }
        noindex={true}
      />

      {/* HERO */}
      <section className="swc-wh-hero">
        <div className="swc-wh-hero-image">
          <img src={images.hero} alt="Woman in a calm natural setting" />
        </div>

        <div className="swc-wh-hero-overlay" />

        <div className="swc-wh-container swc-wh-hero-content">
          <span className="swc-wh-eyebrow swc-wh-eyebrow-light">
            <span />
            {page.eyebrow}
          </span>

          <h1>
            {page.heroTitle}
            <br />
            <em>{page.heroAccent}</em>
          </h1>

          <p>{page.heroText}</p>

          <div className="swc-wh-hero-actions">
            <a href="#wh-topics" className="swc-wh-button swc-wh-button-light">
              {page.heroButton}
              <ArrowUpRight size={18} />
            </a>

            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noreferrer"
              className="swc-wh-text-link swc-wh-text-link-light"
            >
              {page.heroSecondary}
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>

        <div className="swc-wh-hero-caption">
          <Heart size={15} />
          <span>Care begins with understanding</span>
        </div>

        <a href="#wh-intro" className="swc-wh-scroll-cue" aria-label="Scroll down">
          <span />
        </a>
      </section>

      {/* INTRODUCTION */}
      <section className="swc-wh-intro" id="wh-intro">
        <div className="swc-wh-container swc-wh-intro-grid">
          <div className="swc-wh-intro-visual">
            <div className="swc-wh-intro-image">
              <img src={images.introduction} alt="Woman enjoying a peaceful outdoor moment" />
            </div>

            <div className="swc-wh-image-note">
              <span className="swc-wh-note-icon">
                <HeartPulse size={22} />
              </span>
              <span>
                <strong>Know your body</strong>
                <small>Make informed choices</small>
              </span>
            </div>

            <div className="swc-wh-image-decoration" />
          </div>

          <div className="swc-wh-intro-copy">
            <span className="swc-wh-eyebrow">{page.introEyebrow}</span>
            <h2>{page.introTitle}</h2>
            <p>{page.introText}</p>
            <p>{page.introTextTwo}</p>

            <Link to="/patient-resources" className="swc-wh-inline-link">
              {page.introButton}
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* TOPICS */}
      <section className="swc-wh-topics" id="wh-topics">
        <div className="swc-wh-container">
          <div className="swc-wh-section-heading">
            <div>
              <span className="swc-wh-eyebrow">{page.topicsEyebrow}</span>
              <h2>{page.topicsTitle}</h2>
            </div>
            <p>{page.topicsText}</p>
          </div>

          <div className="swc-wh-topic-grid">
            {page.topics.map((topic) => {
              const TopicIcon = topic.icon;

              return (
                <article className="swc-wh-topic-card" key={topic.number}>
                  <Link
                    to="/patient-resources"
                    className="swc-wh-topic-image"
                    aria-label={`${topic.title} – ${page.introButton}`}
                  >
                    <img src={topic.image} alt={topic.alt} loading="lazy" />
                    <span className="swc-wh-topic-number">{topic.number}</span>
                    <span className="swc-wh-topic-arrow">
                      <ArrowUpRight size={20} />
                    </span>
                  </Link>

                  <div className="swc-wh-topic-content">
                    <span className="swc-wh-topic-icon">
                      <TopicIcon size={20} />
                    </span>
                    <h3>{topic.title}</h3>
                    <p>{topic.description}</p>
                    <Link to="/patient-resources" className="swc-wh-card-link">
                      {page.introButton}
                      <ChevronRight size={16} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* WELLBEING FEATURE */}
      <section className="swc-wh-feature">
        <div className="swc-wh-container swc-wh-feature-grid">
          <div className="swc-wh-feature-copy">
            <span className="swc-wh-eyebrow swc-wh-eyebrow-light">
              {page.featureEyebrow}
            </span>

            <h2>{page.featureTitle}</h2>
            <p className="swc-wh-feature-lead">{page.featureText}</p>

            <ul className="swc-wh-feature-list">
              {page.featurePoints.map((point) => (
                <li key={point}>
                  <span>
                    <ShieldCheck size={17} />
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            <Link to="/patient-resources" className="swc-wh-button swc-wh-button-light">
              {page.featureButton}
              <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="swc-wh-feature-visual">
            <img src={images.wellness} alt="Woman taking time for personal wellbeing" loading="lazy" />
            <div className="swc-wh-feature-stamp">
              <Sparkles size={23} />
              <span>Wellbeing</span>
              <small>Starts with you</small>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="swc-wh-quote">
        <div className="swc-wh-container">
          <div className="swc-wh-quote-mark">“</div>
          <blockquote>{page.quote}</blockquote>
          <span>{page.quoteLabel}</span>
        </div>
      </section>

      {/* RESOURCES STRIP */}
      <section className="swc-wh-resources">
        <div className="swc-wh-container swc-wh-resources-inner">
          <div className="swc-wh-resources-icon">
            <BookOpen size={27} />
          </div>
          <div className="swc-wh-resources-copy">
            <span className="swc-wh-eyebrow">
              {isArabic ? "المعرفة تبدأ من هنا" : "CONTINUE LEARNING"}
            </span>
            <h2>
              {isArabic
                ? "اكتشفي المزيد من المعلومات والموارد الصحية."
                : "Keep learning. Keep asking. Keep understanding."}
            </h2>
          </div>
          <Link to="/patient-resources" className="swc-wh-button swc-wh-button-dark">
            {page.featureButton}
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="swc-wh-cta">
        <div className="swc-wh-container swc-wh-cta-inner">
          <div className="swc-wh-cta-icon">
            <Activity size={25} />
          </div>

          <span className="swc-wh-eyebrow">{page.ctaEyebrow}</span>
          <h2>{page.ctaTitle}</h2>
          <p>{page.ctaText}</p>

          <div className="swc-wh-cta-actions">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noreferrer"
              className="swc-wh-button swc-wh-button-dark"
            >
              {page.ctaButton}
              <ArrowUpRight size={18} />
            </a>

            <Link to="/reproductive-health" className="swc-wh-inline-link">
              {page.ctaSecondary}
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="swc-wh-disclaimer">
        <div className="swc-wh-container swc-wh-disclaimer-inner">
          <div className="swc-wh-disclaimer-icon">
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

export default WomensHealth;
