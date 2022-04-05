
const NavigationDots = ({active}) => {
  return (
    <div className="app__navigation">
        {
            ['home', 'about', 'work', 'skills', 'testimonials', 'contact']
            .map((item,index) => (
                    <a 
                    key={item-index}
                    className="app__navigation-dot"
                    href={`#${item}`} onClick={() => setToggle(false)}
                    // style={active == item ? {background: '#313BAC'} : {} }
                    >
                        {item}
                    </a>
            ))
        }
    </div>
  )
}

export default NavigationDots