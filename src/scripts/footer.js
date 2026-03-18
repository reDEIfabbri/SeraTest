document.addEventListener("DOMContentLoaded", function () {
    const footerContainer = document.getElementById("footer-placeholder");
    if (footerContainer) {
        footerContainer.innerHTML = `
        <div class="footing">
            <footer id="left">
                Kapcsolat
                <ul>
                    <li>7621 Pécs, Ferencesek utcája 35.</li>
                    <li>+36 70 450 2889</li>
                    <a href="mailto:seraphicum.collegium@ferencesek.hu" target="_blank">
                        <li>seraphicum.collegium@ferencesek.hu</li>
                    </a>
                </ul>
            </footer>
            <footer id="right">
                <h1>A Collegium Seraphicum támogatói:</h1>
                <img alt="a kollégium támogatóinak logói" src="/src/pictures/honlap_kepek/tamogatok.png">
            </footer>
        </div>
        `;
    }
});