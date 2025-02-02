import React from "react";

const Galeri: React.FC = () => {
  return (
    <div>
      <nav className="flex items-center bg-gray-300 px-6 py-2 shadow-md">
        <div className="flex items-center">
          <a href="#"><span className="text-xl font-bold">com_portal</span></a>
        </div>
        <ul className="flex space-x-6 text-gray-700 mr-auto ml-10 pl-4 border-l-2 border-gray-400">
          <li className="hover:text-black cursor-pointer"><a href="#">Ana Sayfa</a></li>
          <li className="hover:text-black cursor-pointer"><a href="#">Kulüpler</a></li>
          <li className="hover:text-black cursor-pointer"><a href="#">Etkinlikler</a></li>
          <li className="hover:text-black cursor-pointer"><a href="#">Galeri</a></li>
          <li className="hover:text-black cursor-pointer"><a href="#">Feed</a></li>
        </ul>
        <div className="flex items-center space-x-4">
          <span className="text-gray-600 cursor-pointer hover:text-black"><a href="http://">Giriş Yap</a></span>
          <button className="bg-white text-gray-700 border border-gray-500 px-4 py-1 rounded hover:bg-gray-300" name="kayitol" id="kayit-ol">
            Kaydol
          </button>
        </div>
      </nav>

      <div className="px-3 py-4">
        <div className="flex items-center justify-start max-w-md mx-auto mt-4 ml-4">
          <div className="relative w-full sm:w-auto">
            <input type="text"
              className="w-full sm:w-auto px-4 py-2 border border-gray-400 rounded pl-10"
              placeholder="Kulübe Göre Filtrele.."
              name="filterQuery"
              id="filter-input"
            />
            
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>

      <div className="px-20 py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center">
        <div id="image-1" className="w-full sm:w-64 md:w-80 h-64 object-cover rounded-md mb-4">
          <img src="https://i0.wp.com/bilimdili.com/wp-content/uploads/2020/01/6dc6fa0295cd94a5036c7706a2b46e3d.jpg?fit=1585%2C1009&ssl=1" alt="Resim 1" className="w-full h-full object-cover " />
        </div>
        <div id="image-2" className="w-full sm:w-64 md:w-80 h-64 object-cover rounded-md mb-4">
          <img src="https://w3.bilkent.edu.tr/www/wp-content/uploads/sites/5/2015/02/foto_kampus1.jpg" alt="Resim 2" className="w-full h-full object-cover " />
        </div>
        <div id="image-3" className="w-full sm:w-64 md:w-80 h-64 object-cover rounded-md mb-4">
          <img src="https://www.ideasoft.com.tr/wp-content/uploads/2021/09/yazilim-e1630925044945.jpg" alt="Resim 3" className="w-full h-full object-cover " />
        </div>
        <div id="image-4" className="w-full sm:w-64 md:w-80 h-64 object-cover rounded-md mb-4">
          <img src="https://www.derinegitim.com/_resimler/_takimCalismasi/OUTDOOR-TAKIM-CALISMASI.918.jpg" alt="Resim 4" className="w-full h-full object-cover " />
        </div>
        <div id="image-5" className="w-full sm:w-64 md:w-80 h-64 object-cover rounded-md mb-4">
          <img src="https://img.freepik.com/premium-photo/mixed-team-software-developers-analyzing-source-code-pointing-screens-comparing-algorithm-with-user-interface-digital-tablet-programmers-working-coding-group-project-sitting-desk_482257-43991.jpg" alt="Resim 5" className="w-full h-full object-cover " />
        </div>
        <div id="image-6" className="w-full sm:w-64 md:w-80 h-64 object-cover rounded-md mb-4">
          <img src="https://www.proglobalevents.com/wp-content/uploads/bigstock-Confident-businessman-giving-a-379845127-1.jpg" alt="Resim 6" className="w-full h-full object-cover " />
        </div>
      </div>
    </div>
  );
};

export default Galeri;
