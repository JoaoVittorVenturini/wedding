const pixKey = "joaovittorventurini@outlook.com"
const receiverName = "JOAO VITTOR LOPES"
const city = "LONDRINA"

const gifts = [
  {
    "id": 1,
    "name": "Deus te iluminou e você resolveu dar uma boa ajuda",
    "price": 5000.01,
    "image": "./gifts/iluminado.jpg",
    "max": 999,
    "bought": 0,
    "link": ""
  },
  {
    "id": 2,
    "name": "Cota do Colchão King Emma",
    "price": 3500.02,
    "image": "./gifts/colchao-emma.jpg",
    "max": 1,
    "bought": 1,
    "link": "https://www.mercadolivre.com.br/emma-original-classic-brancocinza-king-203-cm-193-cm-25-cm/p/MLB15810522?product_trigger_id=MLB17351734&picker=true&quantity=1"
  },
  {
    "id": 3,
    "name": "Ar Condicionado",
    "price": 3100.03,
    "image": "./gifts/ar-condicionado.jpg",
    "max": 1,
    "bought": 0,
    "link": "https://www.mercadolivre.com.br/ar-condicionado-lg-dual-inverter-ai-voice-12000-btus-qf-220v/up/MLBU3810727091"
  },
  {
    "id": 4,
    "name": "Cama Box Baú Bi-partida King (Cinza)",
    "price": 1050.04,
    "image": "./gifts/box-colchao.jpg",
    "max": 1,
    "bought": 1,
    "link": "https://www.mercadolivre.com.br/bau-gaveta-200cm-e-cabeceira-king-de-200x117cm-de-altura/up/MLBU3339134541"
  },
  {
    "id": 5,
    "name": "Cadeira Ergonômica Elements Samaia - Preto",
    "price": 860.05,
    "image": "./gifts/cadeira.jpg",
    "max": 1,
    "bought": 0,
    "link": "https://www.mercadolivre.com.br/cadeira-escritorio-confortavel-ergonmica-elements-samaia-nr17-preto/p/MLB61348952"
  },
  {
    "id": 6,
    "name": "Echo Show 5",
    "price": 700.06,
    "image": "./gifts/echo-show-5.jpg",
    "max": 1,
    "bought": 0,
    "link": "https://www.amazon.com.br/Echo-Show-5-3%C2%AAgera%C3%A7%C3%A3o-Cor-Preta/dp/B09B2TSNNN"
  },
  {
    "id": 7,
    "name": "Amigos para sempre",
    "price": 750.07,
    "image": "./gifts/amigos-para-sempre.png",
    "max": 2,
    "bought": 0,
    "link": ""
  },
  {
    "id": 8,
    "name": "Panela De Pressão Elétrica",
    "price": 549.08,
    "image": "./gifts/panela-de-pressao.jpg",
    "max": 1,
    "bought": 1,
    "link": "https://www.havan.com.br/panela-de-pressao-eletrica-electrolux-6-litros-pcc20/p"
  },
  {
    "id": 9,
    "name": "Aparelho de Jantar 30 peças",
    "price": 550.9,
    "image": "./gifts/aparelho-jantar.jpg",
    "max": 1,
    "bought": 1,
    "link": "https://www.mercadolivre.com.br/oxford-ryo-maresia-branco-liso-30/p/MLB34115624?product_trigger_id=MLB64883205&picker=true&quantity=1"
  },
  {
    "id": 10,
    "name": "Cota do Forno e Fritadeira Oster",
    "price": 890.1,
    "image": "./gifts/forno-eletrico.jpg",
    "max": 1,
    "bought": 0,
    "link": "https://www.mercadolivre.com.br/forno-e-fritadeira-sem-oleo-oster-42l-french-door-2-em-1-cor-prateado-tssttvfdmaf/p/MLB22477586"
  },
  {
    "id": 11,
    "name": "Cota da TV 55' QLED",
    "price": 500.11,
    "image": "./gifts/tv.jpg",
    "max": 6,
    "bought": 0,
    "link": "https://www.mercadolivre.com.br/samsung-vision-ai-tv-55-qled-ultra-4k-qef1-2025/p/MLB48957045"
  },
  {
    "id": 12,
    "name": "Jogo de Panelas",
    "price": 525.12,
    "image": "./gifts/jogo-panelas.jpg",
    "max": 1,
    "bought": 0,
    "link": "https://produto.mercadolivre.com.br/MLB-4669346839-jogo-panelas-antiaderente-15-pecas-cabo-removivel-_JM"
  },
  {
    "id": 13,
    "name": "Vaquinha para ajudar os noivos quebrados",
    "price": 400.13,
    "image": "./gifts/porquinho.jpeg",
    "max": 8,
    "bought": 0,
    "link": ""
  },
  {
    "id": 14,
    "name": "Livreiro Estante",
    "price": 350.14,
    "image": "./gifts/estante.jpg",
    "max": 1,
    "bought": 0,
    "link": "https://produto.mercadolivre.com.br/MLB-3403240967-livreiro-estante-4-prateleiras-cpes-em-mdf-versales-_JM?attributes=COLOR_SECONDARY_COLOR%3AUHJldG8%3D&picker=true&quantity=1"
  },
  {
    "id": 15,
    "name": "Primeira compra no mercado dos noivos",
    "price": 325.15,
    "image": "./gifts/mercado.jpg",
    "max": 1,
    "bought": 1,
    "link": ""
  },
  {
    "id": 16,
    "name": "Academia dos noivos",
    "price": 300.16,
    "image": "./gifts/academia.jpg",
    "max": 4,
    "bought": 0,
    "link": ""
  },
  {
    "id": 17,
    "name": "Cota dos Móveis Planejados",
    "price": 300.17,
    "image": "./gifts/planejados.jpg",
    "max": 8,
    "bought": 1,
    "link": ""
  },
  {
    "id": 18,
    "name": "Rolo de macarrão para momentos necessários",
    "price": 100.18,
    "image": "./gifts/rolo.jpg",
    "max": 1,
    "bought": 0,
    "link": ""
  },
  {
    "id": 19,
    "name": "Capacete contra rolo de macarrão",
    "price": 285.19,
    "image": "./gifts/capacete.jpg",
    "max": 1,
    "bought": 0,
    "link": ""
  },
  {
    "id": 20,
    "name": "Decoração da casa",
    "price": 275.2,
    "image": "./gifts/decoracoes.jpg",
    "max": 6,
    "bought": 0,
    "link": ""
  },
  {
    "id": 21,
    "name": "Kit Facas 14 peças Inox",
    "price": 270.21,
    "image": "./gifts/faqueiro.jpg",
    "max": 1,
    "bought": 0,
    "link": "https://shopee.com.br/Kit-Facas-de-luxo-14-pe%C3%A7as-Inox-Bloco-de-Bancada-Elegante-com-Afiador-Embutido-i.811757439.18999616108"
  },
  {
    "id": 22,
    "name": "Armário Multiuso",
    "price": 250.22,
    "image": "./gifts/armario-lavanderia.jpg",
    "max": 1,
    "bought": 0,
    "link": "https://shopee.com.br/Arm%C3%A1rio-Multiuso-Dit%C3%A1lia-2-Portas-com-Rod%C3%ADzios-AR-70-Preto-i.522316174.21465912041?xptdk=0487a06e-c523-4aca-b845-fd542d1d2cc2"
  },
  {
    "id": 23,
    "name": "Cobre Leito King",
    "price": 300.23,
    "image": "./gifts/colcha.jpg",
    "max": 2,
    "bought": 0,
    "link": "https://produto.mercadolivre.com.br/MLB-4055099773-conjunto-casal-king-size-melinda-algodo-toque-super-macio-_JM?attributes=COLOR_SECONDARY_COLOR%3AQ2luemE%3D&picker=true&quantity=1"
  },
  {
    "id": 24,
    "name": "Makita pra cortar a unha do noivo",
    "price": 225.24,
    "image": "./gifts/makita.jpg",
    "max": 1,
    "bought": 1,
    "link": ""
  },
  {
    "id": 25,
    "name": "Primeira conta de luz do casal (ajuda psicológica inclusa)",
    "price": 200.25,
    "image": "./gifts/boletos.jpg",
    "max": 2,
    "bought": 0,
    "link": ""
  },
  {
    "id": 26,
    "name": "Curso de gastronomia para a noiva",
    "price": 180.26,
    "image": "./gifts/gastronomia.jpg",
    "max": 2,
    "bought": 0,
    "link": ""
  },
  {
    "id": 27,
    "name": "Jantar romântico dos noivos",
    "price": 200.27,
    "image": "./gifts/jantar.jpg",
    "max": 8,
    "bought": 0,
    "link": ""
  },
  {
    "id": 28,
    "name": "Café da manhã especial dos noivos",
    "price": 165.28,
    "image": "./gifts/cafe.jpg",
    "max": 4,
    "bought": 0,
    "link": ""
  },
  {
    "id": 29,
    "name": "Pizza da sexta-feira sagrada",
    "price": 150.29,
    "image": "./gifts/pizza.jpg",
    "max": 4,
    "bought": 0,
    "link": ""
  },
  {
    "id": 30,
    "name": "Cueca sensual para o noivo usar na noite de núpcias",
    "price": 149.3,
    "image": "./gifts/cueca.jpg",
    "max": 4,
    "bought": 1,
    "link": ""
  },
  {
    "id": 31,
    "name": "Potes Herméticos Vidro Tampa Bambu",
    "price": 135.31,
    "image": "./gifts/potes.jpg",
    "max": 1,
    "bought": 0,
    "link": "https://www.mercadolivre.com.br/kit-10-potes-hermeticos-vidro-tampa-bambu-seiri-para-mantimentos-cozinha/p/MLB57492845"
  },
  {
    "id": 32,
    "name": "Máscara de gás para futuras fraldas",
    "price": 125.32,
    "image": "./gifts/mascara.jpg",
    "max": 1,
    "bought": 0,
    "link": ""
  },
  {
    "id": 33,
    "name": "O que Deus tocar no seu coração",
    "price": "R$ -",
    "image": "./gifts/oque-tocar-no-coracao.jpg",
    "max": 10,
    "bought": 0,
    "link": ""
  }
]

// UTIL
function formatCurrency(value) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(value)
}

function sanitize(text) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .toUpperCase()
}

// RENDER
function render() {
  const container = document.getElementById("gift-list")
  container.innerHTML = ""

  gifts.forEach(gift => {
    const card = document.createElement("div")
    card.className = "card"

    const isSoldOut = gift.bought >= gift.max

    card.innerHTML = `
      <img src="${gift.image}" />
      <h3>${gift.name}</h3>
      <p class="price">${formatCurrency(gift.price)}</p>
      <p class="stock">${gift.bought} de ${gift.max}</p>
    `

    const button = document.createElement("button")

    button.textContent = isSoldOut ? "Esgotado" : "Presentear"
    button.disabled = isSoldOut

    if (!isSoldOut) {
      button.onclick = () => openModal(gift)
    }

    if (isSoldOut) {
      card.classList.add("soldout")
    }

    card.appendChild(button)
    container.appendChild(card)
  })
}

// PIX
function emv(id, value) {
  const size = value.length.toString().padStart(2, "0")
  return id + size + value
}

function crc16(str) {
  let crc = 0xffff

  for (let i = 0; i < str.length; i++) {
    crc ^= str.charCodeAt(i) << 8
    for (let j = 0; j < 8; j++) {
      crc = (crc & 0x8000) ? (crc << 1) ^ 0x1021 : crc << 1
      crc &= 0xffff
    }
  }

  return crc.toString(16).toUpperCase().padStart(4, "0")
}

function generatePixPayload(value, description) {
  const amount = value.toFixed(2)

  const merchantAccount =
    emv("00", "BR.GOV.BCB.PIX") +
    emv("01", pixKey)

  const cleanDescription = sanitize(description)
    .replace(/\s/g, "")
    .substring(0, 25)

  const additionalData = emv("05", cleanDescription)

  const payload =
    emv("00", "01") +
    emv("26", merchantAccount) +
    emv("52", "0000") +
    emv("53", "986") +
    emv("54", amount) +
    emv("58", "BR") +
    emv("59", sanitize(receiverName).substring(0, 25)) +
    emv("60", sanitize(city).substring(0, 15)) +
    emv("62", additionalData)

  const payloadFinal = payload + "6304"
  const checksum = crc16(payloadFinal)

  return payloadFinal + checksum
}

function copyPix() {
  const textarea = document.getElementById("pix-copy")
  textarea.select()
  textarea.setSelectionRange(0, 99999)

  navigator.clipboard.writeText(textarea.value)

  const btn = document.querySelector(".copy-btn")
  btn.innerText = "Copiado ✓"

  setTimeout(() => {
    btn.innerText = "Copiar código PIX"
  }, 2000)
}

// MODAL
function openModal(gift) {
  const modal = document.getElementById("modal")
  modal.classList.remove("hidden")

  const description = `${gift.id}${gift.name}`
  const payload = generatePixPayload(gift.price, description)

  QRCode.toCanvas(document.getElementById("qrcode"), payload)

  const pixText = document.getElementById("pix-text")

  pixText.innerHTML = `
    <div class="pix-section">
      <strong class="price">${formatCurrency(gift.price)}</strong>
      <p class="gift-name">${gift.name}</p>
    </div>

    <textarea id="pix-copy" readonly>${payload}</textarea>

    <button class="copy-btn" onclick="copyPix()">
      Copiar código PIX
    </button>
  `

  // Se tiver link, adiciona alternativa
  if (gift.link && gift.link !== "") {
    pixText.innerHTML += `
      <div class="divider">ou</div>

      <a href="${gift.link}" target="_blank" class="buy-link">
        🛒 Comprar diretamente
      </a>
    `
  }
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden")
}

// -----------------------------
function startCountdown() {
  const eventDate = new Date("2026-06-06T16:30:00-03:00")

  function update() {
    const now = new Date()
    const diff = eventDate - now

    if (diff <= 0) {
      document.getElementById("countdown").innerHTML = "Chegou o grande dia!"
      return
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
    const minutes = Math.floor((diff / (1000 * 60)) % 60)
    const seconds = Math.floor((diff / 1000) % 60)

    document.getElementById("days").innerText = String(days).padStart(2, "0")
    document.getElementById("hours").innerText = String(hours).padStart(2, "0")
    document.getElementById("minutes").innerText = String(minutes).padStart(2, "0")
    document.getElementById("seconds").innerText = String(seconds).padStart(2, "0")
  }

  update()
  setInterval(update, 1000)
}

startCountdown()
render()
