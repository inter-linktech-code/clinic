
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  ArrowUpRight,
  Heart,
  HeartPulse,
  BookOpen,
  ShieldCheck,
  Sparkles,
  Globe2,
  MessageCircle,
  Flower2,
  Sun,
  Users,
  ChevronRight,
} from "lucide-react";

import SEO from "../components/SEO";
import { getWhatsAppLink } from "../components/WhatsAppButton";

import "./Dubai.css";

const images = {
  hero: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=2200&q=90",
  introduction: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=85",
  wellbeing: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1000&q=85",
  education: "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1000&q=85",
  lifestyle: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1000&q=85",
  community: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=85",
};

const content = {
  en: {
    eyebrow: "DUBAI · UNITED ARAB EMIRATES",
    heroTitle: "Women's wellbeing deserves attention, care and understanding.",
    heroText:
      "Explore accessible educational information about women's health, reproductive wellbeing and informed choices, wherever life takes you.",
    heroButton: "Explore health topics",
    secondaryButton: "Make an enquiry",
    introEyebrow: "A PLACE TO BEGIN",
    introTitle: "Knowledge makes a difference.",
    introText:
      "Women's health is connected to every stage of life. Understanding the body, recognising changes and knowing where to find reliable information can help women make more informed decisions.",
    introNote:
      "Our platform brings together general educational information to support awareness and informed conversations.",
    focusEyebrow: "EXPLORE THE TOPICS",
    focusTitle: "Information for different stages of life.",
    focusText:
      "Explore key areas of women's wellbeing through clear, accessible educational content.",
    topics: [
      {
        number: "01",
        title: "Women's Health",
        description:
          "Explore general information about women's wellbeing, common health topics and the importance of routine health awareness.",
        link: "/womens-health",
        linkText: "Explore women's health",
        image: images.wellbeing,
        icon: "heart",
      },
      {
        number: "02",
        title: "Reproductive Health",
        description:
          "Learn about menstrual health, reproductive wellbeing, fertility awareness and the different stages of reproductive life.",
        link: "/reproductive-health",
        linkText: "Explore reproductive health",
        image: images.education,
        icon: "flower",
      },
      {
        number: "03",
        title: "Patient Resources",
        description:
          "Find general educational resources designed to help you prepare questions and have more informed health conversations.",
        link: "/patient-resources",
        linkText: "View patient resources",
        image: images.lifestyle,
        icon: "book",
      },
    ],
    cityEyebrow: "DUBAI & BEYOND",
    cityTitle: "Your wellbeing journey is personal.",
    cityText:
      "Dubai brings together people, cultures and lifestyles from around the world. Wherever you are based, reliable health information and thoughtful conversations can be valuable parts of looking after yourself.",
    cityNote:
      "This page provides general information for visitors interested in women's health topics in Dubai. It does not represent a local clinic, medical facility or confirmation of locally available clinical services.",
    valuesEyebrow: "OUR APPROACH",
    valuesTitle: "A thoughtful approach to health information.",
    values: [
      {
        title: "Education first",
        description:
          "We believe clear information can help people understand health topics and ask better questions.",
        icon: "book",
      },
      {
        title: "Respect and privacy",
        description:
          "Every enquiry should be approached with sensitivity, respect and appropriate care.",
        icon: "shield",
      },
      {
        title: "Informed conversations",
        description:
          "We encourage people to discuss personal health concerns with appropriately qualified professionals.",
        icon: "users",
      },
    ],
    bannerEyebrow: "TAKE THE NEXT STEP",
    bannerTitle: "Start with the information you need.",
    bannerText:
      "Explore our educational pages or contact us with a general enquiry about the information available on this platform.",
    bannerButton: "Send a general enquiry",
    disclaimerTitle: "Important information",
    disclaimer:
      "The content on this website is for general educational and informational purposes only. It is not medical advice, diagnosis or treatment. This website does not confirm the availability of clinical services in Dubai or elsewhere. Any medical care must be provided by appropriately qualified and locally authorised professionals in accordance with applicable laws. For personal medical concerns, consult a qualified healthcare professional.",
  },
  ar: {
    eyebrow: "دبي · الإمارات العربية المتحدة",
    heroTitle: "صحة المرأة ورفاهيتها تستحقان الاهتمام والرعاية والفهم.",
    heroText:
      "اكتشفي معلومات تثقيفية حول صحة المرأة والصحة الإنجابية والاختيارات الواعية أينما كنتِ.",
    heroButton: "استكشفي المواضيع الصحية",
    secondaryButton: "إرسال استفسار",
    introEyebrow: "بداية المعرفة",
    introTitle: "المعرفة تصنع الفرق.",
    introText:
      "ترتبط صحة المرأة بمراحل الحياة المختلفة. إن فهم الجسم وملاحظة التغيرات ومعرفة مصادر المعلومات الموثوقة يساعد على اتخاذ قرارات أكثر وعياً.",
    introNote:
      "تجمع منصتنا معلومات تثقيفية عامة لدعم الوعي والحوار الصحي.",
    focusEyebrow: "اكتشفي المواضيع",
    focusTitle: "معلومات لمراحل الحياة المختلفة.",
    focusText:
      "تعرّفي على مجالات مهمة من صحة المرأة من خلال محتوى تثقيفي واضح وسهل الوصول.",
    topics: [
      {
        number: "01",
        title: "صحة المرأة",
        description:
          "اكتشفي معلومات عامة حول صحة المرأة وموضوعات العناية بالصحة وأهمية الوعي الصحي.",
        link: "/womens-health",
        linkText: "اكتشفي صحة المرأة",
        image: images.wellbeing,
        icon: "heart",
      },
      {
        number: "02",
        title: "الصحة الإنجابية",
        description:
          "تعرّفي على صحة الدورة الشهرية والصحة الإنجابية والوعي بالخصوبة ومراحل الحياة الإنجابية.",
        link: "/reproductive-health",
        linkText: "اكتشفي الصحة الإنجابية",
        image: images.education,
        icon: "flower",
      },
      {
        number: "03",
        title: "موارد المراجعات",
        description:
          "اطّلعي على موارد تثقيفية عامة تساعدك على الاستعداد للأسئلة والمحادثات الصحية.",
        link: "/patient-resources",
        linkText: "عرض الموارد",
        image: images.lifestyle,
        icon: "book",
      },
    ],
    cityEyebrow: "دبي وما حولها",
    cityTitle: "رحلة العناية بصحتك رحلة شخصية.",
    cityText:
      "تجمع دبي أشخاصاً وثقافات وأنماط حياة متنوعة من مختلف أنحاء العالم. أينما كنتِ، يمكن أن تكون المعلومات الصحية الموثوقة والحوار الواعي جزءاً مهماً من الاهتمام بنفسك.",
    cityNote:
      "تقدم هذه الصفحة معلومات تثقيفية عامة للمهتمات بموضوعات صحة المرأة في دبي. ولا تمثل عيادة محلية أو منشأة طبية، ولا تؤكد توفر خدمات طبية في المنطقة.",
    valuesEyebrow: "نهجنا",
    valuesTitle: "نهج مدروس للمعلومات الصحية.",
    values: [
      {
        title: "التثقيف أولاً",
        description:
          "نؤمن بأن المعلومات الواضحة تساعد على فهم الموضوعات الصحية وطرح الأسئلة المناسبة.",
        icon: "book",
      },
      {
        title: "الاحترام والخصوصية",
        description:
          "ينبغي التعامل مع كل استفسار بحساسية واحترام وعناية مناسبة.",
        icon: "shield",
      },
      {
        title: "حوارات واعية",
        description:
          "نشجع على مناقشة المخاوف الصحية الشخصية مع مختصين مؤهلين بشكل مناسب.",
        icon: "users",
      },
    ],
    bannerEyebrow: "خطوتك التالية",
    bannerTitle: "ابدئي بالمعلومات التي تحتاجين إليها.",
    bannerText:
      "استكشفي صفحاتنا التثقيفية أو تواصلي معنا للاستفسار بشكل عام عن المعلومات المتاحة على هذه المنصة.",
    bannerButton: "إرسال استفسار عام",
    disclaimerTitle: "معلومات مهمة",
    disclaimer:
      "محتوى هذا الموقع مخصص للأغراض التثقيفية والمعلوماتية العامة فقط، ولا يشكل نصيحة طبية أو تشخيصاً أو علاجاً. لا يؤكد هذا الموقع توفر خدمات طبية في دبي أو في أي مكان آخر. يجب تقديم أي رعاية طبية من قبل مختصين مؤهلين ومرخص لهم محلياً وفقاً للقوانين المعمول بها. للاستفسارات الطبية الشخصية، يرجى استشارة مختص صحي مؤهل.",
  },
};

function TopicIcon({ type }) {
  if (type === "heart") return <HeartPulse size={22} />;
  if (type === "flower") return <Flower2 size={22} />;
  return <BookOpen size={22} />;
}

function ValueIcon({ type }) {
  if (type === "shield") return <ShieldCheck size={23} />;
  if (type === "users") return <Users size={23} />;
  return <BookOpen size={23} />;
}

export default function Dubai() {
  const { i18n } = useTranslation();
  const isArabic = i18n.language?.startsWith("ar");
  const data = isArabic ? content.ar : content.en;
  const whatsappLink = getWhatsAppLink("Dubai");

  return (
    <div className={`swc-dubai-page ${isArabic ? "rtl" : "ltr"}`}>
      <SEO
        title={
          isArabic
            ? "صحة المرأة في دبي | معلومات وموارد تثقيفية"
            : "Women's Health in Dubai | Educational Information & Resources"
        }
        description={
          isArabic
            ? "اكتشفي معلومات تثقيفية عامة حول صحة المرأة والصحة الإنجابية والرفاهية في دبي."
            : "Explore general educational information about women's health, reproductive wellbeing and patient resources for women in Dubai."
        }
        noindex={true}
      />

      <section className="swc-dubai-hero">
        <div
          className="swc-dubai-hero-image"
          style={{ backgroundImage: `url(${images.hero})` }}
        />
        <div className="swc-dubai-hero-overlay" />

        <div className="swc-dubai-container swc-dubai-hero-content">
          <span className="swc-dubai-eyebrow swc-dubai-hero-eyebrow">
            <span />
            {data.eyebrow}
          </span>

          <h1>{data.heroTitle}</h1>
          <p>{data.heroText}</p>

          <div className="swc-dubai-hero-actions">
            <a href="#dubai-topics" className="swc-dubai-button swc-dubai-button-light">
              {data.heroButton}
              <ArrowUpRight size={18} />
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="swc-dubai-text-link"
            >
              <MessageCircle size={18} />
              {data.secondaryButton}
            </a>
          </div>
        </div>

        <div className="swc-dubai-hero-caption">
          <span>SWC</span>
          <span>WELLBEING · KNOWLEDGE · AWARENESS</span>
        </div>
      </section>

      <section className="swc-dubai-intro">
        <div className="swc-dubai-container swc-dubai-intro-grid">
          <div className="swc-dubai-intro-image-wrap">
            <img src={images.introduction} alt="A woman spending time with her family" />
            <div className="swc-dubai-image-caption">
              <Heart size={17} />
              <span>Care begins with understanding</span>
            </div>
          </div>

          <div className="swc-dubai-intro-copy">
            <span className="swc-dubai-eyebrow">{data.introEyebrow}</span>
            <h2>{data.introTitle}</h2>
            <p>{data.introText}</p>

            <div className="swc-dubai-intro-note">
              <Sparkles size={21} />
              <span>{data.introNote}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="swc-dubai-topics" id="dubai-topics">
        <div className="swc-dubai-container">
          <div className="swc-dubai-section-heading">
            <div>
              <span className="swc-dubai-eyebrow">{data.focusEyebrow}</span>
              <h2>{data.focusTitle}</h2>
            </div>
            <p>{data.focusText}</p>
          </div>

          <div className="swc-dubai-topic-grid">
            {data.topics.map((topic) => (
              <article className="swc-dubai-topic-card" key={topic.number}>
                <div className="swc-dubai-topic-image">
                  <img src={topic.image} alt={topic.title} loading="lazy" />
                  <span className="swc-dubai-topic-number">{topic.number}</span>
                </div>

                <div className="swc-dubai-topic-content">
                  <div className="swc-dubai-topic-icon">
                    <TopicIcon type={topic.icon} />
                  </div>
                  <h3>{topic.title}</h3>
                  <p>{topic.description}</p>
                  <Link to={topic.link} className="swc-dubai-card-link">
                    {topic.linkText}
                    <ArrowUpRight size={17} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="swc-dubai-city">
        <div className="swc-dubai-container swc-dubai-city-grid">
          <div className="swc-dubai-city-copy">
            <span className="swc-dubai-eyebrow">{data.cityEyebrow}</span>
            <h2>{data.cityTitle}</h2>
            <p>{data.cityText}</p>

            <div className="swc-dubai-city-note">
              <Globe2 size={22} />
              <span>{data.cityNote}</span>
            </div>
          </div>

          <div className="swc-dubai-city-image">
            <img src={images.community} alt="People enjoying time together outdoors" loading="lazy" />
            <div className="swc-dubai-city-image-label">
              <Sun size={19} />
              <span>Every woman. Every stage. Every story.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="swc-dubai-values">
        <div className="swc-dubai-container">
          <div className="swc-dubai-values-heading">
            <span className="swc-dubai-eyebrow">{data.valuesEyebrow}</span>
            <h2>{data.valuesTitle}</h2>
          </div>

          <div className="swc-dubai-values-grid">
            {data.values.map((value, index) => (
              <article className="swc-dubai-value-card" key={value.title}>
                <span className="swc-dubai-value-number">0{index + 1}</span>
                <div className="swc-dubai-value-icon">
                  <ValueIcon type={value.icon} />
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="swc-dubai-cta">
        <div className="swc-dubai-cta-image" />
        <div className="swc-dubai-cta-overlay" />
        <div className="swc-dubai-container swc-dubai-cta-content">
          <span className="swc-dubai-eyebrow">{data.bannerEyebrow}</span>
          <h2>{data.bannerTitle}</h2>
          <p>{data.bannerText}</p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="swc-dubai-button swc-dubai-button-light"
          >
            <MessageCircle size={18} />
            {data.bannerButton}
            <ChevronRight size={18} />
          </a>
        </div>
      </section>

      <section className="swc-dubai-disclaimer">
        <div className="swc-dubai-container swc-dubai-disclaimer-inner">
          <div className="swc-dubai-disclaimer-icon">
            <ShieldCheck size={23} />
          </div>
          <div>
            <h2>{data.disclaimerTitle}</h2>
            <p>{data.disclaimer}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
