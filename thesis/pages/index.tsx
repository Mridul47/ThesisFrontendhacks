import React from 'react'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import { getProviders, getSession, useSession } from "next-auth/react";
import { GetServerSidePropsContext } from 'next';

export default function index() {
  return (
    <main className='bg-black min-h-screen'>
      <Sidebar/>
      <Feed/>
    </main>
  )
}
export async function getServerSideProps(context:GetServerSidePropsContext) {
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