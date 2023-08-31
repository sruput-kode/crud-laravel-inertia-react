import React from "react";
import { Link, router, Head } from "@inertiajs/react";

const Create = ({ errors, product }) => {
    // state untuk value form
    const [input, setInput] = React.useState({
        sku: product.sku,
        nama: product.nama,
        deskripsi: product.deskripsi ? product.deskripsi : "",
        foto: null,
        stok: product.stok,
    });

    // function untuk handle form submit update
    const handleFormSubmit = (e) => {
        e.preventDefault();
        router.post(`/products/${product.sku}`, {
            _method: "put",
            ...input,
        });
    };

    return (
        <>
            <Head title="Tambah Produk" />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h4 className="mt-3 text-primary">Edit produk</h4>
                        <hr />
                    </div>
                    <div className="col-12">
                        <Link
                            href="/products"
                            className="btn btn-primary btn-sm my-3"
                        >
                            Kembali
                        </Link>
                        <div className="card">
                            <div className="card-body">
                                <form
                                    encType="multipart/form-data"
                                    onSubmit={handleFormSubmit}
                                >
                                    <div className="mb-3">
                                        <label
                                            htmlFor="sku"
                                            className="form-label"
                                        >
                                            SKU
                                        </label>
                                        <input
                                            type="text"
                                            className={
                                                errors.sku
                                                    ? "form-control is-invalid"
                                                    : "form-control"
                                            }
                                            id="sku"
                                            name="sku"
                                            value={input.sku}
                                            onChange={(e) =>
                                                setInput({
                                                    ...input,
                                                    sku: e.target.value,
                                                })
                                            }
                                        />
                                        {errors.sku && (
                                            <div className="invalid-feedback">
                                                {errors.sku}
                                            </div>
                                        )}
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="nama"
                                            className="form-label"
                                        >
                                            Nama produk
                                        </label>
                                        <input
                                            type="text"
                                            className={
                                                errors.nama
                                                    ? "form-control is-invalid"
                                                    : "form-control"
                                            }
                                            id="nama"
                                            value={input.nama}
                                            onChange={(e) =>
                                                setInput({
                                                    ...input,
                                                    nama: e.target.value,
                                                })
                                            }
                                        />
                                        {errors.nama && (
                                            <div className="invalid-feedback">
                                                {errors.nama}
                                            </div>
                                        )}
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="deskripsi"
                                            className="form-label"
                                        >
                                            Deskripsi produk
                                        </label>
                                        <textarea
                                            className={
                                                errors.deskripsi
                                                    ? "form-control is-invalid"
                                                    : "form-control"
                                            }
                                            id="deskripsi"
                                            rows={3}
                                            value={input.deskripsi}
                                            onChange={(e) =>
                                                setInput({
                                                    ...input,
                                                    deskripsi: e.target.value,
                                                })
                                            }
                                        />
                                        {errors.deskripsi && (
                                            <div className="invalid-feedback">
                                                {errors.deskripsi}
                                            </div>
                                        )}
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="foto"
                                            className={
                                                errors.foto
                                                    ? "form-control is-invalid"
                                                    : "form-control"
                                            }
                                        >
                                            Foto produk
                                        </label>
                                        <input
                                            className="form-control"
                                            type="file"
                                            id="foto"
                                            onChange={(e) =>
                                                setInput({
                                                    ...input,
                                                    foto: e.target.files[0],
                                                })
                                            }
                                        />
                                        {errors.foto && (
                                            <div className="invalid-feedback">
                                                {errors.foto}
                                            </div>
                                        )}
                                    </div>

                                    <div className="mb-3">
                                        <label
                                            htmlFor="stok"
                                            className="form-label"
                                        >
                                            Stok
                                        </label>
                                        <input
                                            type="number"
                                            className={
                                                errors.stok
                                                    ? "form-control is-invalid"
                                                    : "form-control"
                                            }
                                            id="stok"
                                            min={0}
                                            value={input.stok}
                                            onChange={(e) =>
                                                setInput({
                                                    ...input,
                                                    stok: e.target.value,
                                                })
                                            }
                                        />
                                        {errors.stok && (
                                            <div className="invalid-feedback">
                                                {errors.stok}
                                            </div>
                                        )}
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        Update
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Create;
