import React from "react";
import { Head, Link, router, usePage } from "@inertiajs/react";
import Swal from "sweetalert2";
const Index = ({ products }) => {
    let number = 0;

    // property untuk menangkap session pesan flash
    const { flash } = usePage().props;

    // untuk handle hapus data
    const handleDelete = (e) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(`/products/${e.target.id}`);
            }
        });
    };

    return (
        <>
            {/* untuk menambahkan title page */}
            <Head title="List product sruputkode.com"></Head>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="text-center text-primary">
                            Data produk
                        </h2>
                        <p className="text-center">
                            <small>Data produk di sruputkode.com</small>
                        </p>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        {/* menampilkan pesan flash jika ada */}
                        {flash.msg && (
                            <div
                                className="alert alert-success alert-dismissible fade show"
                                role="alert"
                            >
                                <span className="text-center">{flash.msg}</span>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="alert"
                                    aria-label="Close"
                                />
                            </div>
                        )}
                        <Link
                            href="/products/create"
                            className="btn btn-primary btn-sm mb-3"
                        >
                            + Tambah produk
                        </Link>

                        <table className="table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>SKU</th>
                                    <th>Nama Produk</th>
                                    <th>Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.length === 0 ? (
                                    <tr>
                                        <td
                                            colSpan={4}
                                            className="text-center text-danger"
                                        >
                                            Tidak ada data
                                        </td>
                                    </tr>
                                ) : (
                                    products.map((product, index) => {
                                        number += 1;
                                        return (
                                            <tr key={index}>
                                                <td>{number}</td>
                                                <td>{product.sku}</td>
                                                <td>{product.nama}</td>
                                                <td>
                                                    <Link
                                                        href={`products/${product.sku}`}
                                                        className="btn btn-primary btn-sm me-1"
                                                    >
                                                        lihat
                                                    </Link>
                                                    <Link
                                                        href={`products/${product.sku}/edit`}
                                                        className="btn btn-warning btn-sm me-1"
                                                    >
                                                        ubah
                                                    </Link>
                                                    <button
                                                        id={product.sku}
                                                        onClick={handleDelete}
                                                        className="btn btn-danger btn-sm"
                                                    >
                                                        hapus
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    })
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Index;
