# My-blog

Learning gatsby by creating my own blog and doing all comments, commits in english to train this skill to

Here we're using the desctructuring assignment to render our profile component

```
const Profile = () => (
    <StaticQuery
        query=
            {graphql`query MySiteMetadata
                { site
                    { siteMetadata {
                         title description author position
                        }
                    }
                }`
            }
    render={({
        site: {
            siteMetadata: { title, author, description, position },
        },
    }) => (
        <div className="Profile-wrapper">
            <h1>{author}</h1>
            <h2>{title}</h2>
            <h2> {position} </h2>
            <p> {description} </p>
        </div>
    )}
  />
)
```

This way we're using static query to fetch data from graphql and render 'dinamically' without using desctructuring assignment

```
  const Profile = () => (
    <StaticQuery
        query=
            {graphql
                `query MySiteMetadata {
                    site{ siteMetadata {
                        title description author position
                        }
                    }
                }`
             }
    render={
        data => (
            <div className="Profile-wrapper" >
                <h1>{data.site.siteMetadata.author}</h1>
                <h2> {data.site.siteMetadata.position} </h2>
                <p> {data.site.siteMetadata.description} </p>
            </div>
        )}
  />)
```
