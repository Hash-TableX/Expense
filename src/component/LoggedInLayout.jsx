import LoggedInHeader from './LoggedInHeader';
import LoggedInFooter from './LoggedinFooter';

function LoggedInLayout({ children }) {
  return (
    <>
      <LoggedInHeader />
      <main>{children}</main>
      <LoggedInFooter />
    </>
  );
}

export default LoggedInLayout;