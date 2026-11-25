import {
  AchievementItem,
  ExperienceItem,
  LocalizedText,
  Post,
  Project,
  SkillGroup,
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
  linkedinUrl: "https://www.linkedin.com/in/tu-bagus-dwi-fikri",
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
      value: "3.79",
      label: { id: "IPK / 4.00 (S1 Informatika)", en: "GPA / 4.00 (Computer Science)" },
    },
    {
      value: "Gold",
      label: { id: "IREX 2024, UiTM Malaysia", en: "IREX 2024, UiTM Malaysia" },
    },
    {
      value: "HKI",
      label: { id: "Hak Cipta Deep Learning", en: "Registered Deep Learning IP" },
    },
    {
      value: "8+",
      label: { id: "Peran IT, IoT & Pengajaran", en: "IT, IoT & Mentoring Roles" },
    },
  ],
};

export const education = {
  institution: "Universitas Islam Riau",
  degree: {
    id: "Sarjana Ilmu Komputer (S1 Teknik Informatika)",
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
    id: "hki-deep-learning",
    title: {
      id: "Surat Pencatatan Ciptaan (HKI) — Deep Learning Analisis Data Pasien",
      en: "Intellectual Property (HKI) — Deep Learning Patient Anomaly Detection",
    },
    issuer: "Direktorat Jenderal Kekayaan Intelektual",
    year: "2024",
    category: { id: "Hak Kekayaan Intelektual", en: "Intellectual Property" },
    description: {
      id: 'Tercatat secara resmi atas karya "Algoritma Analisa Ketidaknormalan Data Pasien Menggunakan Teknologi Deep Learning Pada Cloud Computing".',
      en: 'Officially registered for "Algoritma Analisa Ketidaknormalan Data Pasien Menggunakan Teknologi Deep Learning Pada Cloud Computing".',
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
    id: "air-quality-iot",
    title: {
      id: "Monitoring Kualitas Udara & Asap Halte Bus (IoT)",
      en: "Urban Bus Stop Air Quality & Smoke Monitoring",
    },
    subtitle: {
      id: "Sistem pemantauan polusi perkotaan secara real-time",
      en: "Real-time urban air pollution telemetry system",
    },
    description: {
      id: "Perangkat IoT pemantau kualitas udara dan emisi asap di halte bus perkotaan menggunakan sensor MQ-135 dan MQ-2 dengan transmisi data real-time. Penelitian ini dipublikasikan oleh Universitas Islam Riau dan diliput oleh GoRiau.com.",
      en: "An IoT monitoring node deployed for urban bus stops using MQ-135 and MQ-2 gas sensors to detect harmful smoke and air quality drops in real time. Featured on Universitas Islam Riau's official portal and GoRiau.com.",
    },
    category: "IoT",
    year: "2024",
    badge: { id: "Diliput Media & Tugas Akhir", en: "Media Featured · Thesis" },
    techStack: ["ESP32", "C++", "MQ-135", "MQ-2", "MQTT", "WiFi"],
    highlights: {
      id: [
        "Kalibrasi sensor gas MQ-135 (kualitas udara) dan MQ-2 (asap/gas mudah terbakar) untuk lingkungan terbuka.",
        "Pengiriman data telemetri nirkabel secara real-time untuk pemantauan ambang batas bahaya.",
        "Dipublikasikan di ETD UIR, uir.ac.id, dan media lokal GoRiau.com.",
      ],
      en: [
        "Dual-sensor telemetry combining MQ-135 (air quality) and MQ-2 (smoke/combustible gases) for outdoor shelters.",
        "Real-time wireless data transmission with automated air-quality threshold alerts.",
        "Published in UIR's institutional repository and featured on uir.ac.id and GoRiau.com.",
      ],
    },
    githubUrl: "https://github.com/Tugood7",
    featured: true,
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
    badge: { id: "Terdaftar HKI", en: "Registered IP (HKI)" },
    techStack: ["Python", "Deep Learning", "Cloud Computing", "Jupyter Notebook"],
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
    featured: true,
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
    featured: true,
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
    featured: true,
  },
  {
    id: "it-maintenance-app",
    title: {
      id: "Aplikasi Dokumentasi & Pelaporan Pemeliharaan IT Kampus",
      en: "Institutional IT Maintenance & Asset Reporting App",
    },
    subtitle: {
      id: "Manajemen tiket, diagnosa perangkat lab & laporan preventif",
      en: "Lab hardware diagnostics & preventive maintenance tracker",
    },
    description: {
      id: "Aplikasi internal untuk mendokumentasikan gangguan perangkat komputer, laboratorium akademik, dan peralatan IoT beserta riwayat pemeliharaan preventif dan penyelesaian masalah untuk pelaporan institusi.",
      en: "An internal web application created to log hardware faults, IoT laboratory device diagnostics, preventive maintenance schedules, and issue resolutions for streamlined institutional reporting.",
    },
    category: "Web",
    year: "2025",
    badge: { id: "Sistem Internal", en: "Internal Tool" },
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "MySQL"],
    highlights: {
      id: [
        "Mencatat riwayat pemeliharaan preventif perangkat PC dan laboratorium IoT secara terstruktur.",
        "Mempercepat pembuatan laporan teknis berkala bagi tim IT inti.",
        "Meminimalkan downtime laboratorium melalui pelacakan masalah yang transparan.",
      ],
      en: [
        "Centralized preventive maintenance logs for PCs, peripherals, and academic IoT labs.",
        "Streamlined institutional technical reporting for the core IT department.",
        "Reduced lab downtime through structured issue tracking and resolution history.",
      ],
    },
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

