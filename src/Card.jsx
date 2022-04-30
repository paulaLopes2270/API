export const Card = ({ pokemon }) => {
  const { name, sprites } = pokemon
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        width: 200,
        height: 200,
        border: "1px solid black",
        padding: 20
      }}
    >
      <div style={{ display: "flex", gap: 10 }}>
        <img src={sprites.front_default} alt={`${name}-default`} />
        <img src={sprites.front_shiny} alt={`${name}-shine`} />
      </div>
      <h3 style={{ textAlign: "center" }}>{name}</h3>
    </div>
  )
}
