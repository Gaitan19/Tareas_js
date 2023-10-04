import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const MaTable = () => {
  const columns = [
    { title: "Artista", field: "artista" },
    { title: "Pais de origen", field: "pais" },
    {
      title: "Ventas",
      field: "ventas",
      type: "number",
    },
  ];

  const data = [
    { artista: "Snow", pais: "Jon", ventas: 35 },
    { artista: "Lannister", pais: "Cersei", ventas: 42 },
    { artista: "Lannister", pais: "Jaime", ventas: 45 },
    { artista: "Stark", pais: "Arya", ventas: 16 },
    { artista: "Targaryen", pais: "Daenerys", ventas: 200 },
    { artista: "Melisandre", pais: "lopez", ventas: 150 },
    { artista: "Clifford", pais: "Ferrara", ventas: 44 },
    { artista: "Frances", pais: "Rossini", ventas: 36 },
    { artista: "Roxie", pais: "Harvey", ventas: 65 },
  ];
  // const options = {
  //   filter: true,
  //   selectableRows: "multiple",
  //   filterType: "dropdown",
  //   responsive: "vertical",
  //   rowsPerPventas: 5,
  // };

  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default MaTable;
