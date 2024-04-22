import { CourseCard } from "@components";
import {
  BLOG_DATA,
  COURSE_FREE_DATA,
  COURSE_PRO_DATA,
  VIDEO_DATA,
} from "./data";
import { CarouselSlider } from "./components";

export const HomeScreen = () => {
  return (
    <div className="pt-5">
      <CarouselSlider />
      <div className="flex items-center justify-center py-10">
        <div className="w-10/12">
          <div>
            <span className="text-xl font-bold text-black font-roboto">
              Khóa học Pro
            </span>
            <div className="gap-6 grid grid-cols-4 mt-3">
              {COURSE_PRO_DATA.map((item) => (
                <CourseCard
                  key={item.id}
                  className="w-ful h-full"
                  banner="https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png"
                  title={item.title}
                  newPrice={item.new_price}
                  oldPrice={item.old_price}
                />
              ))}
            </div>
          </div>
          <div className="mt-12">
            <div className="flex flex-grow justify-between items-center">
              <span className="text-xl font-bold text-black font-roboto">
                Khóa học miễn phí
              </span>
              <span className="text-sm text-price font-roboto underline decoration-1 cursor-pointer">
                Xem lộ trình
              </span>
            </div>
            <div className="gap-6 grid grid-cols-4 mt-3">
              {COURSE_FREE_DATA.map((item) => (
                <CourseCard
                  key={item.id}
                  type="COURSE_FREE"
                  className="w-ful h-full"
                  banner="https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png"
                  title={item.title}
                  numberOfParticipant={item.number_of_member}
                />
              ))}
            </div>
          </div>
          <div className="mt-12">
            <div className="flex flex-grow justify-between items-center">
              <span className="text-xl font-bold text-black font-roboto">
                Bài viết nổi bật
              </span>
              <span className="text-sm text-price font-roboto underline decoration-1 cursor-pointer">
                Xem tất cả
              </span>
            </div>
            <div className="gap-6 grid grid-cols-4 mt-3">
              {BLOG_DATA.map((item) => (
                <CourseCard
                  key={item.id}
                  type="BLOG"
                  className="w-ful h-full"
                  banner="https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png"
                  title={item.title}
                  avatarAuthor={item.avatar_author}
                  author={item.author}
                  createAt={item.create_at}
                />
              ))}
            </div>
          </div>
          <div className="mt-12">
            <div className="flex flex-grow justify-between items-center">
              <span className="text-xl font-bold text-black font-roboto">
                Videos nổi bật
              </span>
              <span className="text-sm text-price font-roboto underline decoration-1 cursor-pointer">
                Xem tất cả
              </span>
            </div>
            <div className="gap-6 grid grid-cols-4 mt-3">
              {VIDEO_DATA.map((item) => (
                <CourseCard
                  key={item.id}
                  type="VIDEO"
                  className="w-ful h-full "
                  banner="https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png"
                  title={item.title}
                  numberOfView={item.number_of_view}
                  numberOfLike={item.number_of_like}
                  numberOfComment={item.number_of_comment}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
