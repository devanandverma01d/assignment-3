import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <>
            <div>
                <main className="flex-shrink-0">
                    {/* Navigation*/}
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <div className="container px-5">
                            <a className="navbar-brand" href="index.html">Start Bootstrap</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li className="nav-item"><a className="nav-link" href="index.html">Home</a></li>
                                    <li className="nav-item"><a className="nav-link" href="about.html">About</a></li>
                                    <li className="nav-item"><a className="nav-link" href="contact.html">Contact</a></li>
                                    <li className="nav-item"><a className="nav-link" href="pricing.html">Pricing</a></li>
                                    <li className="nav-item"><a className="nav-link" href="faq.html">FAQ</a></li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" id="navbarDropdownBlog" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Blog</a>
                                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownBlog">
                                            <li><a className="dropdown-item" href="blog-home.html">Blog Home</a></li>
                                            <li><a className="dropdown-item" href="blog-post.html">Blog Post</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" id="navbarDropdownPortfolio" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Portfolio</a>
                                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownPortfolio">
                                            <li><a className="dropdown-item" href="portfolio-overview.html">Portfolio Overview</a></li>
                                            <li><a className="dropdown-item" href="portfolio-item.html">Portfolio Item</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    {/* Header*/}
                    <header className="bg-dark py-5">
                        <div className="container px-5">
                            <div className="row gx-5 align-items-center justify-content-center">
                                <div className="col-lg-8 col-xl-7 col-xxl-6">
                                    <div className="my-5 text-center text-xl-start">
                                        <h1 className="display-5 fw-bolder text-white mb-2">A Bootstrap 5 template for modern businesses
                                        </h1>
                                        <p className="lead fw-normal text-white-50 mb-4">Quickly design and customize responsive
                                            mobile-first sites with Bootstrap, the world’s most popular front-end open source
                                            toolkit!</p>
                                        <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                                            <a className="btn btn-primary btn-lg px-4 me-sm-3" href="#features">Get Started</a>
                                            <a className="btn btn-outline-light btn-lg px-4" href="#!">Learn More</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center"><img className="img-fluid rounded-3 my-5" src="https://dummyimage.com/600x400/343a40/6c757d" alt="..." /></div>
                            </div>
                        </div>
                    </header>
                    {/* Features section*/}
                    <Outlet />
                </main>
                {/* Footer*/}
                <footer className="bg-dark py-4 mt-auto">
                </footer></div>
            <footer>
                <div className="container px-5">
                    <div className="row align-items-center justify-content-between flex-column flex-sm-row">
                        <div className="col-auto">
                            <div className="small m-0 text-white">Copyright © Your Website 2022</div>
                        </div>
                        <div className="col-auto">
                            <a className="link-light small" href="#!">Privacy</a>
                            <span className="text-white mx-1">·</span>
                            <a className="link-light small" href="#!">Terms</a>
                            <span className="text-white mx-1">·</span>
                            <a className="link-light small" href="#!">Contact</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
