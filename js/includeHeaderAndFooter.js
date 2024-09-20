class SpecialHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="special-header">
        <div class="navigation">
          <div class="alignment">
            <a href="#"><img class="logo" src="img/logo.png" alt="PANALOBET Logo" title="PANALOBET Logo"></a>
          </div>
          <div class="alignment navigationlinks">
            <nav>
              <ul class="nav-menu topnav">
                <li><a href="index.html">HOME</a></li>
                <li><a href="signup-and-signin.html">SIGN UP & LOGIN</a></li>
                <li><a href="deposit.html">DEPOSIT</a></li>
                <li class="nav-dropdown"><a href="sp-live.html">SP LIVE<span class="description pl10">⌄</span></a>
                  <ul class="nav-dropdown-content">
                    <li><a href="baccarat.html">LIVE BACCARAT</a></li>
                    <li><a href="roulette.html">LIVE ROULETTE</a></li>
                    <li><a href="poker.html">LIVE POKER</a></li>
                    <li><a href="sic-bo.html">LIVE SIC BO</a></li>
                    <li><a href="monopoly.html">LIVE MONOPOLY</a></li>
                  </ul>
                </li>
                <li class="nav-dropdown"><a href="slot.html">SLOT<span class="description pl10">⌄</span></a>
                  <ul class="nav-dropdown-content">
                    <li><a href="fc-slot.html">FC SLOT</a></li>
                    <li><a href="jdb-slot.html">JDB SLOT</a></li>
                    <li><a href="jili-slot.html">JILI SLOT</a></li>
                    <li><a href="ka-slot.html">KA SLOT</a></li>
                    <li><a href="pg-slot.html">PG SLOT</a></li>
                    <li><a href="mg-slot.html">MG SLOT</a></li>
                  </ul>
                </li>
                <li><a href="sp-app.html">SP APP</a></li>
                <li><a href="promotion.html">PROMOTION</a></li>
              </ul>
            </nav>
          </div>        
          <div class="alignment">
            <a class="ctaButton" href="#" target="_blank"><span class="ctaButtonMes">Login</span></a>
            <a class="ctaButton2" href="#" target="_blank"><span class="ctaButtonMes">Signup</span></a>
          </div>
          <div id="nav-icon"><span></span><span></span><span></span></div>
        </div>
      </header>
    `;
    this.initHamburgerMenu();
    this.setActiveLink();
    this.handleScroll();
    this.initDropdownToggle();
  }

  initHamburgerMenu() {
    const navIcon = this.querySelector('#nav-icon');
    const topNav = this.querySelector('.topnav');
    const navigationLinks = this.querySelector('.navigationlinks');
    
    navIcon.addEventListener('click', function() {
      navIcon.classList.toggle('active');
      topNav.classList.toggle('active');
      navigationLinks.classList.toggle('active');
      document.body.classList.toggle('scroll_fix');
    });
  }

  
  initDropdownToggle() {
    const dropdownLinks = this.querySelectorAll('.nav-dropdown > a'); // Target all dropdown links
  
    dropdownLinks.forEach(dropdownLink => {
      const dropdownContent = dropdownLink.nextElementSibling; // Get the sibling dropdown content
      let isDropdownOpen = false; // Track if the dropdown is open
  
      // Add click event listener for each dropdown link
      dropdownLink.addEventListener('click', (e) => {
        if (!isDropdownOpen) {
          e.preventDefault(); // Prevent navigation on first click
          dropdownContent.classList.toggle('show'); // Toggle dropdown visibility
          isDropdownOpen = true; // Mark dropdown as open
        } else {
          // Allow navigation on the second click
          isDropdownOpen = false; // Reset the dropdown state after the second click
        }
  
        // Optionally close other open dropdowns if you only want one to be open at a time
        dropdownLinks.forEach(otherLink => {
          if (otherLink !== dropdownLink) {
            otherLink.nextElementSibling.classList.remove('show');
            // Reset the state for other dropdowns
            otherLink.dataset.dropdownOpen = "false";
          }
        });
      });
    });
  
    // Optionally close dropdown if clicked outside
    document.addEventListener('click', (e) => {
      dropdownLinks.forEach(dropdownLink => {
        const dropdownContent = dropdownLink.nextElementSibling;
        if (!dropdownLink.contains(e.target) && !dropdownContent.contains(e.target)) {
          dropdownContent.classList.remove('show');
          dropdownLink.dataset.dropdownOpen = "false"; // Reset state
        }
      });
    });
  }
  
  // // Add this method to handle dropdown menu toggle on click
  // initDropdownToggle() {
  //   const dropdownLink = document.querySelector('.dropdown > a');
  //   const dropdownContent = dropdownLink.nextElementSibling;

  //   dropdownLink.addEventListener('click', (e) => {
  //     e.preventDefault(); // Prevent the default navigation
  //     dropdownContent.classList.toggle('show'); // Toggle dropdown visibility on click
  //   });

  //   // Optionally close dropdown if clicked outside
  //   document.addEventListener('click', (e) => {
  //     if (!dropdownLink.contains(e.target) && !dropdownContent.contains(e.target)) {
  //       dropdownContent.classList.remove('show');
  //     }
  //   });
  // }

  setActiveLink() {
    const currentPath = window.location.pathname.split('/').pop();
    const links = this.querySelectorAll('.topnav li a');
    links.forEach(link => {
      if (link.getAttribute('href') === currentPath) {
        link.classList.add('active');
      }
    });
  }

  handleScroll() {
    const scrollheader = document.querySelector('.special-header');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        scrollheader.classList.add('scrolled');
      } else {
        scrollheader.classList.remove('scrolled');
      }
    });
  }
}





class SpecialFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <section class="dualCompartmentStackedLayout"> 
          <div class="flexboxGrid">
            <div class="flexboxGridFooter">
              <div class="footerdescriptions mtb20">
                <div class="compartmentStackedLayout">
                  <p class="footerdescriptions mtb20"><a class="colorQuat" href="index.html" id="home-link">About Us</a></p>
                  <p class="footerdescriptions mtb20 colorReg1">SwertePlus takes pride in understanding the unique preferences and expectations of filipino players of Online Casino.</p>
                </div>              
              </div>
            </div>            
            <div class="flexboxGridFooter">
              <div class="footerdescriptions mtb20">
                <div class="compartmentStackedLayout">
                  <p class="footerdescriptions mtb20"><a class="colorQuat" href="index.html" id="home-link">SwertePlus Casino Guide</a></p>
                  <p class="footerdescriptions mtb20 colorReg1">SwertePlus takes pride in understanding the unique preferences and expectations of filipino players of Online Casino.</p>
                </div>              
              </div>
            </div>         
            <div class="flexboxGridFooter">
              <div class="footerdescriptions mtb20">
                <div class="compartmentStackedLayout">
                  <p class="footerdescriptions mtb20"><a class="colorQuat" href="index.html" id="home-link">Support</a></p>
                  <p class="footerdescriptions mtb20 colorReg1">SwertePlus takes pride in understanding the unique preferences and expectations of filipino players of Online Casino.</p>
                </div>              
              </div>
            </div>        
            <div class="flexboxGridFooter">
              <div class="footerdescriptions mtb20">
                <div class="compartmentStackedLayout">
                  <p class="footerdescriptions mtb20"><a class="colorQuat" href="index.html" id="home-link">Contact Information</a></p>
                  <p class="footerdescriptions mtb20 colorReg1">SwertePlus takes pride in understanding the unique preferences and expectations of filipino players of Online Casino.</p>
                </div>              
              </div>
            </div>
          </div>
          <div class="dualCompartmentAdjustable mtb20 plr10">
            <div class="">
              <a href="#"><img class="logo" src="img/logo.png" alt="PANALOBET Logo" title="PANALOBET Logo"></a>
            </div>
            <div class="dualCompartmentContainerStackedLayoutContents">
              <p class="metadescriptions colorRegShadow">Copyright ©2024 SwertePlus licensed by Philippine Amusement and Gaming Corporation</p>
            </div>  
          </div>

       
        </section>      
      </footer>
    `;
  }
}




customElements.define('special-header', SpecialHeader);
customElements.define('special-footer', SpecialFooter);
