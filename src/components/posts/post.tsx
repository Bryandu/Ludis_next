import { PostContainer } from './styles';

interface Post {
  name: string;
  body: string;
}

const Post = ({ name, body }: Post) => {
  return (
    <PostContainer>
      <header>
        <div>
          <p>{name}</p>
        </div>
      </header>
      <div>
        <p>{body}</p>
      </div>
      <footer></footer>
    </PostContainer>
  );
};

export default Post;
