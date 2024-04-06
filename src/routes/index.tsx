import { Routes, Route } from "react-router-dom";
import { Blog, Course, HomeScreen, LearningPath } from "@pages";
import PATHS from "@config/paths";

const IndexRoutes = () => {
  return (
    <Routes>
      <Route path={PATHS.HOME} element={<HomeScreen />} />
      <Route path={PATHS.BLOG} element={<Blog />} />
      <Route path={PATHS.COURSE} element={<Course />} />
      <Route path={PATHS.LEARNING_PATH} element={<LearningPath />} />
    </Routes>
  );
};

export default IndexRoutes;
