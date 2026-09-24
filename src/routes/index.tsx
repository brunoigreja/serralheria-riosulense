import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import {
  Camera,
  ChevronRight,
  Compass,
  Droplets,
  Globe2,
  Hammer,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Share2,
  Wrench,
  Zap,
} from "lucide-react";
import workshop from "../assets/industrial-workshop.jpg";
import warehouse from "../assets/blue-warehouse.jpg";
import gate from "../assets/architectural-gate.jpg";
import roof from "../assets/industrial-roof.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Riosulense | Serralheria e Funilaria em Rio do Sul" },
      { name: "description", content: "Estruturas metálicas, esquadrias sob medida e soluções de funilaria em Rio do Sul e região." },
      { property: "og:title", content: "Riosulense | Serralheria e Funilaria" },
      { property: "og:description", content: "Tradição e durabilidade em estruturas metálicas." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const specialties = [
  {
    title: "Serralheria",
    icon: Wrench,
    watermark: Hammer,
    items: ["Portões Basculantes e Automatizados", "Galpões e Estruturas Metálicas Pesadas", "Grades, Corrimãos e Guarda-corpos", "Esquadrias de Ferro Sob Medida"],
  },
  {
    title: "Funilaria",
    icon: Compass,
    watermark: Compass,
    items: ["Calhas e Rufos de Alta Performance", "Condutores e Coifas Industriais", "Revestimentos em Zinco e Galvanizados", "Manutenção Preventiva de Telhados"],
  },
];

function Logo() {
  return (
    <a href="#inicio" className="brand" aria-label="Riosulense — início">
      <svg viewBox="0 0 42 42" aria-hidden="true"><path d="M21 3 36 11v19l-15 9L6 30V11L21 3Zm0 6-9 5v12l5 3V17l9-5-5-3Zm10 7-9 5v11l9-5V16Z" fill="currentColor"/><path d="m17 29 4 3v-8l-4-2v7Z" fill="currentColor" opacity=".55"/></svg>
      <span>RIOSULENSE</span>
    </a>
  );
}

function Index() {
  useEffect(() => {
    const selectors = [
      ".section-head",
      ".specialty-card",
      ".featured > .eyebrow",
      ".featured > h2",
      ".featured-main",
      ".featured-side img",
      ".gallery > .eyebrow",
      ".gallery > h2",
      ".gallery-intro",
      ".project-card",
      ".metrics > div",
      ".footer-main > div",
    ];
    const targets = Array.from(document.querySelectorAll<HTMLElement>(selectors.join(",")));

    targets.forEach((target, index) => {
      target.classList.add("reveal-on-scroll");
      target.style.setProperty("--reveal-delay", `${Math.min(index % 4, 3) * 90}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -7% 0px" },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return (
    <main id="inicio">
      <header className="topbar">
        <Logo />
        <nav aria-label="Navegação principal">
          <a href="#servicos">Serviços</a><a href="#portfolio">Portfólio</a><a href="#sobre">Sobre</a><a href="#contato">Contato</a>
          <a className="nav-whatsapp" href="https://wa.me/554735210000" aria-label="Conversar pelo WhatsApp"><MessageCircle size={17} /> WhatsApp</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <img src={workshop} alt="Soldadores trabalhando em estruturas metálicas na fábrica Riosulense" width={1536} height={1024} />
        <div className="hero-shade" />
        <div className="hero-content">
          <div className="eyebrow ruled">RIO DO SUL · SC</div>
          <h1 id="hero-title">Serralheria e Funilaria<br />Riosulense: Tradição e<br />Durabilidade em<br />Estruturas Metálicas.</h1>
          <p>Esquadrias sob medida e soluções industriais com a precisão técnica que seu<br className="desktop-only" /> projeto exige. Transformamos metal em segurança e estética.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="https://wa.me/554735210000"><ChevronRight size={22} /> Solicitar Orçamento via WhatsApp</a>
            <a className="button button-outline" href="#portfolio">Conhecer Projetos</a>
          </div>
        </div>
      </section>

      <section id="servicos" className="section specialties">
        <div className="section-head">
          <div><h2>Especialidades Industriais</h2><p>Operamos com equipamentos de ponta para garantir cortes precisos e soldas de alta<br className="desktop-only" /> resistência em cada peça produzida.</p></div>
          <div className="slider-dots" aria-hidden="true"><i /><i /><i /></div>
        </div>
        <div className="specialty-grid">
          {specialties.map(({ title, icon: Icon, watermark: Watermark, items }) => (
            <article className="specialty-card" key={title}>
              <div className="service-icon"><Icon size={26} /></div><Watermark className="watermark" />
              <h3>{title}</h3>
              <ul>{items.map((item) => <li key={item}><Zap size={14} />{item}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section featured" aria-labelledby="featured-title">
        <div className="eyebrow">DESTAQUE INDUSTRIAL</div><h2 id="featured-title">Projetos em Destaque</h2>
        <div className="featured-grid">
          <article className="featured-main project-image"><img src={workshop} alt="Unidade fabril com estrutura metálica" loading="lazy" width={1536} height={1024} /><div className="project-caption"><h3>Unidade Fabril Rio do Sul</h3><p>Execução completa de estrutura metálica reforçada para suporte<br className="desktop-only" /> de maquinário pesado e ponte rolante.</p></div></article>
          <div className="featured-side"><img src={warehouse} alt="Galpão industrial com fachada metálica azul" loading="lazy" width={1024} height={1024} /><img src={gate} alt="Portão arquitetônico residencial em aço" loading="lazy" width={1024} height={1024} /></div>
        </div>
      </section>

      <section id="portfolio" className="section gallery" aria-labelledby="gallery-title">
        <div className="eyebrow">PORTFÓLIO COMPLETO</div><h2 id="gallery-title">Galeria de Projetos</h2><p className="gallery-intro">Conheça alguns de nossos trabalhos realizados em Rio do Sul e região, desde o<br className="desktop-only" /> industrial pesado até o residencial de alto padrão.</p>
        <div className="gallery-grid">
          <ProjectCard image={gate} alt="Portão metálico residencial" category="RESIDENCIAL" title="Portão Arquitetônico" text="Design minimalista com corte a laser e acabamento premium." />
          <ProjectCard image={roof} alt="Sistema de calhas em cobertura industrial" category="INDUSTRIAL" title="Sistema de Cobertura Pluvial" text="Instalação de calhas industriais e rufos em zinco em galpão de 2000m²." />
          <ProjectCard image={workshop} alt="Estrutura de sustentação industrial" category="INDÚSTRIA" title="Estrutura de Sustentação" text="Montagem técnica de vigas I para ampliação de mezanino industrial." />
        </div>
      </section>

      <section id="sobre" className="metrics" aria-label="Nossos números">
        {[['25+','ANOS DE EXPERIÊNCIA'],['500+','PROJETOS ENTREGUES'],['100%','AÇO CERTIFICADO'],['24h','SUPORTE TÉCNICO']].map(([number,label]) => <div key={label}><strong>{number}</strong><span>{label}</span></div>)}
      </section>

      <footer id="contato">
        <div className="footer-main">
          <div className="footer-about"><h2>RIOSULENSE</h2><p>Líder em Rio do Sul na fabricação de<br /> estruturas metálicas e soluções<br /> completas de funilaria para indústrias e<br /> residências.</p><div className="socials"><a href="#inicio" aria-label="Site"><Globe2 /></a><a href="#contato" aria-label="Compartilhar"><Share2 /></a><a href="#portfolio" aria-label="Instagram"><Camera /></a></div></div>
          <div className="footer-contact"><h3>CONTATO &amp; LOCALIZAÇÃO</h3><div className="map-placeholder"><MapPin /><span>RIO DO SUL · SANTA CATARINA</span></div><p><Phone /> (47) 3521-XXXX / (47) 9XXXX-XXXX</p><p><Mail /> contato@riosulensemetal.com.br</p></div>
          <div className="hours"><h3>HORÁRIO DE ATENDIMENTO</h3><div className="hours-box"><p><span>Segunda - Sexta:</span><b>07:30 - 18:00</b></p><p><span>Sábado:</span><b>08:00 - 12:00</b></p><hr /><small>*Plantão emergencial para calhas disponível via WhatsApp em Rio do Sul.</small></div></div>
        </div>
        <div className="footer-bottom"><span>© 2024 Serralheria e Funilaria Riosulense. Todos os direitos reservados.</span><div><a href="#inicio">Privacidade</a><a href="#inicio">Termos</a><a href="#contato">Suporte</a></div></div>
      </footer>
      <a className="floating-whatsapp" href="https://wa.me/554735210000" aria-label="Abrir WhatsApp"><MessageCircle /></a>
    </main>
  );
}

function ProjectCard({ image, alt, category, title, text }: { image: string; alt: string; category: string; title: string; text: string }) {
  return <article className="project-card"><img src={image} alt={alt} loading="lazy" width={1024} height={1024} /><div><span>{category}</span><h3>{title}</h3><p>{text}</p></div></article>;
}