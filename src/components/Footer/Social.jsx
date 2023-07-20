export default function Social(){
    return(
        <footer className="footer-wrapper" id="footer" role="contentinfo">
        <div className="col">
          <ul className="social-icons" style={{paddingLeft: 0}}>
            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
            <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
            <li><a href="#"><i className="fa fa-instagram"></i></a></li>
          </ul>
        </div>
        <div className="col-lg-12">
          <p className="copyright">Copyright © {new Date().getFullYear()}.       
          <br/>Powered by: <a style={{textDecoration:'none', color:'gray'}}rel="sponsored" href="https://covery.tech" target="_blank">Covery</a></p>
        </div>
      </footer>    
    )
}