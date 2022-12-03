document.getElementById("year").innerHTML = new Date().getFullYear();

function buy(product_name, product_price) {
  const message = `Haloo min saya mau beli nihh ${product_name} - ${product_price}`
  const whatsapp = `https://wa.me/6281214458120?text=${message}`
  open(whatsapp, "_blank")
}

function chat() {
  const message = 'Halo min saya mau tanya nih...'
  const whatsapp = `https://wa.me/6281214458120?text=${message}`
  open(whatsapp, "_blank")
}

