import React, { useEffect } from 'react';
import Google from '../../../Images/Icons/Google.png'
import Github from '../../../Images/Icons/Github.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import '../../Styles/Provider.css'
import { useNavigate } from 'react-router-dom';
import auth from '../../../Firebase.init';
import Loading from '../../Loading/Loading';

const Provider = () => {
  const navigate = useNavigate()
  let errorElement;

  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const [signInWithGithub, Gituser, Gitloading, Giterror] = useSignInWithGithub(auth);

  if (error || Giterror) {
    errorElement = <p className="text-danger">Error: {error?.message} {Giterror?.message}</p>
  }
  useEffect(() => {
    if (user || Gituser) {
      navigate('/')
    }
  }, [user,Gituser])
  if (loading || Gitloading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="d-flex align-items-center justify-content-center mb-3">
        <div className="border border-1 border-primary w-50 "></div>
        <p className="text-muted mt-3 mx-4">Or</p>
        <div className="border border-1 border-primary w-50"></div>
      </div>
      {errorElement}
      <div className="d-flex lign-items-center justify-content-center">
        <button className="provide-button me-3" onClick={() => signInWithGoogle()}>
          <img src={Google} alt="" />
          <span className="mx-3 fw-bold text-white mb-0">Google</span>
        </button>
        <button className="provide-button" onClick={() => signInWithGithub()}>
          <img src={Github} alt="" />
          <span className="mx-3 fw-bold text-white mb-0">Github</span>
        </button>
      </div>
    </div>
  );
};
export default Provider;