//Reid 
import { RecoilRoot } from 'recoil'
import { RedStripe } from './RedStripe'
import { QueryClient, QueryClientProvider } from 'react-query'
import './App.css';
import { BlueStripe } from './BlueStripe'
import { GreenStripe } from './GreenStripe'
const queryClient = new QueryClient()

function App() {
  return (
  <div className = "App">
    REACT III
    <QueryClientProvider client = { queryClient }>
          <RecoilRoot>
                <RedStripe />
                <BlueStripe />
                <GreenStripe />
            </RecoilRoot>
    </QueryClientProvider>
    </div>
  )
}

export default App;
