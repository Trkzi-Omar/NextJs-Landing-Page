import type {NextPage} from 'next'
import NavBar from '../components/NavBar'
import Home from '../components/Home'
import About from '../components/About'
import Innovation from '../components/Innovation'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const App: NextPage = () => {
    return (
        <div>
            <div id={'App'} className={'app p-0'}>
                <NavBar/>
                <Home/>
                <About/>
                <Innovation/>
                <Contact/>
                <Footer/>
                <div className={'noisy-background z-50 pointer-events-none fixed top-0 left-0 w-screen h-screen'}/>
            </div>
        </div>
    )
}
export default App;