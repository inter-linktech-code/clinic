
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  BookOpen,
  Bookmark,
  CalendarDays,
  ClipboardList,
  FileText,
  Flower2,
  Heart,
  HeartPulse,
  Leaf,
  Lightbulb,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from "lucide-react";

import SEO from "../components/SEO";
import { getWhatsAppLink } from "../components/WhatsAppButton";

import "./PatientResources.css";

const images = {
  hero:
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1900&q=85",
  featured:
    "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1100&q=85",
  preparation:
    "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=85",
  wellbeing:
    "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=85",
  nutrition:
    "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=85",
  questions:
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=85",
};

const resourceContent = {
  en: {
    eyebrow: "YOUR KNOWLEDGE, YOUR WELLBEING",
    title: "Information that helps you make informed choices.",
    description:
      "Explore accessible women's health information, practical preparation tips and general wellbeing resources in one thoughtful space.",
    heroTag: "A place to learn and understand",
    introEyebrow: "A MORE INFORMED YOU",
    introTitle: "Good information is a powerful starting point.",
    introText:
      "Understanding your body and knowing what questions to ask can help you take a more active role in conversations about your health. Our resource hub brings together general educational information designed to support awareness and informed decision-making.",
    featuredLabel: "FEATURED READING",
    featuredTitle: "Preparing for a health conversation",
    featuredText:
      "A little preparation can make a healthcare conversation feel clearer and more productive. Consider writing down your questions, noting what you would like to understand and asking for explanations whenever something is unclear.",
    featuredPoints: [
      "Write down the questions you want to ask.",
      "Share only the information relevant to your consultation.",
      "Ask about options, benefits and possible risks.",
      "Make sure you understand the next steps.",
    ],
    readLabel: "Explore the resource",
    categoriesEyebrow: "EXPLORE OUR LIBRARY",
    categoriesTitle: "Knowledge for every stage of life.",
    categoriesText:
      "Browse general information across different areas of women's wellbeing.",
    categories: [
      {
        icon: HeartPulse,
        title: "Women's Health",
        description:
          "Explore general information about women's health, body awareness and wellbeing.",
        link: "/womens-health",
        image: images.wellbeing,
        tag: "HEALTH AWARENESS",
      },
      {
        icon: Flower2,
        title: "Reproductive Health",
        description:
          "Learn about reproductive wellbeing, menstrual health and different life stages.",
        link: "/reproductive-health",
        image: images.nutrition,
        tag: "BODY KNOWLEDGE",
      },
      {
        icon: ClipboardList,
        title: "Preparing for Consultations",
        description:
          "Ideas for organising questions and preparing for a healthcare discussion.",
        link: "#preparation",
        image: images.preparation,
        tag: "PRACTICAL GUIDANCE",
      },
      {
        icon: Lightbulb,
        title: "Understanding Health Information",
        description:
          "Helpful ways to approach health information and ask clearer questions.",
        link: "#understanding",
        image: images.questions,
        tag: "INFORMED CHOICES",
      },
    ],
    preparationEyebrow: "BE PREPARED",
    preparationTitle: "Make your next health conversation count.",
    preparationText:
      "Whether you are seeking general information or preparing for a professional consultation, having your thoughts organised can help you communicate more confidently.",
    preparationCards: [
      {
        number: "01",
        title: "Write your questions",
        text: "List the things you want to ask so important questions are not forgotten.",
      },
      {
        number: "02",
        title: "Understand your options",
        text: "Ask a qualified professional to explain relevant options and considerations.",
      },
      {
        number: "03",
        title: "Clarify next steps",
        text: "Before finishing a consultation, make sure you understand any recommended follow-up.",
      },
    ],
    wellbeingEyebrow: "EVERYDAY WELLBEING",
    wellbeingTitle: "Small steps can support a healthier routine.",
    wellbeingText:
      "Everyday habits can contribute to general wellbeing. Personal health needs differ, so seek qualified guidance when you have questions about your own circumstances.",
    wellbeingItems: [
      "Make time for rest and adequate sleep.",
      "Choose balanced meals where possible.",
      "Include movement that feels suitable for you.",
      "Make space for your emotional wellbeing.",
    ],
    noteTitle: "Your health questions deserve thoughtful answers.",
    noteText:
      "Use reliable health information as a starting point, not as a substitute for an individual assessment by a qualified healthcare professional.",
    ctaEyebrow: "WE ARE HERE TO HELP",
    ctaTitle: "Have a general question?",
    ctaText:
      "You can contact our team for general information about this platform and the resources available here. Please do not send private medical records or sensitive health details through general enquiries.",
    ctaButton: "Make a general enquiry",
    disclaimerTitle: "Important health information",
    disclaimer:
      "The information on this page is provided for general educational and awareness purposes only. It is not medical advice, diagnosis or treatment, and does not replace consultation with a qualified healthcare professional. Healthcare services, where offered, are subject to applicable local laws and professional authorisation.",
    home: "Home",
    resources: "Patient Resources",
    arabic: {
      eyebrow: "معرفتك، صحتك ورفاهيتك",
      title: "معلومات تساعدك على اتخاذ قرارات أكثر وعياً.",
      description:
        "اكتشفي معلومات عامة عن صحة المرأة، ونصائح عملية للاستعداد للاستشارات، وموارد تثقيفية تدعم رفاهيتك.",
      heroTag: "مساحة للتعلم والفهم",
      introEyebrow: "معرفة صحية أفضل",
      introTitle: "المعلومة الجيدة بداية قوية.",
      introText:
        "إن فهم جسمك ومعرفة الأسئلة التي يمكنك طرحها يساعدانك على المشاركة بوعي أكبر في الحوارات المتعلقة بصحتك. تجمع هذه الصفحة معلومات تثقيفية عامة لدعم الوعي واتخاذ القرارات المستنيرة.",
      featuredLabel: "موضوع مختار",
      featuredTitle: "الاستعداد لمحادثة صحية",
      featuredText:
        "يمكن للتحضير البسيط أن يجعل الحديث مع مقدم الرعاية الصحية أكثر وضوحاً وفائدة. فكري في تدوين أسئلتك وما ترغبين في فهمه، واطلبي التوضيح عندما تكون أي معلومة غير واضحة.",
      featuredPoints: [
        "دوّني الأسئلة التي ترغبين في طرحها.",
        "شاركي المعلومات ذات الصلة بالاستشارة فقط.",
        "اسألي عن الخيارات والفوائد والمخاطر المحتملة.",
        "تأكدي من فهم الخطوات التالية.",
      ],
      readLabel: "استكشفي الموضوع",
      categoriesEyebrow: "استكشفي مكتبتنا",
      categoriesTitle: "معرفة صحية لمراحل الحياة المختلفة.",
      categoriesText:
        "تصفحي معلومات عامة حول مجالات متنوعة من صحة المرأة ورفاهيتها.",
      categories: [
        {
          icon: HeartPulse,
          title: "صحة المرأة",
          description:
            "معلومات عامة حول صحة المرأة والوعي بالجسم والرفاهية.",
          link: "/womens-health",
          image: images.wellbeing,
          tag: "التوعية الصحية",
        },
        {
          icon: Flower2,
          title: "الصحة الإنجابية",
          description:
            "تعرفي على الصحة الإنجابية وصحة الدورة ومراحل الحياة المختلفة.",
          link: "/reproductive-health",
          image: images.nutrition,
          tag: "معرفة الجسم",
        },
        {
          icon: ClipboardList,
          title: "الاستعداد للاستشارات",
          description:
            "أفكار لتنظيم الأسئلة والاستعداد للحديث مع مقدم الرعاية الصحية.",
          link: "#preparation",
          image: images.preparation,
          tag: "إرشادات عملية",
        },
        {
          icon: Lightbulb,
          title: "فهم المعلومات الصحية",
          description:
            "طرق مفيدة للتعامل مع المعلومات الصحية وطرح أسئلة أوضح.",
          link: "#understanding",
          image: images.questions,
          tag: "قرارات واعية",
        },
      ],
      preparationEyebrow: "كوني مستعدة",
      preparationTitle: "اجعلي محادثتك الصحية القادمة أكثر فائدة.",
      preparationText:
        "سواء كنت تبحثين عن معلومات عامة أو تستعدين لاستشارة مهنية، فإن تنظيم أفكارك قد يساعدك على التواصل بثقة أكبر.",
      preparationCards: [
        {
          number: "01",
          title: "دوّني أسئلتك",
          text: "اكتبي ما ترغبين في السؤال عنه حتى لا تنسي النقاط المهمة.",
        },
        {
          number: "02",
          title: "افهمي الخيارات",
          text: "اطلبي من المختص المؤهل شرح الخيارات والاعتبارات ذات الصلة.",
        },
        {
          number: "03",
          title: "وضّحي الخطوات التالية",
          text: "تأكدي من فهم أي متابعة أو خطوات موصى بها قبل انتهاء الاستشارة.",
        },
      ],
      wellbeingEyebrow: "الرفاهية اليومية",
      wellbeingTitle: "خطوات صغيرة تدعم روتيناً صحياً أفضل.",
      wellbeingText:
        "قد تساهم العادات اليومية في دعم الصحة العامة. تختلف الاحتياجات الصحية من شخص لآخر، لذا اطلبي إرشاداً مهنياً عند وجود أسئلة تتعلق بظروفك الخاصة.",
      wellbeingItems: [
        "خصصي وقتاً للراحة والنوم الكافي.",
        "اختاري وجبات متوازنة قدر الإمكان.",
        "مارسي نشاطاً بدنياً يناسبك.",
        "اهتمي بصحتك النفسية والعاطفية.",
      ],
      noteTitle: "أسئلتك الصحية تستحق إجابات مدروسة.",
      noteText:
        "استخدمي المعلومات الصحية الموثوقة كنقطة بداية، وليس بديلاً عن التقييم الفردي لدى مختص رعاية صحية مؤهل.",
      ctaEyebrow: "نحن هنا للمساعدة",
      ctaTitle: "هل لديك استفسار عام؟",
      ctaText:
        "يمكنك التواصل مع فريقنا للاستفسار عن هذه المنصة والموارد المتاحة فيها. يرجى عدم إرسال السجلات الطبية الخاصة أو التفاصيل الصحية الحساسة عبر الاستفسارات العامة.",
      ctaButton: "إرسال استفسار عام",
      disclaimerTitle: "معلومات صحية مهمة",
      disclaimer:
        "تُقدَّم المعلومات الواردة في هذه الصفحة لأغراض التثقيف والتوعية العامة فقط. وهي لا تُعد نصيحة طبية أو تشخيصاً أو علاجاً، ولا تحل محل استشارة مختص رعاية صحية مؤهل. وتخضع الخدمات الصحية، عند تقديمها، للقوانين المحلية المعمول بها والتراخيص المهنية المطلوبة.",
      home: "الرئيسية",
      resources: "موارد المريضات",
    },
  },
};

function PatientResources() {
  const { i18n } = useTranslation();
  const isArabic = i18n.language?.startsWith("ar");
  const content = resourceContent.en;
  const data = isArabic ? content.arabic : content;

  const categories = data.categories;
  const preparationCards = data.preparationCards;
  const whatsappLink = getWhatsAppLink();

  return (
    <div className={`swc-resources-page ${isArabic ? "rtl" : "ltr"}`}>
      <SEO
        title={
          isArabic
            ? "موارد صحة المرأة | معلومات وتثقيف صحي"
            : "Patient Resources | Women's Health Information & Guides"
        }
        description={
          isArabic
            ? "استكشفي موارد تثقيفية ومعلومات عامة حول صحة المرأة والرفاهية والاستعداد للاستشارات الصحية."
            : "Explore general women's health information, wellbeing resources and practical guides to help you prepare for healthcare conversations."
        }
        noindex={true}
      />

      <section
        className="swc-resources-hero"
        style={{ backgroundImage: `url(${images.hero})` }}
      >
        <div className="swc-resources-hero-overlay" />

        <div className="swc-resources-container swc-resources-hero-content">
          <div className="swc-resources-breadcrumb">
            <Link to="/">{data.home}</Link>
            <span>/</span>
            <span>{data.resources}</span>
          </div>

          <span className="swc-resources-eyebrow">
            <Sparkles size={15} />
            {data.eyebrow}
          </span>

          <h1>{data.title}</h1>
          <p>{data.description}</p>

          <div className="swc-resources-hero-tag">
            <BookOpen size={17} />
            {data.heroTag}
          </div>
        </div>

        <div className="swc-resources-hero-index">
          <span>01</span>
          <span />
          <span>04</span>
        </div>
      </section>

      <section className="swc-resources-intro">
        <div className="swc-resources-container swc-resources-intro-grid">
          <div className="swc-resources-intro-copy">
            <span className="swc-resources-section-label">
              {data.introEyebrow}
            </span>
            <h2>{data.introTitle}</h2>
            <p>{data.introText}</p>

            <div className="swc-resources-intro-signature">
              <span className="swc-resources-signature-icon">
                <Heart size={18} />
              </span>
              <span>Sarah's Women's Clinic</span>
            </div>
          </div>

          <div className="swc-resources-featured-card">
            <img src={images.featured} alt="" />
            <div className="swc-resources-featured-content">
              <span className="swc-resources-section-label">
                {data.featuredLabel}
              </span>
              <h3>{data.featuredTitle}</h3>
              <p>{data.featuredText}</p>

              <ul>
                {data.featuredPoints.map((point) => (
                  <li key={point}>
                    <ShieldCheck size={17} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <a href="#preparation" className="swc-resources-text-link">
                {data.readLabel}
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="swc-resources-library">
        <div className="swc-resources-container">
          <div className="swc-resources-section-heading">
            <div>
              <span className="swc-resources-section-label">
                {data.categoriesEyebrow}
              </span>
              <h2>{data.categoriesTitle}</h2>
            </div>
            <p>{data.categoriesText}</p>
          </div>

          <div className="swc-resources-category-grid">
            {categories.map((item, index) => {
              const Icon = item.icon;

              return (
                <article className="swc-resources-category-card" key={item.title}>
                  <Link
                    to={item.link.startsWith("#") ? "/" + item.link : item.link}
                    onClick={
                      item.link.startsWith("#")
                        ? (event) => {
                            event.preventDefault();
                            document
                              .querySelector(item.link)
                              ?.scrollIntoView({ behavior: "smooth" });
                          }
                        : undefined
                    }
                    className="swc-resources-card-image"
                    aria-label={item.title}
                  >
                    <img src={item.image} alt="" loading="lazy" />
                    <span className="swc-resources-card-number">
                      0{index + 1}
                    </span>
                    <span className="swc-resources-card-arrow">
                      <ArrowUpRight size={19} />
                    </span>
                  </Link>

                  <div className="swc-resources-card-content">
                    <span className="swc-resources-card-tag">{item.tag}</span>
                    <div className="swc-resources-card-title-row">
                      <span className="swc-resources-card-icon">
                        <Icon size={20} />
                      </span>
                      <h3>{item.title}</h3>
                    </div>
                    <p>{item.description}</p>
                    <Link
                      to={item.link.startsWith("#") ? "/" + item.link : item.link}
                      onClick={
                        item.link.startsWith("#")
                          ? (event) => {
                              event.preventDefault();
                              document
                                .querySelector(item.link)
                                ?.scrollIntoView({ behavior: "smooth" });
                            }
                          : undefined
                      }
                      className="swc-resources-card-link"
                    >
                      {data.readLabel}
                      <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="swc-resources-preparation"
        id="preparation"
      >
        <div className="swc-resources-container swc-resources-preparation-grid">
          <div className="swc-resources-preparation-heading">
            <span className="swc-resources-section-label">
              {data.preparationEyebrow}
            </span>
            <h2>{data.preparationTitle}</h2>
            <p>{data.preparationText}</p>
            <div className="swc-resources-preparation-icon">
              <CalendarDays size={28} />
            </div>
          </div>

          <div className="swc-resources-steps">
            {preparationCards.map((item) => (
              <article className="swc-resources-step" key={item.number}>
                <span className="swc-resources-step-number">
                  {item.number}
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
                <ArrowUpRight size={19} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="swc-resources-wellbeing" id="understanding">
        <div className="swc-resources-container swc-resources-wellbeing-grid">
          <div className="swc-resources-wellbeing-image">
            <img src={images.nutrition} alt="" loading="lazy" />
            <div className="swc-resources-image-note">
              <Leaf size={19} />
              <span>{data.wellbeingEyebrow}</span>
            </div>
          </div>

          <div className="swc-resources-wellbeing-copy">
            <span className="swc-resources-section-label">
              {data.wellbeingEyebrow}
            </span>
            <h2>{data.wellbeingTitle}</h2>
            <p>{data.wellbeingText}</p>

            <ul>
              {data.wellbeingItems.map((item) => (
                <li key={item}>
                  <span className="swc-resources-check">
                    <Heart size={14} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="swc-resources-note">
        <div className="swc-resources-container swc-resources-note-inner">
          <div className="swc-resources-note-icon">
            <ShieldCheck size={25} />
          </div>
          <div>
            <h2>{data.noteTitle}</h2>
            <p>{data.noteText}</p>
          </div>
        </div>
      </section>

      <section className="swc-resources-cta">
        <div className="swc-resources-container swc-resources-cta-inner">
          <div className="swc-resources-cta-symbol">
            <MessageCircle size={27} />
          </div>
          <div className="swc-resources-cta-copy">
            <span className="swc-resources-section-label">
              {data.ctaEyebrow}
            </span>
            <h2>{data.ctaTitle}</h2>
            <p>{data.ctaText}</p>
          </div>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="swc-resources-cta-button"
          >
            {data.ctaButton}
            <ArrowUpRight size={18} />
          </a>
        </div>
      </section>

      <section className="swc-resources-disclaimer">
        <div className="swc-resources-container">
          <div className="swc-resources-disclaimer-heading">
            <Stethoscope size={20} />
            <h2>{data.disclaimerTitle}</h2>
          </div>
          <p>{data.disclaimer}</p>
        </div>
      </section>
    </div>
  );
}

export default PatientResources;
