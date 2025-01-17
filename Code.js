document.addEventListener("DOMContentLoaded", () => {
    const produk = document.querySelectorAll(".gambar_produk img");
    produk.forEach(item => {
        item.addEventListener("click", () => {
        const gambar_produk = document.createElement("div");
        gambar_produk.classList.add("pratinjau_produk");
        gambar_produk.innerHTML = `<button class="tutup" type="button">X</button>
            <img class="layar_penuh" src="${item.src}" title="${item.title}" alt="${item.alt}">`;
        document.body.appendChild(gambar_produk);
        const tombol_close = gambar_produk.querySelector(".tutup");
        tombol_close.addEventListener("click", () => {
            gambar_produk.remove();
            });
        });
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const gambar = document.querySelectorAll(".gambar_galeri img");
    gambar.forEach(item => {
        item.addEventListener("click", () => {
        const gambar = document.createElement("div");
        gambar.classList.add("pratinjau_gambar");
        gambar.innerHTML = `<button class="tutup" type="button">X</button>
            <img class="layar_penuh" src="${item.src}" title="${item.title}" alt="${item.alt}">`;
        document.body.appendChild(gambar);
        const closebutton = document.querySelector(".tutup");
        closebutton.addEventListener("click", () => {
            gambar.remove();
            });
        });
    });
});

function unavailableProduct() {
    window.alert("Maaf, produk ini tidak tersedia...");
   
}
