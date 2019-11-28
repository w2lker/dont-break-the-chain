import React from 'react';
import ProfileHeader from './ProfileHeader';
import ProfileInfo from './ProfileInfo';
import ProfileStats from './ProfileStats';

export interface IProfilePageProps {
  id?: number;
  profileLoading?: boolean;
  profileLoadError?: boolean;
  getProfile: () => void;
}

class ProfilePage extends React.Component<IProfilePageProps, {}> {

  componentDidMount(): void {
    const { id, getProfile } = this.props;
    if (!id) {
      getProfile();
    }
  }

  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    const { id } = this.props;
    // TODO: provide loading and load error states to this component
    if (!id) {
      return null;
    }
    return (
      <React.Fragment>
        <ProfileHeader />
        <ProfileInfo />
        <ProfileStats />
      </React.Fragment>
    );
  }
}

export default ProfilePage;
