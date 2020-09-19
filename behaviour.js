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

// ubah gambar secara random
document.querySelector( "#player1" ).setAttribute( "src", images_kiri[nilai_p1] )
document.querySelector( "#player2" ).setAttribute( "src", images_kanan[nilai_p2] )

let p1_batu = ( nilai_p1 == 0 )
let p1_gunting = ( nilai_p1 == 1 )
let p1_kertas = ( nilai_p1 == 2 )

let p2_batu = ( nilai_p2 == 0 )
let p2_gunting = ( nilai_p2 == 1 )
let p2_kertas = ( nilai_p2 == 2 )


if ( ( p1_batu && p2_batu ) || ( p1_kertas && p2_kertas ) || ( p1_gunting && p2_gunting ) ) {
  seri()
} else if ( ( p1_batu && p2_gunting ) || ( p1_gunting && p2_kertas ) || ( p1_kertas && p2_batu ) ){
  p1_menang()
} else if ( ( p1_batu && p2_kertas ) || ( p1_gunting && p2_batu ) || ( p1_kertas && p2_gunting ) ){
  p2_menang()
}

function p1_menang(){
  let elemen_pesan_p1 = document.querySelector("#pesan_p1")
  let elemen_pesan_p2 = document.querySelector("#pesan_p2")
  elemen_pesan_p1.innerHTML = 'Kamu menang !'
  elemen_pesan_p2.innerHTML = 'Kamu kalah'
  clear(elemen_pesan_p1)
  clear(elemen_pesan_p2)
  elemen_pesan_p1.classList.add("menang")
  elemen_pesan_p2.classList.add("kalah")
}
function p2_menang(){
  let elemen_pesan_p1 = document.querySelector("#pesan_p1")
  let elemen_pesan_p2 = document.querySelector("#pesan_p2")
  document.querySelector("#pesan_p1").innerHTML = 'Kamu kalah'
  document.querySelector("#pesan_p2").innerHTML = 'Kamu menang !'
  clear(elemen_pesan_p1)
  clear(elemen_pesan_p2)
  elemen_pesan_p1.classList.add("kalah")
  elemen_pesan_p2.classList.add("menang")
}
function seri(){
  let elemen_pesan_p1 = document.querySelector("#pesan_p1")
  let elemen_pesan_p2 = document.querySelector("#pesan_p2")
  document.querySelector("#pesan_p1").innerHTML = 'Game seri'
  document.querySelector("#pesan_p2").innerHTML = 'Game seri'
  clear(elemen_pesan_p1)
  clear(elemen_pesan_p2)
  elemen_pesan_p1.classList.add("seri")
  elemen_pesan_p2.classList.add("seri")
}
function clear(element){
  element.classList.remove(".menang")
  element.classList.remove(".kalah")
  element.classList.remove(".seri")
}



