class SearchBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    /* tambahin setter karna ada <button> yg harus punya event pas ditekan,
    utk netapin fungsi event biar mudah diterapin dari luar class SearchBar
    */
    set clickEvent(event) {
       this._clickEvent = event;
       this.render();
    }

    /* di main.js dimanfaain value dari element <input> buat ngdapetin
        kata kunci pencarian club. biar mudah dapetinnya yg ada di search bar, dibuat
        fungsi getter yg ngembaliin nilai value dari elemen <input> itu
        */
    get value() {
        return this.querySelector("#searchElement").value;
    }

    render() {
        this.innerHTML = `
        <div id="search-container" class="search-container">
        <input placeholder="Search football club" id="searchElement" type="search">
        <button id="searchButtonElement" type="submit">Search</button>
        </div>
        `;

        this.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);

