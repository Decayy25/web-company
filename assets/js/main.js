// navbar
function toggle_menu() {
    document.getElementById('mobile-menu').classList.toggle('hidden');
}

// about
const aboutLeft = document.getElementById('about-left');

const members = [
  {
    title: "Kurikulum",
    desc: "Kurikulum yang digunakan saat ini",
    img: "assets/img/profile.png",
    href: "pages/kurikulum.html"
  },
  {
    title: "Jurusan",
    desc: "Jurusan yang tersedia saat ini.",
    img: "assets/img/profile.png",
    href: "pages/jurusan.html"
  },
  {
    title: "Jadwal Pelajaran",
    desc: "",
    img: "assets/img/profile.png",
    href: ""
  },
];

if (aboutLeft) {
  aboutLeft.innerHTML = members.map(member => `
    <a href="${member.href}" class="block">
      <div class="about-box p-4 text-center hover:scale-105 transition">
        <div class="w-32 h-32 rounded-full overflow-hidden border-4 border-[#020617] mx-auto mb-4">
          <img src="${member.img}" class="w-full h-full object-cover">
        </div>

        <h3 class="text-lg font-semibold">${member.title}</h3>
        <p class="text-sm text-slate-300 mt-2">${member.desc}</p>
      </div>
    </a>
  `).join('');
}
