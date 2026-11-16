
import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  ArrowRight,
  ArrowUpRight,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  Heart,
  ShieldCheck,
  Send,
  CheckCircle2,
  Pill,
  Syringe,
  Baby,
  CalendarDays,
  Activity,
  Flower2,
  HeartPulse,
  Stethoscope,
  Info,
  ChevronDown,
} from "lucide-react";

import SEO from "../components/SEO";
import { getWhatsAppLink } from "../components/WhatsAppButton";

import "./Contact.css";

const images = {
  hero: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=2000&q=85",
  consultation:
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=85",
  care: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=85",
};

const enquiryCategories = [
  {
    icon: HeartPulse,
    title: "Women's Healthcare",
    description:
      "General women's health information, wellbeing and healthcare enquiries.",
  },
  {
    icon: Pill,
    title: "Contraceptive Pills",
    description:
      "Information about regular oral contraceptive pills and available options.",
  },
  {
    icon: Clock,
    title: "Emergency Contraception",
    description:
      "General information about emergency contraception and where to seek appropriate advice.",
  },
  {
    icon: Syringe,
    title: "Contraceptive Injections",
    description:
      "Learn about injectable contraception, how it is used and professional guidance.",
  },
  {
    icon: Activity,
    title: "Implants and IUDs",
    description:
      "Information about contraceptive implants and intrauterine devices.",
  },
  {
    icon: ShieldCheck,
    title: "Condoms and Barrier Methods",
    description:
      "Information about condoms and other barrier-based contraceptive methods.",
  },
  {
    icon: CalendarDays,
    title: "Family Planning",
    description:
      "Explore family planning choices, birth spacing and reproductive planning.",
  },
  {
    icon: Baby,
    title: "Pregnancy Information",
    description:
      "General pregnancy-related information, options and guidance on seeking care.",
  },
  {
    icon: Flower2,
    title: "Reproductive Healthcare",
    description:
      "Information about reproductive wellbeing, menstrual health and related concerns.",
  },
  {
    icon: Info,
    title: "Abortion-Related Information",
    description:
      "General information and enquiries about pregnancy options and access to lawful, qualified professional guidance.",
  },
  {
    icon: Stethoscope,
    title: "Women's Health Consultations",
    description:
      "Enquiries about professional healthcare guidance and consultation options.",
  },
  {
    icon: Heart,
    title: "Other Enquiries",
    description:
      "Ask us about other women's healthcare information and support topics.",
  },
];

const countries = [
  "Uganda",
  "South Africa",
  "Bahrain",
  "United Arab Emirates",
  "Qatar",
  "Other",
];

function Contact() {
  const { i18n } = useTranslation();
  const isArabic = i18n.language?.startsWith("ar");

  const [formData, setFormData] = useState({
    name: "",
    country: "",
    category: "",
    contactMethod: "WhatsApp",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const content = {
    en: {
      eyebrow: "WE ARE HERE TO HELP",
      title: "Let's Start a Conversation",
      subtitle:
        "Have a question about women's healthcare, contraception or reproductive health information? Send us a general enquiry and we'll help direct you to the appropriate information.",
      introTitle: "Your Questions Matter",
      introText:
        "Every woman deserves access to clear, respectful and reliable healthcare information. Tell us what you would like to know, and our team can guide your general enquiry.",
      formTitle: "Send Us an Enquiry",
      formText:
        "Complete the form below to start a conversation with us.",
      name: "Your Name",
      namePlaceholder: "Enter your name",
      country: "Your Country",
      countryPlaceholder: "Select your country",
      category: "What would you like to enquire about?",
      categoryPlaceholder: "Choose an enquiry topic",
      method: "Preferred Contact Method",
      message: "Your Message",
      messagePlaceholder:
        "Briefly tell us what information you are looking for...",
      submit: "Continue to WhatsApp",
      note:
        "Your enquiry will open in WhatsApp for you to review and send.",
      categoriesTitle: "What Can You Enquire About?",
      categoriesText:
        "Explore the women's healthcare and reproductive health topics covered by our information and enquiry platform.",
      contactTitle: "Speak With Us",
      contactText:
        "For general enquiries, you can contact us directly through WhatsApp.",
      whatsapp: "Message Us on WhatsApp",
      directTitle: "A More Personal Conversation",
      directText:
        "We understand that questions about women's health can be personal. We aim to provide a respectful and welcoming space for general enquiries.",
      privacyTitle: "Your Privacy Matters",
      privacyText:
        "Please do not include sensitive medical details, medical records, identification documents or private health information in this form. For medical advice, consult an appropriately qualified healthcare professional.",
      disclaimerTitle: "Important Healthcare Information",
      disclaimer:
        "This platform provides general information and handles enquiries. Submitting an enquiry does not establish a doctor-patient relationship or confirm that a medication, procedure or clinical service is available. Prescription medicines and clinical procedures require assessment and guidance from appropriately qualified professionals, subject to the laws and regulations where you live. Abortion-related information and care are subject to local laws and professional requirements. This platform is not an emergency service.",
      successTitle: "Your enquiry is ready",
      successText:
        "WhatsApp should open with your enquiry details. Review your message before sending it.",
      required: "Please complete your name, country and enquiry topic.",
      selectOption: "Please select",
      methodWhatsApp: "WhatsApp",
      methodEmail: "Email",
      methodPhone: "Phone",
      responseTitle: "Let's Help You Find the Right Information",
      responseText:
        "Start with a general enquiry. You do not need to share private medical information to ask a question.",
      backHome: "Back to Home",
    },
    ar: {
      eyebrow: "نحن هنا لمساعدتك",
      title: "لنبدأ محادثة",
      subtitle:
        "هل لديك سؤال حول صحة المرأة أو وسائل منع الحمل أو المعلومات المتعلقة بالصحة الإنجابية؟ أرسلي استفسارك العام وسنساعدك في الوصول إلى المعلومات المناسبة.",
      introTitle: "أسئلتك مهمة",
      introText:
        "تستحق كل امرأة الحصول على معلومات صحية واضحة وموثوقة ومحترمة. أخبرينا بما ترغبين في معرفته وسنوجه استفسارك العام.",
      formTitle: "أرسلي استفسارك",
      formText: "املئي النموذج أدناه لبدء محادثة معنا.",
      name: "اسمك",
      namePlaceholder: "أدخلي اسمك",
      country: "بلدك",
      countryPlaceholder: "اختاري بلدك",
      category: "ما الموضوع الذي ترغبين في الاستفسار عنه؟",
      categoryPlaceholder: "اختاري موضوع الاستفسار",
      method: "طريقة التواصل المفضلة",
      message: "رسالتك",
      messagePlaceholder: "أخبرينا باختصار عن المعلومات التي تبحثين عنها...",
      submit: "المتابعة إلى واتساب",
      note: "سيتم فتح واتساب لمراجعة رسالتك وإرسالها.",
      categoriesTitle: "ما الموضوعات التي يمكنك الاستفسار عنها؟",
      categoriesText:
        "استكشفي موضوعات صحة المرأة والصحة الإنجابية التي تغطيها منصتنا.",
      contactTitle: "تواصلي معنا",
      contactText: "للاستفسارات العامة، يمكنك التواصل معنا مباشرة عبر واتساب.",
      whatsapp: "راسلينا عبر واتساب",
      directTitle: "محادثة تراعي خصوصيتك",
      directText:
        "ندرك أن الأسئلة المتعلقة بصحة المرأة قد تكون شخصية. ونسعى إلى توفير مساحة محترمة ومرحبة للاستفسارات العامة.",
      privacyTitle: "خصوصيتك مهمة",
      privacyText:
        "يرجى عدم إدخال تفاصيل طبية حساسة أو سجلات طبية أو وثائق هوية أو معلومات صحية خاصة في هذا النموذج. للحصول على المشورة الطبية، استشيري متخصصاً صحياً مؤهلاً.",
      disclaimerTitle: "معلومات صحية مهمة",
      disclaimer:
        "تقدم هذه المنصة معلومات عامة وتستقبل الاستفسارات. إرسال الاستفسار لا ينشئ علاقة طبيب ومريض ولا يؤكد توفر أي دواء أو إجراء أو خدمة سريرية. تتطلب الأدوية الموصوفة والإجراءات السريرية تقييماً وإرشاداً من متخصصين مؤهلين وفقاً للقوانين واللوائح المحلية. تخضع المعلومات والرعاية المتعلقة بالإجهاض للقوانين المحلية والمتطلبات المهنية. هذه المنصة ليست خدمة طوارئ.",
      successTitle: "استفسارك جاهز",
      successText:
        "من المفترض أن يفتح واتساب مع تفاصيل استفسارك. راجعي الرسالة قبل إرسالها.",
      required: "يرجى إدخال اسمك وبلدك وموضوع الاستفسار.",
      selectOption: "يرجى الاختيار",
      methodWhatsApp: "واتساب",
      methodEmail: "البريد الإلكتروني",
      methodPhone: "الهاتف",
      responseTitle: "نساعدك في الوصول إلى المعلومات المناسبة",
      responseText:
        "ابدئي باستفسار عام. لا تحتاجين إلى مشاركة معلومات طبية خاصة لطرح سؤال.",
      backHome: "العودة إلى الرئيسية",
    },
  };

  const t = isArabic ? content.ar : content.en;

  const categoryLabels = isArabic
    ? [
        "الرعاية الصحية للمرأة",
        "حبوب منع الحمل",
        "وسائل منع الحمل الطارئة",
        "حقن منع الحمل",
        "الغرسات واللولب",
        "الواقيات ووسائل الحاجز",
        "تنظيم الأسرة",
        "معلومات الحمل",
        "الصحة الإنجابية",
        "معلومات متعلقة بالإجهاض",
        "استشارات صحة المرأة",
        "استفسارات أخرى",
      ]
    : enquiryCategories.map((item) => item.title);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.name.trim() || !formData.country || !formData.category) {
      alert(t.required);
      return;
    }

    const selectedCategory =
      categoryLabels[enquiryCategories.findIndex(
        (item) => item.title === formData.category
      )] || formData.category;

    const message = [
      "Hello Sarah's Women's Clinic.",
      "",
      `Name: ${formData.name}`,
      `Country: ${formData.country}`,
      `Enquiry topic: ${selectedCategory}`,
      `Preferred contact method: ${formData.contactMethod}`,
      `Message: ${formData.message || "I would like general information about this topic."}`,
      "",
      "I understand this is a general enquiry and not a request for emergency medical assistance.",
    ].join("\n");

    const url = `https://wa.me/27730423979?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <div className={`swc-contact-page ${isArabic ? "swc-contact-rtl" : ""}`}>
      <SEO
        title={
          isArabic
            ? "تواصلي معنا | عيادة سارة لصحة المرأة"
            : "Contact Us | Sarah's Women's Clinic"
        }
        description={
          isArabic
            ? "تواصلي مع عيادة سارة للاستفسارات العامة حول صحة المرأة وتنظيم الأسرة والصحة الإنجابية."
            : "Contact Sarah's Women's Clinic for general enquiries about women's healthcare, contraception, family planning and reproductive health information."
        }
        noindex={true}
      />

      {/* HERO */}
      <section className="swc-contact-hero">
        <div className="swc-contact-hero-image">
          <img src={images.hero} alt="Women's healthcare and wellbeing" />
        </div>

        <div className="swc-contact-hero-overlay" />

        <div className="swc-contact-container swc-contact-hero-content">
          <span className="swc-contact-eyebrow">{t.eyebrow}</span>

          <h1>{t.title}</h1>

          <p>{t.subtitle}</p>

          <a href="#contact-form" className="swc-contact-primary-btn">
            {t.submit}
            <ArrowUpRight size={18} />
          </a>

          <div className="swc-contact-hero-trust">
            <span>
              <ShieldCheck size={16} />
              {isArabic ? "الخصوصية والاحترام" : "Privacy and respect"}
            </span>
            <span>
              <Heart size={16} />
              {isArabic ? "معلومات تهمك" : "Information that matters"}
            </span>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="swc-contact-intro">
        <div className="swc-contact-container swc-contact-intro-grid">
          <div className="swc-contact-intro-copy">
            <span className="swc-contact-section-label">
              {isArabic ? "تواصلي معنا" : "A WELCOMING SPACE"}
            </span>

            <h2>{t.introTitle}</h2>
            <p>{t.introText}</p>

            <div className="swc-contact-intro-points">
              <div>
                <CheckCircle2 size={19} />
                <span>
                  {isArabic
                    ? "استفسارات عامة حول صحة المرأة"
                    : "General women's health enquiries"}
                </span>
              </div>
              <div>
                <CheckCircle2 size={19} />
                <span>
                  {isArabic
                    ? "معلومات حول خيارات منع الحمل"
                    : "Information about contraceptive options"}
                </span>
              </div>
              <div>
                <CheckCircle2 size={19} />
                <span>
                  {isArabic
                    ? "تواصل يحترم الخصوصية"
                    : "Respectful, privacy-conscious communication"}
                </span>
              </div>
            </div>
          </div>

          <div className="swc-contact-intro-image">
            <img
              src={images.consultation}
              alt="Healthcare professional in a consultation setting"
              loading="lazy"
            />
            <div className="swc-contact-image-caption">
              <Heart size={21} />
              <span>
                {isArabic
                  ? "معلومات واضحة. تواصل باحترام."
                  : "Clear information. Respectful communication."}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ENQUIRY CATEGORIES */}
      <section className="swc-contact-categories">
        <div className="swc-contact-container">
          <div className="swc-contact-section-heading">
            <span className="swc-contact-section-label">
              {isArabic ? "موضوعات الاستفسار" : "OUR ENQUIRY AREAS"}
            </span>
            <h2>{t.categoriesTitle}</h2>
            <p>{t.categoriesText}</p>
          </div>

          <div className="swc-contact-category-grid">
            {enquiryCategories.map((item, index) => {
              const Icon = item.icon;

              const descriptions = isArabic
                ? [
                    "معلومات عامة حول صحة المرأة والعافية والاستفسارات الصحية.",
                    "معلومات حول حبوب منع الحمل الفموية والخيارات المتاحة.",
                    "معلومات عامة حول وسائل منع الحمل الطارئة وطلب المشورة المناسبة.",
                    "تعرفي على حقن منع الحمل والإرشادات المهنية المتعلقة بها.",
                    "معلومات حول غرسات منع الحمل واللولب الرحمي.",
                    "معلومات حول الواقيات ووسائل منع الحمل الحاجزية.",
                    "استكشفي خيارات تنظيم الأسرة والمباعدة بين الولادات.",
                    "معلومات عامة حول الحمل والخيارات وطلب الرعاية المناسبة.",
                    "معلومات حول الصحة الإنجابية وصحة الدورة الشهرية.",
                    "استفسارات عامة حول خيارات الحمل والحصول على إرشاد مهني قانوني.",
                    "استفسارات حول الإرشاد الصحي المهني وخيارات الاستشارة.",
                    "استفسارات أخرى حول معلومات صحة المرأة والدعم.",
                  ]
                : null;

              return (
                <article className="swc-contact-category-card" key={item.title}>
                  <div className="swc-contact-category-icon">
                    <Icon size={24} strokeWidth={1.7} />
                  </div>

                  <span className="swc-contact-category-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3>{categoryLabels[index]}</h3>
                  <p>{descriptions ? descriptions[index] : item.description}</p>

                  <button
                    type="button"
                    className="swc-contact-category-link"
                    onClick={() => {
                      setFormData((current) => ({
                        ...current,
                        category: item.title,
                      }));
                      document
                        .getElementById("contact-form")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {isArabic ? "استفسري عن هذا الموضوع" : "Enquire about this"}
                    <ArrowUpRight size={16} />
                  </button>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* FORM AND CONTACT */}
      <section className="swc-contact-form-section" id="contact-form">
        <div className="swc-contact-container swc-contact-form-layout">
          <div className="swc-contact-form-aside">
            <span className="swc-contact-section-label">
              {isArabic ? "نحن نستمع إليك" : "GET IN TOUCH"}
            </span>

            <h2>{t.formTitle}</h2>
            <p>{t.formText}</p>

            <div className="swc-contact-aside-image">
              <img
                src={images.care}
                alt="Women's healthcare professional"
                loading="lazy"
              />
            </div>

            <div className="swc-contact-direct-card">
              <div className="swc-contact-direct-icon">
                <MessageCircle size={23} />
              </div>
              <h3>{t.directTitle}</h3>
              <p>{t.directText}</p>

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="swc-contact-whatsapp-link"
              >
                {t.whatsapp}
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>

          <div className="swc-contact-form-card">
            {submitted && (
              <div className="swc-contact-success">
                <CheckCircle2 size={22} />
                <div>
                  <strong>{t.successTitle}</strong>
                  <p>{t.successText}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="swc-contact-form-row">
                <div className="swc-contact-field">
                  <label htmlFor="contact-name">{t.name} *</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder={t.namePlaceholder}
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="swc-contact-field">
                  <label htmlFor="contact-country">{t.country} *</label>
                  <div className="swc-contact-select-wrap">
                    <select
                      id="contact-country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                    >
                      <option value="">{t.countryPlaceholder}</option>
                      {countries.map((country) => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                    <ChevronDown size={17} />
                  </div>
                </div>
              </div>

              <div className="swc-contact-field">
                <label htmlFor="contact-category">{t.category} *</label>
                <div className="swc-contact-select-wrap">
                  <select
                    id="contact-category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                  >
                    <option value="">{t.categoryPlaceholder}</option>
                    {enquiryCategories.map((item, index) => (
                      <option key={item.title} value={item.title}>
                        {categoryLabels[index]}
                      </option>
                    ))}
                  </select>
                  <ChevronDown size={17} />
                </div>
              </div>

              <div className="swc-contact-field">
                <label htmlFor="contact-method">{t.method}</label>
                <div className="swc-contact-select-wrap">
                  <select
                    id="contact-method"
                    name="contactMethod"
                    value={formData.contactMethod}
                    onChange={handleChange}
                  >
                    <option value="WhatsApp">{t.methodWhatsApp}</option>
                    <option value="Phone">{t.methodPhone}</option>
                    <option value="Email">{t.methodEmail}</option>
                  </select>
                  <ChevronDown size={17} />
                </div>
              </div>

              <div className="swc-contact-field">
                <label htmlFor="contact-message">{t.message}</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="5"
                  placeholder={t.messagePlaceholder}
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <div className="swc-contact-form-privacy">
                <ShieldCheck size={18} />
                <p>{t.privacyText}</p>
              </div>

              <button type="submit" className="swc-contact-submit">
                <span>{t.submit}</span>
                <Send size={18} />
              </button>

              <p className="swc-contact-form-note">{t.note}</p>
            </form>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="swc-contact-cta">
        <div className="swc-contact-container swc-contact-cta-inner">
          <div className="swc-contact-cta-icon">
            <MessageCircle size={28} />
          </div>

          <div className="swc-contact-cta-copy">
            <span className="swc-contact-section-label">
              {isArabic ? "ابدئي المحادثة" : "HAVE A GENERAL QUESTION?"}
            </span>
            <h2>{t.responseTitle}</h2>
            <p>{t.responseText}</p>
          </div>

          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="swc-contact-cta-button"
          >
            {t.whatsapp}
            <ArrowUpRight size={18} />
          </a>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="swc-contact-disclaimer">
        <div className="swc-contact-container swc-contact-disclaimer-inner">
          <div className="swc-contact-disclaimer-icon">
            <Info size={23} />
          </div>

          <div>
            <h3>{t.disclaimerTitle}</h3>
            <p>{t.disclaimer}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
