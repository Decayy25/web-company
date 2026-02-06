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
  {nama: 'Lina Marlina', img: '../assets/img/Guru/lina_marlina.jpg', mapel: 'Sejarah'},
  {nama: 'Hendra Gunawan', img: '../assets/img/Guru/hendra_gunawan.jpg', mapel: 'Geografi'},
  {nama: 'Maya Sari', img: '../assets/img/Guru/maya_sari.jpg', mapel: 'Seni Budaya'},
  {nama: 'Rudi Hartono', img: '../assets/img/Guru/rudi_hartono.jpg', mapel: 'Pendidikan Jasmani'},
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

// bantruan akademik
const info_bntn_akademik = document.getElementById('info-bntn-akademik');

const bntn_akademik_list = [
  {title: 'Ujian Sertifikasi MTCNA Gratis', desc: 'Khusus bagi semua siswa di jurusan TKJ/IT, sekolah memfasilitasi ujian sertifikasi internasional MTCNA tanpa biaya tambahan (Free of Charge)'},
  {title: 'Tes Kemampuan Akademik', desc: 'Sekolah menyedian tes kemampuan akademik secara berkala untuk siswa yang ingin masuk perguruan tinggi favorit mereka.'},
  {title: 'Bimbingan Konseling', desc: 'Sekolah Menyediakan layanan bagi semua orang di sekolah termasuk para guru dan staf yang ingin bercerita tentang masalah pada kehidupanya'}
];


if(info_bntn_akademik) {
  info_bntn_akademik.innerHTML = bntn_akademik_list.map(bntn_akademik=>`
    <div class="p-4 bg-[#1a1b26] rounded-2xl border-5 border-[#51a2ff]" data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">
      <h3 class="text-white font-semibold">${bntn_akademik.title}</h3>
      <br>
      <p>
        ${bntn_akademik.desc}
      </p>
    </div>
  `).join("");
} 

// Tata tertib sekolah pada lab komputer
const lab_komputer = document.getElementById('lab-komputer');

const lab_komputer_list = [
  { tata: "Jam Operasional", paragraf : 'Dimulai dari jam 07.00 - 16.30 WIB di hari Senin - Jumat, Bila ada  Penggunaan diluar jam tersebut harap  koordinasi dengan Laboran dan Wakasek Sarana & Prasarana.'},
  { tata: "Merapihkan Meja", paragraf : 'Pengguna laboraturium wajib merapihkan kembali meja, kursi, mouse, keyboard, ataupun perangkat praktikum lainnya setiap selesai praktikum atau menggunakan laboraturium komputer.'},
  { tata: "Menjaga Kebersihan", paragraf : 'Pengguna laboraturium komputer wajib turut serta menjaga kebersihan laboraturium komputer.'},
  { tata: "Mematikan Alat/Perangkat", paragraf: 'Setelah selesai praktikum, pengguna mematikan lampu, proyektor dan komputer sesuai dengan prosedur.'}
];

// Buat grid 4x4 untuk tata tertib lab komputer
const totalGrid = 4;
const tataGrid = [];
for (let i = 0; i < totalGrid; i++) {
  if (lab_komputer_list[i]) {
    tataGrid.push(`
      <div class="p-4 bg-[#1a1b26] rounded-xl border-t-1 border-[#51a2ff] flex flex-col justify-center items-center min-h-[120px] transition-all duration-1000 hover:border-1 cursor-pointer group" data-aos="fade-up" data-aos-duration="800" data-tata-index="${i}">
        <h3 class="text-white font-semibold text-center select-none">${lab_komputer_list[i].tata}</h3>
        <div class="tata-paragraf hidden w-full">
          <p class="text-white mt-2 text-center text-sm">${lab_komputer_list[i].paragraf}</p>
        </div>
      </div>
    `);
  } else {
    tataGrid.push(`
      <div class="p-4 bg-transparent rounded-xl border border-dashed border-[#51a2ff] min-h-[120px] opacity-30"></div>
    `);
  }
}
lab_komputer.innerHTML = `
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
    ${tataGrid.join('')}
  </div>
`;

// Accordion click event for tata tertib (hanya satu terbuka)
document.querySelectorAll('[data-tata-index]').forEach(div => {
  div.addEventListener('click', function() {
    document.querySelectorAll('.tata-paragraf').forEach(p => p.classList.add('hidden'));
    const paragraf = this.querySelector('.tata-paragraf');
    if (paragraf) {
      paragraf.classList.remove('hidden');
    }
  });
});

// Template Literal (tidak diperkenankan)
const not_allowed = document.getElementById('not-allowed');

const not_allowed_list = [
  { id: 1, rule: 'MENG-INSTALL APLIKASI', desc: 'Tanpa seizin laboran atau guru'},
  { id: 2, rule: 'MEMINDAHKAN ALAT PRAKTIKUM', desc: '(misalnya: keyboard, mouse, layar monitor, dll)'},
  { id: 3, rule: 'MENGUBAH TATA LETAK', desc: 'Tata letak/Layout perangkat yang ada di laboraturium komputer'},
  { id: 4, rule: 'MEMBUAT KEGADUHAN', desc: 'Karena mengganggu kenyamanan pengguna laboraturium lain'},
  { id: 5, rule: 'TIDAK DIPERBOLEHKAN', desc: 'Laboraturium komputer tidak diperbolehkan untuk dipakai kegiatan diluar kegiatan akademik'},
  { id: 6, rule: 'MEMBAWA MAKANAN ATAU MINUMAN', desc: 'Ke dalam laboraturium komputer'},
  { id: 7, rule: 'MERUSAK ATAUPUN MENGHILANGKAN ALAT', desc: 'Alat - alat praktikum di laboraturium komputer'},
  { id: 8, rule: 'MEMUTAR MUSIK DENGAN KENCANG', desc: 'Silahkan menggunakan headset/earphone'},
  { id: 9, rule: 'MENONTON FILM DAN BERMAIN GAME', desc: 'Kecuali untuk pembelajaran diperbolehkan'}
];

// Tampilkan not_allowed_list dalam bentuk tabel clean 2 kolom seperti contoh
let notAllowedTable = '<div class="shadow-lg rounded-lg overflow-x-auto"><table class="min-w-full justify-center">';
notAllowedTable += '<tbody>';
for (let i = 0; i < not_allowed_list.length; i++) {
  const item = not_allowed_list[i];
  notAllowedTable += `
    <tr>
      <td class="py-2 px-4 text-white font-semibold w-1/3 align-top hex-text">${item.rule}</td>
      <td class="py-2 px-4 text-white w-2/3 align-top hex-text">${item.desc}</td>
    </tr>
  `;
}
notAllowedTable += '</tbody></table></div>';
not_allowed.innerHTML = notAllowedTable;