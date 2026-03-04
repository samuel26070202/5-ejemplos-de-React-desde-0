import { useState } from 'react'; 
function BotonLike() {

    const [likes, setLikes] = useState(0);


    const darLike = () => {
    setLikes(likes + 1); 
};
    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h2>Post: ¿La pizza con piña es buena? </h2>

    <button onClick={darLike} style={{ fontSize: '20px', padding:
    '10px' }}>
    Me gusta ({likes})
    </button>

    {likes > 10 && <p>¡Wow, esto se está volviendo viral!</p>}
</div>
);
}
export default BotonLike;