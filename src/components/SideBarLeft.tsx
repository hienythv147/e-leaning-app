import { SIDE_BAR } from "@data";

export const SideBarLeft = () => {
  return (
    <aside id="default-sidebar" className="w-full h-full items-center justify-center" aria-label="Sidebar">
      <div className="h-full w-full items-center justify-center">
        <ul className=" h-full w-full bg-slate-500 items-center justify-center">
          {SIDE_BAR.map(({ name, href, icon }) => {
            const Icon = icon;
            return (
              <li className=" w-32 h-32 bg-slate-700 self-center">
                <a href={href} className="flex flex-col items-center">
                  <Icon className="w-5 h-5" />
                  <p className="text-base">{name}</p>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};
