import React from "react";

interface MobileMenuProps {
  visible?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ visible }) => {
  if (!visible) {
    return null;
  }

  return (
    <div className="bg-neutrla-900 w-30 absolute top-20 z-30 right-2 py-5 flex-col rounded-lg border-2 boder-neutral-800 flex">
      <div className="flex flex-col gap-4">
        <div className="px-3 text-center text-white hover:underline">Iniciar Seccion</div>
        <div className="px-3 text-center text-white hover:underline">Cerrar seccion</div>
      </div>
    </div>
  );
};

export default MobileMenu;