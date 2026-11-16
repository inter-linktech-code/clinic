
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  ArrowUpRight,
  ArrowRight,
  Globe2,
  Heart,
  HeartPulse,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from "lucide-react";

import SEO from "../components/SEO";
import { getWhatsAppLink } from "../components/WhatsAppButton";

import "./Bahrain.css";

const images = {
  hero: "https://images.unsplash.com/photo-1590418606746-018840f9cd0f?auto=format&fit=crop&w=2000&q=85",
  city: "https://images.unsplash.com/photo-1562835155-7c9b9c8a7b9a?auto=format&fit=crop&w=1100&q=85",
  wellness: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=85",
  consultation: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=85",
  lifestyle: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=85",
};

const pageContent = {
  en: {
    eyebrow: "WOMEN'S HEALTH INFORMATION",
    title: "Supporting informed women's health choices in Bahrain.",
    description:
      "Explore general women's health information, reproductive wellbeing resources and educational guidance through Sarah's Women's Clinic.",
    primary: "Make a general enquiry",
    secondary: "Explore health resources",
    heroNote: "Knowledge • Awareness • Wellbeing",
    breadcrumb: "Bahrain",
    introLabel: "OUR INTERNATIONAL INFORMATION PLATFORM",
    introTitle: "A thoughtful space for women's health awareness.",
    introText:
      "We believe that access to understandable health information can help women ask better questions and take a more informed role in conversations about their wellbeing. Our platform brings together educational resources covering different aspects of women's health.",
    introExtra:
      "Explore the information available on our website and seek advice from appropriately qualified healthcare professionals for individual medical concerns.",
    focusLabel: "EXPLORE OUR INFORMATION",
    focusTitle: "Information designed around women's wellbeing.",
    focusText:
      "Discover educational topics and resources that support greater awareness at different stages of life.",
    topics: [
      {
        icon: HeartPulse,
        title: "Women's Health",
        text: "General information about women's health, body awareness and wellbeing.",
        link: "/womens-health",
        image: images.wellness,
      },
      {
        icon: Heart,
        title: "Reproductive Health",
        text: "Educational information about reproductive wellbeing and life stages.",
        link: "/reproductive-health",
        image: images.lifestyle,
      },
      {
        icon: Globe2,
        title: "Patient Resources",
        text: "Helpful reading and preparation guidance for healthcare conversations.",
        link: "/patient-resources",
        image: images.consultation,
      },
    ],
    countryLabel: "OUR BAHRAIN INFORMATION PAGE",
    countryTitle: "A connected approach to health awareness.",
    countryText:
      "This page is intended to help visitors in Bahrain explore our general educational information and understand the resources available through our platform.",
    countryPoints: [
      "Explore women's health educational topics.",
      "Read general reproductive health information.",
      "Access practical patient information resources.",
      "Contact us for general platform enquiries.",
    ],
    cityLabel: "BAHRAIN",
    cityTitle: "A country rich in culture and connection.",
    cityText:
      "Bahrain is an island nation in the Arabian Gulf, known for its cultural heritage, modern city life and welcoming communities.",
    noteTitle: "Health information should empower, not replace professional care.",
    noteText:
      "Online educational resources can support awareness, but personal medical questions require individual guidance from an appropriately qualified healthcare professional.",
    ctaLabel: "CONNECT WITH OUR TEAM",
    ctaTitle: "Would you like to make a general enquiry?",
    ctaText:
      "Contact us for general information about Sarah's Women's Clinic and the resources available through this platform. Please do not share private medical records or sensitive health information through general enquiries.",
    ctaButton: "Enquire via WhatsApp",
    disclaimerTitle: "Important information",
    disclaimer:
      "This website provides general educational information only. It does not constitute medical advice, diagnosis or treatment, and does not represent confirmation that clinical services are available or authorised in Bahrain. Any healthcare services, if offered, are subject to applicable local laws and professional licensing requirements.",
    home: "Home",
    resources: "Patient Resources",
    arabic: {
      eyebrow: "معلومات صحة المرأة",
      title: "ندعم الخيارات الصحية الواعية للمرأة في البحرين.",
      description:
        "اكتشفي معلومات عامة عن صحة المرأة وموارد الصحة الإنجابية والتثقيف الصحي من خلال منصة عيادة سارة لصحة المرأة.",
      primary: "إرسال استفسار عام",
      secondary: "استكشفي الموارد الصحية",
      heroNote: "المعرفة • الوعي • الرفاهية",
      breadcrumb: "البحرين",
      introLabel: "منصتنا الدولية للمعلومات الصحية",
      introTitle: "مساحة تهتم بالتوعية بصحة المرأة.",
      introText:
        "نؤمن بأن الوصول إلى معلومات صحية واضحة يساعد المرأة على طرح أسئلة أفضل والمشاركة بوعي أكبر في القرارات المتعلقة بصحتها. تجمع منصتنا موارد تثقيفية حول جوانب مختلفة من صحة المرأة.",
      introExtra:
        "استكشفي المعلومات المتاحة على موقعنا، واطلبي المشورة من مختصي الرعاية الصحية المؤهلين عند وجود استفسارات طبية شخصية.",
      focusLabel: "استكشفي معلوماتنا",
      focusTitle: "معلومات تهتم بصحة المرأة ورفاهيتها.",
      focusText:
        "اكتشفي موضوعات وموارد تثقيفية تدعم الوعي الصحي في مختلف مراحل الحياة.",
      topics: [
        {
          icon: HeartPulse,
          title: "صحة المرأة",
          text: "معلومات عامة عن صحة المرأة والوعي بالجسم والرفاهية.",
          link: "/womens-health",
          image: images.wellness,
        },
        {
          icon: Heart,
          title: "الصحة الإنجابية",
          text: "معلومات تثقيفية حول الصحة الإنجابية ومراحل الحياة.",
          link: "/reproductive-health",
          image: images.lifestyle,
        },
        {
          icon: Globe2,
          title: "موارد المريضات",
          text: "معلومات مفيدة وإرشادات للاستعداد للمحادثات الصحية.",
          link: "/patient-resources",
          image: images.consultation,
        },
      ],
      countryLabel: "صفحتنا التعريفية عن البحرين",
      countryTitle: "نهج متكامل للتوعية الصحية.",
      countryText:
        "تهدف هذه الصفحة إلى مساعدة الزائرات في البحرين على استكشاف المعلومات التثقيفية العامة والتعرف على الموارد المتاحة عبر منصتنا.",
      countryPoints: [
        "استكشاف موضوعات تثقيفية حول صحة المرأة.",
        "قراءة معلومات عامة عن الصحة الإنجابية.",
        "الوصول إلى موارد ومعلومات عملية للمريضات.",
        "التواصل معنا للاستفسارات العامة حول المنصة.",
      ],
      cityLabel: "البحرين",
      cityTitle: "بلد غني بالثقافة والتواصل.",
      cityText:
        "البحرين دولة جزيرية في الخليج العربي، تشتهر بتراثها الثقافي وحياتها الحضرية الحديثة ومجتمعاتها المتنوعة.",
      noteTitle: "ينبغي للمعلومات الصحية أن تعزز الوعي لا أن تحل محل الرعاية المهنية.",
      noteText:
        "قد تساعد الموارد التثقيفية عبر الإنترنت في زيادة الوعي، لكن الأسئلة الطبية الشخصية تتطلب توجيهاً فردياً من مختص رعاية صحية مؤهل.",
      ctaLabel: "تواصلي مع فريقنا",
      ctaTitle: "هل ترغبين في إرسال استفسار عام؟",
      ctaText:
        "تواصلي معنا للحصول على معلومات عامة عن عيادة سارة لصحة المرأة والموارد المتاحة عبر هذه المنصة. يرجى عدم مشاركة السجلات الطبية الخاصة أو المعلومات الصحية الحساسة عبر الاستفسارات العامة.",
      ctaButton: "استفسري عبر واتساب",
      disclaimerTitle: "معلومات مهمة",
      disclaimer:
        "يقدم هذا الموقع معلومات تثقيفية عامة فقط. ولا تُعد هذه المعلومات نصيحة طبية أو تشخيصاً أو علاجاً، كما أنها لا تؤكد توفر خدمات سريرية أو الحصول على تصريح لتقديمها في البحرين. وتخضع أي خدمات رعاية صحية، عند تقديمها، للقوانين المحلية المعمول بها ومتطلبات الترخيص المهني.",
      home: "الرئيسية",
      resources: "موارد المريضات",
    },
  },
};

function Bahrain() {
  const { i18n } = useTranslation();
  const isArabic = i18n.language?.startsWith("ar");
  const data = isArabic ? pageContent.en.arabic : pageContent.en;
  const whatsappLink = getWhatsAppLink("Bahrain");

  return (
    <div className={`swc-bahrain-page ${isArabic ? "rtl" : "ltr"}`}>
      <SEO
        title={
          isArabic
            ? "صحة المرأة في البحرين | معلومات وموارد تثقيفية"
            : "Women's Health Information in Bahrain | Sarah's Women's Clinic"
        }
        description={
          isArabic
            ? "استكشفي موارد ومعلومات تثقيفية عامة حول صحة المرأة والصحة الإنجابية والرفاهية في البحرين."
            : "Explore general women's health information, reproductive health education and wellbeing resources for visitors in Bahrain."
        }
        noindex={true}
      />

      <section
        className="swc-bahrain-hero"
        style={{ backgroundImage: `url(${images.hero})` }}
      >
        <div className="swc-bahrain-hero-overlay" />

        <div className="swc-bahrain-container swc-bahrain-hero-content">
          <div className="swc-bahrain-breadcrumb">
            <Link to="/">{data.home}</Link>
            <span>/</span>
            <span>{data.breadcrumb}</span>
          </div>

          <span className="swc-bahrain-eyebrow">
            <Sparkles size={15} />
            {data.eyebrow}
          </span>

          <h1>{data.title}</h1>
          <p>{data.description}</p>

          <div className="swc-bahrain-hero-actions">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="swc-bahrain-primary-button"
            >
              {data.primary}
              <ArrowUpRight size={18} />
            </a>

            <Link
              to="/patient-resources"
              className="swc-bahrain-secondary-button"
            >
              {data.secondary}
              <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="swc-bahrain-hero-note">
            <ShieldCheck size={17} />
            {data.heroNote}
          </div>
        </div>

        <div className="swc-bahrain-hero-side-label">BAHRAIN</div>
      </section>

      <section className="swc-bahrain-intro">
        <div className="swc-bahrain-container swc-bahrain-intro-grid">
          <div className="swc-bahrain-intro-image">
            <img src={images.city} alt="Bahrain city skyline" />
            <div className="swc-bahrain-image-caption">
              <MapPin size={17} />
              <span>Bahrain</span>
            </div>
          </div>

          <div className="swc-bahrain-intro-copy">
            <span className="swc-bahrain-section-label">
              {data.introLabel}
            </span>
            <h2>{data.introTitle}</h2>
            <p>{data.introText}</p>
            <p>{data.introExtra}</p>

            <div className="swc-bahrain-intro-signature">
              <Heart size={18} />
              <span>Sarah's Women's Clinic</span>
            </div>
          </div>
        </div>
      </section>

      <section className="swc-bahrain-topics">
        <div className="swc-bahrain-container">
          <div className="swc-bahrain-section-heading">
            <span className="swc-bahrain-section-label">
              {data.focusLabel}
            </span>
            <h2>{data.focusTitle}</h2>
            <p>{data.focusText}</p>
          </div>

          <div className="swc-bahrain-topic-grid">
            {data.topics.map((topic, index) => {
              const Icon = topic.icon;

              return (
                <article className="swc-bahrain-topic-card" key={topic.title}>
                  <Link
                    to={topic.link}
                    className="swc-bahrain-topic-image"
                  >
                    <img src={topic.image} alt="" loading="lazy" />
                    <span className="swc-bahrain-topic-index">
                      0{index + 1}
                    </span>
                    <span className="swc-bahrain-topic-arrow">
                      <ArrowUpRight size={19} />
                    </span>
                  </Link>

                  <div className="swc-bahrain-topic-content">
                    <span className="swc-bahrain-topic-icon">
                      <Icon size={21} />
                    </span>
                    <h3>{topic.title}</h3>
                    <p>{topic.text}</p>
                    <Link to={topic.link} className="swc-bahrain-topic-link">
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

      <section className="swc-bahrain-country">
        <div className="swc-bahrain-container swc-bahrain-country-grid">
          <div className="swc-bahrain-country-copy">
            <span className="swc-bahrain-section-label">
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
              className="swc-bahrain-country-link"
            >
              {data.secondary}
              <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="swc-bahrain-country-image">
            <img
              src={images.consultation}
              alt="Healthcare professional reviewing information"
              loading="lazy"
            />
            <div className="swc-bahrain-country-image-card">
              <Stethoscope size={23} />
              <span>Information • Awareness • Education</span>
            </div>
          </div>
        </div>
      </section>

      <section className="swc-bahrain-destination">
        <div
          className="swc-bahrain-destination-image"
          style={{ backgroundImage: `url(${images.city})` }}
        />
        <div className="swc-bahrain-destination-overlay" />
        <div className="swc-bahrain-container swc-bahrain-destination-content">
          <span className="swc-bahrain-section-label">{data.cityLabel}</span>
          <h2>{data.cityTitle}</h2>
          <p>{data.cityText}</p>
        </div>
      </section>

      <section className="swc-bahrain-note">
        <div className="swc-bahrain-container swc-bahrain-note-inner">
          <div className="swc-bahrain-note-icon">
            <ShieldCheck size={26} />
          </div>
          <div>
            <h2>{data.noteTitle}</h2>
            <p>{data.noteText}</p>
          </div>
        </div>
      </section>

      <section className="swc-bahrain-cta">
        <div className="swc-bahrain-container swc-bahrain-cta-inner">
          <div className="swc-bahrain-cta-icon">
            <MessageCircle size={27} />
          </div>

          <div className="swc-bahrain-cta-copy">
            <span className="swc-bahrain-section-label">
              {data.ctaLabel}
            </span>
            <h2>{data.ctaTitle}</h2>
            <p>{data.ctaText}</p>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="swc-bahrain-cta-button"
          >
            {data.ctaButton}
            <ArrowUpRight size={18} />
          </a>
        </div>
      </section>

      <section className="swc-bahrain-disclaimer">
        <div className="swc-bahrain-container">
          <div className="swc-bahrain-disclaimer-heading">
            <Stethoscope size={20} />
            <h2>{data.disclaimerTitle}</h2>
          </div>
          <p>{data.disclaimer}</p>
        </div>
      </section>
    </div>
  );
}

export default Bahrain;
