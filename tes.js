const iconMon = document.getElementById('icon_bulan')
const hiden = document.getElementById('hiden')
const body = document.querySelector('body')
const ber = document.querySelector('.ber')
const navbar = document.querySelector('.navbar')
const nama = document.getElementById('nama')
const gambarSize = document.querySelector('.gambarSize')
const textButon = document.querySelector('.navText li a')
const profileTag = document.querySelector('.profileTag')
const gatig = document.querySelector('.navBurgers span')
const animImg = document.querySelectorAll('.img2, .gambarSize, .skills div')

window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        navbar.classList.add('scrolled')
    } else {
        navbar.classList.remove('scrolled')
    }
})
const tt = document.getElementById('tt')
const ig = document.getElementById('ig')
const dc = document.getElementById('dc')
const about = document.querySelector('.about')
const bla = document.querySelector('.about h1')
const ble = document.querySelector('.nopal')
const aboutNaufal = document.querySelector('.aboutNaufal')
const myskil = document.querySelector('.skills')
const hobi = document.querySelector('.hobi')
const tk = document.getElementById('tk')
const im = document.getElementById('im')
const dd = document.getElementById('dd')
const footer = document.querySelector('footer')
function gelap() {
    footer.classList.toggle('lap')
    dd.classList.toggle('lap')
    tk.classList.toggle('lap')
    im.classList.toggle('lap')
    hobi.classList.toggle('lap')
    myskil.classList.toggle('lap')
    body.classList.toggle('lap')
    ber.classList.toggle('lap')
    nama.classList.toggle('lap')
    gambarSize.classList.toggle('lap')
    navbar.classList.toggle('lap')
    textButon.classList.toggle('lap')
    profileTag.classList.toggle('lap')
    iconMon.classList.toggle('lap')
    tt.classList.toggle('lap')
    ig.classList.toggle('lap')
    dc.classList.toggle('lap')
    about.classList.toggle('lap')
    bla.classList.toggle('lap')
    ble.classList.toggle('lap')
    aboutNaufal.classList.toggle('lap')
    if (body.classList.contains('lap')) {
      iconMon.classList.remove('fa-moon')
      iconMon.classList.add('fa-sun')
    } else {
      iconMon.classList.remove('fa-sun')
      iconMon.classList.add('fa-moon')
    }
}
VanillaTilt.init(animImg, {
    reverse: true,
    max: 15,
    speed: 100
})
const musik = document.querySelector('.musik')
const lagu = document.querySelector('.lagu')
let on = true
function musik1() {
    if (on == true) {
        musik.play()
        on = false
        lagu.innerText = "Pause"
    } else {
        musik.pause()
        on = true
        lagu.innerText = "Play"
    }
}
musik.addEventListener('ended', function() {
    on = true
    lagu.innerText = "Play"
})
function kirimKeDiscord() {
  const webhookUrl = "https://discord.com/api/webhooks/1525466634108670143/Q5s4WM0SLoWy34UOC9HceKoJ5aIVWi8dkyb0FHDLBJ3oF621MQ3G7GoNL0T6TqRL_DEt";
  const namaUser = document.getElementById("nama_input").value;
  const pesanUser = document.getElementById("masange").value;

  if (namaUser.trim() !== "" && pesanUser.trim() !== "") {
    const isiData = {
      embeds: [
        {
          title: "📥 Ada Pesan Masuk dari Website nopal ganteng!",
          color: 5793266,
          fields: [
            { name: "pengirim:", value: namaUser, inline: true },
            { name: "Isi Pesan:", value: pesanUser }
          ],
          timestamp: new Date().toISOString()
        }
      ]
    };

    fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(isiData)
    })
    .then(() => {
      document.getElementById("nama_input").value = "";
      document.getElementById("masange").value = "";
    })
    .catch((error) => {
      console.error(error);
    });
  }
}