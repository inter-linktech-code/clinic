
import { useTranslation } from "react-i18next";
import {
  ArrowRight,
  ArrowUpRight,
  Heart,
  ShieldCheck,
  Globe2,
  BookOpen,
  Sparkles,
  Users,
  Stethoscope,
  MessageCircle,
  Scale,
  HeartHandshake,
} from "lucide-react";

import SEO from "../components/SEO";
import "./About.css";

const WHATSAPP_NUMBER = "27730423979";

function About() {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const content = {
    en: {
      eyebrow: "GET TO KNOW US",
      title: "A more thoughtful approach to",
      highlight: "women's wellbeing.",
      intro:
        "Sarah's Women's Clinic is an online women's health information and enquiry platform focused on supporting informed conversations about reproductive health, wellbeing and access to appropriate healthcare information.",
      missionLabel: "OUR MISSION",
      missionTitle: "Knowledge, dignity and informed choices.",
      missionText:
        "Our mission is to make reliable women's health information more accessible, encourage respectful conversations and help women understand the importance of appropriate, qualified and legally compliant healthcare.",
      visionLabel: "OUR VISION",
      visionTitle: "A future where every woman is heard.",
      visionText:
        "We envision a world where women can seek trustworthy information, ask questions without judgment and make informed decisions with respect for their individual circumstances and local healthcare laws.",
      valuesLabel: "WHAT GUIDES US",
      valuesTitle: "The principles behind our work.",
      valuesIntro:
        "Every interaction should reflect our commitment to respect, responsible information and the wellbeing of women.",
      values: [
        {
          title: "Privacy and respect",
          description:
            "We believe that personal health enquiries deserve discretion, respect and responsible handling of personal information.",
        },
        {
          title: "Informed understanding",
          description:
            "We encourage access to understandable health information so women can have better-informed conversations with qualified professionals.",
        },
        {
          title: "Compassionate communication",
          description:
            "Every woman deserves to be treated with dignity, sensitivity and without judgment.",
        },
        {
          title: "Responsible healthcare",
          description:
            "Healthcare information and any clinical activities must respect professional standards and applicable local laws.",
        },
      ],
      focusLabel: "OUR PRIMARY MARKET",
      focusTitle: "Building meaningful connections in Bahrain.",
      focusText:
        "Bahrain is our primary market of interest. Our wider international information strategy also considers the United Arab Emirates and Qatar. We recognize that healthcare regulations and the availability of services differ between countries.",
      focusNote:
        "Information about a country does not mean that clinical services are licensed, available or authorized there.",
      international: "OUR INTERNATIONAL OUTLOOK",
      internationalText:
        "Our website is being developed to provide accessible, clear and responsible women's health information for an international audience.",
      transparencyLabel: "OUR COMMITMENT",
      transparencyTitle: "Transparency comes first.",
      transparencyText:
        "Sarah's Women's Clinic currently operates as an online information and enquiry platform. Its relevant healthcare licensing and authorization processes are being pursued. Any future clinical service will only be offered where the necessary approvals have been obtained and applicable law permits it.",
      professionalsTitle: "Professional standards",
      professionalsText:
        "Clinical information and healthcare decisions should involve appropriately qualified and licensed medical professionals.",
      legalTitle: "Respect for local regulations",
      legalText:
        "We recognize that reproductive healthcare laws differ across Bahrain, the UAE and Qatar. We do not represent any service as legally available without the necessary authorization.",
      contactLabel: "LET'S START A CONVERSATION",
      contactTitle: "Questions about Sarah's Women's Clinic?",
      contactText:
        "For general information about our organisation and website, you can reach our team through WhatsApp.",
      contactButton: "Contact us on WhatsApp",
      disclaimer:
        "This website provides general information and is not a substitute for professional medical advice, diagnosis or treatment. It does not establish a doctor-patient relationship.",
      footer: "A commitment to women's wellbeing, dignity and understanding.",
    },
    ar: {
      eyebrow: "تعرفي علينا",
      title: "نهج أكثر اهتماماً بـ",
      highlight: "صحة المرأة ورفاهيتها.",
      intro:
        "عيادة سارة لصحة المرأة هي منصة إلكترونية للمعلومات والاستفسارات المتعلقة بصحة المرأة، وتهدف إلى دعم الحوار الواعي حول الصحة الإنجابية والرفاهية والوصول إلى المعلومات الصحية المناسبة.",
      missionLabel: "رسالتنا",
      missionTitle: "المعرفة والكرامة والاختيارات الواعية.",
      missionText:
        "تتمثل رسالتنا في تسهيل الوصول إلى المعلومات الموثوقة حول صحة المرأة، وتشجيع الحوار القائم على الاحترام، ومساعدة النساء على فهم أهمية الرعاية الصحية المناسبة التي يقدمها مختصون مؤهلون ووفقاً للقوانين المعمول بها.",
      visionLabel: "رؤيتنا",
      visionTitle: "مستقبل تُسمع فيه كل امرأة.",
      visionText:
        "نتطلع إلى عالم تستطيع فيه النساء الحصول على معلومات موثوقة وطرح الأسئلة دون أحكام مسبقة واتخاذ قرارات واعية مع مراعاة ظروفهن الفردية والقوانين الصحية المحلية.",
      valuesLabel: "مبادئنا",
      valuesTitle: "المبادئ التي توجه عملنا.",
      valuesIntro:
        "يجب أن يعكس كل تواصل التزامنا بالاحترام والمعلومات المسؤولة وصحة المرأة ورفاهيتها.",
      values: [
        {
          title: "الخصوصية والاحترام",
          description:
            "نؤمن بأن الاستفسارات الصحية الشخصية تستحق السرية والاحترام والتعامل المسؤول مع المعلومات الشخصية.",
        },
        {
          title: "الفهم الواعي",
          description:
            "نشجع الوصول إلى المعلومات الصحية الواضحة لتمكين النساء من إجراء حوارات أكثر وعياً مع المختصين المؤهلين.",
        },
        {
          title: "التواصل الإنساني",
          description:
            "تستحق كل امرأة أن تُعامل بكرامة وحساسية ودون إصدار أحكام مسبقة.",
        },
        {
          title: "الرعاية الصحية المسؤولة",
          description:
            "يجب أن تحترم المعلومات الصحية وأي أنشطة سريرية المعايير المهنية والقوانين المحلية المعمول بها.",
        },
      ],
      focusLabel: "سوقنا الأساسي",
      focusTitle: "بناء تواصل هادف في البحرين.",
      focusText:
        "تُعد البحرين السوق الأساسي الذي نركز عليه. وتشمل خطتنا الدولية الأوسع دولة الإمارات العربية المتحدة وقطر. وندرك أن اللوائح الصحية وتوافر الخدمات تختلف من دولة إلى أخرى.",
      focusNote:
        "إن تقديم معلومات عن أي دولة لا يعني أن الخدمات السريرية مرخصة أو متاحة أو مصرح بها فيها.",
      international: "توجهنا الدولي",
      internationalText:
        "نعمل على تطوير موقعنا لتوفير معلومات واضحة ومسؤولة وسهلة الوصول حول صحة المرأة لجمهور دولي.",
      transparencyLabel: "التزامنا",
      transparencyTitle: "الشفافية تأتي أولاً.",
      transparencyText:
        "تعمل عيادة سارة لصحة المرأة حالياً كمنصة إلكترونية للمعلومات والاستفسارات. ويجري العمل على استكمال إجراءات التراخيص والموافقات الصحية ذات الصلة. ولن يتم تقديم أي خدمة سريرية مستقبلية إلا بعد الحصول على الموافقات اللازمة وبما يتوافق مع القوانين المعمول بها.",
      professionalsTitle: "المعايير المهنية",
      professionalsText:
        "ينبغي أن تستند المعلومات السريرية والقرارات الصحية إلى مشاركة مختصين طبيين مؤهلين ومرخصين حسب الأصول.",
      legalTitle: "احترام الأنظمة المحلية",
      legalText:
        "ندرك أن قوانين الرعاية الصحية الإنجابية تختلف بين البحرين والإمارات العربية المتحدة وقطر. ولا نقدم أي خدمة على أنها متاحة قانونياً دون الحصول على التصاريح اللازمة.",
      contactLabel: "يسعدنا التواصل معك",
      contactTitle: "هل لديك أسئلة حول عيادة سارة لصحة المرأة؟",
      contactText:
        "للاستفسارات العامة حول مؤسستنا وموقعنا الإلكتروني، يمكنك التواصل مع فريقنا عبر واتساب.",
      contactButton: "تواصلي معنا عبر واتساب",
      disclaimer:
        "يقدم هذا الموقع معلومات عامة ولا يُعد بديلاً عن الاستشارة الطبية المهنية أو التشخيص أو العلاج. ولا تنشأ عن استخدامه علاقة طبيب ومريض.",
      footer: "التزام بصحة المرأة وكرامتها وتعزيز الوعي.",
    },
  };

  const data = isArabic ? content.ar : content.en;

  const icons = [
    <LockIcon key="privacy" />,
    <BookOpen key="education" />,
    <Heart key="compassion" />,
    <ShieldCheck key="responsibility" />,
  ];

  function LockIcon() {
    return <ShieldCheck size={27} strokeWidth={1.5} />;
  }

  const whatsappLink =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      "Hello Sarah's Women's Clinic. I would like general information about your organisation."
    )}`;

  return (
    <div className={`swc-about ${isArabic ? "rtl" : "ltr"}`}>

      <SEO
        title={
          isArabic
            ? "من نحن | عيادة سارة لصحة المرأة"
            : "About Sarah's Women's Clinic | Women's Health Information"
        }
        description={data.intro}
        noindex={true}
      />

      {/* PAGE HERO */}

      <section className="swa-hero">

        <div className="swa-hero-decoration swa-decoration-one"></div>
        <div className="swa-hero-decoration swa-decoration-two"></div>

        <div className="swc-container swa-hero-inner">

          <div className="swa-breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <span>{data.eyebrow}</span>
          </div>

          <div className="swa-hero-content">

            <div className="swc-eyebrow">
              <span className="swc-eyebrow-line"></span>
              {data.eyebrow}
            </div>

            <h1>
              {data.title}
              <span>{data.highlight}</span>
            </h1>

            <p>{data.intro}</p>

            <a href="#swa-mission" className="swa-hero-button">
              {data.missionLabel}
              <ArrowDownIcon />
            </a>

          </div>

          <div className="swa-hero-seal">

            <div className="swa-seal-circle">
              <Heart size={62} strokeWidth={1} />
              <span>HER WELLBEING</span>
              <small>HER DIGNITY</small>
            </div>

          </div>

        </div>

        <div className="swa-hero-bottom">
          <span>01</span>
          <div></div>
          <span>02</span>
        </div>

      </section>

      {/* MISSION */}

      <section className="swa-mission" id="swa-mission">

        <div className="swc-container swa-mission-grid">

          <div className="swa-section-index">
            <span>01</span>
            <div></div>
            <small>WHO WE ARE</small>
          </div>

          <div className="swa-mission-content">

            <div className="swc-eyebrow">
              <span className="swc-eyebrow-line"></span>
              {data.missionLabel}
            </div>

            <h2>{data.missionTitle}</h2>

            <p>{data.missionText}</p>

            <div className="swa-mission-signature">
              <Heart size={19} />
              <span>Sarah's Women's Clinic</span>
            </div>

          </div>

          <div className="swa-mission-art">

            <div className="swa-art-circle">
              <Sparkles size={38} />
              <span>Care begins with understanding.</span>
            </div>

            <div className="swa-art-small">WELLNESS · DIGNITY · KNOWLEDGE</div>

          </div>

        </div>

      </section>

      {/* VISION */}

      <section className="swa-vision">

        <div className="swc-container swa-vision-layout">

          <div className="swa-vision-image">

            <div className="swa-vision-image-inner">

              <span>OUR VISION</span>

              <Heart size={75} strokeWidth={0.8} />

              <h2>Every woman deserves to be heard.</h2>

              <div className="swa-vision-line"></div>

              <small>UNDERSTANDING · RESPECT · WELLBEING</small>

            </div>

          </div>

          <div className="swa-vision-content">

            <div className="swc-eyebrow">
              <span className="swc-eyebrow-line"></span>
              {data.visionLabel}
            </div>

            <h2>{data.visionTitle}</h2>

            <p>{data.visionText}</p>

            <div className="swa-vision-points">

              <div>
                <ShieldCheck size={21} />
                <span>Responsible information</span>
              </div>

              <div>
                <HeartHandshake size={21} />
                <span>Respectful communication</span>
              </div>

              <div>
                <BookOpen size={21} />
                <span>Informed understanding</span>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* VALUES */}

      <section className="swa-values">

        <div className="swc-container">

          <div className="swa-values-heading">

            <div className="swc-eyebrow">
              <span className="swc-eyebrow-line"></span>
              {data.valuesLabel}
            </div>

            <h2>{data.valuesTitle}</h2>

            <p>{data.valuesIntro}</p>

          </div>

          <div className="swa-values-grid">

            {data.values.map((value, index) => (

              <article className="swa-value-card" key={value.title}>

                <div className="swa-value-top">
                  <span>0{index + 1}</span>
                  {icons[index]}
                </div>

                <h3>{value.title}</h3>

                <p>{value.description}</p>

                <div className="swa-value-bottom"></div>

              </article>

            ))}

          </div>

        </div>

      </section>

      {/* INTERNATIONAL FOCUS */}

      <section className="swa-international">

        <div className="swc-container">

          <div className="swa-international-layout">

            <div className="swa-international-content">

              <div className="swc-eyebrow">
                <span className="swc-eyebrow-line"></span>
                {data.focusLabel}
              </div>

              <h2>{data.focusTitle}</h2>

              <p>{data.focusText}</p>

              <div className="swa-market-primary">

                <span>PRIMARY MARKET</span>
                <Globe2 size={25} />
                <strong>Bahrain</strong>
                <small>BH · BAHRAIN</small>

              </div>

              <div className="swa-market-secondary">

                <span>WIDER INTERNATIONAL INTEREST</span>

                <div>
                  <span>United Arab Emirates</span>
                  <span>Qatar</span>
                </div>

              </div>

              <p className="swa-market-note">{data.focusNote}</p>

            </div>

            <div className="swa-international-art">

              <div className="swa-globe-circle">
                <Globe2 size={100} strokeWidth={0.8} />
              </div>

              <span>WOMEN'S HEALTH</span>
              <strong>INTERNATIONAL OUTLOOK</strong>

            </div>

          </div>

        </div>

      </section>

      {/* TRANSPARENCY */}

      <section className="swa-transparency">

        <div className="swc-container">

          <div className="swa-transparency-heading">

            <div className="swc-eyebrow">
              <span className="swc-eyebrow-line"></span>
              {data.transparencyLabel}
            </div>

            <h2>{data.transparencyTitle}</h2>

            <p>{data.transparencyText}</p>

          </div>

          <div className="swa-transparency-grid">

            <article>

              <div>
                <Stethoscope size={27} />
              </div>

              <h3>{data.professionalsTitle}</h3>

              <p>{data.professionalsText}</p>

            </article>

            <article>

              <div>
                <Scale size={27} />
              </div>

              <h3>{data.legalTitle}</h3>

              <p>{data.legalText}</p>

            </article>

          </div>

        </div>

      </section>

      {/* CONTACT */}

      <section className="swa-contact">

        <div className="swc-container swa-contact-inner">

          <div>

            <div className="swc-eyebrow">
              <span className="swc-eyebrow-line"></span>
              {data.contactLabel}
            </div>

            <h2>{data.contactTitle}</h2>

            <p>{data.contactText}</p>

          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="swa-contact-button"
          >
            <MessageCircle size={21} />
            {data.contactButton}
            <ArrowUpRight size={18} />
          </a>

        </div>

      </section>

      {/* MEDICAL DISCLAIMER */}

      <section className="swa-disclaimer">

        <div className="swc-container swa-disclaimer-inner">

          <ShieldCheck size={24} />

          <p>{data.disclaimer}</p>

        </div>

      </section>

      {/* PAGE FOOTER */}

      <section className="swa-bottom">

        <div className="swc-container">

          <Heart size={23} />

          <p>{data.footer}</p>

          <a href="/">
            {isArabic ? "العودة إلى الرئيسية" : "Return to homepage"}
            <ArrowRight size={17} />
          </a>

        </div>

      </section>

    </div>
  );
}

function ArrowDownIcon() {
  return <ArrowRight size={18} />;
}

export default About;
