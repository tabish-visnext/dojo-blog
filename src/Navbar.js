

const Navbar = () => {
    return ( 
        <div className="navbar">
            <h1>Dojo Blog Navbar</h1>
            <div className="links">
                <a href="/" style={{
                    color: "white",
                    backgroundColor: "blueviolet"
                }}
                >Home</a>
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: "blueviolet"
                }}
                >New Blog</a>
            </div>
        </div>
     );
}
 
export default Navbar;