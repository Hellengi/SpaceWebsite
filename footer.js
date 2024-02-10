document.write(`
    <div id="blur-footer"></div>
    <div id="footer-inner">
        <div id="contacts-container">
            <a id="contacts-container-inner">Контакты</a>
            <div id="contacts">
                <img src="Vk.png" onclick="window.open('https://vk.com/hellengi')"><!--onclick="window.open('https://vk.com/hellengi')"-->
                <img src="Telegram.png" onclick="window.open('https://t.me/hellengi'")><!--onclick="window.open('https://t.me/hellengi'")-->
            </div>
        </div>
        <form action="mobile.html" style="margin:0">
            <button id="button-mobile" >Мобильная версия</button>
        </form>
        <div id="rocket-silo">
            <div id="silo">
                <div id="rocket">
                    <img id="rocket-basis" src="Rocket.png" width="80" height="200" draggable="false">
                </div>
            </div>
        </div>
    </div>
`)