if (!String.prototype.includes) {
  String.prototype.includes = function (search, start) {
    'use strict';
    if (typeof start !== 'number') {
      start = 0;
    }

    if (start + search.length > this.length) {
      return false;
    } else {
      return this.indexOf(search, start) !== -1;
    }
  };
}

function up(X) {
  var up_ = X.getElementsByTagName("svg")
  up_[0].outerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                      <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                      </svg>`
  up_[0].style.color = "#03a9f4"
}

function down(Y) {
  var up_ = Y.getElementsByTagName("svg")
  up_[0].outerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                      <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                      </svg>`
  up_[0].style.color = "#000"
}

function addNavbar() {
  var navbarHtml = `<div class="navbar">
  <div class="navbar_menu">
      <div class="img">
          <a href="https://www.oakchina.cn/">
              <img src="https://www.oakchina.cn/wp-content/uploads/2021/12/cropped-OAKChina-01.png" alt="ArduCam">
          </a>
      </div>
      <div class="menu_list">
          <div class="drop-menu" onmouseover="up(this)" onmouseout="down(this)" id="drop-menu">
              <div class="hover-btn"> <a href="https://www.oakchina.cn/#products">产品
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                      <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                  </svg>
              </a></div>
              <div class="drop-content">
                  <a href="https://www.oakchina.cn/intro/">了解OAK</a>
                  <a href="https://www.oakchina.cn/selection-guide/">选购指南</a>
                  <a href="https://www.oakchina.cn/products/">所有产品</a>
              </div>
          </div>
          <div class="drop-menu" onmouseover="up(this)" onmouseout="down(this)" id="drop-menu">
          <div class="hover-btn"><a class="hover-btn-active" href="https://www.oakchina.cn/#docs" >教程
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
              </svg>
          </a></div>
            <div class="drop-content">
                <a href="https://docs.oakchina.cn/en/latest/">使用教程</a>
                <a href="https://www.oakchina.cn/tech-faq/">问题排错</a>
                <a href="https://www.oakchina.cn/oak-opensource-projects/">开源项目</a>
                <a href="https://www.oakchina.cn/free-ai-model/">免费预训练模型</a>
                <a href="https://www.oakchina.cn/free-courses/">视频教程</a>
            </div>
          </div>
          <div class="drop-menu" onmouseover="up(this)" onmouseout="down(this)" id="drop-menu">
              <div class="hover-btn"><a href="https://www.oakchina.cn/#solutions">解决方案
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                      <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                  </svg>
              </a></div>
              <div class="drop-content">
                  <a href="https://www.oakchina.cn/heavy-industry/">工业智能化</a>
                  <a href="https://www.oakchina.cn/robotic-drones/">机器人无人机</a>
                  <a href="https://www.oakchina.cn/security-surveillance-with-oak/">安防监控</a>
                  <a href="https://www.oakchina.cn/smart-drive/">智能驾驶</a>
                  <a href="https://www.oakchina.cn/medical-health-with-oak/">医疗大健康</a>
                  <a class="drop-code" href="https://www.oakchina.cn/education-with-oak/">编程教育</a>
              </div>
          </div>

          <div class="drop-menu" id="drop-menu">
              <div class="hover-btn"><a href="https://www.oakchina.cn/blog/">博客</a></div>
          </div>

          <div class="drop-menu" id="drop-menu">
              <div class="hover-btn"><a href="https://www.oakchina.cn/shop/">购买</a></div>
          </div>
          <div class="drop-menu" onmouseover="up(this)" onmouseout="down(this)" id="drop-menu">
              <div class="hover-btn"><a>联系我们
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                      <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                  </svg>
              </a></div>
              <div class="drop-content">
                  <a href="https://www.oakchina.cn/about-us/">关于我们</a>
                  <a href="https://www.oakchina.cn/contact-us/">联系方式</a>
                  <a href="https://www.oakchina.cn/usercases/">客户案例</a>
                  <a href="https://www.oakchina.cn/customized/">定制服务</a>
              </div>
          </div>
          <div class="drop-menu" id="drop-menu">
              <div class="hover-btn"><a href="https://www.oakchina.cn/download/">下载中心</a></div>
          </div>
      </div> 
  </div>
</div>
<div id="lux-doc-navbar" class="lux-navbar-container">
    <div class="lux-navbar">
      <ul>
        <li><a href="/en/latest/">Main</a></li>
        <li><a href="/projects/sdk/" class="lux-navbar-active-" >SDK</a></li>
        <li><a href="/projects/api/" >API</a></li>
      </ul>
    </div>
  </div>`
  document.body.insertAdjacentHTML('afterbegin', navbarHtml);
}

function adjustNavbarPosition() {
  var navbar = document.getElementsByClassName("wy-nav-side")[0];
  var offset = 146 - window.pageYOffset;
  if (offset >= 0) {
    navbar.style.top = offset + "px";
  } else {
    navbar.style.top = 0 + "px";
  }
}

window.onscroll = adjustNavbarPosition

document.onreadystatechange = function (e) {
  if (document.readyState === 'interactive') {
    addNavbar()
    adjustNavbarPosition()
    document.getElementsByClassName("wy-side-scroll")[0].scrollTop = 0;
    if (location.pathname.startsWith("/projects")) {
      var links = document.querySelectorAll("#lux-doc-navbar a[href^='/projects']");
      for (var i = 0; i < links.length; i++) {
        if (location.pathname.includes(links[i].pathname)) {
          links[i].classList.add('lux-navbar-active')
        }
      }
    } else {
      var main = document.querySelector("#lux-doc-navbar a:not([href^='/projects'])")
      main.classList.add('lux-navbar-active')
    }
  }
}