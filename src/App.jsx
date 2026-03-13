function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6">
        <span className="text-2xl font-bold text-purple-700">Amy's 空間</span>
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
  )
}

export default App
