import { useState, useLayoutEffect , useRef} from 'react';

export const PokemonCard = ({id, name, sprites = []}) => {

  const h2Ref = useRef();

  const [boxSize, setBoxSize] = useState({width: 0, height: 0});

  useLayoutEffect(() => {
    
    const {height, width} = h2Ref.current.getBoundingClientRect();
    setBoxSize({height, width});

  }, [name])

  // useLayoutEffect(() => {
  //   h2Ref.current.style.color = getRandomColor();
  // }, [name]);

  // const getRandomColor = () => {
  //   const letters = '0123456789ABCDEF';
  //   let color = '#';
  //   for (let i = 0; i < 6; i++) {
  //     color += letters[Math.floor(Math.random() * 16)];
  //   }
  //   return color;
  // }

  return (
    <section style={{height: 200, display: 'flex', flexDirection: 'row'}}>
        <h2 ref={h2Ref} className='text-capitalize'>#{id} - {name}</h2>

        {/* imagenes */}
        <div>
            {
                sprites.map(sprite => (
                    <img key={sprite} src={sprite} alt={name} />
                ))
            }
        </div>

        <pre>
          {
            JSON.stringify(boxSize)
          }
        </pre>

    </section>
  )
}
