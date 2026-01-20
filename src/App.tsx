import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Search, Filter, Rocket, AlertCircle, Terminal, Globe } from 'lucide-react';

const projects = [
    { id: "01", name: "profile-readme", type: "Profile", status: "Live", tech: "HTML/CSS/JS", url: "https://01-profile-readme.vercel.app" },
    { id: "02", name: "repos-browser", type: "Portfolio", status: "Live", tech: "React/TS/Tailwind", url: "https://02-repos-browser.vercel.app" },
    { id: "03", name: "studio-site", type: "Agency", status: "Live", tech: "HTML/CSS/JS", url: "https://03-studio-site.vercel.app" },
    { id: "04", name: "portfolio-site-v1", type: "Blog", status: "Live", tech: "Bootstrap/CSS", url: "https://04-portfolio-site-v1.vercel.app" },
    { id: "05", name: "portfolio-site-v2", type: "Course", status: "Live", tech: "React/Vite/TS", url: "https://05-portfolio-site-v2.vercel.app" },
    { id: "06", name: "country-explorer", type: "App", status: "Live", tech: "Angular/CLI", url: "https://06-country-explorer.vercel.app" },
    { id: "07", name: "demo-site", type: "Game", status: "Live", tech: "JS Canvas", url: "https://07-demo-site.vercel.app" },
    { id: "08", name: "car-racing-game", type: "Game", status: "Live", tech: "JS Canvas", url: "https://08-car-racing-game.vercel.app" },
    { id: "09", name: "digital-clock-react", type: "Utility", status: "Live", tech: "React/Vite", url: "https://09-digital-clock-react.vercel.app" },
    { id: "10", name: "typing-speed-trainer", type: "Utility", status: "Live", tech: "JS/CSS", url: "https://10-typing-speed-trainer.vercel.app" },
    { id: "11", name: "js-mini-games", type: "Multi-Game", status: "Live", tech: "JS/HTML", url: "https://11-js-mini-games.vercel.app" },
    { id: "12", name: "world-capstone-game", type: "Angular App", status: "Live", tech: "Angular", url: "https://12-world-capstone-game.vercel.app" },
    { id: "13", name: "react-vercel-starter", type: "Starter", status: "Live", tech: "React/Vite", url: "https://13-react-vercel-starter.vercel.app" },
    { id: "14", name: "react-blog-template", type: "Template", status: "Live", tech: "React/Vite", url: "https://14-react-blog-template.vercel.app" },
    { id: "15", name: "firebase-auth-starter", type: "Starter", status: "Live", tech: "React/Firebase", url: "https://15-firebase-auth-starter.vercel.app" },
    { id: "16", name: "firebase-file-uploader", type: "Tool", status: "Live", tech: "React/Firebase", url: "https://16-firebase-file-uploader.vercel.app" },
    { id: "17", name: "react-image-uploader", type: "Tool", status: "Live", tech: "React/Firebase", url: "https://17-react-image-uploader.vercel.app" },
    { id: "18", name: "gatsby-content-blog", type: "Blog", status: "Error", tech: "Gatsby", url: "#" },
    { id: "19", name: "nextjs-ecommerce-starter", type: "E-commerce", status: "Error", tech: "Next.js", url: "#" },
    { id: "20", name: "ionic-react-playground", type: "Mobile App", status: "Live", tech: "Ionic React", url: "https://20-ionic-react-playground.vercel.app" },
    { id: "21", name: "react-langchain-blog", type: "AI App", status: "Skipped", tech: "Flask/React", url: "#" },
    { id: "22", name: "django-starter", type: "Backend", status: "Skipped", tech: "Django", url: "#" },
    { id: "23", name: "flask-starter", type: "Backend", status: "Skipped", tech: "Flask", url: "#" },
    { id: "24", name: "python-practice-scripts", type: "Scripts", status: "Skipped", tech: "Python", url: "#" },
    { id: "25", name: "python-mixed-examples", type: "Examples", status: "Skipped", tech: "Python", url: "#" },
    { id: "26", name: "data-entry-form", type: "Form", status: "Live", tech: "HTML/Vite", url: "https://26-data-entry-form.vercel.app" },
    { id: "27", name: "react-pages-demo", type: "App", status: "Live", tech: "React/MUI", url: "https://27-react-pages-demo.vercel.app" },
    { id: "28", name: "github-desktop-tutorial", type: "Tutorial", status: "Live", tech: "React/Vite", url: "https://28-github-desktop-tutorial.vercel.app" },
    { id: "29", name: "repo-showcase", type: "Portfolio", status: "Live", tech: "React/HMR", url: "https://29-repo-showcase.vercel.app" },
    { id: "30", name: "repo-demo-v1", type: "Static Demo", status: "Live", tech: "Bootstrap/Vite", url: "https://30-repo-demo-v1.vercel.app" },
];

function App() {
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('All');

    const filteredProjects = projects.filter(p =>
        (p.name.toLowerCase().includes(search.toLowerCase()) || p.tech.toLowerCase().includes(search.toLowerCase())) &&
        (filter === 'All' || p.status === filter)
    );

    return (
        <div className="min-h-screen bg-[#0f172a] p-4 md:p-8">
            {/* Background Blobs */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[120px] animate-pulse delay-700"></div>
            </div>

            <div className="max-w-7xl mx-auto relative">
                {/* Header */}
                <header className="mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col md:flex-row md:items-center justify-between gap-6"
                    >
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-2">
                                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                    Project Browser
                                </span>
                            </h1>
                            <p className="text-slate-400 text-lg">Rebuilding & Modernizing 30 Legacy Repositories</p>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <div className="relative group">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-primary transition-colors" />
                                <input
                                    type="text"
                                    placeholder="Search projects..."
                                    className="bg-white/5 border border-white/10 rounded-xl py-2 px-10 focus:outline-none focus:ring-2 focus:ring-primary/50 w-full md:w-64 transition-all"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </div>
                            <select
                                className="bg-white/5 border border-white/10 rounded-xl py-2 px-4 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all cursor-pointer"
                                value={filter}
                                onChange={(e) => setFilter(e.target.value)}
                            >
                                <option value="All">All Status</option>
                                <option value="Live">Live</option>
                                <option value="Error">Failed</option>
                                <option value="Skipped">Skipped</option>
                            </select>
                        </div>
                    </motion.div>
                </header>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                    <StatCard title="Total Projects" value="30" icon={<Terminal className="w-6 h-6" />} color="text-blue-400" />
                    <StatCard title="Live on Vercel" value={projects.filter(p => p.status === 'Live').length.toString()} icon={<Globe className="w-6 h-6" />} color="text-green-400" />
                    <StatCard title="Target Stack" value="React/Vite" icon={<Rocket className="w-6 h-6" />} color="text-purple-400" />
                    <StatCard title="Blocked" value={projects.filter(p => p.status === 'Error').length.toString()} icon={<AlertCircle className="w-6 h-6" />} color="text-red-400" />
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    <AnimatePresence>
                        {filteredProjects.map((project, idx) => (
                            <ProjectCard key={project.id} project={project} index={idx} />
                        ))}
                    </AnimatePresence>
                </div>

                {filteredProjects.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-slate-500 text-xl">No projects found matching your criteria</p>
                    </div>
                )}
            </div>
        </div>
    );
}

function StatCard({ title, value, icon, color }: { title: string, value: string, icon: React.ReactNode, color: string }) {
    return (
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <div className={`${color} mb-4`}>{icon}</div>
            <div className="text-3xl font-bold mb-1">{value}</div>
            <div className="text-slate-400 text-sm font-medium">{title}</div>
        </div>
    );
}

function ProjectCard({ project, index }: { project: any, index: number }) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ y: -5 }}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-primary/30 transition-all group flex flex-col justify-between h-full"
        >
            <div>
                <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">#{project.id}</span>
                    <StatusBadge status={project.status} />
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-1">{project.name}</h3>
                <p className="text-sm text-slate-400 mb-4">{project.type}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                    <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 bg-white/5 rounded text-slate-300">
                        {project.tech}
                    </span>
                </div>
            </div>

            <div className="flex items-center gap-4 mt-auto">
                {project.status === 'Live' ? (
                    <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-primary/80 text-white font-bold py-2 px-4 rounded-xl transition-all"
                    >
                        <ExternalLink className="w-4 h-4" />
                        Launch
                    </a>
                ) : (
                    <div className="flex-1 flex items-center justify-center gap-2 bg-white/5 text-slate-500 font-bold py-2 px-4 rounded-xl cursor-not-allowed">
                        <AlertCircle className="w-4 h-4" />
                        N/A
                    </div>
                )}
                <a
                    href={`https://github.com/mk-knight23/${project.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/5 hover:bg-white/10 text-slate-300 rounded-xl transition-all"
                >
                    <Github className="w-5 h-5" />
                </a>
            </div>
        </motion.div>
    );
}

function StatusBadge({ status }: { status: string }) {
    const colors = {
        Live: 'bg-green-500/10 text-green-400 border-green-500/20',
        Error: 'bg-red-500/10 text-red-400 border-red-500/20',
        Skipped: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20'
    };

    return (
        <span className={`text-[10px] px-2 py-0.5 rounded-full border ${colors[status as keyof typeof colors]}`}>
            {status}
        </span>
    );
}

export default App;
