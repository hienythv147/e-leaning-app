import { IconComment, IconEye, IconLike, IconUsers } from "@assets/icons";
import { convertNumberOfInteraction, formatPrice } from "@utils";

interface CourseCardProps {
  banner: string;
  title: string;
  newPrice?: number;
  oldPrice?: number;
  numberOfParticipant?: number;
  numberOfView?: number;
  numberOfLike?: number;
  numberOfComment?: number;
  author?: string;
  avatarAuthor?: string;
  createAt?: string;
  type?: "COURSE_PRO" | "COURSE_FREE" | "BLOG" | "VIDEO";
  onClick?: () => void;
}

export const CourseCard = ({
  banner,
  title,
  newPrice = 0,
  oldPrice = 0,
  numberOfParticipant = 0,
  numberOfView = 0,
  numberOfLike = 0,
  numberOfComment = 0,
  author,
  avatarAuthor,
  createAt,
  type = "COURSE_PRO",
  onClick,
}: CourseCardProps) => {
  const isNewPrice = newPrice > 0 && newPrice !== oldPrice;
  return (
    <div
      className="max-w-sm rounded-lg overflow-hidden shadow-lg"
      onClick={onClick}
    >
      <img src={banner} alt="" className="w-full bg-gray-300" />
      <div className="px-4 py-3">
        <div className="font-medium text-black text-lg mb-2 line-clamp-2">
          {title}
        </div>
        {type === "COURSE_PRO" && (newPrice > 0 || oldPrice > 0) && (
          <div className="flex flex-row items-center">
            <span
              className={`text-black text-base ${
                isNewPrice ? "line-through" : ""
              }`}
            >
              {formatPrice(oldPrice)}
            </span>
            {isNewPrice && (
              <span className="text-price text-base ml-3">{formatPrice(newPrice)}</span>
            )}
          </div>
        )}
        {type === "COURSE_FREE" && (
          <div className="flex flex-row items-center">
            <IconUsers className="w-5 h-5 text-zinc-700" />
            <span className="text-zinc-700 ml-2 text-sm">
              {convertNumberOfInteraction(numberOfParticipant)}
            </span>
          </div>
        )}
        {type === "BLOG" && (
          <div className="flex flex-row items-center">
            <img src={avatarAuthor} alt="" className="w-6 h-6 rounded-2xl" />
            <span className="flex-1 mx-2 text-black text-sm line-clamp-1">
              {author}
            </span>
            <span className="text-sm text-zinc-700">{createAt}</span>
          </div>
        )}
        {type === "VIDEO" && (
          <div className="flex flex-row items-center">
            <div className="flex flex-row items-center w-4/12">
              <IconEye className="w-5 h-5 text-zinc-700" />
              <span className="ml-2 text-zinc-700 text-sm">
                {convertNumberOfInteraction(numberOfView)}
              </span>
            </div>
            <div className="flex flex-row items-center w-4/12">
              <IconLike className="w-5 h-5 text-zinc-700" />
              <span className="ml-2 text-zinc-700 text-sm">
                {convertNumberOfInteraction(numberOfLike)}
              </span>
            </div>
            <div className="flex flex-row items-center w-4/12">
              <IconComment className="w-5 h-5 text-zinc-700" />
              <span className="ml-2 text-zinc-700 text-sm">
                {convertNumberOfInteraction(numberOfComment)}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
