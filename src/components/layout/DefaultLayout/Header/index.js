/* eslint-disable jsx-a11y/anchor-is-valid */
import 'bootstrap/dist/css/bootstrap.css';

import imgBanner from '../../../../assets/img/banner1.png'


function Header() {
    return ( 
        <>
        <div className="header">

<nav class="navbar navbar-expand-lg navbar-light bg-header py-3">
  <div class="container"><a href="#" class="navbar-brand d-flex align-items-center"> <i class="fa fa-snowflake-o fa-lg text-primary mr-2"></i><strong>
  organic.vn</strong></a>
    <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler"><span class="navbar-toggler-icon"></span></button>
    <div id="navbarSupportedContent" class="collapse navbar-collapse">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active"><a href="#" class="nav-link font-italic"> Home </a></li>
        <li class="nav-item active"><a href="#" class="nav-link font-italic"> About </a></li>
        <li class="nav-item active"><a href="#" class="nav-link font-italic"> Services </a></li>
        <li class="nav-item active"><a href="#" class="nav-link font-italic"> Contact</a></li>
      </ul>
    </div>
  </div>
</nav>
<div class="bg-header">
  <div class="container py-5">
    <div class="row h-100 align-items-center py-5">
      <div class="col-lg-6">
        <h1 class="display-4">100% French imported food</h1>
        <p class="lead text-muted mb-0">
Food quality assurance, is tested daily in accordance with the regulations of the Ministry of Health</p>
      </div>
      <div class="col-lg-6 d-none d-lg-block"><img src={imgBanner} alt="" class="img-fluid"/></div>
    </div>
  </div>
</div>
</div>
        </>
    )}
export default Header;