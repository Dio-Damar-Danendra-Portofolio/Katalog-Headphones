document.addEventListener("DOMContentLoaded", () => {
    const obyek = document.querySelectorAll(".varian img");
    obyek.forEach(item => {
        item.addEventListener("click", () => {
            const image_preview = document.createElement("div");
            image_preview.classList.add("image_preview");
            image_preview.innerHTML = `<button class="tutup" type="button">X</button>
                <img class="layar_penuh" src="${item.src}" alt="${item.alt}">
            `;
            document.body.appendChild(image_preview);
            const tombol_tutup = image_preview.querySelector(".tutup");
            tombol_tutup.addEventListener("click", () => {
                image_preview.remove();
            })
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const kemasan = document.querySelectorAll(".kemasan_produk img");
    kemasan.forEach(item => {
        item.addEventListener("click", () => {
            const pratinjau_kemasan = document.createElement("div");
            pratinjau_kemasan.classList.add("pratinjau_kemasan");
            pratinjau_kemasan.innerHTML = `<button class="tutup" type="button">X</button>
            <img class="layar_penuh" src="${item.src}" title="${item.title}" alt="${item.alt}">`;
            document.body.appendChild(pratinjau_kemasan);
            const close_button = pratinjau_kemasan.querySelector(".tutup");
            close_button.addEventListener("click", () => {
                pratinjau_kemasan.remove();
            });
        });
    });
});

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
    const bagian = document.querySelectorAll(".bagian img");
    bagian.forEach(item => {
        item.addEventListener("click", () => {
        const gambar_bagian = document.createElement("div");
        gambar_bagian.classList.add("gambar_bagian");
        gambar_bagian.innerHTML = `<button class="tutup" type="button">X</button>
            <img class="layar_penuh" src="${item.src}" title="${item.title}" alt="${item.alt}">`;
        document.body.appendChild(gambar_bagian);
        const closebutton = document.querySelector(".tutup");
        closebutton.addEventListener("click", () => {
            gambar_bagian.remove();
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const spare_part = document.querySelectorAll(".spare_part img");
    spare_part.forEach(item => {
        item.addEventListener("click", () => {
        const gambar_spare_part = document.createElement("div");
        gambar_spare_part.classList.add("gambar_spare_part");
        gambar_spare_part.innerHTML = `<button class="tutup" type="button">X</button>
            <img class="layar_penuh" src="${item.src}" title="${item.title}" alt="${item.alt}">`;
        document.body.appendChild(gambar_spare_part);
        const closebutton = document.querySelector(".tutup");
        closebutton.addEventListener("click", () => {
            gambar_spare_part.remove();
            });
        });
    });
});
