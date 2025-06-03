import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Our Fintech Platform</h1>
        <p>Your gateway to modern financial solutions.</p>
      </header>
      <main>
        <section>
          <h2>About Us</h2>
          <p>We provide innovative financial solutions to help you manage your finances effectively.</p>
        </section>
        <section>
          <h2>Services</h2>
          <ul>
            <li>Payment Processing</li>
            <li>Financial Analytics</li>
            <li>Secure Transactions</li>
          </ul>
        </section>
        <section>
          <h2>Contact Us</h2>
          <p>Email: support@fintech.com</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2025 Fintech Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
