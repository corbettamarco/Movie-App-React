import './App.css';
import { ChakraProvider } from '@chakra-ui/react'


function App() {

  const movies = [

    {

      title: "Terminator",

      year: "2001"

    },

    {

      title: "Terminator 2",

      year: 2005

    },

    {

      title: "Terminator 3",

      year: 2008

    }

  ];

  
  return (
    <ChakraProvider> 
  <table>
    <tr>
    <th>Titolo</th><th>Anno</th>
    </tr>
    {movies.map((movies)=>
     <tr>
     <td>{movies.title}</td><td>{movies.year}</td>
     </tr>
    )
  }
  </table>

    </ChakraProvider>
  );
}

export default App;
