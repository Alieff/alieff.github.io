let images_kiri = [
  "images/batu-kiri.png",
  "images/gunting-kiri.png",
  "images/kertas-kiri.png",
]
let images_kanan = [
  "images/batu-kanan.png",
  "images/gunting-kanan.png",
  "images/kertas-kanan.png",
]
let nilai_p1 = Math.floor( Math.random() * 3 ) // 0-0.999
let nilai_p2 = Math.floor( Math.random() * 3 ) // 0-0.999

document.querySelector( "#player1" ).setAttribute( "src", images_kiri[nilai_p1] )
document.querySelector( "#player2" ).setAttribute( "src", images_kanan[nilai_p2] )

let p1_batu = ( nilai_p1 == 0 )
let p1_gunting = ( nilai_p1 == 1 )
let p1_kertas = ( nilai_p1 == 2 )

let p2_batu = ( nilai_p2 == 0 )
let p2_gunting = ( nilai_p2 == 1 )
let p2_kertas = ( nilai_p2 == 2 )

if ( p1_batu && p2_batu ) {
  document.querySelector("#pesan_p1").innerHTML = 'game seri'
  document.querySelector("#pesan_p2").innerHTML = 'game seri'
} else if ( p1_batu && p2_gunting ){
  document.querySelector("#pesan_p1").innerHTML = 'kamu menang'
  document.querySelector("#pesan_p2").innerHTML = 'kamu kalah'
} else if ( p1_batu && p2_kertas ){
  document.querySelector("#pesan_p1").innerHTML = 'kamu kalah'
  document.querySelector("#pesan_p2").innerHTML = 'kamu menang'
} else if ( p1_gunting && p2_batu ) {
  document.querySelector("#pesan_p1").innerHTML = 'kamu kalah'
  document.querySelector("#pesan_p2").innerHTML = 'kamu menang'
} else if ( p1_gunting && p2_gunting ){
    document.querySelector("#pesan_p1").innerHTML = 'game seri'
  document.querySelector("#pesan_p2").innerHTML = 'game seri'
} else if ( p1_gunting && p2_kertas ){
  document.querySelector("#pesan_p1").innerHTML = 'kamu menang'
  document.querySelector("#pesan_p2").innerHTML = 'kamu kalah'
} else if ( p1_kertas && p2_batu ) {
  document.querySelector("#pesan_p1").innerHTML = 'kamu menang'
  document.querySelector("#pesan_p2").innerHTML = 'kamu kalah'
} else if ( p1_kertas && p2_gunting ){
  document.querySelector("#pesan_p1").innerHTML = 'kamu kalah'
  document.querySelector("#pesan_p2").innerHTML = 'kamu menang'
} else if ( p1_kertas && p2_kertas ){
  document.querySelector("#pesan_p1").innerHTML = 'game seri'
  document.querySelector("#pesan_p2").innerHTML = 'game seri'
}



