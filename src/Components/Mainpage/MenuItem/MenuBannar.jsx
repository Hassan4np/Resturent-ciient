import Globanmenu from "./Globanmenu";


const MenuBannar = ({pic,name,dec}) => {
    return (
        <div>
              <div className="hero h-[800px]" style={{ backgroundImage: `url(${pic})` }}>
                <div className="hero-overlay "></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                       <Globanmenu title={name} des={dec}></Globanmenu>                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuBannar;