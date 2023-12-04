// next imports
import Image from "next/image";

// icons
import Github from "../../public/assets/icons/github.svg";
import Linkedin from "../../public/assets/icons/linkedin.svg";
import Portfolio from "../../public/assets/icons/portfolio.svg";

const TeamMemberCard = ({ member }) => {
  return (
    <div className="flex w-fit flex-col items-center justify-center">
      {/* Image */}
      <Image src={member?.image} width={200} height={200} alt="member image" />
      {/* Name */}
      <h3 className="text-[20px] font-bold text-center leading-5 mt-3">
        {member?.name}
      </h3>
      {/* Role */}
      <p className="text-[12px] mb-3">{member?.role}</p>
      {/* Icons */}
      <div className="flex items-baseline justify-center gap-3">
        <Image
          src={Github}
          width={20}
          height={20}
          alt="social media logo"
          className="w-full h-auto"
        />
        <Image
          src={Linkedin}
          width={20}
          height={20}
          alt="social media logo"
          className="w-full h-auto"
        />
        <Image
          src={Portfolio}
          width={20}
          height={20}
          alt="social media logo"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default TeamMemberCard;
