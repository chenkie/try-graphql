import ScriptTag from 'react-script-tag';

const Footer = props => (
  <div>
    <footer>
      <img src="/static/ryan.png" />
      <div className="footer-copy">
        <div className="footer-content">
          <div className="twitter-follow">
            <p>Made with ❤️ by Ryan Chenkie</p>
            <a
              className="twitter-follow-button"
              href="https://twitter.com/ryanchenkie"
              data-size="large"
            >
              Follow @ryanchenkie
            </a>
            <ScriptTag
              async
              src="https://platform.twitter.com/widgets.js"
              charSet="utf-8"
            />
          </div>
          <div className="mailing-list">
            <p>
              My free video course on fullstack GraphQL is coming. Sign up to
              get notified!
            </p>
            <ScriptTag
              async
              data-uid="4f52b7ce2a"
              src="https://f.convertkit.com/4f52b7ce2a/c3e286aefd.js"
            />
          </div>
        </div>
      </div>
    </footer>
    <style jsx>
      {`
        footer {
          position: relative;
          min-height: 150px;
          max-height: 300px;
          background: linear-gradient(to bottom right, #2a034f, #271638);
          overflow: hidden;
        }

        footer img {
          width: 100%;
          opacity: 0.2;
          background-size: cover;
        }

        .footer-copy {
          font-size: 20px;
          position: absolute;
          color: #f9f9f9;
          bottom: 0;
          left: 20px;
          width: 100%;
        }

        .footer-content {
          display: flex;
          justify-content: center;
        }

        .twitter-follow {
          margin-right: 40px;
        }

        .mailing-list {
          margin-left: 40px;
          margin-right: 40px;
        }
      `}
    </style>
  </div>
);

export default Footer;
