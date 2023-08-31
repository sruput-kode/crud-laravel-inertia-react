<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = Product::orderBy('id', 'desc')->get();
        return Inertia::render('Index', [
            'products' => $products,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'sku' => 'required|unique:products,sku',
            'nama' => 'required',
            'deskripsi' => 'nullable',
            'foto' => 'nullable|image',
            'stok' => 'nullable',
        ]);
        $dataInput = [
            'sku' => $request->sku,
            'nama' => $request->nama,
            'stok' => $request->stok,
        ];
        if ($request->filled('deskripsi')) {
            $dataInput['deskripsi'] = $request->deskripsi;
        }

        if ($request->hasFile('foto')) {
            $requestFoto = $request->file('foto');
            $namaFoto = $dataInput['sku'] . "." . $requestFoto->getClientOriginalExtension();
            $requestFoto->storeAs('public/products', $namaFoto);
            $dataInput['foto'] = "products/" . $namaFoto;
        }

        Product::create($dataInput);
        return to_route('products.index')->with('msg', 'Produk berhasil ditambahkan');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        return Inertia::render('Show', [
            'product' => $product,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        return Inertia::render('Edit', [
            'product' => $product,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        $request->validate([
            'sku' => 'required|unique:products,sku,' . $product->id,
            'nama' => 'required',
            'deskripsi' => 'nullable',
            'foto' => 'nullable|image',
            'stok' => 'required',
        ]);

        $dataUpdate = [
            'sku' => $request->sku,
            'nama' => $request->nama,
            'stok' => $request->stok,
        ];

        if ($request->filled('deskripsi')) {
            $dataUpdate['deskripsi'] = $request->deskripsi;
        }

        if ($request->hasFile('foto')) {
            if ($product->foto) {
                Storage::delete('public/' . $product->foto);
                $requestFoto = $request->file('foto');
                $namaFoto = $dataUpdate['sku'] . "." . $requestFoto->getClientOriginalExtension();
                $requestFoto->storeAs('public/products', $namaFoto);
                $dataUpdate['foto'] = "products/" . $namaFoto;
            }
        }

        $product->update($dataUpdate);
        return to_route('products.index')->with('msg', 'Produk berhasil terupdate');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        if ($product->foto) {
            Storage::delete("public/" . $product->foto);
        }
        $product->delete();
        return to_route('products.index')->with('msg', "{$product->name} berhasil dihapus");
    }
}
