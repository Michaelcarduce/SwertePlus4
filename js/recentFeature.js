class SpecialRecentFeature extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="flexboxGridHorizontal">
        <div class="cardGridRecents hoverTiltAnimations centeredHorizontalLayout popOut boxShadow1 bgColorDark">
          <picture class="img_fit">
            <source media="(min-width: 481px)" srcset="img/liveRecents1.jpg">
            <img src="img/liveRecents1.jpg" alt="PANALOBET" title="PANALOBET" class="img_fit3">
          </picture>
          <h4 class="heading4 colorPri pt20 pb40">Seamless Promotion Management</h4>
        </div>
        <div class="cardGridRecents hoverTiltAnimations centeredHorizontalLayout popOut boxShadow1 bgColorDark">
          <picture class="img_fit">
            <source media="(min-width: 481px)" srcset="img/liveRecents2.jpg">
            <img src="img/liveRecents2.jpg" alt="PANALOBET" title="PANALOBET" class="img_fit3">
          </picture>
          <h4 class="heading4 colorPri pt20 pb40">Seamless Promotion Management</h4>
        </div>
        <div class="cardGridRecents hoverTiltAnimations centeredHorizontalLayout popOut boxShadow1 bgColorDark">
          <picture class="img_fit">
            <source media="(min-width: 481px)" srcset="img/liveRecents3.jpg">
            <img src="img/liveRecents3.jpg" alt="PANALOBET" title="PANALOBET" class="img_fit3">
          </picture>
          <h4 class="heading4 colorPri pt20 pb40">Seamless Promotion Management</h4>
        </div>
        <div class="cardGridRecents hoverTiltAnimations centeredHorizontalLayout popOut boxShadow1 bgColorDark">
          <picture class="img_fit">
            <source media="(min-width: 481px)" srcset="img/liveRecents4.jpg">
            <img src="img/liveRecents4.jpg" alt="PANALOBET" title="PANALOBET" class="img_fit3">
          </picture>
          <h4 class="heading4 colorPri pt20 pb40">Seamless Promotion Management</h4>
        </div>
        <div class="cardGridRecents hoverTiltAnimations centeredHorizontalLayout popOut boxShadow1 bgColorDark">
          <picture class="img_fit">
            <source media="(min-width: 481px)" srcset="img/homebanner17.jpg">
            <img src="img/homebanner17.jpg" alt="PANALOBET" title="PANALOBET" class="img_fit3">
          </picture>
          <h4 class="heading4 colorPri pt20 pb40">Seamless Promotion Management</h4>
        </div>
        <div class="cardGridRecents hoverTiltAnimations centeredHorizontalLayout popOut boxShadow1 bgColorDark">
          <picture class="img_fit">
            <source media="(min-width: 481px)" srcset="img/liveRecents5.jpg">
            <img src="img/liveRecents5.jpg" alt="PANALOBET" title="PANALOBET" class="img_fit3">
          </picture>
          <h4 class="heading4 colorPri pt20 pb40">Seamless Promotion Management</h4>
        </div>
        <div class="cardGridRecents hoverTiltAnimations centeredHorizontalLayout popOut boxShadow1 bgColorDark">
          <picture class="img_fit">
            <source media="(min-width: 481px)" srcset="img/liveRecents6.jpg">
            <img src="img/liveRecents6.jpg" alt="PANALOBET" title="PANALOBET" class="img_fit3">
          </picture>
          <h4 class="heading4 colorPri pt20 pb40">Seamless Promotion Management</h4>
        </div>
        <div class="cardGridRecents hoverTiltAnimations centeredHorizontalLayout popOut boxShadow1 bgColorDark">
          <picture class="img_fit">
            <source media="(min-width: 481px)" srcset="img/liveRecents7.jpg">
            <img src="img/liveRecents7.jpg" alt="PANALOBET" title="PANALOBET" class="img_fit3">
          </picture>
          <h4 class="heading4 colorPri pt20 pb40">Seamless Promotion Management</h4>
        </div>
        <div class="cardGridRecents hoverTiltAnimations centeredHorizontalLayout popOut boxShadow1 bgColorDark">
          <picture class="img_fit">
            <source media="(min-width: 481px)" srcset="img/liveRecents8.jpg">
            <img src="img/liveRecents8.jpg" alt="PANALOBET" title="PANALOBET" class="img_fit3">
          </picture>
          <h4 class="heading4 colorPri pt20 pb40">Seamless Promotion Management</h4>
        </div>
        <div class="cardGridRecents hoverTiltAnimations centeredHorizontalLayout popOut boxShadow1 bgColorDark">
          <picture class="img_fit">
            <source media="(min-width: 481px)" srcset="img/liveRecents9.jpg">
            <img src="img/liveRecents9.jpg" alt="PANALOBET" title="PANALOBET" class="img_fit3">
          </picture>
          <h4 class="heading4 colorPri pt20 pb40">Seamless Promotion Management</h4>
        </div>
        <div class="cardGridRecents hoverTiltAnimations centeredHorizontalLayout popOut boxShadow1 bgColorDark">
          <picture class="img_fit">
            <source media="(min-width: 481px)" srcset="img/liveRecents10.jpg">
            <img src="img/liveRecents10.jpg" alt="PANALOBET" title="PANALOBET" class="img_fit3">
          </picture>
          <h4 class="heading4 colorPri pt20 pb40">Seamless Promotion Management</h4>
        </div>
      </div>
    `;
  }
}

customElements.define('special-recent', SpecialRecentFeature);

