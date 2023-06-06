import Feed from "@components/Feed";

const Home = () => {
    return (
        <section className="w-full flex-center flex-col">
            <h1 className="head_text text-center">
                Discover & Share
                <br className="max-md:hidden" />
                <span className="orange_gradient text-center">AI-Powered Prompts</span>
            </h1>
            <p className="desc text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo tenetur dolores eaque laborum accusamus totam ex enim quasi vero rerum saepe, ab fugit ad temporibus doloremque sapiente, cumque corporis voluptatibus.
            </p>
            {/* Feed  */}
            <Feed />
        </section>
    );
};

export default Home;