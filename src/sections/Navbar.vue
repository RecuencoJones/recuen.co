<template>
  <section id="ext_menu-0">
    <nav class="navbar navbar-dropdown navbar-fixed-top">
      <div class="container">
        <div class="mbr-table">
          <div class="mbr-table-cell">
            <div class="navbar-brand">
              <a href="#top" class="navbar-logo"><img src="images/logo.png" alt="RecuencoJones"></a>
              <a class="navbar-caption" href="#top">David Recuenco</a>
            </div>
          </div>
          <div class="mbr-table-cell">
            <button class="navbar-toggler pull-xs-right hidden-md-up"
                    type="button"
                    data-toggle="collapse"
                    data-target="#exCollapsingNavbar">
              <i class="mbri-menu"></i>
            </button>
            <ul class="nav-dropdown collapse pull-xs-right nav navbar-nav navbar-toggleable-sm"
                id="exCollapsingNavbar">
              <li class="nav-item">
                <a class="nav-link link" href="#introduction">INTRODUCTION</a>
              </li>
              <li class="nav-item">
                <a class="nav-link link" href="#skills">SKILLS</a>
              </li>
              <li class="nav-item">
                <a class="nav-link link" href="#portfolio">PORTFOLIO</a>
              </li>
              <li class="nav-item">
                <a class="nav-link link" href="#social-links">SOCIAL</a>
              </li>
            </ul>
            <button class="navbar-toggler navbar-close"
                    type="button"
                    hidden=""
                    data-toggle="collapse"
                    data-target="#exCollapsingNavbar">
              <i class="mbri-close"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  </section>
</template>

<script>
export default {
  name: 'navbar'
}
</script>

<style lang="scss" src="../styles/navbar.scss" scoped></style>
