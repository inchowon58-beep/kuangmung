import Image from "next/image";
import FloatingBar from "@/components/FloatingBar";
import Header from "@/components/Header";
import { getShelterImages } from "@/lib/images";

const processSteps = [
  {
    step: "01",
    title: "전화 상담",
    description:
      "울산강아지파양·울산강아지보호소 상담 전화(0505-707-0401)로 연락 주시면 반려견의 나이, 건강 상태, 파양 사유 등을 비밀 보장 하에 상담해 드립니다.",
  },
  {
    step: "02",
    title: "방문 및 건강 확인",
    description:
      "울산유기견보호소·울산유기견보호센터에서 반려견의 건강 검진과 성격 평가를 진행합니다. 파양 전 수의사 검진을 거쳐 안전한 보호 환경을 준비합니다.",
  },
  {
    step: "03",
    title: "보호소 입소",
    description:
      "울산유기견센터 연계 보호소에 입소 후 맞춤형 케어 프로그램이 적용됩니다. 유기동물보호소 기준에 맞는 개별 공간과 산책·사회화 훈련을 제공합니다.",
  },
  {
    step: "04",
    title: "입양·무료분양 연계",
    description:
      "건강과 성격이 안정된 후 책임 있는 가정에 강아지무료분양을 연계합니다. 울산강아지파양 이후에도 입양 후 관리까지 지속적으로 지원합니다.",
  },
];

const serviceItems = [
  {
    title: "울산강아지파양 상담",
    text: "부득이한 사정으로 반려견을 맡기셔야 할 때, 울산강아지파양 전문 상담을 통해 투명하고 안전한 절차를 안내해 드립니다.",
  },
  {
    title: "울산강아지보호소·울산유기견보호소 연계",
    text: "울산강아지보호소 및 울산유기견보호소와 협력하여 반려견이 스트레스 없이 생활할 수 있는 보호 환경을 제공합니다.",
  },
  {
    title: "울산유기견센터·울산유기견보호센터 안내",
    text: "울산유기견센터 등록부터 울산유기견보호센터 입소, 건강 검진, 중성화 수술까지 원스톱으로 안내합니다.",
  },
  {
    title: "강아지무료분양·유기동물보호소 입양",
    text: "유기동물보호소에서 보호 중인 반려견의 강아지무료분양을 희망하시는 분께 입양 전 상담과 사후 관리를 지원합니다.",
  },
];

const faqItems = [
  {
    question: "울산강아지파양은 어떤 경우에 이용하나요?",
    answer:
      "이사, 알레르기, 경제적 사정, 질병 등 부득이한 사유로 직접 돌보기 어려울 때 이용하실 수 있습니다. 울산강아지보호소·울산유기견보호소 상담을 통해 대안(가족 위탁, 임시 보호 등)도 함께 안내해 드립니다.",
  },
  {
    question: "울산유기견센터와 울산유기견보호센터는 어떻게 다른가요?",
    answer:
      "울산유기견센터는 유기견 통합 관리·행정 기관이며, 울산유기견보호센터는 실제 보호·케어가 이루어지는 시설입니다. 본 상담센터는 두 기관과 연계하여 파양·보호·입양 절차를 안내합니다.",
  },
  {
    question: "강아지무료분양은 어떻게 신청하나요?",
    answer:
      "유기동물보호소에서 건강 검진을 마친 반려견을 대상으로 책임 있는 입양 가정에 강아지무료분양을 연계합니다. 전화 상담(0505-707-0401) 후 입양 전 가정 방문 상담과 서약서 작성을 진행합니다.",
  },
  {
    question: "울산 지역 외에서도 파양이 가능한가요?",
    answer:
      "주로 울산 및 인근 지역을 대상으로 운영하고 있으나, 상황에 따라 방문 상담이 가능합니다. 울산유기견보호소 입소 전 먼저 전화 상담을 통해 거주 지역과 반려견 정보를 알려 주세요.",
  },
  {
    question: "유기동물보호소 이용 시 비용이 발생하나요?",
    answer:
      "보호소 운영비, 건강 검진비, 사료·의료비 등 실비가 발생할 수 있습니다. 울산강아지파양·울산강아지보호소 상담 시 투명하게 안내해 드리며, 경제적으로 어려우신 경우에도 최대한 도움을 드리고 있습니다.",
  },
  {
    question: "입양 후에도 연락이 가능한가요?",
    answer:
      "네, 입양 가정과의 사후 관리를 위해 정기적인 안부 확인을 진행합니다. 울산강아지파양·강아지무료분양을 통해 보호된 반려견이 새 가정에서 행복하게 지낼 수 있도록 지속적으로 지원합니다.",
  },
];

export default function HomePage() {
  const shelterImages = getShelterImages();
  const heroImage = shelterImages[0];
  const galleryImages = shelterImages.slice(1);

  return (
    <>
      <Header />

      <main>
        <section
          id="about"
          className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white"
          aria-labelledby="hero-heading"
        >
          <div className="mx-auto grid max-w-5xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
            <div>
              <p className="mb-3 inline-block rounded-full bg-brand-100 px-4 py-1 text-sm font-semibold text-brand-700">
                울산유기견보호소 · 울산강아지보호소 전문 · 24시간 상담
              </p>
              <h1
                id="hero-heading"
                className="text-3xl font-extrabold leading-tight tracking-tight text-brand-900 sm:text-4xl lg:text-5xl"
              >
                울산강아지파양,
                <br />
                <span className="text-brand-600">
                  울산유기견보호소 전문 안내
                </span>
              </h1>
              <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
                울산강아지파양·울산강아지보호소·울산유기견보호소 전문
                상담센터입니다. 울산유기견센터·울산유기견보호센터와
                연계하여 반려견 파양, 유기동물보호소 위탁, 강아지무료분양
                입양까지 책임 있는 절차로 안내해 드립니다.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="tel:0505-707-0401"
                  className="inline-flex items-center rounded-xl bg-accent-500 px-6 py-3 text-sm font-bold text-white shadow-md transition hover:bg-accent-600"
                >
                  지금 전화 상담하기
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand-500 hover:text-brand-600"
                >
                  보호소 서비스 안내
                </a>
              </div>
            </div>

            {heroImage && (
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl ring-1 ring-slate-200">
                <Image
                  src={heroImage.src}
                  alt={heroImage.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            )}
          </div>
        </section>

        <section
          className="border-y border-slate-100 bg-white py-10"
          aria-label="서비스 특징"
        >
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 px-4 sm:grid-cols-4 sm:px-6">
            {[
              { label: "전문 상담", value: "10년+" },
              { label: "보호 누적", value: "3,000+" },
              { label: "입양 성공률", value: "92%" },
              { label: "상담 응답", value: "24시간" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-2xl font-extrabold text-brand-600 sm:text-3xl">
                  {item.value}
                </p>
                <p className="mt-1 text-sm text-slate-500">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="services"
          className="bg-slate-50 py-16 sm:py-20"
          aria-labelledby="services-heading"
        >
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <h2
              id="services-heading"
              className="text-2xl font-bold text-brand-900 sm:text-3xl"
            >
              울산 유기동물 보호 서비스 안내
            </h2>
            <p className="mt-4 max-w-3xl text-slate-600">
              울산강아지파양부터 울산유기견센터·울산유기견보호센터 연계,
              강아지무료분양·유기동물보호소 입양까지 울산 지역 반려견 보호
              전 과정을 안내합니다.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {serviceItems.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-lg font-bold text-brand-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="process"
          className="py-16 sm:py-20"
          aria-labelledby="process-heading"
        >
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <div className="text-center">
              <h2
                id="process-heading"
                className="text-2xl font-bold text-brand-900 sm:text-3xl"
              >
                울산강아지파양·울산유기견보호소 이용 절차
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-slate-600">
                울산강아지보호소·울산유기견보호센터 연계 파양은 신중하고
                투명한 4단계 절차로 진행됩니다. 모든 과정에서 보호자님의
                동의와 반려견의 안전을 최우선으로 합니다.
              </p>
            </div>

            <ol className="mt-12 grid gap-6 sm:grid-cols-2">
              {processSteps.map((item) => (
                <li
                  key={item.step}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <span className="text-sm font-bold text-brand-500">
                    STEP {item.step}
                  </span>
                  <h3 className="mt-2 text-lg font-bold text-brand-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          id="shelter"
          className="bg-slate-50 py-16 sm:py-20"
          aria-labelledby="shelter-heading"
        >
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <h2
              id="shelter-heading"
              className="text-2xl font-bold text-brand-900 sm:text-3xl"
            >
              울산강아지보호소·울산유기견보호센터 시설 안내
            </h2>
            <p className="mt-4 max-w-3xl text-slate-600">
              울산유기견보호소·유기동물보호소 기준에 맞춘 시설로 반려견이
              스트레스 없이 생활할 수 있도록 개별 켄넬, 넓은 운동장, 전문
              수의사 상주 시스템을 갖추고 있습니다. 아래는 실제 울산 지역
              보호소의 시설 모습입니다.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {galleryImages.map((image, index) => (
                <figure
                  key={image.src}
                  className="group overflow-hidden rounded-2xl shadow-md ring-1 ring-slate-200"
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition duration-300 group-hover:scale-105"
                      loading={index < 6 ? "eager" : "lazy"}
                    />
                  </div>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section
          className="bg-brand-900 py-16 text-white sm:py-20"
          aria-labelledby="why-heading"
        >
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <h2 id="why-heading" className="text-2xl font-bold sm:text-3xl">
              왜 울산강아지파양·울산유기견센터 상담센터인가요?
            </h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-3">
              {[
                {
                  title: "투명한 운영",
                  text: "울산강아지파양·울산강아지보호소 전 과정을 보호자님께 투명하게 공유합니다. 숨겨진 비용 없이 모든 절차를 서면으로 안내해 드립니다.",
                },
                {
                  title: "전문 수의 케어",
                  text: "울산유기견보호센터 입소 즉시 건강 검진을 실시하고, 예방 접종·중성화 수술 등 필요한 의료 처치를 전문 수의사가 직접 관리합니다.",
                },
                {
                  title: "책임 입양·무료분양",
                  text: "강아지무료분양 전 가정 방문 상담과 서약서 작성을 통해 유기동물보호소 출신 반려견이 안전한 환경에서 생활하도록 관리합니다.",
                },
              ].map((item) => (
                <article key={item.title}>
                  <h3 className="text-lg font-bold text-brand-100">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-brand-100/80">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="faq"
          className="py-16 sm:py-20"
          aria-labelledby="faq-heading"
        >
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <h2
              id="faq-heading"
              className="text-center text-2xl font-bold text-brand-900 sm:text-3xl"
            >
              울산강아지파양·강아지무료분양 자주 묻는 질문
            </h2>
            <dl className="mt-10 space-y-6">
              {faqItems.map((item) => (
                <div
                  key={item.question}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <dt className="font-bold text-brand-900">{item.question}</dt>
                  <dd className="mt-3 text-sm leading-relaxed text-slate-600">
                    {item.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section
          id="contact"
          className="border-t border-slate-100 bg-slate-50 py-16 sm:py-20"
          aria-labelledby="contact-heading"
        >
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <h2
              id="contact-heading"
              className="text-2xl font-bold text-brand-900 sm:text-3xl"
            >
              울산유기견보호소·울산강아지파양 상담 문의
            </h2>
            <p className="mt-4 text-slate-600">
              울산강아지파양, 울산유기견센터·울산유기견보호센터 이용,
              강아지무료분양·유기동물보호소 입양에 관한 모든 궁금한 점은
              전화 한 통으로 해결하실 수 있습니다. 상담 내용은 철저히 비밀이
              보장됩니다.
            </p>
            <p className="mt-6 text-3xl font-extrabold text-brand-600">
              <a href="tel:0505-707-0401">0505-707-0401</a>
            </p>
            <p className="mt-2 text-sm text-slate-500">
              운영시간: 연중무휴 24시간 상담 가능
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white py-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm font-semibold text-brand-900">
              울산강아지파양 · 울산유기견보호소 안내
            </p>
            <nav aria-label="푸터 메뉴">
              <ul className="flex flex-wrap justify-center gap-4 text-sm text-slate-500">
                <li>
                  <a href="#about" className="hover:text-brand-600">
                    소개
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-brand-600">
                    보호 서비스
                  </a>
                </li>
                <li>
                  <a href="#process" className="hover:text-brand-600">
                    파양 절차
                  </a>
                </li>
                <li>
                  <a href="#shelter" className="hover:text-brand-600">
                    보호소 안내
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-brand-600">
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.agapetstory.co.kr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-600"
                  >
                    아가펫 홈페이지
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <p className="mt-4 text-center text-xs leading-relaxed text-slate-400">
            울산강아지파양 · 울산강아지보호소 · 울산유기견보호소 ·
            울산유기견센터 · 울산유기견보호센터 · 강아지무료분양 ·
            유기동물보호소 전문 안내 · 아가펫
          </p>
          <p className="mt-2 text-center text-xs text-slate-400">
            © {new Date().getFullYear()} 울산강아지파양 안내. All rights
            reserved.
          </p>
        </div>
      </footer>

      <FloatingBar />
    </>
  );
}
