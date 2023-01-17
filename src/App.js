import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
        <header className="s-header">

          <div className="header-logo">
              <a className="site-logo" href="index.html">
                  <img src={logo} alt="Homepage"/>
              </a>
          </div>

          <div className="header-email">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 12l11 3.1 7-8.1-8.156 5.672-4.312-1.202 15.362-7.68-3.974 14.57-3.75-3.339-2.17 2.925v-.769l-2-.56v7.383l4.473-6.031 4.527 4.031 6-22z"/></svg>
              <a href="mailto:#0">abyssiniamsdinfo@gmail.com</a>
          </div>

        </header> 


        <section id="intro" className="s-intro s-intro--static">

          <div className="grid-overlay">
              <div></div>
          </div> 

          <div className="row intro-content">

              <div className="column">

                  <div className="intro-content__text">

                      <h3>
                      Coming Soon
                      </h3>
                      
                      <h1>
                      Get ready everyone. <br/>
                      We are currently <br/>
                      working on a super <br/>
                      awesome website.
                      </h1>

                  </div> 

                  <div className="intro-content__bottom">

                      <div className="intro-content__counter-wrap">
                          <h4 className='mb-1'>Launching soon</h4>
              
                          <h1  className='reach-text'>Reach out to us!</h1>
                      </div> 

                      <div className="intro-content__notify">
                          <button onClick={()=>{window.location = "mailto:xyz@abyssiniamsdinfo@gmail.com";}} type="button" className="btn--stroke btn--small modal-trigger">
                             Email Us
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 12l-9-9v7h-15v4h15v7z"/></svg>
                          </button>
                      </div> 

                  </div> 

              </div> 

          </div> 

        

          <ul className="intro-social">
              <li><a href="https://www.facebook.com/profile.php?id=100089284040898"><i className="fab fa-facebook" aria-hidden="true"></i></a></li>
              <li><a href="https://twitter.com/Abyssiniyamsd"><i className="fab fa-twitter" aria-hidden="true"></i></a></li>
              <li><a href="https://www.instagram.com/abyssiniamsdinfo/"><i className="fab fa-instagram" aria-hidden="true"></i></a></li>
          </ul> 

          <div className="intro-scroll">
              <a href="#info" className="scroll-link smoothscroll">
                  COMING SOON
              </a>
          </div> 

        </section>
    </div>
  );
}

export default App;
