import Link from 'next/link';
import { useEffect, useState } from 'react';
import fetch from 'isomorphic-unfetch';
import { useRouter } from 'next/router'



const Author = () => {
    const router = useRouter()
    const { authorId } = router.query
    const [author, setAuthor] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        let componentMounted = true
        if(authorId != null)
        {
            fetchData(authorId).then(author => {
                if(componentMounted)
                {
                    setAuthor(author)
                    setLoading(false)
                }
            })
        }
        return () => { componentMounted = false }
    }, [authorId])
    return ( 
            <div>
                
                {!loading && (
                    <>
                        <h1>{author.first_name}-{author.last_name}</h1>
                        <div>
                            <img  alt={author.id} src={author.avatar} />
                            <p>{author.email}</p>
                        </div>
                    </>
                )}
            </div>
    )
}

let fetchData = async (authorId) => {
    console.log(`https://reqres.in/api/users/${authorId}`)
    const response = await fetch(`https://reqres.in/api/users/${authorId}`);
    const data = await response.json();
    return data.data;
}

export default Author;