import { EllipsisHorizontalCircleIcon } from "@heroicons/react/24/solid";
import { DotsHorizontalIcon } from "@heroicons/react/outline";
import Image from "next/image";

function Trending({ result }) {
  return (
    <div className="hover:bg-white hover:bg-opacity-[0.03] px-4 py-2 cursor-pointer transition duration-200 ease-out flex items-center justify-between">
      <div className="space-y-3">
        <p className="text-[#6e767d] text-xs font-medium">{result.title}</p>
        <h6 className="font-bold max-w-[250px] text-sm ">
          {result.description}
        </h6>
        <p className="text-[#6e767d] text-xs font-medium max-w-[250px]">
          Trending with{" "}{result.tags}
          {/* {result.tags.map((tags, index) => (
            <span className="tag" key={index}>
              {tags}
            </span>
          ))} */}
        </p>
      </div>

      {result.img ? (
        <Image
          src={result.img}
          width={70}
          height={70}
          objectFit="cover"
          className="rounded-2xl"
        />
      ) : (
        <div className="icon group">
          <EllipsisHorizontalCircleIcon className="h-5 text-[#6e767d] group-hover:text-[#1d9bf0]" />
        </div>
      )}
    </div>
  );
}

export default Trending;