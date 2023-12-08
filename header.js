document.write(`
    <div id="blur"></div>
    <div id="top-bar"></div>
    <div id="menu-closer" onclick="CloseMenu()"></div>
    <div id="menu-button-open" onclick="OpenMenu()">
        <img id="menu-icon" src="Menu.png" width="42" height="42">
    </div>
    <div id="banner">
        <div id="to-home" onclick="window.location.href = 'index.html'">
            <img id="home-button" src="Home.png"></img>
        </div>
        <div id="banner-text">
            <a id="banner-text-inner">Кометы и астероиды</a>
        </div>
        <div id="language">
            <a id="language-current">RUS</a>
            <div id="language-list">
                <div class="language-option">ENG</div>
                <div class="language-option">RUS</div>
            </div>
        </div>
    </div>
    <div id="menu-container">
        <div id="menu">
            <a href="classification.html" id="menu-inner-1">Классификация</a>
            <a href="history.html" id="menu-inner-2">История изучения</a>
            <a href="catalog.html" id="menu-inner-3">Каталог</a>
            <a href="gallery.html" id="menu-inner-4">Галерея</a>
        </div>
    </div>
`)