// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import ChatBot from './components/ChatBot/ChatBot'
import Experience from './components/Experience/Experience'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Landing from './components/Landing/Landing'
import ProjectList from './components/Projects/ProjectList'
import Skills from './components/Skills/Skills'
import Blogs from './components/Blogs'

function App() {

  return (
    <>
    <Header />
    <Landing />
    <Experience />
    <Skills />
    <ProjectList />
    <Blogs />
    <Footer />
    <ChatBot />
    </>
  )
}

export default App
