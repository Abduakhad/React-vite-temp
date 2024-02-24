// rafce
import logo from "../../assets/images/no-image.jpg";
// import "./style.css";

const Header = () => {
    // const headerStyle = {
    //     backgroundColor: "#00f",
    //     padding: "20px 0",
    // };

    return (
        <header className='site-header bg-slate-700 py-10'>
            <div className='container'>
                <a className='site-header__logo' href='#'>
                    <img src={logo} width='100' alt='No image' />
                </a>
            </div>
        </header>
    );
};

export default Header;
