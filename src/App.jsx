import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"
import { EquipoProvider } from "./context/EquipoContext"

function App() {
  return (
    <div className="flex justify-between aling-center flex-col h-screen">
      <Header />
      <EquipoProvider>
        <Main />
      </EquipoProvider>
      <Footer />
    </div>
  )
}

export default App
