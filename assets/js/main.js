// navbar
function toggle_menu() {
    document.getElementById('mobile-menu').classList.toggle('hidden');
}

// about
const aboutLeft = document.getElementById('about-left');

const members = [
  {
    title: "Visi Misi & Tujuan",
    desc: "visi-misi yang digunakan saat ini.",
    img: "assets/img/profile.png",
    href: "pages/visi-misi.html",
    aos: "fade-down-right"
  },
  {
    title: "Informasi Jurusan",
    desc: "Jurusan yang tersedia saat ini.",
    img: "assets/img/profile.png",
    href: "pages/jurusan.pdf",
    aos: "fade-down-left"
  },
  {
    title: "Jadwal Pelajaran",
    desc: "Jadwal yang digunakan saat ini.",
    img: "assets/img/profile.png",
    href: "pages/jadwal.pdf",
    aos: "fade-up-right"
  },
  {
    title: "Brosur PPDB 2024",
    desc: "Download Brosur",
    img: "assets/img/profile.png",
    href: "pages/brosur.pdf",
    aos: "fade-up-left"
  }
];

if (aboutLeft) {
  aboutLeft.innerHTML = members.map(member => `
    <a href="${member.href}" class="block" target="_blank" data-aos="${member.aos}">
      <div class="about-box p-4 text-center hover:scale-105 transition">
        <div class="w-32 h-32 rounded-full overflow-hidden border-4 border-[#020617] hover:border-[#51a2ff] mx-auto mb-4">
          <img src="${member.img}" class="w-full h-full object-cover">
        </div>

        <h3 class="text-lg font-semibold">${member.title}</h3>
        <p class="text-sm text-slate-300 mt-2">${member.desc}</p>
      </div>
    </a>
  `).join('');
}
