import Link from "next/link";
import styles from "../../styles/Navbar.module.css";

const BackgroundImage = () => {
  return (
    <div className={`bg-cover bg-center ${styles.navbar}`}>
      <div className="bg-cover h-screen flex items-center justify-center text-center text-white relative">
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-4">Commence Your Study</h1>
          <p className="text-lg mb-8">
            Start your learning journey with us. Explore our courses and unlock
            your potential.
          </p>
          <Link
            href="/courses"
            className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600"
          >
            Explore Courses
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BackgroundImage;
