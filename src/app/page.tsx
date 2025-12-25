import React from 'react';
import { ShieldCheck, MapPin, Briefcase, Code, GraduationCap, Github, Globe, Smartphone, Lock, Server, Cpu, Target, Layers, FileText, Download } from 'lucide-react';

export default function Portfolio() {
  return (
    <div className="bg-[#0f172a] min-h-screen text-slate-300 font-sans selection:bg-blue-500/30">
      {/* HEADER / NAVIGATION */}
      <nav className="border-b border-slate-800 bg-[#0f172a]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            CP. Dev
          </span>
          <div className="flex gap-4 md:gap-6 text-sm font-medium items-center">
            <a href="mailto:chaitalip14@gmail.com" className="hover:text-blue-400 transition hidden md:block">Email</a>
            <a href="https://www.linkedin.com/in/chaitali-patel-full-stack-developer-712aaa9a/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition hidden md:block">LinkedIn</a>
            <a href="https://github.com/sitsiya" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition hidden md:block">Github</a>
            {/* Secondary Download Button in Nav */}
            <a 
              href="/CHAITALI-Resume-2025.pdf" 
              download 
              className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-3 py-1.5 rounded-lg border border-slate-700 transition text-xs"
            >
              <Download size={14} /> Resume
            </a>
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

          {/* MAIN DOWNLOAD BUTTON */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <a 
              href="/CHAITALI-Resume-2025.pdf" 
              download
              className="flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold text-lg transition shadow-lg shadow-blue-500/20 group"
            >
              <FileText size={22} />
              Download Full Resume (PDF)
              <Download size={18} className="group-hover:translate-y-1 transition-transform" />
            </a>
          </div>

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
              "Versatile Mobile and Full-Stack Developer with 8+ years of hands-on experience. My objective is to leverage my expertise in <strong>iOS, Android, React Native, and .NET MAUI</strong> to deliver polished products while optimizing performance through clean, maintainable code."
            </p>
          </div>
        </section>

        {/* TECHNOLOGY STACK */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-3">
            <Layers className="text-blue-400" /> Technology Stack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-800/30 border border-slate-800">
              <h3 className="text-blue-400 font-bold mb-4 flex items-center gap-2 text-lg"><Smartphone size={20}/> Mobile</h3>
              <div className="flex flex-wrap gap-2 text-sm text-slate-400">
                {['iOS (Swift)', 'Android (Java)', 'React Native', '.NET MAUI'].map(t => <span key={t} className="bg-slate-900 px-3 py-1 rounded-md border border-slate-700">{t}</span>)}
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-slate-800/30 border border-slate-800">
              <h3 className="text-blue-400 font-bold mb-4 flex items-center gap-2 text-lg"><Globe size={20}/> Web</h3>
              <div className="flex flex-wrap gap-2 text-sm text-slate-400">
                {['Angular', 'TypeScript', 'Node.js', 'PHP', 'HTML5/CSS3'].map(t => <span key={t} className="bg-slate-900 px-3 py-1 rounded-md border border-slate-700">{t}</span>)}
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-slate-800/30 border border-slate-800">
              <h3 className="text-blue-400 font-bold mb-4 flex items-center gap-2 text-lg"><Server size={20}/> Infrastructure</h3>
              <div className="flex flex-wrap gap-2 text-sm text-slate-400">
                {['AWS (Cognito/S3)', 'Firebase', 'MySQL', 'SIP Trunking'].map(t => <span key={t} className="bg-slate-900 px-3 py-1 rounded-md border border-slate-700">{t}</span>)}
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-3">
            <Briefcase className="text-blue-400" /> Professional Experience
          </h2>
          <div className="space-y-12">
            {/* NEURONIC WORKS */}
            <div className="relative group p-8 rounded-3xl bg-gradient-to-br from-slate-800/50 to-slate-900 border border-slate-800 overflow-hidden shadow-xl">
              <div className="flex flex-col md:flex-row justify-between mb-8 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">Neuronic Works Inc.</h3>
                  <p className="text-blue-400 font-medium italic">Lead Mobile Application Developer</p>
                </div>
                <div className="text-right text-slate-500 text-sm italic">Aug 2023 — Oct 2025</div>
              </div>
              <div className="bg-blue-600/10 border-l-4 border-blue-600 p-6 rounded-r-xl">
                <h4 className="text-white font-bold mb-2 flex items-center gap-2"><Smartphone size={18} /> Tokidos Project (iOS Lead)</h4>
                <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                  <strong>Single-handedly engineered</strong> the iOS architecture. Managed full lifecycle including App Store deployment and integrated social authentication (Gmail, Facebook, X) via third-party APIs.
                </p>
              </div>
            </div>

            {/* CONDOPLEX */}
            <div className="relative group p-8 rounded-3xl bg-gradient-to-br from-slate-800/50 to-slate-900 border border-slate-800 overflow-hidden shadow-xl">
              <div className="flex flex-col md:flex-row justify-between mb-8 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">Condoplex Monitoring Systems Inc.</h3>
                  <p className="text-blue-400 font-medium italic">Full Stack Developer</p>
                </div>
                <div className="text-right text-slate-500 text-sm italic">Oct 2021 — Aug 2023</div>
              </div>
              <div className="bg-slate-900/50 border-l-4 border-slate-600 p-6 rounded-r-xl">
                <h4 className="text-white font-bold mb-2 flex items-center gap-2"><Lock size={18} className="text-blue-400" /> Property User Management App</h4>
                <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                  Built security system on Web and Mobile using Angular and Node.js. Contributed to core property management functionality and managed technical documentation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ACADEMIC EXCELLENCE */}
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
              <h4 className="text-white font-bold uppercase text-xs tracking-widest">Mobile App Design & Development</h4>
            </div>
            <div className="bg-slate-800/20 p-8 rounded-3xl border border-slate-800">
              <div className="flex justify-between items-start mb-4">
                <p className="text-blue-400 font-bold italic text-sm">Gujarat Technological University</p>
                <span className="bg-green-500/10 text-green-400 text-xs px-3 py-1 rounded-full border border-green-500/20 font-bold">GPA: 8.26 / 10.0</span>
              </div>
              <h4 className="text-white font-bold uppercase text-xs tracking-widest">B.E. Electronics & Communication</h4>
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