function App() {
  return (
    <>
      <div style={{textAlign:'center',padding:'10px 0',background:'linear-gradient(90deg,#1e3a5f,#2d5a87)',borderBottom:'1px solid rgba(255,255,255,0.1)'}}>
        <a href="https://dailyai.tw/" target="_blank" rel="noopener noreferrer" style={{color:'#e0e0e0',textDecoration:'none',fontSize:'14px'}}>
          歡迎訪問 <strong style={{color:'#60a5fa'}}>Daily AI Taiwan</strong> — 立足台灣，讀懂 AI
        </a>
      </div>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
        {/* Navigation */}
        <nav className="flex items-center justify-between px-8 py-6">
        <div className="flex items-center gap-4">
          <a href="https://aipm.com.tw/" className="text-sm font-semibold text-white bg-purple-600 hover:bg-purple-700 px-3 py-1.5 rounded-lg transition-colors">← aipm.com.tw</a>
          <span className="text-2xl font-bold text-purple-700">Amy's 空間</span>
        </div>
        <div className="flex gap-6 text-sm font-medium text-gray-600">
          <a href="#about" className="hover:text-purple-600 transition-colors">About</a>
          <a href="#projects" className="hover:text-purple-600 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-purple-600 transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <main className="flex flex-col items-center justify-center text-center px-6 py-32">
        <h1 className="text-6xl sm:text-8xl font-extrabold tracking-tight bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">
          Amy's 空間
        </h1>
        <p className="mt-6 max-w-xl text-lg text-gray-500 leading-relaxed">
          Welcome to my space. A place to explore ideas, build projects, and share what I learn along the way.
        </p>
        <div className="mt-10 flex gap-4">
          <a
            href="#projects"
            className="rounded-full bg-purple-600 px-8 py-3 text-white font-semibold shadow-lg hover:bg-purple-700 transition-colors"
          >
            View Projects
          </a>
          <a
            href="#about"
            className="rounded-full border-2 border-purple-300 px-8 py-3 text-purple-600 font-semibold hover:bg-purple-50 transition-colors"
          >
            About Me
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 text-sm text-gray-400">
        &copy; 2026 Amy's 空間
      </footer>
      </div>
    </>
  )
}

export default App
