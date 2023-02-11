import React, { useState, useEffect } from 'react';
import { IPost } from '../models/IPost';
import postAPI from '../services/PostServices';
import PostItem from './PostItem';

const PostContainer = () => {
  const [limit, setLimit] = useState(100);
  const {
    data: posts,
    isLoading: isFetchLoading,
    error: fetchError,
    refetch,
  } = postAPI.useFetchAllPostsQuery(
    limit,
    // {
    //   pollingInterval: 1000,
    // },
  );
  const [createPost, { error: postError, isLoading: isPostLoading }] = postAPI.useCreatePostMutation();
  const [deletePost, { error: deleteError, isLoading: isDeleteLoading }] = postAPI.useDeletePostMutation();
  const [updatePost, { error: updateError, isLoading: isUpdateLoading }] = postAPI.useUpdatePostMutation();

  const handleCreate = async () => {
    const title = prompt() || '';
    await createPost({ title, body: '' } as IPost);
  };

  const removeItemHandler = async (post: IPost) => {
    await deletePost(post);
  };

  const updateItemHandler = async (post: IPost) => {
    await updatePost(post);
  };

  // useEffect(() => {
  //   setTimeout(() => setLimit(3), 3000);
  // }, []);
  return (
    <div>
      <button onClick={handleCreate}>Add new post</button>
      <button onClick={refetch}>REFETCH</button>
      {fetchError && <div>Error</div>}
      {isFetchLoading ? (
        <div>Loading...</div>
      ) : (
        posts?.map((post) => (
          <PostItem key={post.id} post={post} remove={removeItemHandler} update={updateItemHandler} />
        ))
      )}
    </div>
  );
};

export default PostContainer;
