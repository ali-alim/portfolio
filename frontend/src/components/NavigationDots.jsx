
const NavigationDots = ({active}) => (
    <div className="app__navigation">
        {
            ['home', 'about', 'work', 'skills', 'contact']
            .map((item,index) => (
                    <a 
                    key={item + index}
                    className="app__navigation-dot"
                    href={`#${item}`}
                    style={active === item ? {backgroundColor: '#313BAC'} : {} }
                    />
            ))}
    </div>
  )

export default NavigationDots;