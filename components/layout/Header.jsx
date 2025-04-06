// components/layout/Header.js
import TopHeader from './TopHeader';
import MainHeader from './MainHeader';

export default function Header() {
  return (
    <header className="sticky-header">
      <TopHeader />
      <MainHeader />
    </header>
  );
}