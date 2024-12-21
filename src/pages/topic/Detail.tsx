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

import Typography from "@mui/material/Typography";

export default function OrdersPage() {
  return <Typography>Welcome to a topic detail!</Typography>;
}
