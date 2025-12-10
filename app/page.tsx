import Link from "next/link";
// Импортируем красивые иконки из набора FontAwesome (входит в react-icons)
import { FaPhoneAlt, FaWhatsapp, FaViber, FaTelegramPlane, FaInstagram, FaVk } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-slate-50 relative overflow-hidden">
      {/* Декоративные элементы фона */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-[#FFD700] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-slate-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      {/* Основная карточка */}
      <div className="relative bg-white/80 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-8 max-w-md w-full text-center space-y-8">
        
        {/* Логотип / Иконка сайта (Оставляем кастомную SVG, так как это наш бренд) */}
        <div className="flex justify-center">
          <div className="w-20 h-20 bg-[#FFD700] rounded-2xl flex items-center justify-center shadow-lg rotate-3 hover:rotate-0 transition-transform duration-300">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-slate-900">
              <path fillRule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813a3.75 3.75 0 002.576-2.576l.813-2.846A.75.75 0 019 4.5zM6.994 6.994a1.5 1.5 0 01-2.121 0l-.88-.88a1.5 1.5 0 012.122-2.121l.879.88a1.5 1.5 0 010 2.12zm12.728 9.9a1.5 1.5 0 010 2.12l-.88.88a1.5 1.5 0 01-2.122-2.12l.88-.88a1.5 1.5 0 012.122 0z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        {/* Текст */}
        <div className="space-y-3">
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
            CleanRent.md
          </h1>
          <p className="text-lg font-medium text-slate-700">
            Сайт в стадии разработки 🚧
          </p>
          <p className="text-slate-500 text-sm leading-relaxed">
            Мы готовим удобный сервис бронирования. 
            <br/>Связаться с нами можно прямо сейчас:
          </p>
        </div>

        {/* БЛОК КНОПОК С REACT-ICONS */}
        <div className="space-y-3 pt-2">
          
          {/* 1. Позвонить */}
          <Link 
            href="tel:+37368269055" 
            className="group flex items-center justify-center w-full p-4 bg-[#FFD700] hover:bg-[#e6c200] text-slate-900 rounded-2xl font-bold shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <FaPhoneAlt className="w-5 h-5 mr-3" />
            Позвонить: 068 269 055
          </Link>

          {/* WhatsApp */}
          <Link 
            href="https://wa.me/37368269055" 
            target="_blank"
            className="group flex items-center justify-center w-full p-4 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-2xl font-bold shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <FaWhatsapp className="w-6 h-6 mr-3" />
            Написать в WhatsApp
          </Link>

          {/* Viber */}
          <Link 
            href="viber://chat?number=37368269055" 
            className="group flex items-center justify-center w-full p-4 bg-[#7360F2] hover:bg-[#6452d9] text-white rounded-2xl font-bold shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <FaViber className="w-6 h-6 mr-3" />
            Написать в Viber
          </Link>

          {/* Telegram */}
          <Link 
            href="https://t.me/+37368269055" 
            target="_blank"
            className="group flex items-center justify-center w-full p-4 bg-[#0088cc] hover:bg-[#007ebd] text-white rounded-2xl font-bold shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <FaTelegramPlane className="w-6 h-6 mr-3" />
            Написать в Telegram
          </Link>

          {/* Instagram */}
          <Link 
            href="https://www.instagram.com/cleanrent.md/" 
            target="_blank"
            className="group flex items-center justify-center w-full p-4 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white rounded-2xl font-bold shadow-md hover:shadow-xl hover:-translate-y-1 hover:brightness-110 transition-all duration-300"
          >
            <FaInstagram className="w-6 h-6 mr-3" />
            Написать в Instagram
          </Link>

          {/* VK */}
          <Link 
            href="https://vk.com/cleanrent_md" 
            target="_blank"
            className="group flex items-center justify-center w-full p-4 bg-[#0077ff] hover:bg-[#447bba] text-white rounded-2xl font-bold shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <FaVk className="w-6 h-6 mr-3" />
            Перейти во ВКонтакте
          </Link>
        </div>

        <div className="pt-6 text-xs text-slate-400 font-medium">
          CleanRent.md © 2025 | Дубоссары
        </div>
      </div>
    </main>
  );
}