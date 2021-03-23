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

interface Post {
  name: string;
  body: string;
  title: string;
  profile: string;
}

const Post = ({ name, body, title, profile }: Post) => {
  const [modal, setModal] = useState(false);
  return (
    <>
      <Modal showModal={modal} hiddenModal={() => setModal(false)}>
        <PostModalBody>
          <IoClose size="32px" onClick={() => setModal(false)} />
          <ShowPost>
            <Image objectFit="contain" layout="fill" alt="post" src={body} />
          </ShowPost>
        </PostModalBody>
      </Modal>
      <PostContainer>
        <PostBody onClick={() => setModal(!modal)}>
          {body && (
            <Image
              className="zoomimagepost"
              loading="eager"
              objectFit="fill"
              layout="fill"
              alt="photo"
              src={body}
            />
          )}
        </PostBody>
        <PostFooter>
          <PostFooterHeader>
            <div>
              <div>
                {profile && <Image loading="eager" alt="you" layout="fill" src={profile} />}
              </div>
              <p>{name}</p>
            </div>
            <div>
              Varginha, MG
              <MdLocationOn color="#EA4335" size="24px" />
            </div>
          </PostFooterHeader>
          <PostDescription>
            <p>{title}</p>
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
        <PostCommentsContainer>
          <PostComment>
            <div>
              {profile && <Image loading="eager" alt="friend" layout="fill" src={profile} />}
            </div>
            <div className="postComments">
              <div>
                <p>{name}</p>
                <p>{title}</p>
              </div>
              <div>
                <AiOutlineHeart />
              </div>
            </div>
          </PostComment>
        </PostCommentsContainer>
      </PostContainer>
    </>
  );
};

export default memo(Post);
