import React from 'react';
import './account.scss';

import { withFirebase } from '../Firebase/index';

const AccountPage = (props) => {
	const { uid, displayName, email } = props.firebase.userInfo();
	return (
		<>
			<div className="Container">
				username: {displayName} email: {email} uid: {uid}
			</div>
		</>
	);
};
export default withFirebase(AccountPage);
