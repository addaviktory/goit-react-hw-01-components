import Profile from 'components/Profile/Profile';
import user from '../data/user';
import Statistics from 'components/Statistics/Statistics';
import data from '../data/data';
import FriendsList from './FriendsList/FriendsList';
import friends from 'data/friends';
import TransactionsTable from './TransactionsTable/TransactionsTable';
import transactions from 'data/transactions';

export const App = () => {
  return (
    <div
    className="container"
  >
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={data} />
    <FriendsList friends={friends} />
    <TransactionsTable transactions={transactions} />
  </div>
  );
};