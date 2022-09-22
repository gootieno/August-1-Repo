- Get all the posts
  GET /posts

- Create a new post
  POST /posts

- Edit a post
  PUT /posts/:postId

- Create a new user
  POST /users

- Get the comments for a post
  GET /posts/:postId/comments

comments =>
{commentId: 1, comment: 'something', userId: 1}
{commentId: 2, comment: 'something else', userId: 1}
{commentId: 1, comment: 'something', postId: 1}

- Create a comment for a post
  POST /posts/:postId/comments

- Edit a comment for a post
  PUT || PATCH /posts/:postsId/comments/:commentId

- Delete a comment for a post
  DELETE /posts/:postId/comments/:commentId

- Add a like for a post
  POST /posts/:postId/likes

- Remove a like for a post
  DELETE /posts/:postId/likes/:likeId

- Get all the posts of a user
  GET /users/:userId/posts

- Submit a search on posts
  POST /posts/search

```js
fetch("/posts/search", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    searchParams: "Mars rover",
  }),
});
```
