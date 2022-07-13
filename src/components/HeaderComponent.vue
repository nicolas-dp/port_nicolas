<template>
  <header class="text-white">
    <div class="avatar_component pt-5 pb-5">
      <div
        class="container d-flex flex-wrap align-items-center justify-content-center gap-3 animated"
      >
        <!-- Inserimento Logo -->
        <div class="logo">
          <img src="@/assets/img/photo.png" alt="foto profilo" />
        </div>
        <!-- Inserimento Nome,Cognome e professione -->
        <div class="name p-3">
          <h1>Nicolas De Palma</h1>
          <span>Jr. Full Stack Web Developer</span>
        </div>
      </div>
    </div>

    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><font-awesome-icon icon="fa-solid fa-house" /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="#about"
                ><font-awesome-icon icon="fa-solid fa-address-card" />
                Profilo
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#esperienze"
                ><font-awesome-icon icon="fa-solid fa-briefcase" />
                Esperienze
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#formazione"
                ><font-awesome-icon icon="fa-solid fa-graduation-cap" />
                Formazione
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contacts_cv"
                ><font-awesome-icon icon="fa-solid fa-phone" />
                Contatti
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contacts_cv"
                ><font-awesome-icon icon="fa-solid fa-file-invoice" />
                CV
              </a>
            </li>
          </ul>
          <div class="d-flex align-items-center justify-content-center">
            <a
              class="btn btn-dark px-3"
              href="https://www.instagram.com/_nicolasdp_/"
              role="button"
              ><font-awesome-icon icon="fa-brands fa-instagram" />
            </a>

            <a
              class="btn btn-dark px-3"
              href="https://www.linkedin.com/in/nicolas-de-palma-a77851146/"
              role="button"
              ><font-awesome-icon icon="fa-brands fa-linkedin" />
            </a>

            <a
              class="btn btn-dark px-3"
              href="https://github.com/nicolas-dp"
              role="button"
              ><font-awesome-icon icon="fa-brands fa-github"
            /></a>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<style lang="scss"></style>
