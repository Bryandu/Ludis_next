import { Field, Form, Formik } from 'formik';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { BiImage, BiPlus, BiVideo, BiX } from 'react-icons/bi';
import { FcStackOfPhotos, FcVideoCall } from 'react-icons/fc';

import { POST } from '../../service/axios';
import Button from '../button/button';
import { InputIcon } from '../inputs/inputIcon';
import Modal from '../modal/modal';
import {
  IconsFiles,
  NewpostContainer,
  NewPostContent,
  PostTypes,
  SetPost,
  SetPostFooter,
  SetPostHeader,
  SetPostPreview
} from './styles';

const NewPost = () => {
  const [modal, setModal] = useState(false);
  const [file, setFile] = useState<File | Blob>();
  const [preview, setPreview] = useState<string | ArrayBuffer | null>('');

  const initialValues = {
    postmessage: ''
  };

  useEffect(() => {
    const fileReader = new FileReader();
    file && fileReader.readAsDataURL(file);
    fileReader.onloadend = () => {
      setPreview(fileReader.result);
    };
    if (!modal) {
      setFile(undefined);
      fileReader.abort();
    }
  }, [preview, modal, file]);

  async function onSubmit(values: typeof initialValues) {
    const { postmessage } = values;
    const obj = {
      id: Math.random(),
      name: 'Bryan Willes',
      body: preview,
      title: postmessage,
      profile: preview,
      albumId: 9,
      url: preview,
      thumbnailUrl: preview
    };
    setModal(false);
    await POST('/posts', obj);
  }

  return (
    <>
      <Modal showModal={modal} hiddenModal={() => setModal(!modal)}>
        <SetPost>
          <SetPostHeader>
            <h1>Nova publicação</h1>
            <BiX onClick={() => setModal(!modal)} size="24px" />
          </SetPostHeader>
          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            <Form>
              <NewPostContent>
                <Field
                  as="textarea"
                  name="postmessage"
                  placeholder="Escreva uma mensagem"
                  maxLength={1000}
                />
              </NewPostContent>
              {preview && (
                <SetPostPreview>
                  <Image layout="fill" objectFit="contain" src={preview as string} alt="previw" />
                </SetPostPreview>
              )}
              <SetPostFooter>
                <IconsFiles>
                  <InputIcon
                    onChange={e => {
                      if (e.currentTarget.files) {
                        setFile(e.currentTarget.files[0]);
                      }
                    }}
                    accept="image/*"
                    name="foto"
                    iconsize="35px"
                    icon={FcStackOfPhotos}
                  />
                  <InputIcon
                    onChange={e => {
                      if (e.currentTarget.files) {
                        setFile(e.currentTarget.files[0]);
                      }
                    }}
                    accept="video/*"
                    name="video"
                    iconsize="35px"
                    icon={FcVideoCall}
                  />
                </IconsFiles>
                <Button type="submit" name="Publicar" />
              </SetPostFooter>
            </Form>
          </Formik>
        </SetPost>
      </Modal>
      <NewpostContainer>
        <p>Nova publicação</p>
        <PostTypes>
          <div>
            <BiImage />
          </div>
          <span></span>
          <div aria-hidden="true" onClick={() => setModal(true)}>
            <BiPlus />
          </div>
          <span></span>
          <div>
            <BiVideo />
          </div>
        </PostTypes>
      </NewpostContainer>
    </>
  );
};

export default NewPost;
