import React from 'react';
import UserDataStyles from './userData.module.scss';

const UserData = ({ userData }) => {
  const { firstName, lastName, email } = userData;

  return (
    <div className={UserDataStyles['user-data']}>
      <img src="https://bodyvic.com/img/girl.svg" alt="avatar" className={UserDataStyles.avatar} />
      <div className={UserDataStyles.info}>
        <p className={UserDataStyles.name}>
          <label>Имя</label>
          <span>{`${firstName} ${lastName}`}</span>
        </p>
        <p className="email">
          <label>Email</label>
          <span>{email}</span>
        </p>
        <p className={UserDataStyles['marafon-info']}>
          <label>Режим участия в марафоне</label>
          <span>Без контроля</span>
        </p>
      </div>
    </div>
  );
};

export default UserData;
