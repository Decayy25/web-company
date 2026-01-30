// navbar
function toggle_menu() {
    document.getElementById('mobile-menu').classList.toggle('hidden');
}

// Informasi
const aboutLeft = document.getElementById('about-left');

const members = [
  {
    title: "Ekstrakurikuler",
    img: "assets/img/profile.png",
    target: "",
    href: "pages/Eskul.html",
    aos: "fade-down-right",
    rotate: "-9deg"
  },
  {
    title: "Informasi Jurusan",
    img: "assets/img/profile.png",
    target: "_blank",
    href: "pages/jurusan.pdf",
    aos: "fade-down-left",
    rotate: "9deg"
  },
  {
    title: "Jadwal Pelajaran",
    img: "assets/img/profile.png",
    target: "_blank",
    href: "pages/jadwal.pdf",
    aos: "fade-up-right",
    rotate: "-9deg"
  },
  {
    title: "Brosur PPDB 2024",
    img: "assets/img/profile.png",
    target: "_blank",
    href: "pages/brosur.pdf",
    aos: "fade-up-left",
    rotate: "9deg"
  },
];

if (aboutLeft) {
  aboutLeft.innerHTML = members.map(member => `
    <a href="${member.href}" class="block" target="${member.target}" data-aos="${member.aos}">
      <div class="about-box p-4 text-center hover:scale-105 transition-transform 
      duration-300 hover:rotate-[${member.rotate}] w-48 mx-auto">
        <div class="max-w-32 max-h-32 rounded-full overflow-hidden border-4 border-[#51a2ff] mx-auto mb-4">
          <img src="${member.img}" class="w-full h-full object-cover">
        </div>
        <h3 class="text-lg font-semibold">${member.title}</h3>
      </div>
    </a>
  `).join('');
}

// AOS refresh on scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', () => {
    setTimeout(() => {
      AOS.refresh();
    }, 300);
  });
});

// Ekstrakurikuler
const info_eskul = document.getElementById('info-eskul');

const eskul_list = [
  {eks: 'Osis', img: '../assets/img/Ekstrakurikuler/osis.jpg', href: 'https://www.instagram.com/osissmartpresent_/'},
  {eks: 'Irma', img: '../assets/img/Ekstrakurikuler/irma.jpg', href: 'https://www.instagram.com/irmasmartclk_/'},
  {eks: 'Paskibra', img: '../assets/img/Ekstrakurikuler/paskibra.jpg', href: 'https://www.instagram.com/pasustaka/'},
  {eks: 'Lingkung Seni', img: '../assets/img/Ekstrakurikuler/lingkung_seni.jpg', href: 'https://www.instagram.com/_seniituasik/'},
  {eks: 'Futsal', img: '../assets/img/Ekstrakurikuler/futsal.jpg', href: 'https://www.instagram.com/smart_futsal/'},
  {eks: 'Basket', img: '../assets/img/Ekstrakurikuler/basket.jpg', href: 'https://www.instagram.com/basketsmart_/'},
  {eks: 'Pramuka', img: '../assets/img/Ekstrakurikuler/pramuka.jpg', href: 'https://www.instagram.com/pramukasmartpresent_/'},
  {eks: 'PMR', img: '../assets/img/Ekstrakurikuler/pmr.jpg', href: 'https://www.instagram.com/pmrsmart__/'},
  {eks: 'Badbinton', img: '../assets/img/Ekstrakurikuler/badbinton.jpg', href: 'https://www.instagram.com/shutlemater_/'},
  {eks: 'Voli', img: '../assets/img/Ekstrakurikuler/voli.jpg', href: 'https://www.instagram.com/_smart_vollyball/'},
  {eks: 'Pik-r', img: '../assets/img/Ekstrakurikuler/pik-r.jpg', href: 'https://www.instagram.com/pikr.smrt/'},
  {eks: 'MAPA', img: '../assets/img/Ekstrakurikuler/mapa.jpg', href: 'https://www.instagram.com/rohis.smartclk/'},
  {eks: 'Karate', img: '../assets/img/Ekstrakurikuler/karate.jpg', href: 'https://www.instagram.com/bkc_smart/'},
];

// tempalte literal
if (info_eskul) {
  info_eskul.innerHTML = eskul_list.map(eks_list=>
  `
  <a href="${eks_list.href}" target="_blank" class="block" data-aos="fade-up" data-aos-delay="8000">
    <div class="eskul-box bg-[#1a1b26] p-6 text-center rounded-lg hover:scale-105">
      <img src="${eks_list.img}" alt="${eks_list.eks}" class="w-full h-40 object-cover rounded-full mb-4">
      <h2 class="text-lg font-semibold">${eks_list.eks}</h2>
    </div>
  </a>
  `
  ).join("");
}

// contact form
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Terima kasih telah menghubungi kami! Pesan Anda telah diterima.');
    contactForm.reset();
  });
}

// Profil Guru
const info_guru = document.getElementById('info-guru');

const guru_list = [
  {nama: 'Budi Santoso', img: '../assets/img/Guru/budi_santoso.jpg', mapel: 'Matematika'},
  {nama: 'Siti Aminah', img: '../assets/img/Guru/siti_aminah.jpg', mapel: 'Bahasa Indonesia'},
  {nama: 'Andi Wijaya', img: '../assets/img/Guru/andi_wijaya.jpg', mapel: 'Fisika'},
  {nama: 'Dewi Lestari', img: '../assets/img/Guru/dewi_lestari.jpg', mapel: 'Bahasa Inggris'},
  {nama: 'Rina Kurnia', img: '../assets/img/Guru/rina_kurnia.jpg', mapel: 'Kimia'},
  {nama: 'Agus Pratama', img: '../assets/img/Guru/agus_pratama.jpg', mapel: 'Biologi'},
];

if (info_guru) {
  info_guru.innerHTML = guru_list.map(guru=>
  `
  <div class="block" data-aos="fade-up" data-aos-delay="8000">
    <div class="guru-box bg-[#1a1b26] p-6 text-center rounded-lg hover:scale-105">
      <img src="${guru.img}" alt="${guru.nama}" class="w-full h-40 object-cover rounded-full mb-4">
      <h2 class="text-lg font-semibold text-white">${guru.nama}</h2>
      <p class="text-white">${guru.mapel}</p>
    </div>
  </div>
  `
  ).join("");
}