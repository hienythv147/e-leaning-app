export const Header = () => {
  return (
    <header className="w-full sticky top-0 bg-white z-50 border-b border-gray-300">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex justify-between items-center">
          <a href="https://flowbite.com" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-black">
              Khoá học Online
            </span>
          </a>
          <div className="flex w-full">
            <form className="flex w-full justify-center items-center">
              <div className="flex border w-3/6 gap-3 h-11 rounded-2xl border-black">
                <div className="inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="w-full text-sm border-none outline-none"
                  placeholder="Search Mockups, Logos..."
                  required
                />
              </div>
            </form>
          </div>
          <div className="flex flex-row items-center justify-center gap-3">
            <button
              type="button"
              className="text-orange-500 w-28 h-11 border border-orange-500 rounded-3xl"
            >
              Đăng nhập
            </button>
            <button
              type="button"
              className="text-white w-28 h-11 bg-orange-500 rounded-3xl"
            >
              Đăng ký
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};
