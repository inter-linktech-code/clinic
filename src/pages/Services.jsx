
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  ArrowRight,
  ArrowUpRight,
  Heart,
  HeartPulse,
  ShieldCheck,
  BookOpen,
  Users,
  MessageCircle,
  Sparkles,
  Activity,
  Baby,
  Stethoscope,
  Pill,
  ClipboardList,
  CalendarDays,
} from "lucide-react";

import SEO from "../components/SEO";
import { getWhatsAppLink } from "../components/WhatsAppButton";
import "./Services.css";

const WHATSAPP_LINK = getWhatsAppLink();

const serviceContent = {
  en: {
    eyebrow: "OUR AREAS OF INFORMATION",
    title: "Women's Healthcare & Support",
    intro:
      "Explore women's health information, reproductive wellbeing resources and healthcare enquiry areas in one place.",
    introductionTitle: "Information designed around women's wellbeing",
    introductionText:
      "Sarah's Women's Clinic provides an information and enquiry platform covering important areas of women's health. Explore the topics below and contact us for further information.",
    services: [
      {
        title: "Women's Health Information",
        description:
          "General information about women's health, wellbeing, preventive care and common health topics.",
        image:
          "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=85",
        alt: "Women discussing health information",
        icon: Heart,
        link: "/womens-health",
        linkText: "Explore women's health",
      },
      {
        title: "Reproductive Health Education",
        description:
          "Educational information about reproductive wellbeing, menstrual health and related topics.",
        image:
          "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=85",
        alt: "Healthcare professional consultation",
        icon: HeartPulse,
        link: "/reproductive-health",
        linkText: "Explore reproductive health",
      },
      {
        title: "Patient Resources",
        description:
          "Helpful information to support informed conversations and understanding of healthcare options.",
        image:
          "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=85",
        alt: "Medical professional reviewing healthcare information",
        icon: BookOpen,
        link: "/patient-resources",
        linkText: "View patient resources",
      },
      {
        title: "Wellness & Prevention",
        description:
          "Information about women's wellness, healthy habits and preventive healthcare awareness.",
        image:
          "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1000&q=85",
        alt: "Women's wellness activity",
        icon: Sparkles,
        link: "/womens-health",
        linkText: "Learn more",
      },
      {
        title: "General Enquiries",
        description:
          "A contact point for questions about the information and enquiry areas presented on this website.",
        image:
          "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1000&q=85",
        alt: "Private healthcare discussion",
        icon: MessageCircle,
        link: "/contact",
        linkText: "Contact us",
      },
      {
        title: "Privacy & Responsible Communication",
        description:
          "Information about respectful communication, privacy awareness and responsible handling of enquiries.",
        image:
          "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1000&q=85",
        alt: "Healthcare professional working in a clinic",
        icon: ShieldCheck,
        link: "/privacy-policy",
        linkText: "Read our privacy information",
      },
    ],
    approachEyebrow: "OUR APPROACH",
    approachTitle: "Clear information. Respectful communication.",
    approachDescription:
      "Women's healthcare decisions are personal. Our aim is to make it easier to explore health topics and direct enquiries through appropriate channels.",
    principles: [
      {
        title: "Respect & privacy",
        text: "We aim to treat enquiries with discretion and respect.",
        icon: ShieldCheck,
      },
      {
        title: "Health awareness",
        text: "We present general information to encourage informed conversations.",
        icon: BookOpen,
      },
      {
        title: "Professional guidance",
        text: "Medical decisions should be discussed with qualified healthcare professionals.",
        icon: Stethoscope,
      },
    ],
    ctaEyebrow: "HAVE A QUESTION?",
    ctaTitle: "Get in touch with us",
    ctaText:
      "Contact us with a general enquiry about the information and healthcare topics presented on this website.",
    ctaButton: "Make an enquiry",
    disclaimer:
      "Website information is general and educational. It is not a substitute for diagnosis, treatment or advice from a qualified healthcare professional. The inclusion of a medicine or healthcare topic does not confirm stock, sale, availability or eligibility. Prescription medicines require appropriate professional assessment and must be handled in accordance with applicable laws.",
    medicationEyebrow: "MEDICINES & HEALTHCARE ENQUIRIES",
    medicationTitle: "Medication information and clinical enquiry topics",
    medicationIntro:
      "The following items are presented for general information and enquiry purposes. Clinical suitability, prescription requirements and availability must be confirmed through appropriate professional channels.",
    enquire: "Enquire about this topic",
    clinicalReview: "Clinical review required",
    prescription: "Prescription required",
    doctorApproval: "Doctor approval required",
    professionalGuidance: "Professional guidance recommended",
    timeSensitive: "Time-sensitive information",
    appointment: "Appointment enquiry",
    consultation: "Consultation information",
    support: "Professional support information",
  },

  ar: {
    eyebrow: "مجالات المعلومات الصحية",
    title: "الرعاية الصحية والدعم للمرأة",
    intro:
      "استكشفي معلومات صحة المرأة وموارد الصحة الإنجابية ومجالات الاستفسارات الصحية في مكان واحد.",
    introductionTitle: "معلومات تهتم بصحة المرأة وعافيتها",
    introductionText:
      "توفر عيادة سارة لصحة المرأة منصة للمعلومات والاستفسارات حول مجالات مهمة من صحة المرأة. استكشفي الموضوعات أدناه وتواصلي معنا للحصول على مزيد من المعلومات.",
    services: [
      {
        title: "معلومات صحة المرأة",
        description:
          "معلومات عامة حول صحة المرأة والعافية والرعاية الوقائية والموضوعات الصحية الشائعة.",
        image:
          "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=85",
        alt: "نساء يناقشن معلومات صحية",
        icon: Heart,
        link: "/womens-health",
        linkText: "استكشفي صحة المرأة",
      },
      {
        title: "التثقيف حول الصحة الإنجابية",
        description:
          "معلومات تثقيفية حول الصحة الإنجابية وصحة الدورة الشهرية والموضوعات ذات الصلة.",
        image:
          "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=85",
        alt: "استشارة مع مختص صحي",
        icon: HeartPulse,
        link: "/reproductive-health",
        linkText: "استكشفي الصحة الإنجابية",
      },
      {
        title: "موارد المريضات",
        description:
          "معلومات مفيدة لدعم الحوار الواعي وفهم خيارات الرعاية الصحية.",
        image:
          "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=85",
        alt: "مختص طبي يراجع معلومات صحية",
        icon: BookOpen,
        link: "/patient-resources",
        linkText: "عرض الموارد",
      },
      {
        title: "العافية والوقاية",
        description:
          "معلومات حول عافية المرأة والعادات الصحية والتوعية بالرعاية الوقائية.",
        image:
          "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1000&q=85",
        alt: "نشاط متعلق بعافية المرأة",
        icon: Sparkles,
        link: "/womens-health",
        linkText: "اعرفي المزيد",
      },
      {
        title: "الاستفسارات العامة",
        description:
          "وسيلة للتواصل وطرح الأسئلة حول المعلومات والموضوعات الصحية المعروضة في الموقع.",
        image:
          "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1000&q=85",
        alt: "مناقشة خاصة حول الرعاية الصحية",
        icon: MessageCircle,
        link: "/contact",
        linkText: "تواصلي معنا",
      },
      {
        title: "الخصوصية والتواصل المسؤول",
        description:
          "معلومات حول التواصل باحترام والوعي بالخصوصية والتعامل المسؤول مع الاستفسارات.",
        image:
          "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1000&q=85",
        alt: "مختص رعاية صحية يعمل في عيادة",
        icon: ShieldCheck,
        link: "/privacy-policy",
        linkText: "اقرئي معلومات الخصوصية",
      },
    ],
    approachEyebrow: "نهجنا",
    approachTitle: "معلومات واضحة. تواصل باحترام.",
    approachDescription:
      "قرارات الرعاية الصحية للمرأة شخصية. نهدف إلى تسهيل استكشاف الموضوعات الصحية وتوجيه الاستفسارات عبر القنوات المناسبة.",
    principles: [
      {
        title: "الاحترام والخصوصية",
        text: "نسعى إلى التعامل مع الاستفسارات بسرية واحترام.",
        icon: ShieldCheck,
      },
      {
        title: "التوعية الصحية",
        text: "نعرض معلومات عامة لتشجيع الحوار الواعي.",
        icon: BookOpen,
      },
      {
        title: "الإرشاد المتخصص",
        text: "ينبغي مناقشة القرارات الطبية مع مختصي رعاية صحية مؤهلين.",
        icon: Stethoscope,
      },
    ],
    ctaEyebrow: "هل لديك سؤال؟",
    ctaTitle: "تواصلي معنا",
    ctaText:
      "تواصلي معنا للاستفسار بشكل عام عن المعلومات والموضوعات الصحية المعروضة في هذا الموقع.",
    ctaButton: "إرسال استفسار",
    disclaimer:
      "المعلومات المنشورة على الموقع عامة وتثقيفية، ولا تحل محل التشخيص أو العلاج أو المشورة من مختص رعاية صحية مؤهل. إدراج دواء أو موضوع صحي لا يؤكد توفره أو بيعه أو إمكانية الحصول عليه. تتطلب الأدوية الموصوفة تقييماً مهنياً مناسباً ويجب التعامل معها وفق القوانين المعمول بها.",
    medicationEyebrow: "استفسارات الأدوية والرعاية الصحية",
    medicationTitle: "معلومات الأدوية والموضوعات الطبية",
    medicationIntro:
      "تُعرض العناصر التالية لأغراض المعلومات العامة والاستفسار فقط. يجب تأكيد الملاءمة الطبية ومتطلبات الوصفة والتوافر عبر القنوات المهنية المناسبة.",
    enquire: "استفسري عن هذا الموضوع",
    clinicalReview: "يتطلب مراجعة طبية",
    prescription: "يتطلب وصفة طبية",
    doctorApproval: "يتطلب موافقة الطبيب",
    professionalGuidance: "يوصى بإرشاد متخصص",
    timeSensitive: "معلومات مرتبطة بالوقت",
    appointment: "استفسار عن موعد",
    consultation: "معلومات الاستشارات",
    support: "معلومات الدعم المتخصص",
  },
};

const clinicalItems = [
  {
    id: "cytotec",
    name: "Cytotec 200 μg",
    description:
      "Medical information about Cytotec and its regulated clinical use. Any use requires qualified professional assessment and supervision.",
    arabicName: "سايتوتيك 200 ميكروغرام",
    arabicDescription:
      "معلومات طبية حول سايتوتيك واستخدامه السريري المنظم. يتطلب أي استخدام تقييماً وإشرافاً من مختص مؤهل.",
    status: "clinicalReview",
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=900&q=85",
    alt: "Medical tablets",
  },
  {
    id: "misoprostol",
    name: "Misoprostol Tablets",
    description:
      "General information about a regulated medicine. Prescription decisions and suitability must be determined by a qualified healthcare professional.",
    arabicName: "أقراص ميزوبروستول",
    arabicDescription:
      "معلومات عامة حول دواء منظم. يحدد مختص الرعاية الصحية المؤهل الحاجة إلى الوصفة ومدى الملاءمة.",
    status: "prescription",
    image:
      "https://images.unsplash.com/photo-1576075796778-4b3f7f4c8c8b?auto=format&fit=crop&w=900&q=85",
    alt: "Healthcare supplies",
  },
  {
    id: "mifegest",
    name: "Mifegest Clinical Kit",
    description:
      "Information about mifepristone-based clinical protocols. Individual assessment and appropriate medical supervision are essential.",
    arabicName: "مجموعة ميفيجست الطبية",
    arabicDescription:
      "معلومات حول البروتوكولات الطبية القائمة على الميفيبريستون. التقييم الفردي والإشراف الطبي المناسب أمران أساسيان.",
    status: "doctorApproval",
    image:
      "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=900&q=85",
    alt: "Clinical medical supplies",
  },
  {
    id: "pregnancy-test",
    name: "Medical Pregnancy Test Kit",
    description:
      "General information about pregnancy testing, understanding results and when to seek professional advice.",
    arabicName: "اختبار الحمل الطبي",
    arabicDescription:
      "معلومات عامة حول اختبارات الحمل وفهم النتائج ومتى ينبغي طلب المشورة المتخصصة.",
    status: "professionalGuidance",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=85",
    alt: "Medical consultation",
  },
  {
    id: "ultrasound",
    name: "Ultrasound Consultation",
    description:
      "Enquiries about ultrasound consultations, appointment arrangements and professional guidance.",
    arabicName: "استشارة الموجات فوق الصوتية",
    arabicDescription:
      "استفسارات حول استشارات الموجات فوق الصوتية وترتيب المواعيد والإرشادات المهنية.",
    status: "appointment",
    image:
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=900&q=85",
    alt: "Medical imaging equipment",
  },
  {
    id: "hormonal",
    name: "Hormonal Contraception",
    description:
      "Information about hormonal contraception options and choosing a suitable method with professional guidance.",
    arabicName: "وسائل منع الحمل الهرمونية",
    arabicDescription:
      "معلومات حول خيارات منع الحمل الهرمونية واختيار الوسيلة المناسبة بإرشاد متخصص.",
    status: "professionalGuidance",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=85",
    alt: "Women's healthcare professional",
  },
  {
    id: "emergency",
    name: "Emergency Contraception",
    description:
      "Information about emergency contraception and time-sensitive considerations. Seek timely advice from an appropriate healthcare professional.",
    arabicName: "وسائل منع الحمل الطارئة",
    arabicDescription:
      "معلومات حول منع الحمل الطارئ والاعتبارات المرتبطة بالوقت. اطلبي المشورة في الوقت المناسب من مختص رعاية صحية.",
    status: "timeSensitive",
    image:
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=900&q=85",
    alt: "Private medical consultation",
  },
  {
    id: "online-doctor",
    name: "Online Doctor Consultation",
    description:
      "Information about remote healthcare consultations and how to enquire about professional support. Availability must be confirmed.",
    arabicName: "استشارة طبيب عبر الإنترنت",
    arabicDescription:
      "معلومات حول الاستشارات الصحية عن بُعد وكيفية الاستفسار عن الدعم المهني. يجب تأكيد التوافر.",
    status: "consultation",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=85",
    alt: "Remote healthcare consultation",
  },
  {
    id: "wellness",
    name: "Women Wellness Consultation",
    description:
      "Women-centred information and enquiries about wellbeing, preventive care and healthcare guidance.",
    arabicName: "استشارة صحة المرأة والعافية",
    arabicDescription:
      "معلومات واستفسارات تتمحور حول صحة المرأة والعافية والرعاية الوقائية والإرشادات الصحية.",
    status: "consultation",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=900&q=85",
    alt: "Women's wellness",
  },
  {
    id: "support",
    name: "Clinical Support Session",
    description:
      "Information about professional support, follow-up enquiries and guidance through appropriate healthcare channels.",
    arabicName: "جلسة دعم سريري",
    arabicDescription:
      "معلومات حول الدعم المتخصص واستفسارات المتابعة والإرشاد عبر قنوات الرعاية الصحية المناسبة.",
    status: "support",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=85",
    alt: "Healthcare support discussion",
  },
];

function Services() {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const copy = isArabic ? serviceContent.ar : serviceContent.en;

  const getWhatsAppEnquiry = (itemName) => {
    const message = isArabic
      ? `مرحباً، أود الاستفسار عن: ${itemName}`
      : `Hello, I would like to enquire about: ${itemName}`;

    return `${WHATSAPP_LINK}${WHATSAPP_LINK.includes("?") ? "&" : "?"}text=${encodeURIComponent(message)}`;
  };

  return (
    <div className={`swc-services-page ${isArabic ? "rtl" : "ltr"}`}>
      <SEO
        title={
          isArabic
            ? "الخدمات والمعلومات الصحية | عيادة سارة لصحة المرأة"
            : "Women's Healthcare Information & Enquiries | Sarah's Women's Clinic"
        }
        description={
          isArabic
            ? "استكشفي معلومات صحة المرأة والصحة الإنجابية وموضوعات الأدوية والاستفسارات الصحية."
            : "Explore women's health information, reproductive wellbeing, medication information and healthcare enquiry topics."
        }
        noindex={true}
      />

      {/* HERO */}
      <section className="swc-services-hero">
        <div className="swc-services-hero-image"></div>
        <div className="swc-services-hero-overlay"></div>

        <div className="swc-services-container swc-services-hero-content">
          <div className="swc-services-eyebrow">
            <span></span>
            {copy.eyebrow}
          </div>

          <h1>{copy.title}</h1>
          <p className="swc-services-hero-intro">{copy.intro}</p>

          <div className="swc-services-hero-actions">
            <a
              href="#service-list"
              className="swc-services-button swc-services-button-primary"
            >
              {isArabic ? "استكشفي المجالات" : "Explore information"}
              <ArrowUpRight size={18} />
            </a>

            <a
              href="#services-contact"
              className="swc-services-button swc-services-button-outline"
            >
              {isArabic ? "تواصلي معنا" : "Contact us"}
            </a>
          </div>

          <div className="swc-services-hero-note">
            <ShieldCheck size={18} />
            <span>
              {isArabic
                ? "معلومات عامة واستفسارات مع مراعاة الخصوصية"
                : "General information and enquiries with privacy in mind"}
            </span>
          </div>
        </div>

        <div className="swc-services-hero-index">01 — 04</div>
      </section>

      {/* INTRODUCTION */}
      <section className="swc-services-intro">
        <div className="swc-services-container swc-services-intro-inner">
          <div className="swc-services-intro-label">
            <span>{isArabic ? "عن معلوماتنا" : "ABOUT OUR INFORMATION"}</span>
            <div></div>
          </div>

          <div className="swc-services-intro-copy">
            <h2>{copy.introductionTitle}</h2>
            <p>{copy.introductionText}</p>
          </div>
        </div>
      </section>

      {/* EXISTING SERVICE AREAS */}
      <section
        className="swc-services-grid-section"
        id="service-list"
      >
        <div className="swc-services-container">
          <div className="swc-services-grid">
            {copy.services.map((service, index) => {
              const Icon = service.icon;

              return (
                <article className="swc-service-card" key={service.title}>
                  <Link
                    to={service.link}
                    className="swc-service-card-image"
                    aria-label={service.title}
                  >
                    <img
                      src={service.image}
                      alt={service.alt}
                      loading="lazy"
                    />

                    <span className="swc-service-card-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="swc-service-card-icon">
                      <Icon size={22} />
                    </span>
                  </Link>

                  <div className="swc-service-card-content">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>

                    <Link
                      to={service.link}
                      className="swc-service-card-link"
                    >
                      {service.linkText}
                      <ArrowUpRight size={17} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* MEDICINES & CLINICAL ENQUIRIES */}
      <section className="swc-clinical-section" id="clinical-information">
        <div className="swc-services-container">
          <div className="swc-clinical-heading">
            <div className="swc-services-eyebrow swc-services-eyebrow-dark">
              <span></span>
              {copy.medicationEyebrow}
            </div>

            <h2>{copy.medicationTitle}</h2>
            <p>{copy.medicationIntro}</p>
          </div>

          <div className="swc-clinical-grid">
            {clinicalItems.map((item, index) => (
              <article className="swc-clinical-card" key={item.id}>
                <div className="swc-clinical-image">
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                  />
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>

                <div className="swc-clinical-content">
                  <div className="swc-clinical-category">
                    {isArabic ? "معلومات صحية" : "HEALTH INFORMATION"}
                  </div>

                  <h3>{isArabic ? item.arabicName : item.name}</h3>

                  <p>
                    {isArabic ? item.arabicDescription : item.description}
                  </p>

                  <div className="swc-clinical-status">
                    <ShieldCheck size={16} />
                    <span>{copy[item.status]}</span>
                  </div>

                  <a
                    href={getWhatsAppEnquiry(
                      isArabic ? item.arabicName : item.name
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="swc-clinical-link"
                  >
                    {copy.enquire}
                    <ArrowUpRight size={17} />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="swc-clinical-notice">
            <ShieldCheck size={22} />
            <p>{copy.disclaimer}</p>
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="swc-services-approach">
        <div className="swc-services-container swc-services-approach-layout">
          <div className="swc-services-approach-image">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=85"
              alt={
                isArabic
                  ? "مختصون في الرعاية الصحية يناقشون الرعاية"
                  : "Healthcare professionals discussing patient care"
              }
              loading="lazy"
            />

            <div className="swc-services-image-caption">
              <Heart size={21} />
              <span>
                {isArabic
                  ? "صحة المرأة وكرامتها ورفاهيتها"
                  : "Women's health, dignity & wellbeing"}
              </span>
            </div>
          </div>

          <div className="swc-services-approach-content">
            <div className="swc-services-eyebrow swc-services-eyebrow-dark">
              <span></span>
              {copy.approachEyebrow}
            </div>

            <h2>{copy.approachTitle}</h2>
            <p className="swc-services-approach-description">
              {copy.approachDescription}
            </p>

            <div className="swc-services-principles">
              {copy.principles.map((principle) => {
                const Icon = principle.icon;

                return (
                  <div
                    className="swc-services-principle"
                    key={principle.title}
                  >
                    <div className="swc-services-principle-icon">
                      <Icon size={21} />
                    </div>

                    <div>
                      <h3>{principle.title}</h3>
                      <p>{principle.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Link to="/about" className="swc-services-about-link">
              {isArabic ? "تعرفي علينا" : "Learn more about us"}
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="swc-services-cta" id="services-contact">
        <div className="swc-services-container">
          <div className="swc-services-cta-card">
            <div className="swc-services-cta-content">
              <span>{copy.ctaEyebrow}</span>
              <h2>{copy.ctaTitle}</h2>
              <p>{copy.ctaText}</p>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="swc-services-button swc-services-cta-button"
              >
                <MessageCircle size={18} />
                {copy.ctaButton}
                <ArrowUpRight size={18} />
              </a>
            </div>

            <div className="swc-services-cta-decoration">
              <HeartPulse size={220} strokeWidth={0.7} />
            </div>
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="swc-services-disclaimer">
        <div className="swc-services-container">
          <ShieldCheck size={21} />
          <p>{copy.disclaimer}</p>
        </div>
      </section>
    </div>
  );
}

export default Services;
