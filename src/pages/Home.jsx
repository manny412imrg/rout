import {Link} from '../Link.jsx'

export default function HomePage(){
   return(
     <>
       <h1>Home</h1>
       <p>Esta es una pag de ejemplo para crear un React Router desde cero</p>
       <Link to='/about'>Ir sobre nosotros</Link>
     </>
   )
 }