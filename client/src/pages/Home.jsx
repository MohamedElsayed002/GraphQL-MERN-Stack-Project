
import AddClientModal from "../components/AddClientModal"
import AddProjectModal from "../components/AddProjectModal"
import Clients from "../components/Clients"
import Header from "../components/Header"
import Projects from "../components/Projects"
const Home = () => {
    return (
        <>
<Header /> 
<div className='container'>
  <AddClientModal />
  <AddProjectModal/>
  <Projects/>
  <Clients/>
</div>        </>
    )
}

export default Home