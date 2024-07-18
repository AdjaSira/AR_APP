import Menue from '@/components/menue';
import Phonecard from '@/components/phonecard';
import React from 'react';

export async function getStaticPaths() {
    const products = [
        { id: '1', slug: 'iphone-15' },
        { id: '2', slug: 'galaxy-z-fold' },
        { id: '3', slug: 'galaxy-z-flip' },
        { id: '4', slug: 'ipad-pro' },
    ];

    const paths = products.map((product) => ({
        params: { slug: product.slug },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const { slug } = params;

    
    const productDetails = { slug, name: "Product Name" };

    return {
        props: {
            product: productDetails,
        },
    };
}

const PageDetail = ({ product }) => {
    return (
        <div>
        <h1>PAGE DETAILS PRODUIT: {product.slug}</h1>
        <p>Name: {product.name}</p>
        <Menue />
        <section className='bg-black h-14 w-full text-white flex items-center justify-center'>
            <p  className="text-gray-500">Boutique en ligne</p>    <span className="mx-2"></span> <p>iphone 15</p>
        </section>
        <div  className="mt-6">
        <Phonecard src="/iPhone_15_Pro_Blue_Titanium_1_0.jpg" title="Iphone 15 Pro" description="628 000 CFA" price="532 000" />
        </div>
       
    </div>
    );
};

export default PageDetail;
