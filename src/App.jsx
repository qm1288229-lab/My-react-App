import Header from './Components/Header'
import Main from './Components/Main'
import Footer from './Components/Footer'
import RevealOnScroll from './Components/RevealOnScroll'

function App() {
  return (
    <>
      <Header />
      <Main />
      <RevealOnScroll>
        <Footer />
      </RevealOnScroll>
    </>
  )
}

export default App