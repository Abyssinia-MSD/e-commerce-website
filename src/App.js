import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
        <header class="s-header">

          <div class="header-logo">
              <a class="site-logo" href="index.html">
                  <img src={logo} alt="Homepage"/>
              </a>
          </div>

          <div class="header-email">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 12l11 3.1 7-8.1-8.156 5.672-4.312-1.202 15.362-7.68-3.974 14.57-3.75-3.339-2.17 2.925v-.769l-2-.56v7.383l4.473-6.031 4.527 4.031 6-22z"/></svg>
              <a href="mailto:#0">abyssiniamsdinfo@gmail.com</a>
          </div>

        </header> 


        <section id="intro" class="s-intro s-intro--static">

          <div class="grid-overlay">
              <div></div>
          </div> 

          <div class="row intro-content">

              <div class="column">

                  <div class="intro-content__text">

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

                  <div class="intro-content__bottom">

                      <div class="intro-content__counter-wrap">
                          <h4 className='mb-1'>Launching soon</h4>
              
                          <h1  className='reach-text'>Reach out to us!</h1>
                      </div> 

                      <div class="intro-content__notify">
                          <button onClick={()=>{window.location = "mailto:xyz@abyssiniamsdinfo@gmail.com";}} type="button" class="btn--stroke btn--small modal-trigger">
                             Email Us
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 12l-9-9v7h-15v4h15v7z"/></svg>
                          </button>
                      </div> 

                  </div> 

              </div> 

          </div> 

        

          <ul class="intro-social">
              <li><a href="#0"><i class="fab fa-facebook" aria-hidden="true"></i></a></li>
              <li><a href="#0"><i class="fab fa-twitter" aria-hidden="true"></i></a></li>
              <li><a href="#0"><i class="fab fa-instagram" aria-hidden="true"></i></a></li>
              <li><a href="#0"><i class="fab fa-dribbble" aria-hidden="true"></i></a></li>
              <li><a href="#0"><i class="fab fa-behance" aria-hidden="true"></i></a></li>
          </ul> 

          <div class="intro-scroll">
              <a href="#info" class="scroll-link smoothscroll">
                  COMING SOON
              </a>
          </div> 

        </section>
    </div>
  );
}

export default App;
