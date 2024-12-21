import Header from '../components/AboutMe';
import Project from '../components/Project';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <>
            <Header />
            <main className="container mx-auto p-4 text-center">
            <span className="text-red-900">● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ●</span>
                <Project />
                <span className="text-red-900">● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ●</span>
                <Skills />
                <span className="text-red-900">● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ●</span>
                 <Education/>
                 <span className="text-red-900">● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ●</span>
                 <Contact/>
                 <span className="text-red-900">● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ●</span>
            </main>
            <Footer />
        </>
    );
}
