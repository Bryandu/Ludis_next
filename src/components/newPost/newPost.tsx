import { Field, Form, Formik } from 'formik';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { BiPlusCircle, BiX } from 'react-icons/bi';
import * as Yup from 'yup';

import { POST } from '../../service/axios';
import { Colors } from '../../styles/global';
import Button from '../button/button';
import { InputIcon } from '../inputs/inputIcon';
import Modal from '../modal/modal';
import {
  IconsFiles,
  NewpostContainer,
  NewPostContent,
  SetPost,
  SetPostFooter,
  SetPostHeader,
  SetPostPreview
} from './styles';

interface NewPostI {
  statusPost: (status: { show: boolean; message: string }) => void;
}

const NewPost = ({ statusPost }: NewPostI) => {
  const [modal, setModal] = useState(false);
  const [photo, setPhoto] = useState<File | Blob>();
  const [video, setVideo] = useState<File | Blob>();
  const [preview, setPreview] = useState<string | ArrayBuffer | null>('');
  const [message, setMessage] = useState<string>();

  const initialValues = {
    postmessage: ''
  };

  const validateSchema = Yup.object().shape({
    postmessage: Yup.string().optional()
  });

  useEffect(() => {
    const fileReader = new FileReader();
    photo && fileReader.readAsDataURL(photo);
    video && fileReader.readAsDataURL(video);
    fileReader.onloadend = () => {
      setPreview(fileReader.result);
    };
    if (!modal) {
      setPhoto(undefined);
      setVideo(undefined);
      fileReader.abort();
    }
  }, [photo, video, modal]);

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
    try {
      const response = await POST<typeof obj>('/posts', obj);
      response && statusPost({ show: true, message: response?.statusText });
    } catch (error) {
      statusPost({ show: true, message: error });
    }
  }

  return (
    <>
      <Modal showModal={modal} hiddenModal={() => setModal(!modal)}>
        <SetPost>
          <SetPostHeader>
            <h1>Nova publicação</h1>
            <BiX onClick={() => setModal(!modal)} size="24px" />
          </SetPostHeader>
          <Formik
            validationSchema={validateSchema}
            initialValues={initialValues}
            onSubmit={onSubmit}
            validate={e => setMessage(e.postmessage)}>
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
                  {photo && (
                    <Image
                      layout="fill"
                      objectFit="contain"
                      src={preview as string}
                      alt="preview"
                    />
                  )}
                  {video && (
                    <video width="100%" height="100%" controls src={preview as string}>
                      <track default kind="captions" />
                    </video>
                  )}
                </SetPostPreview>
              )}
              <SetPostFooter>
                <IconsFiles>
                  <InputIcon
                    onChange={e => {
                      setPhoto(undefined);
                      if (e.currentTarget.files) {
                        setPhoto(e.currentTarget.files[0]);
                      }
                    }}
                    accept="image/*"
                    name="foto"
                    width={35}
                    height={40}
                    src="https://img.icons8.com/fluent/48/000000/image.png"
                  />
                  <InputIcon
                    onChange={e => {
                      setVideo(undefined);
                      if (e.currentTarget.files) {
                        setVideo(e.currentTarget.files[0]);
                      }
                    }}
                    accept="video/*"
                    name="video"
                    width={35}
                    height={40}
                    src="https://img.icons8.com/fluent/48/000000/video-call.png"
                  />
                </IconsFiles>
                <Button disabled={!photo || (!video && !message)} type="submit" name="Publicar" />
              </SetPostFooter>
            </Form>
          </Formik>
        </SetPost>
      </Modal>
      <NewpostContainer onClick={() => setModal(true)}>
        <BiPlusCircle color={Colors.redSecondary} size="24px" />
        <p>Nova publicação</p>
      </NewpostContainer>
    </>
  );
};

export default NewPost;
