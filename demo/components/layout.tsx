import styles from '../styles/layout.module.scss'
import NavigationBar from '../ui/molecules/NavigationBar'
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Image from 'next/image';
import imageExample from '../public/next.svg';
import Head from 'next/head';
import React from 'react';
  
export default function Layout ({ children } : Partial<any>) {
    const [response , setResponse] = useState([]);
    const api_url = 'https://my-json-server.typicode/demo/posts';
    const navigation = [
        { title : 'Home', link: '/home', meta: {title : 'This is main page',description : 'This is about description'}},
        { title : 'Articles', link: '/articles', meta: {title : 'This is articles page',description : 'This is about description'}},
        { title : 'About', link: '/about', meta: {title : 'This is about page',description : 'This is about description'}},
    ];
    
    const  router = useRouter ();
    const meta = navigation.find(element => element.link === router.pathname)
    console.log('meta',meta);
    // const isCopy = router.pathname === '/articles' ? 'copy' : '';
    // const NavigationBarWrapper = dynamic(() => import('../../ui/molecules/NavigationBar'+ isCopy ).then((component) => component.default),{
    //     ssr:true
    // }
    // )
    return (
        <>
        <Head>
            <title>
                {meta?.meta.title}
            </title>
            <meta name='description' content={meta?.meta.description}/>
            <meta property='og:title' content={meta?.meta.title}/>
            <meta property='og:description' content={meta?.meta.description}/>
            <meta property='og:URL' content='https://nextjs-cookbook.site/'/>
            <meta property='og:type' content='website'/>
        </Head>
        <div style={{ display: 'flex', alignItems: 'center' , backgroundColor : '#004E96'}}>
            {/* <Image 
                className='ml-2  '
                src={imageExample}
                alt='user random picture'
                width={100}
                height={100}
            />  */}
            <span className='ml-2 text-2xl text-white'>Cookbook</span>
        </div>

        <nav>
            <NavigationBar navigation={navigation}  />
        </nav>
        <main>{children}</main>
        <footer className={styles.footer}>2022. All rights reserves</footer>
        </>
    )
}