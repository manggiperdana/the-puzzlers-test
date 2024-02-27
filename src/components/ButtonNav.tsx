export default function ButtonNav({ caption, isActive }: { caption: string; isActive: boolean }) {
  return (
    <>
      <button className={` ${isActive ? 'border border-black border-b-2 rounded-3xl hover:border-b hover:mb-[1px]':''} px-5 py-1 font-semibold`}>
        {caption}
      </button>
    </>
  );
}
