import React, {useState} from 'react';
import useForm from 'react-hook-form';

import {firebaseAppAuth, provider as firebaseAuthProvider, firestore} from '../vars/firebase';
import Success from './Success';

function AttendanceForm({meetupId}) {
  const {register, handleSubmit, watch} = useForm();
  const [successCode, setSuccessCode] = useState(null);

  const watchStudent = watch('student');

  async function onSubmit(data) {
    try {
      const {user, credential} = await firebaseAppAuth.signInWithPopup(firebaseAuthProvider);
      const {uid, photoURL, displayName, email} = user;
      const {accessToken, providerId, signInMethod} = credential;

      const docRef = await firestore.collection(meetupId).add({
        ...data,
        user: {
          uid, photoURL, displayName, email, credential: {accessToken, providerId, signInMethod}
        }
      });

      const {id: docId} = docRef;
      setSuccessCode(docId);

    } catch (e) {
      console.log(e);
      const {/* code, */ message} = e;
      alert(message);
    }
  }

  return (
    <div>

      {
        successCode ? <Success code={successCode} /> : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='WR__instruction'>Join our community by answering these questions:</div>

            <div className="WR__form-control">
              <div className="WR__form-question">Are you a student?</div>
              <div>
                <input id='student-yes' type="radio" value="yes" name="student" ref={register} required />
                <label htmlFor='student-yes'>Yes, I am a student</label>
              </div>

              <div>
                <input id='student-no' type="radio" value="no" name="student" ref={register} required />
                <label htmlFor='student-no'>No, I'm too old for that</label>
              </div>
            </div>

            <div className="WR__form-control">

              <div className="WR__form-control_part">
                <label htmlFor='orgName' className="WR__form-question">{watchStudent === 'yes' ? 'Institute' : 'Company'} name</label>
                <input name="orgName" ref={register} required autoComplete={watchStudent === 'yes' ? '' : 'organization'} type="text" />
              </div>

              {
                watchStudent === 'no' && (<div className="WR__form-control_part">
                  <label htmlFor="jobTitle" className="WR__form-question">Job title</label>
                  <input name="orgTitle" ref={register} required autoComplete="organization-title" type="text" />
                </div>)
              }

            </div>

            <div className="WR__form-control">
              <label htmlFor='level' className="WR__form-question">Your react familiarity...</label>
              <select id='level' name='level' ref={register} required>
                <option value='beginner'>I am new</option>
                <option value='for-fun'>Sometimes I write React #sometimes</option>
                <option value='for-living'>I write Reach for a living</option>
              </select>
            </div>

            <button type='submit' className="WR_submitButton">Continue with Facebook</button>
          </form>
        )
      }

    </div>);
}

export default AttendanceForm;
