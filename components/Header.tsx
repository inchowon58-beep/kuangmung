const navItems = [
  { href: "#about", label: "소개" },
  { href: "#services", label: "보호 서비스" },
  { href: "#process", label: "파양 절차" },
  { href: "#shelter", label: "보호소 안내" },
  { href: "#faq", label: "자주 묻는 질문" },
  { href: "#contact", label: "문의" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
        <a
          href="#"
          className="text-lg font-bold tracking-tight text-brand-900 sm:text-xl"
        >
          울산강아지파양 안내
        </a>
        <nav aria-label="주요 메뉴">
          <ul className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-slate-600 transition hover:text-brand-600"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
