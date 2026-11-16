
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  ArrowUpRight,
  Heart,
  HeartPulse,
  Globe2,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  BookOpen,
  Flower2,
} from "lucide-react";

import SEO from "../components/SEO";
import { getWhatsAppLink } from "../components/WhatsAppButton";

import "./UAE.css";

const images = {
  hero: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2000&q=85",
  city: "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?auto=format&fit=crop&w=1100&q=85",
  wellbeing: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1000&q=85",
  lifestyle: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=85",
  education: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=85",
};

const content = {
  en: {
    eyebrow: "WOMEN'S HEALTH INFORMATION",
    title: "Knowledge and awareness for women's wellbeing in the UAE.",
    description:
      "Discover general women's health information, reproductive health education and practical wellbeing resources through Sarah's Women's Clinic.",
    primary: "Make a general enquiry",
    secondary: "Explore our resources",
    heroNote: "Education • Awareness • Informed choices",
    breadcrumb: "United Arab Emirates",
    introLabel: "WELCOME TO OUR UAE PAGE",
    introTitle: "A resource for understanding women's health.",
    introText:
      "Women's wellbeing involves many aspects of life, from understanding the body to finding reliable information and knowing when to seek professional advice. Our platform provides general educational resources to support awareness and informed conversations.",
    introExtra:
      "Explore our information library and consult appropriately qualified healthcare professionals for individual medical concerns.",
    focusLabel: "EXPLORE OUR INFORMATION",
    focusTitle: "Discover topics that matter to women's wellbeing.",
    focusText:
      "Explore our educational resources and learn more about different areas of women's health.",
    topics: [
      {
        icon: HeartPulse,
        title: "Women's Health",
        text: "General educational information about women's health and everyday wellbeing.",
        link: "/womens-health",
        image: images.wellbeing,
      },
      {
        icon: Flower2,
        title: "Reproductive Health",
        text: "Explore reproductive health awareness, body knowledge and life stages.",
        link: "/reproductive-health",
        image: images.lifestyle,
      },
      {
        icon: BookOpen,
        title: "Patient Resources",
        text: "Practical educational resources and preparation guidance.",
        link: "/patient-resources",
        image: images.education,
      },
    ],
    countryLabel: "INFORMATION FOR UAE VISITORS",
    countryTitle: "An informed approach to personal wellbeing.",
    countryText:
      "Our UAE information page offers a starting point for visitors who want to explore general women's health topics and educational resources.",
    countryPoints: [
      "Explore general women's health information.",
      "Understand reproductive health topics.",
      "Access educational reading and preparation resources.",
      "Send a general enquiry about our platform.",
    ],
    destinationLabel: "UNITED ARAB EMIRATES",
    destinationTitle: "A diverse country with a global outlook.",
    destinationText:
      "The United Arab Emirates brings together vibrant cities, diverse communities and cultures from around the world.",
    noteTitle: "Reliable information is a starting point, not a substitute for care.",
    noteText:
      "General online information can support awareness, but personal medical questions should be discussed with an appropriately qualified healthcare professional.",
    ctaLabel: "CONNECT WITH OUR TEAM",
    ctaTitle: "Would you like to know more?",
    ctaText:
      "Contact us for general information about Sarah's Women's Clinic and the resources available on this platform. Please do not send private medical records or sensitive health details through general enquiries.",
    ctaButton: "Enquire via WhatsApp",
    disclaimerTitle: "Important information",
    disclaimer:
      "This website provides general educational information only. It does not constitute medical advice, diagnosis or treatment, and does not confirm that clinical services are available or authorised in the UAE. Any healthcare services, if offered, are subject to applicable local laws and professional licensing requirements.",
    home: "Home",
    arabic: {
      eyebrow: "معلومات صحة المرأة",
      title: "المعرفة والتوعية من أجل صحة المرأة ورفاهيتها في الإمارات.",
      description:
        "اكتشفي معلومات عامة عن صحة المرأة والتثقيف حول الصحة الإنجابية وموارد الرفاهية العملية من خلال منصة عيادة سارة لصحة المرأة.",
      primary: "إرسال استفسار عام",
      secondary: "استكشفي مواردنا",
      heroNote: "التثقيف • التوعية • خيارات مستنيرة",
      breadcrumb: "الإمارات العربية المتحدة",
      introLabel: "مرحباً بك في صفحتنا الخاصة بالإمارات",
      introTitle: "مساحة لفهم صحة المرأة.",
      introText:
        "تشمل صحة المرأة جوانب عديدة من الحياة، بدءاً من فهم الجسم وحتى الوصول إلى المعلومات الموثوقة ومعرفة الوقت المناسب لطلب المشورة المهنية. توفر منصتنا موارد تثقيفية عامة لدعم الوعي والحوار الصحي المستنير.",
      introExtra:
        "استكشفي مكتبة المعلومات لدينا، واستشيري مختصي الرعاية الصحية المؤهلين عند وجود استفسارات طبية شخصية.",
      focusLabel: "استكشفي معلوماتنا",
      focusTitle: "اكتشفي موضوعات تهم صحة المرأة ورفاهيتها.",
      focusText:
        "استكشفي مواردنا التثقيفية وتعرفي على مجالات مختلفة من صحة المرأة.",
      topics: [
        {
          icon: HeartPulse,
          title: "صحة المرأة",
          text: "معلومات تثقيفية عامة عن صحة المرأة والرفاهية اليومية.",
          link: "/womens-health",
          image: images.wellbeing,
        },
        {
          icon: Flower2,
          title: "الصحة الإنجابية",
          text: "استكشفي التوعية بالصحة الإنجابية ومعرفة الجسم ومراحل الحياة.",
          link: "/reproductive-health",
          image: images.lifestyle,
        },
        {
          icon: BookOpen,
          title: "موارد المريضات",
          text: "موارد تثقيفية عملية وإرشادات للاستعداد للاستشارات.",
          link: "/patient-resources",
          image: images.education,
        },
      ],
      countryLabel: "معلومات للزائرات في الإمارات",
      countryTitle: "نهج واعٍ نحو الرفاهية الشخصية.",
      countryText:
        "تقدم صفحتنا الخاصة بالإمارات نقطة بداية للزائرات الراغبات في استكشاف موضوعات عامة حول صحة المرأة والموارد التثقيفية.",
      countryPoints: [
        "استكشاف معلومات عامة عن صحة المرأة.",
        "فهم موضوعات الصحة الإنجابية.",
        "الوصول إلى مواد تثقيفية وإرشادات عملية.",
        "إرسال استفسار عام حول منصتنا.",
      ],
      destinationLabel: "الإمارات العربية المتحدة",
      destinationTitle: "بلد متنوع يتمتع برؤية عالمية.",
      destinationText:
        "تجمع دولة الإمارات العربية المتحدة بين المدن النابضة بالحياة والمجتمعات المتنوعة والثقافات من مختلف أنحاء العالم.",
      noteTitle: "المعلومات الموثوقة بداية جيدة وليست بديلاً عن الرعاية الصحية.",
      noteText:
        "قد تساعد المعلومات العامة عبر الإنترنت في زيادة الوعي، لكن ينبغي مناقشة الأسئلة الطبية الشخصية مع مختص رعاية صحية مؤهل.",
      ctaLabel: "تواصلي مع فريقنا",
      ctaTitle: "هل ترغبين في معرفة المزيد؟",
      ctaText:
        "تواصلي معنا للحصول على معلومات عامة عن عيادة سارة لصحة المرأة والموارد المتاحة عبر هذه المنصة. يرجى عدم إرسال السجلات الطبية الخاصة أو التفاصيل الصحية الحساسة عبر الاستفسارات العامة.",
      ctaButton: "استفسري عبر واتساب",
      disclaimerTitle: "معلومات مهمة",
      disclaimer:
        "يقدم هذا الموقع معلومات تثقيفية عامة فقط. ولا تُعد هذه المعلومات نصيحة طبية أو تشخيصاً أو علاجاً، كما أنها لا تؤكد توفر خدمات سريرية أو الحصول على تصريح لتقديمها في الإمارات. وتخضع أي خدمات رعاية صحية، عند تقديمها، للقوانين المحلية المعمول بها ومتطلبات الترخيص المهني.",
      home: "الرئيسية",
    },
  },
};

function UAE() {
  const { i18n } = useTranslation();
  const isArabic = i18n.language?.startsWith("ar");
  const data = isArabic ? content.en.arabic : content.en;
  const whatsappLink = getWhatsAppLink("UAE");

  return (
    <div className={`swc-uae-page ${isArabic ? "rtl" : "ltr"}`}>
      <SEO
        title={
          isArabic
            ? "صحة المرأة في الإمارات | معلومات وموارد تثقيفية"
            : "Women's Health Information in the UAE | Sarah's Women's Clinic"
        }
        description={
          isArabic
            ? "استكشفي معلومات تثقيفية عامة حول صحة المرأة والصحة الإنجابية والرفاهية في الإمارات العربية المتحدة."
            : "Explore general women's health information, reproductive health education and wellbeing resources for visitors in the United Arab Emirates."
        }
        noindex={true}
      />

      <section
        className="swc-uae-hero"
        style={{ backgroundImage: `url(${images.hero})` }}
      >
        <div className="swc-uae-hero-overlay" />

        <div className="swc-uae-container swc-uae-hero-content">
          <div className="swc-uae-breadcrumb">
            <Link to="/">{data.home}</Link>
            <span>/</span>
            <span>{data.breadcrumb}</span>
          </div>

          <span className="swc-uae-eyebrow">
            <Sparkles size={15} />
            {data.eyebrow}
          </span>

          <h1>{data.title}</h1>
          <p>{data.description}</p>

          <div className="swc-uae-hero-actions">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="swc-uae-primary-button"
            >
              {data.primary}
              <ArrowUpRight size={18} />
            </a>

            <Link
              to="/patient-resources"
              className="swc-uae-secondary-button"
            >
              {data.secondary}
              <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="swc-uae-hero-note">
            <ShieldCheck size={17} />
            {data.heroNote}
          </div>
        </div>

        <span className="swc-uae-hero-side-label">UNITED ARAB EMIRATES</span>
      </section>

      <section className="swc-uae-intro">
        <div className="swc-uae-container swc-uae-intro-grid">
          <div className="swc-uae-intro-copy">
            <span className="swc-uae-section-label">
              {data.introLabel}
            </span>
            <h2>{data.introTitle}</h2>
            <p>{data.introText}</p>
            <p>{data.introExtra}</p>

            <div className="swc-uae-intro-signature">
              <Heart size={18} />
              <span>Sarah's Women's Clinic</span>
            </div>
          </div>

          <div className="swc-uae-intro-image">
            <img src={images.city} alt="United Arab Emirates city skyline" />
            <div className="swc-uae-image-caption">
              <MapPin size={17} />
              <span>United Arab Emirates</span>
            </div>
          </div>
        </div>
      </section>

      <section className="swc-uae-topics">
        <div className="swc-uae-container">
          <div className="swc-uae-section-heading">
            <span className="swc-uae-section-label">
              {data.focusLabel}
            </span>
            <h2>{data.focusTitle}</h2>
            <p>{data.focusText}</p>
          </div>

          <div className="swc-uae-topic-grid">
            {data.topics.map((topic, index) => {
              const Icon = topic.icon;

              return (
                <article className="swc-uae-topic-card" key={topic.title}>
                  <Link to={topic.link} className="swc-uae-topic-image">
                    <img src={topic.image} alt="" loading="lazy" />
                    <span className="swc-uae-topic-index">
                      0{index + 1}
                    </span>
                    <span className="swc-uae-topic-arrow">
                      <ArrowUpRight size={19} />
                    </span>
                  </Link>

                  <div className="swc-uae-topic-content">
                    <span className="swc-uae-topic-icon">
                      <Icon size={21} />
                    </span>
                    <h3>{topic.title}</h3>
                    <p>{topic.text}</p>
                    <Link to={topic.link} className="swc-uae-topic-link">
                      {data.secondary}
                      <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="swc-uae-country">
        <div className="swc-uae-container swc-uae-country-grid">
          <div className="swc-uae-country-image">
            <img
              src={images.education}
              alt="People learning and sharing information"
              loading="lazy"
            />
            <div className="swc-uae-country-image-card">
              <Globe2 size={23} />
              <span>Knowledge • Awareness • Education</span>
            </div>
          </div>

          <div className="swc-uae-country-copy">
            <span className="swc-uae-section-label">
              {data.countryLabel}
            </span>
            <h2>{data.countryTitle}</h2>
            <p>{data.countryText}</p>

            <ul>
              {data.countryPoints.map((point) => (
                <li key={point}>
                  <ShieldCheck size={18} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/patient-resources"
              className="swc-uae-country-link"
            >
              {data.secondary}
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="swc-uae-destination">
        <div
          className="swc-uae-destination-image"
          style={{ backgroundImage: `url(${images.city})` }}
        />
        <div className="swc-uae-destination-overlay" />
        <div className="swc-uae-container swc-uae-destination-content">
          <span className="swc-uae-section-label">
            {data.destinationLabel}
          </span>
          <h2>{data.destinationTitle}</h2>
          <p>{data.destinationText}</p>
        </div>
      </section>

      <section className="swc-uae-note">
        <div className="swc-uae-container swc-uae-note-inner">
          <div className="swc-uae-note-icon">
            <ShieldCheck size={26} />
          </div>
          <div>
            <h2>{data.noteTitle}</h2>
            <p>{data.noteText}</p>
          </div>
        </div>
      </section>

      <section className="swc-uae-cta">
        <div className="swc-uae-container swc-uae-cta-inner">
          <div className="swc-uae-cta-icon">
            <MessageCircle size={27} />
          </div>

          <div className="swc-uae-cta-copy">
            <span className="swc-uae-section-label">
              {data.ctaLabel}
            </span>
            <h2>{data.ctaTitle}</h2>
            <p>{data.ctaText}</p>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="swc-uae-cta-button"
          >
            {data.ctaButton}
            <ArrowUpRight size={18} />
          </a>
        </div>
      </section>

      <section className="swc-uae-disclaimer">
        <div className="swc-uae-container">
          <div className="swc-uae-disclaimer-heading">
            <Stethoscope size={20} />
            <h2>{data.disclaimerTitle}</h2>
          </div>
          <p>{data.disclaimer}</p>
        </div>
      </section>
    </div>
  );
}

export default UAE;
