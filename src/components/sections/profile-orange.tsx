import Image from 'next/image';

const ProfileOrange = () => {
  return (
    <div className="w-full overflow-hidden rounded-2xl md:rounded-3xl">
      <Image
        src="https://framerusercontent.com/images/3qtVdPHZrxX0iUrFxNINFkTAoY.png"
        alt="Side view silhouette of a person against a vibrant orange and red gradient background"
        width={1400}
        height={788}
        className="w-full h-auto object-cover"
      />
    </div>
  );
};

export default ProfileOrange;