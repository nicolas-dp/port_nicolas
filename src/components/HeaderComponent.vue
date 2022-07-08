<template>
  <header class="text-white">
    <div class="avatar_component pt-5 pb-5">
      <div
        class="
          container
          d-flex
          flex-wrap
          align-items-center
          justify-content-center
          gap-3
        "
      >
        <!-- TODO Inerimento loghi programmazione -->

        <!-- Inserimento Logo -->
        <div class="logo">
          <img src="@/assets/img/photo.PNG" alt="foto profilo" />
        </div>
        <!-- Inserimento Nome,Cognome e professione -->
        <div class="name p-3">
          <h1>Nicolas De Palma</h1>
          <span>Jr. Full Stack Web Developer</span>
          <div class="baffo"></div>
        </div>
      </div>
    </div>

    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand"
          ><font-awesome-icon icon="fa-solid fa-house"
        /></a>
        <button
          class="btn_toggle navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarScroll">
          <ul
            class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
            style="--bs-scroll-height: 100px"
          >
            <li class="nav-item">
              <a class="nav-link" href="#"><font-awesome-icon icon="fa-solid fa-address-card" />
              <div>About</div>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><font-awesome-icon icon="fa-solid fa-briefcase" />
              
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><font-awesome-icon icon="fa-solid fa-graduation-cap" /></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"
                ><font-awesome-icon icon="fa-solid fa-phone" />
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><font-awesome-icon icon="fa-solid fa-file-invoice" /></a>
            </li>
          </ul>

          <div class="d-flex align-items-center justify-content-center">
            <a
              class="btn btn-dark px-3"
              href="https://www.linkedin.com/in/nicolas-de-palma-a77851146/"
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


<style lang="scss">
</style>
