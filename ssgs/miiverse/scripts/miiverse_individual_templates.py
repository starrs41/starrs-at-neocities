main_template = """
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Miiverse - {name}</title>
  <link rel="stylesheet" href="../misc/styles/miiverse-globals.css">
  <link rel="stylesheet" href="../misc/styles/miiverse-individual.css">
</head>
<body class="u-pause-animation">
  <div class="o-navbar u-pause-animation">
    <div class="o-navbar__left">
      <a class="o-button--icon" href="../">
        <img src="../../../graphics/misc/miiverse/home.svg" alt="Home Icon"><span>Home</span>
      </a>
    </div>
    <div class="o-navbar__right">
      <label for="musicToggle" class="o-button o-button--checkbox">
        <input type="checkbox" id="musicToggle" /><span id="musicToggleText">Music: OFF</span>
      </label>
      <label for="animationToggle" class="o-button o-button--checkbox">
        <input type="checkbox" id="animationToggle" /><span id="animationToggleText">Animations: OFF</span>
      </label>
    </div>
  </div>
  <div class="o-main--mii">
    <div class="o-mii-summary">
      <div class="o-mii-summary__portrait-container">
        <img class="o-mii-summary__portrait" src="../../../graphics/misc/miiverse/pablo/pablo-idle.gif" alt="Pablo idling" />
      </div>
      <div class="o-mii-summary__bio">
        <h1 class="o-mii-summary__name">
          {name}
        </h1>
        <div class="o-mii-summary__character">
          {description}
        </div>
        {personality}
      </div>
    </div>
    <div class="o-mii-quirk-list">
      {quirks}
    </div>
    <div class="o-mii-details">
      <h2 class="o-mii-heading">
        Details
      </h2>
      <div class="o-mii-details__list">
        {details}
        <div class="o-mii-details__item o-mii-details__item--trivia">
          <p class="o-mii-details__label">
            Trivia
          </p>
          <ul class="o-mii-details__info o-mii-details__info--trivia">
            {trivia}
          </ul>
        </div>
      </div>
    </div>
    <div class="o-mii-gallery">
      <h2 class="o-mii-heading">
        Gallery
      </h2>
      <div class="o-game-list">
        <label for="all" class="o-button o-button--checkbox">
          <input type="checkbox" id="all" checked /> All
        </label>
        <label for="tlld" class="o-button o-button--checkbox">
          <input type="checkbox" id="tlld" checked /> Tomodachi Life: Living the Dream (Switch)
        </label>
        <label for="tl" class="o-button o-button--checkbox">
          <input type="checkbox" id="tl" checked /> Tomodachi Life (3DS)
        </label>
        <label for="tc" class="o-button o-button--checkbox">
          <input type="checkbox" id="tc" checked /> Tomodachi Collection (DS)
        </label>
        <label for="miitopiaswitch" class="o-button o-button--checkbox">
          <input type="checkbox" id="miitopiaswitch" checked /> Miitopia (Switch)
        </label>
        <label for="miitopia3ds" class="o-button o-button--checkbox">
          <input type="checkbox" id="miitopia3ds" checked /> Miitopia (3DS)
        </label>
        <label for="misc" class="o-button o-button--checkbox">
          <input type="checkbox" id="misc" checked /> Miscellaneous
        </label>
      </div>
      <div class="o-thumbnail-list">
        {thumbnails}
      </div>
    </div>
    <button class="o-top-btn" id="backToTopBtn">
      Back to Top
    </button>
  </div>
  <div class="o-lightbox u-hidden">
    <div class="o-lightbox__other">
      <button class="o-lightbox-info" id="lightboxInfo">
        <img src="../../../graphics/misc/miiverse/info.svg" alt="Information about the image" />
        <div class="o-lightbox-info-box u-hidden">
          {lightbox_info}
        </div>
      </button>
      <button class="o-lightbox-close" id="lightboxClose">
        <img src="../../../graphics/misc/miiverse/close.svg" alt="Close the lightbox" />
      </button>
      <!-- this contains all info -->
    </div>
    <div class="o-lightbox__spacing">
      <div class="o-lightbox__content">
        <button class="o-lightbox-nav o-lightbox-nav--prev o-lightbox-nav--pc">
          <img src="../../../graphics/misc/miiverse/left.svg" alt="Previous image" />
        </button>
        <!-- all gallery pictures, hidden by default except for current one -->
        <div class="o-picture-container">
          {pictures}
        </div>
        <button class="o-lightbox-nav o-lightbox-nav--next o-lightbox-nav--pc">
          <img src="../../../graphics/misc/miiverse/right.svg" alt="Next image" />
        </button>
        <div class="o-lightbox-nav-container--mobile">
          <button class="o-lightbox-nav o-lightbox-nav--prev o-lightbox-nav--mobile">
            <img src="../../../graphics/misc/miiverse/left.svg" alt="Previous image" />
          </button>
          <button class="o-lightbox-nav o-lightbox-nav--next o-lightbox-nav--mobile">
            <img src="../../../graphics/misc/miiverse/right.svg" alt="Next image" />
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="o-warning-popup u-hidden">
    <div class="o-warning-popup__content u-hidden">
      <div class="o-warning-popup__text">
        A moment of your time, dear site visitor?
      </div>
      <div class="o-warning-popup__buttons">
        <button class="o-button o-button--popup" id="nextButton">Okay</button>
      </div>
    </div>
    <div class="o-warning-popup__content u-hidden">
      <div class="o-warning-popup__text">
        <p>
          This site contains music and animations.
        </p>
        <p>
          Do you want to enable them?
        </p>
      </div>
      <div class="o-warning-popup__buttons">
        <button class="o-button o-button--popup" id="yesButton">Sure!</button>
        <button class="o-button o-button--popup" id="noButton">Nah...</button>
      </div>
    </div>
  </div>
  <footer class="o-footer">
    <p>
      Page last updated {date}.
    </p>
    <p>
      This website is a personal project made for fun and is not affiliated with Nintendo!
    </p>
  </footer>
  <audio loop id="js-bgm">
    <source src="https://file.garden/akJr1M5SUwY64beP/TLLD%20-%20Mii%20Maker.mp3" type="audio/mpeg">
    <span>Your browser does not support the audio element.</span>
  </audio>
  <script src="../misc/scripts/miiverse-lightbox.js"></script>
  <script src="../misc/scripts/miiverse-gallery-filter.js"></script>
  <script src="../misc/scripts/miiverse-top-button.js"></script>
  <script src="../misc/scripts/miiverse-anim-toggle.js"></script>
  <script src="../misc/scripts/miiverse-music-toggle.js"></script>
  <script src="../misc/scripts/miiverse-warning-popup.js"></script>
</body>
</html>
"""

personality_template = """
        <div class="o-mii-personality o-mii-personality--{slug}">
          <p class="o-mii-personality__name">
            {name}
          </p>
          <p class="o-mii-personality__desc">
            {description}
          </p>
        </div>
"""

quirk_template = """
      <div class="o-mii-quirk">
        <div class="o-mii-quirk__icon-container">
          <img src="../../../graphics/misc/miiverse/icon-{category}.png" alt="{alt} Icon" class="o-mii-quirk__icon">
        </div>
        <span class="o-mii-quirk__text">
          {name}
        </span>
      </div>
"""

# 0 - label
# 1 - info

detail_template = """ 
        <div class="o-mii-details__item">
          <p class="o-mii-details__label">
            {label}
          </p>
          <p class="o-mii-details__info">
            {info}
          </p>
        </div>
"""

trivia_item_template = """
            <li>
              {content}
            </li>
"""

thumbnail_template = """
        <div class="o-thumbnail-container">
          <img data-game="{category}" class="o-thumbnail" src="../../../graphics/misc/miiverse/gallery/{filename}" alt="{alt}" />
        </div>
"""

lightbox_info_template = """
          <p class="o-lightbox-info-box__content u-hidden">
            {info}
          </p>
"""

picture_template = """
          <img class="o-picture u-hidden" src="../../../graphics/misc/miiverse/gallery/{filename}" alt="{alt}" />
"""