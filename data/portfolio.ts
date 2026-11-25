import {
  AchievementItem,
  ExperienceItem,
  LocalizedText,
  Post,
  Project,
  SkillGroup,
  StatItem,
} from "@/interfaces/post";

export const profile = {
  name: "Tu Bagus Dwi Fikri",
  shortName: "Tu Bagus",
  headline: {
    id: "Software Engineer · IT Programmer · IoT Engineer",
    en: "Software Engineer · IT Programmer · IoT Engineer",
  } satisfies LocalizedText,
  availability: {
    id: "Terbuka untuk Kolaborasi & Proyek",
    en: "Open for Collaboration & Projects",
  } satisfies LocalizedText,
  location: "Pekanbaru, Indonesia",
  phone: "+62 822-8410-5218",
  whatsappUrl: "https://wa.me/6282284105218",
  githubUsername: "Tugood7",
  githubUrl: "https://github.com/Tugood7",
  linkedinName: "Tu Bagus Dwi Fikri",
  linkedinUrl: "https://www.linkedin.com/in/tu-bagus-dwi-fikri-27a3a0233",
  instagramHandle: "@tu__good",
  instagramUrl: "https://www.instagram.com/tu__good/?hl=en",
  facebookHandle: "tubagus.d.fikri",
  facebookUrl: "https://www.facebook.com/tubagus.d.fikri/",
  threadsHandle: "@tu__good",
  threadsUrl: "https://www.threads.com/@tu__good",
  email: "tubagusdwifikri@gmail.com",
  summary: {
    id: "Penggemar teknologi yang berfokus pada Internet of Things (IoT), Pengembangan Web, dan Kecerdasan Buatan (AI). Berpengalaman merancang solusi inovatif lintas disiplin—mulai dari perangkat keras IoT peraih Gold Award IREX 2024 di Malaysia, pengembangan aplikasi web full-stack, hingga sistem analisis data pasien berbasis Deep Learning yang terdaftar HKI.",
    en: "Technology enthusiast specializing in Internet of Things (IoT), Web Development, and Artificial Intelligence. Experienced in crafting cross-disciplinary solutions—from an IREX 2024 Gold Award-winning IoT innovation in Malaysia and full-stack web applications to a registered IP Deep Learning system for patient anomaly analysis.",
  } satisfies LocalizedText,
  aboutExtended: {
    id: "Lulusan S1 Teknik Informatika Universitas Islam Riau (IPK 3.79/4.00) yang menggabungkan ketajaman rekayasa perangkat lunak, implementasi perangkat keras mikrokontroler, dan model AI/ML. Selain aktif sebagai IT Developer & Support Specialist, saya juga mengajar sebagai instruktur IoT serta aktif membimbing mahasiswa dan pelajar dalam bidang robotika dan pemrograman.",
    en: "Bachelor of Computer Science graduate from Universitas Islam Riau (GPA 3.79/4.00) combining software engineering rigor, embedded hardware implementation, and AI/ML development. Alongside my full-time role as an IT Developer & Support Specialist, I serve as a freelance IoT instructor mentoring aspiring engineers in robotics, microcontrollers, and cloud connectivity.",
  } satisfies LocalizedText,
  stats: [
    {
      id: "gpa-uir",
      value: "3.79",
      label: { id: "IPK / 4.00 (S1 Informatika)", en: "GPA / 4.00 (Computer Science)" },
      badge: { id: "Pendidikan Sarjana", en: "Bachelor's Degree" },
      title: {
        id: "Sarjana Teknik Informatika",
        en: "Bachelor of Computer Science",
      },
      issuer: "Universitas Islam Riau — Pekanbaru",
      period: "2020 – 2024",
      accent: "emerald",
      description: {
        id: "Lulus dengan predikat sangat memuaskan (IPK 3.79 dari 4.00) dengan fokus riset pada Internet of Things, sistem tertanam, dan pengembangan perangkat lunak.",
        en: "Graduated with honors (GPA 3.79 / 4.00), focusing on Internet of Things, embedded systems, and software engineering.",
      },
      highlights: {
        id: [
          'Tugas Akhir: "Monitoring Kualitas Udara dan Emisi Asap di Halte Bus Perkotaan Menggunakan Teknologi IoT dengan Sensor MQ-135 dan MQ-2".',
          "Inovasi riset dipublikasikan di portal resmi Universitas Islam Riau (uir.ac.id) dan diliput media GoRiau.com.",
          "Aktif sebagai Asisten Dosen Praktikum Lab Informatika dan Ketua Organisasi Riset Robotika & Wireless (RAWR UIR).",
        ],
        en: [
          'Final Thesis: "Air Quality and Smoke Emission Monitoring at Urban Bus Stops Using IoT Technology with MQ-135 and MQ-2 Sensors".',
          "Featured on Universitas Islam Riau's official website (uir.ac.id) and GoRiau.com for innovative environmental research.",
          "Served as Practicum Teaching Assistant and Lead of Robotic Automation & Wireless Research (RAWR UIR).",
        ],
      },
      certificateImages: [
        {
          src: "/certificates/wisuda-uir-2024.jpg",
          label: { id: "Wisuda UIR (25 Juni 2024)", en: "UIR Graduation (June 25, 2024)" },
        },
      ],
      certificateNote: {
        id: "Wisuda Sarjana Periode II Tahun 2024 (25 Juni 2024) · Universitas Islam Riau",
        en: "Bachelor's Graduation Ceremony Period II 2024 (June 25, 2024) · UIR",
      },
      actionHref: "/about",
      actionLabel: { id: "Lihat Riwayat Pendidikan & Pengalaman", en: "View Full Education & Experience" },
    },
    {
      id: "gold-irex",
      value: "Gold",
      label: { id: "IREX 2024, UiTM Malaysia", en: "IREX 2024, UiTM Malaysia" },
      badge: { id: "Penghargaan Internasional", en: "International Gold Award" },
      title: {
        id: "Gold Award — International Industrial Revolution 4.0 Exposition (IREX 2024)",
        en: "Gold Award — International Industrial Revolution 4.0 Exposition (IREX 2024)",
      },
      issuer: "Universiti Teknologi MARA (UiTM), Kedah Branch, Malaysia",
      period: "20–21 Mei 2024",
      accent: "amber",
      description: {
        id: 'Meraih Medali Emas (Gold Award) pada ajang International Industrial Revolution 4.0 Exposition (IREX) 2024 di Universiti Teknologi MARA (UiTM), Kedah Branch, Malaysia, melalui proyek "Monitoring Air Quality and Smoke Emissions Using Internet of Things Technology at Bus Stop in Urban Areas Using MQ-135 and MQ-2 Sensors".',
        en: 'Awarded the Gold Medal at the International Industrial Revolution 4.0 Exposition (IREX 2024) at Universiti Teknologi MARA (UiTM), Kedah Branch, Malaysia, for "Monitoring Air Quality and Smoke Emissions Using Internet of Things Technology at Bus Stop in Urban Areas Using MQ-135 and MQ-2 Sensors".',
      },
      highlights: {
        id: [
          "Dianugerahkan kepada tim: Evizal Abdul Kadir, Tu Bagus Dwi Fikri, dan Sri Listia Rosa.",
          "Diselenggarakan pada 20–21 Mei 2024 di College of Computing, Informatics and Mathematics, UiTM Kedah Branch.",
          "Ditandatangani resmi oleh Prof. Dr. Roshima Haji Said (Rector, Universiti Teknologi MARA, Kedah Branch).",
        ],
        en: [
          "Presented to team members: Evizal Abdul Kadir, Tu Bagus Dwi Fikri, and Sri Listia Rosa.",
          "Held on 20–21 May 2024 by the College of Computing, Informatics and Mathematics, UiTM Kedah Branch.",
          "Officially certified by Prof. Dr. Roshima Haji Said (Rector, Universiti Teknologi MARA, Kedah Branch).",
        ],
      },
      certificateImages: [
        {
          src: "/certificates/irex-2024-gold.jpg",
          label: { id: "Sertifikat Gold Award", en: "Gold Award Certificate" },
        },
        {
          src: "/certificates/irex-2024-award-stage.jpg",
          label: { id: "Panggung Penghargaan", en: "Award Ceremony" },
        },
        {
          src: "/certificates/irex-2024-presentation.jpg",
          label: { id: "Presentasi Booth IRX066", en: "Booth IRX066 Presentation" },
        },
        {
          src: "/certificates/irex-2024-participation.jpg",
          label: { id: "Sertifikat Partisipasi", en: "Participation Certificate" },
        },
      ],
      certificateUrl: "/certificates/irex-2024-gold.pdf",
      certificateNote: {
        id: "Gold Award & Certificate of Participation · IREX 2024 UiTM Kedah, Malaysia",
        en: "Gold Award & Certificate of Participation · IREX 2024 UiTM Kedah, Malaysia",
      },
      actionHref: "/projects",
      actionLabel: { id: "Lihat Proyek IoT Unggulan", en: "Explore IoT Projects" },
    },
    {
      id: "hki-ai",
      value: "Paten",
      label: { id: "Paten & HKI (IoT · AI)", en: "Patent & Copyright (IoT · AI)" },
      badge: { id: "Paten Sederhana & HKI", en: "Granted Patent & Copyright IP" },
      title: {
        id: "Sertifikat Paten Sederhana (IDS000014793) & Hak Cipta (000555693)",
        en: "Granted Utility Patent (IDS000014793) & Copyright IP (000555693)",
      },
      issuer: "Kementerian Hukum RI · Direktorat Jenderal Kekayaan Intelektual (DJKI)",
      period: "2023 – 2026",
      accent: "violet",
      description: {
        id: 'Memiliki dua kekayaan intelektual resmi tingkat nasional di bidang kesehatan cerdas: Paten Sederhana "Sistem Pemantauan Kesehatan Pasien Dengan Multi Sensor Berbasis Teknologi IoT dan Cloud Computing" (Nomor Paten IDS000014793, diberikan 6 Agustus 2026) serta Surat Pencatatan Ciptaan "Algoritma Analisa Ketidaknormalan Data Pasien Menggunakan Teknologi Deep Learning Pada Cloud Computing" (Nomor Pencatatan 000555693).',
        en: 'Co-inventor and co-creator of two official Indonesian Intellectual Properties in smart healthcare: Granted Utility Patent "Multi-Sensor Patient Health Monitoring System Based on IoT and Cloud Computing" (Patent No. IDS000014793, granted Aug 6, 2026) and Registered Copyright "Deep Learning Patient Anomaly Detection Algorithm on Cloud Computing" (Reg. No. 000555693).',
      },
      highlights: {
        id: [
          "Paten Sederhana No. IDS000014793 (Pemegang: Universitas Islam Riau · Inventor: Evizal, Apri Siswanto, Sri Listia Rosa, Tu Bagus Dwi Fikri) — pelindungan 10 tahun sejak 10 Desember 2024.",
          "Memantau 5 parameter vital pasien (suhu tubuh, tekanan darah sistolik & diastolik, detak jantung ECG, dan lokasi) via ESP32, jaringan mesh Wi-Fi 802.11ax, serta analitik Cloud/Fog Computing.",
          "Surat Pencatatan Ciptaan No. 000555693 (Permohonan EC002023122738, 1 Desember 2023) untuk Program Komputer Algoritma Deep Learning Deteksi Anomali Pasien — pelindungan 50 tahun.",
        ],
        en: [
          "Granted Utility Patent No. IDS000014793 (Holder: Universitas Islam Riau · Inventors: Evizal, Apri Siswanto, Sri Listia Rosa, Tu Bagus Dwi Fikri) — 10-year protection from Dec 10, 2024.",
          "Monitors 5 vital patient parameters (temperature, systolic & diastolic blood pressure, ECG heart rate, location) via ESP32, Wi-Fi 802.11ax mesh networking, and Cloud/Fog analytics.",
          "Registered Copyright No. 000555693 (App. EC002023122738, Dec 1, 2023) for Deep Learning Patient Anomaly Detection Software — 50-year protection.",
        ],
      },
      certificateImages: [
        {
          src: "/certificates/paten-ids000014793.jpg",
          label: { id: "Sertifikat Paten (IDS000014793)", en: "Patent Certificate (IDS000014793)" },
        },
        {
          src: "/certificates/hki-000555693.jpg",
          label: { id: "Hak Cipta (000555693)", en: "Copyright IP (000555693)" },
        },
        {
          src: "/certificates/paten-prototipe.jpg",
          label: { id: "Prototipe & Arsitektur", en: "Prototype & Architecture" },
        },
        {
          src: "/certificates/paten-dashboard.jpg",
          label: { id: "Dashboard Medis Cloud", en: "Cloud Medical Dashboard" },
        },
      ],
      certificateUrl: "/certificates/paten-ids000014793.pdf",
      certificateNote: {
        id: "Paten Sederhana No. IDS000014793 & Hak Cipta No. 000555693 · DJKI",
        en: "Patent No. IDS000014793 & Copyright No. 000555693 · DGIP Indonesia",
      },
      actionHref: "/blog/deep-learning-deteksi-anomali-data-pasien-cloud",
      actionLabel: { id: "Baca Penjelasan Teknisnya", en: "Read Technical Breakdown" },
    },
    {
      id: "projects-count",
      value: "20+",
      label: { id: "Proyek IoT, Web & AI", en: "IoT, Web & AI Projects" },
      badge: { id: "Portofolio Karya", en: "Shipped Engineering Work" },
      title: {
        id: "20+ Proyek Lintas Disiplin: IoT, Full-Stack Web & AI",
        en: "20+ Cross-Disciplinary Projects: IoT, Full-Stack Web & AI",
      },
      issuer: "Hardware Prototypes · Production Web Apps · AI Research",
      period: "2022 – 2026",
      accent: "sky",
      description: {
        id: "Mencakup sistem produksi live seperti e-commerce Bumbuket.pku, sistem pelaporan teknisi PKE Laravel, hingga belasan prototipe perangkat keras IoT biomedis, keamanan ESP32-CAM, robotika, dan sistem peringatan dini banjir Fuzzy Logic.",
        en: "Spans live production web apps like Bumbuket.pku e-commerce and PKE Laravel maintenance portal alongside biomedical IoT prototypes, ESP32-CAM smart security, servo robotics, and Fuzzy Logic flood prediction.",
      },
      highlights: {
        id: [
          "Web & Full-Stack: Bumbuket.pku (Next.js + Supabase + Midtrans), PKE Report (Laravel), Rumah Laundry, Administrasi Sekolah, Wireless UIR.",
          "IoT & Robotika: Monitoring Kualitas Udara Halte Bus, Arm Robotic ESP32, IoT Blood Check, Smart Baby Scale, Smart Door Face Recognition, Smart Parking, TuCalc TFT.",
          "AI & Sistem Cerdas: Deteksi Anomali Pasien Deep Learning (HKI) & Prediksi Banjir Fuzzy Logic.",
        ],
        en: [
          "Web & Full-Stack: Bumbuket.pku (Next.js + Supabase + Midtrans), PKE Report (Laravel), Rumah Laundry, School Admin, Wireless UIR.",
          "IoT & Robotics: Urban Air Quality Monitor, ESP32 Robotic Arm, IoT Blood Check, Smart Baby Scale, ESP32-CAM Smart Door, Smart Parking, TuCalc TFT.",
          "AI & Intelligent Systems: Cloud Deep Learning Patient Anomaly Detection (HKI) & Fuzzy Logic Flood Prediction.",
        ],
      },
      actionHref: "/projects",
      actionLabel: { id: "Buka Galeri Semua Proyek", en: "Open Full Projects Gallery" },
    },
  ] satisfies StatItem[],
};

export const education = {
  institution: "Universitas Islam Riau - Pekanbaru",
  degree: {
    id: "Sarjana Teknik Informatika",
    en: "Bachelor of Computer Science",
  } satisfies LocalizedText,
  gpa: "3.79 / 4.00",
  period: {
    id: "Oktober 2020 – Maret 2024",
    en: "October 2020 – March 2024",
  } satisfies LocalizedText,
  finalProject: {
    id: "Monitoring Kualitas Udara dan Emisi Asap di Halte Bus Perkotaan Menggunakan Teknologi Internet of Things dengan Sensor MQ-135 dan MQ-2",
    en: "Air Quality and Smoke Emission Monitoring at Urban Bus Stops Using Internet of Things Technology with MQ-135 and MQ-2 Sensors",
  } satisfies LocalizedText,
  mediaNote: {
    id: "Dipublikasikan di situs resmi Universitas Islam Riau (uir.ac.id) dan media GoRiau.com atas inovasi risetnya.",
    en: "Featured on Universitas Islam Riau (uir.ac.id) and GoRiau.com for innovative environmental research.",
  } satisfies LocalizedText,
};

export const achievements: AchievementItem[] = [
  {
    id: "irex-2024",
    title: {
      id: "Gold Award — International Industrial Revolution 4.0 Exposition (IREX)",
      en: "Gold Award — International Industrial Revolution 4.0 Exposition (IREX)",
    },
    issuer: "Universiti Teknologi Mara (UiTM), Malaysia",
    year: "2024",
    category: { id: "Penghargaan Internasional", en: "International Award" },
    description: {
      id: "Meraih medali emas pada kompetisi inovasi Industri 4.0 tingkat internasional melalui solusi perangkat keras & sistem cerdas berbasis IoT.",
      en: "Awarded the Gold Medal at an international Industry 4.0 exposition for innovative IoT hardware and smart system design.",
    },
  },
  {
    id: "paten-ids000014793",
    title: {
      id: "Sertifikat Paten Sederhana (No. IDS000014793) — Sistem Pemantauan Kesehatan Pasien IoT & Cloud",
      en: "Granted Utility Patent (No. IDS000014793) — Multi-Sensor IoT & Cloud Patient Health Monitoring",
    },
    issuer: "Kementerian Hukum RI · Direktorat Jenderal Kekayaan Intelektual (DJKI)",
    year: "2026",
    category: { id: "Paten Nasional", en: "Granted Patent" },
    description: {
      id: 'Paten Sederhana resmi (Nomor Paten IDS000014793, diberikan 6 Agustus 2026) atas invensi "Sistem Pemantauan Kesehatan Pasien Dengan Multi Sensor Berbasis Teknologi Internet of Things dan Cloud Computing" bersama tim inventor Universitas Islam Riau.',
      en: 'Officially granted Indonesian Utility Patent (No. IDS000014793, granted Aug 6, 2026) for "Multi-Sensor Patient Health Monitoring System Based on Internet of Things and Cloud Computing" with Universitas Islam Riau.',
    },
  },
  {
    id: "hki-deep-learning",
    title: {
      id: "Surat Pencatatan Ciptaan (No. 000555693) — Deep Learning Analisis Data Pasien",
      en: "Registered Copyright (No. 000555693) — Deep Learning Patient Anomaly Detection",
    },
    issuer: "Kementerian Hukum dan HAM RI · DJKI",
    year: "2023",
    category: { id: "Hak Cipta (HKI)", en: "Copyright IP (HKI)" },
    description: {
      id: 'Tercatat resmi (No. Pencatatan 000555693, Permohonan EC002023122738) atas karya Program Komputer "Algoritma Analisa Ketidaknormalan Data Pasien Menggunakan Teknologi Deep Learning Pada Cloud Computing".',
      en: 'Officially registered (Reg. No. 000555693, App. EC002023122738) for the computer program "Algoritma Analisa Ketidaknormalan Data Pasien Menggunakan Teknologi Deep Learning Pada Cloud Computing".',
    },
  },
  {
    id: "best-iot-myskill",
    title: {
      id: "Best IoT Project Award — MSIB Independent Study",
      en: "Best IoT Project Award — MSIB Independent Study",
    },
    issuer: "PT. Lini Muda Inspirasi Negeri (MySkill)",
    year: "2023",
    category: { id: "Penghargaan Proyek", en: "Project Award" },
    description: {
      id: "Dinobatkan sebagai proyek IoT terbaik atas kolaborasi tim, arsitektur mikrokontroler C++, dan pemecahan masalah teknis.",
      en: "Recognized as the Best IoT Project for team collaboration, C++ microcontroller architecture, and technical problem-solving.",
    },
  },
  {
    id: "bnsp-operator",
    title: {
      id: "Sertifikasi Kompetensi BNSP — Computer Operator",
      en: "BNSP National Certification — Computer Operator",
    },
    issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
    year: "2023",
    category: { id: "Sertifikasi Nasional", en: "National Certification" },
    description: {
      id: "Sertifikasi profesi nasional untuk kompetensi pengoperasian dan tata kelola sistem komputer.",
      en: "National professional competency certification in computer systems operation and management.",
    },
  },
  {
    id: "icprom-2023",
    title: {
      id: "Peserta — International Competitive Programming & Multimedia (i-CPROM)",
      en: "Participant — International Competitive Programming & Multimedia (i-CPROM)",
    },
    issuer: "i-CPROM 2023",
    year: "2023",
    category: { id: "Kompetisi Internasional", en: "International Competition" },
    description: {
      id: "Berpartisipasi dalam kompetisi pemrograman kompetitif dan multimedia tingkat internasional.",
      en: "Competed in an international competitive programming and multimedia competition.",
    },
  },
];

export const skillGroups: SkillGroup[] = [
  {
    id: "languages",
    title: { id: "Bahasa Pemrograman", en: "Programming Languages" },
    skills: ["Python", "C++", "JavaScript", "TypeScript", "PHP", "HTML / CSS"],
  },
  {
    id: "frameworks",
    title: { id: "Framework & Web", en: "Frameworks & Web" },
    skills: [
      "Next.js",
      "React",
      "Vue.js",
      "Laravel",
      "CodeIgniter",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    id: "iot",
    title: { id: "IoT & Perangkat Keras", en: "IoT & Hardware" },
    skills: [
      "Arduino",
      "ESP32",
      "ESP8266",
      "Raspberry Pi",
      "MQTT",
      "HTTP",
      "WiFi",
      "Sensors & Actuators",
    ],
  },
  {
    id: "databases-devops",
    title: { id: "Database & DevOps", en: "Databases & DevOps" },
    skills: [
      "Supabase",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Docker",
      "Git",
      "GitHub",
      "Postman",
      "Jupyter Notebook",
    ],
  },
  {
    id: "iot-tools",
    title: { id: "Tools Embedded & Simulasi", en: "Embedded & Simulation Tools" },
    skills: [
      "PlatformIO",
      "Arduino IDE",
      "MQTTX",
      "Fritzing",
      "Wokwi",
      "Tinkercad",
      "VS Code",
    ],
  },
  {
    id: "professional",
    title: { id: "Kolaborasi & Produktivitas", en: "Collaboration & Productivity" },
    skills: ["Jira", "Trello", "Google Workspace", "Microsoft Office", "LibreOffice"],
  },
];

export const softSkills = {
  id: [
    "Public Speaking",
    "Kepemimpinan",
    "Manajemen Waktu",
    "Kolaborasi Tim",
    "Perbaikan Proses",
    "Pemecahan Masalah",
    "Berpikir Kritis",
  ],
  en: [
    "Public Speaking",
    "Leadership",
    "Time Management",
    "Team Collaboration",
    "Process Improvement",
    "Problem Solving",
    "Critical Thinking",
  ],
};

export const languagesSpoken = [
  {
    name: { id: "Bahasa Indonesia", en: "Indonesian" },
    level: { id: "Penutur Asli (Native)", en: "Native" },
  },
  {
    name: { id: "Bahasa Inggris", en: "English" },
    level: {
      id: "Profesional (TOEFL ITP)",
      en: "Professional Working Proficiency (TOEFL ITP)",
    },
  },
];

export const experiences: ExperienceItem[] = [
  {
    id: "uir-it-dev",
    role: {
      id: "IT Developer & Support Specialist",
      en: "IT Developer & Support Specialist",
    },
    organization: "Universitas Islam Riau",
    type: { id: "Penuh Waktu", en: "Full Time" },
    period: { id: "Januari 2025 – Sekarang", en: "January 2025 – Present" },
    current: true,
    points: {
      id: [
        "Memberikan dukungan teknis responsif untuk sistem komputer, perangkat laboratorium akademik, dan peralatan berbasis IoT.",
        "Mendiagnosis dan menyelesaikan gangguan perangkat keras, error perangkat lunak, serta konektivitas jaringan secara efektif.",
        "Menjalankan pemeliharaan preventif sistematis guna menjaga keandalan sistem dan meminimalkan downtime laboratorium.",
        "Mengembangkan dokumentasi dan aplikasi pelaporan pemeliharaan teknis secara komprehensif untuk kebutuhan institusi.",
      ],
      en: [
        "Provide responsive technical support for computer systems, academic laboratory devices, and IoT-based equipment.",
        "Diagnose and resolve hardware malfunctions, software errors, and network connectivity issues effectively.",
        "Perform systematic preventive maintenance to ensure system reliability and minimize laboratory downtime.",
        "Built institutional documentation and reporting workflows to track technical issues, maintenance, and resolutions.",
      ],
    },
  },
  {
    id: "smart-bisnis-iot",
    role: { id: "IoT Specialist", en: "IoT Specialist" },
    organization: "Smart Bisnis Profesional",
    type: { id: "Freelance", en: "Freelance" },
    period: { id: "Desember 2024 – Sekarang", en: "December 2024 – Present" },
    current: true,
    points: {
      id: [
        "Mengajar konsep fundamental IoT, prinsip perangkat keras, serta pemrograman mikrokontroler secara daring.",
        "Mendemonstrasikan alur kerja praktis menggunakan sensor lingkungan dan aktuator mekanis.",
        "Membimbing troubleshooting proyek peserta dan membangun komunitas belajar IoT yang aktif.",
      ],
      en: [
        "Teach fundamental IoT concepts, hardware principles, and microcontroller setup to online learners.",
        "Demonstrate practical workflows integrating environmental sensors and mechanical actuators.",
        "Provide project troubleshooting support, lead Q&A sessions, and foster an engaged IoT learning community.",
      ],
    },
  },
  {
    id: "kelasiot-instructor",
    role: { id: "IoT Technical Instructor", en: "IoT Technical Instructor" },
    organization: "KelasIoT",
    type: { id: "Freelance", en: "Freelance" },
    period: { id: "Agustus 2024 – Sekarang", en: "August 2024 – Present" },
    current: true,
    points: {
      id: [
        "Membantu peserta merancang dan membangun perangkat IoT menggunakan berbagai sensor dan modul komunikasi (WiFi, MQTT, HTTP).",
        "Membimbing integrasi perangkat keras ke layanan cloud dan internet.",
        "Menangani troubleshooting teknis perangkat keras maupun perangkat lunak pada proyek peserta.",
      ],
      en: [
        "Guide participants in designing and building IoT devices with sensors and WiFi, MQTT, and HTTP communication modules.",
        "Teach core IoT architecture and guide learners in connecting embedded devices to cloud services.",
        "Troubleshoot hardware and firmware issues to ensure reliable end-to-end project implementation.",
      ],
    },
  },
  {
    id: "robotics-lab-research",
    role: {
      id: "Research & Technology Assistant",
      en: "Research & Technology Assistant",
    },
    organization: "Robotics Laboratory, Universitas Islam Riau",
    type: { id: "Freelance", en: "Freelance" },
    period: { id: "Juni 2023 – Januari 2025", en: "June 2023 – January 2025" },
    points: {
      id: [
        "Membantu dosen dalam riset implementasi robotika lanjut dan Internet of Things (IoT).",
        "Merancang prototipe fungsional berbasis mikrokontroler (Arduino, ESP32, Raspberry Pi) untuk validasi riset.",
        'Memublikasikan karya ilmiah: "Basic Arduino Training for Smart Robotics with the Application of Artificial Intelligence Technology for Middle Schools".',
      ],
      en: [
        "Assisted academic lecturers in conducting advanced robotics and IoT implementation research.",
        "Built functional prototypes on Arduino, ESP32, and Raspberry Pi platforms for lab validation and assignments.",
        'Published academic paper: "Basic Arduino Training for Smart Robotics with the Application of Artificial Intelligence Technology for Middle Schools".',
      ],
    },
  },
  {
    id: "min1-robotics",
    role: {
      id: "Pembina Ekstrakurikuler Robotika",
      en: "Robotics Extracurricular Advisor",
    },
    organization: "Madrasah Ibtidaiyah Negeri 1",
    type: { id: "Kontrak", en: "Contract" },
    period: { id: "Februari 2024 – Februari 2025", en: "February 2024 – February 2025" },
    points: {
      id: [
        "Menyusun materi pembelajaran dasar robotika, ekosistem Arduino, dan konsep sensor untuk siswa.",
        "Membimbing praktik perakitan proyek sederhana dan pemrograman dasar secara aman dan interaktif.",
      ],
      en: [
        "Developed foundational robotics and Arduino curriculum introducing sensor concepts to young students.",
        "Guided safe hands-on assembly and introductory programming through engaging mini-projects.",
      ],
    },
  },
  {
    id: "uir-teaching-assistant",
    role: {
      id: "Asisten Dosen Praktikum",
      en: "Teaching Assistant for Practicum",
    },
    organization: "Informatics Engineering Laboratory, UIR",
    type: { id: "Kontrak", en: "Contract" },
    period: { id: "Oktober 2022 – Juni 2024", en: "October 2022 – June 2024" },
    points: {
      id: [
        "Membantu mahasiswa memahami konsep inti pemrograman dan teori ilmu komputer melalui sesi praktikum intensif.",
        "Melatih keterampilan pemecahan masalah dan kolaborasi tim selama sesi laboratorium.",
      ],
      en: [
        "Strengthened undergraduate students' grasp of core programming and computer science concepts during lab sessions.",
        "Facilitated problem-solving exercises, teamwork, and lab schedule coordination.",
      ],
    },
  },
  {
    id: "myskill-msib",
    role: {
      id: "MSIB Independent Study — IoT",
      en: "MSIB Independent Study — IoT",
    },
    organization: "PT. Lini Muda Inspirasi Negeri (MySkill)",
    type: { id: "Magang / Studi Independen", en: "Internship" },
    period: { id: "Februari 2023 – Juni 2023", en: "February 2023 – June 2023" },
    points: {
      id: [
        "Menguasai arsitektur IoT dari dasar hingga skala enterprise menggunakan C++ pada Arduino, ESP32, dan ESP8266.",
        'Meraih penghargaan "Best IoT Project" atas kolaborasi tim dan ketajaman penyelesaian masalah teknis.',
      ],
      en: [
        "Mastered scalable IoT frameworks from fundamentals to enterprise workflows using C++ on Arduino, ESP32, and ESP8266.",
        'Earned the "Best IoT Project" award for outstanding team collaboration and technical execution.',
      ],
    },
  },
  {
    id: "rakamin-fe",
    role: {
      id: "Project-Based Intern: Front End Developer",
      en: "Project-Based Intern: Front End Developer",
    },
    organization: "Core Initiative × Rakamin Academy",
    type: { id: "Magang", en: "Internship" },
    period: { id: "April 2023 – Mei 2023", en: "April 2023 – May 2023" },
    points: {
      id: [
        "Merancang dan mengimplementasikan antarmuka (UX) website e-commerce menggunakan Vue.js.",
        "Mempelajari praktik pemeliharaan kode yang bersih serta alur CI/CD menggunakan Docker.",
      ],
      en: [
        "Designed and implemented an e-commerce web experience using Vue.js.",
        "Applied maintainable code practices and explored Dockerized CI/CD pipelines.",
      ],
    },
  },
];

export const organizations: ExperienceItem[] = [
  {
    id: "rawr-uir",
    role: {
      id: "Ketua Organisasi (Lead of Organization)",
      en: "Lead of Organization",
    },
    organization: "Robotic Automation and Wireless Research (RAWR), UIR",
    type: { id: "Organisasi", en: "Organization" },
    period: { id: "Februari 2023 – Juni 2024", en: "February 2023 – June 2024" },
    points: {
      id: [
        "Mengenalkan dan mengembangkan ekosistem riset robotika serta IoT di lingkungan Universitas Islam Riau.",
        "Mengoptimalkan website resmi (wireless.uir.ac.id) dengan integrasi tampilan peminjaman alat laboratorium.",
        'Menginisiasi dan memimpin platform belajar "PDA" (Pelatihan Dasar Arduino).',
      ],
      en: [
        "Expanded robotics and IoT adoption and built competition-grade IoT projects for national and international events.",
        "Optimized the official website (wireless.uir.ac.id) and integrated a laboratory equipment loan display.",
        'Created and spearheaded the "PDA" (Pelatihan Dasar Arduino) learning platform.',
      ],
    },
  },
  {
    id: "milad-coding-team",
    role: {
      id: "Coding Team Volunteer",
      en: "Coding Team Volunteer",
    },
    organization: "Milad Informatics Faculty Program, UIR",
    type: { id: "Kepanitiaan", en: "Committee" },
    period: { id: "2022", en: "2022" },
    points: {
      id: [
        "Menyusun soal pemrograman algoritmik untuk kompetisi coding mahasiswa.",
        "Meningkatkan kemampuan logika algoritma dan pemrograman C++ para peserta.",
      ],
      en: [
        "Authored algorithmic problem sets for the student competitive programming challenge.",
        "Helped elevate participants' algorithmic reasoning and C++ proficiency.",
      ],
    },
  },
];

export const projects: Project[] = [
  {
    id: "bumbuket-pku",
    title: {
      id: "Bumbuket.pku — Platform E-Commerce Toko Buket Premium",
      en: "Bumbuket.pku — Full-Stack Premium Bouquet E-Commerce",
    },
    subtitle: {
      id: "E-commerce buket kustom, kalkulator Money Bouquet, DP/Lunas, & Admin Dashboard",
      en: "Custom florist storefront, Money Bouquet calculator, DP/Full checkout & Admin Panel",
    },
    description: {
      id: "Platform e-commerce full-stack untuk bisnis toko buket Bumbuket.pku di Pekanbaru berbasis Turborepo Monorepo (Next.js App Router, Supabase PostgreSQL + RLS + Storage). Dilengkapi kustomisasi warna wrapping, kartu ucapan, kalkulator Money Bouquet 1–100 lembar, Hybrid Checkout (Midtrans, Transfer BRI + upload bukti, WhatsApp) dengan opsi bayar DP atau Lunas, serta Dashboard Admin jadwal pesanan yang di-deploy mandiri dengan Docker.",
      en: "A full-stack e-commerce platform for Bumbuket.pku florist in Pekanbaru built on a Turborepo monorepo (Next.js App Router, Supabase PostgreSQL + RLS + Storage). Features bouquet wrapping & greeting card customization, a 1–100 sheet Money Bouquet pricing calculator, Hybrid Checkout (Midtrans, BRI transfer with proof upload, WhatsApp) supporting DP or Full payment, and an operations Admin Dashboard deployed via Docker.",
    },
    category: "Web",
    year: "2026",
    badge: { id: "Live Production · Full-Stack", en: "Live Production · Full-Stack" },
    image: "/projects/bumbuket-pku.svg",
    techStack: [
      "Next.js",
      "TypeScript",
      "Turborepo",
      "Supabase",
      "Tailwind CSS",
      "Midtrans",
      "Docker",
    ],
    highlights: {
      id: [
        "Katalog Ready Stock & Pre-Order lengkap dengan kustomisasi wrapping, Kartu Ucapan, dan slot jadwal buka toko Pekanbaru.",
        "Kalkulator otomatis Money Bouquet (1–100 lembar) serta pengiriman lokal via Gojek, Maxim, dan Grab.",
        "Hybrid Checkout mendukung Midtrans Snap, Transfer BRI (upload bukti), dan WhatsApp dengan skema DP minimal 50% atau Lunas.",
        "Dashboard Admin terproteksi role untuk kelola produk, varian, stok, verifikasi pembayaran, dan jadwal produksi buket.",
      ],
      en: [
        "Ready Stock & Pre-Order catalog with wrapping color picker, greeting card notes, and Pekanbaru store-hours scheduling.",
        "Interactive Money Bouquet calculator (1–100 sheets) and local instant courier selection (Gojek, Maxim, Grab).",
        "Hybrid Checkout supporting Midtrans Snap, BRI bank transfer (with payment proof upload), and WhatsApp with DP or Full payment plans.",
        "Role-protected Admin Dashboard for product/variant CRUD, Supabase Storage uploads, payment verification, and order scheduling.",
      ],
    },
    liveUrl: "https://bumbuket.tugoodly.my.id",
    liveLabel: { id: "Live Website", en: "Live Website" },
    featured: true,
  },
  {
    id: "air-quality-iot",
    title: {
      id: "Monitoring Kualitas Udara & Emisi Asap Halte Bus (IoT)",
      en: "Air Quality & Smoke Emission Monitoring at Urban Bus Stops",
    },
    subtitle: {
      id: "Sistem pemantauan polusi perkotaan real-time dengan MQ-135 & MQ-2",
      en: "Real-time urban air pollution telemetry using MQ-135 & MQ-2 sensors",
    },
    description: {
      id: "Perangkat IoT berbasis ESP32 untuk memantau kualitas udara dan emisi asap di halte bus perkotaan menggunakan sensor MQ-135 dan MQ-2 secara real-time. Dipublikasikan oleh Universitas Islam Riau dan diliput GoRiau.com.",
      en: "An ESP32-based IoT monitoring node for urban bus stops utilizing MQ-135 and MQ-2 gas sensors to monitor air quality and smoke emissions in real time. Featured on Universitas Islam Riau's portal and GoRiau.com.",
    },
    category: "IoT",
    year: "2024",
    badge: { id: "Diliput Media & Tugas Akhir", en: "Media Featured · Thesis" },
    image: "/projects/air-quality.jpg",
    techStack: ["ESP32", "C++", "MQ-135", "MQ-2", "MQTT", "WiFi"],
    highlights: {
      id: [
        "Kalibrasi sensor gas MQ-135 (kualitas udara) dan MQ-2 (asap/gas mudah terbakar) untuk ruang terbuka.",
        "Pengiriman data telemetri nirkabel real-time untuk pemantauan ambang batas bahaya.",
        "Dipublikasikan di ETD UIR, uir.ac.id, dan media lokal GoRiau.com.",
      ],
      en: [
        "Dual-sensor telemetry combining MQ-135 (air quality) and MQ-2 (smoke/combustible gases) for outdoor shelters.",
        "Real-time wireless data transmission with automated air-quality threshold alerts.",
        "Published in UIR's institutional repository and featured on uir.ac.id and GoRiau.com.",
      ],
    },
    liveUrl:
      "https://drive.google.com/file/d/1qtaGlkTlW19i2UxPy2dkifUsRbmw_d0y/view?usp=sharing",
    liveLabel: { id: "Demo / Dokumentasi", en: "Demo / Docs" },
    featured: true,
  },
  {
    id: "arm-robotic-esp32",
    title: {
      id: "Lengan Robot (Arm Robotic) Berbasis ESP32 & Servo",
      en: "ESP32 Servo-Controlled Robotic Arm",
    },
    subtitle: {
      id: "Prototipe lengan robot multi-aktuator terkendali mikrokontroler",
      en: "Multi-axis servo robotic arm prototype driven by ESP32",
    },
    description: {
      id: "Rancang bangun lengan robot (Arm Robotic) menggunakan mikrokontroler ESP32 dan motor servo untuk otomasi pergerakan presisi, kontrol sudut aktuator, serta demonstrasi mekanika robotika.",
      en: "Design and assembly of a multi-servo robotic arm powered by an ESP32 microcontroller for precise angular actuation, pick-and-place automation, and robotics demonstrations.",
    },
    category: "IoT",
    year: "2025",
    badge: { id: "Robotika · ESP32", en: "Robotics · ESP32" },
    image: "/projects/arm-robotic.jpg",
    techStack: ["ESP32", "Servo Motor", "PWM Control", "C++", "Robotics"],
    highlights: {
      id: [
        "Kontrol multi-servo sinkron menggunakan sinyal PWM dari mikrokontroler ESP32.",
        "Kalibrasi sudut gerak lengan untuk manuver pengambilan objek secara halus.",
        "Didemonstrasikan langsung pada unggahan proyek LinkedIn.",
      ],
      en: [
        "Synchronized multi-servo PWM control driven by an ESP32 microcontroller.",
        "Calibrated joint articulation for smooth object manipulation sequences.",
        "Showcased in a live hardware demonstration post on LinkedIn.",
      ],
    },
    liveUrl:
      "https://www.linkedin.com/feed/update/urn:li:activity:7470295085952188417/",
    liveLabel: { id: "Demo di LinkedIn", en: "LinkedIn Demo" },
    featured: true,
  },
  {
    id: "iot-blood-check",
    title: {
      id: "IoT Blood Check — Deteksi Golongan Darah Pintar",
      en: "IoT Blood Check — Smart Blood Type Detection",
    },
    subtitle: {
      id: "Sistem deteksi golongan darah otomatis berbasis sensor optik & OLED",
      en: "Automated optical blood-type sensing prototype with OLED & cloud dashboard",
    },
    description: {
      id: "Perangkat IoT biomedis yang mendeteksi golongan darah (A, B, AB, O) menggunakan sensor optik LED/LDR, menampilkannya pada layar OLED, dan mengirimkan hasilnya ke platform cloud untuk pencatatan digital.",
      en: "A biomedical IoT prototype detecting blood groups via LED/LDR optical sensors, displaying results directly on an OLED screen, and streaming readings to a web monitoring dashboard.",
    },
    category: "IoT",
    year: "2024",
    badge: { id: "HealthTech · IoT", en: "HealthTech · IoT" },
    image: "/projects/blood-check.jpg",
    techStack: ["ESP32", "LDR / Optical Sensor", "OLED", "WiFi", "C++"],
    highlights: {
      id: [
        "Pembacaan reaksi reagen golongan darah secara otomatis menggunakan sensor optik.",
        "Tampilan hasil langsung pada layar OLED dan sinkronisasi ke website monitoring.",
        "Kode sumber lengkap tersedia secara terbuka di GitHub.",
      ],
      en: [
        "Automated optical reading of blood-typing reagent reactions.",
        "Instant OLED readout paired with cloud web dashboard logging.",
        "Open-source firmware and architecture available on GitHub.",
      ],
    },
    githubUrl: "https://github.com/TuBagus7/IoT_Blood_Check",
    featured: true,
  },
  {
    id: "smart-baby-scale",
    title: {
      id: "Timbangan & Pengukur Tinggi Bayi Pintar Berbasis IoT",
      en: "IoT Smart Baby Scale & Growth Monitoring System",
    },
    subtitle: {
      id: "Pemantauan berat & tinggi balita real-time terintegrasi dashboard web",
      en: "Real-time infant weight & height measurement synced to web dashboard",
    },
    description: {
      id: "Sistem timbangan bayi pintar berbasis ESP32 dengan sensor Loadcell (HX711) dan sensor ultrasonik yang mengukur berat serta panjang badan balita secara otomatis dan langsung tampil pada dashboard monitoring web.",
      en: "An ESP32-powered smart baby scale combining a load cell (HX711) and ultrasonic height sensors to measure infant weight and length automatically with live web dashboard visualization.",
    },
    category: "IoT",
    year: "2025",
    badge: { id: "HealthTech · Posyandu IoT", en: "HealthTech · Posyandu IoT" },
    image: "/projects/smart-baby-scale.jpg",
    techStack: ["ESP32", "Loadcell HX711", "Ultrasonic", "LCD", "Web Dashboard"],
    highlights: {
      id: [
        "Pengukuran otomatis berat dan tinggi badan bayi untuk mendukung pemantauan tumbuh kembang/stunting.",
        "Tampilan data ganda: langsung di layar LCD perangkat dan dashboard web secara real-time.",
        "Mempercepat pencatatan data pemeriksaan di posyandu maupun klinik.",
      ],
      en: [
        "Automated infant weight and length measurement to support stunting and growth screening.",
        "Dual-screen output via onboard LCD and live web dashboard.",
        "Streamlines digital health recording for clinics and community health posts.",
      ],
    },
    featured: false,
  },
  {
    id: "flood-fuzzy-iot",
    title: {
      id: "Monitoring & Prediksi Dini Banjir IoT Menggunakan Logika Fuzzy",
      en: "IoT Flood Monitoring & Early Prediction System Using Fuzzy Logic",
    },
    subtitle: {
      id: "Sistem peringatan dini banjir cerdas berbasis Fuzzy Tsukamoto",
      en: "Intelligent flood early-warning decision system using Fuzzy Logic",
    },
    description: {
      id: "Sistem pemantauan dan prediksi dini banjir berbasis Internet of Things yang memadukan sensor ultrasonik, sensor hujan YL-83, serta sensor aliran air dengan inferensi Fuzzy Logic untuk menentukan status siaga secara cerdas.",
      en: "An IoT-based flood monitoring and early prediction system combining ultrasonic, YL-83 rain, and water flow sensors with Fuzzy Logic inference for intelligent risk classification and alerts.",
    },
    category: "AI",
    year: "2024",
    badge: { id: "Fuzzy Logic · IoT", en: "Fuzzy Logic · IoT" },
    image: "/projects/flood-fuzzy.jpg",
    imageFit: "contain",
    techStack: ["ESP32", "Fuzzy Logic", "HC-SR04", "YL-83 Rain", "LCD I2C", "C++"],
    highlights: {
      id: [
        "Penerapan Fuzzy Inference System (metode Tsukamoto) untuk mengklasifikasikan tingkat risiko banjir.",
        "Integrasi multi-sensor (ketinggian air, curah hujan, debit air) dengan alarm buzzer & dashboard.",
        "Kode sumber lengkap tersedia di GitHub.",
      ],
      en: [
        "Applied Fuzzy Inference System (Tsukamoto method) for adaptive flood alert classification.",
        "Multi-sensor integration (water level, rainfall, flow rate) with buzzer alarm and dashboard.",
        "Full source code hosted publicly on GitHub.",
      ],
    },
    githubUrl: "https://github.com/TuBagus7/Flood-Detection-IoT-with-Fuzzy-Logic",
    featured: true,
  },
  {
    id: "pke-report-web",
    title: {
      id: "PKE (Perbaikan Komputer & Elektronik) — Web Pelaporan Teknisi",
      en: "PKE — Computer & Electronics Maintenance Report Web App",
    },
    subtitle: {
      id: "Aplikasi pelaporan kerusakan & manajemen perbaikan bagi pengguna dan teknisi",
      en: "Complaint & repair tracking web platform for users and technicians",
    },
    description: {
      id: "Aplikasi web berbasis Laravel dan PHP untuk mempermudah pengguna melaporkan kendala perangkat komputer/elektronik serta membantu teknisi melacak diagnosa, perbaikan, dan pemeliharaan perangkat secara terstruktur.",
      en: "A Laravel and PHP web application built for users to submit hardware/electronics repair tickets and for technicians to manage diagnostics, maintenance logs, and device resolutions.",
    },
    category: "Web",
    year: "2025",
    badge: { id: "Web Aplikasi · Laravel", en: "Web App · Laravel" },
    image: "/projects/pke-report.jpg",
    techStack: ["Laravel", "PHP", "MySQL", "JavaScript", "Bootstrap"],
    highlights: {
      id: [
        "Alur pengaduan perbaikan komputer dan perangkat elektronik terintegrasi untuk pengguna & teknisi.",
        "Pencatatan status perbaikan, riwayat pemeliharaan preventif, dan pelaporan institusi.",
        "Meminimalkan waktu henti (downtime) perangkat laboratorium melalui pelacakan tiket terpusat.",
      ],
      en: [
        "End-to-end maintenance complaint workflow connecting end-users and repair technicians.",
        "Structured tracking of hardware diagnostics, repair status, and institutional maintenance logs.",
        "Reduced laboratory equipment downtime through centralized ticket management.",
      ],
    },
    githubUrl: "https://github.com/TuBagus7/PKE_Complaint",
    liveUrl:
      "https://www.linkedin.com/feed/update/urn:li:activity:7425019867147223040/",
    liveLabel: { id: "Demo di LinkedIn", en: "LinkedIn Demo" },
    featured: true,
  },
  {
    id: "tucalc-smart-calculator",
    title: {
      id: "TuCalc — Kalkulator Pintar Layar Sentuh TFT (v1.0)",
      en: "TuCalc — Embedded TFT Touchscreen Smart Calculator (v1.0)",
    },
    subtitle: {
      id: "Antarmuka kalkulator layar sentuh kustom berbasis mikrokontroler",
      en: "Custom embedded GUI smart calculator built on a TFT touch shield",
    },
    description: {
      id: "Pengembangan perangkat kalkulator pintar portabel dengan layar sentuh TFT warna, menampilkan splash screen kustom \"TuCalc Smart Calculator v1.0\" serta antarmuka tombol sentuh responsif yang dibangun dengan C++.",
      en: "A handheld embedded smart calculator featuring a color TFT touchscreen, custom \"TuCalc Smart Calculator v1.0\" boot splash screen, and responsive touch keypad UI programmed in C++.",
    },
    category: "IoT",
    year: "2025",
    badge: { id: "Embedded GUI · TFT", en: "Embedded GUI · TFT" },
    image: "/projects/tucalc.jpg",
    techStack: ["Arduino", "TFT Touchscreen", "C++", "Embedded UI"],
    highlights: {
      id: [
        "Desain antarmuka grafis dan kalibrasi koordinat layar sentuh TFT secara mandiri.",
        "Dilengkapi animasi loading splash screen kustom dan operasi aritmatika real-time.",
        "Dibangun sebagai perangkat genggam mandiri bertenaga USB.",
      ],
      en: [
        "Custom graphical interface and resistive touch coordinate calibration on TFT display.",
        "Features custom boot progress animation and instant arithmetic evaluation.",
        "Self-contained USB-powered handheld embedded device.",
      ],
    },
    featured: false,
  },
  {
    id: "smart-parking-iot",
    title: {
      id: "Sistem Parkir Pintar (Smart Parking) Berbasis IoT",
      en: "IoT Smart Parking Slot & Automated Gate System",
    },
    subtitle: {
      id: "Pemantauan ketersediaan slot parkir, palang servo, & lampu indikator",
      en: "Real-time parking slot counter with IR sensors, servo barrier, and traffic LED",
    },
    description: {
      id: "Prototipe sistem parkir otomatis menggunakan sensor inframerah (IR), palang pintu motor servo, lampu lalu lintas indikator merah-kuning-hijau, serta layar LCD 16x2 yang menampilkan jumlah slot parkir tersedia secara real-time.",
      en: "An automated smart parking prototype integrating IR vehicle sensors, a servo barrier gate, traffic indicator LEDs, and a 16x2 LCD displaying live available parking slots.",
    },
    category: "IoT",
    year: "2025",
    badge: { id: "Smart City · IoT", en: "Smart City · IoT" },
    image: "/projects/smart-parking.jpg",
    techStack: ["Arduino / ESP32", "IR Sensor", "Servo Gate", "LCD 16x2", "C++"],
    highlights: {
      id: [
        "Penghitungan otomatis ketersediaan slot parkir secara real-time pada layar LCD.",
        "Kontrol palang pintu servo otomatis dan lampu indikator status parkir penuh/tersedia.",
        "Model penerapan otomatisasi infrastruktur Smart City skala prototipe.",
      ],
      en: [
        "Live slot availability counter displayed directly on an onboard 16x2 LCD.",
        "Automated servo gate barrier paired with red/yellow/green status indicator lights.",
        "Compact smart-city parking automation prototype.",
      ],
    },
    featured: false,
  },
  {
    id: "smart-door-esp32cam",
    title: {
      id: "Sistem Keamanan Pintu Pintar dengan Smart Bell & Face Recognition",
      en: "Smart Door Security System with Smart Bell & Face Recognition",
    },
    subtitle: {
      id: "Akses pintu otomatis berbasis ESP32-CAM dan kunci solenoid",
      en: "Automated door access using ESP32-CAM and solenoid lock",
    },
    description: {
      id: "Perancangan dan pengembangan sistem keamanan pintu pintar yang menggabungkan bel pintar (Smart Bell), pengenalan wajah (Face Recognition) menggunakan ESP32-CAM, serta aktuator kunci pintu solenoid.",
      en: "Design and development of a smart door security system combining a smart bell, real-time face recognition powered by ESP32-CAM, and an electronic solenoid door lock.",
    },
    category: "IoT",
    year: "2024",
    badge: { id: "ESP32-CAM · Smart Security", en: "ESP32-CAM · Smart Security" },
    image: "/projects/smart-door.jpg",
    techStack: ["ESP32-CAM", "Solenoid Lock", "Face Recognition", "C++", "WiFi"],
    highlights: {
      id: [
        "Integrasi modul kamera ESP32-CAM untuk identifikasi wajah tamu di depan pintu.",
        "Kontrol aktuator kunci solenoid otomatis untuk membuka akses bagi wajah terverifikasi.",
        "Dilengkapi fitur Smart Bell untuk notifikasi pengunjung secara langsung.",
      ],
      en: [
        "Integrated ESP32-CAM camera pipeline for visitor face recognition at entry points.",
        "Automated solenoid lock actuation for verified access control.",
        "Includes a smart bell workflow for real-time visitor notifications.",
      ],
    },
    githubUrl: "https://github.com/TuBagus7/ESP32-Cam-Smart-Bell",
    featured: false,
  },
  {
    id: "non-invasive-glucose",
    title: {
      id: "Prototipe Pengukuran Kadar Glukosa Non-Invasif",
      en: "Non-Invasive Glucose Level Measurement Prototype",
    },
    subtitle: {
      id: "Perangkat kesehatan pintar tanpa jarum berbasis sensor optik & LCD",
      en: "Needle-free smart healthcare sensing prototype with LCD readout",
    },
    description: {
      id: "Prototipe perangkat kesehatan untuk mengestimasi kadar glukosa darah (mg/dL) secara non-invasif (tanpa jarum) menggunakan pendekatan sensor optik jari dan pemrosesan sinyal mikrokontroler.",
      en: "A biomedical hardware prototype designed to estimate blood glucose levels (mg/dL) non-invasively (needle-free) through finger optical sensing and embedded microcontroller signal processing.",
    },
    category: "IoT",
    year: "2024",
    badge: { id: "Biomedical IoT", en: "Biomedical IoT" },
    image: "/projects/non-invasive-glucose.jpg",
    techStack: ["ESP32", "Optical Sensor", "LCD 16x2", "Biomedical IoT", "C++"],
    highlights: {
      id: [
        "Pendekatan pengukuran kadar gula darah non-invasif yang nyaman tanpa melukai kulit.",
        "Menampilkan hasil estimasi kadar glukosa (mg/dL) langsung pada layar LCD perangkat.",
        "Dilengkapi dokumentasi dan video pengujian prototipe.",
      ],
      en: [
        "Explores comfortable, needle-free blood glucose estimation using finger optical sensing.",
        "Displays real-time estimated glucose readings (mg/dL) directly on the LCD screen.",
        "Accompanied by prototype test documentation and demo footage.",
      ],
    },
    liveUrl:
      "https://drive.google.com/file/d/1-NtjA5N5uI740vA7boxiq4kBlJyy-YQw/view?usp=sharing",
    liveLabel: { id: "Demo / Dokumentasi", en: "Demo / Docs" },
    featured: false,
  },
  {
    id: "iot-gas-station-esp32",
    title: {
      id: "Prototipe SPBU Pintar Berbasis IoT (ESP32)",
      en: "IoT Gas Station Prototype With ESP32",
    },
    subtitle: {
      id: "Otomasi pengisian bahan bakar & pemantauan transaksi pintar",
      en: "Smart automated fuel dispenser & telemetry prototype",
    },
    description: {
      id: "Prototipe sistem SPBU mini berbasis ESP32 yang mengotomatiskan kontrol pengisian, pengukuran volume, dan pemantauan operasional melalui jaringan Internet of Things.",
      en: "An ESP32-powered smart gas station prototype automating dispensing control, flow/volume measurement, and connected operational monitoring over IoT.",
    },
    category: "IoT",
    year: "2024",
    badge: { id: "Smart Automation", en: "Smart Automation" },
    image: "/projects/gas-station.png",
    imageFit: "contain",
    techStack: ["ESP32", "Flow Sensor", "Relay Control", "WiFi", "C++"],
    highlights: {
      id: [
        "Kontrol otomatis aktuator pompa/relay sesuai takaran pengisian.",
        "Monitoring status transaksi dan volume secara digital via ESP32.",
        "Repositori kode lengkap tersedia di GitHub.",
      ],
      en: [
        "Automated pump/relay control calibrated to target dispensing volumes.",
        "Digital volume and transaction telemetry powered by ESP32.",
        "Complete source code and firmware documentation on GitHub.",
      ],
    },
    githubUrl: "https://github.com/TuBagus7/IoT_Gas_Station_Prototype_ESP32",
    featured: false,
  },
  {
    id: "dry-wet-trash-iot",
    title: {
      id: "Deteksi & Pemilahan Sampah Kering dan Basah Berbasis IoT",
      en: "Dry and Wet Trash Detection With IoT Technology",
    },
    subtitle: {
      id: "Tempat sampah pintar pemilah otomatis organik/basah dan kering",
      en: "Automated smart waste segregation bin powered by IoT",
    },
    description: {
      id: "Sistem tempat sampah pintar berbasis IoT yang mendeteksi dan memilah sampah basah serta kering secara otomatis menggunakan sensor kelembapan, aktuator mekanis, dan pemantauan kapasitas.",
      en: "An IoT-enabled smart waste bin that automatically detects and separates dry and wet waste using moisture sensing, servo sorting mechanisms, and connected bin status monitoring.",
    },
    category: "IoT",
    year: "2023",
    badge: { id: "Smart Environment", en: "Smart Environment" },
    image: "/projects/dry-wet-trash.jpg",
    techStack: ["Arduino / ESP32", "Moisture Sensor", "Servo", "Ultrasonic", "C++"],
    highlights: {
      id: [
        "Klasifikasi otomatis sampah basah dan kering berbasis pembacaan sensor kelembapan.",
        "Mekanisme pemilahan otomatis menggunakan motor servo.",
        "Mendukung pengelolaan limbah cerdas dengan kode terbuka di GitHub.",
      ],
      en: [
        "Automated wet vs. dry waste detection using moisture sensing.",
        "Servo-driven mechanical sorting compartment for hands-free separation.",
        "Supports smart waste management workflows with full code on GitHub.",
      ],
    },
    githubUrl: "https://github.com/TuBagus7/Trash-Wet-and-Dry-IoT-Project-",
    featured: false,
  },
  {
    id: "home-security-pir-esp32cam",
    title: {
      id: "Sistem Keamanan Rumah dengan Sensor PIR & ESP32-CAM",
      en: "Home Security System with PIR & Camera Sensors (ESP32-CAM)",
    },
    subtitle: {
      id: "Deteksi gerakan otomatis dan tangkapan kamera real-time",
      en: "Motion-triggered surveillance & instant photo capture",
    },
    description: {
      id: "Perancangan sistem keamanan rumah yang memadukan sensor gerak PIR dan modul kamera ESP32-CAM untuk mendeteksi intrusi, mengambil gambar otomatis, dan mengirimkan peringatan jarak jauh.",
      en: "Design of a home security surveillance node combining a Passive Infrared (PIR) motion sensor with an ESP32-CAM module to detect intruders, capture snapshots automatically, and send remote alerts.",
    },
    category: "IoT",
    year: "2024",
    badge: { id: "ESP32-CAM · Security", en: "ESP32-CAM · Security" },
    image: "/projects/home-security.jpg",
    imageFit: "contain",
    techStack: ["ESP32-CAM", "PIR Sensor", "WiFi", "C++", "IoT"],
    highlights: {
      id: [
        "Deteksi pergerakan otomatis menggunakan sensor PIR berdaya rendah.",
        "Pengambilan gambar instan melalui modul ESP32-CAM saat gerakan terdeteksi.",
        "Dirancang ringkas dan terjangkau untuk keamanan hunian modern.",
      ],
      en: [
        "Low-power passive infrared (PIR) motion trigger for intrusion detection.",
        "Instant snapshot capture via ESP32-CAM whenever motion is detected.",
        "Compact, cost-effective hardware design for residential security.",
      ],
    },
    featured: false,
  },
  {
    id: "rumah-laundry-web",
    title: {
      id: "Rumah Laundry — Sistem Informasi Manajemen Laundry",
      en: "Rumah Laundry — Laundry Business Management Web App",
    },
    subtitle: {
      id: "Aplikasi web pengelolaan order, paket cuci, & laporan transaksi",
      en: "Web platform for managing laundry orders, service packages, and billing",
    },
    description: {
      id: "Aplikasi web manajemen operasional usaha laundry yang mencakup dashboard transaksi, pemilihan kategori layanan (cuci komplit, dry clean, satuan), manajemen pelanggan, serta riwayat order secara terpusat.",
      en: "A full-featured laundry management web application featuring a transaction dashboard, tiered service selection, customer management, and centralized order tracking.",
    },
    category: "Web",
    year: "2024",
    badge: { id: "Web App · Full-Stack", en: "Web App · Full-Stack" },
    image: "/projects/rumah-laundry.png",
    imageFit: "contain",
    techStack: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    highlights: {
      id: [
        "Dashboard ringkas untuk memantau total order, status pengerjaan, dan rekap transaksi.",
        "Dukungan berbagai paket layanan laundry (cuci komplit, dry clean, satuan).",
        "Kode sumber tersedia di GitHub.",
      ],
      en: [
        "Clean administrative dashboard for tracking order counts, status, and revenue.",
        "Supports multiple laundry service tiers and itemized order billing.",
        "Source code hosted on GitHub.",
      ],
    },
    githubUrl: "https://github.com/TuBagus7/Rumah-Laundry-",
    featured: false,
  },
  {
    id: "administrasi-sekolah-laravel",
    title: {
      id: "Sistem Informasi Administrasi Sekolah (Laravel)",
      en: "School Administration Information System (Laravel)",
    },
    subtitle: {
      id: "Platform digital pengelolaan data siswa, kelas, & administrasi akademik",
      en: "Digital web platform for student records and school administration",
    },
    description: {
      id: "Aplikasi web administrasi sekolah berbasis Laravel untuk mendigitalisasi pengelolaan data akademik, administrasi siswa, dan pelaporan operasional sekolah agar lebih cepat dan terstruktur.",
      en: "A Laravel-based school administration web application built to digitize student data management, administrative workflows, and institutional reporting.",
    },
    category: "Web",
    year: "2024",
    badge: { id: "Laravel · EduTech", en: "Laravel · EduTech" },
    image: "/projects/administrasi-sekolah.png",
    imageFit: "contain",
    techStack: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    highlights: {
      id: [
        "Arsitektur MVC Laravel yang terstruktur untuk pengelolaan data administrasi sekolah.",
        "Mempercepat pencatatan, pencarian, dan rekap laporan administrasi siswa.",
        "Tersedia di repositori GitHub.",
      ],
      en: [
        "Structured Laravel MVC architecture tailored for school administration records.",
        "Speeds up student data entry, lookup, and administrative reporting.",
        "Available on GitHub.",
      ],
    },
    githubUrl: "https://github.com/TuBagus7/Administrasi_Sekolah_Laravel",
    featured: false,
  },
  {
    id: "deep-learning-patient",
    title: {
      id: "Deteksi Ketidaknormalan Data Pasien Berbasis Deep Learning",
      en: "Deep Learning Patient Anomaly Detection on Cloud",
    },
    subtitle: {
      id: "Algoritma AI kesehatan terdaftar Hak Kekayaan Intelektual (HKI)",
      en: "Registered IP healthcare AI analytics architecture",
    },
    description: {
      id: "Sistem analisis ketidaknormalan data medis pasien berbasis Deep Learning yang berjalan di infrastruktur Cloud Computing untuk membantu identifikasi dini anomali kesehatan secara akurat dan skalabel.",
      en: "A cloud-hosted Deep Learning algorithm engineered to detect anomalies in patient health records, enabling scalable and timely clinical anomaly screening. Officially registered as Intellectual Property (HKI).",
    },
    category: "AI",
    year: "2024",
    badge: { id: "Paten IDS000014793 & HKI", en: "Patent IDS000014793 & IP" },
    image: "/certificates/paten-prototipe.jpg",
    imageFit: "contain",
    techStack: ["Python", "Deep Learning", "ESP32", "Cloud Computing", "IoT ECG"],
    highlights: {
      id: [
        "Pencatatan resmi Surat Pencatatan Ciptaan (HKI) atas algoritma analisis anomali pasien.",
        "Arsitektur model Deep Learning yang dioptimalkan untuk inferensi berbasis Cloud Computing.",
        "Alur pra-pemrosesan data medis terstruktur untuk meminimalkan false-positive.",
      ],
      en: [
        "Officially certified under Indonesia's Intellectual Property registry (Surat Pencatatan Ciptaan).",
        "Deep learning pipeline engineered for scalable cloud-based inference.",
        "Structured preprocessing pipeline tailored to detect subtle anomalies in clinical metrics.",
      ],
    },
    githubUrl: "https://github.com/Tugood7",
    featured: false,
  },
  {
    id: "irex-2024-iot",
    title: {
      id: "Inovasi IoT Peraih Gold Award IREX 2024",
      en: "IREX 2024 Gold Award IoT Innovation",
    },
    subtitle: {
      id: "Solusi cerdas Industri 4.0 di UiTM Malaysia",
      en: "Industry 4.0 smart hardware solution at UiTM Malaysia",
    },
    description: {
      id: "Solusi perangkat keras dan konektivitas IoT generasi Industri 4.0 yang berhasil meraih Gold Award pada International Industrial Revolution 4.0 Exposition (IREX) 2024 di Universiti Teknologi Mara, Malaysia.",
      en: "An end-to-end Industry 4.0 IoT hardware and software prototype that earned the Gold Award at the International Industrial Revolution 4.0 Exposition (IREX) 2024 hosted by Universiti Teknologi Mara, Malaysia.",
    },
    category: "IoT",
    year: "2024",
    badge: { id: "Gold Award · Malaysia", en: "Gold Award · Malaysia" },
    image: "/certificates/irex-2024-award-stage.jpg",
    techStack: ["ESP32", "Arduino", "MQTT", "Cloud IoT", "C++"],
    highlights: {
      id: [
        "Meraih Gold Award pada eksposisi internasional Industri 4.0 di Malaysia.",
        "Integrasi perangkat keras mikrokontroler, protokol komunikasi ringan, dan dasbor pemantauan.",
        "Dirancang dengan fokus efisiensi daya dan kemudahan penerapan di lapangan.",
      ],
      en: [
        "Awarded Gold Medal at an international Industry 4.0 exposition in Malaysia.",
        "Seamless integration of embedded firmware, lightweight messaging, and cloud monitoring.",
        "Engineered for practical field deployment and reliable connectivity.",
      ],
    },
    githubUrl: "https://github.com/Tugood7",
    featured: false,
  },
  {
    id: "wireless-uir-web",
    title: {
      id: "Website Wireless Research UIR & Sistem Peminjaman Alat Lab",
      en: "Wireless Research Portal & Lab Equipment Loan System",
    },
    subtitle: {
      id: "Portal organisasi riset & platform Pelatihan Dasar Arduino (PDA)",
      en: "Research portal & PDA Arduino learning hub",
    },
    description: {
      id: "Optimasi portal resmi Robotic Automation and Wireless Research (wireless.uir.ac.id) yang terintegrasi dengan tampilan status peminjaman perangkat laboratorium serta platform pembelajaran Pelatihan Dasar Arduino (PDA).",
      en: "Optimized the official portal for Robotic Automation and Wireless Research (wireless.uir.ac.id), integrating a transparent laboratory equipment loan display alongside the Pelatihan Dasar Arduino (PDA) learning platform.",
    },
    category: "Web",
    year: "2023",
    badge: { id: "Organisasi Riset", en: "Research Portal" },
    techStack: ["PHP", "Laravel", "MySQL", "Bootstrap", "JavaScript"],
    highlights: {
      id: [
        "Menampilkan inventaris dan status peminjaman alat laboratorium secara transparan.",
        "Menyediakan modul belajar terstruktur untuk program Pelatihan Dasar Arduino (PDA).",
        "Meningkatkan visibilitas kegiatan riset dan prestasi tim robotika secara internal maupun eksternal.",
      ],
      en: [
        "Integrated a live laboratory equipment borrowing display for students and researchers.",
        "Launched the structured PDA (Pelatihan Dasar Arduino) onboarding curriculum.",
        "Boosted internal and external visibility of UIR's robotics and wireless research team.",
      ],
    },
    liveUrl: "https://wireless.uir.ac.id",
    liveLabel: { id: "Live Site", en: "Live Site" },
    featured: false,
  },
  {
    id: "ecommerce-vue-ux",
    title: {
      id: "Antarmuka E-Commerce Modern dengan Vue.js & Docker",
      en: "Modern E-Commerce Frontend with Vue.js & Docker",
    },
    subtitle: {
      id: "Proyek akhir magang Core Initiative × Rakamin Academy",
      en: "Capstone project at Core Initiative × Rakamin Academy",
    },
    description: {
      id: "Implementasi pengalaman belanja e-commerce yang responsif dan modular menggunakan Vue.js, dilengkapi praktik pemeliharaan kode yang rapi serta kontainerisasi alur CI/CD dengan Docker.",
      en: "A responsive, component-driven e-commerce web interface built with Vue.js, applying clean code maintenance principles and containerized CI/CD deployment workflows with Docker.",
    },
    category: "Web",
    year: "2023",
    badge: { id: "Magang Frontend", en: "Frontend Internship" },
    techStack: ["Vue.js", "JavaScript", "HTML / CSS", "Docker"],
    highlights: {
      id: [
        "Arsitektur komponen katalog produk yang bersih dan responsif di berbagai ukuran layar.",
        "Penerapan praktik maintainability kode frontend yang terstandar.",
        "Integrasi kontainer Docker untuk konsistensi build dan pipeline CI/CD.",
      ],
      en: [
        "Modular product catalog UI engineered for clean user experience across devices.",
        "Adhered to clean frontend maintainability and component reusability patterns.",
        "Studied and configured Docker-based CI/CD workflows for reproducible builds.",
      ],
    },
    githubUrl: "https://github.com/Tugood7",
    featured: false,
  },
];

export const posts: Post[] = [
  {
    slug: "monitoring-kualitas-udara-esp32-mq135-mq2",
    title: {
      id: "Membangun Sistem Monitoring Kualitas Udara Real-Time dengan ESP32, MQ-135, dan MQTT",
      en: "Building a Real-Time Air Quality Monitor with ESP32, MQ-135, and MQTT",
    },
    excerpt: {
      id: "Catatan teknis dari riset pemantauan asap dan kualitas udara di halte bus perkotaan—mulai dari kalibrasi sensor gas hingga arsitektur telemetri MQTT yang stabil.",
      en: "Engineering notes from building an urban bus stop smoke and air-quality monitor—covering gas sensor calibration, noise filtering, and reliable MQTT telemetry.",
    },
    category: "IoT",
    date: "2025-02-10",
    readTimeMinutes: 5,
    tags: ["ESP32", "MQ-135", "MQ-2", "MQTT", "C++"],
    sections: [
      {
        heading: {
          id: "Mengapa Monitoring Udara di Halte Bus Penting?",
          en: "Why Monitor Air Quality at Urban Bus Stops?",
        },
        paragraphs: {
          id: [
            "Halte bus perkotaan merupakan titik berkumpulnya penumpang yang paling rentan terpapar emisi kendaraan bermotor dan asap rokok. Dengan menggabungkan mikrokontroler ESP32 serta sensor MQ-135 dan MQ-2, kita dapat membangun node pemantau berbiaya terjangkau yang mengirimkan status udara secara langsung.",
            "Tantangan utamanya bukan sekadar membaca nilai ADC, melainkan memastikan pembacaan stabil terhadap perubahan suhu dan kelembapan di ruang terbuka.",
          ],
          en: [
            "Urban bus stops expose daily commuters to concentrated vehicle exhaust and cigarette smoke. Pairing an ESP32 microcontroller with MQ-135 and MQ-2 gas sensors enables a cost-effective monitoring node that streams real-time environmental telemetry.",
            "The real engineering challenge is not reading raw ADC values, but keeping readings stable despite outdoor temperature and humidity shifts.",
          ],
        },
      },
      {
        heading: {
          id: "Pola Firmware & Pengiriman MQTT",
          en: "Firmware Pattern & MQTT Telemetry",
        },
        paragraphs: {
          id: [
            "Untuk menghindari lonjakan pembacaan sesaat, saya menerapkan rata-rata bergerak (moving average) pada sampel sensor sebelum mengirim payload JSON ringan melalui protokol MQTT.",
          ],
          en: [
            "To smooth out transient spikes, applying a simple moving average over multiple ADC samples before publishing a compact JSON payload over MQTT keeps dashboards clean and actionable.",
          ],
        },
        code: {
          language: "cpp",
          snippet: `float readFilteredSensor(int pin, int samples = 10) {
  long total = 0;
  for (int i = 0; i < samples; i++) {
    total += analogRead(pin);
    delay(25);
  }
  return total / (float)samples;
}

// Publish payload JSON ke broker MQTT
String payload = "{\\"mq135\\":" + String(airValue, 1) +
                 ",\\"mq2\\":" + String(smokeValue, 1) + "}";
mqttClient.publish("busstop/air-quality", payload.c_str());`,
        },
      },
      {
        heading: {
          id: "Pelajaran Utama di Lapangan",
          en: "Key Field Takeaways",
        },
        paragraphs: {
          id: [
            "Selalu lakukan pemanasan awal (burn-in) sensor seri MQ minimal 24 jam sebelum kalibrasi nilai baseline, serta siapkan mekanisme auto-reconnect WiFi & MQTT agar perangkat tetap tangguh saat koneksi jaringan sempat terputus.",
          ],
          en: [
            "Always burn-in MQ-series sensors for at least 24 hours before establishing your baseline ratio, and implement non-blocking WiFi/MQTT reconnection so outdoor nodes recover automatically from network drops.",
          ],
        },
      },
    ],
  },
  {
    slug: "deep-learning-deteksi-anomali-data-pasien-cloud",
    title: {
      id: "Merancang Pipeline Deep Learning di Cloud untuk Deteksi Anomali Data Pasien",
      en: "Designing a Cloud Deep Learning Pipeline for Patient Anomaly Detection",
    },
    excerpt: {
      id: "Bagaimana pendekatan pemrosesan data dan arsitektur model Deep Learning di Cloud membantu mengidentifikasi pola tidak normal pada data klinis pasien.",
      en: "How structured preprocessing and cloud-hosted Deep Learning models work together to flag subtle anomalies in patient medical records.",
    },
    category: "AI",
    date: "2024-11-18",
    readTimeMinutes: 6,
    tags: ["Python", "Deep Learning", "Cloud", "HKI"],
    sections: [
      {
        heading: {
          id: "Tantangan Data Medis yang Tidak Seimbang",
          en: "Handling Imbalanced Clinical Data",
        },
        paragraphs: {
          id: [
            "Pada data kesehatan, kasus anomali umumnya jauh lebih sedikit dibanding kondisi normal. Jika langsung melatih klasifier standar tanpa penanganan khusus, model cenderung bias terhadap kelas mayoritas.",
            "Pendekatan normalisasi fitur yang konsisten, validasi berlapis, serta arsitektur autoencoder/klasifikasi mendalam membantu menangkap penyimpangan halus yang sering terlewat oleh aturan ambang batas statis.",
          ],
          en: [
            "In healthcare datasets, abnormal events are vastly outnumbered by normal readings. Training a naive classifier often yields misleadingly high accuracy while missing critical anomalies.",
            "Combining consistent feature scaling, stratified validation, and deep neural anomaly architectures captures subtle multi-variable deviations that static threshold rules miss.",
          ],
        },
      },
      {
        heading: {
          id: "Mengapa Cloud Computing?",
          en: "Why Deploy on Cloud Computing?",
        },
        paragraphs: {
          id: [
            "Menempatkan proses inferensi di Cloud memungkinkan fasilitas kesehatan maupun perangkat monitoring IoT mengirimkan data pasien melalui API ringan tanpa membebani perangkat lokal. Karya algoritma ini juga telah tercatat secara resmi melalui Surat Pencatatan Ciptaan (HKI).",
          ],
          en: [
            "Running inference on cloud infrastructure allows lightweight web apps and IoT medical monitors to send telemetry over secure APIs without requiring local GPU hardware. This algorithm architecture has also been officially registered as Intellectual Property (HKI).",
          ],
        },
      },
    ],
  },
  {
    slug: "memilih-protokol-komunikasi-iot-mqtt-vs-http",
    title: {
      id: "MQTT vs HTTP untuk Proyek IoT: Panduan Praktis bagi Pemula hingga Menengah",
      en: "MQTT vs HTTP for IoT Projects: A Practical Guide from Prototype to Production",
    },
    excerpt: {
      id: "Ringkasan materi yang paling sering ditanyakan peserta kelas IoT saat menghubungkan ESP32 dan ESP8266 ke aplikasi web dan cloud.",
      en: "A practical breakdown of the question I answer most often while mentoring IoT learners connecting ESP32 and ESP8266 boards to web dashboards.",
    },
    category: "IoT",
    date: "2024-09-05",
    readTimeMinutes: 4,
    tags: ["MQTT", "HTTP", "ESP8266", "ESP32", "Teaching"],
    sections: [
      {
        heading: {
          id: "Kapan Menggunakan HTTP?",
          en: "When HTTP Makes Sense",
        },
        paragraphs: {
          id: [
            "HTTP (REST API) sangat cocok untuk integrasi sederhana berbasis request-response—misalnya perangkat hanya mengirim data suhu tiap 15 menit ke backend Laravel atau Next.js. Struktur endpoint-nya mudah diuji menggunakan Postman.",
          ],
          en: [
            "HTTP REST APIs shine for simple request-response telemetry—such as a weather node posting temperature readings every 15 minutes to a Laravel or Next.js backend. Endpoints are straightforward to test with Postman.",
          ],
        },
      },
      {
        heading: {
          id: "Kapan MQTT Jauh Lebih Unggul?",
          en: "When MQTT Wins",
        },
        paragraphs: {
          id: [
            "Ketika proyek membutuhkan kontrol dua arah secara instan (misalnya menyalakan aktuator dari dashboard web dalam hitungan milidetik) atau memiliki puluhan node sensor dengan bandwidth terbatas, pola publish-subscribe MQTT jauh lebih hemat daya dan latensi.",
            "Di kelas yang saya ampu (KelasIoT & Smart Bisnis Profesional), kita biasanya menguji topik MQTT terlebih dahulu menggunakan MQTTX sebelum menghubungkannya ke antarmuka web.",
          ],
          en: [
            "Whenever your system requires instant two-way control (like toggling an actuator from a web dashboard in milliseconds) or scales across many bandwidth-constrained nodes, MQTT's lightweight publish-subscribe model dramatically lowers overhead and latency.",
            "In my workshops at KelasIoT and Smart Bisnis Profesional, we validate topics using MQTTX first before wiring them into a live web dashboard.",
          ],
        },
      },
    ],
  },
  {
    slug: "mengajar-robotika-arduino-untuk-pelajar",
    title: {
      id: "Mengenalkan Robotika & AI Dasar dengan Arduino untuk Pelajar Sekolah",
      en: "Introducing Robotics & Foundational AI with Arduino to School Students",
    },
    excerpt: {
      id: "Refleksi pengalaman membina ekstrakurikuler robotika dan memublikasikan program Pelatihan Dasar Arduino bagi generasi muda.",
      en: "Reflections from advising school robotics clubs and publishing our Basic Arduino Training program for middle school learners.",
    },
    category: "Education",
    date: "2024-06-22",
    readTimeMinutes: 4,
    tags: ["Arduino", "Robotics", "Education", "Mentoring"],
    sections: [
      {
        heading: {
          id: "Mulai dari Simulasi Sebelum Menyolder",
          en: "Start with Simulation Before Wiring",
        },
        paragraphs: {
          id: [
            "Saat membimbing siswa tingkat dasar hingga menengah, penggunaan simulator seperti Tinkercad dan Wokwi sangat membantu menurunkan rasa takut merusak komponen. Begitu logika LED, buzzer, dan sensor jarak berjalan di simulasi, antusiasme mereka saat memegang board Arduino fisik langsung meningkat drastis.",
          ],
          en: [
            "When mentoring elementary and middle school learners, starting with browser simulators like Tinkercad and Wokwi removes the fear of frying components. Once their LED, buzzer, and ultrasonic logic works virtually, transitioning to physical Arduino boards becomes pure excitement.",
          ],
        },
      },
      {
        heading: {
          id: "Belajar Melalui Proyek Nyata",
          en: "Learning Through Tangible Mini-Projects",
        },
        paragraphs: {
          id: [
            "Alih-alih menghafal sintaks C++ sejak pertemuan pertama, pendekatan berbasis proyek—seperti tempat sampah otomatis atau lampu pintar berbasis sensor—membuat siswa langsung memahami hubungan antara input sensor, logika program, dan aksi aktuator.",
          ],
          en: [
            "Rather than memorizing C++ syntax on day one, project-based milestones—like an automatic touchless bin or smart night-lamp—help students intuitively grasp how sensors, code logic, and actuators connect.",
          ],
        },
      },
    ],
  },
];

export const uiText = {
  nav: {
    home: { id: "Beranda", en: "Home" },
    about: { id: "Tentang", en: "About" },
    projects: { id: "Proyek", en: "Projects" },
    blog: { id: "Artikel", en: "Blog" },
    contact: { id: "Kontak", en: "Contact" },
  },
  hero: {
    greeting: { id: "Halo, saya", en: "Hi, I'm" },
    ctaProjects: { id: "Lihat Proyek", en: "View Projects" },
    ctaContact: { id: "Hubungi Saya", en: "Contact Me" },
    ctaAbout: { id: "Tentang & CV", en: "About & Resume" },
  },
  sections: {
    aboutEyebrow: { id: "Tentang Saya", en: "About Me" },
    aboutTitle: {
      id: "Menghubungkan Perangkat Keras, Web, dan Kecerdasan Buatan",
      en: "Bridging Hardware, Web Engineering, and Artificial Intelligence",
    },
    readFullStory: {
      id: "Lihat Pengalaman & Pendidikan Lengkap",
      en: "View Full Experience & Education",
    },
    skillsEyebrow: { id: "Keahlian Teknis", en: "Technical Stack" },
    skillsTitle: {
      id: "Teknologi & Tools yang Saya Gunakan",
      en: "Technologies & Tools I Work With",
    },
    projectsEyebrow: { id: "Karya Pilihan", en: "Selected Work" },
    projectsTitle: {
      id: "Proyek & Inovasi",
      en: "Projects & Innovations",
    },
    projectsSubtitle: {
      id: "Kumpulan karya lintas disiplin di bidang IoT, pengembangan web, dan AI.",
      en: "Cross-disciplinary engineering work spanning IoT hardware, full-stack web, and AI.",
    },
    viewAllProjects: { id: "Semua Proyek", en: "View All Projects" },
    blogEyebrow: { id: "Tulisan & Catatan", en: "Writing & Notes" },
    blogTitle: { id: "Artikel Terbaru", en: "Latest Articles" },
    blogSubtitle: {
      id: "Catatan teknis seputar IoT, pengembangan perangkat lunak, AI, dan pengalaman mengajar.",
      en: "Technical notes on IoT engineering, software development, AI, and mentoring.",
    },
    viewAllPosts: { id: "Semua Artikel", en: "All Articles" },
    readArticle: { id: "Baca selengkapnya", en: "Read article" },
    minRead: { id: "mnt baca", en: "min read" },
    contactEyebrow: { id: "Mari Terhubung", en: "Get in Touch" },
    contactTitle: {
      id: "Punya Ide Proyek atau Kolaborasi?",
      en: "Have a Project or Collaboration in Mind?",
    },
    contactSubtitle: {
      id: "Saya terbuka untuk diskusi proyek pengembangan web, solusi IoT, pelatihan/mentoring, maupun peluang kerja sama teknis lainnya.",
      en: "I'm open to discussing web development projects, IoT prototyping, technical mentoring, and engineering collaborations.",
    },
  },
  filters: {
    all: { id: "Semua", en: "All" },
    iot: { id: "IoT", en: "IoT" },
    web: { id: "Web", en: "Web" },
    ai: { id: "AI / ML", en: "AI / ML" },
    education: { id: "Edukasi", en: "Education" },
  },
  contactForm: {
    nameLabel: { id: "Nama Anda", en: "Your Name" },
    namePlaceholder: { id: "Masukkan nama Anda", en: "Enter your name" },
    topicLabel: { id: "Topik", en: "Topic" },
    topicPlaceholder: {
      id: "Contoh: Proyek IoT / Website / Pelatihan",
      en: "e.g. IoT Project / Web App / Workshop",
    },
    messageLabel: { id: "Pesan", en: "Message" },
    messagePlaceholder: {
      id: "Ceritakan singkat kebutuhan atau ide proyek Anda...",
      en: "Tell me briefly about your project or idea...",
    },
    sendWhatsapp: { id: "Kirim via WhatsApp", en: "Send via WhatsApp" },
    sendEmail: { id: "Kirim via Email", en: "Send via Email" },
    contactPersonTitle: { id: "Contact Person", en: "Contact Person" },
    contactPersonSubtitle: {
      id: "Hubungi langsung untuk proyek, konsultasi, atau kolaborasi.",
      en: "Reach out directly for projects, consulting, or collaborations.",
    },
    socialMediaTitle: { id: "Sosial Media", en: "Social Media" },
    socialMediaSubtitle: {
      id: "Ikuti karya, eksperimen IoT, dan aktivitas terbaru saya di media sosial.",
      en: "Follow my latest work, IoT builds, and updates across social platforms.",
    },
    directChannels: { id: "Kontak Langsung", en: "Direct Channels" },
    locationLabel: { id: "Lokasi", en: "Location" },
  },
  aboutPage: {
    title: { id: "Tentang Saya", en: "About Me" },
    subtitle: {
      id: "Rekam jejak pendidikan, penghargaan, pengalaman kerja, dan kontribusi komunitas teknologi.",
      en: "Education, awards, engineering experience, and community leadership.",
    },
    educationTitle: { id: "Pendidikan", en: "Education" },
    finalProjectLabel: { id: "Tugas Akhir", en: "Final Project" },
    achievementsTitle: {
      id: "Penghargaan & Sertifikasi",
      en: "Achievements & Certifications",
    },
    experienceTitle: {
      id: "Pengalaman Profesional & Mengajar",
      en: "Professional & Teaching Experience",
    },
    organizationTitle: {
      id: "Organisasi & Kepanitiaan",
      en: "Organization & Leadership",
    },
    softSkillsTitle: {
      id: "Soft Skills & Bahasa",
      en: "Soft Skills & Languages",
    },
    currentBadge: { id: "Aktif", en: "Current" },
  },
  blogDetail: {
    backToBlog: { id: "Kembali ke Daftar Artikel", en: "Back to Articles" },
    notFoundTitle: { id: "Artikel tidak ditemukan", en: "Article not found" },
  },
  footer: {
    rights: {
      id: "Seluruh hak cipta dilindungi.",
      en: "All rights reserved.",
    },
    builtWith: {
      id: "Dibangun dengan Next.js & Tailwind CSS",
      en: "Built with Next.js & Tailwind CSS",
    },
  },
};

