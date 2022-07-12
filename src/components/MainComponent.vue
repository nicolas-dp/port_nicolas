<template>
  <main class="text-white">
    <!-- About -->
    <section id="about" class="about pt-5">
      <div class="container" data-aos="fade-right">
        <h3><font-awesome-icon icon="fa-solid fa-address-card" /> PROFILO</h3>
        <p>
          🎓Dopo gli studi ho lavorato per 9 anni in un'azienda di consulenza
          clienti, nella quale ho sviluppato diverse skills, migliorando la
          capacità di "Team Working", per me fondamentale nel mondo del lavoro.
          <br />
          💪 Non ho mai abbandonato la mia passione per i linguaggi di
          programmazione affrontati durante il mio percorso scolastico,
          terminato con la qualifica di Perito Informatico. <br />
          💻 Ho deciso così di potenziare le mie capacità, iscrivendomi al corso
          di Full Stack Web Developer offerto da Boolean, la scelta migliore che
          potessi fare.
        </p>
        <i
          >"No. Non provare. Fare! O non fare. Non esiste provare" cit.Yoda -
          StarWars
        </i>
      </div>

      <!-- Yoda -->
      <div class="yoda pb-5">
        <img class="img-fluid" src="@/assets/img/yoda.png" alt="maestro yoda" />
      </div>
    </section>
    
    <!-- Esperienze -->
    <section id="esperienze" class="pt-5">
      <div class="container text-black">
        <h3><font-awesome-icon icon="fa-solid fa-briefcase" /> ESPERIENZE</h3>

        <div class="row row-cols-1 row-cols-md-3 row-cols-lg-3 justify-content-center">
          <div class="col" data-aos="fade-right">
            <div class="card p-3 mb-2">
              <div class="d-flex">
                <div class="d-flex flex-row align-items-center">
                  <div class="icon">
                    <font-awesome-icon icon="fa-solid fa-code" />
                  </div>
                  <div class="c-details">
                    <h6 class="text-body fw-bold">
                      Jr. Full Stack Web Developer Trainee - Boolean
                    </h6>
                    <span>FEBBRAIO 2022 - AGOSTO 2022</span>
                  </div>
                </div>
                <div class="badge"><span>Code</span></div>
              </div>
              <div class="mt-2">
                <p>
                  Durante i 6 mesi di corso intensivo, ho avuto modo di fare
                  molta pratica con diversi progetti ispirati alle più famose
                  web applications come Whatsapp Web, Spotify Web, Netflix e con
                  web pages DC Comics, Discord, DropBox e molte altre.
                </p>
              </div>
            </div>
          </div>

          <div class="col" data-aos="fade-left">
            <div class="card p-3 mb-2">
              <div class="d-flex justify-content-between">
                <div class="d-flex flex-row align-items-center">
                  <div class="icon">
                    <font-awesome-icon icon="fa-solid fa-headset" />
                  </div>
                  <div class="c-details">
                    <h6 class="text-body fw-bold">
                      Supporto Back Office - NETWORK CONTACTS SRL
                    </h6>
                    <span>LUGLIO 2012 - FEBBRAIO 2022</span>
                  </div>
                </div>
                <div class="badge"><span>CSC</span></div>
              </div>
              <div class="mt-2">
                <p>Durante la mia esperienza, ho perfezionato le seguenti competenze: 
                <ul>
                  <li>
                    Help Desk Support
                  </li>
                  <li>
                    Problem solving
                  </li>
                  <li>
                    Team Working
                  </li>
                  <li>
                    Gestione
                  dell'ambiente di lavoro
                  </li>                    
                </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Code -->
      <div class="code">
        <img height="200" src="@/assets/img/img_header.png" alt="code" />
      </div>
    </section>
    <!-- Work -->
    <section id="work" class="pt-5">
      <div class="container text-black">
        <h3><font-awesome-icon icon="fa-solid fa-person-digging" /> Progetti</h3>

        <div class="row row-cols-1 row-cols-md-3 row-cols-lg-3 justify-content-center gap-3">
          <div class="col" data-aos="zoom-in-down">
            
            <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
              <div class="flipper">
                  <div class="front"> 
                    <img class="img-fluid" src="@/assets/img/Spotify.png" alt="">
                  </div>
                  <div class="back">
                    <h4>Web App Spotify</h4>
                    <p>
                        Riproduzione della Web App di Spotify utilizzando HTML e CSS.
                        É possibile visionare il progetto seguendo questo link 👉: <a class="btn btn-primary" href="https://spotify-wapp.netlify.app">Scopri</a> 
                    </p>

                  </div>
              </div>
            </div>

          </div>

          <div class="col" data-aos="zoom-in-down">
            
            <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
              <div class="flipper">
                  <div class="front"> 
                    <img class="img-fluid" src="@/assets/img/CampoMinato.png" alt="">
                  </div>
                  <div class="back">
                    <h4>Campo Minato</h4>
                    <p>
                        Uno dei giochi più famosi e divertenti della storia, parliamo di campo minato.
                        ATTENZIONE non è così facile come sembra 🧐.
                        É possibile visionare il codice tramite questo link 👉: <a class="btn btn-primary" href="https://campo-minato-repl.netlify.app/">Scopri</a> 
                    </p>

                  </div>
              </div>
            </div>

          </div>

          <div class="col" data-aos="zoom-in-down">
            
            <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
              <div class="flipper">
                  <div class="front"> 
                    <img class="img-fluid" src="@/assets/img/Boolzapp.png" alt="">
                  </div>
                  <div class="back">
                    <h4>Boolzapp</h4>
                    <p>
                        Replica web app del più famoso servizio di messeggistica. É possibile visionare il codice del progetto tramite questo link 👉: <a class="btn btn-primary" href="https://vue-boolzapp.netlify.app">Scopri</a> 
                    </p>

                  </div>
              </div>
            </div>

          </div>
        </div>
        
      </div>
    </section>
    <!-- Contatti  -->
    <section id="contacts_cv" class="box bg-dark pt-5">
      <div class="container bg-dark">
        <div class="row text-white">
          <div class="col-6">
            <h3><font-awesome-icon icon="fa-solid fa-phone" /> CONTATTI</h3>
          <ul class="list-unstyled">
            <li> Telefono: <a class="btn btn-primary" href="callto://+393923378249" title="Chiama ora "> Chiama ora</a></li>
            
            <li> Mail: <a href="wellcomenicolas@gmail.com">Invia una mail</a></li>
            <li> Instagram: </li>
          </ul>
          </div>
          <div class="col-6">
          <!-- CV -->
          <div class="container d-flex flex-column align-items-center gap-3">
              <h3><font-awesome-icon icon="fa-solid fa-file-invoice" /> CURRICULUM</h3>
              <img src="@/assets/img/cv_image.png" alt="img CV" height="150">
              <a class="btn btn-danger" href="@/assets/img/CV_nicolas_depalma.pdf" download>Scarica CV</a>
          </div>
          </div>
        </div>
      </div>
    </section>
    
    
  </main>
</template>

<script>

export default {
  name: "MainComponent",

  
};


</script>

<style scoped>
body {
  background-color: #eee;
}

.card {
  border: none;
  border-radius: 10px;
}

.c-details span {
  font-weight: 300;
  font-size: 13px;
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 39px;
}

.badge span {
  background-color: #fffbec;
  width: 60px;
  height: 25px;
  padding-bottom: 3px;
  border-radius: 5px;
  display: flex;
  color: #fed85d;
  justify-content: center;
  align-items: center;
}

.progress {
  height: 10px;
  border-radius: 10px;
}

.progress div {
  background-color: red;
}

.text1 {
  font-size: 14px;
  font-weight: 600;
}

.text2 {
  color: #a5aec0;
}
</style>