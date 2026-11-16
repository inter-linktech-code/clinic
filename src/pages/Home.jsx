
import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  ArrowRight,
  ArrowUpRight,
  Heart,
  ShieldCheck,
  BookOpen,
  Globe2,
  MessageCircle,
  Sparkles,
  LockKeyhole,
  GraduationCap,
  Pill,
  Stethoscope,
  ClipboardList,
} from "lucide-react";

import SEO from "../components/SEO";
import "./Home.css";

const WHATSAPP_NUMBER = "27730423979";

const healthItems = [
  {
    id: "cytotec",
    name: "Cytotec 200 μg",
    arabicName: "سايتوتيك 200 ميكروغرام",
    category: "Clinical Use",
    arabicCategory: "استخدام طبي",
    status: "Clinical review required",
    arabicStatus: "يتطلب مراجعة طبية",
    description:
      "Medical information and enquiries concerning Cytotec. Any clinical use requires assessment and supervision by an appropriately qualified healthcare professional.",
    arabicDescription:
      "معلومات واستفسارات طبية حول سايتوتيك. يتطلب أي استخدام سريري تقييماً وإشرافاً من مختص رعاية صحية مؤهل.",
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=900&q=85",
    alt: "Medical tablets arranged in a clinical setting",
  },
  {
    id: "misoprostol",
    name: "Misoprostol Tablets",
    arabicName: "أقراص ميزوبروستول",
    category: "Prescription required",
    arabicCategory: "يتطلب وصفة طبية",
    status: "Professional assessment required",
    arabicStatus: "يتطلب تقييماً متخصصاً",
    description:
      "General information about misoprostol and its regulated medical use. Prescription decisions and clinical suitability must be determined by a qualified professional.",
    arabicDescription:
      "معلومات عامة حول الميزوبروستول واستخدامه الطبي المنظم. يحدد المختص المؤهل مدى ملاءمته والحاجة إلى وصفة طبية.",
    image:
      "https://images.unsplash.com/photo-1576075796778-4b3f7f4c8c8b?auto=format&fit=crop&w=900&q=85",
    alt: "Healthcare professional preparing medical supplies",
  },
  {
    id: "mifegest",
    name: "Mifegest Clinical Kit",
    arabicName: "مجموعة ميفيجست الطبية",
    category: "Doctor approval required",
    arabicCategory: "يتطلب موافقة الطبيب",
    status: "Medical supervision required",
    arabicStatus: "يتطلب إشرافاً طبياً",
    description:
      "Information and enquiries about mifepristone-based clinical protocols. Use and suitability require individual professional assessment and appropriate medical supervision.",
    arabicDescription:
      "معلومات واستفسارات حول البروتوكولات الطبية القائمة على الميفيبريستون. يتطلب الاستخدام والملاءمة تقييماً فردياً وإشرافاً طبياً مناسباً.",
    image:
      "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=900&q=85",
    alt: "Clinical healthcare supplies",
  },
  {
    id: "pregnancy-test",
    name: "Medical Pregnancy Test Kit",
    arabicName: "اختبار الحمل الطبي",
    category: "Health information",
    arabicCategory: "معلومات صحية",
    status: "Enquiries welcome",
    arabicStatus: "الاستفسارات متاحة",
    description:
      "General information about pregnancy testing, understanding results and when to seek further professional advice.",
    arabicDescription:
      "معلومات عامة حول اختبارات الحمل وفهم النتائج ومتى ينبغي طلب المشورة الطبية المتخصصة.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=85",
    alt: "Healthcare consultation",
  },
  {
    id: "ultrasound",
    name: "Ultrasound Consultation",
    arabicName: "استشارة الموجات فوق الصوتية",
    category: "Appointment enquiry",
    arabicCategory: "استفسار عن موعد",
    status: "Appointment information",
    arabicStatus: "معلومات المواعيد",
    description:
      "Enquiries about ultrasound consultations, appointment arrangements and appropriate professional guidance.",
    arabicDescription:
      "استفسارات حول استشارات الموجات فوق الصوتية وترتيب المواعيد والإرشادات المهنية المناسبة.",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=85",
    alt: "Medical imaging consultation",
  },
  {
    id: "hormonal-contraception",
    name: "Hormonal Contraception",
    arabicName: "وسائل منع الحمل الهرمونية",
    category: "Consultation required",
    arabicCategory: "تتطلب استشارة",
    status: "Professional review",
    arabicStatus: "مراجعة متخصصة",
    description:
      "Information about hormonal contraception options and the importance of choosing a suitable method with qualified professional guidance.",
    arabicDescription:
      "معلومات حول خيارات منع الحمل الهرمونية وأهمية اختيار الوسيلة المناسبة بإرشاد متخصص مؤهل.",
    image:
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=900&q=85",
    alt: "Women's healthcare professional",
  },
  {
    id: "emergency-contraception",
    name: "Emergency Contraception",
    arabicName: "وسائل منع الحمل الطارئة",
    category: "Time-sensitive information",
    arabicCategory: "معلومات مرتبطة بالوقت",
    status: "Seek timely professional advice",
    arabicStatus: "اطلبي المشورة الطبية في الوقت المناسب",
    description:
      "Information about emergency contraception, time-sensitive considerations and where to seek appropriate professional advice.",
    arabicDescription:
      "معلومات حول منع الحمل الطارئ والاعتبارات المرتبطة بالوقت وأماكن طلب المشورة الطبية المناسبة.",
    image:
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=900&q=85",
    alt: "Private healthcare consultation",
  },
  {
    id: "online-doctor",
    name: "Online Doctor Consultation",
    arabicName: "استشارة طبيب عبر الإنترنت",
    category: "Consultation information",
    arabicCategory: "معلومات الاستشارات",
    status: "Enquire about arrangements",
    arabicStatus: "استفسري عن الترتيبات",
    description:
      "Information about remote healthcare consultations and how to enquire about professional support. Availability and eligibility must be confirmed.",
    arabicDescription:
      "معلومات حول الاستشارات الصحية عن بُعد وكيفية الاستفسار عن الدعم المهني. يجب تأكيد التوافر والأهلية.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=85",
    alt: "Doctor providing an online consultation",
  },
  {
    id: "wellness",
    name: "Women Wellness Consultation",
    arabicName: "استشارة صحة المرأة والعافية",
    category: "Women's wellbeing",
    arabicCategory: "صحة المرأة والعافية",
    status: "Consultation enquiry",
    arabicStatus: "استفسار عن استشارة",
    description:
      "Women-centred information and enquiries about wellbeing, preventive care and appropriate healthcare guidance.",
    arabicDescription:
      "معلومات واستفسارات تتمحور حول صحة المرأة والعناية الوقائية والإرشادات الصحية المناسبة.",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=900&q=85",
    alt: "Women's wellness and wellbeing",
  },
  {
    id: "clinical-support",
    name: "Clinical Support Session",
    arabicName: "جلسة دعم سريري",
    category: "Professional support",
    arabicCategory: "دعم متخصص",
    status: "Enquiry information",
    arabicStatus: "معلومات الاستفسار",
    description:
      "Information about professional support, follow-up enquiries and guidance through appropriate healthcare channels.",
    arabicDescription:
      "معلومات حول الدعم المتخصص واستفسارات المتابعة والإرشاد عبر قنوات الرعاية الصحية المناسبة.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=85",
    alt: "Healthcare professional discussing patient care",
  },
];

function Home() {
  const { t, i18n } = useTranslation();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const isArabic = i18n.language === "ar";

  const handleSubmit = (event) => {
    event.preventDefault();

    const message = [
      "General website enquiry",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Message: ${form.message}`,
    ].join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const internationalMarkets = [
    { key: "bahrain", code: "BH", number: "01" },
    { key: "uae", code: "AE", number: "02" },
    { key: "dubai", code: "DXB", number: "03" },
    { key: "qatar", code: "QA", number: "04" },
  ];

  return (
    <div className={`swc-site ${isArabic ? "rtl" : "ltr"}`}>
      <SEO
        title={
          isArabic
            ? "عيادة سارة لصحة المرأة | معلومات صحة المرأة"
            : "Sarah's Women's Clinic | Women's Health & Reproductive Health Information"
        }
        description={
          isArabic
            ? "اكتشفي معلومات تثقيفية حول صحة المرأة والصحة الإنجابية وخيارات الرعاية الصحية."
            : "Explore educational information about women's health, reproductive wellbeing, contraception and healthcare enquiries."
        }
        noindex={true}
      />

      <div className="swc-announcement">
        <span className="swc-announcement-dot"></span>
        <span>{t("hero.note")}</span>
      </div>

      <main>
        {/* HERO */}
        <section className="swc-hero" id="home">
          <div className="swc-hero-background-shape"></div>

          <div className="swc-container swc-hero-layout">
            <div className="swc-hero-content">
              <div className="swc-eyebrow">
                <span className="swc-eyebrow-line"></span>
                {t("hero.eyebrow")}
              </div>

              <h1>
                {t("hero.heading")}
                <span>{t("hero.highlight")}</span>
              </h1>

              <p className="swc-hero-description">
                {t("hero.description")}
              </p>

              <div className="swc-hero-actions">
                <a
                  href="#resources"
                  className="swc-button swc-button-primary"
                >
                  {t("hero.primary")}
                  <ArrowUpRight size={18} />
                </a>

                <a
                  href="#contact"
                  className="swc-button swc-button-outline"
                >
                  {t("hero.secondary")}
                </a>
              </div>

              <div className="swc-hero-trust">
                <div className="swc-trust-icon">
                  <ShieldCheck size={21} />
                </div>

                <div>
                  <strong>{t("values.privacy")}</strong>
                  <span>{t("hero.note")}</span>
                </div>
              </div>
            </div>

            <div className="swc-hero-visual">
              <div className="swc-hero-orbit swc-orbit-one"></div>
              <div className="swc-hero-orbit swc-orbit-two"></div>

              <div className="swc-hero-artwork">
                <div className="swc-artwork-top">
                  <Sparkles size={22} />
                  <span>WELLNESS & UNDERSTANDING</span>
                </div>

                <div className="swc-artwork-main">
                  <div className="swc-artwork-flower">
                    <Heart size={72} strokeWidth={0.8} />
                  </div>

                  <span className="swc-artwork-script">Her health.</span>

                  <h2>
                    Her dignity.
                    <br />
                    Her wellbeing.
                  </h2>

                  <div className="swc-artwork-divider"></div>

                  <p>
                    A more thoughtful perspective on women's health.
                  </p>
                </div>

                <div className="swc-artwork-bottom">
                  <span>01 — SARAH'S WOMEN'S CLINIC</span>
                  <span>EST. ONLINE PLATFORM</span>
                </div>
              </div>

              <div className="swc-floating-card swc-floating-top">
                <Heart size={19} />
                <span>Respect & dignity</span>
              </div>

              <div className="swc-floating-card swc-floating-bottom">
                <BookOpen size={19} />
                <span>Knowledge & awareness</span>
              </div>
            </div>
          </div>

          <div className="swc-hero-bottom">
            <span>01</span>
            <div></div>
            <span>02</span>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="swc-introduction" id="about">
          <div className="swc-container swc-intro-layout">
            <div className="swc-intro-label">
              <span className="swc-eyebrow-line"></span>
              {t("intro.eyebrow")}
            </div>

            <div className="swc-intro-content">
              <h2>{t("intro.heading")}</h2>
              <p>{t("intro.description")}</p>

              <a href="#values" className="swc-text-link">
                {t("intro.link")}
                <ArrowRight size={18} />
              </a>
            </div>

            <div className="swc-intro-decoration">
              <span>W</span>
              <div></div>
              <small>WOMEN · WELLNESS · WISDOM</small>
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section className="swc-values-section" id="values">
          <div className="swc-container">
            <div className="swc-section-heading">
              <div className="swc-eyebrow">
                <span className="swc-eyebrow-line"></span>
                {t("values.eyebrow")}
              </div>

              <h2>{t("values.heading")}</h2>
            </div>

            <div className="swc-values-grid">
              <article className="swc-value-card">
                <div className="swc-value-icon">
                  <LockKeyhole size={26} />
                </div>
                <span className="swc-card-number">01</span>
                <h3>{t("values.privacy")}</h3>
                <p>{t("values.privacyText")}</p>
              </article>

              <article className="swc-value-card">
                <div className="swc-value-icon">
                  <GraduationCap size={28} />
                </div>
                <span className="swc-card-number">02</span>
                <h3>{t("values.education")}</h3>
                <p>{t("values.educationText")}</p>
              </article>

              <article className="swc-value-card">
                <div className="swc-value-icon">
                  <Heart size={27} />
                </div>
                <span className="swc-card-number">03</span>
                <h3>{t("values.compassion")}</h3>
                <p>{t("values.compassionText")}</p>
              </article>
            </div>
          </div>
        </section>

        {/* HEALTH INFORMATION */}
        <section className="swc-resources-section" id="health">
          <div className="swc-container">
            <div className="swc-resources-heading" id="resources">
              <div>
                <div className="swc-eyebrow">
                  <span className="swc-eyebrow-line"></span>
                  {t("resources.eyebrow")}
                </div>

                <h2>{t("resources.heading")}</h2>
              </div>

              <p>{t("resources.description")}</p>
            </div>

            <div className="swc-resources-grid">
              <article className="swc-resource-card">
                <div className="swc-resource-number">01 / HEALTH</div>
                <div className="swc-resource-icon">
                  <Heart size={30} />
                </div>
                <h3>{t("resources.women")}</h3>
                <p>{t("resources.womenText")}</p>
                <a href="#contact">
                  {t("resources.read")}
                  <ArrowUpRight size={18} />
                </a>
              </article>

              <article className="swc-resource-card swc-resource-featured">
                <div className="swc-resource-number">02 / WELLBEING</div>
                <div className="swc-resource-icon">
                  <Sparkles size={30} />
                </div>
                <h3>{t("resources.reproductive")}</h3>
                <p>{t("resources.reproductiveText")}</p>
                <a href="#contact">
                  {t("resources.read")}
                  <ArrowUpRight size={18} />
                </a>
              </article>

              <article className="swc-resource-card">
                <div className="swc-resource-number">03 / KNOWLEDGE</div>
                <div className="swc-resource-icon">
                  <BookOpen size={30} />
                </div>
                <h3>{t("resources.patient")}</h3>
                <p>{t("resources.patientText")}</p>
                <a href="#contact">
                  {t("resources.read")}
                  <ArrowUpRight size={18} />
                </a>
              </article>
            </div>
          </div>
        </section>

        {/* MEDICATION & HEALTHCARE ENQUIRIES */}
        <section className="swc-medication-section" id="healthcare-enquiries">
          <div className="swc-container">
            <div className="swc-medication-heading">
              <div>
                <div className="swc-eyebrow">
                  <span className="swc-eyebrow-line"></span>
                  {isArabic ? "معلومات واستفسارات صحية" : "HEALTH INFORMATION & ENQUIRIES"}
                </div>

                <h2>
                  {isArabic
                    ? "معلومات حول الأدوية وخيارات الرعاية الصحية"
                    : "Medication & Healthcare Information"}
                </h2>
              </div>

              <p>
                {isArabic
                  ? "اطلعي على المعلومات العامة حول المنتجات والموضوعات الصحية التالية. تخضع جميع القرارات الطبية للتقييم المهني والقوانين المعمول بها."
                  : "Explore general information about the following medicines and healthcare topics. Clinical decisions remain subject to professional assessment and applicable regulations."}
              </p>
            </div>

            <div className="swc-medication-grid">
              {healthItems.map((item, index) => (
                <article className="swc-medication-card" key={item.id}>
                  <div className="swc-medication-image">
                    <img
                      src={item.image}
                      alt={item.alt}
                      loading="lazy"
                    />
                    <span className="swc-medication-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="swc-medication-content">
                    <span className="swc-medication-category">
                      {isArabic ? item.arabicCategory : item.category}
                    </span>

                    <h3>{isArabic ? item.arabicName : item.name}</h3>

                    <p>
                      {isArabic ? item.arabicDescription : item.description}
                    </p>

                    <div className="swc-medication-status">
                      <ShieldCheck size={15} />
                      <span>
                        {isArabic ? item.arabicStatus : item.status}
                      </span>
                    </div>

                    <a
                      href="#contact"
                      className="swc-medication-link"
                      onClick={() =>
                        setForm((previous) => ({
                          ...previous,
                          message: isArabic
                            ? `أرغب في الاستفسار عن: ${item.arabicName}`
                            : `I would like to enquire about: ${item.name}`,
                        }))
                      }
                    >
                      {isArabic ? "إرسال استفسار" : "Make an enquiry"}
                      <ArrowUpRight size={17} />
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <div className="swc-medication-notice">
              <ShieldCheck size={21} />
              <p>
                {isArabic
                  ? "ملاحظة: هذه المعلومات عامة ولا تمثل تشخيصاً أو وصفة طبية أو تأكيداً لتوفر الأدوية. قد تتطلب الأدوية الموصوفة مراجعة طبية ووصفة قانونية. لا تستخدمي أي دواء دون استشارة مختص مؤهل."
                  : "Notice: This is general information, not a diagnosis, prescription or confirmation of medicine availability. Prescription medicines may require clinical review and a lawful prescription. Do not use medicines without advice from a qualified healthcare professional."}
              </p>
            </div>
          </div>
        </section>

        {/* INTERNATIONAL SECTION */}
        <section className="swc-international-section">
          <div className="swc-container">
            <div className="swc-international-heading">
              <div className="swc-eyebrow">
                <span className="swc-eyebrow-line"></span>
                {t("international.eyebrow")}
              </div>

              <h2>{t("international.heading")}</h2>
              <p>{t("international.description")}</p>
            </div>

            <div className="swc-market-grid">
              {internationalMarkets.map((market) => (
                <article className="swc-market-card" key={market.key}>
                  <span className="swc-market-number">{market.number}</span>
                  <Globe2 size={27} />

                  <h3>{t(`international.${market.key}`)}</h3>

                  <span className="swc-market-code">{market.code}</span>
                  <span className="swc-market-status">
                    INFORMATION DEVELOPMENT
                  </span>
                </article>
              ))}
            </div>

            <p className="swc-market-disclaimer">
              {t("international.note")}
            </p>
          </div>
        </section>

        {/* DISCLAIMER */}
        <section className="swc-disclaimer-section">
          <div className="swc-container">
            <div className="swc-disclaimer-box">
              <div className="swc-disclaimer-icon">
                <ShieldCheck size={27} />
              </div>

              <div>
                <h3>{t("disclaimer.heading")}</h3>
                <p>{t("disclaimer.text")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="swc-contact-section" id="contact">
          <div className="swc-container swc-contact-layout">
            <div className="swc-contact-content">
              <div className="swc-eyebrow">
                <span className="swc-eyebrow-line"></span>
                {t("contact.eyebrow")}
              </div>

              <h2>{t("contact.heading")}</h2>
              <p>{t("contact.description")}</p>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  "Hello Sarah's Women's Clinic. I have a general website enquiry."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="swc-whatsapp-link"
              >
                <MessageCircle size={21} />
                {t("contact.whatsapp")}
                <ArrowUpRight size={18} />
              </a>

              <div className="swc-contact-note">
                <ShieldCheck size={19} />
                <span>{t("contact.note")}</span>
              </div>
            </div>

            <form className="swc-contact-form" onSubmit={handleSubmit}>
              <div className="swc-form-heading">
                <span>GENERAL ENQUIRY</span>
                <h3>{t("contact.form")}</h3>
              </div>

              <label htmlFor="swc-name">
                {isArabic ? "الاسم" : "Your name"}
              </label>

              <input
                id="swc-name"
                type="text"
                placeholder={isArabic ? "أدخلي اسمك" : "Enter your name"}
                value={form.name}
                onChange={(event) =>
                  setForm({ ...form, name: event.target.value })
                }
                required
              />

              <label htmlFor="swc-email">
                {isArabic ? "البريد الإلكتروني" : "Email address"}
              </label>

              <input
                id="swc-email"
                type="email"
                placeholder={isArabic ? "أدخلي بريدك الإلكتروني" : "Enter your email"}
                value={form.email}
                onChange={(event) =>
                  setForm({ ...form, email: event.target.value })
                }
                required
              />

              <label htmlFor="swc-message">
                {isArabic ? "رسالتك" : "Your message"}
              </label>

              <textarea
                id="swc-message"
                placeholder={
                  isArabic
                    ? "اكتبي استفسارك العام..."
                    : "Write your general enquiry..."
                }
                rows="4"
                value={form.message}
                onChange={(event) =>
                  setForm({ ...form, message: event.target.value })
                }
                required
              />

              <button type="submit" className="swc-form-button">
                {isArabic ? "إرسال الاستفسار" : "Send General Enquiry"}
                <ArrowUpRight size={18} />
              </button>

              <small>
                {isArabic
                  ? "سيتم فتح واتساب مع تجهيز رسالتك. لا يتم تخزين البيانات على هذا الموقع."
                  : "Submitting opens WhatsApp with your enquiry prepared. Nothing is stored on this website."}
              </small>
            </form>
          </div>
        </section>
      </main>

      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
          "Hello Sarah's Women's Clinic. I have a general enquiry."
        )}`}
        className="swc-floating-whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Sarah's Women's Clinic on WhatsApp"
      >
        <MessageCircle size={25} />
      </a>
    </div>
  );
}

export default Home;
