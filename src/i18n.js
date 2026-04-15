import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      // Nav
      home: 'Home', about: 'About', projects: 'Projects', contact: 'Contact',
      footer: 'Lê Hữu Duy Hoàng Profile — Built with ASP.NET Core & React',

      // Home
      welcomeBadge: 'Welcome to my profile',
      heroTitle1: "Hi, I'm ",
      heroSubtitle: 'Backend Developer · ASP.NET Core & Cloud',
      heroDesc: 'Final-year Software Engineering student at HUTECH, specializing in Backend with ASP.NET Core & Clean Architecture. Building high-performance APIs, integrating Cloud services, Redis, PostgreSQL, and modern technologies.',
      viewProjects: 'View Projects',
      contactMe: 'Contact Me',

      // About
      aboutTitle: 'About',
      aboutMe: 'Me',
      myJourney: 'My Journey',
      journeyDesc1: "I'm a final-year",
      journeyDegree: 'Software Engineering',
      journeyDesc2: 'student at HUTECH University (GPA: 3.61/4.0), specializing in',
      journeySpec: 'Backend Development',
      journeyDesc3: 'with the .NET ecosystem.',
      journeyDesc4: 'I have a solid foundation in C#, ASP.NET Core, Entity Framework Core, and Clean Architecture. Passionate about building high-performance backend systems, optimizing performance, and applying OOP/SOLID principles.',
      journeyDesc5: 'Outside of coding, I enjoy reading books, drawing, listening to music, and exploring the latest tech trends.',
      technologies: 'Technologies',
      skills: 'Skills',
      eduExp: 'Education & Experience',
      hutech: 'HUTECH University',
      hutechMajor: 'Software Engineering — 2022 → 2026',
      hutechDesc: 'GPA: 3.61 / 4.0 · Outstanding Student of Thu Duc City.',
      awards: 'HUTECH Awards 2024',
      award1: '1st Prize – My First Website',
      award2: '2nd Prize – IT Student · IQ Math & AWS HDBank competitions.',
      seeking: 'Backend Developer (Seeking Internship)',
      seekingStack: 'ASP.NET Core · Clean Architecture',
      seekingDesc: 'Built 24+ RESTful APIs, JWT Auth, Redis Cache-Aside, integrated Cloudinary & Weather API.',

      // Projects
      featuredProjects: 'Featured',
      projectsSub: "Some of the things I've built that I am proud of.",
      liveDemo: 'Live Demo', code: 'Code', more: 'More',
      backToProjects: 'Back to Projects',
      projectOverview: 'Project Overview',
      keyFeatures: 'Key Features',
      techStack: 'Tech Stack',
      links: 'Links',
      sourceCode: 'Source Code',
      projectNotFound: 'Project not found',

      // Contact
      getInTouch: 'Get In',
      touch: 'Touch',
      contactSub: "I'm currently seeking new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
      contactInfo: 'Contact Information',
      yourName: 'Your Name', yourEmail: 'Your Email',
      subject: 'Subject', yourMessage: 'Your Message',
      sendMessage: 'Send Message',
      nameRequired: 'Please enter your name!',
      emailRequired: 'Please enter your email!',
      emailInvalid: 'Please enter a valid email!',
      subjectRequired: 'Please enter a subject!',
      messageRequired: 'Please enter your message!',
      messageSent: 'Message sent successfully! I will get back to you soon!',
    }
  },
  vi: {
    translation: {
      // Nav
      home: 'Trang chủ', about: 'Giới thiệu', projects: 'Dự án', contact: 'Liên hệ',
      footer: 'Profile Lê Hữu Duy Hoàng — Xây dựng với ASP.NET Core & React',

      // Home
      welcomeBadge: 'Chào mừng bạn đến với hồ sơ của tôi',
      heroTitle1: 'Xin chào, tôi là ',
      heroSubtitle: 'Backend Developer · ASP.NET Core & Cloud',
      heroDesc: 'Sinh viên năm cuối ngành Kỹ thuật phần mềm tại HUTECH, chuyên sâu về Backend với ASP.NET Core & Clean Architecture. Xây dựng API hiệu năng cao, tích hợp Cloud, Redis, PostgreSQL và các công nghệ hiện đại.',
      viewProjects: 'Xem Dự án',
      contactMe: 'Liên hệ',

      // About
      aboutTitle: 'Về',
      aboutMe: 'Tôi',
      myJourney: 'Hành trình',
      journeyDesc1: 'Mình là sinh viên năm cuối ngành',
      journeyDegree: 'Kỹ thuật phần mềm',
      journeyDesc2: 'tại Đại học HUTECH (GPA: 3.61/4.0), chuyên sâu về',
      journeySpec: 'Backend Development',
      journeyDesc3: 'với hệ sinh thái .NET.',
      journeyDesc4: 'Mình có nền tảng vững chắc về C#, ASP.NET Core, Entity Framework, và Clean Architecture. Đam mê xây dựng hệ thống backend mạnh mẽ, tối ưu hiệu năng và áp dụng nguyên tắc OOP/SOLID.',
      journeyDesc5: 'Ngoài code, mình thích đọc sách, vẽ, nghe nhạc và khám phá xu hướng công nghệ mới.',
      technologies: 'Công nghệ sử dụng',
      skills: 'Kỹ năng',
      eduExp: 'Học vấn & Kinh nghiệm',
      hutech: 'Đại học HUTECH',
      hutechMajor: 'Kỹ thuật phần mềm — 2022 → 2026',
      hutechDesc: 'GPA: 3.61 / 4.0 · Sinh viên xuất sắc Thành phố Thủ Đức.',
      awards: 'Giải thưởng HUTECH 2024',
      award1: 'Giải Nhất – My First Website',
      award2: 'Giải Nhì – Học sinh Tin học · Thi IQ Toán & AWS HDBank.',
      seeking: 'Backend Intern (Tìm kiếm cơ hội)',
      seekingStack: 'ASP.NET Core · Clean Architecture',
      seekingDesc: 'Xây dựng 24+ RESTful APIs, JWT Auth, Redis Cache-Aside, tích hợp Cloudinary & Weather API.',

      // Projects
      featuredProjects: 'Nổi bật',
      projectsSub: 'Một số dự án tôi đã xây dựng và tự hào về chúng.',
      liveDemo: 'Xem Demo', code: 'Mã nguồn', more: 'Chi tiết',
      backToProjects: 'Quay lại Dự án',
      projectOverview: 'Mô tả dự án',
      keyFeatures: 'Tính năng chính',
      techStack: 'Công nghệ',
      links: 'Liên kết',
      sourceCode: 'Mã nguồn',
      projectNotFound: 'Không tìm thấy dự án',

      // Contact
      getInTouch: 'Liên',
      touch: 'hệ',
      contactSub: 'Tôi đang tìm kiếm cơ hội mới. Dù bạn có câu hỏi hay chỉ muốn chào hỏi, tôi sẽ cố gắng phản hồi sớm nhất!',
      contactInfo: 'Thông tin liên hệ',
      yourName: 'Họ và tên', yourEmail: 'Email của bạn',
      subject: 'Tiêu đề', yourMessage: 'Nội dung',
      sendMessage: 'Gửi tin nhắn',
      nameRequired: 'Vui lòng nhập tên!',
      emailRequired: 'Vui lòng nhập email!',
      emailInvalid: 'Email không hợp lệ!',
      subjectRequired: 'Vui lòng nhập tiêu đề!',
      messageRequired: 'Vui lòng nhập nội dung!',
      messageSent: 'Gửi thành công! Tôi sẽ phản hồi sớm.',
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
