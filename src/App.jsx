import './index.css'
import { PeakProvider } from './components/Peak'
import Sidebar from './components/Sidebar'
import Home from './sections/Home'
import Beliefs from './sections/Beliefs'
import Notes from './sections/Notes'
import ThenAndNow from './sections/ThenAndNow'

export default function App() {
  return (
    <PeakProvider>
      <div className="max-w-[1100px] mx-auto flex min-h-screen">
        <Sidebar />
        <main className="main-content" style={{ flex: 1, minWidth: 0, padding: '72px 60px 100vh 40px', maxWidth: 820 }}>
          <Home />
          <hr style={{ border: 'none', borderTop: '1px solid var(--line)', margin: '48px 0' }} />
          <Beliefs />
          <hr style={{ border: 'none', borderTop: '1px solid var(--line)', margin: '48px 0' }} />
          <ThenAndNow />
          <hr style={{ border: 'none', borderTop: '1px solid var(--line)', margin: '48px 0' }} />
          <Notes />
        </main>
      </div>
    </PeakProvider>
  )
}
