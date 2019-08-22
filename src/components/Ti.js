import React from "react";

import { Link } from "react-router-dom";

class Ti extends React.Component {
  render() {
    return (
      <div>
        TestTi<Link to="/wenti">WENTI</Link>
      </div>
    );
  }
}
export default Ti;
