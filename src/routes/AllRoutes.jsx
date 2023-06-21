import { Route, Routes } from 'react-router-dom';
import { About, Home, Projects } from '../pages';
import Template from './Template';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Template />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Route>
    </Routes>
  );
};

export default AllRoutes;
