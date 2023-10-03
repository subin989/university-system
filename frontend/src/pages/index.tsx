import { NextPage } from "next";
import Layout from "../layouts/Layout";
import { axiosBackend } from "../utils/axios";
import { useState } from "react";
import BackgroundImage from "../components/Background/background";
import StudyDestination from "../components/Card/Card";
import StudyAbroadDiscussion from "components/DiscussionForm/Main";
import UniversityRecommendation from "components/Recommendation/UniversityRecommendation";
import EventsSection from "components/Events/Events";
import AppFooter from "components/Footer/Footer";
import useEffectUpdate from "hooks/useEffectUpdate";

type Task = {
  id: number;
  title: string;
  done: boolean;
  url: string;
};

const HomePage: NextPage = ({}) => {
  const [switcher, setSwitcher] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffectUpdate(() => {
    (async () => {
      try {
        const response = await axiosBackend.get("api/todo");
        setTasks(response.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [switcher]);

  const handleSwitcherChange = () => {
    setSwitcher(!switcher);
  };

  return (
    <>
      <BackgroundImage />
      <StudyDestination />
      <StudyAbroadDiscussion />
      <UniversityRecommendation />
      <EventsSection />
    </>
  );
};

HomePage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default HomePage;
