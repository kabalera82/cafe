/* fixed → se centra con left + transform
static/relative → se centra con mx-auto */
const Footer = () => {
    return (
        <footer className="
                           fixed bottom-2 left-1/2 -translate-x-1/2
                           w-[90vw] h-[10vh]
                           border-8 rounded-3xl
                           border-sky-400  bg-red-800
                           flex items-center justify-evenly
                           ">
            <p>Copyrigth React Router Dom</p>
            <p>Copyrigth React Router Dom</p>
            <p>Copyrigth React Router Dom</p>
        </footer>
    );
};

export default Footer; 