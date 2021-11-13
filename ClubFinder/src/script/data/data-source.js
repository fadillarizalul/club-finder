// function DataSource(onSuccess, onFailed) {
//     this.onSuccess = onSuccess;
//     this.onFailed = onFailed;
// }
  
  
// DataSource.prototype.searchClub = function (keyword) {
//     // const filteredClubs = clubs.filter(function (club) {
//     //     return club.name.toUpperCase().includes(keyword.toUpperCase());
//     // });
//     const filteredClubs = clubs.filter(club => club.name.toUpperCase().includes(keyword.toUpperCase()));
  
  
//     if (filteredClubs.length) {
//         this.onSuccess(filteredClubs);
//     } else {
//         this.onFailed(`${keyword} is not found`);
//     }
// };

import clubs from "./clubs.js";

class DataSource {
    // Sama seperti function constructor DataSource
    // Callback itu yg onSuccess sama onFailed
    // Buat ganti ke promise, hapus blok contructor
    // constructor(onSuccess, onFailed) {
    //     this.onSuccess = onSuccess;
    //     this.onFailed = onFailed;
    // }

    // Sama seperti DataSource.prototype.searchClub
    /* Tambahin kata static depan searchClub
        biar method dlm class dapat diakses tanpa membuat instance dulu*/
    static searchClub(keyword) { //searchClub ini method
        return new Promise((resolve, reject) => {
            const filteredClubs = clubs.filter(club => club.name.toUpperCase().includes(keyword.toUpperCase()));

            if (filteredClubs.length) {
                resolve(filteredClubs);
            } else {
                reject(`${keyword} is not found`);
            }
        });
    }


}

export default DataSource;

// TENTANG CALLBACK
// const getCake = () => { //di callback nanti tanda () ganti callback
//     let cake = null;
//     console.log("Sedang membuat kue, silakan tunggu ....")
//     setTimeout(() => { //di callback nanti abis kurung 1 ada kata function
//       cake = "Kue Selesai!"
//     }, 3000)
//     return cake; //di callback ini ngga perlu ada
//    }
    
//    const cake = getCake();
//    console.log(cake);

//    //di callback ngga lagi pake yg atas ini tapi pake:
//    //getCake(cake => { /bisa juga ganti cake&=> dg function(cake)
//        //console.log(cake)
//    //})
    
//    /*output:
//    Sedang membuat kue, silakan tunggu ....
//    null
//    */

// PROMISE BERANTAI
// function reserveACoffee(type, miligrams) {
//     getSeeds(type, miligrams) //ada fungsi sendiri
//     .then(makeCoffee) //ada fungsi sendiri
//     .then(servingToTable) //ada fungsi sendiri
//     .then(resolvedValue => {
//       console.log(resolvedValue);
//     })
//     .catch(rejectedReason => {
//       console.log(rejectedReason);
//     })
//    }

//PROMISE BERANTAI dengan ASYNC/AWAIT
// async function reserveACoffee(type, miligrams) {
//     try {
//       const seeds = await getSeeds(type, miligrams);
//       const coffee = await makeCoffee(seeds);
//       const result = await servingToTable(coffee);
//       console.log(result);
//     } catch(rejectionReason) {
//       console.log(rejectionReason);
//     }
//    }
    
//    reserveACoffee("liberica", 80);
    
///* output:
//Pesanan kopi sudah selesai!
//*/
    

// //disini state kondisi
// const state = {
//     isCoffeeMakerReady: true,
//     seedStocks: {
//       arabica: 250,
//       robusta: 60,
//       liberica: 80
//     }
// }

// //fungsi getSeeds
// const getSeeds = (type, miligrams) => {
//     return new Promise((resolve, reject) => {
//       if(state.seedStocks[type] >= miligrams) {
//         state.seedStocks[type] -= miligrams;
//         resolve("Biji kopi didapatkan!")
//       } else {
//         reject("Maaf stock kopi habis!")
//       }
//     });
//    }

// //fungsi makeCoffee
// const makeCoffee = seeds => {
//     return new Promise((resolve, reject) => {
//       if(state.isCoffeeMakerReady) {
//         resolve("Kopi berhasil dibuat!")
//       } else {
//         reject("Maaf mesin tidak dapat digunakan!");
//       }
//     })
//    }

// //fungsi servingToTable
// const servingToTable = coffee => {
//     return new Promise(resolve => {
//       resolve("Pesanan kopi sudah selesai!")
//     })
// }

// // terakhir memproses output
// /* Silakan ubah tipe kopi dan kuantitasnya, untuk mendapatkan promise rejection*/
// reserveACoffee("liberica", 80);
