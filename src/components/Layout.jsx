import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <style jsx global>{`
        .site-wrapper {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }

        .main-content {
          flex: 1;
          min-height: 80vh;
        }
      `}</style>

      <div className="site-wrapper">
        <Header />
        <main className="main-content">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}