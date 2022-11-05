import NavBar from "./NavBar"

function Layout({ children }) {
    return (
        <div >
            {/* <NavBar /> */}
            {children}
            {/* <div id="#about">Footer</div> */}
        </div>
    )
}

export default Layout