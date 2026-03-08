export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">
          <a href="#home">Emmanuel</a>
        </h1>
        
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}