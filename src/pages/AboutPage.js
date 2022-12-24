import React from "react";
import { Link } from 'react-router-dom';
export default function AboutPage() {
  return (
    <div>
      <h2>About Page</h2>
      <a href="/">Pindah ke halaman home pake href</a>
      <br />
      {/* link tidak perlu refresh seperti href  */}
      <Link to="/">Pindah ke halaman home pake link</Link> 
    </div>
  );
}
