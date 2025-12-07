import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-slate-50 relative overflow-hidden">
      {/* Декоративные элементы фона (наш стиль "пузырьки/глина") */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-[#FFD700] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-slate-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      {/* Основная карточка */}
      <div className="relative bg-white/80 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-8 max-w-md w-full text-center space-y-8">
        
        {/* Логотип / Иконка */}
        <div className="flex justify-center">
          <div className="w-20 h-20 bg-[#FFD700] rounded-2xl flex items-center justify-center shadow-lg rotate-3 hover:rotate-0 transition-transform duration-300">
             {/* Иконка "Чистота" (SVG) */}
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
            Мы готовим удобный сервис бронирования техники. 
            <br/>А пока принимаем заказы в соцсетях:
          </p>
        </div>

        {/* Кнопки */}
        <div className="space-y-3 pt-2">
          {/* Instagram Button - Karcher Style */}
          <Link 
            href="https://www.instagram.com/cleanrent.md/" 
            target="_blank"
            className="group flex items-center justify-center w-full p-4 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white rounded-2xl font-bold shadow-md hover:shadow-xl hover:-translate-y-1 hover:brightness-110 transition-all duration-300"
          >
            <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465C9.673 2.013 10.03 2 12.315 2zm-4.755 2.812c-1.36.066-2.096.33-2.589.522a2.91 2.91 0 00-1.077.7 2.91 2.91 0 00-.7 1.077c-.192.493-.456 1.23-.522 2.59-.066 1.36-.066 3.968 0 5.328.066 1.36.33 2.096.522 2.589a2.91 2.91 0 00.7 1.077 2.91 2.91 0 001.077.7c.493.192 1.23.456 2.59.522 1.36.066 3.968.066 5.328 0 1.36-.066 2.096-.33 2.589-.522a2.905 2.905 0 001.077-.7 2.905 2.905 0 00.7-1.077c.192-.493.456-1.23.522-2.589.066-1.36.066-3.968 0-5.328-.066-1.36-.33-2.096-.522-2.589a2.905 2.905 0 00-.7-1.077 2.905 2.905 0 00-1.077-.7c-.493-.192-1.23-.456-2.589-.522-1.36-.066-3.968-.066-5.328 0z" clipRule="evenodd" />
              <path fillRule="evenodd" d="M12.315 6.812a5.504 5.504 0 100 11.008 5.504 5.504 0 000-11.008zm0 1.842a3.662 3.662 0 110 7.324 3.662 3.662 0 010-7.324z" clipRule="evenodd" />
              <path fillRule="evenodd" d="M18.406 5.594a1.227 1.227 0 100 2.454 1.227 1.227 0 000-2.454z" clipRule="evenodd" />
            </svg>
            Написать в Instagram
          </Link>

          {/* VK Button - VK Blue Style */}
          <Link 
            href="https://vk.com/cleanrent_md" 
            target="_blank"
            className="group flex items-center justify-center w-full p-4 bg-[#0077ff] hover:bg-[#447bba] text-white rounded-2xl font-bold shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
               <path d="M13.162 18.994c.609 0 .858-.406.851-.915-.031-1.918.714-2.949 2.059-1.604 1.488 1.488 1.796 2.519 3.603 2.519h3.2c.808 0 .471-.723-.033-1.42-.418-.576-2.541-2.901-2.973-3.411-.796-.941-.753-.941 1.774-4.524 1.056-1.498 1.954-2.314 1.794-3.214-.153-.861-1.503-.984-2.221-.984h-3.456c-.524 0-.829.176-1.01.551-.314.654-2.071 4.545-2.766 5.862-.257.486-.39.636-.563.636-.182 0-.46-.226-.46-1.436v-4.66c0-1.144-.194-1.742-.714-2.09-.345-.231-1.004-.363-1.921-.363-1.082.001-1.97.359-2.227.674-.266.326.177.382.68.513.627.163.784.757.784 2.441v3.744c0 .762-.122 1.074-.356 1.074-.535 0-1.791-2.155-2.585-4.453-.182-.527-.406-.867-.939-.867h-3.41c-.968 0-1.121.492-.857 1.157.859 2.162 4.414 8.785 8.243 8.785z" />
            </svg>
            Перейти ВКонтакте
          </Link>
        </div>

        <div className="pt-6 text-xs text-slate-400 font-medium">
          CleanRent.md © 2025 | Дубоссары
        </div>
      </div>
    </main>
  );
}