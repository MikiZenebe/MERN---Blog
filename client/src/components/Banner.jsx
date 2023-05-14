import banner from "../assets/banner.jpg";

export default function Banner() {
  return (
    <div>
      <section className="p-6 ">
        <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
          <div className="w-full px-6 py-8  rounded-md sm:px-12 md:px-16 xl:col-span-2 ">
            <span className="block mb-2  text-2xl">Daily Blog</span>
            <h1 className="text-5xl font-extrabold ">
              Join millions of others
            </h1>
            <p className="my-8">
              <span className="font-normal ">
                Whether sharing your expertise, breaking news, or whatever’s on
                your mind, you’re in good company on Blogger.
              </span>
            </p>
          </div>
          <img
            src={banner}
            alt=""
            className="object-cover lg:w-[700px] rounded-md xl:col-span-3 dark:bg-gray-500 "
          />
        </div>
      </section>
    </div>
  );
}
