import { FriendsListItem } from 'components/FriendsListItem/FriendsListItem';
import PropTypes from 'prop-types';
import css from '../FriendsListItem/FriendsListItem.module.css';

export const FriendsList = props => {
  const { friends } = props;
  return (
    <div className={css.friends}>
    <ul className="friends_list">
      {friends.map(friend => {
        return (
          <FriendsListItem
            key={friend.id}
            avatar={friend.avatar}
            isOnline={friend.isOnline}
            name={friend.name}
          />
        );
      })}
    </ul>
  </div>
  );
};

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
      })
    ).isRequired,
  };
export default FriendsList;