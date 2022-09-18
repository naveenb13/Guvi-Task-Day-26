import React from 'react'
import { Link } from "react-router-dom"

function Products() {
    return (
        <div class="container-fluid">

            {/* <!-- Page Heading --> */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Products</h1>
                <Link to="/portal/create-product" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    className="fas fa-download fa-sm text-white-50"></i> Create-Product</Link>
            </div>

            {/* <!-- DataTales Example --> */}
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Cost</th>
                                    <th>Currency</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Product</th>
                                    <th>Cost</th>
                                    <th>Currency</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                <tr>
                                    <td>iPhone</td>
                                    <td>320,800</td>
                                    <td>$</td>
                                </tr>
                                <tr>
                                    <td>PowerBank</td>
                                    <td>170,750</td>
                                    <td>$</td>
                                </tr>
                                <tr>
                                    <td>Earphone</td>
                                    <td>86,000</td>
                                    <td>$</td>
                                </tr>
                                <tr>
                                    <td>Laptop</td>
                                    <td>433,060</td>
                                    <td>$</td>
                                </tr>
                                <tr>
                                    <td>Personal Computer</td>
                                    <td>162,700</td>
                                    <td>$</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Products