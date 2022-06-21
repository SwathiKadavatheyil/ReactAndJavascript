import './Rules.css';
import bookshelf from '../../assets/bookshelf.jpeg';

function Rules(){
    return(<div>
        <div className="container-fluid">
              <div className="row">
                <div className="col-4"><img className="imgAbout" src={bookshelf}/></div>
                <div className="col-4">
                    <img className="imgAbout" src={bookshelf}/>
                </div>
                <div className="col-4"><img className="imgAbout" src={bookshelf}/></div>
              </div>
              <div className="row">
                <div className="col-12">
                    <p>
                    <b>The user has to adhere to the following terms and conditions of use:</b>
                    <ul>
                        <li>Use of the digital library resources, datafiles, (consultation) software and media is allowed only within the academic context of research, education and study.
                        Commercial use of the digital resources is prohibited.</li>
                        <li>The user is not permitted to use the digital resources for an organisation or company outside the RU to which he is associated.</li>
                        <li>The use of library resources, datafiles, (consultation) software and digital media is submitted to standard copyright rules.</li>
                        <li>Printing and downloading individual journal articles and parts of book chapters is only permitted for personal use.</li>
                        <li>It is prohibited to systematically download, distribute, print or store substantial parts of licensed materials.</li>
                        <li>Publishing licensed materials through Internet or electronic networks is not permitted.</li>
                    </ul>
                    </p>
                </div>
              </div>   
          </div>
    </div>);
}

export default Rules;