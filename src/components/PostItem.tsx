import React, { FC, MouseEvent } from 'react';
import { IPost } from '../models/IPost';

type TypedPostItem = {
  post: IPost;
  remove: (post: IPost) => void;
  update: (post: IPost) => void;
};

const PostItem: FC<TypedPostItem> = ({ post, remove, update }) => {
  const removeHandler = (e: MouseEvent) => {
    e.stopPropagation();

    remove(post);
  };

  const updateHandler = () => {
    const title = prompt() || '';
    update({ ...post, title });
  };

  return (
    <div onClick={updateHandler}>
      {post.id}. {post.title}
      <button onClick={removeHandler}>Delete</button>
    </div>
  );
};

export default PostItem;
