import {
    collection,
    doc,
    onSnapshot,
    orderBy,
    query,
} from "@firebase/firestore";
import { getProviders, getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";
import Modal from "../components/Modal";
import Sidebar from "../components/Sidebar";
import Login from '../components/Login'
import Post from "../components/Post";
import { db } from "../firebase";
import Head from "next/head";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Comment from "../components/Comment";

function PostPage({ trendingResults, followResults, providers }) {
    const { data: session } = useSession();
    const [isOpen, setIsOpen] = useRecoilState(modalState);
    const [post, setPost] = useState();
    const router = useRouter();
    const [comments, setComments] = useState([]);
    const { id } = router.query;

    useEffect(
        () =>
            onSnapshot(doc(db, "posts", id), (snapshot) => {
                setPost(snapshot.data());
            }),
        [db]
    );

    useEffect(
        () =>
            onSnapshot(
                query(
                    collection(db, "posts", id, "comments"),
                    orderBy("timestamp", "desc")
                ),
                (snapshot) => setComments(snapshot.docs)
            ),
        [db, id]
    );

    if (!session) return <Login providers={providers} />;

    // console.log(router);
    return (
        <div>
            <Head>
                <title>{post?.username} on Twitter:"{post?.text}"</title>
            </Head>
            <main className='bg-black min-h-screen'>
                <Sidebar />
                <div className="flex-grow border-l border-r border-gray-700 max-w-2xl sm:ml-[73px] xl:ml-[370px]">
                    <div className="flex items-center px-1.5 py-2 border-b border-gray-700 text-[#d9d9d9] font-semibold text-xl gap-x-4 sticky top-0 z-50 bg-black">
                        <div
                            className="hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0"
                            onClick={() => router.push("/")}
                        >
                            <ArrowLeftIcon className="h-5 text-white" />
                        </div>
                        Tweet
                    </div>
                    <Post id={id} post={post} postPage />
                    {comments.length > 0 && (
                        <div className="pb-72">
                            {comments.map((comment) => (
                                <Comment
                                    key={comment.id}
                                    id={comment.id}
                                    comment={comment.data()}
                                />
                            ))}
                        </div>
                    )}

                </div>

                {/* {session.user.name} */}
                {isOpen && <Modal />}
            </main>
        </div>

    )
}

export default PostPage;

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