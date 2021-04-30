import Signup from './Signup';
import Login from './Login';

function Header() {
    return (
        <div class="header">
        <a href="#default" class="logo">CompanyLogo</a>
        <h2>Header</h2>
           <Signup />
           <Login />
        <div class="header-right">
          <a class="active" href="#home">Home</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
      </div>
        
           
        
       
    )
        
}
 
export default Header;