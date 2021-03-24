import Image from 'next/image';
import { memo, useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsFillLightningFill } from 'react-icons/bs';
import { IoClose } from 'react-icons/io5';
import { MdChatBubble, MdLocationOn } from 'react-icons/md';
import { RiShareForwardFill } from 'react-icons/ri';

import Modal from '../modal/modal';
import {
  PostBody,
  PostComment,
  PostCommentsContainer,
  PostContainer,
  PostDescription,
  PostFooter,
  PostFooterHeader,
  PostModalBody,
  ShowPost
} from './styles';

interface Comments {
  id: string;
  photoUserComments: string;
  nameUser: string;
  comment: string;
  likes: number;
}
interface Post {
  nameUser: string;
  body?: string;
  message?: string;
  photoUser: string;
  comments?: Comments[];
}

const Post = ({ nameUser, body, message, photoUser, comments }: Post) => {
  const [modal, setModal] = useState(false);
  return (
    <>
      {body && (
        <Modal showModal={modal} hiddenModal={() => setModal(false)}>
          <PostModalBody>
            <IoClose size="32px" onClick={() => setModal(false)} />
            <ShowPost>
              <Image objectFit="contain" layout="fill" alt="post" src={body} />
            </ShowPost>
          </PostModalBody>
        </Modal>
      )}
      <PostContainer>
        {body && (
          <PostBody onClick={() => setModal(!modal)}>
            <Image
              className="zoomimagepost"
              loading="eager"
              objectFit="cover"
              objectPosition="center"
              layout="fill"
              alt="photo"
              src={body}
            />
          </PostBody>
        )}
        <PostFooter>
          <PostFooterHeader>
            <div>
              <div>
                <Image loading="eager" alt="you" layout="fill" src={photoUser} />
              </div>
              <p>{nameUser}</p>
            </div>
            <div>
              Varginha, MG
              <MdLocationOn color="#EA4335" size="24px" />
            </div>
          </PostFooterHeader>
          <PostDescription>
            <p>{message}</p>
          </PostDescription>
          <div>
            <BsFillLightningFill color="yellow" size="24px" />
            <div>
              <MdChatBubble size="24px" />
              <RiShareForwardFill size="24px" />
            </div>
          </div>
          <hr />
        </PostFooter>
        {comments &&
          comments.map(comment => {
            return (
              <PostCommentsContainer key={comment.id}>
                <PostComment>
                  <div>
                    {comment.photoUserComments && (
                      <Image
                        loading="eager"
                        alt="friend"
                        layout="fill"
                        src={comment.photoUserComments}
                      />
                    )}
                  </div>
                  <div className="postComments">
                    <div>
                      <p>{comment.nameUser}</p>
                      <p>{comment.comment}</p>
                    </div>
                    <div>
                      <AiOutlineHeart />
                    </div>
                  </div>
                </PostComment>
              </PostCommentsContainer>
            );
          })}
      </PostContainer>
    </>
  );
};

export default memo(Post);
