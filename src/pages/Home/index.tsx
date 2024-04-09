import { CourseCard } from "@components";

export const HomeScreen = () => {
  return (
    <div className="p-4">
      Home Page
      <div className="flex flex-row items-center gap-10">
        <CourseCard
          banner="https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png"
          title="HTML CSS Pro"
          oldPrice={2500000}
          newPrice={1999000}
        />
        <CourseCard
          banner="https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png"
          title="Kiến Thức Nhập Môn IT"
          numberOfParticipant={125404}
          type="COURSE_FREE"
        />
      </div>
      <div className="flex flex-row items-center gap-10 mt-10">
        <CourseCard
          banner="https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png"
          title="Tổng hợp các sản phẩm của học viên tại F8"
          avatarAuthor="https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png"
          author="Thành Phúc"
          createAt="6 phút đọc"
          type="BLOG"
        />
        <CourseCard
          banner="https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png"
          title="Sinh viên IT đi thực tập tại doanh nghiệp cần biết những gì?"
          numberOfView={124900}
          numberOfLike={12399}
          numberOfComment={345}
          type="VIDEO"
        />
      </div>
    </div>
  );
};
