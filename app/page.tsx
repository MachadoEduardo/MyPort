'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import {
  Github,
  Linkedin,
  Figma,
  Mail,
  Phone,
  ExternalLink,
  Code2,
  Database,
  Server,
  Container,
  GitBranch,
  Globe,
  ChevronDown,
  GraduationCap,
  Briefcase,
  BookOpen,
  Wrench,
  FigmaIcon,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// ─── Dados ────────────────────────────────────────────────────────────────────

const techStack = [
  { name: 'Laravel', icon: <Server className="size-5" />, category: 'Backend' },
  { name: 'PHP', icon: <Code2 className="size-5" />, category: 'Backend' },
  { name: 'PostgreSQL', icon: <Database className="size-5" />, category: 'Database' },
  { name: 'Nuxt.js', icon: <Globe className="size-5" />, category: 'Frontend' },
  { name: 'React.js', icon: <Code2 className="size-5" />, category: 'Frontend' },
  { name: 'Docker', icon: <Container className="size-5" />, category: 'DevOps' },
  { name: 'Git', icon: <GitBranch className="size-5" />, category: 'Ferramentas' },
  { name: 'Figma', icon: <Figma className="size-5" />, category: 'Ferramentas' },
]

const categoryColors: Record<string, string> = {
  Backend: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/5',
  Database: 'border-cyan-500/30 text-cyan-400 bg-cyan-500/5',
  Frontend: 'border-violet-500/30 text-violet-400 bg-violet-500/5',
  DevOps: 'border-orange-500/30 text-orange-400 bg-orange-500/5',
  Ferramentas: 'border-white/20 text-white/50 bg-white/5',
}

const techIcons: Record<string, React.ReactNode> = {
  Laravel: <Server className="size-3.5" />,
  PHP: <Code2 className="size-3.5" />,
  'Nuxt.js': <Globe className="size-3.5" />,
  'Vue.js': <Globe className="size-3.5" />,
  PostgreSQL: <Database className="size-3.5" />,
  Docker: <Container className="size-3.5" />,
  Git: <GitBranch className="size-3.5" />,
  'React.js': <Code2 className="size-3.5" />,
  'Laravel Sail': <Server className="size-3.5" />,
  Jira: <Wrench className="size-3.5" />,
  Figma: <FigmaIcon className="size-3.5" />,
}

const timeline = [
  {
    year: '2022',
    title: 'Início em ADS',
    subtitle: 'SENAC — Análise e Desenvolvimento de Sistemas',
    description: 'Ingressei no curso de ADS, dando os primeiros passos no desenvolvimento de software e lógica de programação.',
    icon: <GraduationCap className="size-4" />,
    type: 'edu',
  },
  {
    year: '2024',
    title: 'Primeiro emprego na área',
    subtitle: 'GrupoMM — Desenvolvedor Fullstack',
    description: 'Ingressei no GrupoMM, trabalhando com PHP/Laravel em ambiente corporativo, manutenção de CRMs, APIs e integração de sistemas.',
    icon: <Briefcase className="size-4" />,
    type: 'work',
  },
  {
    year: '2025',
    title: 'Formatura em ADS',
    subtitle: 'SENAC — Bacharel em ADS',
    description: 'Concluí o curso de Análise e Desenvolvimento de Sistemas, consolidando a base técnica e boas práticas de desenvolvimento.',
    icon: <GraduationCap className="size-4" />,
    type: 'edu',
  },
]

const projects = [
  {
    name: 'DRS ERP',
    description:
      'Aplicação web de gestão empresarial integrada que centraliza dados de todos os departamentos — financeiro, vendas, RH e estoque — em um único ambiente online.',
    techs: ['PHP', 'Laravel', 'Nuxt.js', 'PostgreSQL', 'Docker', 'Git', 'Jira', 'Figma'],
    link: 'https://github.com/E2S-Systems/DRS',
    highlight: true,
  },
  {
    name: 'Plataforma ToDoList',
    description:
      'Aplicação web com foco em gestão de tarefas e produtividade, que ajuda a organizar atividades diárias e vida pessoal.',
    techs: ['PHP', 'Laravel', 'React.js', 'PostgreSQL', 'Laravel Sail', 'Git'],
    link: 'https://github.com/MachadoEduardo/ToDoList',
    highlight: false,
  },
]

const learning = [
  {
    icon: <BookOpen className="size-4" />,
    title: 'Aprofundando em Clean Architecture',
    description: 'Estudando padrões arquiteturais para escrever código mais desacoplado e testável.',
  },
  {
    icon: <Container className="size-4" />,
    title: 'Docker & orquestração',
    description: 'Explorando Docker Compose e boas práticas de containerização em ambiente de produção.',
  },
  {
    icon: <Code2 className="size-4" />,
    title: 'Spatie no backend',
    description: 'Experimentando pacotes Spatie para Laravel, como Media Library e Permission, para acelerar o desenvolvimento.',
  },
]

// ─── Componentes auxiliares ────────────────────────────────────────────────────

function AnimatedCounter({ value, duration = 1200 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const step = value / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [value, duration])

  return <>{count}</>
}

// ─── Página principal ──────────────────────────────────────────────────────────

export default function Portfolio() {
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { threshold: 0.3 },
    )
    document.querySelectorAll('section[id]').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!mounted) return

    const targets = document.querySelectorAll('[data-animation]')
    targets.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          delay: (index % 4) * 0.08,
          scrollTrigger: {
            trigger: el,
            start: 'top 82%',
            toggleActions: 'play none none none',
          },
          ease: 'power3.out',
        },
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [mounted])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white font-sans overflow-x-hidden">

      {/* Grain overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-50 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px',
        }}
      />

      {/* Ambient glows */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none" />

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-40 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <span className="text-emerald-400 font-mono text-sm tracking-widest uppercase opacity-80">
            EHC<span className="text-[#9C9C9C]">_machado</span>
          </span>
          <div className="hidden sm:flex items-center gap-6">
            {['sobre', 'trajetória', 'skills', 'projetos', 'agora', 'contato'].map((s) => (
              <a
                key={s}
                href={`#${s}`}
                className={`text-xs uppercase tracking-widest font-mono transition-colors duration-200 ${
                  activeSection === s ? 'text-emerald-400' : 'text-[#9C9C9C] hover:text-white/80'
                }`}
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main>

        {/* ── Hero ── */}
        <section
          id="hero"
          className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center"
        >
          <div
            className="animate-in fade-in slide-in-from-bottom-8 duration-700"
            style={{ animationFillMode: 'both' }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs font-mono tracking-widest mb-8">
              <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Disponível para novos projetos
            </div>

            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight leading-none mb-4">
              <span className="block text-white/90">Eduardo</span>
              <span
                className="block text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(135deg, #34d399 0%, #06b6d4 100%)' }}
              >
                Henrique
              </span>
            </h1>

            <p className="text-[#9C9C9C] font-mono text-sm sm:text-base tracking-wider mt-4 mb-2">
              Cioli Machado
            </p>

            <Separator className="w-16 mx-auto my-6 bg-emerald-500/20" />

            <p className="text-white/60 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Desenvolvedor Fullstack:{' '}
              <span className="text-white/90">criando soluções de ponta a ponta</span>
            </p>

            <div className="flex items-center justify-center gap-3 mt-10">
              <Button
                asChild
                className="bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-6 rounded-full transition-all duration-200 hover:scale-105"
              >
                <a href="#projetos">Ver projetos</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white/10 text-white/70 hover:text-white hover:bg-white/5 rounded-full transition-all duration-200"
              >
                <a href="#contato">Entrar em contato</a>
              </Button>
            </div>
          </div>

          <a
            href="#sobre"
            aria-label="Ir para a próxima seção"
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20 hover:text-white/60 transition-colors animate-bounce"
          >
            <ChevronDown className="size-5" />
          </a>
        </section>

        {/* ── Sobre ── */}
        <section id="sobre" className="py-28 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-emerald-400 font-mono text-xs tracking-widest uppercase mb-4">
                  01 / Sobre mim
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
                  Backend first,
                  <br />
                  <span className="text-white/60">fullstack always.</span>
                </h2>
                <p className="text-white/60 leading-relaxed text-base">
                  Desenvolvedor Full-Stack com foco em backend{' '}
                  <strong className="text-white/90">PHP/Laravel</strong>, com experiência em
                  criação de APIs, sistemas de gerenciamento e integração de soluções orientadas a
                  dados.
                </p>
                <p className="text-white/60 leading-relaxed text-base mt-4">
                  Atuação profissional em ambiente corporativo com manutenção de CRMs, análise SQL
                  e integração de sistemas. Familiarizado com boas práticas de qualidade de código{' '}
                  <strong className="text-white/90">(Clean Code, SOLID)</strong>, versionamento com
                  Git e ambiente Docker.
                </p>
                <p className="text-white/60 leading-relaxed text-base mt-4">
                  Formado em{' '}
                  <strong className="text-white/90">Análise e Desenvolvimento de Sistemas</strong>{' '}
                  pela SENAC (2025), atualmente trabalhando no{' '}
                  <strong className="text-white/90">GrupoMM</strong>.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Anos de experiência', value: 2, suffix: '+' },
                  { label: 'Projetos entregues', value: 10, suffix: '+' },
                  { label: 'Tecnologias dominadas', value: 8, suffix: '' },
                  { label: 'Formado em ADS', value: 2025, suffix: '' },
                ].map((stat) => (
                  <Card
                    key={stat.label}
                    data-animation="stat"
                    className="bg-white/[0.03] border-white/[0.06] hover:border-emerald-500/20 transition-colors duration-300"
                  >
                    <CardContent className="pt-6">
                      <div className="text-3xl font-bold text-white mb-1">
                        <AnimatedCounter value={stat.value} />
                        {stat.suffix}
                      </div>
                      <div className="text-white/50 text-xs leading-snug">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Separator className="max-w-5xl mx-auto bg-white/[0.04]" />

        {/* ── Trajetória ── */}
        <section id="trajetória" className="py-28 px-6">
          <div className="max-w-5xl mx-auto">
            <p className="text-emerald-400 font-mono text-xs tracking-widest uppercase mb-4">
              02 / Trajetória
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
              De onde vim, onde estou
            </h2>

            <div className="relative">
              {/* linha vertical */}
              <div className="absolute left-[19px] top-0 bottom-0 w-px bg-white/[0.06]" />

              <div className="space-y-10">
                {timeline.map((item, i) => (
                  <div
                    key={i}
                    data-animation="timeline"
                    className="relative flex gap-6 pl-12"
                  >
                    {/* bolinha */}
                    <div
                      className={`absolute left-0 top-1 size-10 rounded-full flex items-center justify-center border ${
                        item.type === 'work'
                          ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400'
                          : 'border-cyan-500/30 bg-cyan-500/10 text-cyan-400'
                      }`}
                    >
                      {item.icon}
                    </div>

                    <div className="flex-1 pb-2">
                      <div className="flex items-center gap-3 mb-1 flex-wrap">
                        <span className="text-white font-semibold text-base">{item.title}</span>
                        <Badge
                          variant="outline"
                          className="font-mono text-[10px] border-white/10 text-white/30"
                        >
                          {item.year}
                        </Badge>
                      </div>
                      <p className="text-emerald-400/70 text-xs font-mono mb-2">{item.subtitle}</p>
                      <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Separator className="max-w-5xl mx-auto bg-white/[0.04]" />

        {/* ── Skills ── */}
        <section id="skills" className="py-28 px-6">
          <div className="max-w-5xl mx-auto">
            <p className="text-emerald-400 font-mono text-xs tracking-widest uppercase mb-4">
              03 / Habilidades
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">Stack técnico</h2>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  data-animation="skill"
                  className="group flex flex-col items-center gap-3 p-5 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-emerald-500/20 hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 text-center"
                >
                  <div className="text-white/30 group-hover:text-emerald-400 transition-colors duration-300">
                    {tech.icon}
                  </div>
                  <span className="text-white/80 text-sm font-medium">{tech.name}</span>
                  <Badge
                    variant="outline"
                    className={`text-[10px] font-mono border ${categoryColors[tech.category]}`}
                  >
                    {tech.category}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Separator className="max-w-5xl mx-auto bg-white/[0.04]" />

        {/* ── Projetos ── */}
        <section id="projetos" className="py-28 px-6">
          <div className="max-w-5xl mx-auto">
            <p className="text-emerald-400 font-mono text-xs tracking-widest uppercase mb-4">
              04 / Projetos
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">O que eu construí</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <Card
                  key={project.name}
                  data-animation="project"
                  className={`group relative overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                    project.highlight
                      ? 'border-emerald-500/20 bg-emerald-500/[0.04] hover:border-emerald-500/40 hover:shadow-emerald-500/10'
                      : 'border-white/[0.06] bg-white/[0.02] hover:border-white/10'
                  }`}
                >
                  {project.highlight && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 text-[10px] font-mono">
                        Destaque
                      </Badge>
                    </div>
                  )}
                  <CardContent className="pt-6">
                    <h3 className="text-white font-bold text-lg mb-3">{project.name}</h3>
                    <p className="text-white/50 text-sm leading-relaxed mb-5">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techs.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="border-white/10 text-white/60 text-[11px] gap-1 font-mono"
                        >
                          {techIcons[tech]}
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <Button
                      asChild
                      variant="ghost"
                      size="sm"
                      className="text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/10 gap-2 px-0 font-mono text-xs"
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <Github className="size-3.5" />
                        Ver no GitHub
                        <ExternalLink className="size-3" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Separator className="max-w-5xl mx-auto bg-white/[0.04]" />

        {/* ── Agora ── */}
        <section id="agora" className="py-28 px-6">
          <div className="max-w-5xl mx-auto">
            <p className="text-emerald-400 font-mono text-xs tracking-widest uppercase mb-4">
              05 / Atualmente
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              No que estou focado agora
            </h2>
            <p className="text-white/40 text-sm mb-12 max-w-lg">
              Desenvolvimento é um processo contínuo. Aqui está o que estou estudando e explorando neste momento.
            </p>

            <div className="grid sm:grid-cols-3 gap-5">
              {learning.map((item, i) => (
                <div
                  key={i}
                  data-animation="learning"
                  className="group p-5 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-emerald-500/20 hover:bg-white/[0.04] transition-all duration-300"
                >
                  <div className="size-8 rounded-lg border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 flex items-center justify-center mb-4 group-hover:bg-emerald-500/10 transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-2">{item.title}</h3>
                  <p className="text-white/40 text-xs leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Separator className="max-w-5xl mx-auto bg-white/[0.04]" />

        {/* ── Contato ── */}
        <section id="contato" className="py-28 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-emerald-400 font-mono text-xs tracking-widest uppercase mb-4">
              06 / Contato
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Vamos trabalhar juntos?
            </h2>
            <p className="text-white/40 max-w-md mx-auto mb-12 text-base">
              Estou aberto a novas oportunidades e colaborações. Entre em contato por qualquer canal
              abaixo.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[
                {
                  icon: <Phone className="size-5" />,
                  label: 'WhatsApp',
                  value: '(42) 99818-2986',
                  href: 'https://wa.me/5542998182986',
                },
                {
                  icon: <Mail className="size-5" />,
                  label: 'E-mail',
                  value: '05eduardomachado@gmail.com',
                  href: 'mailto:05eduardomachado@gmail.com',
                },
                {
                  icon: <Linkedin className="size-5" />,
                  label: 'LinkedIn',
                  value: 'eduardohcm',
                  href: 'https://linkedin.com/in/eduardohcm',
                },
                {
                  icon: <Github className="size-5" />,
                  label: 'GitHub',
                  value: 'eduardohcm',
                  href: 'https://github.com/eduardohcm',
                },
              ].map((contact) => (
                <a
                  key={contact.label}
                  data-animation="contact"
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-3 p-5 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-emerald-500/30 hover:bg-emerald-500/[0.04] transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-white/30 group-hover:text-emerald-400 transition-colors duration-300">
                    {contact.icon}
                  </div>
                  <div>
                    <div className="text-white/90 font-medium text-sm">{contact.label}</div>
                    <div className="text-white/30 text-xs mt-0.5 truncate max-w-[120px]">
                      {contact.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/[0.04] py-8 px-6 text-center">
          <p className="text-white/20 font-mono text-xs tracking-widest">
            © 2025 Eduardo Henrique Cioli Machado
            <span className="text-emerald-500/40"> · </span>
            Feito com Next.js + shadcn/ui
          </p>
        </footer>

      </main>
    </div>
  )
}