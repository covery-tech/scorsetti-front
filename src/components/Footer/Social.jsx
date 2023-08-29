export default function Social() {
  return (
    <div className="flex flex-column tc mv2 w-100">
      <div className="flex justify-center items-center mb2">
        <span className="social-item">
          <a
            href="https://www.facebook.com/institutoscorsetti/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-facebook"></i>
          </a>
        </span>
        <span className="social-item">
          <a
            href="https://ar.linkedin.com/company/scorsettiseguros"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-linkedin"></i>
          </a>
        </span>
        <span className="social-item">
          <a
            href="https://www.instagram.com/scorsettiseguros"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-instagram"></i>
          </a>
        </span>
      </div>
      <p className="copyright white">
        Copyright © {new Date().getFullYear()}.
        <br />
        Powered by:{" "}
        <a href="https://covery.tech" target="_blank" rel="noreferrer">
          Covery
        </a>
      </p>
    </div>
  );
}
