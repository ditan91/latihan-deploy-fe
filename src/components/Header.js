import Nav from 'react-bootstrap/Nav';
import React from "react";

function Header() {
  return (
    <Nav
      activeKey="/"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Header();

// import React from "react";
// import Image from "react-bootstrap/Image";
// import Nav from 'react-bootstrap/Nav';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// export default function Header() {
//   return (
//     <div>
//       <h3>Home</h3>
//       <h3>About</h3>
//       <header style={{ backgroundColor: `#F1F3FF` }}>
//         {/* <!-- NAVBAR -->  */}
//         <Nav
//           class="navbar navbar-expand-lg container-fluid"
//           style={{ zIndex: '8' }}
//         >
//           <div class="container-fluid navnav" style={{ paddingTop: "24px" }}>
//             <Image src="../assets/logo.png" />
//             <div class="d-flex d-sm-block d-md-none">
//               <Button
//                 style={{ border: "none" }}
//                 class="navbar-toggler"
//                 type="button"
//                 data-bs-toggle="offcanvas"
//                 data-bs-target="#offcanvasRight"
//                 aria-controls="offcanvasRight"
//               >
//                 <span class="navbar-toggler-icon"></span>
//               </Button>
//               <div
//                 class="offcanvas offcanvas-end"
//                 tabindex="-1"
//                 id="offcanvasRight"
//                 aria-labelledby="offcanvasRightLabel"
//               >
//                 <div class="offcanvas-header">
//                   <Image src="../assets/logo.png" />
//                   <Button
//                     type="button"
//                     class="btn-close text-reset"
//                     data-bs-dismiss="offcanvas"
//                     aria-label="Close"
//                   ></Button>
//                 </div>
//                 <div class="offcanvas-body">
//                   <div class="d-flex flex-column bd-highlight mb-3">
//                     <div class="p-3 bd-highlight">
//                       <a
//                         href="#home"
//                         class="nav-text"
//                         style={{ textDecoration: "none" }}
//                       >
//                         Our Services
//                       </a>
//                     </div>
//                     <div class="p-3 bd-highlight">
//                       <a
//                         href="#About"
//                         class="nav-text"
//                         style={{ textDecoration: "none" }}
//                       >
//                         Why Us
//                       </a>
//                     </div>
//                     <div class="p-3 bd-highlight">
//                       <a
//                         href="#Why Us"
//                         class="nav-text"
//                         style={{ textDecoration: "none" }}
//                       >
//                         Testimonial
//                       </a>
//                     </div>
//                     <div class="p-3 bd-highlight">
//                       <a
//                         href="#Masuk"
//                         class="nav-text"
//                         style={{ textDecoration: "none" }}
//                       >
//                         FAQ
//                       </a>
//                     </div>
//                     <Button class="button">Register</Button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div
//               class="collapse navbar-collapse container mt-3"
//               id="navbarSupportedContent"
//             >
//               <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//                 <li class="nav-item">
//                   <a class="nav-link p-3" href="/"> </a>
//                 </li>
//                 <li class="nav-item">
//                   <a class="nav-link p-3" href="/"> </a>
//                 </li>
//                 <li class="nav-item">
//                   <a class="nav-link p-3" aria-current="page" href="/"> </a>
//                 </li>
//               </ul>
//               <Form class="d-flex" style={{ marginRight: "-25px" }}>
//                 <Button
//                   class="nav-text"
//                   style={{ border: "none", backgroundColor: "transparent" }}
//                 >
//                   <a class="masuk p-2" href="/">
//                     Our Services
//                   </a>
//                 </Button>
//                 <Button
//                   class="nav-text"
//                   style={{ border: "none", backgroundColor: "transparent" }}
//                 >
//                   <a class="masuk p-2" href="/">
//                     Why Us
//                   </a>
//                 </Button>
//                 <Button
//                   class="nav-text"
//                   style={{ border: "none", backgroundColor: "transparent" }}
//                 >
//                   <a class="masuk p-2" href="/">
//                     Testimonial
//                   </a>
//                 </Button>
//                 <Button
//                   class="nav-text"
//                   style={{ border: "none", backgroundColor: "transparent" }}
//                 >
//                   <a class="masuk p-2 pe-4" href="/">
//                     FAQ
//                   </a>
//                 </Button>
//                 <Button class="button">Register</Button>
//               </Form>
//             </div>
//           </div>
//         </Nav>
//         {/* <!-- Section 1  --> */}
//         <div class="one mt-5">
//           <div class="row">
//             <div class="col col-one">
//               <h1 class="h1-text header-text">
//                 Sewa & Rental Mobil Terbaik di kawasan Bandung
//               </h1>
//               <p class="p-text me-4">
//                 Selamat datang di Binar Car Rental. Kami menyediakan mobil
//                 kualitas terbaik dengan harga terjangkau. Selalu siap melayani
//                 kebutuhanmu untuk sewa mobil selama 24 jam
//               </p>
//               <Button class="button" style={{ width: "140px" }}>
//                 <a
//                   class="button"
//                   href="http://localhost:8000/cars"
//                   style={{ textDecoration: "none" }}
//                 >
//                   Mobil Sewa Mobil
//                 </a>
//               </Button>
//             </div>
//             <div class="col">
//               <Image src="../assets/img_car.png" />
//             </div>
//           </div>
//         </div>
//       </header>
//     </div>
//   );
// }
