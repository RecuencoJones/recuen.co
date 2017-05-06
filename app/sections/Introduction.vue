<template>
  <section class="mbr-section mbr-section-hero mbr-section-full header2 mbr-parallax-background mbr-after-navbar"
           id="introduction" style="background-image: url(static/images/background.jpg);">

    <div class="mbr-overlay" style="opacity: 0.4; background-color: rgb(0, 0, 0);">
    </div>

    <div class="mbr-table mbr-table-full">
      <div class="mbr-table-cell">
        <div class="container">
          <div class="mbr-section row">
            <div class="mbr-table-md-up">
              <div class="mbr-table-cell col-md-5 content-size text-xs-center text-md-right">
                <h3 class="mbr-section-title display-2">The name is Jones,<br>Recuenco Jones</h3>

                <div class="mbr-section-text">
                  <p>Software Engineer<br>Frontend Developer<br>JavaScript Lover<br>Avid Learner&nbsp;</p>
                </div>
              </div>
              <div class="mbr-table-cell mbr-valign-top mbr-left-padding-md-up col-md-7 image-size"
                   style="width: 36%;">
                <div class="mbr-figure"><img src="static/images/me.jpg" class="img-circle"></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="mbr-arrow mbr-arrow-floating hidden-sm-down" aria-hidden="true">
      <a href="#skills"><i class="mbr-arrow-icon"></i></a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'introduction'
}
</script>

<style>
  .mbr-arrow-icon::before {
    left: 2px;
  }
</style>
