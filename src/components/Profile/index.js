import React from 'react'
import {
    StaticQuery,
    graphql
} from "gatsby"

const Profile = () => (
    <StaticQuery
        query=
        {graphql`query MySiteMetadata {
                site{
                    siteMetadata {
                        title
                        description
                        author
                        position
                    }
                }
            }`
        }
        render={({ site: { siteMetadata: { title, author, description, position } } }) => (
            <div className="Profile-wrapper" >
                <h1>{author}</h1>
                <h2>{title}</h2>
                <h2> Um cara que faz programas de compiuter </h2>
                <h2> {position} </h2>
                <p> {description} </p>
            </div>
        )}
    />
)

/**
 * this way we're use static query to fetch data from graphql and render 'dinamically' without using desctructin assignment
 */
// const Profile = () => (
//     <StaticQuery
//         query=
//         {graphql
//             `query MySiteMetadata {
//                 site{
//                     siteMetadata {
//                         title
//                         description
//                         author
//                         position
//                     }
//                 }
//             }`
//         }
//         render={data => (
//             <div className="Profile-wrapper" >
//                 <h1>{data.site.siteMetadata.author}</h1>
//                 <h2> {data.site.siteMetadata.position} </h2>
//                 <h2> Um cara que faz programas de compiuter </h2>
//                 <p> {data.site.siteMetadata.description} </p>
//             </div>
//         )}
//     />
// )

export default Profile