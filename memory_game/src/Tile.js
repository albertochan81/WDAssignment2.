function Tile({item, id, whenClicked}) {
    const itemClass = item.stat ? " active " + item.stat : "" 
    return (
        <div className = {"tile" + itemClass} onClick ={() => whenClicked(id)}>
               <img src ={item.img} alt = ""/>
        </div>
    )
}
export default Tile;