// =====================================================================
// TODOS OS TEXTOS E DADOS DO SITE FICAM AQUI.
// Para trocar telefone, endereço, terapias etc., edite só este arquivo.
// Os textos abaixo são PROVISÓRIOS — a Fabiane deve revisar e reescrever.
// =====================================================================

export const site = {
  name: "Fabiane Prem Ayurveda",
  tagline: "Medicinas integrativas para reencontrar equilíbrio, calma e presença.",

  // WhatsApp: DDI + DDD + número, só dígitos. Ex.: 5571999998888
  whatsapp: "5571993728991",
  whatsappDisplay: "(71) 99372-8991",

  email: "fabianeprem@gmail.com",

  // Ela ainda não tem local fixo. Quando definir, preencha line1 e line2 (e o mapa abaixo).
  address: {
    line1: "Local de atendimento em definição", // TROCAR
    line2: "", // TROCAR (cidade – UF)
    note: "Atendimento com hora marcada.",
  },
  // Cole aqui o link "Incorporar mapa" do Google Maps (src do iframe). Vazio = mostra um espaço reservado.
  mapEmbedUrl: "",

  hours: ["Segunda a sexta: 9h às 19h", "Sábado: 9h às 13h"], // TROCAR

  instagram: "https://instagram.com/fabianeprem_ayurveda",
  instagramHandle: "@fabianeprem_ayurveda",
};

// Mensagens prontas do WhatsApp (o cliente só clica em "enviar").
export const messages = {
  general:
    "Olá, Fabiane! Vim pelo seu site e gostaria de saber mais sobre os atendimentos.",
  service: (name) =>
    `Olá, Fabiane! Vim pelo seu site e tenho interesse em ${name}. Poderia me passar mais informações e horários disponíveis?`,
  workshop: (name) =>
    `Olá, Fabiane! Vim pelo seu site e quero saber mais sobre o workshop "${name}". Como faço para participar?`,
};

export const about = {
  title: "Cuidar do corpo, da mente e do coração",
  paragraphs: [
    "Sou a Fabiane e trabalho com medicinas integrativas inspiradas na tradição do Ayurveda, unindo toque, movimento, respiração e presença.",
    "Cada atendimento é pensado para a necessidade de cada pessoa, em um ambiente acolhedor, sem pressa e com muito respeito ao seu tempo.",
  ],
  highlights: ["Atendimento individual", "Ambiente acolhedor", "Práticas para o dia a dia"],
};

export const services = [
  {
    id: "yoga-massagem-ayurvedica",
    title: "Yoga Massagem Ayurvédica (YMA)",
    description:
      "Une movimentos do yoga e toques da massagem ayurvédica para soltar tensões, relaxar profundamente e favorecer o equilíbrio.",
  },
  {
    id: "massagem-de-mesa",
    title: "Massagem de Mesa",
    description:
      "Atendimento em maca, com técnicas de massagem para aliviar o estresse, as dores musculares e a sensação de cansaço.",
  },
  {
    id: "yoga",
    title: "Yoga",
    description:
      "Aulas de yoga para movimentar o corpo, acalmar a mente e criar uma rotina de autocuidado, em grupo ou individual.",
  },
  {
    id: "yoga-do-riso",
    title: "Yoga do Riso",
    description:
      "Prática leve e divertida que combina exercícios de riso com respiração do yoga para renovar a energia e o bom humor.",
  },
  {
    id: "meditacao",
    title: "Meditação",
    description:
      "Momentos guiados de meditação e respiração para desacelerar, cultivar silêncio interior e aprender a lidar melhor com o dia a dia.",
  },
  // Outras terapias entram aqui: copie um bloco e preencha id, title e description.
];

export const workshops = {
  title: "Workshops e vivências",
  intro:
    "Encontros presenciais para aprender e praticar em grupo. Confira as próximas datas ou fale comigo para levar um workshop ao seu espaço.",
  items: [
    {
      id: "ws-yoga-massagem",
      title: "Workshop de Yoga Massagem Ayurvédica",
      when: "Data a definir",
      where: "Local a definir",
      description:
        "Aprenda técnicas simples para praticar em casa, em dupla ou com a família.",
    },
    {
      id: "ws-meditacao",
      title: "Vivência de Meditação",
      when: "Data a definir",
      where: "Local a definir",
      description:
        "Uma tarde de práticas guiadas de respiração e meditação para recarregar as energias.",
    },
  ],
};

export const testimonials = [
  {
    text: "Depoimento de exemplo: saí da sessão leve, com o corpo solto e a mente tranquila.",
    author: "Nome da cliente",
  },
  {
    text: "Depoimento de exemplo: o workshop foi acolhedor e me ensinou práticas que uso até hoje.",
    author: "Nome do participante",
  },
  {
    text: "Depoimento de exemplo: as aulas de yoga do riso mudaram o meu humor da semana.",
    author: "Nome da aluna",
  },
];

export const faq = [
  {
    q: "Preciso ter experiência para participar?",
    a: "Não. Todas as práticas são adaptadas ao seu nível e ao seu ritmo.",
  },
  {
    q: "Como funciona o primeiro atendimento?",
    a: "Começamos com uma conversa para entender suas necessidades e então definimos juntos a melhor prática.",
  },
  {
    q: "Como agendo um horário?",
    a: "Pelo botão de WhatsApp ou pelo formulário de contato. Respondo assim que possível.",
  },
  {
    q: "Quais são os valores?",
    a: "Os valores variam conforme a prática. Fale comigo pelo WhatsApp e envio todas as informações.",
  },
];
