import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

export const LayoutPublic = () => {

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
