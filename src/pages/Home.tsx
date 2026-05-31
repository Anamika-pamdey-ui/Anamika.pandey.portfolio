import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ExternalLink, Github, Linkedin, ChevronDown, GraduationCap, Star, User, Briefcase, Zap, Gamepad2, Heart, MessageSquare, Lightbulb, Users, Trophy } from "lucide-react";
import { SiHtml5, SiJavascript, SiReact, SiGit, SiVercel } from "react-icons/si";
import profilePhoto from "@assets/WhatsApp_Image_2026-05-31_at_7.33.39_PM_1780236265777.jpeg";
import { Nav } from "@/components/Nav";
import { PixelCard } from "@/components/PixelCard";
import { SkillBadge } from "@/components/SkillBadge";

const PROJECTS = [
  {
    title: "Multiverse Crossover",
    subtitle: "Game Intro Website",
    desc: "A fully responsive game-themed intro website with cinematic animations, smooth page transitions, and an immersive interactive UI. Built with React and modern JavaScript libraries.",
    tags: ["React", "Animations", "UI/UX"],
    color: "bg-primary",
    link: "https://multiverse-crossover-react-web-intr.vercel.app",
    num: "01"
  },
  {
    title: "Nails Extension Shop",
    subtitle: "Retail Platform",
    desc: "A stylish retail web platform for a nail extension shop — elegant product showcase, smooth scrolling, and a contact form. Real-world e-commerce UI built with modern JavaScript.",
    tags: ["React", "E-commerce", "Responsive"],
    color: "bg-secondary",
    link: "https://nails-extention-shop-website-mkge.vercel.app/#contact",
    num: "02"
  },
  {
    title: "Attendance Tracker",
    subtitle: "Smart India Hackathon",
    desc: "An automated attendance tracking system built as Team Leader for SIH. Architected the frontend interface, managed project structure, and led the team through design and development.",
    tags: ["React", "Leadership", "SIH"],
    color: "bg-accent",
    link: "https://v0-automated-attendance-system-ecru.vercel.app/",
    num: "03"
  }
];

const SOFT_SKILLS = [
  { icon: <Users size={20} />, label: "Team Leadership", desc: "Led a full hackathon team as Team Leader for SIH, coordinating frontend development and project architecture from scratch." },
  { icon: <MessageSquare size={20} />, label: "Communication", desc: "Built bridges as a Campus Ambassador — organized awareness campaigns and kept students and organizations connected." },
  { icon: <Lightbulb size={20} />, label: "Problem Solving", desc: "Approaches every challenge with a creative, research-first mindset. Comfortable diving into unfamiliar problems and shipping solutions." },
  { icon: <Heart size={20} />, label: "Community Spirit", desc: "Volunteers with EDC IIT Delhi and GirlScript Summer of Code — a genuine belief in giving back to the developer community." },
  { icon: <Trophy size={20} />, label: "Adaptability", desc: "Thrives in fast-paced environments. From hackathons to open-source to internship applications — always ready for the next level." }
];

const TECH_SKILLS = [
  { label: "HTML5", pct: 90, color: "#E34F26" },
  { label: "CSS3", pct: 85, color: "#1572B6" },
  { label: "JavaScript", pct: 80, color: "#F7DF1E" },
  { label: "React.js", pct: 78, color: "#61DAFB" },
];

/* ── Pixel art SVG sprites ── */
function PixelStar({ size = 16, color = "hsl(var(--primary))" }: { size?: number; color?: string }) {
  const s = size / 16;
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <rect x="6" y="0" width="4" height="2" fill={color} />
      <rect x="4" y="2" width="8" height="2" fill={color} />
      <rect x="0" y="4" width="16" height="4" fill={color} />
      <rect x="2" y="8" width="12" height="2" fill={color} />
      <rect x="0" y="10" width="6" height="2" fill={color} />
      <rect x="10" y="10" width="6" height="2" fill={color} />
      <rect x="0" y="12" width="4" height="2" fill={color} />
      <rect x="12" y="12" width="4" height="2" fill={color} />
      {s}
    </svg>
  );
}

function PixelHeart({ size = 16, color = "hsl(var(--primary))" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <rect x="2" y="2" width="4" height="2" fill={color} />
      <rect x="10" y="2" width="4" height="2" fill={color} />
      <rect x="0" y="4" width="6" height="4" fill={color} />
      <rect x="10" y="4" width="6" height="4" fill={color} />
      <rect x="0" y="8" width="16" height="4" fill={color} />
      <rect x="2" y="12" width="12" height="2" fill={color} />
      <rect x="4" y="14" width="8" height="2" fill={color} />
      <rect x="6" y="16" width="4" height="2" fill={color} />
    </svg>
  );
}

function PixelDiamond({ size = 16, color = "hsl(var(--accent))" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <rect x="6" y="0" width="4" height="2" fill={color} />
      <rect x="4" y="2" width="8" height="2" fill={color} />
      <rect x="2" y="4" width="12" height="2" fill={color} />
      <rect x="0" y="6" width="16" height="4" fill={color} />
      <rect x="2" y="10" width="12" height="2" fill={color} />
      <rect x="4" y="12" width="8" height="2" fill={color} />
      <rect x="6" y="14" width="4" height="2" fill={color} />
    </svg>
  );
}

function PixelFlower({ size = 20, color = "hsl(var(--secondary))" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <rect x="8" y="0" width="4" height="4" fill={color} />
      <rect x="8" y="16" width="4" height="4" fill={color} />
      <rect x="0" y="8" width="4" height="4" fill={color} />
      <rect x="16" y="8" width="4" height="4" fill={color} />
      <rect x="4" y="4" width="12" height="12" fill={color} />
      <rect x="6" y="6" width="8" height="8" fill="hsl(var(--background))" />
      <rect x="8" y="8" width="4" height="4" fill={color} />
    </svg>
  );
}

function PixelDivider() {
  return (
    <div className="flex items-center justify-center gap-3 py-2 opacity-40 pointer-events-none select-none">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="flex gap-1">
          <div className="w-2 h-2 bg-primary" />
          <div className="w-2 h-2 bg-secondary" />
          <div className="w-2 h-2 bg-accent" />
        </div>
      ))}
      <PixelDiamond size={12} />
      {[...Array(3)].map((_, i) => (
        <div key={i} className="flex gap-1">
          <div className="w-2 h-2 bg-accent" />
          <div className="w-2 h-2 bg-secondary" />
          <div className="w-2 h-2 bg-primary" />
        </div>
      ))}
    </div>
  );
}

function PixelCorners({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none ${className}`}>
      <div className="absolute top-0 left-0 w-3 h-3 border-t-4 border-l-4 border-foreground/50" />
      <div className="absolute top-0 right-0 w-3 h-3 border-t-4 border-r-4 border-foreground/50" />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-4 border-l-4 border-foreground/50" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-4 border-r-4 border-foreground/50" />
    </div>
  );
}

function PixelHpBar({ label, pct, color }: { label: string; pct: number; color: string }) {
  const blocks = 10;
  const filled = Math.round((pct / 100) * blocks);
  return (
    <div className="flex items-center gap-3">
      <span className="font-mono text-xs w-24 flex-shrink-0 text-foreground">{label}</span>
      <div className="flex gap-0.5">
        {[...Array(blocks)].map((_, i) => (
          <div
            key={i}
            className="w-4 h-4 border border-foreground/40"
            style={{ backgroundColor: i < filled ? color : "transparent" }}
          />
        ))}
      </div>
      <span className="font-mono text-xs text-muted-foreground">{pct}%</span>
    </div>
  );
}

/* floating decorations config */
const FLOATERS = [
  { x: "8%",  y: "12%", delay: 0,    type: "star",    size: 14, color: "hsl(340 80% 78%)" },
  { x: "90%", y: "18%", delay: 0.4,  type: "heart",   size: 12, color: "hsl(340 80% 72%)" },
  { x: "4%",  y: "55%", delay: 0.8,  type: "diamond", size: 16, color: "hsl(210 80% 78%)" },
  { x: "93%", y: "50%", delay: 1.2,  type: "flower",  size: 18, color: "hsl(140 60% 72%)" },
  { x: "15%", y: "80%", delay: 0.3,  type: "star",    size: 10, color: "hsl(140 60% 72%)" },
  { x: "80%", y: "75%", delay: 0.7,  type: "diamond", size: 12, color: "hsl(340 80% 78%)" },
  { x: "50%", y: "6%",  delay: 1.0,  type: "heart",   size: 10, color: "hsl(210 80% 75%)" },
  { x: "72%", y: "92%", delay: 0.5,  type: "star",    size: 14, color: "hsl(210 80% 78%)" },
  { x: "25%", y: "22%", delay: 1.5,  type: "flower",  size: 16, color: "hsl(340 80% 78%)" },
  { x: "60%", y: "88%", delay: 0.9,  type: "diamond", size: 10, color: "hsl(140 60% 72%)" },
];

function FloatingPixelArt() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {FLOATERS.map((f, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: f.x, top: f.y }}
          animate={{ y: [0, -10, 0], rotate: [0, 8, -8, 0] }}
          transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: f.delay }}
        >
          <div style={{ opacity: 0.35 }}>
            {f.type === "star"    && <PixelStar    size={f.size} color={f.color} />}
            {f.type === "heart"   && <PixelHeart   size={f.size} color={f.color} />}
            {f.type === "diamond" && <PixelDiamond size={f.size} color={f.color} />}
            {f.type === "flower"  && <PixelFlower  size={f.size} color={f.color} />}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans relative">
      {/* dot grid */}
      <div
        className="fixed inset-0 pointer-events-none opacity-15 z-0"
        style={{ backgroundImage: "radial-gradient(hsl(var(--primary)) 1.5px, transparent 1.5px)", backgroundSize: "28px 28px" }}
      />

      <FloatingPixelArt />
      <Nav />

      <main className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-32 pb-24">

        {/* ── HERO ── */}
        <section id="hero" className="min-h-[80vh] flex flex-col items-center justify-center text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-5 w-full"
          >
            {/* tagline badge */}
            <div className="inline-block border-2 border-foreground bg-accent px-4 py-2 font-mono text-xs sm:text-sm font-bold shadow-[4px_4px_0px_0px_hsl(var(--foreground))] rotate-[-2deg] mb-2">
              Player 1 has entered the game
            </div>

            {/* photo */}
            <div className="flex justify-center">
              <div className="relative">
                {/* pixel corner accents on photo */}
                <div className="absolute -top-3 -left-3 z-10"><PixelStar size={18} color="hsl(var(--primary))" /></div>
                <div className="absolute -top-3 -right-3 z-10"><PixelDiamond size={16} color="hsl(var(--accent))" /></div>
                <div className="absolute -bottom-3 -left-3 z-10"><PixelFlower size={18} color="hsl(var(--secondary))" /></div>
                <div className="absolute -bottom-3 -right-3 z-10"><PixelHeart size={16} color="hsl(var(--primary))" /></div>

                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full border-4 border-foreground shadow-[6px_6px_0px_0px_hsl(var(--primary))] overflow-hidden ring-4 ring-primary/40">
                  <img
                    src={profilePhoto}
                    alt="Anamika Pandey"
                    data-testid="img-profile"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: "center 20%" }}
                  />
                </div>
              </div>
            </div>

            {/* name */}
            <h1 className="font-mono text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground drop-shadow-[4px_4px_0px_hsl(var(--primary))] leading-tight">
              ANAMIKA<br />PANDEY
            </h1>

            <p className="text-xl sm:text-2xl font-bold text-muted-foreground max-w-2xl mx-auto">
              Frontend Developer
            </p>
            <p className="text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Crafting responsive, animated, and user-centric web experiences with React and modern JavaScript.
            </p>

            {/* decorative pixel row */}
            <div className="flex justify-center items-center gap-2 py-1">
              <PixelStar size={10} color="hsl(var(--primary))" />
              <PixelDiamond size={10} color="hsl(var(--accent))" />
              <PixelHeart size={10} color="hsl(var(--secondary))" />
              <PixelFlower size={12} color="hsl(var(--primary))" />
              <PixelDiamond size={10} color="hsl(var(--secondary))" />
              <PixelStar size={10} color="hsl(var(--accent))" />
              <PixelHeart size={10} color="hsl(var(--primary))" />
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <a
                href="#projects"
                data-testid="button-start-quest"
                className="font-mono text-sm bg-primary border-2 border-foreground px-6 py-3 font-bold shadow-[4px_4px_0px_0px_hsl(var(--foreground))] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_hsl(var(--foreground))] transition-all active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
              >
                VIEW PROJECTS
              </a>
              <a
                href="#contact"
                data-testid="button-contact"
                className="font-mono text-sm bg-secondary border-2 border-foreground px-6 py-3 font-bold shadow-[4px_4px_0px_0px_hsl(var(--foreground))] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_hsl(var(--foreground))] transition-all active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
              >
                CONTACT
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-14 animate-bounce"
          >
            <ChevronDown size={32} className="text-primary drop-shadow-[2px_2px_0px_hsl(var(--foreground))]" />
          </motion.div>
        </section>

        <PixelDivider />

        {/* ── ABOUT ── */}
        <section id="about" className="scroll-mt-24 mt-20 mb-32">
          <SectionHeader title="CHARACTER INFO" icon={<User size={24} />} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <PixelCard className="h-full bg-accent/30 relative">
                <PixelCorners />
                <div className="flex items-center gap-2 mb-6">
                  <PixelStar size={14} color="hsl(var(--primary))" />
                  <h3 className="font-mono text-xl text-foreground">STATS</h3>
                  <PixelStar size={14} color="hsl(var(--primary))" />
                </div>
                <ul className="space-y-4 font-semibold text-base mb-6">
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-primary border-2 border-foreground shadow-[2px_2px_0px_0px_hsl(var(--foreground))]">
                      <MapPin size={15} />
                    </span>
                    Vidya Nagar Harmu, Ranchi, Jharkhand
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-secondary border-2 border-foreground shadow-[2px_2px_0px_0px_hsl(var(--foreground))]">
                      <GraduationCap size={15} />
                    </span>
                    BCA 2nd Year — Sarala Birla University
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-accent border-2 border-foreground shadow-[2px_2px_0px_0px_hsl(var(--foreground))]">
                      <Star size={15} />
                    </span>
                    Aspiring Frontend Developer Intern
                  </li>
                </ul>

                <div className="mt-6 p-4 border-2 border-dashed border-foreground/30 bg-background/50">
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    A passionate second-year BCA student with a deep love for building things on the web. From responsive game websites to retail platforms to hackathon projects — I bring energy, creativity, and solid technical skills to every challenge. I believe great UI is not just how something looks, but how it feels.
                  </p>
                </div>
              </PixelCard>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <PixelCard className="h-full bg-accent/30 relative">
                <PixelCorners />
                <div className="flex items-center gap-2 mb-6">
                  <PixelHeart size={14} color="hsl(var(--primary))" />
                  <h3 className="font-mono text-xl">QUEST LOG</h3>
                  <PixelHeart size={14} color="hsl(var(--primary))" />
                </div>
                <div className="space-y-6">
                  {[
                    { color: "bg-primary", dot: <PixelStar size={10} color="hsl(var(--primary))" />, title: "Team Leader @ Smart India Hackathon", body: "Led a full team to design and build an automated attendance tracking system. Responsible for the entire frontend interface, component architecture, and keeping the team on track under hackathon pressure." },
                    { color: "bg-secondary", dot: <PixelFlower size={10} color="hsl(var(--secondary))" />, title: "Campus Ambassador @ GirlScript Summer of Code", body: "Organized on-campus awareness campaigns for GSSoC. Bridged communication between students and the organization, helping peers take their first steps in open-source contribution." },
                    { color: "bg-accent", dot: <PixelDiamond size={10} color="hsl(var(--accent))" />, title: "Volunteer @ EDC, IIT Delhi", body: "Active volunteer with the Entrepreneurship Development Cell at IIT Delhi. Engaged with the technology and startup community, supporting events and initiatives at one of India's top institutions." }
                  ].map((item, i) => (
                    <div key={i} className="relative pl-6">
                      {i < 2 && <div className="absolute left-[5px] top-4 bottom-[-16px] w-0.5 bg-foreground/20" />}
                      <div className={`absolute left-0 top-1.5 w-3 h-3 ${item.color} border-2 border-foreground`} />
                      <h4 className="font-bold text-base leading-tight">{item.title}</h4>
                      <p className="text-muted-foreground mt-1 text-sm leading-relaxed">{item.body}</p>
                    </div>
                  ))}
                </div>
              </PixelCard>
            </motion.div>
          </div>
        </section>

        <PixelDivider />

        {/* ── SKILLS ── */}
        <section id="skills" className="scroll-mt-24 mt-20 mb-32">
          <SectionHeader title="INVENTORY" icon={<Briefcase size={24} />} />

          <div className="mt-12 space-y-14">
            {/* Tech */}
            <div>
              <div className="flex items-center justify-center gap-3 mb-8">
                <PixelDiamond size={12} color="hsl(var(--accent))" />
                <h3 className="font-mono text-sm text-muted-foreground">TECH STACK</h3>
                <PixelDiamond size={12} color="hsl(var(--accent))" />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="flex flex-wrap gap-4 justify-center max-w-3xl mx-auto"
              >
                <SkillBadge icon={<SiHtml5 className="text-[#E34F26]" />} colorClass="bg-[#E34F26]/20 border-[#E34F26]">HTML5</SkillBadge>
                <SkillBadge icon={<span className="font-bold text-[#1572B6] text-xs">CSS</span>} colorClass="bg-[#1572B6]/20 border-[#1572B6]">CSS3</SkillBadge>
                <SkillBadge icon={<SiJavascript className="text-[#F7DF1E]" />} colorClass="bg-[#F7DF1E]/20 border-[#F7DF1E] text-yellow-900">JavaScript ES6+</SkillBadge>
                <SkillBadge icon={<SiReact className="text-[#61DAFB]" />} colorClass="bg-[#61DAFB]/20 border-[#61DAFB] text-cyan-900">React.js</SkillBadge>
                <SkillBadge icon={<SiGit className="text-[#F05032]" />} colorClass="bg-[#F05032]/20 border-[#F05032]">Git</SkillBadge>
                <SkillBadge icon={<SiVercel className="text-foreground" />} colorClass="bg-muted border-foreground">Vercel</SkillBadge>
                <SkillBadge colorClass="bg-primary/50">Responsive Design</SkillBadge>
                <SkillBadge colorClass="bg-secondary/50">Framer Motion</SkillBadge>
              </motion.div>
            </div>

            {/* Soft */}
            <div>
              <div className="flex items-center justify-center gap-3 mb-8">
                <PixelHeart size={12} color="hsl(var(--primary))" />
                <h3 className="font-mono text-sm text-muted-foreground">SOFT SKILLS</h3>
                <PixelHeart size={12} color="hsl(var(--primary))" />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto"
              >
                {SOFT_SKILLS.map((skill, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    data-testid={`card-soft-skill-${i}`}
                  >
                    <PixelCard className="h-full bg-card hover:bg-primary/10 transition-colors relative">
                      <PixelCorners />
                      <div className="flex items-center gap-3 mb-3">
                        <span className="w-9 h-9 flex-shrink-0 flex items-center justify-center bg-primary border-2 border-foreground shadow-[2px_2px_0px_0px_hsl(var(--foreground))]">
                          {skill.icon}
                        </span>
                        <h4 className="font-mono text-sm font-bold">{skill.label}</h4>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{skill.desc}</p>
                    </PixelCard>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        <PixelDivider />

        {/* ── PROJECTS ── */}
        <section id="projects" className="scroll-mt-24 mt-20 mb-32">
          <SectionHeader title="QUEST LOG" icon={<Gamepad2 size={24} />} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {PROJECTS.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                data-testid={`card-project-${i}`}
              >
                <PixelCard className="h-full flex flex-col relative">
                  <PixelCorners />
                  {/* card header banner */}
                  <div className={`h-28 ${project.color} border-b-4 border-foreground -mx-6 -mt-6 mb-6 flex items-center justify-between px-4 relative overflow-hidden`}>
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(45deg,#000 25%,transparent 25%,transparent 75%,#000 75%,#000),linear-gradient(45deg,#000 25%,transparent 25%,transparent 75%,#000 75%,#000)", backgroundSize: "10px 10px", backgroundPosition: "0 0,5px 5px" }} />
                    <span className="font-mono text-3xl drop-shadow-[2px_2px_0px_rgba(0,0,0,0.3)] relative z-10 opacity-70">{project.num}</span>
                    <div className="relative z-10 flex flex-col gap-1 opacity-60">
                      <PixelStar size={12} color="white" />
                      <PixelDiamond size={10} color="white" />
                      <PixelHeart size={10} color="white" />
                    </div>
                  </div>

                  <div className="flex-grow flex flex-col">
                    <p className="font-mono text-xs text-muted-foreground mb-1">{project.subtitle}</p>
                    <h3 className="font-mono text-base font-bold mb-3">{project.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-grow mb-5">{project.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs font-bold px-2 py-1 bg-muted border border-foreground/40">{tag}</span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid={`link-project-${i}`}
                      className="mt-auto flex items-center justify-center gap-2 font-mono text-xs bg-foreground text-background border-2 border-foreground px-4 py-2 font-bold shadow-[3px_3px_0px_0px_hsl(var(--primary))] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_0px_hsl(var(--primary))] transition-all"
                    >
                      <ExternalLink size={13} />
                      VIEW LIVE PROJECT
                    </a>
                  </div>
                </PixelCard>
              </motion.div>
            ))}
          </div>
        </section>

        <PixelDivider />

        {/* ── CONTACT ── */}
        <section id="contact" className="scroll-mt-24 mt-20">
          <SectionHeader title="MULTIPLAYER" icon={<Zap size={24} />} />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="max-w-2xl mx-auto mt-12 text-center"
          >
            <PixelCard className="bg-primary/20 relative">
              <PixelCorners />
              {/* top pixel art row */}
              <div className="flex justify-center gap-3 mb-5">
                <PixelStar size={14} color="hsl(var(--primary))" />
                <PixelHeart size={14} color="hsl(var(--secondary))" />
                <PixelFlower size={16} color="hsl(var(--accent))" />
                <PixelHeart size={14} color="hsl(var(--secondary))" />
                <PixelStar size={14} color="hsl(var(--primary))" />
              </div>
              <h3 className="font-mono text-xl font-bold mb-3">Ready to co-op?</h3>
              <p className="text-base text-muted-foreground mb-2">
                I am actively looking for frontend developer internship opportunities where I can grow, build, and contribute.
              </p>
              <p className="text-sm text-muted-foreground mb-8">
                Whether it is a quick hello or a full project discussion — my inbox is always open.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <a
                  href="mailto:anamika.p10902080@gmail.com"
                  data-testid="link-email"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 font-mono text-xs bg-foreground text-background border-2 border-foreground px-5 py-3 font-bold shadow-[4px_4px_0px_0px_hsl(var(--primary))] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_hsl(var(--primary))] transition-all"
                >
                  <Mail size={14} />
                  anamika.p10902080@gmail.com
                </a>
                <a
                  href="tel:+916205362386"
                  data-testid="link-phone"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 font-mono text-xs bg-background text-foreground border-2 border-foreground px-5 py-3 font-bold shadow-[4px_4px_0px_0px_hsl(var(--secondary))] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_hsl(var(--secondary))] transition-all"
                >
                  <Phone size={14} />
                  +91 6205 362 386
                </a>
              </div>

              <div className="flex justify-center gap-6 pt-8 border-t-2 border-dashed border-foreground/20">
                <a
                  href="https://github.com/anamika-pandey"
                  target="_blank" rel="noopener noreferrer"
                  data-testid="link-github"
                  className="group flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <div className="w-12 h-12 bg-background border-2 border-foreground flex items-center justify-center shadow-[2px_2px_0px_0px_hsl(var(--foreground))] group-hover:translate-x-[1px] group-hover:translate-y-[1px] group-hover:shadow-[1px_1px_0px_0px_hsl(var(--foreground))] transition-all">
                    <Github size={22} />
                  </div>
                  <span className="font-mono text-xs">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/anamika-pandey-240927315"
                  target="_blank" rel="noopener noreferrer"
                  data-testid="link-linkedin"
                  className="group flex flex-col items-center gap-2 text-muted-foreground hover:text-[#0A66C2] transition-colors"
                >
                  <div className="w-12 h-12 bg-background border-2 border-foreground flex items-center justify-center shadow-[2px_2px_0px_0px_hsl(var(--foreground))] group-hover:translate-x-[1px] group-hover:translate-y-[1px] group-hover:shadow-[1px_1px_0px_0px_hsl(var(--foreground))] transition-all">
                    <Linkedin size={22} />
                  </div>
                  <span className="font-mono text-xs">LinkedIn</span>
                </a>
              </div>
            </PixelCard>
          </motion.div>
        </section>
      </main>

      <footer className="border-t-4 border-foreground bg-background py-8 mt-20">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-3">
          <div className="flex justify-center gap-2">
            <PixelStar size={10} color="hsl(var(--primary))" />
            <PixelHeart size={10} color="hsl(var(--secondary))" />
            <PixelDiamond size={10} color="hsl(var(--accent))" />
          </div>
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} Anamika Pandey — All rights reserved.
          </p>
          <p className="font-mono text-xs text-muted-foreground opacity-50">
            Built with React + Vite. Deployed on Vercel.
          </p>
        </div>
      </footer>
    </div>
  );
}

function SectionHeader({ title, icon }: { title: string; icon: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <div className="hidden sm:flex flex-grow items-center gap-1">
        <div className="flex-grow h-0.5 bg-foreground/20" />
        <PixelDiamond size={8} color="hsl(var(--primary))" />
      </div>
      <h2 className="font-mono text-2xl sm:text-3xl text-foreground flex items-center gap-3 drop-shadow-[2px_2px_0px_hsl(var(--secondary))]">
        <span className="text-primary drop-shadow-[1px_1px_0px_hsl(var(--foreground))]">{icon}</span>
        {title}
        <span className="text-primary drop-shadow-[1px_1px_0px_hsl(var(--foreground))]">{icon}</span>
      </h2>
      <div className="hidden sm:flex flex-grow items-center gap-1">
        <PixelDiamond size={8} color="hsl(var(--primary))" />
        <div className="flex-grow h-0.5 bg-foreground/20" />
      </div>
    </div>
  );
}
