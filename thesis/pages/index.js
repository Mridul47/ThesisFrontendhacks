import React from 'react'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import { getProviders, getSession, useSession } from "next-auth/react";
import Login from '../components/Login'
import Modal from '../components/Modal'
import { useRecoilState } from 'recoil';
import { modalState } from '@/atoms/modalAtom';


export default function index({ trendingResults, followResults, providers }) {
  //session ko kaam k vanda login nagari homepage nadehauna lai ho
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useRecoilState(modalState);

  // ra yaha ko le tei edi login chaina vane login ko page dekhaune logic ho
  if (!session) return <Login providers={providers} />;
  return (
    <main className='bg-black min-h-screen'>
      <Sidebar />
      <Feed />
      {/* {session.user.name} */}
      {isOpen && <Modal/>}
    </main>
  )
}
export async function getServerSideProps(context) {
  const trendingResults = await fetch("https://jsonplaceholder.typicode.com/posts").then(
    (res) => res.json()
  );
  const followResults = await fetch("https://jsonplaceholder.typicode.com/users").then(
    (res) => res.json()
  );
  const providers = await getProviders();
  const session = await getSession(context);

  return {
    props: {
      trendingResults,
      followResults,
      providers,
      session,
    },
  };
}