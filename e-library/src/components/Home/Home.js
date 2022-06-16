import './Home.css'
import online_library from '../../assets/online_library.jpeg';



function Home(){
    
    return(<div>
        <div className="container-fluid">
              <div className="row">
                <div className="col-4"></div>
                <div className="col-4">
                    <img className="imgAbout" src={online_library}/>
                </div>
                <div className="col-4"></div>
              </div>
              <div className="row">
                <div className="col-12">
                    <p style={{color:"green"}}><b>
                      Welcome to online library<br/>
                      Happy Reading!!!</b>
                    </p>
                    <p>
                     A digital library, also called an online library, an internet library, a digital repository, or a digital collection 
                     is an online database of digital objects that can include text, still images, audio, video, digital documents, or other 
                     digital media formats or a library accessible through the internet. Objects can consist of digitized content like print
                     or photographs, as well as originally produced digital content like word processor files or social media posts. In addition 
                     to storing content, digital libraries provide means for organizing, searching, and retrieving the content contained in the 
                     collection. Digital libraries can vary immensely in size and scope, and can be maintained by individuals or organizations.
                     The digital content may be stored locally, or accessed remotely via computer networks. These information retrieval systems 
                     are able to exchange information with each other through interoperability and sustainability.
                    </p>
                </div>
              </div>   
          </div>
    </div>);
}

export default Home;