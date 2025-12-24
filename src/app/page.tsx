import React from 'react';
import { ShieldCheck, MapPin, Briefcase, Code, GraduationCap, Github, Globe, Smartphone, Lock, Server, Cpu, Target, Layers } from 'lucide-react';

export default function Portfolio() {
  return (
    <div className="bg-[#0f172a] min-h-screen text-slate-300 font-sans selection:bg-blue-500/30">
      {/* HEADER / NAVIGATION */}
      <nav className="border-b border-slate-800 bg-[#0f172a]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            CP. Dev
          </span>
          <div className="flex gap-6 text-sm font-medium">
            <a href="mailto:chaitalip14@gmail.com" className="hover:text-blue-400 transition">Email</a>
            <a href="https://www.linkedin.com/in/chaitali-patel-full-stack-developer-712aaa9a/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">LinkedIn</a>
            <a href="https://github.com/sitsiya" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">GitHub</a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pb-20">
        {/* HERO SECTION */}
        <section className="py-20 flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
            Chaitali Patel
          </h1>
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <ShieldCheck size={16} />
            Permanent Resident of Canada 🇨🇦
          </div>
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl leading-relaxed mb-8">
            Senior Mobile & Full Stack Developer with <span className="text-blue-400 font-bold">8+ years</span> of experience 
            specializing in high-security architectures and cross-platform ecosystems.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-lg border border-slate-700">
              <MapPin size={16} className="text-blue-400" />
              Red Deer, AB (Relocating across Alberta)
            </div>
          </div>
        </section>

        {/* OBJECTIVE SECTION */}
        <section className="mb-24">
          <div className="bg-gradient-to-r from-blue-900/20 to-transparent p-8 rounded-3xl border border-blue-500/20">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Target className="text-blue-400" /> Career Objective
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed italic">
              "Versatile Mobile and Full-Stack Developer with 8+ years of hands-on experience in designing, building, and deploying scalable native and cross-platform applications. My objective is to leverage my expertise in <strong>iOS (Swift), Android, React Native, and .NET MAUI</strong> to deliver polished, high-performing products. I am committed to bridging user experience with robust backend architecture while optimizing performance through clean, maintainable code in a fast-paced Canadian tech environment."
            </p>
          </div>
        </section>

        {/* DETAILED TECHNOLOGY STACK */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-3">
            <Layers className="text-blue-400" /> Technology Stack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-800/30 border border-slate-800">
              <h3 className="text-blue-400 font-bold mb-4 flex items-center gap-2 text-lg"><Smartphone size={20}/> Mobile Development</h3>
              <div className="flex flex-wrap gap-2 text-sm text-slate-400">
                {['iOS (Swift)', 'Android (Java/XML)', 'React Native', '.NET MAUI', 'Mobile UI/UX Optimization'].map(t => <span key={t} className="bg-slate-900 px-3 py-1 rounded-md border border-slate-700">{t}</span>)}
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-slate-800/30 border border-slate-800">
              <h3 className="text-blue-400 font-bold mb-4 flex items-center gap-2 text-lg"><Globe size={20}/> Web & Frontend</h3>
              <div className="flex flex-wrap gap-2 text-sm text-slate-400">
                {['Angular', 'JavaScript (ES6+)', 'TypeScript', 'HTML5 & CSS3', 'Responsive Design', 'PHP'].map(t => <span key={t} className="bg-slate-900 px-3 py-1 rounded-md border border-slate-700">{t}</span>)}
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-slate-800/30 border border-slate-800">
              <h3 className="text-blue-400 font-bold mb-4 flex items-center gap-2 text-lg"><Server size={20}/> Backend & Database</h3>
              <div className="flex flex-wrap gap-2 text-sm text-slate-400">
                {['Node.js', 'RESTful APIs', 'MySQL', 'SQL Server', 'Java'].map(t => <span key={t} className="bg-slate-900 px-3 py-1 rounded-md border border-slate-700">{t}</span>)}
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-slate-800/30 border border-slate-800">
              <h3 className="text-blue-400 font-bold mb-4 flex items-center gap-2 text-lg"><Lock size={20}/> Cloud & Security</h3>
              <div className="flex flex-wrap gap-2 text-sm text-slate-400">
                {['AWS (S3, Cognito)', 'Firebase', 'OAuth 2.0', 'SIP Trunking'].map(t => <span key={t} className="bg-slate-900 px-3 py-1 rounded-md border border-slate-700">{t}</span>)}
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-slate-800/30 border border-slate-800 lg:col-span-2">
              <h3 className="text-blue-400 font-bold mb-4 flex items-center gap-2 text-lg"><Briefcase size={20}/> Tools & Methodology</h3>
              <div className="flex flex-wrap gap-2 text-sm text-slate-400">
                {['Git & GitHub', 'CI/CD Pipelines', 'App Store Deployment', 'Play Store Deployment', 'Agile/Scrum', 'Technical Documentation'].map(t => <span key={t} className="bg-slate-900 px-3 py-1 rounded-md border border-slate-700">{t}</span>)}
              </div>
            </div>
          </div>
        </section>

        {/* PROFESSIONAL EXPERIENCE SECTION (Uniform Style) */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-3">
            <Code className="text-blue-400" /> Professional Experience
          </h2>

          <div className="space-y-12">
            {/* NEURONIC WORKS */}
            <div className="relative group p-8 rounded-3xl bg-gradient-to-br from-slate-800/50 to-slate-900 border border-slate-800 overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition text-6xl font-black text-blue-400 uppercase">Latest</div>
              <div className="flex flex-col md:flex-row justify-between mb-8 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">Neuronic Works Inc.</h3>
                  <p className="text-blue-400 font-medium italic underline decoration-blue-500/30">Lead Mobile Application Developer</p>
                </div>
                <div className="text-right text-slate-500 text-sm italic">Aug 2023 — Oct 2025</div>
              </div>
              <div className="bg-blue-600/10 border-l-4 border-blue-600 p-6 rounded-r-xl">
                <h4 className="text-white font-bold mb-2 flex items-center gap-2"><Smartphone size={18} /> Tokidos Project (iOS Lead)</h4>
                <p className="text-slate-300 leading-relaxed">
                  <strong>Single-handedly engineered</strong> the end-to-end iOS architecture. Managed the full lifecycle including <strong>App Store & Play Store deployment</strong>, and integrated social authentication (Gmail, Facebook, X, Email) via third-party APIs.
                </p>
              </div>
            </div>

            {/* CONDOPLEX */}
            <div className="relative group p-8 rounded-3xl bg-gradient-to-br from-slate-800/50 to-slate-900 border border-slate-800 overflow-hidden shadow-xl">
              <div className="flex flex-col md:flex-row justify-between mb-8 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">Condoplex Monitoring Systems Inc.</h3>
                  <p className="text-blue-400 font-medium italic underline decoration-blue-500/30">Full Stack Developer</p>
                </div>
                <div className="text-right text-slate-500 text-sm italic">Oct 2021 — Aug 2023</div>
              </div>
              <div className="bg-slate-900/50 border-l-4 border-slate-600 p-6 rounded-r-xl">
                <h4 className="text-white font-bold mb-2 flex items-center gap-2"><Lock size={18} className="text-blue-400" /> Property User Management App</h4>
                <p className="text-slate-300 leading-relaxed">
                  Implemented the Condoplex security system on Web and Mobile using <strong>JavaScript, Angular, and Node.js</strong>. Developed mission-critical property management functionality, managed documentation, and conducted <strong>GitHub code reviews</strong>.
                </p>
              </div>
            </div>

            {/* IXICA */}
            <div className="relative group p-8 rounded-3xl bg-gradient-to-br from-slate-800/50 to-slate-900 border border-slate-800 overflow-hidden shadow-xl">
              <div className="flex flex-col md:flex-row justify-between mb-8 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">IXICA Communications Inc.</h3>
                  <p className="text-blue-400 font-medium italic underline decoration-blue-500/30">Web & Software Developer</p>
                </div>
                <div className="text-right text-slate-500 text-sm italic">Jan 2019 — Oct 2021</div>
              </div>
              <div className="bg-cyan-600/10 border-l-4 border-cyan-600 p-6 rounded-r-xl">
                <h4 className="text-white font-bold mb-3 flex items-center gap-2"><Server size={18} className="text-cyan-400" /> SIP Trunking & Cloud PBX Systems</h4>
                <p className="text-slate-300 leading-relaxed">
                  Built end-to-end web systems for frontend, backend, and API integrations for <strong>SIP trunking and cloud PBX management</strong>. Digitally transformed IXICA's presence by building custom database management for <strong>E411 and 911 services</strong>.
                </p>
              </div>
            </div>

            {/* SIYA INFOTECH */}
            <div className="relative group p-8 rounded-3xl bg-gradient-to-br from-slate-800/50 to-slate-900 border border-slate-800 overflow-hidden shadow-xl">
              <div className="flex flex-col md:flex-row justify-between mb-8 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white tracking-tight uppercase">Siya InfoTech Pvt. Ltd.</h3>
                  <p className="text-blue-400 font-medium italic underline decoration-blue-500/30">Android Developer</p>
                </div>
                <div className="text-right text-slate-500 text-sm italic">June 2015 — Nov 2016</div>
              </div>
              <div className="bg-emerald-600/10 border-l-4 border-emerald-600 p-6 rounded-r-xl">
                <h4 className="text-white font-bold mb-2 flex items-center gap-2"><Cpu size={18} className="text-emerald-400" /> Fudi App (Android Market)</h4>
                <p className="text-slate-300 leading-relaxed">
                  Developed the "Fudi" native Android application. Integrated <strong>Google Maps API</strong> for tracking and <strong>PayPal API</strong> for payments, and social APIs (Facebook) for streamlined user onboarding.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section className="py-12 border-t border-slate-800">
           <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <GraduationCap className="text-blue-400" /> Academic Excellence
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/20 p-8 rounded-3xl border border-slate-800">
              <div className="flex justify-between items-start mb-4">
                <p className="text-blue-400 font-bold italic text-sm">Lambton College, Toronto</p>
                <span className="bg-green-500/10 text-green-400 text-xs px-3 py-1 rounded-full border border-green-500/20 font-bold">GPA: 3.64 / 4.0</span>
              </div>
              <h4 className="text-white font-bold uppercase text-sm tracking-widest leading-relaxed">Mobile App Design & Development</h4>
            </div>
            <div className="bg-slate-800/20 p-8 rounded-3xl border border-slate-800">
              <div className="flex justify-between items-start mb-4">
                <p className="text-blue-400 font-bold italic text-sm">Gujarat Technological University</p>
                <span className="bg-green-500/10 text-green-400 text-xs px-3 py-1 rounded-full border border-green-500/20 font-bold">GPA: 8.26 / 10.0</span>
              </div>
              <h4 className="text-white font-bold uppercase text-sm tracking-widest leading-relaxed">B.E. Electronics & Communication</h4>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-950 py-10 border-t border-slate-900 text-center">
        <p className="text-slate-500 text-sm font-medium">© 2025 Chaitali Patel. Built with Next.js & Tailwind CSS.</p>
      </footer>
    </div>
  );
}