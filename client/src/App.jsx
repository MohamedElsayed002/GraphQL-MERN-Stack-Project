import {ApolloProvider , ApolloClient , InMemoryCache}  from '@apollo/client'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Project from './components/Project';

const router = createBrowserRouter([
  {
    path : '/',
    element : <Home/>
  },
  {
    path : '/projects/:id',
    element : <Project />
  },
  {
    path : '*',
    element : <NotFound/>
  }
])


const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri : 'http://localhost:3000/graphql',
  cache
})

const App = () => {
  return (
    <>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />  
    </ApolloProvider>    
    </>
  )
}

export default App

{/* <ApolloProvider client={client}>

</ApolloProvider> */}