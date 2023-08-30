 // Simple AI
 function aiBot(input) {
    let program;

    if (
      input.toLowerCase().includes("hei") ||
      input.toLowerCase().includes("hai") ||
      input.toLowerCase().includes("hello") ||
      input.toLowerCase().includes("assalamualaikum")
    ) {
      if (input.toLowerCase().includes("hei")) {
        program = "Hei juga! Ada yang bisa saya bantu?";
      } else if (input.toLowerCase().includes("hai")) {
        program = "Hai juga! Ada yang bisa saya bantu?";
      } else if (input.toLowerCase().includes("hello")) {
        program = "Hello juga! Ada yang bisa saya bantu";
      } else if (input.toLowerCase().includes("assalamualaikum")) {
        program = "Waalaikumsalam! Ada yang bisa saya bantu";
      }
    } else if (
      input.toLowerCase().includes("kamu siapa") ||
      input.toLowerCase().includes("siapa kamu") ||
      input.toLowerCase().includes("kenalkan dirimu")
    ) {
      program =
        "Aku adalah Autobot, saya dibangun dengan Bahasa Pemrograman Javascript, saya akan membantumu seseuai kemampuanku";
    } else if (input.toLowerCase().includes("kamu dibangun oleh siapa")) {
      program =
        "Saya dibangun oleh seorang Programmer asal Indramayu Indonesia";
    } else if (
      input.toLowerCase().includes("siapa penemu lampu") ||
      input.toLowerCase().includes("siapa penemu mobil") ||
      input.toLowerCase().includes("siapa penemu motor") ||
      input.toLowerCase().includes("siapa penemu komputer") ||
      input.toLowerCase().includes("siapa penemu algoritma")
    ) {
      if (input.toLowerCase().includes("siapa penemu lampu")) {
        program =
          "Penemu lampu pijar atau lampu Edison adalah Thomas Alva Edison. Ia berhasil mengembangkan lampu pijar yang praktis dan efisien pada tahun 1879. Edison menggunakan sebuah benang karbon yang dipanaskan hingga memancarkan cahaya tanpa terbakar, yang memungkinkan lampu tersebut untuk digunakan dalam penerangan rumah dan bisnis. Lampu pijar Edison merupakan tonggak penting dalam perkembangan teknologi penerangan dan berkontribusi pada perubahan besar dalam kehidupan sehari-hari manusia.";
      } else if (input.toLowerCase().includes("siapa penemu mobil")) {
        program =
          'Kendaraan bermotor pertama yang diakui sebagai "mobil" modern dikembangkan oleh Karl Benz dari Jerman. Ia menciptakan mobil pertamanya yang dikenal sebagai "Motorwagen" pada tahun 1885. Motorwagen adalah kendaraan tiga-roda dengan mesin bensin internal yang dikembangkan oleh Benz sendiri. Ini dianggap sebagai cikal bakal mobil modern karena menggunakan mesin pembakaran internal dan dirancang khusus untuk penggunaan jalan. Namun, perlu dicatat bahwa sebelumnya terdapat percobaan dan eksperimen dengan kendaraan bermotor oleh banyak penemu lain, termasuk Nicolas-Joseph Cugnot dari Prancis pada akhir abad ke-18. Tetapi kontribusi Karl Benz yang paling dikenal dan berpengaruh dalam mengembangkan konsep mobil modern.';
      } else if (input.toLowerCase().includes("siapa penemu motor")) {
        program =
          "penemu motor pertama di dunia adalah Ernest Michaux yang dibangun pertama antara tahun 1867 sampai 1871, Adjarian";
      } else if (input.toLowerCase().includes("siapa penemu komputer")) {
        program =
          "Komputer mulai diciptakan pada 1820-an. Pada saat itu, ada seorang ahli matematika asal Inggris, yaitu Charles Babbage";
      } else if (input.toLowerCase().includes("siapa penemu algoritma")) {
        program =
          "Penemu algoritma adalah Al Khawarizmi, seorang jenius yang mahir dalam matematika, geografi, astronomi, dan lain sebagainya. Dalam bukunya The History of Arab, Phillip K. Hitti menyebut Al Khawarizmi sebagai tokoh utama pada awal sejarah matematikan Arab.";
      }
    } else if (
      input.toLowerCase().includes("bagaimana") ||
      input.toLowerCase().includes("bagaimana kabarmu") ||
      input.toLowerCase().includes("bagaimana keadaanmu")
    ) {
      if (input.toLowerCase().includes("bagaimana kabarmu")) {
        program =
          "Kabar Saya baik-baik saja dan siap untuk membantumu kapan saja, bagiaman dengan kabarmu?";
      } else if (input.toLowerCase().includes("bagaimana keadaanmu")) {
        program =
          "Keadaan Saya baik-baik saja dan siap untuk membantumu kapan saja, bagiaman dengan keadaanmu?";
      } else if (input.toLowerCase().includes("bagaimana")) {
        program = "Bagaimana apanya?";
      }
    } else if (
      input.toLowerCase().includes("kamu bisa apa") ||
      input.toLowerCase().includes("apa yang bisa kamu lakukan")
    ) {
      program =
        "Saya bisa membantu manusia untuk menyelesaikan masalah dengan menjawab berbagai macam pertanyaan";
    } else if (
      input.toLowerCase().includes("tahun berapa kamu dibuat") ||
      input.toLowerCase().includes("kamu dibuat tahun berapa")
    ) {
      program =
        "Saya dikembangkan dan diluncurkan pada tahun 2023";
    } else {
      program = "Saya tidak mengerti apa yang kamu katakan 😒";
    }
    console.log(program);
  }
  aiBot("tahun berapa kamu dibuat");