const languageSwitcher = (() => {
    const translations = {
        "Language": "Bahasa",
        "Home": "Beranda",
        "About": "Tentang Kami",
        "Services": "Layanan",
        "Insights": "Wawasan",
        "Contact": "Kontak",
        "Let's talk": "Mari berbincang",
        "Hospitality management": "Manajemen perhotelan",
        "Property development": "Pengembangan properti",
        "Commercial growth": "Pertumbuhan komersial",
        "Strategic advisory": "Konsultasi strategis",
        "Hospitality management & development": "Manajemen & pengembangan perhotelan",
        "Bali & Jabodetabek": "Bali & Jabodetabek",
        "Bali · Jabodetabek, Indonesia": "Bali · Jabodetabek, Indonesia",
        "Our services": "Layanan kami",
        "Integrated solutions.": "Solusi terpadu.",
        "Made for your property.": "Dirancang untuk properti Anda.",
        "From concept to day-to-day operations, support that fits the property and the opportunity.": "Dari konsep hingga operasional sehari-hari, dukungan yang sesuai dengan properti dan peluang Anda.",
        "ONE PARTNER": "SATU MITRA",
        "Support across the hospitality lifecycle.": "Dukungan di setiap tahap bisnis perhotelan.",
        "Different properties.": "Properti yang berbeda.",
        "Different priorities.": "Prioritas yang berbeda.",
        "Every property has its own needs, opportunities and challenges. We shape our services around what will make the biggest difference for your business.": "Setiap properti memiliki kebutuhan, peluang, dan tantangannya sendiri. Kami menyesuaikan layanan untuk memberikan dampak terbesar bagi bisnis Anda.",
        "Bring us in for an operational partnership, a property upgrade or a stronger commercial strategy. We can start with a focused review, then shape the right scope together.": "Libatkan kami untuk kemitraan operasional, peningkatan properti, atau strategi komersial yang lebih kuat. Kita dapat memulai dengan tinjauan terarah, lalu menyusun lingkup kerja yang tepat bersama.",
        "Operations · standards · performance": "Operasional · standar · kinerja",
        "Hospitality": "Perhotelan",
        "management": "manajemen",
        "Build efficient operations and consistent guest experiences through considered oversight, clear standards and coordinated teams.": "Bangun operasional yang efisien dan pengalaman tamu yang konsisten melalui pengawasan yang cermat, standar yang jelas, dan tim yang terkoordinasi.",
        "Explore management": "Jelajahi layanan manajemen",
        "Design · upgrade · reposition": "Desain · peningkatan · reposisi",
        "Property": "Properti",
        "development": "pengembangan",
        "Identify opportunities to enhance, reposition and develop hospitality assets into more compelling businesses.": "Temukan peluang untuk meningkatkan, mereposisi, dan mengembangkan aset perhotelan menjadi bisnis yang lebih menarik.",
        "Explore development": "Jelajahi layanan pengembangan",
        "Revenue · distribution · sales": "Pendapatan · distribusi · penjualan",
        "Commercial": "Komersial",
        "growth": "pertumbuhan",
        "Strengthen visibility, distribution and revenue performance with a strategy built around your market and guests.": "Perkuat visibilitas, distribusi, dan kinerja pendapatan melalui strategi yang disesuaikan dengan pasar dan tamu Anda.",
        "Explore commercial": "Jelajahi layanan komersial",
        "Feasibility · investment · expansion": "Kelayakan · investasi · ekspansi",
        "Strategic": "Strategis",
        "advisory": "konsultasi",
        "Make better informed business decisions with feasibility review, planning and market perspectives.": "Ambil keputusan bisnis yang lebih tepat melalui kajian kelayakan, perencanaan, dan perspektif pasar.",
        "Discuss an opportunity": "Diskusikan peluang",
        "Tailored to you": "Disesuaikan untuk Anda",
        "Start with what": "Mulai dari hal yang",
        "matters ": "paling penting.",
        "We can scope support around your property, objectives and investment capacity. The first step is a practical conversation.": "Kami dapat menyesuaikan dukungan dengan properti, tujuan, dan kapasitas investasi Anda. Langkah pertama adalah percakapan yang praktis.",
        "Talk to our team": "Bicarakan dengan tim kami",
        "About us": "Tentang kami",
        "Built on hospitality.": "Berlandaskan keramahtamahan.",
        "Driven by possibility.": "Digerakkan oleh berbagai kemungkinan.",
        "We help hospitality property owners turn their potential into stronger, more valuable businesses.": "Kami membantu pemilik properti perhotelan mengubah potensinya menjadi bisnis yang lebih kuat dan bernilai.",
        "WHO WE ARE": "SIAPA KAMI",
        "Thoughtful hospitality, from the ground up.": "Keramahtamahan yang penuh perhatian, dari awal hingga akhir.",
        "We see the business": "Kami melihat bisnis",
        "behind the ": "di balik",
        "beautiful space.": "ruang yang indah.",
        "Nava Nirmana brings together hospitality operations, commercial strategy and property development to help owners build businesses that are attractive, efficient and sustainable.": "Nava Nirmana memadukan operasional perhotelan, strategi komersial, dan pengembangan properti untuk membantu pemilik membangun bisnis yang menarik, efisien, dan berkelanjutan.",
        "Inspired by Sanskrit words connected with newness and creation, our name reflects a simple belief: the next stage of a property can be created from the potential already there. Our work is practical, shaped around each owner's goals, investment capacity and property.": "Terinspirasi dari kata-kata Sanskerta yang berkaitan dengan kebaruan dan penciptaan, nama kami mencerminkan keyakinan sederhana: tahap berikutnya dari sebuah properti dapat dibangun dari potensi yang sudah ada. Pendekatan kami praktis dan disesuaikan dengan tujuan, kapasitas investasi, serta properti setiap pemilik.",
        "Our vision": "Visi kami",
        "To be a trusted partner in creating ": "Menjadi mitra tepercaya dalam menciptakan ",
        "sustainable hospitality value.": "nilai perhotelan yang berkelanjutan.",
        "We want to be known for helping owners make thoughtful decisions and transform property potential into lasting business performance.": "Kami ingin dikenal karena membantu pemilik mengambil keputusan yang cermat dan mengubah potensi properti menjadi kinerja bisnis jangka panjang.",
        "Our mission": "Misi kami",
        "Improve the operational and commercial performance of hospitality assets.": "Meningkatkan kinerja operasional dan komersial aset perhotelan.",
        "Develop meaningful property concepts and guest experiences.": "Mengembangkan konsep properti dan pengalaman tamu yang bermakna.",
        "Help owners make informed strategic and investment decisions.": "Membantu pemilik mengambil keputusan strategis dan investasi berdasarkan informasi yang tepat.",
        "Build sustainable hospitality businesses through effective management and development.": "Membangun bisnis perhotelan yang berkelanjutan melalui manajemen dan pengembangan yang efektif.",
        "Our philosophy": "Filosofi kami",
        "See the potential.": "Lihat potensinya.",
        "Create the better.": "Wujudkan yang lebih baik.",
        "We believe the strongest hospitality businesses balance a compelling property with clear operations, guest care and commercial discipline.": "Kami percaya bisnis perhotelan yang kuat menyeimbangkan properti yang menarik dengan operasional yang jelas, pelayanan tamu, dan disiplin komersial.",
        "Reimagine": "Bayangkan kembali",
        "Look beyond the current setup to discover new opportunities and a clearer position in the market.": "Lihat melampaui kondisi saat ini untuk menemukan peluang baru dan posisi pasar yang lebih jelas.",
        "Renew": "Perbarui",
        "Improve operations, experiences and commercial strategies with practical, considered action.": "Tingkatkan operasional, pengalaman, dan strategi komersial melalui langkah yang praktis dan terencana.",
        "Elevate": "Tingkatkan",
        "Build lasting property value through sustainable growth and decisions made with purpose.": "Bangun nilai properti jangka panjang melalui pertumbuhan berkelanjutan dan keputusan yang terarah.",
        "Let's grow together": "Mari bertumbuh bersama",
        "Let's explore what": "Mari jelajahi potensi",
        "your property ": "properti Anda ",
        "can become.": "di masa depan.",
        "Start a conversation": "Mulai percakapan",
        "Our approach": "Pendekatan kami",
        "People, property and performance in view.": "Memperhatikan tim, properti, dan kinerja.",
        "Thoughtful oversight.": "Pengawasan yang cermat.",
        "Confident operations.": "Operasional yang andal.",
        "We bring operational structure, service consistency and commercial discipline to hospitality businesses.": "Kami menghadirkan struktur operasional, konsistensi layanan, dan disiplin komersial bagi bisnis perhotelan.",
        "From pre-opening setup to ongoing performance reviews, our management approach is shaped to the property, its team and its business objectives.": "Dari persiapan sebelum pembukaan hingga tinjauan kinerja berkala, pendekatan manajemen kami disesuaikan dengan properti, tim, dan tujuan bisnisnya.",
        "Management scope": "Lingkup manajemen",
        "Connected parts.": "Bagian-bagian yang saling terhubung.",
        "One clear view.": "Satu gambaran yang jelas.",
        "We consider the operating picture as a whole, helping owners improve the details that shape guest experience and business performance.": "Kami melihat operasional secara menyeluruh dan membantu pemilik meningkatkan berbagai hal yang membentuk pengalaman tamu dan kinerja bisnis.",
        "Operations": "Operasional",
        "Daily oversight, coordination and operating rhythm.": "Pengawasan harian, koordinasi, dan ritme operasional.",
        "People": "Sumber daya manusia",
        "Team structure, training and service development.": "Struktur tim, pelatihan, dan pengembangan layanan.",
        "Finance": "Keuangan",
        "Budgeting, cost awareness and regular reporting.": "Penganggaran, pengendalian biaya, dan pelaporan berkala.",
        "Guest experience": "Pengalaman tamu",
        "Guest journey, service quality and thoughtful details.": "Perjalanan tamu, kualitas layanan, dan detail yang diperhatikan.",
        "Quality": "Kualitas",
        "SOP development, implementation and standards.": "Penyusunan dan penerapan SOP serta standar.",
        "Performance": "Kinerja",
        "Monitoring, business reviews and improvement planning.": "Pemantauan, tinjauan bisnis, dan perencanaan peningkatan.",
        "A coordinated team": "Tim yang terkoordinasi",
        "Service is a system": "Layanan adalah sistem",
        "made human.": "yang dijalankan manusia.",
        "Clear standards give teams confidence. Thoughtful service gives guests a reason to remember their stay.": "Standar yang jelas membangun kepercayaan diri tim. Layanan yang penuh perhatian memberi tamu alasan untuk mengingat pengalaman menginapnya.",
        "Ways to work together": "Cara bekerja sama",
        "The right level": "Tingkat dukungan",
        "of support.": "yang tepat.",
        "Engagements are tailored to your property and can focus on a specific stage of its journey.": "Kerja sama disesuaikan dengan properti Anda dan dapat berfokus pada tahap tertentu dalam perjalanannya.",
        "Pre-opening": "Persiapan pembukaan",
        "Establish operating foundations, roles, standards and readiness before welcoming guests.": "Menyiapkan fondasi operasional, peran, standar, dan kesiapan sebelum menyambut tamu.",
        "Full management": "Manajemen menyeluruh",
        "Coordinate the ongoing hospitality operation, commercial priorities and owner reporting.": "Mengoordinasikan operasional perhotelan, prioritas komersial, dan pelaporan kepada pemilik secara berkelanjutan.",
        "Operational advisory": "Konsultasi operasional",
        "Review existing operations and identify practical ways to improve consistency and performance.": "Meninjau operasional yang ada dan menemukan cara praktis untuk meningkatkan konsistensi dan kinerja.",
        "Scope, fees and third-party costs are agreed separately for each property. Financial projections are estimates and are not guarantees of performance.": "Lingkup kerja, biaya, dan biaya pihak ketiga disepakati secara terpisah untuk setiap properti. Proyeksi keuangan merupakan perkiraan dan bukan jaminan kinerja.",
        "Let's strengthen": "Mari perkuat",
        "your ": "",
        "operation.": "operasional Anda.",
        "Discuss your property": "Diskusikan properti Anda",
        "The opportunity": "Peluang",
        "Property condition. Guest value. Business purpose.": "Kondisi properti. Nilai bagi tamu. Tujuan bisnis.",
        "A beautiful space": "Ruang yang indah",
        "is only the ": "hanyalah ",
        "beginning.": "permulaan.",
        "The real opportunity lies in how well a property performs as a hospitality business.": "Peluang sebenarnya terletak pada seberapa baik properti beroperasi sebagai bisnis perhotelan.",
        "We help owners understand the current asset, consider how it could better serve the market and plan improvements that support long-term business objectives.": "Kami membantu pemilik memahami aset saat ini, mempertimbangkan cara terbaik untuk memenuhi kebutuhan pasar, dan merencanakan peningkatan yang mendukung tujuan bisnis jangka panjang.",
        "A considered process": "Proses yang terencana",
        "Assess. Transform.": "Nilai. Transformasikan.",
        "Elevate.": "Tingkatkan.",
        "We connect physical improvements to the guest experience and the business model, so each decision has a clear purpose.": "Kami menghubungkan peningkatan fisik dengan pengalaman tamu dan model bisnis agar setiap keputusan memiliki tujuan yang jelas.",
        "See it clearly.": "Pahami dengan jelas.",
        "Review the property's current condition, positioning, guest fit and potential opportunities.": "Tinjau kondisi, posisi, kesesuaian dengan tamu, dan peluang potensial properti saat ini.",
        "Improve with purpose.": "Tingkatkan dengan tujuan.",
        "Shape concepts, upgrades and repositioning ideas around demand and investment capacity.": "Susun konsep, peningkatan, dan gagasan reposisi berdasarkan permintaan dan kapasitas investasi.",
        "Build for what's next.": "Bersiap untuk langkah berikutnya.",
        "Connect development priorities to operational readiness and long-term business goals.": "Hubungkan prioritas pengembangan dengan kesiapan operasional dan tujuan bisnis jangka panjang.",
        "What we consider": "Hal yang kami pertimbangkan",
        "Better decisions": "Keputusan yang lebih baik",
        "before the ": "sebelum ",
        "build.": "pembangunan.",
        "Property assessment and opportunity identification": "Penilaian properti dan identifikasi peluang",
        "Concept development and market repositioning": "Pengembangan konsep dan reposisi pasar",
        "Design and improvement planning": "Perencanaan desain dan peningkatan",
        "Additional revenue stream opportunities": "Peluang sumber pendapatan tambahan",
        "Feasibility, yield planning and investment priorities": "Studi kelayakan, perencanaan hasil, dan prioritas investasi",
        "Renovation budgets, supplier engagement and implementation costs are scoped separately and depend on the selected project.": "Anggaran renovasi, keterlibatan pemasok, dan biaya pelaksanaan ditentukan secara terpisah sesuai proyek yang dipilih.",
        "Property transformation": "Transformasi properti",
        "Make your next": "Jadikan investasi",
        "investment ": "Anda berikutnya ",
        "count.": "lebih berarti.",
        "Commercial thinking": "Pemikiran komersial",
        "Beyond occupancy. Into overall performance.": "Melampaui tingkat hunian. Menuju kinerja menyeluruh.",
        "More visibility.": "Visibilitas lebih tinggi.",
        "Better decisions.": "Keputusan lebih baik.",
        "Strong commercial performance comes from the right combination of positioning, pricing, distribution, guest experience and operational efficiency.": "Kinerja komersial yang kuat berasal dari kombinasi tepat antara posisi pasar, harga, distribusi, pengalaman tamu, dan efisiensi operasional.",
        "We look at the whole picture to help owners understand the market, focus their sales effort and make informed revenue decisions.": "Kami melihat gambaran menyeluruh untuk membantu pemilik memahami pasar, memfokuskan upaya penjualan, dan mengambil keputusan pendapatan berdasarkan informasi.",
        "Our expertise": "Keahlian kami",
        "Strategy with": "Strategi dengan",
        "practical reach.": "penerapan nyata.",
        "Our work brings the commercial disciplines together so each decision supports the property's wider goals.": "Kami menyatukan berbagai disiplin komersial agar setiap keputusan mendukung tujuan properti secara menyeluruh.",
        "Revenue management": "Manajemen pendapatan",
        "Pricing strategy, seasonal yield planning, demand review and revenue analysis.": "Strategi harga, perencanaan hasil musiman, tinjauan permintaan, dan analisis pendapatan.",
        "Sales & distribution": "Penjualan & distribusi",
        "OTA strategy, direct booking opportunities, corporate accounts and partnerships.": "Strategi OTA, peluang pemesanan langsung, akun korporat, dan kemitraan.",
        "Brand & marketing": "Merek & pemasaran",
        "Positioning, digital presence, content strategy and stronger market visibility.": "Posisi pasar, kehadiran digital, strategi konten, dan visibilitas pasar yang lebih kuat.",
        "Business development": "Pengembangan bisnis",
        "New markets, additional revenue streams and commercial partnership opportunities.": "Pasar baru, sumber pendapatan tambahan, dan peluang kemitraan komersial.",
        "A fuller view": "Gambaran yang lebih menyeluruh",
        "More than": "Lebih dari sekadar",
        "occupancy.": "tingkat hunian.",
        "We look beyond room nights to understand the broader financial and commercial potential of a property — while keeping recommendations grounded in the available information.": "Kami melihat lebih dari sekadar jumlah malam kamar untuk memahami potensi finansial dan komersial properti secara luas, dengan rekomendasi yang berlandaskan informasi tersedia.",
        "Commercial growth": "Pertumbuhan komersial",
        "Let's find your": "Mari temukan",
        "next ": "peluang Anda ",
        "opportunity.": "berikutnya.",
        "Explore a partnership": "Jelajahi kemitraan",
        "Contact Nava Nirmana": "Hubungi Nava Nirmana",
        "Let's create something": "Mari ciptakan sesuatu",
        "more valuable.": "yang lebih bernilai.",
        "Every great hospitality business begins with an opportunity. Tell us about your property and what you're working toward.": "Setiap bisnis perhotelan yang hebat dimulai dari sebuah peluang. Ceritakan tentang properti Anda dan tujuan yang ingin dicapai.",
        "Start a conversation": "Mulai percakapan",
        "We'd love to hear": "Kami ingin mendengar",
        "what you're ": "apa yang sedang Anda ",
        "building.": "bangun.",
        "Whether you're looking to improve performance, reposition a property or explore a new opportunity, we're ready to listen.": "Apakah Anda ingin meningkatkan kinerja, mereposisi properti, atau menjajaki peluang baru, kami siap mendengarkan.",
        "EMAIL": "EMAIL",
        "WHATSAPP": "WHATSAPP",
        "LOCATIONS": "LOKASI",
        "Tell us a little about it.": "Ceritakan sedikit tentang properti Anda.",
        "Share a few details and we'll help you start the conversation.": "Bagikan beberapa detail dan kami akan membantu memulai percakapan.",
        "Full name": "Nama lengkap",
        "Your name": "Nama Anda",
        "Company / property": "Perusahaan / properti",
        "Property or company name": "Nama properti atau perusahaan",
        "Email address": "Alamat email",
        "WhatsApp number": "Nomor WhatsApp",
        "Property location": "Lokasi properti",
        "City or area": "Kota atau area",
        "Property type": "Jenis properti",
        "Select a type": "Pilih jenis",
        "Villa": "Vila",
        "Boutique hotel": "Hotel butik",
        "Resort": "Resor",
        "Leisure property": "Properti rekreasi",
        "Other": "Lainnya",
        "Service of interest": "Layanan yang diminati",
        "Select a service": "Pilih layanan",
        "Not sure yet": "Belum yakin",
        "Tell us about your property": "Ceritakan tentang properti Anda",
        "What are you looking to improve or explore?": "Apa yang ingin Anda tingkatkan atau jajaki?",
        "Prepare email enquiry": "Siapkan pertanyaan melalui email",
        "Your email app will open with your enquiry ready to send.": "Aplikasi email Anda akan terbuka dengan pesan yang siap dikirim.",
        "Thoughtful hospitality": "Keramahtamahan penuh perhatian",
        "starts with a conversation.": "dimulai dengan percakapan.",
        "Message": "Kirim pesan",
        "us on WhatsApp": "kepada kami melalui WhatsApp",
        "Get in touch": "Hubungi kami",
        "All rights reserved.": "Hak cipta dilindungi.",
        "Nava Nirmana perspectives": "Perspektif Nava Nirmana",
        "Ideas for hospitality": "Gagasan untuk perhotelan",
        "moving forward.": "yang terus berkembang.",
        "Thoughtful perspectives for creating better guest experiences and stronger property performance.": "Perspektif yang cermat untuk menciptakan pengalaman tamu yang lebih baik dan kinerja properti yang lebih kuat.",
        "THE JOURNAL": "JURNAL",
        "The journal": "Jurnal",
        "Useful ideas.": "Gagasan yang berguna.",
        "Clear perspective.": "Perspektif yang jelas.",
        "Hospitality is built on a thousand decisions. We share practical ways to think about the ones that shape a property's future.": "Bisnis perhotelan dibangun dari ribuan keputusan. Kami berbagi cara praktis untuk memikirkan keputusan yang membentuk masa depan properti.",
        "Field notes & perspectives": "Catatan lapangan & perspektif",
        "Development · Operations · Growth": "Pengembangan · Operasional · Pertumbuhan",
        "Property development": "Pengembangan properti",
        "Featured": "Pilihan",
        "Beautiful property doesn't always mean profitable property.": "Properti yang indah tidak selalu berarti properti yang menguntungkan.",
        "A compelling space is a powerful start. But lasting performance comes from the relationship between a property, its market, and the guest it is designed to serve.": "Ruang yang menarik adalah awal yang kuat. Namun, kinerja jangka panjang berasal dari hubungan antara properti, pasarnya, dan tamu yang ingin dilayani.",
        "Read the perspective": "Baca perspektif",
        "Begin by asking what the property is best placed to offer. Consider the guest profile, local competition, seasonal demand, and the experience the space can credibly deliver. Then look at where the operating model supports that promise — and where it creates friction.": "Mulailah dengan menanyakan hal terbaik yang dapat ditawarkan properti. Pertimbangkan profil tamu, persaingan lokal, permintaan musiman, dan pengalaman yang dapat diberikan secara konsisten. Lalu tinjau apakah model operasional mendukung janji tersebut atau justru menimbulkan hambatan.",
        "When improvement plans connect design choices to guest value and a clear business purpose, owners can make more considered decisions about what to prioritize.": "Ketika rencana peningkatan menghubungkan pilihan desain dengan nilai bagi tamu dan tujuan bisnis yang jelas, pemilik dapat menentukan prioritas dengan lebih cermat.",
        "Five signs a property needs more than a management team.": "Lima tanda properti membutuhkan lebih dari sekadar tim manajemen.",
        "Day-to-day oversight matters. Recurring performance issues can also point to deeper questions about the offer, guest journey, team structure, or market position.": "Pengawasan sehari-hari itu penting. Masalah kinerja yang berulang juga dapat menunjukkan persoalan lebih mendalam terkait penawaran, perjalanan tamu, struktur tim, atau posisi pasar.",
        "Look for repeated guest feedback, inconsistent service standards, unclear roles, an offer that feels out of step with the market, or pricing and distribution that do not reflect demand. These are useful signals to review the full operating picture.": "Perhatikan masukan tamu yang berulang, standar layanan yang tidak konsisten, peran yang tidak jelas, penawaran yang kurang sesuai dengan pasar, atau harga dan distribusi yang tidak mencerminkan permintaan. Ini adalah sinyal untuk meninjau operasional secara menyeluruh.",
        "A focused review can help separate quick operational fixes from opportunities that call for broader repositioning or commercial planning.": "Tinjauan terarah dapat membantu membedakan perbaikan operasional cepat dari peluang yang membutuhkan reposisi atau perencanaan komersial lebih luas.",
        "Revenue & strategy": "Pendapatan & strategi",
        "Beyond occupancy: understand your property's true performance.": "Melampaui tingkat hunian: pahami kinerja sesungguhnya dari properti Anda.",
        "Occupancy shows how many rooms are sold, but not the whole story. A complete view considers rate, channel mix, operating costs, guest fit, and the contribution of each booking.": "Tingkat hunian menunjukkan jumlah kamar yang terjual, tetapi bukan keseluruhan cerita. Gambaran lengkap juga mencakup tarif, bauran kanal, biaya operasional, kesesuaian tamu, dan kontribusi setiap pemesanan.",
        "Review performance across the full booking journey: where demand comes from, how rates change through the season, which channels deliver suitable guests, and how operational costs move alongside revenue.": "Tinjau kinerja di seluruh proses pemesanan: sumber permintaan, perubahan tarif sepanjang musim, kanal yang mendatangkan tamu yang sesuai, serta pergerakan biaya operasional seiring pendapatan.",
        "Regular reporting makes patterns easier to see and helps owners ask more useful questions when setting priorities.": "Pelaporan berkala memudahkan pemilik melihat pola dan mengajukan pertanyaan yang lebih tepat saat menentukan prioritas.",
        "Have a question about a property, a team, or what comes next? Good thinking starts with a conversation.": "Punya pertanyaan tentang properti, tim, atau langkah selanjutnya? Pemikiran yang baik dimulai dari percakapan.",
        "Keep the conversation going": "Lanjutkan percakapan",
        "Let's put good": "Mari wujudkan",
        "ideas into ": "gagasan baik menjadi ",
        "practice.": "aksi nyata.",
        "Talk with Nava Nirmana": "Bicarakan dengan Nava Nirmana",
        "See the business": "Lihat bisnisnya",
        "Beyond Management.": "Melampaui Manajemen.",
        "Into Value.": "Menuju Nilai.",
        "Hospitality with intention": "Keramahtamahan yang bermakna",
        "We help hospitality property owners unlock their property's full potential through strategic management, thoughtful development and commercial growth.": "Kami membantu pemilik properti perhotelan membuka potensi penuh properti melalui manajemen strategis, pengembangan yang cermat, dan pertumbuhan komersial.",
        "Explore our services": "Jelajahi layanan kami",
        "Core disciplines": "Disiplin utama",
        "Property view": "Perspektif properti",
        "Scroll to explore": "Gulir untuk menjelajahi"
    };

    const existing = document.querySelector('.floating-language-switcher');
    const wrapper = existing || document.createElement('div');
    if (!existing) {
        wrapper.className = 'floating-language-switcher';
        wrapper.setAttribute('role', 'group');
        wrapper.innerHTML = `
            <span class="lang-switcher-label">Language</span>
            <div class="lang-switcher-options">
                <button type="button" class="lang-option" data-lang="en">EN</button>
                <button type="button" class="lang-option" data-lang="id">ID</button>
            </div>
        `;
        document.body.appendChild(wrapper);
    }
    wrapper.setAttribute('aria-label', 'Language switcher');

    const reverseTranslations = Object.fromEntries(
        Object.entries(translations).map(([english, indonesian]) => [indonesian, english]),
    );
    const originalText = new WeakMap();
    const normalize = (text) => text.replace(/\s+/g, ' ').trim();

    const translateTextNodes = (lang, root = document.body) => {
        const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
            acceptNode(node) {
                if (!node.parentElement || node.parentElement.closest('.floating-language-switcher, script, style, noscript')) {
                    return NodeFilter.FILTER_REJECT;
                }
                return NodeFilter.FILTER_ACCEPT;
            },
        });
        let node;
        while ((node = walker.nextNode())) {
            if (!originalText.has(node)) originalText.set(node, node.textContent);
            const source = originalText.get(node);
            const key = normalize(source);
            const translated = lang === 'id' ? translations[key] : reverseTranslations[key];
            if (!translated) continue;
            const leading = source.match(/^\s*/)[0];
            const trailing = source.match(/\s*$/)[0];
            node.textContent = `${leading}${translated}${trailing}`;
        }
    };

    const updateLanguage = (lang, persist = true) => {
        if (lang !== 'id') lang = 'en';
        document.documentElement.lang = lang === 'id' ? 'id' : 'en';
        document.body.dataset.lang = lang;
        wrapper.setAttribute('aria-label', lang === 'id' ? 'Pemilih bahasa' : 'Language switcher');
        const label = wrapper.querySelector('.lang-switcher-label');
        if (label) label.textContent = lang === 'id' ? 'Bahasa' : 'Language';

        wrapper.querySelectorAll('.lang-option').forEach((button) => {
            const active = button.dataset.lang === lang;
            button.classList.toggle('is-active', active);
            button.setAttribute('aria-pressed', String(active));
            button.setAttribute('aria-label', button.dataset.lang === 'id' ? 'Bahasa Indonesia' : 'English');
        });

        translateTextNodes(lang);
        if (persist) {
            try {
                localStorage.setItem('navanirmana-language', lang);
            } catch (error) {
                // The language switcher still works when storage is unavailable.
            }
        }
    };

    wrapper.addEventListener('click', (event) => {
        const button = event.target.closest('.lang-option');
        if (button) updateLanguage(button.dataset.lang);
    });

    let savedLanguage = 'en';
    try {
        savedLanguage = localStorage.getItem('navanirmana-language') || 'en';
    } catch (error) {
        // Use English as the default when storage is unavailable.
    }
    updateLanguage(savedLanguage, false);
})();
