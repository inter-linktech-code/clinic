
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
  Users,
  Sun,
  ChevronRight,
} from "lucide-react";

import SEO from "../components/SEO";
import { getWhatsAppLink } from "../components/WhatsAppButton";

import "./Qatar.css";

const images = {
  hero: "https://images.unsplash.com/photo-1578895101408-1a36b834405b?auto=format&fit=crop&w=2200&q=90",
  intro: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=1200&q=85",
  wellbeing: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=85",
  reproductive: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1000&q=85",
  resources: "https://images.unsplash.com/photo-1455390582262-044cdeepa8?auto=format&fit=crop&w=1000&q=85",
  community: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=85",
};

const content = {
  en: {
    eyebrow: "QATAR · MIDDLE EAST",
    heroTitle: "Supporting informed choices through women's health education.",
    heroText:
      "Discover general educational information about women's wellbeing, reproductive health and the importance of informed health conversations.",
    explore: "Explore health topics",
    enquire: "Make a general enquiry",
    introEyebrow: "WELCOME",
    introTitle: "Understanding your health is an important first step.",
    introText:
      "Every woman's health journey is different. Access to understandable information can help women recognise health questions, learn about their bodies and prepare for conversations with qualified healthcare professionals.",
    introNote:
      "Sarah's Women's Clinic provides an online educational information platform. Explore the topics and resources available across our website.",
    topicsEyebrow: "LEARN & EXPLORE",
    topicsTitle: "Explore women's health topics.",
    topicsText:
      "Browse educational information covering different aspects of women's health and wellbeing.",
    topics: [
      {
        number: "01",
        title: "Women's Health",
        description:
          "Explore general information about women's wellbeing, common health concerns and health awareness throughout life.",
        link: "/womens-health",
        linkText: "Discover women's health",
        image: images.wellbeing,
        icon: "heart",
      },
      {
        number: "02",
        title: "Reproductive Health",
        description:
          "Learn about menstrual health, reproductive wellbeing, fertility awareness and important life stages.",
        link: "/reproductive-health",
        linkText: "Explore reproductive health",
        image: images.reproductive,
        icon: "flower",
      },
      {
        number: "03",
        title: "Patient Resources",
        description:
          "Explore general educational resources to help you prepare questions and take part in informed health discussions.",
        link: "/patient-resources",
        linkText: "Browse patient resources",
        image: images.resources,
        icon: "book",
      },
    ],
    qatarEyebrow: "INFORMATION FOR QATAR",
    qatarTitle: "Health awareness belongs in every community.",
    qatarText:
      "Qatar is home to people from many backgrounds and cultures. Clear, respectful health information can help women feel more prepared to understand health topics and seek appropriate professional guidance when needed.",
    qatarNote:
      "This page is an educational resource for people interested in women's health topics in Qatar. It does not represent a local clinic or confirm the availability of medical or clinical services in Qatar.",
    valuesEyebrow: "WHAT MATTERS TO US",
    valuesTitle: "Information shared with care and responsibility.",
    values: [
      {
        title: "Clear education",
        description:
          "We aim to make general health information approachable, understandable and useful.",
        icon: "book",
      },
      {
        title: "Respectful communication",
        description:
          "We believe health conversations should be handled with dignity, sensitivity and respect.",
        icon: "shield",
      },
      {
        title: "Professional guidance",
        description:
          "Personal medical questions should be discussed with appropriately qualified healthcare professionals.",
        icon: "users",
      },
    ],
    ctaEyebrow: "CONTINUE YOUR JOURNEY",
    ctaTitle: "Explore. Understand. Make informed choices.",
    ctaText:
      "Visit our educational pages or send us a general enquiry about the information available through this website.",
    ctaButton: "Contact us on WhatsApp",
    disclaimerTitle: "Medical and legal information",
    disclaimer:
      "All information on this website is provided for general educational purposes only. It is not medical advice, diagnosis or treatment. This website does not confirm that clinical services are available in Qatar or any other location. Any medical care must be provided by appropriately qualified and locally authorised professionals in accordance with applicable laws. Consult a qualified healthcare professional about personal medical concerns.",
  },
  ar: {
    eyebrow: "قطر · الشرق الأوسط",
    heroTitle: "دعم الخيارات الواعية من خلال التثقيف حول صحة المرأة.",
    heroText:
      "اكتشفي معلومات تثقيفية عامة حول صحة المرأة والصحة الإنجابية وأهمية الحوار الصحي الواعي.",
    explore: "استكشفي المواضيع الصحية",
    enquire: "إرسال استفسار عام",
    introEyebrow: "مرحباً بكِ",
    introTitle: "فهم صحتك خطوة مهمة نحو العناية بنفسك.",
    introText:
      "تختلف رحلة الصحة من امرأة إلى أخرى. ويمكن للمعلومات الواضحة أن تساعد المرأة على فهم جسمها والتعرف على الموضوعات الصحية والاستعداد للحوار مع المختصين الصحيين المؤهلين.",
    introNote:
      "تقدم عيادة سارة للمرأة منصة إلكترونية للمعلومات التثقيفية. استكشفي الموضوعات والموارد المتاحة عبر موقعنا.",
    topicsEyebrow: "تعلّمي واكتشفي",
    topicsTitle: "استكشفي موضوعات صحة المرأة.",
    topicsText:
      "تصفحي معلومات تثقيفية تتناول جوانب مختلفة من صحة المرأة ورفاهيتها.",
    topics: [
      {
        number: "01",
        title: "صحة المرأة",
        description:
          "اكتشفي معلومات عامة حول صحة المرأة والمخاوف الصحية الشائعة والوعي الصحي خلال مراحل الحياة.",
        link: "/womens-health",
        linkText: "اكتشفي صحة المرأة",
        image: images.wellbeing,
        icon: "heart",
      },
      {
        number: "02",
        title: "الصحة الإنجابية",
        description:
          "تعرّفي على صحة الدورة الشهرية والصحة الإنجابية والوعي بالخصوبة ومراحل الحياة المهمة.",
        link: "/reproductive-health",
        linkText: "استكشفي الصحة الإنجابية",
        image: images.reproductive,
        icon: "flower",
      },
      {
        number: "03",
        title: "موارد المراجعات",
        description:
          "اطّلعي على موارد تثقيفية عامة تساعدك على إعداد الأسئلة والمشاركة في نقاشات صحية واعية.",
        link: "/patient-resources",
        linkText: "تصفحي الموارد",
        image: images.resources,
        icon: "book",
      },
    ],
    qatarEyebrow: "معلومات للمهتمات في قطر",
    qatarTitle: "الوعي الصحي مهم في كل مجتمع.",
    qatarText:
      "تضم قطر أشخاصاً من خلفيات وثقافات متعددة. ويمكن للمعلومات الصحية الواضحة والمحترمة أن تساعد المرأة على فهم الموضوعات الصحية والاستعداد لطلب التوجيه المهني المناسب عند الحاجة.",
    qatarNote:
      "هذه الصفحة مورد تثقيفي للمهتمات بموضوعات صحة المرأة في قطر. ولا تمثل عيادة محلية ولا تؤكد توفر خدمات طبية أو سريرية في قطر.",
    valuesEyebrow: "ما يهمنا",
    valuesTitle: "معلومات تُقدّم بعناية ومسؤولية.",
    values: [
      {
        title: "تثقيف واضح",
        description:
          "نسعى إلى تقديم معلومات صحية عامة بأسلوب واضح وسهل الفهم ومفيد.",
        icon: "book",
      },
      {
        title: "تواصل باحترام",
        description:
          "نؤمن بأن النقاشات الصحية يجب أن تتم بكرامة وحساسية واحترام.",
        icon: "shield",
      },
      {
        title: "توجيه مهني",
        description:
          "ينبغي مناقشة الأسئلة الطبية الشخصية مع مختصين صحيين مؤهلين بشكل مناسب.",
        icon: "users",
      },
    ],
    ctaEyebrow: "واصلي رحلتك",
    ctaTitle: "اكتشفي. افهمي. اتخذي قرارات واعية.",
    ctaText:
      "زوري صفحاتنا التثقيفية أو أرسلي إلينا استفساراً عاماً حول المعلومات المتاحة عبر هذا الموقع.",
    ctaButton: "تواصلي معنا عبر واتساب",
    disclaimerTitle: "معلومات طبية وقانونية",
    disclaimer:
      "جميع المعلومات على هذا الموقع مقدمة لأغراض تثقيفية عامة فقط، ولا تشكل نصيحة طبية أو تشخيصاً أو علاجاً. لا يؤكد هذا الموقع توفر خدمات سريرية في قطر أو أي موقع آخر. يجب تقديم أي رعاية طبية من قبل مختصين مؤهلين ومرخص لهم محلياً وفقاً للقوانين المعمول بها. يرجى استشارة مختص صحي مؤهل بشأن المخاوف الطبية الشخصية.",
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

export default function Qatar() {
  const { i18n } = useTranslation();
  const isArabic = i18n.language?.startsWith("ar");
  const data = isArabic ? content.ar : content.en;
  const whatsappLink = getWhatsAppLink("Qatar");

  return (
    <div className={`swc-qatar-page ${isArabic ? "rtl" : "ltr"}`}>
      <SEO
        title={
          isArabic
            ? "صحة المرأة في قطر | معلومات تثقيفية وموارد"
            : "Women's Health in Qatar | Educational Information & Resources"
        }
        description={
          isArabic
            ? "اكتشفي معلومات تثقيفية عامة حول صحة المرأة والصحة الإنجابية والوعي الصحي في قطر."
            : "Explore general educational information about women's health, reproductive wellbeing and health awareness in Qatar."
        }
        noindex={true}
      />

      <section className="swc-qatar-hero">
        <div
          className="swc-qatar-hero-image"
          style={{ backgroundImage: `url(${images.hero})` }}
        />
        <div className="swc-qatar-hero-shade" />

        <div className="swc-qatar-container swc-qatar-hero-content">
          <span className="swc-qatar-eyebrow">
            <span />
            {data.eyebrow}
          </span>

          <h1>{data.heroTitle}</h1>
          <p>{data.heroText}</p>

          <div className="swc-qatar-hero-actions">
            <a href="#qatar-topics" className="swc-qatar-button swc-qatar-button-light">
              {data.explore}
              <ArrowUpRight size={18} />
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="swc-qatar-hero-link"
            >
              <MessageCircle size={18} />
              {data.enquire}
            </a>
          </div>
        </div>

        <div className="swc-qatar-hero-bottom">
          <span>SWC</span>
          <span>WOMEN'S WELLBEING · KNOWLEDGE · AWARENESS</span>
        </div>
      </section>

      <section className="swc-qatar-intro">
        <div className="swc-qatar-container swc-qatar-intro-grid">
          <div className="swc-qatar-intro-copy">
            <span className="swc-qatar-eyebrow">{data.introEyebrow}</span>
            <h2>{data.introTitle}</h2>
            <p>{data.introText}</p>

            <div className="swc-qatar-intro-note">
              <Sparkles size={22} />
              <span>{data.introNote}</span>
            </div>
          </div>

          <div className="swc-qatar-intro-visual">
            <div className="swc-qatar-intro-frame">
              <img
                src={images.intro}
                alt="Portrait representing women's confidence and wellbeing"
                loading="lazy"
              />
            </div>
            <div className="swc-qatar-intro-stamp">
              <Heart size={20} />
              <span>Knowledge is empowering</span>
            </div>
          </div>
        </div>
      </section>

      <section className="swc-qatar-topics" id="qatar-topics">
        <div className="swc-qatar-container">
          <div className="swc-qatar-heading">
            <div>
              <span className="swc-qatar-eyebrow">{data.topicsEyebrow}</span>
              <h2>{data.topicsTitle}</h2>
            </div>
            <p>{data.topicsText}</p>
          </div>

          <div className="swc-qatar-topic-grid">
            {data.topics.map((topic) => (
              <article className="swc-qatar-topic-card" key={topic.number}>
                <div className="swc-qatar-topic-photo">
                  <img src={topic.image} alt={topic.title} loading="lazy" />
                  <span>{topic.number}</span>
                </div>

                <div className="swc-qatar-topic-body">
                  <div className="swc-qatar-topic-icon">
                    <TopicIcon type={topic.icon} />
                  </div>
                  <h3>{topic.title}</h3>
                  <p>{topic.description}</p>
                  <Link to={topic.link} className="swc-qatar-topic-link">
                    {topic.linkText}
                    <ArrowUpRight size={17} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="swc-qatar-community">
        <div className="swc-qatar-container swc-qatar-community-grid">
          <div className="swc-qatar-community-image">
            <img
              src={images.community}
              alt="A group of women sharing time together"
              loading="lazy"
            />
            <div className="swc-qatar-image-tag">
              <Sun size={19} />
              <span>Every woman deserves to be heard</span>
            </div>
          </div>

          <div className="swc-qatar-community-copy">
            <span className="swc-qatar-eyebrow">{data.qatarEyebrow}</span>
            <h2>{data.qatarTitle}</h2>
            <p>{data.qatarText}</p>

            <div className="swc-qatar-local-note">
              <Globe2 size={22} />
              <span>{data.qatarNote}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="swc-qatar-values">
        <div className="swc-qatar-container">
          <div className="swc-qatar-values-heading">
            <span className="swc-qatar-eyebrow">{data.valuesEyebrow}</span>
            <h2>{data.valuesTitle}</h2>
          </div>

          <div className="swc-qatar-values-grid">
            {data.values.map((value, index) => (
              <article className="swc-qatar-value-card" key={value.title}>
                <span className="swc-qatar-value-index">0{index + 1}</span>
                <div className="swc-qatar-value-icon">
                  <ValueIcon type={value.icon} />
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="swc-qatar-cta">
        <div className="swc-qatar-cta-background" />
        <div className="swc-qatar-cta-overlay" />

        <div className="swc-qatar-container swc-qatar-cta-content">
          <span className="swc-qatar-eyebrow">{data.ctaEyebrow}</span>
          <h2>{data.ctaTitle}</h2>
          <p>{data.ctaText}</p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="swc-qatar-button swc-qatar-button-light"
          >
            <MessageCircle size={18} />
            {data.ctaButton}
            <ChevronRight size={18} />
          </a>
        </div>
      </section>

      <section className="swc-qatar-disclaimer">
        <div className="swc-qatar-container swc-qatar-disclaimer-inner">
          <div className="swc-qatar-disclaimer-icon">
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
