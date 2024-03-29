import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <>
                <div>
                    <section className="py-5 bg-light" id="scroll-target">
                        <div className="container px-5 my-5">
                            <div className="row gx-5 align-items-center">
                                <div className="col-lg-6"><img className="img-fluid rounded mb-5 mb-lg-0" src="https://dummyimage.com/600x400/343a40/6c757d" alt="..." /></div>
                                <div className="col-lg-6">
                                    <h2 className="fw-bolder">Our founding</h2>
                                    <p className="lead fw-normal text-muted mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est, ut esse a labore aliquam beatae expedita. Blanditiis impedit numquam libero molestiae et fugit cupiditate, quibusdam expedita, maiores eaque quisquam.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* About section two*/}
                    <section className="py-5">
                        <div className="container px-5 my-5">
                            <div className="row gx-5 align-items-center">
                                <div className="col-lg-6 order-first order-lg-last"><img className="img-fluid rounded mb-5 mb-lg-0" src="https://dummyimage.com/600x400/343a40/6c757d" alt="..." /></div>
                                <div className="col-lg-6">
                                    <h2 className="fw-bolder">Growth &amp; beyond</h2>
                                    <p className="lead fw-normal text-muted mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est, ut esse a labore aliquam beatae expedita. Blanditiis impedit numquam libero molestiae et fugit cupiditate, quibusdam expedita, maiores eaque quisquam.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Team members section*/}
                    <section className="py-5 bg-light">
                        <div className="container px-5 my-5">
                            <div className="text-center">
                                <h2 className="fw-bolder">Our team</h2>
                                <p className="lead fw-normal text-muted mb-5">Dedicated to quality and your success</p>
                            </div>
                            <div className="row gx-5 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center">
                                <div className="col mb-5 mb-5 mb-xl-0">
                                    <div className="text-center">
                                        <img className="img-fluid rounded-circle mb-4 px-4" src="https://dummyimage.com/150x150/ced4da/6c757d" alt="..." />
                                        <h5 className="fw-bolder">Ibbie Eckart</h5>
                                        <div className="fst-italic text-muted">Founder &amp; CEO</div>
                                    </div>
                                </div>
                                <div className="col mb-5 mb-5 mb-xl-0">
                                    <div className="text-center">
                                        <img className="img-fluid rounded-circle mb-4 px-4" src="https://dummyimage.com/150x150/ced4da/6c757d" alt="..." />
                                        <h5 className="fw-bolder">Arden Vasek</h5>
                                        <div className="fst-italic text-muted">CFO</div>
                                    </div>
                                </div>
                                <div className="col mb-5 mb-5 mb-sm-0">
                                    <div className="text-center">
                                        <img className="img-fluid rounded-circle mb-4 px-4" src="https://dummyimage.com/150x150/ced4da/6c757d" alt="..." />
                                        <h5 className="fw-bolder">Toribio Nerthus</h5>
                                        <div className="fst-italic text-muted">Operations Manager</div>
                                    </div>
                                </div>
                                <div className="col mb-5">
                                    <div className="text-center">
                                        <img className="img-fluid rounded-circle mb-4 px-4" src="https://dummyimage.com/150x150/ced4da/6c757d" alt="..." />
                                        <h5 className="fw-bolder">Malvina Cilla</h5>
                                        <div className="fst-italic text-muted">CTO</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </>
        )
    }
}
