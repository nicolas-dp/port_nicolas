<template>
  <header class="text-white">
    <div class="avatar_component pt-5 pb-5">
      <div class="container d-flex flex-wrap align-items-center gap-3">
        <!-- TODO Inerimento loghi programmazione -->

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
      <!-- Container wrapper -->
      <div class="container">
        <!-- Navbar brand -->
        <a class="navbar-brand me-2" href="https://mdbgo.com/">
          <i class="fas fa-dev    "></i>
        </a>

        <!-- Toggle button -->
        <button
          class="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarButtonsExample"
          aria-controls="navbarButtonsExample"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>

        <!-- Collapsible wrapper -->
        <div class="collapse navbar-collapse" id="navbarButtonsExample">
          <!-- Left links -->
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Su di me</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Formazione</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Esperienze</a>
            </li>
          </ul>
          <!-- Left links -->

          <div class="d-flex align-items-center">
            <span>Link</span>
            <a type="button" class="btn btn-primary me-3">
              
            </a>
            <a
              class="btn btn-dark px-3"
              href="https://github.com/nicolas-dp"
              role="button"
              ><font-awesome-icon icon="fa-brands fa-github" /></a>
          </div>
        </div>
        <!-- Collapsible wrapper -->
      </div>
      <!-- Container wrapper -->
    </nav>
    <!-- Navbar -->
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>


<style lang="scss">
</style>
