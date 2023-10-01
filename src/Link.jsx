import { EVENT } from "./consts"

/* 1 funcion para navegar entre componentes le pasamos 
una prop href. como la paguina que quermos navegar */
/* 2 History es un objeto dentro del objeto global window 
que nos permite cambiar la url sin recargar la pag.*/
/* 3 evento personalizado para avisar a lo que queramos
del cambio de url*/
/* 4 enviamos el evento */

export function navigate (href){
  window.history.pushState({},'', href)
  const navigationEvent = new Event(EVENT.PUSHSTATE)
   window.dispatchEvent(navigationEvent)
 } 

 export function Link({ target, to, ...props }){
   const handleClick = (event) =>{
    const isMainEvent = event.button === 0 //primary click
    const isModifiedEvent = event.metaKey || event.altkey || event.ctrlKey || event.shiftkey
    const isManageableEvent = target === undefined || target ==='_self'

    if(isMainEvent && isManageableEvent && !isModifiedEvent){
      event.preventDefault()
      navigate(to)
    }   
   }
   return <a onClick={handleClick} href={to} target={target} {...props}/>
  }