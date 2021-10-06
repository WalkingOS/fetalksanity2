import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import sanityClient from "../client.js" 
import BlockContent from "@sanity/block-content-to-react"

export default function SinglePost() {
    const [singlePost, setSinglePost] = useState(null);
    const { slug } = useParams();

    useEffect(() => {
        sanityClient.fetch(`*[slug.current == "${slug}"]{
            title,
            _id,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                }
            },
            body,
            "name": author->name,
            "authorImage": author->image
        }`)
        .then((data) => setSinglePost(data[0]))
        .catch(console.error);
    }, [slug]);

    if(!singlePost) return <div>Loading...</div>
    
    return(
        <main> 
            <Link to={"/post"}>zurück</Link>
            <article>
                <header>
                    <div>
                        <div>
                            <h1>{singlePost.title}</h1>
                            <div>
                                <p>{singlePost.name}</p>
                            </div>
                        </div>
                    </div>
                    <img src={singlePost.mainImage.asset.url} alt={singlePost.title}/>
                </header>
                <div>
                    <BlockContent 
                        blocks={singlePost.body} 
                        projectId="rvtej61b" 
                        dataset="production"
                    />
                </div>
            </article>
        </main>
    )
}