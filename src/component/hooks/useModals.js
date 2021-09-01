import { useState } from "react";

export function useModals(){
  const [ isOpen, setIsOpen ] = useState(false);    //estado para abrir y cerrar una ventana o componente

  const openModal = ()=>setIsOpen(true);
  
  const closeModal = ()=>setIsOpen(false);

  return[isOpen, openModal, closeModal];

}