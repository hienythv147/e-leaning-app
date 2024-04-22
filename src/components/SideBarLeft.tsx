import { SIDE_BAR } from "@data";

export const SideBarLeft = () => {
  return (
    <aside id="default-sidebar" className="w-full h-full items-center justify-center bg-white" aria-label="Sidebar">
      <div className="h-full w-full items-center justify-center mt-10">
        <ul className="flex flex-col h-full w-full items-center gap-7">
          {SIDE_BAR.map(({ name, href, icon }) => {
            const Icon = icon;
            return (
              <li className="self-center">
                <a href={href} className="w-20 h-20 flex flex-col items-center justify-center rounded-xl hover:bg-slate-100">
                  <Icon className="w-5 h-5" />
                  <p className="text-xs mt-2">{name}</p>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};
