import { Link } from '../Link.jsx'

export default function AboutPage(){
   return(
     <>
       <h1>About</h1>
       <div>
         <img src="https://imgs.search.brave.com/QdWtovBxunkENZfla2eLNm3Hawt-b3yIZG8nwQF9JIk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9wbTEu/bmFydmlpLmNvbS82/MjUzL2VkZWFjYTIw/N2Q4ZTU4OWM1YWUw/ZGFlZjViYzRiOGQw/YjE4MGVlMzBfaHEu/anBn" alt="es pikachu" />
       <p>Hola, esta es una pag de React router</p>
       </div>
       <Link to='/' >Ir a la Home</Link>
     </>
   )
 }