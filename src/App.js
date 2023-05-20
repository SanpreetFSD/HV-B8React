import logo from './logo.svg';
import './App.css';

// function App() {
//     // js+html = jsx (javascript xml)
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  // js+html = jsx (javascript xml)
return (
  <>
<nav>
<h2>Linked<span>
            <i className="fa fa-linkedin"></i>
        </span></h2>
</nav>

  <div className="container">
      
      <div className="text">
        <h1>Sign in</h1>
        <p>Stay updated on your professional world</p>
      </div>
      <div className="your-input">
        <div className="input">
          <input type="text" name="email" id="email" required />
          <label for="email">Email</label>
        </div>
        <div className="input">
          <input type="password" name="password" id="password" required />
          <label for="password"> Password </label>
        </div>
      </div>
      <a href="#" className="forgot-password-link"> Forgot Password? </a>
      <button>Sign in</button>
      <br />
      <br />
      <hr />
      or
      <hr />
      <a href="#" className="">
        
        <i class="fa-brands fa-apple"></i>
      </a>

      <p className="join-link">
        New to linkedin?
        <a href="#" className="join-now"> Join now </a>
      </p>
    </div>
  
  </>
);
}

export default App;
