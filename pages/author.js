import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Author = (props) => {
    return (
        <div>
            <h1>Authors</h1>
            <div>
            {
                props.authors.map(author => (
                <ul>
                    <Link href={`author/${author.id}`}>
                        <li>
                            <img  alt= {author.id} src={author.avatar} />
                            <h3>{author.first_name} {author.last_name}</h3>
                            <p>{author.email}</p>
                        </li>
                    </Link>
                </ul>
                ))
            }
            </div>
        </div>
    )
}

Author.getInitialProps = async function(){
    const response = await fetch('https://reqres.in/api/users?page=1');
    const data = await response.json();
    return {
        authors: data.data
    }
}

export default Author;