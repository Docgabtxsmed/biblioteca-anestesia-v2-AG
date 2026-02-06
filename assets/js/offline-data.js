// DATA BUNDLE FOR OFFLINE USAGE
const OFFLINE_DATA = {
  "choque": {
    "id": "choque",
    "seo": {
      "title": "Choque e Monitorização Hemodinâmica - Biblioteca de Anestesiologia",
      "description": "Choque e Monitorização Hemodinâmica - Fisiopatologia do choque, ressuscitação guiada por metas e monitorização avançada.",
      "keywords": "anestesiologia, choque, monitorização hemodinâmica, ressuscitação, vasopressores, PAM, débito cardíaco, Swan-Ganz",
      "schema": {
        "name": "Choque e Monitorização Hemodinâmica",
        "description": "Material educacional sobre choque e monitorização hemodinâmica avançada"
      }
    },
    "header": {
      "navbarTitle": "📊 Choque e Monitorização Hemodinâmica",
      "pageTitle": "Choque e Monitorização Hemodinâmica",
      "pageSubtitle": "Fisiopatologia do choque, ressuscitação guiada por metas, monitorização hemodinâmica avançada e manejo de vasopressores."
    },
    "cards": [
      {
        "id": "resumo-fisiopatologia",
        "title": "Resumo: Fisiopatologia do Choque",
        "description": "Tipos de choque (hipovolêmico, cardiogênico, distributivo, obstrutivo), fisiopatologia e diagnóstico diferencial.",
        "thumbnail": "🩸",
        "link": "resumos/choque-fisiopatologia.html",
        "tags": [
          "Tipos",
          "Fisiopatologia",
          "Diagnóstico"
        ],
        "type": "resumo"
      },
      {
        "id": "resumo-ressuscitacao",
        "title": "Resumo: Ressuscitação Volêmica",
        "description": "Ressuscitação guiada por metas, fluidoterapia, cristaloides vs coloides e testes de responsividade.",
        "thumbnail": "💧",
        "link": "resumos/choque-ressuscitacao-volemica.html",
        "tags": [
          "Fluidos",
          "Metas",
          "Responsividade"
        ],
        "type": "resumo"
      },
      {
        "id": "resumo-monitorizacao",
        "title": "Resumo: Monitorização Hemodinâmica",
        "description": "PAM invasiva, Swan-Ganz, débito cardíaco, ecocardiografia e monitorização minimamente invasiva.",
        "thumbnail": "📊",
        "link": "resumos/choque-monitorizacao-hemodinamica.html",
        "tags": [
          "Swan-Ganz",
          "Débito Cardíaco",
          "Echo"
        ],
        "type": "resumo"
      },
      {
        "id": "flashcards",
        "title": "Flashcards de Revisão",
        "description": "Revisão rápida dos conceitos essenciais de choque e ressuscitação hemodinâmica.",
        "thumbnail": "🎴",
        "link": "flashcards/choque.html",
        "tags": [
          "Interativo",
          "Revisão"
        ],
        "type": "flashcard"
      },
      {
        "id": "questoes",
        "title": "Questões Comentadas",
        "description": "Quiz interativo com gabarito comentado sobre choque e monitorização hemodinâmica.",
        "thumbnail": "❓",
        "link": "questoes/choque.html",
        "tags": [
          "Interativo"
        ],
        "type": "questoes"
      },
      {
        "id": "vasopressores",
        "title": "Vasopressores e Inotrópicos",
        "description": "Guia de vasopressores, inotrópicos e doses de infusão. Em breve!",
        "thumbnail": "💊",
        "link": "#",
        "tags": [
          "Em breve"
        ],
        "type": "resumo",
        "disabled": true
      }
    ]
  },
  "plastica": {
    "id": "plastica",
    "seo": {
      "title": "Cirurgia Plástica - Biblioteca de Anestesiologia",
      "description": "Recursos sobre anestesia em cirurgia plástica: lipoaspiração e queimados.",
      "keywords": "anestesiologia, cirurgia plástica, lipoaspiração, queimados",
      "schema": {
        "name": "Cirurgia Plástica",
        "description": "Anestesia para cirurgia plástica"
      }
    },
    "header": {
      "navbarTitle": "✨ Cirurgia Plástica",
      "pageTitle": "Anestesia para Cirurgia Plástica",
      "pageSubtitle": "Resumos e protocolos focados em lipoaspiração e manejo do paciente queimado."
    },
    "cards": [
      {
        "id": "resumo-lipo",
        "title": "Lipoaspiração",
        "description": "Resumo de anestesia para lipoaspiração, técnica tumescente e cuidados com lidocaína.",
        "thumbnail": "💉",
        "link": "resumos/plastica-lipo.html",
        "tags": [
          "Tumescente",
          "Lidocaína"
        ],
        "type": "resumo"
      },
      {
        "id": "resumo-queimados",
        "title": "Queimados",
        "description": "Manejo anestésico e ressuscitação volêmica do paciente queimado.",
        "thumbnail": "🔥",
        "link": "resumos/plastica-queimados.html",
        "tags": [
          "Ressuscitação",
          "Via aérea"
        ],
        "type": "resumo"
      },
      {
        "id": "flashcards",
        "title": "Flashcards de Revisão",
        "description": "Revisão rápida dos conceitos-chave em cirurgia plástica.",
        "thumbnail": "🎴",
        "link": "flashcards/plastica.html",
        "tags": [
          "Interativo",
          "Revisão"
        ],
        "type": "flashcard"
      },
      {
        "id": "questoes",
        "title": "Questões Comentadas",
        "description": "Quiz interativo com gabarito comentado sobre cirurgia plástica.",
        "thumbnail": "❓",
        "link": "questoes/plastica.html",
        "tags": [
          "Interativo"
        ],
        "type": "questoes"
      }
    ]
  },
  "buco": {
    "id": "buco",
    "seo": {
      "title": "Cirurgia Bucomaxilofacial - Biblioteca de Anestesiologia",
      "description": "Anestesia para Cirurgia Bucomaxilofacial - Via aérea compartilhada, intubação nasotraqueal e manejo de trauma de face.",
      "keywords": "anestesiologia, bucomaxilofacial, via aérea compartilhada, intubação nasotraqueal, trauma de face, cirurgia oral",
      "schema": {
        "name": "Anestesia para Cirurgia Bucomaxilofacial",
        "description": "Material educacional sobre anestesia em cirurgias de face e boca"
      }
    },
    "header": {
      "navbarTitle": "🦷 Cirurgia Bucomaxilofacial",
      "pageTitle": "Anestesia para Cirurgia Bucomaxilofacial",
      "pageSubtitle": "Técnicas anestésicas em cirurgias de face e boca, via aérea compartilhada, intubação nasotraqueal e manejo de trauma facial."
    },
    "cards": [
      {
        "id": "resumo-via-aerea",
        "title": "Resumo: Via Aérea Compartilhada",
        "description": "Manejo da via aérea compartilhada entre anestesista e cirurgião, técnicas de proteção e comunicação.",
        "thumbnail": "🫁",
        "link": "resumos/buco-via-aerea-compartilhada.html",
        "tags": [
          "Via Aérea",
          "Intubação",
          "Segurança"
        ],
        "type": "resumo"
      },
      {
        "id": "resumo-intubacao",
        "title": "Resumo: Intubação Nasotraqueal",
        "description": "Técnica de intubação nasotraqueal, indicações, contraindicações e complicações.",
        "thumbnail": "👃",
        "link": "resumos/buco-intubacao-nasotraqueal.html",
        "tags": [
          "Nasotraqueal",
          "Técnica",
          "Complicações"
        ],
        "type": "resumo"
      },
      {
        "id": "resumo-trauma",
        "title": "Resumo: Trauma de Face",
        "description": "Avaliação e manejo anestésico do trauma maxilofacial, via aérea difícil e sangramento.",
        "thumbnail": "🚑",
        "link": "resumos/buco-trauma-face.html",
        "tags": [
          "Trauma",
          "Emergência",
          "Sangramento"
        ],
        "type": "resumo"
      },
      {
        "id": "flashcards",
        "title": "Flashcards de Revisão",
        "description": "Revisão rápida dos conceitos essenciais de anestesia para cirurgia bucomaxilofacial.",
        "thumbnail": "🎴",
        "link": "flashcards/buco.html",
        "tags": [
          "Interativo",
          "Revisão"
        ],
        "type": "flashcard"
      },
      {
        "id": "questoes",
        "title": "Questões Comentadas",
        "description": "Quiz interativo com gabarito comentado sobre cirurgia bucomaxilofacial.",
        "thumbnail": "❓",
        "link": "questoes/buco.html",
        "tags": [
          "Interativo"
        ],
        "type": "questoes"
      },
      {
        "id": "videos",
        "title": "Vídeos Técnicos",
        "description": "Demonstrações de técnicas de intubação e manejo de via aérea. Em breve!",
        "thumbnail": "📹",
        "link": "#",
        "tags": [
          "Em breve"
        ],
        "type": "video",
        "disabled": true
      }
    ]
  },
  "cdi-marcapasso": {
    "id": "cdi-marcapasso",
    "seo": {
      "title": "Marcapasso e CDI - Biblioteca de Anestesiologia",
      "description": "Revisão rápida de marcapasso e CDI com flashcards e links úteis.",
      "keywords": "anestesiologia, marcapasso, CDI, arritmia, dispositivo cardíaco",
      "schema": {
        "name": "Marcapasso e CDI",
        "description": "Revisão de dispositivos cardíacos"
      }
    },
    "header": {
      "navbarTitle": "⚡ Marcapasso e CDI",
      "pageTitle": "Marcapasso e Cardiodesfibrilador Implantável",
      "pageSubtitle": "Condutas rápidas, indicações e revisão interativa com flashcards dedicados."
    },
    "cards": [
      {
        "id": "flashcards",
        "title": "Flashcards: Marcapasso & CDI",
        "description": "Deck interativo com fisiologia do dispositivo, programação básica, troubleshooting e perioperatório.",
        "thumbnail": "🧠",
        "link": "flashcards/cdi-marcapasso.html",
        "tags": [
          "Dispositivo",
          "Periop",
          "Revisão rápida"
        ],
        "type": "flashcard"
      },
      {
        "id": "questoes",
        "title": "Questões Comentadas",
        "description": "Quiz interativo com gabarito comentado sobre marcapasso e CDI.",
        "thumbnail": "📝",
        "link": "questoes/cdi-marcapasso.html",
        "tags": [
          "Interativo"
        ],
        "type": "questoes"
      },
      {
        "id": "protocolos",
        "title": "Protocolos Perioperatórios",
        "description": "Checklist de programação, magneto e manejo de choque — em breve.",
        "thumbnail": "📄",
        "link": "#",
        "tags": [
          "Em breve"
        ],
        "type": "protocolo",
        "disabled": true
      }
    ]
  },
  "hipotermia": {
    "id": "hipotermia",
    "seo": {
      "title": "Hipotermia - Biblioteca de Anestesiologia",
      "description": "Hipotermia no Perioperatório - Fisiopatologia, prevenção e tratamento.",
      "keywords": "anestesiologia, hipotermia, perioperatório, aquecimento",
      "schema": {
        "name": "Hipotermia",
        "description": "Hipotermia no perioperatório"
      }
    },
    "header": {
      "navbarTitle": "❄️ Hipotermia",
      "pageTitle": "Hipotermia no Perioperatório",
      "pageSubtitle": "Fisiopatologia, prevenção e tratamento da hipotermia em anestesia."
    },
    "cards": [
      {
        "id": "resumo-hipotermia",
        "title": "Resumo: Hipotermia",
        "description": "Mecanismos, classificação e estratégias de aquecimento ativo.",
        "thumbnail": "🌡️",
        "link": "resumos/hipotermia.html",
        "tags": [
          "Prevenção",
          "Aquecimento"
        ],
        "type": "resumo"
      },
      {
        "id": "flashcards",
        "title": "Flashcards de Revisão",
        "description": "Revisão rápida dos conceitos essenciais de hipotermia.",
        "thumbnail": "🎴",
        "link": "flashcards/hipotermia.html",
        "tags": [
          "Interativo",
          "Revisão"
        ],
        "type": "flashcard"
      },
      {
        "id": "questoes",
        "title": "Questões Comentadas",
        "description": "Quiz interativo com gabarito comentado sobre hipotermia.",
        "thumbnail": "❓",
        "link": "questoes/hipotermia.html",
        "tags": [
          "Interativo"
        ],
        "type": "questoes"
      }
    ]
  },
  "dor": {
    "id": "dor",
    "seo": {
      "title": "Anestesia para Dor - Biblioteca de Anestesiologia",
      "description": "Anestesia para Dor - Resumos e protocolos sobre fisiopatologia, manejo agudo e crônico da dor.",
      "keywords": "anestesiologia, dor, analgesia, dor aguda, dor crônica",
      "schema": {
        "name": "Anestesia para Dor",
        "description": "Material educacional sobre manejo da dor"
      }
    },
    "header": {
      "navbarTitle": "🩹 Dor e Analgesia",
      "pageTitle": "Anestesia para Dor",
      "pageSubtitle": "Resumos e protocolos sobre fisiopatologia, manejo agudo e crônico da dor."
    },
    "cards": [
      {
        "id": "resumo-fisiopatologia",
        "title": "Fisiopatologia da Dor",
        "description": "Bases neurofisiológicas, nocicepção e modulação da dor.",
        "thumbnail": "🔬",
        "link": "resumos/dor-fisiopatologia.html",
        "tags": [
          "Nocicepção",
          "Mediadores"
        ],
        "type": "resumo"
      },
      {
        "id": "resumo-aguda",
        "title": "Tratamento da Dor Aguda",
        "description": "Analgesia multimodal, escalas e monitorização da resposta.",
        "thumbnail": "⚡",
        "link": "resumos/dor-aguda.html",
        "tags": [
          "Multimodal",
          "Analgesia"
        ],
        "type": "resumo"
      },
      {
        "id": "resumo-cronica-farmaco",
        "title": "Tratamento Farmacológico da Dor Crônica",
        "description": "Opioides, adjuvantes, antidepressivos e anticonvulsivantes.",
        "thumbnail": "💊",
        "link": "resumos/dor-cronica-farmacologico.html",
        "tags": [
          "Crônica",
          "Fármacos"
        ],
        "type": "resumo"
      },
      {
        "id": "resumo-cronica-intervencao",
        "title": "Tratamento Intervencionista da Dor Crônica",
        "description": "Bloqueios, radiofrequência e técnicas guiadas por imagem.",
        "thumbnail": "💉",
        "link": "resumos/dor-cronica-intervencionista.html",
        "tags": [
          "Intervenção",
          "Bloqueios"
        ],
        "type": "resumo"
      },
      {
        "id": "flashcards",
        "title": "Flashcards de Revisão",
        "description": "Revisão rápida dos conceitos essenciais de dor e analgesia.",
        "thumbnail": "🎴",
        "link": "flashcards/dor.html",
        "tags": [
          "Interativo",
          "Revisão"
        ],
        "type": "flashcard"
      },
      {
        "id": "questoes",
        "title": "Questões Comentadas",
        "description": "Quiz interativo com gabarito comentado sobre dor e analgesia.",
        "thumbnail": "❓",
        "link": "questoes/dor.html",
        "tags": [
          "Interativo"
        ],
        "type": "questoes"
      }
    ]
  },
  "vascular": {
    "id": "vascular",
    "seo": {
      "title": "Cirurgia Vascular - Biblioteca de Anestesiologia",
      "description": "Anestesia para Cirurgia Vascular - Resumos sobre aneurismas e cirurgia carotídea.",
      "keywords": "anestesiologia, cirurgia vascular, aneurisma, carótida",
      "schema": {
        "name": "Cirurgia Vascular",
        "description": "Anestesia para cirurgia vascular"
      }
    },
    "header": {
      "navbarTitle": "🩺 Cirurgia Vascular",
      "pageTitle": "Anestesia para Cirurgia Vascular",
      "pageSubtitle": "Resumos e protocolos sobre aneurismas e cirurgia carotídea."
    },
    "cards": [
      {
        "id": "resumo-aaa",
        "title": "Aneurisma de Aorta Abdominal",
        "description": "Avaliações pré-operatórias, clampeamento e manejo hemodinâmico.",
        "thumbnail": "🫀",
        "link": "resumos/vascular-aneurisma-aorta-abdominal.html",
        "tags": [
          "AAA",
          "Clampeamento"
        ],
        "type": "resumo"
      },
      {
        "id": "resumo-toracoabdominal",
        "title": "Aneurisma Toracoabdominal",
        "description": "Riscos neurológicos, perfusão medular e estratégia de proteção.",
        "thumbnail": "🩺",
        "link": "resumos/vascular-aneurisma-toracoabdominal.html",
        "tags": [
          "Toracoabdominal",
          "Proteção"
        ],
        "type": "resumo"
      },
      {
        "id": "resumo-carotida",
        "title": "Carótida",
        "description": "Endarterectomia, monitorização neurológica e metas de pressão.",
        "thumbnail": "🧠",
        "link": "resumos/vascular-carotida.html",
        "tags": [
          "Endarterectomia",
          "Neuromonitorização"
        ],
        "type": "resumo"
      },
      {
        "id": "flashcards",
        "title": "Flashcards de Revisão",
        "description": "Revisão rápida dos conceitos-chave em cirurgia vascular.",
        "thumbnail": "🎴",
        "link": "flashcards/vascular.html",
        "tags": [
          "Interativo",
          "Revisão"
        ],
        "type": "flashcard"
      },
      {
        "id": "questoes",
        "title": "Questões Comentadas",
        "description": "Quiz interativo com gabarito comentado sobre cirurgia vascular.",
        "thumbnail": "❓",
        "link": "questoes/vascular.html",
        "tags": [
          "Interativo"
        ],
        "type": "questoes"
      }
    ]
  },
  "endocrino": {
    "id": "endocrino",
    "seo": {
      "title": "Anestesia Endócrina - Biblioteca de Anestesiologia",
      "description": "Anestesia Endócrina - Manejo anestésico em pacientes com distúrbios endocrinológicos.",
      "keywords": "anestesiologia, endocrinologia, diabetes, tireóide, feocromocitoma",
      "schema": {
        "name": "Anestesia Endócrina",
        "description": "Manejo anestésico em endocrinologia"
      }
    },
    "header": {
      "navbarTitle": "🧬 Endocrinologia Perioperatória",
      "pageTitle": "Anestesia Endócrina",
      "pageSubtitle": "Recursos visuais e conteúdos científicos sobre manejo anestésico em endocrinologia perioperatória."
    },
    "cards": [
      {
        "id": "resumo-diabetes",
        "title": "Diabetes Mellitus",
        "description": "Estratégias de controle glicêmico, ajustes de insulina e prevenção de hipoglicemia.",
        "thumbnail": "🩸",
        "link": "resumos/endocrino-diabetes.html",
        "tags": [
          "Glicemia",
          "Balanço"
        ],
        "type": "resumo"
      },
      {
        "id": "resumo-hipotireoidismo",
        "title": "Hipotireoidismo",
        "description": "Avaliação pré-operatória, reposição de levotiroxina e risco de coma mixedematoso.",
        "thumbnail": "🦋",
        "link": "resumos/endocrino-hipotireoidismo.html",
        "tags": [
          "T4/T3",
          "Crise"
        ],
        "type": "resumo"
      },
      {
        "id": "resumo-hipertireoidismo",
        "title": "Hipertireoidismo",
        "description": "Bloqueadores beta e tiamazol, bloqueio iodado e tempestade tireotóxica.",
        "thumbnail": "🔥",
        "link": "resumos/endocrino-hipertireoidismo.html",
        "tags": [
          "Tempestade",
          "Preparação"
        ],
        "type": "resumo"
      },
      {
        "id": "resumo-feocromocitoma",
        "title": "Feocromocitoma",
        "description": "Bloqueio alfa prévio, manejo pressórico e monitorização invasiva.",
        "thumbnail": "⚡",
        "link": "resumos/endocrino-feocromocitoma.html",
        "tags": [
          "Catecolaminas",
          "Pré-op"
        ],
        "type": "resumo"
      },
      {
        "id": "resumo-insuficiencia-adrenal",
        "title": "Insuficiência Adrenal",
        "description": "Identificação precoce, esteroides de estresse e reversão rápida da crise.",
        "thumbnail": "🧪",
        "link": "resumos/endocrino-insuficiencia-adrenal.html",
        "tags": [
          "Cortisol",
          "Suporte"
        ],
        "type": "resumo"
      },
      {
        "id": "flashcards",
        "title": "Flashcards de Revisão",
        "description": "Revisão rápida dos temas obrigatórios com reforço visual e perguntas curtas.",
        "thumbnail": "🎴",
        "link": "flashcards/endocrino.html",
        "tags": [
          "Interativo",
          "Revisão"
        ],
        "type": "flashcard"
      },
      {
        "id": "questoes",
        "title": "Questões Comentadas",
        "description": "Banco com perguntas e gabarito comentado sobre endocrinologia perioperatória.",
        "thumbnail": "❓",
        "link": "questoes/endocrino.html",
        "tags": [
          "Interativo"
        ],
        "type": "questoes"
      }
    ]
  },
  "toracica": {
    "id": "toracica",
    "seo": {
      "title": "Cirurgia Torácica - Biblioteca de Anestesiologia",
      "description": "Recursos completos sobre anestesia para cirurgia torácica: avaliação pré-operatória, ventilação unipulmonar, manejo de via aérea e técnicas especializadas baseadas em evidências.",
      "keywords": "anestesiologia, cirurgia torácica, ventilação unipulmonar, toracotomia, ressecção pulmonar, via aérea difícil, VEF1, DLCO, VO2max, OLV, analgesia regional torácica",
      "schema": {
        "name": "Anestesia para Cirurgia Torácica",
        "description": "Guia completo de anestesia para cirurgia torácica"
      }
    },
    "header": {
      "navbarTitle": "🫁 Cirurgia Torácica",
      "pageTitle": "Anestesia para Cirurgia Torácica",
      "pageSubtitle": "Recursos visuais e conteúdos científicos sobre técnicas anestésicas, ventilação unipulmonar e manejo perioperatório em cirurgia torácica"
    },
    "cards": [
      {
        "id": "resumo-preop",
        "title": "Avaliação Pré-Operatória",
        "description": "Estrutura tripartite da função respiratória: mecânica, parenquimatosa e cardiopulmonar. Estratificação de risco e manejo de comorbidades cardiovasculares e renais.",
        "thumbnail": "📋",
        "link": "resumos/toracica-preop.html",
        "tags": [
          "VEF1",
          "DLCO",
          "VO2max"
        ],
        "type": "resumo"
      },
      {
        "id": "resumo-olv",
        "title": "Ventilação Unipulmonar (OLV)",
        "description": "Técnicas de isolamento pulmonar, manejo de hipoxemia durante OLV, tubos de duplo lúmen e bloqueadores brônquicos. Fisiopatologia do shunt e estratégias ventilatórias protetoras.",
        "thumbnail": "💨",
        "link": "resumos/toracica-ventilacao-unipulmonar.html",
        "tags": [
          "OLV",
          "Hipoxemia"
        ],
        "type": "resumo"
      },
      {
        "id": "resumo-massas",
        "title": "Massas Mediastinais",
        "description": "Manejo Perioperatório das Massas Mediastinais.",
        "thumbnail": "🫀",
        "link": "resumos/toracica-massas-mediastinais.html",
        "tags": [
          "SVCS",
          "Manejo Via Aérea",
          "Tumores Mediastino"
        ],
        "type": "resumo"
      },
      {
        "id": "questoes",
        "title": "Questões Comentadas",
        "description": "Quiz interativo com gabarito comentado sobre cirurgia torácica, baseado em casos clínicos reais e questões de residência médica em anestesiologia.",
        "thumbnail": "❓",
        "link": "questoes/toracica.html",
        "tags": [
          "Interativo"
        ],
        "type": "questoes"
      },
      {
        "id": "flashcards",
        "title": "Flashcards de Revisão",
        "description": "Memorize conceitos-chave de fisiologia, VMP e farmacologia torácica com nosso sistema de repetição espaçada.",
        "thumbnail": "🎴",
        "link": "flashcards/toracica.html",
        "tags": [
          "Interativo",
          "Revisão"
        ],
        "type": "flashcard"
      },
      {
        "id": "via-aerea-dificil",
        "title": "Via Aérea Difícil",
        "description": "Algoritmos de via aérea difícil, intubação com fibroscopia, dispositivos supraglóticos e técnicas de resgate. Em breve!",
        "thumbnail": "🔧",
        "link": "#",
        "tags": [
          "Em breve"
        ],
        "type": "resumo",
        "disabled": true
      },
      {
        "id": "complicacoes",
        "title": "Complicações Perioperatórias",
        "description": "Manejo de hipoxemia, pneumotórax, hemotórax, arritmias e disfunção ventricular direita no pós-operatório. Em breve!",
        "thumbnail": "⚠️",
        "link": "#",
        "tags": [
          "Em breve"
        ],
        "type": "resumo",
        "disabled": true
      }
    ]
  },
  "neurocirurgia": {
    "id": "neurocirurgia",
    "seo": {
      "title": "Neuroanestesia - Biblioteca de Anestesiologia",
      "description": "Neuroanestesia - Proteção cerebral, controle da PIC, monitorização neurofisiológica e manejo anestésico em neurocirurgia.",
      "keywords": "anestesiologia, neurocirurgia, neuroanestesia, PIC, pressão intracraniana, proteção cerebral, monitorização neurofisiológica",
      "schema": {
        "name": "Neuroanestesia",
        "description": "Material educacional sobre anestesia para neurocirurgia"
      }
    },
    "header": {
      "navbarTitle": "🧠 Neuroanestesia",
      "pageTitle": "Neuroanestesia",
      "pageSubtitle": "Proteção cerebral, controle da pressão intracraniana, monitorização neurofisiológica e manejo anestésico em procedimentos neurocirúrgicos."
    },
    "cards": [
      {
        "id": "resumo-fisiologia",
        "title": "Resumo: Fisiologia Cerebral",
        "description": "Fluxo sanguíneo cerebral, autorregulação, pressão de perfusão cerebral e metabolismo cerebral.",
        "thumbnail": "🧠",
        "link": "resumos/neuro/fisiologia-cerebral.html",
        "tags": [
          "FSC",
          "PPC",
          "Autorregulação"
        ],
        "type": "resumo"
      },
      {
        "id": "resumo-pic",
        "title": "Resumo: Pressão Intracraniana",
        "description": "Fisiopatologia da hipertensão intracraniana, monitorização da PIC e estratégias de tratamento.",
        "thumbnail": "📊",
        "link": "resumos/neuro-pic.html",
        "tags": [
          "PIC",
          "HIC",
          "Tratamento"
        ],
        "type": "resumo"
      },
      {
        "id": "resumo-protecao",
        "title": "Resumo: Proteção Cerebral",
        "description": "Estratégias de neuroproteção, anestésicos neuroprotetores e manejo da lesão cerebral isquêmica.",
        "thumbnail": "🛡️",
        "link": "resumos/neuro-protecao-cerebral.html",
        "tags": [
          "Neuroproteção",
          "Isquemia",
          "Estratégias"
        ],
        "type": "resumo"
      },
      {
        "id": "neuro-fisiopatologia-pediatrica",
        "title": "Fisiopatologia em Neurocirurgia Pediátrica",
        "description": "Fisiologia do LCR, PIC, FSC e autorregulação cerebral.",
        "thumbnail": "🧠",
        "link": "resumos/neuro/fisiopatologia-pediatrica.html",
        "tags": [
          "Neuro",
          "Pediatria",
          "Fisiologia"
        ],
        "type": "resumo"
      },
      {
        "id": "flashcards",
        "title": "Flashcards de Revisão",
        "description": "Revisão rápida dos conceitos essenciais de neuroanestesia e neurofisiologia.",
        "thumbnail": "🎴",
        "link": "flashcards/neurocirurgia.html",
        "tags": [
          "Interativo",
          "Revisão"
        ],
        "type": "flashcard"
      },
      {
        "id": "questoes",
        "title": "Questões Comentadas",
        "description": "Quiz interativo com gabarito comentado sobre neuroanestesia.",
        "thumbnail": "❓",
        "link": "questoes/neurocirurgia.html",
        "tags": [
          "Interativo"
        ],
        "type": "questoes"
      },
      {
        "id": "monitorizacao",
        "title": "Monitorização Neurofisiológica",
        "description": "Potenciais evocados, EEG e monitorização multimodal. Em breve!",
        "thumbnail": "🔬",
        "link": "#",
        "tags": [
          "Em breve"
        ],
        "type": "resumo",
        "disabled": true
      }
    ]
  },
  "ventilacao-mecanica": {
    "id": "ventilacao-mecanica",
    "seo": {
      "title": "Ventilação Mecânica - Biblioteca de Anestesiologia",
      "description": "Ventilação Mecânica - Modos ventilatórios, ventilação protetora, manejo de SDRA e otimização da mecânica respiratória.",
      "keywords": "anestesiologia, ventilação mecânica, modos ventilatórios, SDRA, ventilação protetora, PEEP, driving pressure",
      "schema": {
        "name": "Ventilação Mecânica",
        "description": "Material educacional sobre ventilação mecânica"
      }
    },
    "header": {
      "navbarTitle": "💨 Ventilação Mecânica",
      "pageTitle": "Ventilação Mecânica",
      "pageSubtitle": "Modos ventilatórios, ventilação protetora, manejo de SDRA e otimização da mecânica respiratória no perioperatório."
    },
    "cards": [
      {
        "id": "resumo-modos",
        "title": "Resumo: Modos Ventilatórios",
        "description": "Modos volume-controlado, pressão-controlada, SIMV, PSV e modos avançados. Indicações e ajustes.",
        "thumbnail": "⚙️",
        "link": "resumos/vm-modos-ventilatorios.html",
        "tags": [
          "Modos",
          "PSV",
          "SIMV"
        ],
        "type": "resumo"
      },
      {
        "id": "resumo-protetora",
        "title": "Resumo: Ventilação Protetora",
        "description": "Estratégias de ventilação protetora, baixo volume corrente, driving pressure e prevenção de VILI.",
        "thumbnail": "🛡️",
        "link": "resumos/vm-ventilacao-protetora.html",
        "tags": [
          "Protetora",
          "VILI",
          "Driving Pressure"
        ],
        "type": "resumo"
      },
      {
        "id": "resumo-sdra",
        "title": "Resumo: SDRA",
        "description": "Síndrome do Desconforto Respiratório Agudo: fisiopatologia, classificação, ventilação e PEEP ideal.",
        "thumbnail": "🫁",
        "link": "resumos/vm-sdra.html",
        "tags": [
          "SDRA",
          "PEEP",
          "Recrutamento"
        ],
        "type": "resumo"
      },
      {
        "id": "flashcards",
        "title": "Flashcards de Revisão",
        "description": "Revisão rápida dos conceitos essenciais de ventilação mecânica e suporte respiratório.",
        "thumbnail": "🎴",
        "link": "flashcards/ventilacao-mecanica.html",
        "tags": [
          "Interativo",
          "Revisão"
        ],
        "type": "flashcard"
      },
      {
        "id": "questoes",
        "title": "Questões Comentadas",
        "description": "Quiz interativo com gabarito comentado sobre ventilação mecânica.",
        "thumbnail": "❓",
        "link": "questoes/ventilacao-mecanica.html",
        "tags": [
          "Interativo"
        ],
        "type": "questoes"
      },
      {
        "id": "calculadoras",
        "title": "Calculadoras Ventilatórias",
        "description": "Ferramentas para cálculo de parâmetros ventilatórios e ajustes. Em breve!",
        "thumbnail": "📊",
        "link": "#",
        "tags": [
          "Em breve"
        ],
        "type": "resumo",
        "disabled": true
      }
    ]
  },
  "geriatria": {
    "id": "geriatria",
    "seo": {
      "title": "Anestesia para Geriatria - Biblioteca de Anestesiologia",
      "description": "Anestesia para Geriatria - Manejo anestésico em pacientes geriátricos.",
      "keywords": "anestesiologia, geriatria, idoso, DCPO, fragilidade",
      "schema": {
        "name": "Anestesia para Geriatria",
        "description": "Manejo anestésico em geriatria"
      }
    },
    "header": {
      "navbarTitle": "🧓🏽 Anestesia para Geriatria",
      "pageTitle": "Anestesia para Geriatria",
      "pageSubtitle": "Recursos visuais e conteúdos científicos sobre manejo anestésico em pacientes geriátricos."
    },
    "cards": [
      {
        "id": "resumo-fisiologia",
        "title": "Fisiologia do Idoso",
        "description": "Principais alterações cardiovasculares, pulmonares e de farmacocinética que impactam o manejo anestésico no paciente geriátrico.",
        "thumbnail": "🧓",
        "link": "resumos/geriatria-fisiologia.html",
        "tags": [
          "Fragilidade",
          "Farmacologia",
          "Manejo Perioperatório"
        ],
        "type": "resumo"
      },
      {
        "id": "flashcards",
        "title": "Flashcards de Revisão",
        "description": "Consolide os pilares da geriatria cirúrgica com nosso sistema de repetição espaçada.",
        "thumbnail": "🎴",
        "link": "flashcards/geriatria.html",
        "tags": [
          "Interativo",
          "Revisão"
        ],
        "type": "flashcard"
      },
      {
        "id": "questoes",
        "title": "Questões Comentadas",
        "description": "Quiz interativo com gabarito comentado sobre geriatria e cuidados perioperatórios do idoso.",
        "thumbnail": "❓",
        "link": "questoes/geriatria.html",
        "tags": [
          "Interativo"
        ],
        "type": "questoes"
      }
    ]
  },
  "ambulatorial": {
    "id": "ambulatorial",
    "seo": {
      "title": "Anestesia Ambulatorial - Biblioteca de Anestesiologia",
      "description": "Anestesia Ambulatorial - Protocolos para procedimentos ambulatoriais, fast-track e critérios de alta segura.",
      "keywords": "anestesiologia, ambulatorial, fast-track, critérios de alta, day surgery, procedimentos ambulatoriais",
      "schema": {
        "name": "Anestesia Ambulatorial",
        "description": "Material educacional sobre anestesia em procedimentos ambulatoriais"
      }
    },
    "header": {
      "navbarTitle": "🚶 Anestesia Ambulatorial",
      "pageTitle": "Anestesia Ambulatorial",
      "pageSubtitle": "Protocolos para procedimentos ambulatoriais, estratégias de fast-track, controle de PONV e critérios de alta hospitalar segura."
    },
    "cards": [
      {
        "id": "resumo-selecao",
        "title": "Resumo: Seleção de Pacientes",
        "description": "Critérios para cirurgia ambulatorial, avaliação pré-operatória e identificação de pacientes de risco.",
        "thumbnail": "✅",
        "link": "resumos/ambulatorial-selecao-pacientes.html",
        "tags": [
          "Seleção",
          "Critérios",
          "Avaliação"
        ],
        "type": "resumo"
      },
      {
        "id": "resumo-fast-track",
        "title": "Resumo: Fast-Track",
        "description": "Protocolo de recuperação rápida, anestésicos de curta duração e estratégias para alta precoce.",
        "thumbnail": "⚡",
        "link": "resumos/ambulatorial-fast-track.html",
        "tags": [
          "Fast-Track",
          "Recuperação",
          "Alta Precoce"
        ],
        "type": "resumo"
      },
      {
        "id": "resumo-alta",
        "title": "Resumo: Critérios de Alta",
        "description": "Escores de alta (Aldrete, PADSS), orientações pós-alta e manejo de complicações domiciliares.",
        "thumbnail": "🏠",
        "link": "resumos/ambulatorial-criterios-alta.html",
        "tags": [
          "Alta",
          "Aldrete",
          "Segurança"
        ],
        "type": "resumo"
      },
      {
        "id": "flashcards",
        "title": "Flashcards de Revisão",
        "description": "Revisão rápida dos conceitos essenciais de anestesia ambulatorial.",
        "thumbnail": "🎴",
        "link": "flashcards/ambulatorial.html",
        "tags": [
          "Interativo",
          "Revisão"
        ],
        "type": "flashcard"
      },
      {
        "id": "questoes",
        "title": "Questões Comentadas",
        "description": "Quiz interativo com gabarito comentado sobre anestesia ambulatorial.",
        "thumbnail": "❓",
        "link": "questoes/ambulatorial.html",
        "tags": [
          "Interativo"
        ],
        "type": "questoes"
      },
      {
        "id": "resumo-ponv",
        "title": "Controle de PONV",
        "description": "Protocolos de prevenção e tratamento de náuseas e vômitos pós-operatórios. Em breve!",
        "thumbnail": "🤢",
        "link": "#",
        "tags": [
          "Em breve"
        ],
        "type": "resumo",
        "disabled": true
      }
    ]
  },
  "cardiaca": {
    "id": "cardiaca",
    "seo": {
      "title": "Cirurgia Cardíaca - Biblioteca de Anestesiologia",
      "description": "Anestesia para Cirurgia Cardíaca - Resumos, flashcards e questões comentadas sobre CEC, revascularização miocárdica, valvopatias e mais.",
      "keywords": "anestesiologia, cirurgia cardíaca, CEC, revascularização, valvopatias, anestesia cardiovascular",
      "schema": {
        "name": "Anestesia para Cirurgia Cardíaca",
        "description": "Material Educacional para Ciruriga Cardiaca"
      }
    },
    "header": {
      "navbarTitle": "❤️ Cirurgia Cardíaca",
      "pageTitle": "Anestesia para Cirurgia Cardiaca",
      "pageSubtitle": "Material completo sobre anestesia em procedimentos cardiovasculares: CEC, revascularização miocárdica, valvopatias e monitorização hemodinâmica."
    },
    "cards": [
      {
        "id": "resumo-cec",
        "title": "Resumo: CEC",
        "description": "Circulação extracorpórea, anticoagulação, manejo hemodinâmico e complicações perioperatórias.",
        "thumbnail": "🔄",
        "link": "resumos/cardiaca-cec.html",
        "tags": [
          "Tag1",
          "Tag2",
          "Tag3"
        ],
        "type": "resumo"
      },
      {
        "id": "resumo-revasc",
        "title": "Resumo: Revascularização",
        "description": "Anestesia para cirurgia de revascularização miocárdica com e sem CEC, proteção miocárdica e Fast-Track.",
        "thumbnail": "📋",
        "link": "resumos/cardiaca-revasc.html",
        "tags": [
          "Resumo",
          "RM",
          "20 min"
        ],
        "type": "resumo"
      },
      {
        "id": "resumo-valvulas",
        "title": "Resumo: Valvopatias",
        "description": "Anestesia para cirurgia valvar: troca e plastia aórtica/mitral, ETE transoperatório e manejo hemodinâmico específico.",
        "thumbnail": "📋",
        "link": "resumos/cardiaca-valvulas.html",
        "tags": [
          "Resumo",
          "Valvas",
          "25 min"
        ],
        "type": "resumo"
      },
      {
        "id": "questoes",
        "title": "Questões Comentadas",
        "description": "Questões de múltipla escolha com explicações detalhadas, baseadas em provas de residência e concursos.",
        "thumbnail": "❓",
        "link": "questoes/cardiaca.html",
        "tags": [
          "Questões",
          "30+ itens",
          "Explicações"
        ],
        "type": "questoes"
      },
      {
        "id": "flashcards",
        "title": "Flashcards",
        "description": "Cartões de revisão espaçada para fixar conceitos-chave de anestesia cardiovascular. Sistema de repetição inteligente.",
        "thumbnail": "🎴",
        "link": "flashcards/cardiaca.html",
        "tags": [
          "Interativo",
          "50+ cards",
          "Revisão"
        ],
        "type": "flashcard"
      },
      {
        "id": "videos",
        "title": "Videoaulas",
        "description": "Vídeos explicativos com casos clínicos reais e demonstrações práticas. Em breve!",
        "thumbnail": "🎥",
        "link": "#",
        "tags": [
          "Em breve"
        ],
        "type": "video",
        "disabled": true
      }
    ]
  },
  "transplante": {
    "id": "transplante",
    "seo": {
      "title": "Transplante Hepático - Biblioteca de Anestesiologia",
      "description": "Anestesia para Transplante Hepático - Resumos, flashcards e questões sobre manejo anestésico, coagulopatia, reperfusão e complicações perioperatórias.",
      "keywords": "anestesiologia, transplante hepático, MELD, coagulopatia, síndrome pós-reperfusão, cirrose",
      "schema": {
        "name": "Anestesia para Transplante Hepático",
        "description": "Material educacional sobre anestesia em transplante de fígado"
      }
    },
    "header": {
      "navbarTitle": "🏥 Transplante Hepático",
      "pageTitle": "Anestesia para Transplante Hepático",
      "pageSubtitle": "Guia completo sobre manejo anestésico no transplante de fígado: avaliação pré-operatória, fases cirúrgicas, coagulopatia e síndrome pós-reperfusão."
    },
    "cards": [
      {
        "id": "resumo-geral",
        "title": "Resumo: Visão Geral",
        "description": "Introdução ao transplante hepático: indicações, contraindicações, score MELD, fases cirúrgicas e manejo básico.",
        "thumbnail": "📋",
        "link": "resumos/transplante-geral.html",
        "tags": [
          "Resumo",
          "Geral",
          "20 min"
        ],
        "type": "resumo"
      },
      {
        "id": "resumo-coagulopatia",
        "title": "Resumo: Coagulopatia",
        "description": "Manejo da coagulopatia complexa: tromboelastografia, transfusão maciça e estratégias hemostáticas.",
        "thumbnail": "🩸",
        "link": "resumos/transplante-coagulopatia.html",
        "tags": [
          "Resumo",
          "TEG",
          "25 min"
        ],
        "type": "resumo"
      },
      {
        "id": "resumo-imunossupressao",
        "title": "Resumo: Imunossupressão",
        "description": "Protocolos de imunossupressão, interações anestésicas, rejeição aguda e complicações imunológicas.",
        "thumbnail": "💊",
        "link": "resumos/transplante-imunossupressao.html",
        "tags": [
          "Resumo",
          "Farmacologia",
          "15 min"
        ],
        "type": "resumo"
      },
      {
        "id": "flashcards",
        "title": "Flashcards",
        "description": "Cartões de memorização para fixar scores, fases cirúrgicas, drogas e complicações. Sistema de repetição espaçada.",
        "thumbnail": "🎴",
        "link": "flashcards/transplante.html",
        "tags": [
          "Interativo",
          "40+ cards",
          "Revisão"
        ],
        "type": "flashcard"
      },
      {
        "id": "questoes",
        "title": "Questões Comentadas",
        "description": "Banco de questões com gabarito comentado, baseadas em provas de residência, TEA e cases reais.",
        "thumbnail": "❓",
        "link": "questoes/transplante.html",
        "tags": [
          "Questões",
          "25+ itens",
          "Comentadas"
        ],
        "type": "questoes"
      },
      {
        "id": "casos-clinicos",
        "title": "Casos Clínicos",
        "description": "Discussão de casos reais com dilemas diagnósticos e terapêuticos, incluindo complicações raras. Em breve!",
        "thumbnail": "📖",
        "link": "#",
        "tags": [
          "Em breve"
        ],
        "type": "resumo",
        "disabled": true
      }
    ]
  },
  "pediatria": {
    "id": "pediatria",
    "seo": {
      "title": "Anestesiologia Pediátrica - Biblioteca de Anestesiologia",
      "description": "Anestesiologia Pediátrica - Particularidades do manejo anestésico em diferentes faixas etárias, farmacologia e fisiologia pediátrica.",
      "keywords": "anestesiologia, pediatria, neonatal, lactente, criança, farmacologia pediátrica, via aérea pediátrica",
      "schema": {
        "name": "Anestesiologia Pediátrica",
        "description": "Material educacional sobre anestesia em pacientes pediátricos"
      }
    },
    "header": {
      "navbarTitle": "👶 Anestesiologia Pediátrica",
      "pageTitle": "Anestesiologia Pediátrica",
      "pageSubtitle": "Particularidades do manejo anestésico em diferentes faixas etárias: neonatos, lactentes e crianças. Farmacologia e fisiologia pediátrica."
    },
    "cards": [
      {
        "id": "resumo-fisiologia",
        "title": "Resumo: Fisiologia Pediátrica",
        "description": "Diferenças anatômicas e fisiológicas entre neonatos, lactentes e crianças. Sistema respiratório, cardiovascular e nervoso.",
        "thumbnail": "🫁",
        "link": "resumos/pediatria-fisiologia.html",
        "tags": [
          "Fisiologia",
          "Anatomia",
          "Desenvolvimento"
        ],
        "type": "resumo"
      },
      {
        "id": "resumo-farmacologia",
        "title": "Resumo: Farmacologia Pediátrica",
        "description": "Farmacocinética e farmacodinâmica em pediatria. Doses ajustadas por peso e idade, anestésicos inalatórios e venosos.",
        "thumbnail": "💊",
        "link": "resumos/pediatria-farmacologia.html",
        "tags": [
          "Doses",
          "Fármacos",
          "Metabolismo"
        ],
        "type": "resumo"
      },
      {
        "id": "resumo-via-aerea",
        "title": "Resumo: Via Aérea Pediátrica",
        "description": "Manejo da via aérea difícil em pediatria, tamanho de tubos, laringoscopia e dispositivos supraglóticos.",
        "thumbnail": "🫀",
        "link": "resumos/pediatria-via-aerea.html",
        "tags": [
          "Via Aérea",
          "Intubação",
          "Técnicas"
        ],
        "type": "resumo"
      },
      {
        "id": "flashcards",
        "title": "Flashcards de Revisão",
        "description": "Revisão rápida dos conceitos essenciais de anestesia pediátrica com sistema de repetição espaçada.",
        "thumbnail": "🎴",
        "link": "flashcards/pediatria.html",
        "tags": [
          "Interativo",
          "Revisão"
        ],
        "type": "flashcard"
      },
      {
        "id": "questoes",
        "title": "Questões Comentadas",
        "description": "Quiz interativo com gabarito comentado sobre anestesiologia pediátrica.",
        "thumbnail": "❓",
        "link": "questoes/pediatria.html",
        "tags": [
          "Interativo"
        ],
        "type": "questoes"
      },
      {
        "id": "casos-clinicos",
        "title": "Casos Clínicos",
        "description": "Discussão de casos pediátricos complexos com dilemas clínicos. Em breve!",
        "thumbnail": "🎥",
        "link": "#",
        "tags": [
          "Em breve"
        ],
        "type": "resumo",
        "disabled": true
      }
    ]
  }
};