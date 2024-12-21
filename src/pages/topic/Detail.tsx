/**
 * Elementos:
 * - Barra superior con botón "Volver".
 * - Muestra el tópico completo: texto, multimedia, autor, fecha.
 * - Muestra las opiniones dadas (en resumen con conteos o visualización tipo bar chart resumido).
 * - Botón para ver el mapa de respuestas.
 * - Sección de comentarios (estilo de conversación, con foto de perfil, nombre y comentario).
 * - Caja de texto para agregar un nuevo comentario.
 * Interacción:
 * - Pulsar en una opinión rápida agrega la reacción del usuario.
 * - Desplazarse para ver comentarios.
 * - Acceso a perfil del autor del tópico tocando su nombre/foto.
 * Mapa de respuestas:
 * Elementos:
 * - Barra superior con "Volver".
 * - Un mapa interactivo con pines o marcadores que representan la ubicación de cada usuario que ha respondido.
 * - Al tocar un marcador, se despliega breve info: tipo de opinión emitida por ese usuario.
 * - Posibilidad de filtrar por tipo de respuesta para ver la distribución geográfica.
 * Diseño:
 * - Mapa a pantalla completa con capa de resultados.
 * - Control de zoom, botón para centrar en la posición actual del usuario.
 */

import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import StatCard, { StatCardProps } from "../../components/StatCard";
import HighlightedCard from "../../components/HiglightedCard";
import SessionsChart from "../../components/SessionsChart";
import OpinionsBarChart from "../../components/OpinionsBarChart";
import CustomTreeView from "../../components/CustomTreeView";
import ChartUserByCountry from "../../components/ChartUserByCountry";

const data: StatCardProps[] = [
  {
    title: "Users viewing this topic",
    value: "14k",
    interval: "Last 30 days",
    trend: "up",
    data: [
      200, 24, 220, 260, 240, 380, 100, 240, 280, 240, 300, 340, 320, 360, 340,
      380, 360, 400, 380, 420, 400, 640, 340, 460, 440, 480, 460, 600, 880, 920,
    ],
  },
  {
    title: "Users making opinions in this topic",
    value: "325",
    interval: "Last 30 days",
    trend: "down",
    data: [
      1640, 1250, 970, 1130, 1050, 900, 720, 1080, 900, 450, 920, 820, 840, 600,
      820, 780, 800, 760, 380, 740, 660, 620, 840, 500, 520, 480, 400, 360, 300,
      220,
    ],
  },
  // {
  //   title: "Event count",
  //   value: "200k",
  //   interval: "Last 30 days",
  //   trend: "neutral",
  //   data: [
  //     500, 400, 510, 530, 520, 600, 530, 520, 510, 730, 520, 510, 530, 620, 510,
  //     530, 520, 410, 530, 520, 610, 530, 520, 610, 530, 420, 510, 430, 520, 510,
  //   ],
  // },
];

export default function OrdersPage() {
  return (
    <Box sx={{ display: "flex" }}>
      <Box
        component="main"
        sx={(theme) => ({
          flexGrow: 1,
          // backgroundColor: theme.vars
          //   ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
          //   : alpha(theme.palette.background.default, 1),
          overflow: "auto",
        })}
      >
        <Stack
          spacing={2}
          sx={{
            alignItems: "center",
            mx: 3,
            pb: 5,
            mt: { xs: 8, md: 0 },
          }}
        >
          <Box sx={{ width: "100%", maxWidth: { sm: "100%", md: "1700px" } }}>
            {/* cards */}
            <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
              Topic Overview
            </Typography>
            <Typography component="h3" variant="h6" sx={{ mb: 2 }}>
              What is the best time of the year to take vacations?
            </Typography>
            <Grid size={{ xs: 12, md: 6 }}>
              <OpinionsBarChart />
            </Grid>
            <Grid
              container
              spacing={2}
              columns={12}
              sx={{ mb: (theme) => theme.spacing(2) }}
            >
              {data.map((card, index) => (
                <Grid key={index} size={{ xs: 12, sm: 6, lg: 3 }}>
                  <StatCard {...card} />
                </Grid>
              ))}
            </Grid>
            <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
              Details
            </Typography>
            <Grid container spacing={2} columns={12}>
              <Grid size={{ xs: 12, lg: 6 }}>
                <Stack gap={2} direction={{ xs: "column", sm: "row" }}>
                  {/* <CustomTreeView /> */}
                  <ChartUserByCountry />
                </Stack>
              </Grid>
              <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                <HighlightedCard />
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <SessionsChart />
              </Grid>
            </Grid>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
