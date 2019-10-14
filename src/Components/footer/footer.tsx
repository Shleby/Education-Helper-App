import React from "react";

class Footer extends React.Component<any, any> {
  render() {
    return (
      <footer className="footer">
        <div >
          <nav>
            <ul >
              <a href="https://oseberg.io/"
                style={{textDecoration: 'none', padding: '10px'}} 
              >
                Company
              </a>
              |
              <a href="https://oseberg.io/products"
                style={{textDecoration: 'none', padding: '10px'}} 
              >
                Other Products
              </a>
              |
              <a href="https://oseberg.io/resources/contact"
                style={{textDecoration: 'none', padding: '10px'}} 
              >
                Contact
              </a>
              |
                &copy; {new Date().getFullYear()}{" "}
                Shelby Huffman
            </ul>
          </nav>
        </div>
      </footer>
    );
  }
}

export default Footer;