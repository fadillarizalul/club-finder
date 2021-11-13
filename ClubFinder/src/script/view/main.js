// const main = function () {
//     const searchElement = document.querySelector("#searchElement");
//     const buttonSearchElement = document.querySelector("#searchButtonElement");
//     const clubListElement = document.querySelector("#clubList");
import '../component/club-list.js';
import '../component/search-bar.js';
import DataSource from "../data/data-source.js";


const main = () => {
    const searchElement = document.querySelector("search-bar"); //dari #searchElement ke search-bar
    //dihapus const buttonSearchElement = document.querySelector("#searchButtonElement");
    const clubListElement = document.querySelector("club-list"); //dari #clubList jadi club-list
  
    // const onButtonSearchClicked = function () {
    //     const dataSource = new DataSource(renderResult, fallbackResult);
    //     dataSource.searchClub(searchElement.value);
    // };
    // const onButtonSearchClicked = () => {
    //     const dataSource = new DataSource(renderResult, fallbackResult);
    //     dataSource.searchClub(searchElement.value);
    // };
    const onButtonSearchClicked = () => {
        DataSource.searchClub(searchElement.value)
            .then(renderResult)
            .catch(fallbackResult)
    };
    //Atau dengan async/await jadinya
    // const onButtonSearchClicked = async () => {
    //     try{
    //         const result = await DataSource.searchClub(searchElement.value);
    //         renderResult(result);
    //     } catch(message) {
    //         fallbackResult(message)
    //     }
    // };
  
  
    // const renderResult = function (results) {
    //     clubListElement.innerHTML = "";
    //     results.forEach(function (club) {
    //         // const name = club.name;
    //         // const fanArt = club.fanArt;
    //         // const description = club.description;
    //         const {name, fanArt, description} = club;
  
  
    //         const clubElement = document.createElement("div");
    //         clubElement.setAttribute("class", "club");
    const renderResult =  results => {
        clubListElement.clubs = results;
        // clubListElement.innerHTML = "";
        // results.forEach(club => {
        //     const {name, fanArt, description} = club;
        //     const clubElement = document.createElement("div");
        //     clubElement.setAttribute("class", "club");
  
  
        //     clubElement.innerHTML = `
        //         <img class="fan-art-club" src="${fanArt}" alt="Fan Art">
        //         <div class="club-info">
        //             <h2>${name}</h2>
        //             <p>${description}</p>
        //         </div>`;
        //     clubListElement.appendChild(clubElement);
        // })
    };
  
  
    // const fallbackResult = function (message) {
    //     clubListElement.innerHTML = "";
    //     clubListElement.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    // };
    const fallbackResult = message => {
           clubListElement.renderError(message);
    //     clubListElement.innerHTML = "";
    //     clubListElement.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    };
  
    //from this to below
    //buttonSearchElement.addEventListener("click", onButtonSearchClicked);
    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;


//SEDIKIT PENJELASAN
// - clubs.filter() : Kode ini untuk memfilter daftar klub-klub yang sudah diimpor pakai clubs .

/* - club => : Setiap klub (array) nantinya akan diperiksa satu persatu dan function ini yang akan menampungnya. 
Jadi, filter() itu bisa dibilang melakukan perulangan, tapi yang tampil hanya yang cocok saja. */

/* - club.name.toUppercase() : Jika Kakak melihat berkas clubs.js, Kakak akan melihat setiap array punya key
bernama name yang isinya nama-nama klub. Nah, nama-nama klub tersebut di ambil lalu diubah semua menjadi 
huruf besar (tapi tidak mengubah permanen, hanya untuk pencocokkan nantinya). */

/* - .includes(keyword.toUppercase()) : Nama-nama klub yang sudah diambil dicocokkan dengan method .includes()
Method itu menggunakan keyword yang sudah diketik pada kotak pencarian. Keyword tersebut juga diubah jadi huruf besar
agar bisa dicocokkan dengan nama-nama klub. Jadi, meskipun pengguna mengetik nama klub di kotak pencarian menggunakan 
huruf kecil semua, tapi klub yang dicari tetap tampil karena ada proses pencocokkan dibaliknya. */
