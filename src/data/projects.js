// Shared project data — imported by ProjectsPage and ProjectDetailPage
export const projects = [
  {
    id: 1,
    title: 'AgriLink ("Ray So")',
    description: {
      en: 'A smart agricultural management platform for farmers in the Central Highlands. Provides farm management APIs, articles, and market price history with a 4-layer Clean Architecture.',
      vi: 'Nền tảng quản lý nông nghiệp thông minh cho nông dân Tây Nguyên. Cung cấp API quản lý nông trại, bài viết, và lịch sử giá nông sản với Kiến trúc sạch (Clean Architecture) 4 lớp.'
    },
    tags: ['.NET 8', 'C#', 'PostgreSQL', 'Redis', 'Clean Architecture'],
    link: '#',
    github: 'https://github.com/Elihoang/BE_AgriLink',
    features: {
      en: [
        'Farm management: Create, update, delete farm and crop information',
        'Real-time market price history tracking',
        'Article & experience-sharing system between farmers',
        'AI-powered pest detection via image upload (ResNet18 + Roboflow)',
        'Clean Architecture 4-layer, JWT Auth, Redis Cache-Aside',
        'Weather API & Cloudinary integration for media storage',
      ],
      vi: [
        'Quản lý nông trại: Tạo, cập nhật, xóa thông tin mùa vụ / nông trại',
        'Theo dõi lịch sử giá thị trường theo thời gian thực',
        'Hệ thống bài viết & chia sẻ kinh nghiệm giữa các nông dân',
        'Chuẩn đoán bệnh tự động AI qua ảnh chụp (ResNet18 + Roboflow)',
        'Kiến trúc Clean Architecture 4 lớp, JWT Auth, Redis Cache-Aside',
        'Tích hợp Thời tiết API & lưu trữ ảnh trên Cloudinary',
      ]
    },
    type: 'Backend / Full-stack',
  },
  {
    id: 2,
    title: 'E-Learning System H3',
    description: {
      en: 'A comprehensive backend API for an online learning platform. Supports course management, quizzes, VNPay/MoMo payment, and real-time chat via SignalR.',
      vi: 'Hệ thống API backend toàn diện cho nền tảng học trực tuyến. Hỗ trợ quản lý khóa học, trắc nghiệm, thanh toán VNPay/MoMo và chat thời gian thực qua SignalR.'
    },
    tags: ['.NET 8', 'C#', 'PostgreSQL', 'SignalR', 'JWT'],
    link: '#',
    github: 'https://github.com/Elihoang/api_web_h3',
    features: {
      en: [
        'Course, lecture, and learning material management',
        'Automated quiz & auto-grading system',
        'Online payment integration: VNPay & MoMo',
        'Real-time chat powered by SignalR',
        'JWT authentication with Role-based authorization',
        'Media storage via Cloudinary & S3',
      ],
      vi: [
        'Quản lý khóa học, bài giảng và tài liệu học tập',
        'Hệ thống làm bài thi trắc nghiệm & chấm điểm tự động',
        'Tích hợp thanh toán online: VNPay & MoMo',
        'Tính năng chat thời gian thực hoạt động bằng SignalR',
        'Xác thực bằng JWT với phân quyền Role-based',
        'Lưu trữ media trên Cloudinary & Amazon S3',
      ]
    },
    type: 'Backend API',
  },
  {
    id: 3,
    title: 'Cinema Booking UI',
    description: {
      en: 'A cross-platform movie ticket booking app built with Flutter, featuring smooth UI components for an optimal user experience on mobile and web.',
      vi: 'Ứng dụng đặt vé xem phim cross-platform xây dựng bằng Flutter, tập trung vào giao diện mượt mà nhằm đem lại trải nghiệm tốt nhất trên cả mobile và web.'
    },
    tags: ['Flutter', 'Dart', 'Mobile/Web UI'],
    link: '#',
    github: 'https://github.com/Elihoang/ui_cinema',
    features: {
      en: [
        'Browse now-showing and upcoming movies',
        'Interactive seat selection with visual cinema layout',
        'Fast booking flow with simple payment process',
        'Smooth animations and modern UI design',
        'Cross-platform support: Android, iOS, and Web',
      ],
      vi: [
        'Duyệt danh sách phim Đang chiếu & Sắp chiếu',
        'Chọn ghế tương tác trực quan với sơ đồ rạp',
        'Luồng đặt vé nhanh gọn với tiến trình thanh toán đơn giản',
        'Hiệu ứng mượt mà (smooth animations) & thiết kế UI hiện đại',
        'Hỗ trợ đa nền tảng (Cross-platform): Android, iOS và Web',
      ]
    },
    type: 'Mobile / Cross-platform UI',
  },
  {
    id: 4,
    title: 'Question Bank Management',
    description: {
      en: 'A full-stack system for managing question banks and auto-generating exam papers. Supports matrix-based exam generation, Word export, and user management via Blazor WebAssembly.',
      vi: 'Hệ thống full-stack hỗ trợ quản lý ngân hàng câu hỏi và sinh đề thi tự động. Hỗ trợ tạo đề theo ma trận, xuất file Word và quản lý người dùng với Blazor WebAssembly.'
    },
    tags: ['.NET 9', 'Blazor Wasm', 'PostgreSQL', 'Clean Architecture'],
    link: '#',
    github: 'https://github.com/sundayydev/be-question-bank',
    features: {
      en: [
        'Manage questions by subject, chapter, and difficulty level',
        'Auto-generate exam papers from defined matrix templates',
        'Export exam papers to Word (.docx) files',
        'Modern Blazor WebAssembly frontend',
        'Clean Architecture backend with .NET 9',
        'User management with role-based access control',
      ],
      vi: [
        'Quản lý câu hỏi theo môn học, chương bài và độ khó',
        'Sinh đề thi tự động hoàn toàn từ ma trận tuỳ chỉnh',
        'Export đề thi trực tiếp ra file Word (.docx)',
        'Frontend cực kỳ hiện đại với Blazor WebAssembly',
        'Backend tuân thủ Clean Architecture chuẩn sử dụng .NET 9',
        'Quản trị người dùng với hệ thống phân quyền',
      ]
    },
    type: 'Full-stack',
  },
];
