import { EVENT } from "./consts"

export function navigate (href){
   window.history.pushState({},'', href)
   const navigationEvent = new Event(EVENT.PUSHSTATE)
   window.dispatchEvent(navigationEvent)
 } 
 export function Link({ target, to, ...props }){
   const handleClick = () =>{
      navigate(to)
   }
   return <a onClick={handleClick} href={to} target={target} {...props}/>
 }