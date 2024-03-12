import { navLinks } from "./Navitems"

interface NavLink {
  id: number;
  title: string;
  link: string;
}

const Sidebar: React.FC = () => {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className='drawer-toggle' />
      <div className="drawer-content flex flex-col">
        {/*NAVBAR*/}
        <div className="w-full navbar bg-slate-200">
          <div className="flex-none lg:hidden">
            <label htmlFor='my-drawer-3' aria-label="open sidebar" className='btn btn-rounded btn-lg'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 font-bold stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
          </div>
          {/* LOGO */}
          <div className="flex-1 px-2 mx-2 text-2xl font-semibold uppercase">ebro</div> 
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              {/*navbar content*/}
              {navLinks.map((item: NavLink) => (
                <li key={item.id} className="mr-6">
                  <a href={item.link} className="border-b-black text-gray-900 text-xl font-bold hover:text-gray-500 transition-colors duration-500">
                    {item.title}
                  </a>
                </li>
              ))};
            </ul>
          </div>
        </div>
        {/* Page content? */}
        
      </div>

      {/* sidedrawer */}
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay" />
        <ul className="menu py-12 w-auto min-h-screen bg-slate-200/60">
          {/*sidebar content*/}
          {navLinks.map((item: NavLink) => (
              <li key={item.id} className="mr-6">
                <a href={item.link} className="ml-6 flex items-center py-3 transition-colors duration-500 text-gray-900 text-xl font-bold hover:text-gray-500">
                  {item.title}
                </a>
              </li>
            ))};
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;