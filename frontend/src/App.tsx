import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StaticPage from './components/staticpage';
import ProviderRegistrationForm from './components/ProviderRegistrationForm';
import ProviderTable from './components/provider-table';
import InsuranceTable from './components/InsuranceTable';

export default function App() {
  return (
    <main>
      <Router>
        <Routes>

           <Route path="/" element={<StaticPage/>} />
          <Route path="/register" element={<ProviderRegistrationForm/>} />
          <Route path="/provider-table" element={<ProviderTable />} />
          <Route path="/provider-table1" element={<InsuranceTable />} />
          {/* <Route path="/provider-register/:id" element={<ProviderRegistrationForm />} /> */}
        </Routes>
      </Router>
    </main>
  );
}
