import React from "react";
import { Link, Head } from "@inertiajs/react";

const Show = ({ product }) => {
    //  untuk style gambar produk
    const _imageStyle = {
        width: "200px",
        height: "200px",
        objectFit: "cover",
    };
    return (
        <>
            <Head title="Detail produk" />
            <div className="container mt-3">
                <div className="row">
                    <div className="col-12">
                        <h4 className="text-success">Detail produk</h4>
                        <small className="text-success">
                            informasi detail produk sruputkode.com
                        </small>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-6">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td>Sku</td>
                                    <td>{product.sku}</td>
                                </tr>
                                <tr>
                                    <td>Nama produk</td>
                                    <td>{product.nama}</td>
                                </tr>
                                <tr>
                                    <td>Deskripsi</td>
                                    <td>
                                        {product.deskripsi
                                            ? product.deskripsi
                                            : "Tidak ada deskripsi"}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Foto</td>
                                    <td>
                                        {product.foto ? (
                                            <img
                                                src={"/storage/" + product.foto}
                                                alt={product.name}
                                                style={_imageStyle}
                                            />
                                        ) : (
                                            "Tidak ada foto"
                                        )}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Stok</td>
                                    <td>{product.stok}</td>
                                </tr>

                                <tr>
                                    <td></td>
                                    <td>
                                        <Link
                                            className="btn btn-primary btn-sm"
                                            href="/products"
                                        >
                                            Kembali ke beranda
                                        </Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Show;
