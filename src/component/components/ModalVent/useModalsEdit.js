import { useState } from "react";

export function useModalsEdit(){
  const [ isEdit, setisEdit ] = useState(false);    //estado para abrir y cerrar una ventana o componente

  const openEdit = ()=>setisEdit(true);
  
  const closeEdit = ()=>setisEdit(false);

  return[isEdit, openEdit, closeEdit];

}