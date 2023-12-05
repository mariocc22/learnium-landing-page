// next
import Image from "next/image";
import Link from "next/link";

// icons
import GithubIcon from "../../public/assets/icons/github.svg";
import LinkedinIcon from "../../public/assets/icons/linkedin.svg";
import PortfolioIcon from "../../public/assets/icons/portfolio.svg";

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
        {member?.github && (
          <Link href={member.github}>
            <Image
              src={GithubIcon}
              width={20}
              height={20}
              alt="Github icon"
              className="w-full h-auto"
            />
          </Link>
        )}
        {member?.linkedin && (
          <Link href={member.linkedin}>
            <Image
              src={LinkedinIcon}
              width={20}
              height={20}
              alt="LinkedIn icon"
              className="w-full h-auto"
            />
          </Link>
        )}
        {member?.portfolio && (
          <Link href={member.portfolio}>
            <Image
              src={PortfolioIcon}
              width={20}
              height={20}
              alt="Portfolio icon"
              className="w-full h-auto"
            />
          </Link>
        )}
      </div>
    </div>
  );
};

export default TeamMemberCard;
